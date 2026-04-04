# GUEPARDO.COM.MX — Complete Design Extraction
**Source:** https://guepardo.com.mx/  
**Built with:** Framer (generator: `84a2f33`)  
**Extracted:** 2026-04-03  

---

## 1. SITE METADATA

| Field | Value |
|-------|-------|
| Title | GUEPARDO |
| Description | Un espacio donde la noche se disfruta: cócteles sin pretensiones, música sin límites y ambiente sin juicios. Guepardo no sigue tendencias, las define. Sao Paulo, Providencia. Guadalajara, Jalisco. |
| Language | `es` |
| Canonical | https://guepardo.com.mx/ |
| OG Image | https://framerusercontent.com/images/7zclPfXoPcT4ZPUgYg891xVBrQ.png |
| Favicon (light) | https://framerusercontent.com/images/hzU2IHJz3Kt3Xdg7B0dIY9argCU.png |
| Favicon (dark) | https://framerusercontent.com/images/LatSzzeA4vZv28TS4k43Rqs9wkY.png |

---

## 2. DESIGN TOKENS & COLORS

### Color Palette

| Token / Variable | Value | Usage |
|-----------------|-------|-------|
| `--token-316bc91b-...` | `rgb(253, 230, 186)` → **#FDE6BA** | Cream/gold — rotating text, logo color fill |
| Background | `#ffffff` / `rgb(255, 255, 255)` | Page background, social buttons |
| Black | `rgb(0, 0, 0)` / `#000` | Footer background |
| White | `rgb(255, 255, 255)` / `#fff` | Footer text, logo SVG, border |
| Link color | `rgb(0, 153, 255)` | Framer link default (not visually prominent) |
| Footer border | `rgb(255, 255, 255)` | 1px bottom border on Infos row |

**Summary:** The site is extremely minimal — essentially only 3 colors: **black** (`#000000`), **white** (`#ffffff`), and the brand cream/gold **#FDE6BA**.

---

## 3. TYPOGRAPHY

### Font 1: MADE TOMMY ExtraBold (Custom — Framer CDN)
- **Font file:** `https://framerusercontent.com/assets/DnSCsepHUVEHX6ZOy9knwWieSo.woff2`
- **@font-face name:** `MADE TOMMY ExtraBold`
- **Placeholder fallback:** `Arial` (with metric overrides: ascent 89.42%, descent 23.29%, line-gap 2.56%, size-adjust 109.48%)
- **Usage:** Circular rotating text ("RESERVACIONES - RESERVACIONES -")
- **Font size:** `12px`
- **Letter spacing:** `0.21em`
- **Line height:** `0.1em`
- **Color:** `rgb(253, 230, 186)` (cream/gold `#FDE6BA`)
- **Word spacing:** `2px`

### Font 2: Editorial New Regular (Custom — Framer internal)
- **Font selector (base64):** `Q1VTVE9NO0VkaXRvcmlhbCBOZXcgUmVndWxhcg==` → decodes to `CUSTOM;Editorial New Regular`
- **CSS family string:** `"CUSTOM;Editorial New Regular", sans-serif`
- **Note:** This is a Framer-hosted custom font. You need to either obtain a license for Editorial New (by Pangram Pangram) or use a substitute like **Playfair Display** or **DM Serif Display** as fallback.
- **Usages:**

| Element | Font size | Letter spacing | Alignment | Color |
|---------|-----------|----------------|-----------|-------|
| Address (desktop) | `14px` | `0.1em` | right | `#ffffff` |
| Address (mobile) | `10px` | `0.1em` | right | `#ffffff` |
| Copyright (desktop) | `12px` | `0.02em` | center | `#ffffff` |
| Copyright (mobile) | `6px` | `0.02em` | center | `#ffffff` |

---

## 4. PAGE STRUCTURE & LAYOUT

The page has **2 sections** (plus a footer component):

### Section 1: Hero (`framer-1ifssjc`)
- **Height:** `85.5vh` (full viewport — almost full screen hero)
- **Width:** `100%`
- **Overflow:** `clip`
- **Position:** `relative`

### Section 2: Reservations / Booking (`framer-k63jxo`)
- **Display:** `flex`, `column`
- **Width:** `100%`
- **Height:** `min-content`
- **justify-content:** `space-around`
- **Overflow:** `clip`

### Footer (`framer-lfis60-container`, component `framer-Obzbf`)
- **Width:** `100%`
- **Position:** relative, `z-index: 1`
- **Height:** auto

---

## 5. RESPONSIVE BREAKPOINTS

| Breakpoint hash | Media query | Applied class |
|-----------------|------------|---------------|
| `72rtr7` | `(min-width: 1200px)` | Desktop |
| `1082x8e` | `(max-width: 1199px)` | Mobile/Phone (390px wide) |

**Desktop canvas width:** `1200px`  
**Mobile canvas width:** `390px`

---

## 6. SECTION-BY-SECTION DETAILS

---

### SECTION 1: HERO

**Container:** `.framer-iJvjv.framer-72rtr7`
```css
align-content: center;
align-items: center;
background-color: #ffffff;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
gap: 0px;
height: min-content;
justify-content: flex-start;
overflow: clip;
padding: 0px;
position: relative;
width: 1200px; /* 390px on mobile */
```

**Hero frame:** `.framer-1ifssjc`
```css
flex: none;
height: 85.5vh;
overflow: clip;
position: relative;
width: 100%;
/* Mobile: becomes flex column with gap:10, centered */
```

**Background image (full bleed hero):**
- URL: `https://framerusercontent.com/images/cRJucnoDQyfmHd8B5i1WLyGAds.png`
- Dimensions: `1920 × 1080`
- Fit: `cover`, object-position: `center`
- Sizes: `100vw` (both breakpoints)

**Decorative Sunburst/Sol element (DESKTOP only):** `.framer-1n6veqy`
```css
aspect-ratio: 0.9817 / 1;
height: 1222px;
left: 1px; right: 0px;
top: -269px;
overflow: visible;
position: absolute;
will-change: transform; /* animated */
```
- URL: `https://framerusercontent.com/images/vHK23xtP5rPOZ00To0b9BBTA9sk.png`
- Dimensions: `1982 × 2019`
- Animation: starts rotated 180deg, springs to 0deg on page load
- Transition: `spring { bounce: 0.2, delay: 0, duration: 10s }`

