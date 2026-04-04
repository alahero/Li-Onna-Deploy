# Houdinni.com — Complete Design Extraction
## Source: https://houdinni.com/ (Framer site, last updated Dec 9, 2025)
## Framer Site ID: 928f0defbc91f1960523727b7e75e1ba0612036b9c1e30a67dfa49cd3708b0b7

---

## 1. SITE STRUCTURE / PAGES

| Page | Path | Framer ID |
|------|------|-----------|
| Home | `/` | `augiA20Il` |
| Events (Private Events form) | `/events` | `ry5UsuG6y` |
| Calendar | `/calendar` | `pwYacqkjy` |
| Calendar v2 | `/calendar-02` | `vMfsySjxw` |

**Scroll sections on home page:**
- `LvZYyrKob` → `scroll` anchor
- `nDVkMp468` → `contact` anchor

**Scroll sections on calendar:**
- `vZ1hwO0ep` → `trigger` anchor

---

## 2. DESIGN TOKENS / COLORS

```css
/* Primary design token */
--token-419394a1-565d-4952-8ba3-b4f1eb92339c: #050505  /* Body background */

/* Color palette (all confirmed from JS) */
#050505   /* Body background (near-black) */
#000000   /* Pure black (video overlays, nav, footer bg) */
#ffffff   /* White (primary text, logo) */
#0099ff   /* Blue (link color, accent, --framer-link-text-color) */
#3388ff   /* Blue lighter (small accent bar: .framer-6n95x5, height 7px, width 485px) */
#99eeff   /* Cyan (accent box: .framer-w5jp9y, 219×99px) */
rgb(161, 161, 161)  /* Muted gray (AVISO LEGAL link) */
rgb(171, 171, 171)  /* Muted gray (POLÍTICA DE COOKIES link) */
rgb(136, 136, 136)  /* Form field label color */
rgba(0, 0, 0, 0)    /* Transparent (video background) */
rgba(0, 0, 0, 0.25) /* Drop shadow */
```

**Global body background:**
```css
html body { background: var(--token-419394a1-565d-4952-8ba3-b4f1eb92339c, rgb(5, 5, 5)); }
```

---

## 3. TYPOGRAPHY

### Font Faces (exact Framer CDN URLs)

```css
@font-face {
  font-family: "Druk Text Wide Trial Bold";
  src: url("https://framerusercontent.com/assets/t95LpbNDiDLzeA0jSKhRDzUPoCY.woff2");
  font-display: swap;
  font-style: normal;
  font-weight: 700;
}

@font-face {
  font-family: "Kanit Regular";
  src: url("https://framerusercontent.com/assets/0gEp7iuwdapzT4Pi7fwFvF82SGo.woff2");
  font-display: swap;
  font-style: normal;
  font-weight: 400;
}

@font-face {
  font-family: "Array Regular";
  src: url("https://framerusercontent.com/assets/uJgEdeu6Uf4fJOb4vcGsw0dtfKU.woff2");
  font-display: swap;
  font-style: normal;
  font-weight: 400;
}

@font-face {
  font-family: "Helvetica Bold";
  src: url("https://framerusercontent.com/assets/8ZGKUhbHJ9WjBkrf6nw2kbejS9s.woff2");
  font-display: swap;
}

/* Note: "Editorial New Regular" is referenced as CUSTOM;Editorial New Regular */
/* Base64 font selector: Q1VTVE9NO0VkaXRvcmlhbCBOZXcgUmVndWxhcg== */
/* Used in footer, body text, nav, address, copyright */

/* Inter is loaded for form fields (medium weight 500) */
```

### Typography Usage

| Element | Font | Size | Weight | Letter-spacing | Color |
|---------|------|------|--------|----------------|-------|
| Display headlines | Druk Text Wide Trial Bold | large | 700 | — | #ffffff |
| Body / footer text | Editorial New Regular | 14px (desktop), 12px (tablet), 8px (mobile) | 400 | 0.1em | #ffffff |
| Copyright | Editorial New Regular | 12px (desktop), 6px (mobile) | 400 | 0.02em | #ffffff |
| Links / nav | Editorial New Regular | 12px | 400 | 0.1em | #ffffff |
| Form labels | Inter Medium | 15px | 500 | — | rgb(136,136,136) |
| Address | Editorial New Regular | 14px | 400 | 0.1em | #ffffff |

