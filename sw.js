// Klavírní ladička: offline režim.
// Stránka se bere nejdřív ze sítě (nová verze z Netlify se projeví hned), bez sítě z uložené kopie.
// Písma Google Fonts se uloží při instalaci a pak se berou z mezipaměti.
const CACHE = "ladicka-v5";
const APP = ["./", "index.html", "manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-512.png"];
const FONT_CSS = "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&display=swap";

async function cacheFonts(cache) {
  try {
    const res = await fetch(FONT_CSS, { mode: "cors" });
    if (!res.ok) return;
    const css = await res.clone().text();
    await cache.put(FONT_CSS, res);
    // latinka a cyrilice (čeština, polština, ruština, ukrajinština…); japonština a čínština používají písma systému
    const urls = [];
    for (const block of css.split("/* ").slice(1)) {
      const label = block.slice(0, block.indexOf(" */"));
      if (["latin", "latin-ext", "cyrillic", "cyrillic-ext"].indexOf(label) < 0) continue;
      const m = block.match(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/);
      if (m) urls.push(m[1]);
    }
    await Promise.all(urls.map(u => fetch(u, { mode: "cors" }).then(r => r.ok ? cache.put(u, r) : 0).catch(() => {})));
  } catch (e) {}
}

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(async c => { await c.addAll(APP); await cacheFonts(c); }).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(caches.match(req, { ignoreVary: true }).then(hit => hit || fetch(req).then(res => {
      if (res.ok || res.type === "opaque") { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    })));
    return;
  }
  if (url.origin !== location.origin) return;
  e.respondWith(fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  }).catch(() => caches.match(req, { ignoreSearch: true }).then(hit => hit || caches.match("index.html"))));
});