**Decorative Sunburst/Sol element (MOBILE):** `.framer-p9ewuq`
```css
aspect-ratio: 0.9817 / 1;
height: 721px;
left: -147px; right: -146px;
top: -22px;
overflow: hidden;
position: absolute;
will-change: transform;
```
- Same image, same spring animation

**Rotating text ring container:** `.framer-30ei2y-container`
```css
bottom: -45px; /* -55px on mobile */
height: 140px;
left: calc(49.83% - 70px);
position: absolute;
width: 140px;
will-change: transform;
z-index: 1;
```
- SVG circular text path: `viewBox="0 0 100 100"`, `d="M 0 50 L 0 50 A 1 1 0 0 1 100 50 L 100 50 L 100 50 A 1 1 0 0 1 0 50 L 0 50"` (ellipse/circle)
- Text: `"RESERVACIONES - RESERVACIONES -"` (repeating)
- Font: `MADE TOMMY ExtraBold`, 12px, letter-spacing 0.21em, line-height 0.1em
- Color: `rgb(253, 230, 186)` — the cream/gold token
- Animation: `rotate: true`, `rotateSpeed: 10` (continuously spinning)
- `dominant-baseline: Hanging`, `startOffset: 0`, `wordSpacing: 2px`

**Scroll arrow icon:** `.framer-1we6yiq-container`
```css
bottom: 16px; /* 18px mobile */
height: 32px;
left: calc(49.83% - 16px);
position: absolute;
width: 32px;
z-index: 1; /* z-index: 2 on mobile */
```
- Icon: Phosphor icon `ArrowDown`, weight `light`
- Color: `rgb(253, 230, 186)` (cream/gold)
- Animation: **loop mirror** — bounces up/down
  - Initial: `y: -8, opacity: 1`
  - Transition: `duration: 1.6s, ease: [0.44, 0, 0.56, 1], type: tween`
  - Loop: `repeat: mirror, repeatDelay: 0`

**GUEPARDO Logo (center of hero):** `.framer-1xcikju`
- Framer name: `"GUEPARDO EDITABLE_LOGOS_Crema"`
```css
aspect-ratio: 1 / 1;
height: 229px;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
width: 229px;
overflow: visible;
position: absolute;
```
- URL: `https://framerusercontent.com/images/JcoRajfXmJzl6v062ipC7NFbQ.png`
- Pixel dimensions: `5000 × 5000`
- Displayed at `229 × 229px`
- Fit: `cover`, object-position: `center`

---

### SECTION 2: RESERVATIONS

**Container:** `.framer-k63jxo`
```css
align-content: center;
align-items: center;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
height: min-content;
justify-content: space-around;
overflow: clip;
padding: 0px;
position: relative;
width: 100%;
```

**Background image:**
- URL: `https://framerusercontent.com/images/1ZVOIxXUomyHmBCeVLNuTFiKas.png`
- Dimensions: `1920 × 1080`
- Fit: `fill`, covers full section
- Position: absolute, `border-radius: inherit`

**GUEPARDO Circular Logo (top of section, DESKTOP):** `.framer-gb0qmg`
```css
aspect-ratio: 2.3745 / 1;
height: 117px;
mix-blend-mode: hard-light;
overflow: visible;
position: relative;
width: 277px;
z-index: 1;
```
- URL: `https://framerusercontent.com/images/wobrYrPfGer9jWg5VNU4tOBcRg.png`
- Pixel dimensions: `653 × 275`
- Mobile: `139 × 59px` (left side) and `138 × 58px` (right side, rotated 180deg)

**CoverManager Reservation Widget:** `.framer-17lbhlz-container`
```css
flex: none;
height: auto;
min-width: 300px;
mix-blend-mode: multiply;
position: relative;
width: 50%;
```
- Embedded as `<iframe>` with `srcdoc`
- Inner iframe src: `https://www.covermanager.com/reserve/module_restaurant/restaurante-guepardo/spanish`
- Restaurant ID: `restaurante-guepardo`
- iframeResizer script: `https://www.covermanager.com/js/iframeResizer/iframeResizer.min.js`
- Allow: `payment`
- Inner height: `550px`, width: `100%`
- blend-mode: `multiply` (so widget background blends with section background)

**GUEPARDO Circular Logo (bottom of section, inverted/rotated 180deg, DESKTOP):** `.framer-x22l6h`
- Same image as top, but `transform: rotate(180deg)`
- Same CSS as `.framer-gb0qmg`

---

### FOOTER (`framer-Obzbf`)

**DESKTOP layout** (class: `framer-v-oq8fnf`, width: `1440px`)

```css
/* Outer footer */
background-color: rgb(0, 0, 0);
width: 1440px; /* 810px on tablet, 390px on phone */
align-content: center;
align-items: center;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
gap: 24px;
height: min-content;
justify-content: flex-end;
overflow: hidden;
padding: 80px 80px 16px 80px;
position: relative;
```

**Infos row:** `.framer-1uve60l`
```css
align-content: center;
align-items: center;
display: flex;
flex-direction: row; /* column on mobile */
flex-wrap: nowrap;
gap: 48px;
height: min-content;
justify-content: center;
max-width: 1280px;
overflow: hidden;
padding: 0px 24px 24px 24px; /* 0px 16px 24px 16px on mobile */
position: relative;
width: 100%;
/* Border: 1px solid white — BOTTOM only */
--border-bottom-width: 1px;
--border-color: rgb(255, 255, 255);
--border-top-width: 0px;
--border-left-width: 0px;
--border-right-width: 0px;
--border-style: solid;
```

**Logo column:** `.framer-10qyjyj`
```css
align-content: flex-start;
align-items: flex-start; /* center on mobile */
align-self: stretch; /* unset on mobile */
display: flex;
flex-direction: column;
flex-wrap: nowrap;
gap: 4px;
height: auto; /* min-content on mobile */
justify-content: flex-start; /* center on mobile */
overflow: hidden;
padding: 0px;
position: relative;
width: 280px; /* 100% on mobile */
```