---

## 4. LAYOUT / BREAKPOINTS

### Desktop (default)
- Container width: **1200px** (`framer-72rtr7`)
- Max-width used: **1285px** (hero sticky), **1280px** (footer inner)
- Total page height: **4004px** (Home desktop)

### Tablet
- Breakpoint: `(min-width: 810px) and (max-width: 1199.98px)`
- Width: **810px**
- Page height: **3263px**
- CSS hash: `1i6nyat`

### Mobile/Phone
- Breakpoint: `(max-width: 809.98px)`
- Width: **390px**
- Page height: **3899px** (Home)
- CSS hash: `15hurun`

### Footer widths
- Desktop: 1440px
- Tablet: 810px
- Mobile: 390px, padding 80px 16px 16px 16px

---

## 5. PAGE SECTIONS (Home) — Order from top to bottom

### 5.1 Fixed Sticky Navigation Bar
- **Height:** 34px (fixed, `position: fixed; top: 0px; z-index: 1`)
- **On mobile:** height auto
- **Component variants:** `pR4BjKnFH` (default/desktop/tablet), `YN7AmjrtW` (XL/wide)

### 5.2 Hero Section ("Main" → `framer-gwxt9f`)
- **Height:** 14% viewport (desktop), 19% (mobile)
- **Position:** sticky
- **Padding:** 49px top and bottom
- **Background image (Desktop/Tablet):** `Lx0565wpOSi6Tud3YrsVjgb9llA.png` (1440×721)
- **Background image (Mobile override):** `QZyeovzckrLXdvWRpe6r9sBJQ.png` (1000×1815)
- **Contains:** Navigation columns in XL (scale 0.8), Tablet (scale 0.65)

