# 🎹 Piano Tuner · Klavírní ladička

**A free piano tuner that runs in your browser — on a phone, tablet or computer.**
No install, no account, no ads. Works offline.

### 👉 [Open the tuner](https://tomkubak.github.io/WEB-Piano-Tuner-free)

🇨🇿 [Česká verze návodu](README.cs.md)

---

## What it can do

| | |
|---|---|
| ⚡ **Starts right away** | Open the page, allow the microphone, play a note. |
| 🎯 **Precise across the whole keyboard** | Pitch is computed from several partials and takes the string's inharmonicity into account — reliable in the deep bass and the high treble. |
| 🌀 **Partial strobe** | One spinning disc per partial. Still = in tune. Visible movement even at a tenth of a cent. |
| 📈 **Stretch tuning** | Targets calculated from the inharmonicity measured on *your* piano. Four tuning styles plus extra stretch for treble and bass. |
| 🎼 **Temperaments** | Equal, Pythagorean, Just, ¼-comma meantone, Werckmeister III, Kirnberger III, Kellner, Vallotti, Young II — with any tonic. |
| 📊 **Charts** | Sound spectrum, tuning curve with a dot for every tuned note, inharmonicity across the keyboard. |
| 🌍 **14 languages** | Čeština, Slovenčina, Polski, Deutsch, English, Français, Español, Italiano, Português, Nederlands, Українська, Русский, 日本語, 中文 |
| 📱 **Installable** | Add it to your home screen or Dock and use it like an app, even offline. |

---

## Quick start

1. Open the tuner and **allow the microphone**.
2. Put the phone on the music desk or close to the strings.
3. Play a note and let it ring. The dial shows the note and how many **cents** it is off.
4. Turn the tuning pin until the needle points to **0**, the lamp turns **green** and the strobe discs **stop**.

> 💡 Tune **one string at a time** — mute the other strings of the unison with a felt strip or rubber wedges.

---

## Guide to the features

### The dial and the display
- **Needle** — deviation from the target in cents (1 cent = 1/100 of a semitone). The centre of the scale is expanded, so the last 3 cents are easy to read. You can switch to a linear scale in *Needle › Expanded scale centre*.
- **Lamp** — green when you are within ±2 cents, amber up to ±6, red beyond.
- **Display under the dial** — the exact deviation, the measured frequency and the target frequency.
- **Hold reading** — after the note fades, the last value stays visible (dimmed) for the set time.

### Partial strobe 🌀
Three discs show the three strongest partials of the note (the number in the hub is the partial).
- **Clockwise** = too high, **counter-clockwise** = too low, **still** = in tune.
- Speed: about 20° per second for each cent, so even 0.1 cent is visible as a slow creep.
- When all discs stand still, the note is in tune exactly as the tuning curve wants.
- In the treble, the discs agree with each other only after the note's inharmonicity has been measured (see below).

### Note modes
The button between the arrows switches the mode:
- **Auto** — recognises any note you play.
- **Stepwise** — moves only to the neighbouring semitone. Ideal for tuning note by note: it follows you up or down and never jumps an octave in long sustains or noise.
- **Locked** — listens only for the chosen note. The most reliable choice in the deep bass.
- **◀ ▶** — move the selected note by a semitone.

### ♪ Reference tone
Plays the target pitch of the selected note (with its first three partials). While it plays, the tuner does not listen. Use headphones if you want to compare by ear.

### Charts
- **Spectrum** — what the microphone hears, with markers where the partials of the current note should be.
- **Curve** — the tuning curve (how far each target is from equal temperament) and a dot for every note you have played: green = in tune, amber/red = off. A great way to check the whole piano at a glance.
- **Inharmonicity** — measured values (dots) and the curve fitted through them.

### Settings
- **Language · Note names** — C D … B, German style with H, or Do Re Mi.
- **Temperament, tonic, reference pitch (A4)** — 415 to 466 Hz in 0.5 Hz steps.
- **Microphone sensitivity** — raise it if quiet notes are not detected, lower it in a noisy room.
- **Smoothing** — calms the needle; less smoothing = faster response.
- **Higher precision** — more thorough bass analysis; on by default on computers.

---

## How to tune with stretch 🎯

A real piano string is slightly stiff, so its upper partials are **sharper** than pure multiples of the fundamental (inharmonicity). If you tuned the fundamentals exactly to equal temperament, octaves would beat and the treble would sound flat. That is why every piano is tuned **stretched**: the treble a bit higher, the bass a bit lower. How much depends on the instrument — that is what the tuner measures.

**The needle already includes the stretch. You always tune to 0.**

### 1. Measure the piano (2–3 minutes)
1. Make sure **Measure inharmonicity** is on.
2. Mute the unisons, so that only **one string** sounds.
3. Play at least **7 notes from A0 to A6**, ideally every A and E♭ (D♯). Let each note ring for 2–3 seconds and play it 2–3 times.
4. Check the **Inharmonicity** chart: the dots should lie roughly along a smooth curve. A dot far off the curve? Play that note again, or use *Delete* and measure again.

### 2. Set up the stretch
1. Turn on **Stretch tuning**.
2. Choose a **Style**:
   - **Balanced · pure 12ths** — the default, suits most pianos.
   - **Small · pure octaves** — for small uprights or when you want a gentle stretch.
   - **Medium · double octaves** — a clear treble, close to the balanced style.
   - **Large · pure 19ths** — the most stretch; brilliant treble for concert grands.
3. Look at the **Curve** chart. A typical upright goes from about −20 cents at A0 to +30 cents at C8.
4. Optionally turn **Measure inharmonicity** off. The curve is then frozen and the targets won't shift slightly while you tune.

### 3. Tune
1. Switch to **Stepwise** mode.
2. Start with the **temperament octave** A3–A4 (or F3–F4).
3. Go **up** note by note to C8.
4. Then go **down** from the tenor to A0. In the bass, **Locked** mode is the most reliable.
5. For each note: tune one string to 0 (needle, lamp and strobe), then tune the other strings of the unison to it — by ear, or with the tuner while muting the rest.
6. At the end, open the **Curve** chart and check that all dots are green.

### Tips
- Does the treble sound too flat or too sharp to you? Adjust **Extra in the treble** (cents at C8, phased in over the top 16 notes). The same goes for the bass.
- Is the piano more than about 20–30 cents flat? Tune it **twice**: a quick rough pass first, then a fine one. The strings settle after a big pitch change.
- Measured inharmonicity and the dots stay saved in the browser. For a different piano, press *Delete* in both places.

---

## Install as an app
- **iPhone / iPad (Safari):** Share › Add to Home Screen
- **Mac (Safari):** File › Add to Dock
- **Chrome / Edge:** install icon in the address bar, or menu › Install

To avoid being asked every time, allow the microphone for the site permanently in the browser settings.

## Privacy 🔒
Microphone audio is processed **only on your device**. Nothing is recorded, uploaded or tracked. Settings are stored in your browser.

## For developers
A plain static site (`index.html`, `sw.js`, manifests and icons) with no build step and no dependencies. It needs HTTPS for microphone access — GitHub Pages and Netlify both provide it. Pull requests and translation fixes are welcome.

## License
[MIT](LICENSE) — free to use, modify and share.