**GUEPARDO SVG Wordmark:** `.framer-jbyd1i`
```css
height: 35px;
position: relative;
width: 255px;
```
- Inline SVG, `viewBox="0 0 254.974 35.03"`, `overflow="visible"`
- Fill: `rgb(255, 255, 255)` (white)
- Spells out "GUEPARDO" as custom hand-crafted SVG paths
- Plus a 4-pointed star/asterisk shape at the end (the brand mark)
- Star path: `M 244.629 17.938 C 240.973 18.169 238.043 22.499 237.888 27.932 C 237.732 22.525 234.802 18.194 231.146 17.938 C 234.802 17.707 237.732 13.377 237.888 7.944 C 238.043 13.351 240.973 17.682 244.629 17.938 Z`

**Social links column:** `.framer-53nhqr`
```css
align-content: flex-end;
align-items: flex-end; /* center on mobile */
display: flex;
flex: 1 0 0px;
flex-direction: column;
flex-wrap: nowrap;
gap: 10px;
height: min-content;
justify-content: center;
overflow: hidden;
padding: 0px;
position: relative;
width: 1px; /* 100% on mobile */
```

**Social buttons row:** `.framer-bawu0m`
```css
align-content: center;
align-items: center;
display: flex;
flex-direction: row;
gap: 10px;
height: min-content;
justify-content: flex-end; /* center on mobile */
padding: 0px 0px 16px 0px;
position: relative;
width: 100%;
```

**Individual social button links (WhatsApp, Instagram, Google Maps):**
`.framer-4wvsls`, `.framer-7fj2es`, `.framer-9gete4`
```css
align-content: center;
align-items: center;
display: flex;
flex-direction: row;
gap: 10px;
height: 32px; /* 24px on mobile */
justify-content: center;
overflow: hidden;
padding: 6px;
position: relative;
width: 32px; /* 24px on mobile */
background-color: rgb(255, 255, 255);
border-radius: 100px; /* fully circular */
will-change: transform;
```

**Social link URLs:**
- WhatsApp: `https://wa.me/523320559502`
- Instagram: `https://www.instagram.com/guepardo.mx/`
- Google Maps: `https://share.google/5w7rQSpzuIE2nsGY2`

**Address text:** `.framer-1goxzih`
```
Font: "CUSTOM;Editorial New Regular", sans-serif
Size: 14px (10px mobile)
Letter-spacing: 0.1em
Alignment: right
Color: rgb(255, 255, 255)
Content: "São Paulo 2367-int. 6, Providencia, 44630 Guadalajara, Jal."
```

**Logo/Copyright row:** `.framer-107imdj`
```css
align-content: center;
align-items: center;
display: flex;
flex-direction: row; /* column on mobile */
gap: 24px;
height: min-content;
justify-content: center;
max-width: 1280px;
overflow: hidden;
padding: 12px 24px 16px 24px;
position: relative;
width: 100%;
```

**Mandala Group logo link:** `.framer-1nkr57b`
```css
align-content: center;
align-items: center;
display: flex;
gap: 10px;
height: min-content;
overflow: hidden;
padding: 0px;
text-decoration: none;
width: 20%; /* 30% tablet, 60% mobile */
```
- URL link: `https://mandalagroup.mx/`
- Opens in new tab

**Mandala Group logo image:** `.framer-31d3mn`
```css
aspect-ratio: 5.136 / 1;
flex: 1 0 0px;
height: 48px; /* 35px tablet, 36px mobile */
```
- Image URL: `https://framerusercontent.com/images/iXyETh9yrMzH1DzK3sgd4T4yXA.png`
- Pixel dimensions: `442 × 84`

**Copyright text:** `.framer-1v123nh`
```
Font: "CUSTOM;Editorial New Regular", sans-serif
Size: 12px (desktop/tablet), 6px (mobile)
Letter-spacing: 0.02em
Alignment: center
Color: rgb(255, 255, 255)
Content: "Copyright ® 2024 Mandala Group."
```

**Footer responsive variants:**
- Desktop: `framer-v-oq8fnf` (1440px wide)
- Tablet: `framer-v-vicsur` (810px wide)
- Mobile/Phone: `framer-v-3vdiss` (390px, padding 80px 16px 16px 16px)

---

## 7. ALL IMAGE ASSETS

| Filename | Full URL | Pixel Dimensions | Usage |
|----------|----------|-----------------|-------|
| cRJucnoDQyfmHd8B5i1WLyGAds.png | https://framerusercontent.com/images/cRJucnoDQyfmHd8B5i1WLyGAds.png | 1920×1080 | Hero section background image |
| vHK23xtP5rPOZ00To0b9BBTA9sk.png | https://framerusercontent.com/images/vHK23xtP5rPOZ00To0b9BBTA9sk.png | 1982×2019 | Decorative sunburst (desktop: 1222px tall, mobile: 721px) — animated |
| JcoRajfXmJzl6v062ipC7NFbQ.png | https://framerusercontent.com/images/JcoRajfXmJzl6v062ipC7NFbQ.png | 5000×5000 | Main GUEPARDO logo (cream colored, centered on hero) |
| 1ZVOIxXUomyHmBCeVLNuTFiKas.png | https://framerusercontent.com/images/1ZVOIxXUomyHmBCeVLNuTFiKas.png | 1920×1080 | Reservations section background |
| wobrYrPfGer9jWg5VNU4tOBcRg.png | https://framerusercontent.com/images/wobrYrPfGer9jWg5VNU4tOBcRg.png | 653×275 | GUEPARDO circular logo banner (top & bottom of reservations, mix-blend-mode: hard-light) |
| iXyETh9yrMzH1DzK3sgd4T4yXA.png | https://framerusercontent.com/images/iXyETh9yrMzH1DzK3sgd4T4yXA.png | 442×84 | Mandala Group logo (footer) |
| hzU2IHJz3Kt3Xdg7B0dIY9argCU.png | https://framerusercontent.com/images/hzU2IHJz3Kt3Xdg7B0dIY9argCU.png | — | Favicon (light mode) |
| LatSzzeA4vZv28TS4k43Rqs9wkY.png | https://framerusercontent.com/images/LatSzzeA4vZv28TS4k43Rqs9wkY.png | — | Favicon (dark mode) |
| 7zclPfXoPcT4ZPUgYg891xVBrQ.png | https://framerusercontent.com/images/7zclPfXoPcT4ZPUgYg891xVBrQ.png | — | Open Graph / Twitter card image |