### 5.3 Hero Left Column (XL Desktop)
- Width: 315px, Height: 530px
- Contains: Menu button (stacked with 323px gap)
- Accent elements: Cyan box (#99eeff) 219×99px

### 5.4 Hero Center Column (Video + Manifesto)
- Width: 533px, Height: 572px (desktop), 540px (tablet)
- Contains: Video player (TcoZ9AQMiryJ6z7dK6PSiBjVM.mp4), Manifesto button, Events button
- Video filter on hover: `brightness(1.23) saturate(2)`

### 5.5 Hero Right Column (Sidebar navigation)
- Contains: Calendar button, Contact button, Reservations button, Poster
- 4 items in a 1-column grid, 525px height (desktop)

### 5.6 Gallery/Sticky Scroll Section ("Sticky" → `framer-1i5t7gt`)
- **Type:** Sticky scroll + horizontal pan animation
- **Background:** `Br9mf6xXb0uyS0asVT5ADhQiwAc.png` (1440×783)
- **Contains:** "Images Wrap" > "Images" container
- **Animation:** Scroll-triggered horizontal transform
  - Start: `x: 0`
  - End: `x: -1635`
  - Trigger: `onScrollTarget`, viewport threshold: 1
  - Spring: `{bounce: 0.2, damping: 60, delay: 0, duration: 0.1, ease: [0.44, 0, 0.56, 1], mass: 1, stiffness: 500, type: "spring"}`
  - Outer wrapper also animates: `x: -270` → `x: -716` (desktop), `x: 0` → `x: -1087` (tablet, scale 0.9)

### 5.7 Gallery Image Strip ("Tren" / Train)
- Desktop image: `ol8Mkz0NaPLqjKCpDcLw8MTkJc.png` (5339×1503)
- Tablet/Mobile image: `qJQqozZQORwEApaSMkiAgprWupo.png` (5765×1503)
- These are wide panoramic strips that scroll horizontally

### 5.8 "THE STREETS ARE CALLIN'" Section
- Section name: `THE STREETS ARE CALLIN'`
- Image: `aFAY5ujYWRHb59M0j7NWdij2D0.png` (1966×391)
- Mobile scale: 0.8
- Container: `framer-2fas6r`

### 5.9 Main Content Area ("ia958")
- **Desktop height:** ~2000px
- **Tablet height:** 1923px
- **Mobile height:** 3137px
- Contains: Manifesto sections, DJ booth, gallery grids
- Grid layouts used: 2×3 (height 361px), 3×3 (height 199px), 2×3 (height 299px), 2×3 (height 366px)

### 5.10 Mobile Manifesto Column
- Image background: `8xgUVymUAbFXEzttED3Kk5sBvM.png` (1200×3486 - tall mobile background)

### 5.11 Contact / Info Section
- Section ID: `nDVkMp468` (hash anchor `contact`)
- Phone: `tel:+34910463911` href, displayed as `+34 671 80 77 47`
- Note: Two numbers — +34 910 46 39 11 (href/tel) and +34 671 80 77 47 (display text)

### 5.12 Footer ("Houdinni/Footer")
- Component: `C4C17Wb4r`
- Width: 1440px desktop, 810px tablet, 390px mobile
- Background: `#000000`
- Padding: 80px 80px 16px 80px (desktop), 80px 16px 16px 16px (mobile)
- Gap: 24px between sections

---

## 6. VIDEO ASSETS

### Hero Video (Main video background)
- **File 1 (srcFile):** `https://framerusercontent.com/assets/TcoZ9AQMiryJ6z7dK6PSiBjVM.mp4`
- **File 2 (srcUrl/default):** `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`
- **Poster image:** `https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg`
- **Settings:** `loop: true, muted: true, autoplay: true, controls: false, objectFit: "cover", playsInline: true`
- **Hover filter:** `brightness(1.23) saturate(2)` (WebkitFilter too)

---

## 7. ALL IMAGE ASSETS

### Homepage Images (all from framerusercontent.com/images/)

| File | Dimensions | Role |
|------|-----------|------|
| `I2xEQiWVd6VsIKnaM4YKcSS0U.png` | 901×134 | **Houdinni logo (white, nav header)** |
| `iXyETh9yrMzH1DzK3sgd4T4yXA.png` | 442×84 | **Mandala Group logo (footer)** |
| `PQmcL2oNks84qB3ctM5S2qICvGE.png` | — | **Favicon** |
| `nAtkhMFL3FTntM7N4siGli0g.png` | — | **Apple touch icon** |
| `5ILRvlYXf72kHSVHqpa3snGzjU.jpg` | — | Video poster/thumbnail |
| `Lx0565wpOSi6Tud3YrsVjgb9llA.png` | 1440×721 | Hero background (desktop) |
| `QZyeovzckrLXdvWRpe6r9sBJQ.png` | 1000×1815 | Hero background (mobile) |
| `Br9mf6xXb0uyS0asVT5ADhQiwAc.png` | 1440×783 | Gallery sticky section background |
| `ol8Mkz0NaPLqjKCpDcLw8MTkJc.png` | 5339×1503 | Gallery strip image (desktop) |
| `qJQqozZQORwEApaSMkiAgprWupo.png` | 5765×1503 | Gallery strip image (tablet/mobile) — "Tren" |
| `aFAY5ujYWRHb59M0j7NWdij2D0.png` | 1966×391 | "THE STREETS ARE CALLIN'" banner |
| `8xgUVymUAbFXEzttED3Kk5sBvM.png` | 1200×3486 | Mobile manifesto background (tall) |
| `epIZbh8mDpM8L4tD2iB2QjA.png` | 2218×2751 | Large photo (Variant 1, gallery/manifesto) |
| `W5HVkGPuiD9wgAAN3845wizxcY.png` | 3800×1985 | Wide venue photo (gallery grid) |
| `xZtwebgDfOSnDROl3mUOEuKvdjY.png` | 3800×1985 | Wide venue photo (gallery grid) |
| `BoX14PPAHxjewdDcIx4G16ApsrU.png` | 3272×1582 | Wide venue photo |
| `cjV9kfpigpoVtTCDgXvoRaHPWY.png` | 933×1623 | Tall venue photo |
| `ZP1Zk8uqidepSScbDrBzr5Kbo.png` | 1095×942 | Square venue photo |
| `XSmdVcvjb1Ncbwqf85zfiLrqswo.png` | 921×226 | Logo/banner strip |
| `uY8Tp1urPb4p6ttIwDTedgCfByI.png` | 921×226 | Logo/banner strip 2 |
| `4wBxmG85BH99iGEeRQzKxlHfZs.png` | 1513×961 | Logo Light Box image 1 |
| `cY5bX0t66giJKLVM0UMGYTFgA.png` | 1513×961 | Logo Light Box image 2 |
| `hPxoZqLV3MPy1iEd9VOCQWpfA8.png` | 717×158 | Calendar Button image |
| `ix7hC395jwgqKbu9BUOAUIdAQ.png` | 691×136 | Calendar Button screen image |
| `eT5U6F7J5AMRcBlKie1VX8Ysow.png` | 1592×518 | Reservations button image |
| `vzw4GH0XMc5wZZzNTzVEvXJOPtM.png` | 1600×571 | Reservations button image 2 |
| `NFkdZuj6sTqGi97C3b1N0I150.png` | 759×268 | Contact Button image |
| `70dw6SzfvjSK1OW0bl1164TYmM.png` | 759×268 | Contact Button / Poster image |
| `SOQqcKm3NXqB6qOb84b4sVmGQj4.png` | 759×268 | Events Button image |
| `qAfgN8Qc6INChvlQTsM3WdUq6o0.png` | 759×268 | Events Button image 2 |
| `cE0cobaQliP4yFVzd2hq3kEzps.png` | 759×268 | Menu Button image |
| `UY08MuvXZOzPya93zpU5vPUGKQ.png` | 759×268 | Menu Button image 2 |

### Events Page Additional Images

| File | Dimensions | Role |
|------|-----------|------|
| `CImWF2I2wRCSmZN9GvOs0LkE3g.png` | 3800×3204 | Events hero/background |
| `b0YQcuIvQRBbOBP52NqF6Y3us.png` | 3800×6898 | Events full-page background |
| `MqPyRSBMsBS0noyiW5RnrTgonb8.png` | 3800×3124 | Events section photo |
| `GJQB1fY5lBks4J6WK4P3uYfDkUU.png` | 2145×737 | Events banner/strip |
| `y6dsD8JE80mQkNjT6gPGGT6K6kE.png` | 1937×236 | Events thin banner |

### Calendar Page Images

| File | Dimensions | Role |
|------|-----------|------|
| `CMuhBxXXIGFzmGf1FdeYdw9xtbM.png` | 1440×721 | Calendar hero background (desktop) |
| `8qBRQWBnn4Pv6L9J6XzFu6VX4s.png` | 1093×1511 | Calendar main background (mobile) |

---

## 8. ALL TEXT CONTENT

### Marquee / Ticker Strips
The site has a rotating marquee ticker appearing in multiple sections. The full text string (from search index) is:

```
HOUDINNI OR NOWHERE // MUSIC IS THE ANSWER // AUTHENTICITY, COMMUNITY, AND IRREVERENCE. 
CRAFTING A COMMUNITY OF LOUD MUSIC-LOVERS FREAKS. // HOUDINNI OR NOWHERE // HOUDINNI // 
NOW YOU SEE ME, NOW YOU DON'T. // HOUDINNI // LA MÚSICA VA PRIMERO // HOUDINNI
```

**Key ticker phrases (unique):**
- `HOUDINNI OR NOWHERE`
- `MUSIC IS THE ANSWER`
- `NOW YOU SEE ME, NOW YOU DON'T.`
- `LA MÚSICA VA PRIMERO`
- `HOUDINNI`

**Event ticker examples (current events in ticker):**
- `BETICAL 23 OCT` (repeated 5×)
- `BENJA  06 NOV` (repeated 5×)
- `OKIO - ASIAN STREET MARKET`

### Brand Manifesto Paragraphs (4 sections + 2 DJ sections)

**Section 1 — Community/Identity:**
> AUTHENTICITY, COMMUNITY, AND IRREVERENCE. CRAFTING A COMMUNITY OF LOUD MUSIC-LOVERS FREAKS.

**Section 2 — Sanctuary:**
> IN THIS SANCTUARY YOU'RE ENCOURAGED TO MAKE IT YOUR OWN, TO TAKE OVER THE WALLS, EXPRESS YOURSELF, AND FIND INTERESTING PEOPLE.

**Section 3 — Music Worship:**
> WHERE DISRUPTIVE ARTS, KILLER MUSIC, AND A BIG MIDDLE FINGER TO MAINSTREAM SOCIETY COLLIDE. WE WORSHIP TOP-NOTCH HIP-HOP, ROCK LEGENDS, CULT MOVIES, AND THE ROOTS OF ELECTRONIC MUSIC.

**Section 4 — Charming vs Boring:**
> WE DITCH THE WHOLE GOOD VS. EVIL THING; INSTEAD WE SPLIT PEOPLE INTO EITHER CHARMING OR BORING. WE CREATE A VIBE FILLED WITH INTERESTING, CULTURED, SOCIAL PEOPLE WITH IMPECCABLE TASTE IN MUSIC.

**Section 5 — DJ Booth:**
> AT THE CORE OF OUR SHRINE IS THE DJ BOOTH, THE HEARTBEAT OF THE PLACE. EVERY NIGHT, IT'S ALL ABOUT TAKING OUR GUESTS' SOUL TO HIGHER REALMS AND PUSHING MADRID'S SOCIAL SCENE TO NEW HEIGHTS.

**Section 6 — Sound System:**
> WITH SPECTACULAR LIGHTS, BOOMING FUNKTION ONE SOUND SYSTEM, AND THE CULTURE OOZING FROM OUR DECOR, WE'RE HERE TO RAISE THE BAR FOR EVERYONE AT HOUDINNI'S NIGHTS.

### Chinese Characters (Marquee/Branding)
```
一 會兒你看見我 一 會兒你看不見我
HOUDINNI 一會兒你看見我，一 會兒你看不見我 一
```
(Translation: "Now you see me, now you don't" — matches the brand slogan)

### Contact Information
```
Address (line 1): C. de Serrano 41. Salamanca 28001
Address (line 2): Madrid, España
Full address:     C. de Serrano 41, Local A y B, Salamanca 28001
Phone (href):     tel:+34910463911  → displayed as: Tel: +34 671 80 77 47
Email:            hola@houdinni.com
Maps link:        https://maps.app.goo.gl/boeQqsrXHHfuHfTW9
```

### Navigation / Footer Links
```
POLITICA DE PRIVACIDAD  (white, links to privacy page)
AVISO LEGAL             (muted rgb(161,161,161))
POLÍTICA DE COOKIES     (muted rgb(171,171,171))
CONTACTO                (white, links to #contact anchor on homepage)
INFORMACION LEGAL       (white, events page)
Copyright ® 2025 Mandala Group.
```

---

## 9. INTERACTIVE ELEMENTS

### Navigation Buttons (Hero right column)
All buttons are stacked in a 1-column 4-row grid (107px height each, 302px wide):

1. **Menu Button** — links to `https://mandalagroup.menu/es/houdinni` (opens new tab)
   - Images: `cE0cobaQliP4yFVzd2hq3kEzps.png` / `UY08MuvXZOzPya93zpU5vPUGKQ.png`
   
2. **Calendar Button** — links to `/calendar` (Framer Events)
   - Images: `hPxoZqLV3MPy1iEd9VOCQWpfA8.png` / `ix7hC395jwgqKbu9BUOAUIdAQ.png`
   - Video on hover: `TcoZ9AQMiryJ6z7dK6PSiBjVM.mp4`
   
3. **Events Button** — links to `/events` page
   - Images: `SOQqcKm3NXqB6qOb84b4sVmGQj4.png` / `qAfgN8Qc6INChvlQTsM3WdUq6o0.png`
   
4. **Reservations Button** — links to `tickets.houdinni.com`
   - Images: `eT5U6F7J5AMRcBlKie1VX8Ysow.png` / `vzw4GH0XMc5wZZzNTzVEvXJOPtM.png`

5. **Contact Button** (282px wide, 100px height) — links to `/#contact`
   - Images: `NFkdZuj6sTqGi97C3b1N0I150.png` / `70dw6SzfvjSK1OW0bl1164TYmM.png`

### Social Links (in Sticky/Nav bar and Footer)
- **Instagram:** `https://www.instagram.com/houdinni.madrid/`
- **Maps:** `https://maps.app.goo.gl/boeQqsrXHHfuHfTW9`
- **Mandala Group:** `https://mandalagroup.mx/`
- **Menu:** `https://mandalagroup.menu/es/houdinni`

*Note: Facebook, Soundcloud, Spotify, TikTok, Twitter, WhatsApp, YouTube social links were NOT found in the JS bundle. They may only exist as icon links in Phosphor Icons (rendered as SVG) without explicit href text captured, or may be added via custom code.*

### WhatsApp
- Phone number `+34 671 80 77 47` is displayed — WhatsApp link likely: `https://wa.me/34671807747`
- Phone link in code: `tel:+34910463911` (this is the venue line)

---

## 10. PRIVATE EVENTS FORM (Events page)

**Framer Forms API Endpoint:**
`https://api.framer.com/forms/v1/forms/30fc42f8-d6c6-4282-8d5c-06e4961fcdcb/submit`

**Form fields (7 fields):**

| Label | inputName | type |
|-------|-----------|------|
| First Name | First Name | text |
| Last Name | Last Name | text |
| Phone | Phone | tel |
| Email | Email | email |
| How many people do you expect to have? | Number of people | number |
| Day of the event | Day of event | date |
| What are you celebrating? | Type of celebration | textarea |

**Submit button text:** `Submit`
**Error state text:** `Something went wrong`
**Form styling:** Inter Medium 15px, label color: rgb(136,136,136)

---

## 11. CALENDAR / FRAMER EVENTS

- The `/calendar` page embeds a **Framer Events** widget
- The scroll element ID is `vZ1hwO0ep` (trigger anchor)
- Framer Events script: `https://events.framer.com/script?v=2` (loaded in HTML head)
- The calendar page uses a `Scroll Container` div with the events widget inside
- Calendar hero background (desktop): `CMuhBxXXIGFzmGf1FdeYdw9xtbM.png` (1440×721)
- Calendar main background (mobile): `8qBRQWBnn4Pv6L9J6XzFu6VX4s.png` (1093×1511)

---

## 12. ANIMATIONS

### Scroll-Triggered Gallery Pan
```javascript
// "Images" container — scroll-triggered horizontal movement
{
  trigger: "onScrollTarget",
  viewportThreshold: 1,
  perspectiveFX: false,
  transformTargets: [
    { target: { x: 0, y: 0, scale: 1, opacity: 1 } },     // start
    { ref: scrollRef, target: { x: -1635, y: 0, scale: 1 } }  // end
  ],
  spring: {
    bounce: 0.2, damping: 60, delay: 0, duration: 0.1,
    durationBasedSpring: true,
    ease: [0.44, 0, 0.56, 1],
    mass: 1, stagger: 0, stiffness: 500,
    type: "spring"
  }
}

// Outer wrapper also animates (same scroll target):
// Desktop: x: -270 → x: -716
// Tablet: x: 0 → x: -1087 (scale: 0.9 at end)
// Spring: { damping: 60, delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], mass: 0.1, stiffness: 500, type: "spring" }
```

### Hover Effects
- **Calendar Button video overlay:** `filter: brightness(1.23) saturate(2)` on hover
- **Menu/nav links:** Hover gesture enabled (`hover: true`)
- **Menu Button spring:** `{ bounce: 0.2, delay: 0, duration: 0.4, type: "spring" }`

### Appearance Effect (entrance animation)
- Component: Calendar Button (`w2KVvu11Q` variant on hover)
- Type: `__framer__styleAppearEffectEnabled`
- Threshold: 0.5
- Animate once: false

### Hero scale
- XL (>1200px): scale 0.8 applied to navigation columns
- Tablet: scale 0.65

---

## 13. CSS DESIGN PATTERNS

### Sticky Navigation (fixed bar)
```css
.fixed-nav {
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  height: 34px;
  z-index: 1;
}
```

### Sticky Hero Section
```css
.hero-section {
  position: sticky;
  top: 0px;
  height: 14%;   /* ~14% viewport */
  padding: 49px 0px;
  overflow: clip;
  will-change: filter;
}
```

### Gallery grid (2-col, 3-row)
```css
.gallery-grid {
  display: grid;
  gap: 0px 35px;
  grid-template-columns: repeat(2, minmax(50px, 1fr));
  grid-template-rows: repeat(3, minmax(0, 1fr));
  height: 361px;  /* or 299px, 366px */
  width: 1028px;  /* or 931px, 951px */
  overflow: clip;
  will-change: filter;
}
```

### Gallery grid (3-col, 3-row)
```css
.gallery-grid-3 {
  display: grid;
  gap: 0px 35px;
  grid-template-columns: repeat(3, minmax(50px, 1fr));
  grid-template-rows: repeat(3, minmax(0, 1fr));
  height: 199px;
  width: 877px;
  overflow: clip;
}
```

### Accent blue bar
```css
.accent-bar {
  background-color: #3388ff;
  height: 7px;
  width: 485px;
  overflow: clip;
}
```

### Accent cyan box
```css
.accent-cyan {
  background-color: #99eeff;
  height: 99px;
  width: 219px;
  overflow: clip;
}
```

### Instagram/Map icon buttons
```css
.icon-btn {
  background-color: #ffffff;
  border-radius: 100px;
  width: 32px;
  height: 32px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### Border style (footer top border)
```css
--border-bottom-width: 1px;
--border-color: rgb(255, 255, 255);
--border-left-width: 0px;
--border-right-width: 0px;
--border-style: solid;
--border-top-width: 0px;
```

### Drop shadow (Calendar button)
```css
filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));
-webkit-filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));
```

### Responsive breakpoints (compiled)
```css
@media (min-width: 810px) and (max-width: 1199.98px) {
  /* TABLET */
  .page-root { width: 810px; }
  .hero-content-left { height: 408px; width: 333px; }
}

