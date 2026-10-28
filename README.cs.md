# 🎹 Klavírní ladička · Piano Tuner

**Ladička klavíru zdarma, která běží přímo v prohlížeči — na telefonu, tabletu i počítači.**
Bez instalace, bez účtu, bez reklam. Funguje i offline.

### 👉 [Otevřít ladičku](https://tomkubak.github.io/WEB-Piano-Tuner-free)

🇬🇧 [English version](README.md)

---

## Co umí

| | |
|---|---|
| ⚡ **Ladí hned** | Otevřeš stránku, povolíš mikrofon, zahraješ notu. |
| 🎯 **Přesná po celé klaviatuře** | Výška se počítá z několika parciálů a bere v úvahu inharmonicitu struny — spolehlivá v hlubokých basech i ve výškách. |
| 🌀 **Stroboskop parciálů** | Pro každý parciál jeden kotouč. Stojí = naladěno. Pohyb je vidět už při desetině centu. |
| 📈 **Stretch ladění** | Cíle spočítané z inharmonicity naměřené na *tvém* klavíru. Čtyři styly a navíc stretch ve výškách a basech. |
| 🎼 **Temperamenty** | Rovnoměrná, pythagorejská, čistá, středotónová ¼ koma, Werckmeister III, Kirnberger III, Kellner, Vallotti, Young II — s libovolnou tónikou. |
| 📊 **Grafy** | Spektrum zvuku, křivka ladění s bodem pro každou naladěnou notu, inharmonicita po celé klaviatuře. |
| 🌍 **14 jazyků** | Čeština, Slovenčina, Polski, Deutsch, English, Français, Español, Italiano, Português, Nederlands, Українська, Русский, 日本語, 中文 |
| 📱 **Jako aplikace** | Přidáš si ji na plochu nebo do Docku a používáš jako aplikaci, i bez internetu. |

---

## Rychlý start

1. Otevři ladičku a **povol mikrofon**.
2. Polož telefon na pult nebo blízko ke strunám.
3. Zahraj notu a nech ji znít. Ciferník ukáže notu a o kolik **centů** je vedle.
4. Otáčej ladicím kolíkem, dokud ručička neukazuje **0**, kontrolka nesvítí **zeleně** a kotouče stroboskopu **nestojí**.

> 💡 Laď **vždy jednu strunu** — ostatní struny unisona ztlum filcovým páskem nebo gumovými klínky.

---

## Návod k funkcím

### Ciferník a displej
- **Ručička** — odchylka od cíle v centech (1 cent = setina půltónu). Střed stupnice je zvětšený, takže poslední 3 centy jsou dobře čitelné. Lineární stupnici zapneš v *Ručička › Zvětšený střed stupnice*.
- **Kontrolka** — zelená do ±2 centů, jantarová do ±6, dál červená.
- **Displej pod ciferníkem** — přesná odchylka, naměřená a cílová frekvence.
- **Držení hodnoty** — po doznění tónu zůstane poslední hodnota ztlumeně vidět po nastavenou dobu.

### Stroboskop parciálů 🌀
Tři kotouče ukazují tři nejsilnější parciály noty (číslo v náboji je číslo parciálu).
- **Doprava** = vysoko, **doleva** = nízko, **stojí** = naladěno.
- Rychlost je asi 20° za sekundu na každý cent, takže i 0,1 centu je vidět jako pomalé stáčení.
- Když stojí všechny kotouče, nota sedí přesně tak, jak chce křivka ladění.
- Ve výškách se kotouče shodnou až po změření inharmonicity noty (viz níže).

### Režimy noty
Tlačítko mezi šipkami přepíná režim:
- **Auto** — pozná jakoukoli zahranou notu.
- **Krokově** — přejde jen na sousední půltón. Ideální pro ladění nota po notě: jde s tebou nahoru i dolů a při dlouhém doznívání nebo v hluku nepřeskočí o oktávu.
- **Zamčeno** — poslouchá jen zvolenou notu. V hlubokých basech nejspolehlivější.
- **◀ ▶** — posun zvolené noty o půltón.

### ♪ Referenční tón
Zahraje cílovou výšku zvolené noty (s prvními třemi parciály). Během přehrávání ladička neposlouchá. Pro porovnání sluchem použij sluchátka.

### Grafy
- **Spektrum** — co slyší mikrofon, se značkami, kde mají ležet parciály znějící noty.
- **Křivka** — křivka ladění (o kolik je každý cíl od rovnoměrného ladění) a bod pro každou zahranou notu: zelený = naladěno, jantarový nebo červený = vedle. Přehled o celém klavíru na jeden pohled.
- **Inharmonicita** — naměřené hodnoty (body) a křivka jimi proložená.