**Font file:**
| File | URL |
|------|-----|
| MADE TOMMY ExtraBold | https://framerusercontent.com/assets/DnSCsepHUVEHX6ZOy9knwWieSo.woff2 |

---

## 8. ANIMATIONS

### 1. Sunburst Rotation (on page load)
- **Element:** `.framer-1n6veqy` (desktop) / `.framer-p9ewuq` (mobile)
- **Type:** Spring animation
- **Initial state:** `rotate: 180deg, opacity: 1`
- **Final state:** `rotate: 0deg, opacity: 1`
- **Transition:** `{ type: "spring", bounce: 0.2, delay: 0, duration: 10 }`
- **Framer Motion equivalent:**
```jsx
<motion.div
  initial={{ rotate: 180 }}
  animate={{ rotate: 0 }}
  transition={{ type: "spring", bounce: 0.2, duration: 10 }}
/>
```

### 2. Rotating Circular Text Ring
- **Element:** `.framer-30ei2y-container`
- **Type:** Infinite SVG rotation
- **Text on circular path:** `"RESERVACIONES - RESERVACIONES -"`
- **Speed:** `rotateSpeed: 10` (100 / speed = 10s per revolution)
- **Framer Arc component config:**
  - `rotate: true`
  - `rotateSpeed: 10`
  - `type: "circle"`
  - `animate: false` (startOffset animation disabled)
- **SVG path:** Circular `d="M 0 50 L 0 50 A 1 1 0 0 1 100 50 L 100 50 L 100 50 A 1 1 0 0 1 0 50 L 0 50"` (circle on 100×100 viewBox)
- **Framer Motion equivalent:**
```jsx
<motion.svg
  animate={{ rotate: 360 }}
  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
>
  <textPath ...>RESERVACIONES - RESERVACIONES -</textPath>
</motion.svg>
```

### 3. Scroll Arrow Bounce (loop mirror)
- **Element:** `.framer-1we6yiq-container` (Phosphor `ArrowDown` icon, weight `light`)
- **Type:** Looping tween, mirror repeat
- **Keyframes:** `y: 0 → y: -8` then mirrors back
- **Transition:** `{ duration: 1.6, ease: [0.44, 0, 0.56, 1], type: "tween" }`
- **Repeat:** `mirror` (bounces up and down continuously)
- **repeatDelay:** `0`
- **Framer Motion equivalent:**
```jsx
<motion.div
  animate={{ y: -8 }}
  transition={{
    duration: 1.6,
    ease: [0.44, 0, 0.56, 1],
    repeat: Infinity,
    repeatType: "mirror"
  }}
/>
```

### 4. Logo entrance (hero center logo, subtle scale)
- **Element:** `.framer-1xcikju` (GUEPARDO logo)
- **Initial:** `scale: 0.9, rotate: 0, opacity: 1`
- **Animate:** `scale: 1`
- **Transition:** `{ type: "spring", damping: 30, mass: 1, stiffness: 400 }`
- Config: `Gt = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: "spring" }`

---

## 9. TEXT CONTENT (verbatim)

| Location | Text |
|----------|------|
| Page title | GUEPARDO |
| Meta description | Un espacio donde la noche se disfruta: cócteles sin pretensiones, música sin límites y ambiente sin juicios. Guepardo no sigue tendencias, las define. Sao Paulo, Providencia. Guadalajara, Jalisco. |
| Rotating ring text | RESERVACIONES - RESERVACIONES - |
| Footer address | São Paulo 2367-int. 6, Providencia, 44630 Guadalajara, Jal. |
| Footer copyright | Copyright ® 2024 Mandala Group. |

**Note:** There are NO visible `<h1>`, `<h2>`, `<h3>` tags. No hero headline text. The logo image IS the hero content.

---

## 10. INTERACTIVE ELEMENTS

| Element | Type | URL / Details |
|---------|------|---------------|
| WhatsApp button | `<a>` link, new tab | `https://wa.me/523320559502` — phone: +52 33 2055 9502 |
| Instagram button | `<a>` link, new tab | `https://www.instagram.com/guepardo.mx/` |
| Google Maps button | `<a>` link, new tab | `https://share.google/5w7rQSpzuIE2nsGY2` |
| Mandala Group logo | `<a>` link, new tab | `https://mandalagroup.mx/` |
| CoverManager widget | `<iframe>` inside `<iframe srcdoc>` | `https://www.covermanager.com/reserve/module_restaurant/restaurante-guepardo/spanish` |

### CoverManager Embed (full implementation)
```html
<script src="https://www.covermanager.com/js/iframeResizer/iframeResizer.min.js"></script>
<iframe
  id="restaurante-guepardo"
  title="Reservas"
  src="https://www.covermanager.com/reserve/module_restaurant/restaurante-guepardo/spanish"
  allow="payment"
  frameborder="0"
  height="550"
  width="100%"
  onload="iFrameResize();"
></iframe>
```

---

## 11. SPECIAL EFFECTS / BLEND MODES

| Element | Effect | Details |
|---------|--------|---------|
| GUEPARDO circular logo banners | `mix-blend-mode: hard-light` | Makes the image interact with the background beneath it |
| CoverManager widget container | `mix-blend-mode: multiply` | Blends the white widget background with the section background image |
| Sunburst decoration | `will-change: transform` | GPU-accelerated |
| Rotating text ring | `will-change: transform` | GPU-accelerated |

---

## 12. COMPLETE CSS — MAIN PAGE