@media (max-width: 809.98px) {
  /* MOBILE/PHONE */
  .page-root { 
    gap: 13px; 
    padding: 38px 0px; 
    width: 390px; 
  }
}
```

---

## 14. FOOTER STRUCTURE (framer-849PE)

**Component:** `Li-Onna/Footer 2` (displayName)
**Width:** 1440px desktop
**Padding:** `80px 80px 16px 80px`
**Gap:** 24px between sections
**Background:** #000000

### Footer sections (top to bottom):
1. **Top info bar** (border-bottom 1px white, padding 0 24px 24px 24px):
   - Left: Houdinni logo (`I2xEQiWVd6VsIKnaM4YKcSS0U.png`, 269px wide)
   - Below logo: Address block (4px gap between lines)
   - Right: Icon buttons (Instagram, Maps), Contact info block (10px gap, padding-bottom 16px)
   - Address text: `C. de Serrano 41. Salamanca 28001`
   - City: `Madrid, España`
   - Phone: `Tel: +34 671 80 77 47`
   - Email: `hola@houdinni.com`
   
2. **Middle bar** (padding 12px 24px 16px 24px, 24px gap):
   - Left: Mandala Group logo (`iXyETh9yrMzH1DzK3sgd4T4yXA.png`, 20% width)
   - Right: Legal links column (6px gap, flex-end):
     - `POLITICA DE PRIVACIDAD` (white)
     - `AVISO LEGAL` (rgb(161,161,161))
     - `POLÍTICA DE COOKIES` (rgb(171,171,171))
     - `CONTACTO` (white)

3. **Copyright bar** (48px gap):
   - `Copyright ® 2025 Mandala Group.`
   - Font: Editorial New Regular, 12px, letter-spacing 0.02em, center-aligned

---

## 15. NAVIGATION BAR (STICKY HEADER — separate component)

The sticky nav is a separate Framer component loaded at the top. Based on the structure:
- **Height:** 34px (desktop/tablet), auto (mobile)
- **Position:** fixed, z-index 1, full width
- **Variants:** `pR4BjKnFH` (standard), `YN7AmjrtW` (full-width XL override)
- The nav component contains the Houdinni wordmark logo at top left

---

## 16. SITE METADATA

```html
<meta name="generator" content="Framer 3256e0c">
<meta name="framer-search-index" content="https://framerusercontent.com/sites/dqC8kmUC41fsSKzECM4ZV/searchIndex-lNIXMVP2DGRj.json">
<link rel="icon" href="https://framerusercontent.com/images/PQmcL2oNks84qB3ctM5S2qICvGE.png">
<link rel="apple-touch-icon" href="https://framerusercontent.com/images/nAtkhMFL3FTntM7N4siGli0g.png">
```

**OG/Twitter:**
- Title: `Houdinni`
- Description: `Houdinni Madrid`

**Framer Events script (in head):**
```html
<script src="https://events.framer.com/script?v=2"></script>
```

---

## 17. EXTERNAL LINKS SUMMARY

| Link | URL |
|------|-----|
| Menu / Restaurant | https://mandalagroup.menu/es/houdinni |
| Mandala Group | https://mandalagroup.mx/ |
| Instagram | https://www.instagram.com/houdinni.madrid/ |
| Google Maps | https://maps.app.goo.gl/boeQqsrXHHfuHfTW9 |
| Tickets | tickets.houdinni.com |
| Phone (venue) | tel:+34910463911 |
| Framer Forms API | https://api.framer.com/forms/v1/forms/30fc42f8-d6c6-4282-8d5c-06e4961fcdcb/submit |

---

## 18. IMPLEMENTATION NOTES FOR NEXT.JS + TAILWIND

### Tailwind Config additions needed
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'houdinni-black': '#050505',
        'houdinni-white': '#ffffff',
        'houdinni-blue': '#0099ff',
        'houdinni-blue-light': '#3388ff',
        'houdinni-cyan': '#99eeff',
        'houdinni-muted': '#999999',
        'houdinni-card': '#333333',
      },
      fontFamily: {
        'druk': ['"Druk Text Wide Trial Bold"', 'sans-serif'],
        'kanit': ['"Kanit Regular"', 'sans-serif'],
        'array': ['"Array Regular"', 'sans-serif'],
        'helvetica-bold': ['"Helvetica Bold"', 'Helvetica', 'Arial', 'sans-serif'],
        'editorial': ['"Editorial New Regular"', 'serif'],
      },
      screens: {
        'tablet': '810px',
        'desktop': '1200px',
        'xl-frame': '1440px',
      },
    },
  },
}
```

### Key structural notes
1. The sticky nav is 34px fixed at top (z-index: 1)
2. The hero section is `position: sticky` with `height: 14vh`
3. The gallery uses a scroll-triggered horizontal pan (translateX: 0 → -1635px)
4. The main page width is **1200px** (not 1440px — 1440px is only for footer component)
5. All fonts use `font-display: swap`
6. Video backgrounds use `object-fit: cover`, `loop`, `muted`, `autoplay`, `playsInline`
7. The marquee/ticker is implemented as wide images scrolling horizontally, not CSS text marquee
8. The Framer Events calendar widget needs `<script src="https://events.framer.com/script?v=2"></script>` and a trigger element with id
9. Form submission goes to Framer's API — recreate with your own backend or keep the endpoint
10. Both phone numbers appear: `+34 910 46 39 11` (venue tel href) and `+34 671 80 77 47` (WhatsApp/display)