### Nastavení
- **Jazyk a názvy not** — C D … H (B = B♭), C D … B, nebo Do Re Mi.
- **Temperament, tónika, ladicí tón A4** — od 415 do 466 Hz po 0,5 Hz.
- **Citlivost mikrofonu** — zvyš, když ladička neslyší tiché tóny, sniž v hlučné místnosti.
- **Vyhlazení** — uklidní ručičku; méně vyhlazení = rychlejší reakce.
- **Vyšší přesnost** — důkladnější analýza basů; na počítači zapnutá sama.

---

## Jak ladit se stretchem 🎯

Skutečná struna je trochu tuhá, a proto jsou její vyšší parciály o něco **výš**, než by odpovídalo přesným násobkům základního tónu (inharmonicita). Kdybys základní tóny naladil přesně podle rovnoměrného ladění, oktávy by se rázovaly a výšky by zněly podladěně. Proto se každý klavír ladí **roztaženě**: výšky trochu výš, basy trochu níž. O kolik, záleží na nástroji — a to ladička změří.

**Ručička už stretch obsahuje. Vždycky ladíš na 0.**

### 1. Změř klavír (2–3 minuty)
1. Zkontroluj, že je zapnuté **Měřit inharmonicitu**.
2. Ztlum unisona, aby zněla vždy jen **jedna struna**.
3. Zahraj aspoň **7 not od A0 po A6**, ideálně všechna A a Es (D♯). Každou nech znít 2–3 sekundy a zahraj ji 2–3×.
4. Podívej se na graf **Inharmonicita**: body by měly ležet zhruba na hladké křivce. Je nějaký bod hodně mimo? Zahraj tu notu znovu, nebo dej *Smazat* a změř znovu.

### 2. Nastav stretch
1. Zapni **Stretch ladění**.
2. Vyber **Styl**:
   - **Vyvážený · čisté duodecimy** — výchozí, sedí většině klavírů.
   - **Malý · čisté oktávy** — pro malá pianina, nebo když chceš jemný stretch.
   - **Střední · dvojité oktávy** — jasné výšky, blízko vyváženého stylu.
   - **Velký · čisté 19** — nejvíc stretche; zářivé výšky pro koncertní křídla.
3. Podívej se na graf **Křivka**. Typické pianino vychází zhruba od −20 centů na A0 po +30 centů na C8.
4. Případně vypni **Měřit inharmonicitu**. Křivka se tím zamkne a cíle se během ladění nebudou nepatrně posouvat.

### 3. Laď
1. Přepni na režim **Krokově**.
2. Začni **temperamentovou oktávou** A3–A4 (nebo F3–F4).
3. Pokračuj nota po notě **nahoru** až po C8.
4. Pak od tenoru **dolů** až po A0. V basech je nejspolehlivější režim **Zamčeno**.
5. U každé noty nalaď jednu strunu na 0 (ručička, kontrolka i stroboskop), pak k ní dolaď ostatní struny unisona — sluchem, nebo ladičkou se ztlumením ostatních.
6. Nakonec otevři graf **Křivka** a zkontroluj, že jsou všechny body zelené.

### Tipy
- Zní ti výšky moc nízko nebo moc vysoko? Uprav **Navíc ve výškách** (centy na C8, náběh přes horních 16 not). Stejně to funguje pro basy.
- Je klavír podladěný o víc než 20–30 centů? Nalaď ho **dvakrát**: nejdřív rychle nahrubo, pak načisto. Struny se po velké změně napětí usadí.
- Naměřená inharmonicita i body zůstávají uložené v prohlížeči. U jiného klavíru dej na obou místech *Smazat*.

---

## Instalace jako aplikace
- **iPhone / iPad (Safari):** Sdílet › Přidat na plochu
- **Mac (Safari):** Soubor › Přidat do Docku
- **Chrome / Edge:** ikona instalace v adresním řádku, nebo menu › Nainstalovat

Aby se prohlížeč neptal pokaždé, povol mikrofon pro stránku natrvalo v nastavení prohlížeče.

## Soukromí 🔒
Zvuk z mikrofonu se zpracovává **jen v tvém zařízení**. Nic se nenahrává, neodesílá ani nesleduje. Nastavení se ukládá v prohlížeči.

## Pro vývojáře
Obyčejný statický web (`index.html`, `sw.js`, manifesty a ikony) bez sestavování a bez závislostí. Kvůli mikrofonu potřebuje HTTPS — GitHub Pages i Netlify ho mají. Pull requesty a opravy překladů jsou vítané.

## Licence
[MIT](LICENSE) — volně k použití, úpravám i sdílení.