```css
/* Breakpoints */
@media (min-width: 1200px) { .hidden-72rtr7 { display: none !important; } }
@media (max-width: 1199px) { .hidden-1082x8e { display: none !important; } }

/* Page root */
.framer-iJvjv.framer-72rtr7 {
  align-content: center;
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 0px;
  height: min-content;
  justify-content: flex-start;
  overflow: clip;
  padding: 0px;
  position: relative;
  width: 1200px;
}

/* Hero section */
.framer-iJvjv .framer-1ifssjc {
  flex: none;
  height: 85.5vh;
  overflow: clip;
  position: relative;
  width: 100%;
}

/* Desktop sunburst */
.framer-iJvjv .framer-1n6veqy {
  aspect-ratio: 0.9817 / 1;
  flex: none;
  height: 1222px;
  left: 1px;
  overflow: visible;
  position: absolute;
  right: 0px;
  top: -269px;
  will-change: transform;
}

/* Mobile sunburst */
.framer-iJvjv .framer-p9ewuq {
  aspect-ratio: 0.9817 / 1;
  flex: none;
  height: 721px;
  left: -147px;
  overflow: hidden;
  position: absolute;
  right: -146px;
  top: -22px;
  will-change: transform;
}

/* Rotating text ring container */
.framer-iJvjv .framer-30ei2y-container {
  bottom: -45px;
  flex: none;
  height: 140px;
  left: calc(49.83% - 70px);
  position: absolute;
  width: 140px;
  will-change: transform;
  z-index: 1;
}

/* Scroll arrow */
.framer-iJvjv .framer-1we6yiq-container {
  bottom: 16px;
  flex: none;
  height: 32px;
  left: calc(49.83% - 16px);
  position: absolute;
  width: 32px;
  z-index: 1;
}

/* Main GUEPARDO logo */
.framer-iJvjv .framer-1xcikju {
  aspect-ratio: 1 / 1;
  flex: none;
  height: 229px;
  left: 50%;
  overflow: visible;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 229px;
}

/* Reservations section */
.framer-iJvjv .framer-k63jxo {
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: min-content;
  justify-content: space-around;
  overflow: clip;
  padding: 0px;
  position: relative;
  width: 100%;
}

/* Circular logo banners (hard-light blend) */
.framer-iJvjv .framer-gb0qmg,
.framer-iJvjv .framer-x22l6h {
  aspect-ratio: 2.3745 / 1;
  flex: none;
  height: 117px;
  mix-blend-mode: hard-light;
  overflow: visible;
  position: relative;
  width: 277px;
  z-index: 1;
}

/* CoverManager widget container */
.framer-iJvjv .framer-17lbhlz-container {
  flex: none;
  height: auto;
  min-width: 300px;
  mix-blend-mode: multiply;
  position: relative;
  width: 50%;
}

/* Mobile circular logo halves */
.framer-iJvjv .framer-16afn9z {
  aspect-ratio: 2.3745 / 1;
  flex: none;
  height: 59px;
  mix-blend-mode: hard-light;
  overflow: visible;
  position: relative;
  width: 139px;
  z-index: 1;
}
.framer-iJvjv .framer-64f23e {
  aspect-ratio: 2.3745 / 1;
  flex: none;
  height: 58px;
  mix-blend-mode: hard-light;
  overflow: visible;
  position: relative;
  width: 138px;
  z-index: 1;
}

/* Footer wrapper */
.framer-iJvjv .framer-lfis60-container {
  flex: none;
  height: auto;
  position: relative;
  width: 100%;
  z-index: 1;
}

/* --- MOBILE OVERRIDES --- */
@media (max-width: 1199px) {
  .framer-iJvjv.framer-72rtr7 { width: 390px; }
  .framer-iJvjv .framer-1ifssjc {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0px;
  }
  .framer-iJvjv .framer-p9ewuq { position: relative; width: 707px; }
  .framer-iJvjv .framer-30ei2y-container { bottom: -55px; left: calc(50% - 70px); }
  .framer-iJvjv .framer-1we6yiq-container { bottom: 18px; left: calc(50% - 16px); z-index: 2; }
  .framer-iJvjv .framer-17lbhlz-container,
  .framer-iJvjv .framer-lfis60-container { order: 2; }
  .framer-iJvjv .framer-16afn9z { height: 59px; order: 0; }
  .framer-iJvjv .framer-64f23e { order: 4; }
}
```

---

## 13. COMPLETE CSS — FOOTER COMPONENT

```css
/* Footer outer */
.framer-Obzbf.framer-oq8fnf {
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 24px;
  height: min-content;
  justify-content: flex-end;
  overflow: hidden;
  padding: 80px 80px 16px 80px;
  position: relative;
  width: 1440px;
}

.framer-Obzbf .framer-1uve60l {
  align-content: center;
  align-items: center;
  display: flex;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 48px;
  height: min-content;
  justify-content: center;
  max-width: 1280px;
  overflow: hidden;
  padding: 0px 24px 24px 24px;
  position: relative;
  width: 100%;
  /* border bottom 1px solid white applied via CSS vars */
}

.framer-Obzbf .framer-10qyjyj {
  align-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 4px;
  height: auto;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0px;
  position: relative;
  width: 280px;
}

.framer-Obzbf .framer-jbyd1i {
  height: 35px;
  position: relative;
  width: 255px;
}

.framer-Obzbf .framer-53nhqr {
  align-content: flex-end;
  align-items: flex-end;
  display: flex;
  flex: 1 0 0px;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 10px;
  height: min-content;
  justify-content: center;
  overflow: hidden;
  padding: 0px;
  position: relative;
  width: 1px;
}

.framer-Obzbf .framer-bawu0m {
  align-content: center;
  align-items: center;
  display: flex;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 10px;
  height: min-content;
  justify-content: flex-end;
  overflow: hidden;
  padding: 0px 0px 16px 0px;
  position: relative;
  width: 100%;
}

.framer-Obzbf .framer-4wvsls,
.framer-Obzbf .framer-7fj2es,
.framer-Obzbf .framer-9gete4 {
  align-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border-radius: 100px;
  display: flex;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 10px;
  height: 32px;
  justify-content: center;
  overflow: hidden;
  padding: 6px;
  position: relative;
  text-decoration: none;
  width: 32px;
  will-change: transform;
}

.framer-Obzbf .framer-1goxzih,
.framer-Obzbf .framer-1v123nh {
  flex: none;
  height: auto;
  position: relative;
  white-space: pre;
  width: auto;
}

.framer-Obzbf .framer-107imdj {
  align-content: center;
  align-items: center;
  display: flex;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 24px;
  height: min-content;
  justify-content: center;
  max-width: 1280px;
  overflow: hidden;
  padding: 12px 24px 16px 24px;
  position: relative;
  width: 100%;
}

.framer-Obzbf .framer-1nkr57b {
  align-content: center;
  align-items: center;
  display: flex;
  flex: none;
  flex-direction: row;
  gap: 10px;
  height: min-content;
  justify-content: center;
  overflow: hidden;
  padding: 0px;
  text-decoration: none;
  width: 20%;
}

.framer-Obzbf .framer-31d3mn {
  aspect-ratio: 5.136 / 1;
  flex: 1 0 0px;
  height: 48px; /* var(--framer-aspect-ratio-supported, 48px) */
  position: relative;
  width: 1px;
}

.framer-Obzbf .framer-igk6ks {
  align-content: center;
  align-items: center;
  display: flex;
  flex: 1 0 0px;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 10px;
  height: min-content;
  justify-content: center;
  overflow: hidden;
  padding: 0px;
  position: relative;
  width: 1px;
}

.framer-Obzbf .framer-12bfg24 {
  align-content: center;
  align-items: center;
  display: flex;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 48px;
  height: min-content;
  justify-content: center;
  max-width: 1280px;
  min-height: 14px;
  overflow: hidden;
  padding: 0px;
  position: relative;
  width: 100%;
}

/* TABLET overrides (810px) */
.framer-Obzbf.framer-v-vicsur.framer-oq8fnf { width: 810px; }
.framer-Obzbf.framer-v-vicsur .framer-1nkr57b { width: 30%; }
.framer-Obzbf.framer-v-vicsur .framer-31d3mn { height: 35px; }

/* MOBILE overrides (390px) */
.framer-Obzbf.framer-v-3vdiss.framer-oq8fnf {
  padding: 80px 16px 16px 16px;
  width: 390px;
}
.framer-Obzbf.framer-v-3vdiss .framer-1uve60l {
  flex-direction: column;
  padding: 0px 16px 24px 16px;
}
.framer-Obzbf.framer-v-3vdiss .framer-10qyjyj {
  align-content: center;
  align-items: center;
  align-self: unset;
  height: min-content;
  justify-content: center;
  width: 100%;
}
.framer-Obzbf.framer-v-3vdiss .framer-53nhqr { flex: none; width: 100%; }
.framer-Obzbf.framer-v-3vdiss .framer-bawu0m { justify-content: center; }
.framer-Obzbf.framer-v-3vdiss .framer-4wvsls,
.framer-Obzbf.framer-v-3vdiss .framer-7fj2es,
.framer-Obzbf.framer-v-3vdiss .framer-9gete4 { height: 24px; width: 24px; }
.framer-Obzbf.framer-v-3vdiss .framer-107imdj { flex-direction: column; }
.framer-Obzbf.framer-v-3vdiss .framer-1nkr57b { width: 60%; }
.framer-Obzbf.framer-v-3vdiss .framer-31d3mn { height: 36px; }
.framer-Obzbf.framer-v-3vdiss .framer-12bfg24 { gap: 12px; min-height: 8px; }
```

---

## 14. NEXT.JS IMPLEMENTATION NOTES

### Font Setup
1. **MADE TOMMY ExtraBold**: Self-host the WOFF2 from Framer CDN or obtain license
   - URL: `https://framerusercontent.com/assets/DnSCsepHUVEHX6ZOy9knwWieSo.woff2`
2. **Editorial New Regular**: Licensed font by Pangram Pangram
   - Fallback suggestion: Use `next/font/google` with `Playfair_Display` or `DM_Serif_Display` as substitute
   - Or purchase Editorial New at https://pangrampangram.com

### Tailwind Config Tokens
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'guepardo-cream': '#FDE6BA',  // rgb(253, 230, 186)
        'guepardo-black': '#000000',
        'guepardo-white': '#FFFFFF',
      },
      fontFamily: {
        'tommy': ['"MADE TOMMY ExtraBold"', 'Arial', 'sans-serif'],
        'editorial': ['"Editorial New Regular"', 'sans-serif'],
      },
      screens: {
        'desktop': '1200px',  // min-width: 1200px → Desktop
        // default: mobile-first (max 1199px = mobile)
      }
    }
  }
}
```

### Component Structure
```
<main>
  <HeroSection>       {/* height: 85.5vh, relative positioning */}
    <BackgroundImage />  {/* cRJucnoDQyfmHd8B5i1WLyGAds.png */}
    <SunburstDecoration /> {/* vHK23xtP5rPOZ00To0b9BBTA9sk.png, spring anim */}
    <GuepardoLogo />    {/* JcoRajfXmJzl6v062ipC7NFbQ.png, 229×229px centered */}
    <RotatingTextRing /> {/* "RESERVACIONES - RESERVACIONES -", MADE TOMMY, continuous spin */}
    <ScrollArrow />     {/* Phosphor ArrowDown, bouncing loop mirror */}
  </HeroSection>

  <ReservationsSection>  {/* flex column, full width */}
    <BackgroundImage />   {/* 1ZVOIxXUomyHmBCeVLNuTFiKas.png */}
    <CircularLogoBanner mix-blend-mode="hard-light" />  {/* top */}
    <CoverManagerWidget mix-blend-mode="multiply" />    {/* center */}
    <CircularLogoBanner mix-blend-mode="hard-light" rotate(180deg) />  {/* bottom */}
  </ReservationsSection>

  <Footer>            {/* background: #000 */}
    <InfosRow>        {/* border-bottom: 1px solid white */}
      <GuepardoSVGWordmark />  {/* inline SVG, white paths */}
      <SocialLinks>   {/* WhatsApp, Instagram, Google Maps */}
      <AddressText>   {/* Editorial New, 14px, white, letter-spacing 0.1em */}
    </InfosRow>
    <LogoRow>
      <MandalaGroupLogo link="mandalagroup.mx" />
      <CopyrightText>  {/* Editorial New, 12px, white */}
    </LogoRow>
  </Footer>
</main>
```

---

## 15. GUEPARDO SVG WORDMARK (Footer) — Full Path Data

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 254.974 35.03" overflow="visible">
  <g>
    <!-- Full "GUEPARDO" lettering path — white fill -->
    <path d="M 8.66 33.057 C 6.041 31.776 3.941 29.879 2.359 27.317 C 0.778 24.78 0 21.654 0 17.989 C 0 14.325 0.752 11.813 2.256 9.225 C 3.76 6.637 5.86 4.613 8.608 3.152 C 11.33 1.691 14.468 0.948 18.02 0.948 C 21.572 0.948 22.324 1.204 24.139 1.717 C 25.954 2.229 27.406 2.793 28.469 3.383 L 28.469 8.687 C 27.458 6.97 25.98 5.586 23.983 4.536 C 21.987 3.485 19.964 2.947 17.916 2.947 C 15.868 2.947 12.549 3.536 10.423 4.741 C 8.297 5.945 6.689 7.636 5.549 9.84 C 4.408 12.044 3.863 14.632 3.863 17.605 C 3.863 20.577 4.511 23.576 5.834 25.882 C 7.13 28.188 8.867 29.905 11.045 31.058 C 13.197 32.211 15.557 32.775 18.124 32.775 C 20.69 32.775 20.483 32.647 21.728 32.365 C 22.972 32.083 24.113 31.699 25.202 31.186 L 25.202 23.294 C 25.202 22.294 25.046 21.525 24.709 20.962 C 24.398 20.398 24.035 20.014 23.646 19.757 C 23.257 19.527 23.076 19.424 23.076 19.501 L 30.828 19.501 C 30.828 19.45 30.647 19.501 30.258 19.68 C 29.869 19.86 29.506 20.219 29.195 20.757 C 28.884 21.295 28.702 22.012 28.702 22.986 L 28.702 31.699 C 26.991 32.749 25.15 33.57 23.154 34.108 C 21.157 34.671 19.187 34.953 17.216 34.953 C 14.157 34.953 11.305 34.313 8.686 33.031 Z M 63.238 23.012 C 63.238 25.523 62.745 27.701 61.786 29.495 C 60.827 31.289 59.452 32.673 57.689 33.621 C 55.926 34.569 53.878 35.03 51.57 35.03 C 47.733 35.03 44.751 33.98 42.651 31.878 C 40.551 29.777 39.514 26.856 39.514 23.114 L 39.514 5.971 C 39.514 4.689 39.358 3.741 39.047 3.075 C 38.736 2.434 38.399 1.973 38.036 1.768 C 37.673 1.538 37.492 1.461 37.492 1.538 L 45.037 1.538 C 45.037 1.486 44.855 1.538 44.492 1.768 C 44.129 1.999 43.792 2.434 43.481 3.049 C 43.17 3.69 43.014 4.613 43.014 5.817 L 43.014 23.089 C 43.014 26.189 43.766 28.573 45.27 30.264 C 46.774 31.955 48.978 32.801 51.882 32.801 C 54.785 32.801 56.678 32.006 58.234 30.392 C 59.79 28.778 60.567 26.394 60.567 23.242 L 60.567 5.971 C 60.567 4.689 60.412 3.741 60.075 3.075 C 59.764 2.434 59.401 1.973 59.012 1.768 C 58.623 1.538 58.441 1.461 58.441 1.538 L 65.416 1.538 C 65.416 1.486 65.234 1.538 64.845 1.768 C 64.457 1.999 64.094 2.434 63.782 3.075 C 63.471 3.741 63.29 4.689 63.29 5.971 L 63.29 23.012 Z M 71.898 34.441 C 71.898 34.543 72.079 34.441 72.468 34.236 C 72.857 34.005 73.194 33.518 73.505 32.801 C 73.816 32.083 73.972 31.033 73.972 29.674 L 73.972 6.176 C 73.972 4.869 73.816 3.869 73.505 3.178 C 73.194 2.486 72.857 2.024 72.468 1.768 C 72.079 1.512 71.898 1.435 71.898 1.538 L 89.425 1.538 L 89.425 6.33 C 88.855 4.408 87.092 3.459 84.188 3.459 L 77.446 3.459 L 77.446 17.041 L 85.769 17.041 C 86.417 17.041 86.962 16.939 87.403 16.734 C 87.843 16.528 88.18 16.323 88.414 16.093 C 88.647 15.862 88.777 15.734 88.803 15.657 L 88.803 20.295 C 88.777 20.244 88.647 20.09 88.414 19.86 C 88.18 19.629 87.869 19.424 87.429 19.245 C 86.988 19.065 86.443 18.963 85.795 18.963 L 77.42 18.963 L 77.42 32.544 L 84.965 32.544 C 86.417 32.544 87.662 32.237 88.725 31.648 C 89.762 31.058 90.514 30.289 90.981 29.367 L 90.099 34.441 L 71.846 34.441 Z M 116.986 15.375 C 116.105 16.836 114.834 17.964 113.175 18.809 C 111.541 19.629 109.597 20.065 107.367 20.065 C 105.137 20.065 104.567 19.911 103.011 19.629 L 103.011 30.059 C 103.011 31.314 103.167 32.263 103.504 32.903 C 103.815 33.57 104.178 34.005 104.567 34.21 C 104.956 34.441 105.137 34.518 105.137 34.441 L 97.437 34.441 C 97.437 34.492 97.618 34.441 98.007 34.21 C 98.396 33.98 98.733 33.544 99.044 32.929 C 99.355 32.288 99.511 31.34 99.511 30.059 L 99.511 6.073 C 99.511 4.792 99.355 3.818 99.044 3.152 C 98.733 2.486 98.396 2.024 98.007 1.794 C 97.618 1.563 97.437 1.461 97.437 1.538 L 106.926 1.538 C 108.56 1.538 109.934 1.64 110.997 1.845 C 112.06 2.05 112.993 2.358 113.797 2.768 C 115.249 3.511 116.364 4.561 117.142 5.945 C 117.92 7.329 118.309 8.815 118.309 10.43 C 118.309 12.044 117.868 13.94 116.986 15.375 Z M 112.475 5.561 C 111.049 4.151 109.156 3.459 106.823 3.459 L 103.037 3.459 L 103.037 17.759 C 104.437 18.015 105.889 18.143 107.393 18.143 C 109.649 18.143 111.412 17.502 112.682 16.195 C 113.953 14.914 114.601 13.197 114.601 11.045 C 114.601 8.892 113.901 6.945 112.475 5.535 Z M 128.55 21.679 L 125.439 29.29 C 124.946 30.469 124.713 31.443 124.713 32.211 C 124.713 32.98 125.205 34.005 126.165 34.466 L 119.242 34.466 C 119.553 34.466 120.02 34.159 120.642 33.518 C 121.264 32.878 121.964 31.622 122.768 29.726 L 135.421 0 L 147.97 29.854 C 148.67 31.571 149.37 32.749 150.018 33.39 C 150.692 34.031 151.211 34.39 151.6 34.441 L 143.562 34.441 C 144.366 34.056 144.781 33.467 144.781 32.673 C 144.781 31.878 144.522 31.058 144.003 29.803 L 140.607 21.679 Z M 139.829 19.706 L 134.539 6.919 L 129.354 19.706 L 139.803 19.706 Z M 169.36 16.862 C 170.449 16.17 171.279 15.273 171.85 14.171 C 172.42 13.069 172.705 11.916 172.705 10.711 C 172.705 9.507 172.446 8.303 171.901 7.201 C 171.357 6.099 170.553 5.202 169.464 4.484 C 168.375 3.793 167.027 3.434 165.445 3.434 L 161.323 3.434 L 161.323 30.033 C 161.323 31.314 161.478 32.263 161.815 32.929 C 162.127 33.595 162.49 34.005 162.879 34.21 C 163.267 34.415 163.449 34.492 163.449 34.415 L 155.748 34.415 C 155.748 34.466 155.93 34.415 156.319 34.185 C 156.708 33.954 157.045 33.518 157.356 32.903 C 157.667 32.263 157.823 31.314 157.823 30.033 L 157.823 6.125 C 157.823 4.818 157.667 3.818 157.356 3.126 C 157.045 2.434 156.708 1.973 156.319 1.743 C 155.93 1.512 155.748 1.435 155.748 1.538 L 165.342 1.538 C 167.857 1.538 169.931 1.948 171.564 2.768 C 173.198 3.588 174.365 4.638 175.091 5.92 C 175.816 7.201 176.179 8.636 176.179 10.148 C 176.179 11.66 175.868 12.685 175.272 13.915 C 174.65 15.145 173.768 16.221 172.627 17.118 C 171.487 18.015 170.138 18.655 168.634 19.014 L 167.857 19.168 L 176.387 29.879 C 177.528 31.135 178.461 32.083 179.187 32.749 C 179.939 33.416 180.458 33.877 180.821 34.082 C 181.158 34.313 181.365 34.441 181.417 34.466 L 175.765 34.466 L 162.593 17.912 L 165.497 17.912 C 166.975 17.912 168.271 17.579 169.36 16.887 Z M 195.314 34.441 L 185.773 34.441 C 185.773 34.543 185.954 34.441 186.343 34.185 C 186.732 33.903 187.069 33.416 187.38 32.673 C 187.691 31.929 187.847 30.879 187.847 29.469 L 187.847 5.945 C 187.847 4.689 187.691 3.741 187.38 3.101 C 187.069 2.46 186.732 1.999 186.343 1.794 C 185.954 1.563 185.773 1.486 185.773 1.563 L 195.262 1.563 C 200.189 1.563 204.104 2.358 206.982 3.946 C 209.523 5.356 211.493 7.252 212.893 9.635 C 214.267 12.018 214.967 14.735 214.967 17.733 C 214.967 20.731 214.319 23.806 212.997 26.189 C 211.701 28.573 209.834 30.443 207.448 31.801 C 204.415 33.595 200.37 34.492 195.288 34.492 Z M 201.018 4.074 C 199.411 3.664 197.492 3.459 195.262 3.459 L 191.347 3.459 L 191.347 32.544 L 195.262 32.544 C 197.907 32.544 200.085 32.314 201.77 31.878 C 203.456 31.443 204.933 30.751 206.152 29.828 C 207.734 28.624 208.952 27.035 209.808 25.062 C 210.664 23.089 211.078 20.808 211.078 18.194 C 211.078 15.58 210.586 12.992 209.6 10.891 C 208.615 8.79 207.267 7.201 205.556 6.073 C 204.13 5.151 202.626 4.484 200.992 4.074 Z M 222.979 9.328 C 224.457 6.688 226.505 4.613 229.176 3.152 C 231.846 1.691 234.906 0.948 238.406 0.948 C 241.906 0.948 244.033 1.589 246.573 2.844 C 249.114 4.1 251.137 5.996 252.667 8.508 C 254.196 11.019 254.974 14.068 254.974 17.605 C 254.974 21.141 254.248 24.011 252.77 26.651 C 251.292 29.29 249.244 31.366 246.573 32.826 C 243.903 34.287 240.843 35.03 237.343 35.03 C 233.843 35.03 231.717 34.39 229.176 33.134 C 226.635 31.878 224.613 29.982 223.083 27.471 C 221.553 24.959 220.775 21.91 220.775 18.374 C 220.775 14.837 221.501 11.967 222.979 9.328 Z M 249.27 10.455 C 248.051 8.098 246.392 6.278 244.292 4.946 C 242.166 3.613 239.806 2.973 237.162 2.973 C 234.517 2.973 232.598 3.588 230.706 4.792 C 228.813 5.996 227.335 7.713 226.272 9.943 C 225.209 12.172 224.664 14.735 224.664 17.682 C 224.664 20.629 225.261 23.217 226.479 25.549 C 227.698 27.906 229.357 29.726 231.458 31.058 C 233.584 32.391 235.943 33.031 238.588 33.031 C 241.232 33.031 243.151 32.416 245.044 31.212 C 246.936 30.008 248.414 28.291 249.477 26.061 C 250.54 23.832 251.085 21.269 251.085 18.322 C 251.085 15.375 250.489 12.787 249.27 10.455 Z" fill="rgb(255,255,255)"/>
    <!-- Brand star/asterisk mark -->
    <path d="M 244.629 17.938 C 240.973 18.169 238.043 22.499 237.888 27.932 C 237.732 22.525 234.802 18.194 231.146 17.938 C 234.802 17.707 237.732 13.377 237.888 7.944 C 238.043 13.351 240.973 17.682 244.629 17.938 Z" fill="rgb(255,255,255)"/>
  </g>
</svg>
```
