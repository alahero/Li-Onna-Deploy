# TEHMPLO.COM — COMPLETE DESIGN EXTRACTION
## For pixel-perfect Next.js + Tailwind recreation
> Extracted from live site: https://www.tehmplo.com/ (Published Jan 13, 2026)

---

## 1. COLORS (Exact Values)

| Role | Value |
|---|---|
| Page background | `#0f0e0c` (also `rgb(15, 14, 12)`) |
| Hero/Header background | `#0d0e11` (also `rgb(13, 14, 17)`) |
| Body background root | `rgb(15, 14, 12)` |
| Footer background | `#000000` |
| Accent / Brand orange | `rgb(239, 128, 36)` → hex `#ef8024` |
| Nav text (default) | `rgb(156, 155, 155)` → `#9c9b9b` |
| All primary text | `rgb(255, 255, 255)` → `#ffffff` |
| Nav link hover color | `#0088ff` |
| Subtle text / muted | `rgb(136, 136, 136)` → `#888888` |
| Input placeholder | `#999999` |
| Input/form bg | `#212121` (newsletter form card) |
| Navbar backdrop | `rgba(14, 15, 18, 0.2)` with `blur(5px)` |
| Navbar bottom border | `rgba(255, 255, 255, 0.08)` |
| Events section bg | `linear-gradient(180deg, #434442 0%, rgb(33, 25, 28) 100%)` |
| Newsletter section bg | `linear-gradient(180deg, #000000 0%, rgb(6, 19, 28) 107%)` |
| Mobile newsletter bg | `linear-gradient(180deg, #000000 0%, rgb(6, 19, 28) 50%)` |
| "Open in Maps" button border | `#ef8024` (2px solid) |
| "Book Now" button border | `rgb(239, 128, 36)` (2px solid) |
| Button border-radius | `5px` |
| Footer bottom separator | `rgba(255, 255, 255, 0.22)` (1px) |
| White separator line | `#ffffff` (1px) |

---

## 2. TYPOGRAPHY — Fonts

### Custom Fonts (self-hosted via Framer CDN)
| Font Name | File URL | Style | Weight |
|---|---|---|---|
| **Basteleur Moonlight** | `https://framerusercontent.com/assets/ZM28I6xmYI2CqaJzbdj91az5Q.woff2` | normal | 300 |
| **Basteleur Bold** | `https://framerusercontent.com/assets/SVbQAbOlpeI5gNXTvWqfCe9igOQ.woff2` | normal | 400 |
| **Austin Cyr Italic** | `https://framerusercontent.com/assets/QBINo5g9z5vjRuuYI8mxEg9JQ.woff2` | italic | 400 |
| **Austin Cyr Roman** | `https://framerusercontent.com/assets/ZE60I2vxWsYAXBSskrcx9in9s.woff2` | normal | 400 |
| **Charter Bold** | `https://framerusercontent.com/assets/2vYvoMmnayzPIkgjf4f70duahpc.woff2` | — | — |

### Google Fonts (loaded via Google Fonts CDN)
| Font | Weights Used |
|---|---|
| **Source Sans 3** | 400 (regular), 500 (medium) |
| **Fragment Mono** | 400 |

### System/Third-party
| Font | Source | Weight |
|---|---|---|
| **General Sans** | Fontshare CDN (via Framer) | 400 |
| **Inter** | Framer CDN | 400, 500, 600, 700, 900 |

---

## 3. TYPOGRAPHY USAGE — Exact Sizes & Roles

| Element | Font | Size | Weight | Color | Letter Spacing | Line Height |
|---|---|---|---|---|---|---|
| Hero main headline "ELEVATE YOUR TULUM EXPERIENCE" | Basteleur Moonlight + Austin Cyr Italic | **39px** | 300 / 400 | `#ffffff` | — | `1em` |
| Hero sub-label "VIP TABLES" | Source Sans 3 | **18px** | 400 | `rgb(239, 128, 36)` | `0.14em` | `1em` |
| About section title "experience the REAL Tulum" | Austin Cyr Italic + Basteleur Moonlight | **50px** | 400 | `#ffffff` | — | — |
| "WELCOME TO TEHMPLO" | Austin Cyr Roman | **38px** | 400 | `#ffffff` | — | `1em` |
| Pillar headings (EXPERIENCE / MUSIC / HOSPITALITY) | Basteleur Moonlight | **22px** | 400 | `#ffffff` | — | — |
| Pillar body text | Source Sans 3 | **13px** | 400 | `#ffffff` | — | — |
| Location "GETTING THERE" | Austin Cyr Roman | **38px** | 400 | `#ffffff` | — | `1em` |
| Location address main | Austin Cyr Italic | **20–24px** | 400 | `#ffffff` | — | `1em` |
| Location address detail | Source Sans 3 | **20px** | 500 | `#ffffff` | — | `1em` |
| "OPEN IN MAPS" button text | Source Sans 3 | **19px** | 400 | `#ffffff` | `0.14em` | `1.5em` |
| Nav links | Source Sans 3 | — | 500 | `rgb(156, 155, 155)` | — | — |
| "Book Now" CTA | Source Sans 3 | **19px** | 400 | `rgb(239, 128, 36)` | `0.14em` | `1.5em` |
| "VIP ZONE PACKAGES" label | Source Sans 3 | **14px** | 400 | `#ffffff` | `0.14em` | `1em` |
| Newsletter heading "JOIN THE REAL TULUM" | Basteleur Moonlight + Austin Cyr Italic | **39px** | 300–400 | `#ffffff` | — | `1em` |
| Newsletter sub "NEWSLETTER" | Source Sans 3 | **18px** | 400 | `rgb(239, 128, 36)` | `0.14em` | `1em` |
| Form labels | Source Sans 3 | **12px** | 500 | `#ffffff` | — | — |
| Form inputs | Inter | **14px** | 400 | `#999999` | — | `1.2em` |
| Footer address (desktop) | Austin Cyr Italic | **26px** | 400 | `#ffffff` | — | `1em` (right-aligned) |
| Footer address detail | Source Sans 3 | **20px** | 500 | `#ffffff` | — | `1em` (right-aligned) |
| Footer address (mobile) | Austin Cyr Italic | **8px** | 400 | `#ffffff` | — | `1em` |
| Footer links (T&C, Privacy) | General Sans | **10px** | 400 | `#ffffff` | — | — |
| Cookie button | General Sans | **10px** | 400 | `#ffffff` | — | — |
| Spline 3D embed label | General Sans | **10px** | 400 | `#ffffff` | — | — |

---

## 4. BREAKPOINTS

| Name | Media Query | Max Content Width |
|---|---|---|
| Desktop | `min-width: 1200px` | **1200px** |
| Tablet | `min-width: 810px and max-width: 1199.98px` | **810px** |
| Mobile | `max-width: 809.98px` | **390px** |

Framer breakpoint CSS classes:
```css
@media(min-width: 1200px) { .hidden-72rtr7 { display:none!important } }
@media(min-width: 810px) and (max-width: 1199.98px) { .hidden-1ng16j6 { display:none!important } }
@media(max-width: 809.98px) { .hidden-1q0845s { display:none!important } }
```

---

## 5. PAGE STRUCTURE (Section Order)

```
<Navbar>           — Fixed, top: 0, height: 60px, z-index: 6, backdrop-blur(5px)
<Hero/Header>      — 100vh, background-color: #0d0e11, full-bleed
  ↳ hero bg image  — 8460×5020px
  ↳ Vimeo video    — opacity: 0.08 overlay
  ↳ Spline 3D      — 88.375vh, positioned absolutely
  ↳ Headline text  — "ELEVATE YOUR TULUM EXPERIENCE" centered
<events anchor>    — <header id="events"> (zero-height anchor, no visual)
<VIP Tables>       — id="viptables", 318px height, scroll-margin-top: 30px
  ↳ bg image       — 1921×470px banner
  ↳ Vimeo video bg
  ↳ Headline       — "ELEVATE YOUR TULUM EXPERIENCE"
  ↳ CTA "BOOK NOW" — WhatsApp link, orange border button 195px wide × 33px
  ↳ Label          — "VIP ZONE PACKAGES"
<Location>         — id="location", 574px height, scroll-margin-top: 64px
  ↳ bg image       — 1920×822px
  ↳ Google Maps embed (512px wide × 370px tall)
  ↳ "GETTING THERE" heading
  ↳ Address
  ↳ "OPEN IN MAPS" button (267px × 48px, orange border)
  ↳ Distance info grid (drive/bike/walk from Hotel Zone & Aldea Zama)
<About>            — id="about", 100vh
  ↳ bg image       — 1200×799px
  ↳ "experience the REAL Tulum" spaced-letter heading
  ↳ "WELCOME TO TEHMPLO" + tagline
  ↳ Three pillars: EXPERIENCE / MUSIC / HOSPITALITY (w/ images, 255px each col)
<Newsletter>       — 456px height (desktop), gradient bg
  ↳ "JOIN THE REAL TULUM" + "NEWSLETTER"
  ↳ Form: NAME, LAST NAME, EMAIL, CELLPHONE (2×2 grid, 454px wide card)
  ↳ SUBSCRIBE button (411px wide × 39px)
  ↳ Legal text + Privacy link
<Footer>           — 339px height, background: #000000
  ↳ Logo image (247px desktop, 136px mobile)
  ↳ Address (right-aligned desktop)
  ↳ email: hello@tehmplo.mx
  ↳ Separator line (rgba 255,255,255, 0.22)
  ↳ "experience the REAL Tulum, WELCOME TO TEHMPLO" badge image
  ↳ TERMS & CONDITIONS link → /tc
  ↳ PRIVACY POLICY link → /tc
  ↳ COOKIES button
  ↳ Language selector (EN/ES)
```

---

## 6. ALL IMAGES — URLs & Dimensions

### Logos & Icons
| Image | URL | Dimensions | Usage |
|---|---|---|---|
| Logo (Tehmplo wordmark) | `https://framerusercontent.com/images/AvvEiG4fIEgz7VOdCR0y9M1U4K0.png` | 5610×905px | Nav + footer |
| Favicon (light) | `https://framerusercontent.com/images/Xj1NoYbq8e0bioRxv1Th4quWi4Y.png` | — | `<link rel="icon">` |
| Favicon (dark) | `https://framerusercontent.com/images/cnaBsmt68crRYVwEBstDIG8NHxQ.png` | — | `<link rel="icon" dark>` |
| Apple touch icon | `https://framerusercontent.com/images/E8YfwbKXja9ooKJxoLW5pLbY.png` | — | Apple touch |
| Footer brand image ("experience the REAL Tulum") | `https://framerusercontent.com/images/lQ4ELfj30I4pKFPmVV0yFDXMphs.png` | 1834×375px | Footer badge |
| Footer top logo | `https://framerusercontent.com/images/usMPS2dafajwZj8TjlJDcu0nXSE.png` | 1342×217px | Footer logo |

### Section Background Images
| Image | URL | Dimensions | Usage |
|---|---|---|---|
| Hero background | `https://framerusercontent.com/images/6MYzZUk4QFQlANcHnFdjL8np4TA.png` | **8460×5020px** | Hero/Header full-bleed bg |
| VIP Tables banner | `https://framerusercontent.com/images/E1aDWbWIrwqwn1zjlZjwV1uZFA4.png` | **1921×470px** | VIP section banner |
| Location bg | `https://framerusercontent.com/images/EBIv8d2yhOxTGoortNWckzRvOVc.png` | **1920×822px** | Location section bg |
| About bg | `https://framerusercontent.com/images/QU7gAAWMqOVHnF6DiwGGiV4zg.png` | **1200×799px** | About section bg |

### Nav Link Hover Images (thumbnail previews shown on nav link hover)
| Image | URL | Dimensions | Nav Link |
|---|---|---|---|
| VIP Tables nav hover | `https://framerusercontent.com/images/z2uSPuSXPSkwIKZNNXzEb1lANRM.png` | 1438×1643px | #viptables |
| Events nav hover | `https://framerusercontent.com/images/5m9ZMHuztsmx0HVTTd2G1S7F0.png` | 1617×1617px | #events |
| About nav hover | `https://framerusercontent.com/images/LFv716a1uNhpSK0xh1Q7HFCgRo.png` | 439×410px | #about |
| Location nav hover | `https://framerusercontent.com/images/G22KtZeiZ9KSOQSsz8cGe1ljDz0.png` | 328×437px | #location |

### About Section Pillar Images
| Image | URL | Dimensions | Usage |
|---|---|---|---|
| Experience pillar | `https://framerusercontent.com/images/sIemnntVrMGNKLWRmNtW2mAO5A.png` | 692×878px | Experience icon/photo |
| Music pillar | `https://framerusercontent.com/images/of5igx21NWHEfxfouDjh8sDDuU.png` | 1254×937px | Music icon/photo |
| Hospitality pillar | `https://framerusercontent.com/images/SLf9xQYNtCRY5BB2EwemVuLk.png` | 415×375px | Hospitality icon/photo |

### Other Images
| Image | URL | Dimensions | Usage |
|---|---|---|---|
| Location map inset | `https://framerusercontent.com/images/ciUuySKALLOHWXz5oM8wMfnenC0.png` | 1119×1492px | Location detail |
| Venue square photo | `https://framerusercontent.com/images/O8DkVaEQkGC2wWUjzidEmlDMZDI.png` | 1781×1781px | Venue photo |
| Small icon 7G1R | `https://framerusercontent.com/images/7G1RIEKbfMK9IONmFH78ERPV0.png` | 156×93px | Distance/nav icon |
| Arrow/pin Cn32 | `https://framerusercontent.com/images/Cn32CWNlQeeAz1FRpeSMmHrZvCo.png` | 76×117px | Maps pin icon |
| YsBEJ badge | `https://framerusercontent.com/images/YsBEJ2xFVYqgCp7r4FMC5O1fvrk.png` | 134×129px | Small badge |

---

## 7. ALL TEXT CONTENT (Verbatim)

### Navigation
```
VIP TABLES | EVENTS | ABOUT | LOCATION
```

### Hero / VIP Tables Section
```
ELEVATE YOUR TULUM EXPERIENCE.
VIP TABLES

[Button: BOOK NOW]
VIP ZONE PACKAGES
```

**"ELEVATE YOUR" uses Austin Cyr Italic for "YOUR" and "TULUM", Basteleur Moonlight for "ELEVATE" and "EXPERIENCE"**

### Location Section
```
GETTING THERE
Parcela, Carretera Tulum - Boca Paila 1678-Km. 5.5, 77780 Tulum, Q.R.

[Button: OPEN IN MAPS]

               FROM HOTEL ZONE    FROM ALDEA ZAMA
DRIVE:         15 MIN.            20 MIN.
BIKE RIDE:     08 MIN.            15 MIN.
WALK:          40 MIN.            60 MIN.
```

### About Section
**Animated headline (letter-by-letter entrance):**
```
e x p e r i e n c e  t h e  R E A L  T u l u m
```
*("experience the" in Austin Cyr Italic, "REAL" in Basteleur Moonlight, "Tulum" in Austin Cyr Italic)*

```
WELCOME TO TEHMPLO
MINDFUL CURATED ACTS • CAREFULLY CRAFTED EXPERIENCES • PRISTINE PRODUCTION.
Hidden in the jungle, this is where music, people, and emotions come together to make Tulum truly one of a kind.
```

**Three pillars:**

**EXPERIENCE**
> Our venue is designed to blend into the environment, respecting the raw essence of the majestic jungle of Tulum.

**MUSIC**
> Carefully picked artists, showcases and events dedicated to matching with the Tulum essence and community.

**HOSPITALITY**
> Our team is thoroughly trained in the F&A industry. They care for our Bars, Tables, & VIP areas, ensuring our guests enjoy their Tulum experience.

### Newsletter Section
```
JOIN THE REAL TULUM
NEWSLETTER

[Form fields:]
NAME          LAST NAME
EMAIL         CELLPHONE

[Button: SUBSCRIBE]

By signing up, I agree to Tehmplo's Terms of Use and Privacy Policy.
```

### Footer
```
Parcela, Carretera Tulum - Boca Paila
1678-Km. 5.5, 77780 Tulum, Q.R.

hello@tehmplo.mx

TERMS & CONDITIONS    PRIVACY POLICY    COOKIES

[Language: English | Select Language dropdown]
```

---

## 8. INTERACTIVE ELEMENTS

### Navigation Links
```
./#viptables  — VIP TABLES
./#events     — EVENTS (used as anchor only, empty <header>)
./            — Logo (centered)
./#about      — ABOUT
./#location   — LOCATION
```

### CTA Buttons
| Button | Link | Style |
|---|---|---|
| BOOK NOW | `https://wa.me/+52+529981909288?text=Hi,%20I%20would%20like%20to%20get%20info%20for%20VIP%20Tables%20at%20Tehmplo` | 2px solid `#ef8024`, border-radius: 5px, 195×33px (desktop) |
| OPEN IN MAPS | `https://www.google.com/maps?ll=20.16939,-87.455675&z=16&t=m&hl=es-419&gl=MX&mapclient=embed&cid=15257279752080205533` | Same border style, 267×48px |
| SUBSCRIBE | Form submit button | 411px wide, 39px tall |

### Google Maps Embed
```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.15213160337!2d-87.4556748!3d20.1693903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4fd1f4128f7f1f%3A0xd3bcbf19158026dd!2sTehmplo!5e0!3m2!1ses-419!2smx!4v1743720471638!5m2!1ses-419!2smx
```
- iframe: 400×300px (displayed in 512px wide container)
- Desktop: appears left of text, in `1f5oa8n` flex container

### WhatsApp Number
`+52 998 190 9288` (wa.me link: `+52+529981909288`)

### Contact Email
`hello@tehmplo.mx`

### Language Toggle
EN / ES-MX (via Framer locale picker — hidden `<select>` with visible UI)

---

## 9. MEDIA EMBEDS

### Hero Video (Vimeo)
- Embedded via Framer Vimeo component
- `id="gV7TSdL5l"` — `background: rgb(0,0,0)`, opacity `0.08` over hero
- Full-width 100vh overlay

### VIP Tables Background Video (Vimeo)
- `id="Wfh4uC3RW"` — `name="Background Video Star"`
- Background: `rgba(0,0,0,0)` (transparent, video itself is the content)
- Desktop: normal scale; Mobile: `scale(4) rotate(-90deg)` for portrait fit
- Tablet: `scale(2.5)`

### Spline 3D Scene (Hero)
- URL: `https://my.spline.design/untitled-a0437a7d64d3670e9d2c5846d0642085/`
- Container: 1200px wide × 88.375vh tall, `top: 93px`, positioned absolute
- Displayed via `<iframe>` with sandbox

---

## 10. ANIMATIONS

### About Section — Letter Entrance Animation
Each individual letter of "experience the REAL Tulum" has:
```css
display: inline-block;
opacity: 0.001;
filter: blur(5px);
transform: translateX(0px) translateY(10px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg);
```
→ Then animates to `opacity: 1, filter: none, transform: none` (staggered per letter)

### Nav Link Hover Image
Each nav link shows a small preview image that appears on hover via `transform: translateY(-50%)` / `translateY(-50%)` reveals

### Smooth Scroll
Uses **Lenis** smooth scroll library:
```css
html.lenis { height: auto; }
.lenis.lenis-smooth { scroll-behavior: auto !important; }
```

### Button Hover State (BOOK NOW)
- Default: `rgba(69, 205, 255, 0)` background (transparent), orange border
- Hover: border color animates (via Framer hover variant)

### Navbar Transitions
- Desktop: `backdrop-filter: blur(5px)`, `background-color: rgba(14, 15, 18, 0.2)`
- Mobile closed: `background-color: rgba(14, 15, 18, 0)` (transparent when menu closed)

---

## 11. NAVBAR — Exact Layout

**Desktop (≥1200px):** Horizontal nav, 1200px wide, 60px tall, `justify-content: space-around`
- Container class: `framer-pq4v2r`, flex row, `gap: 116px`
- Nav links: each 106px wide × 41–42px tall
- Logo: 381px wide × 193px tall container, image displayed at 314px wide (`transform: scale(0.4)` from 5610px source)
- Nav order L→R: VIP TABLES → EVENTS → [LOGO center] → ABOUT → LOCATION

**Tablet (810–1199px):** Same horizontal layout, width adapts

**Mobile (<810px):** Hamburger menu
- Burger icon: 46px wide × 37px tall, two horizontal bars (3px tall each, 24px wide, white, rounded 3px)
- Logo: displayed at 158px wide
- Menu opens vertically with full links

---

## 12. NEWSLETTER FORM

**Card:** `#212121` background, 12px border radius, 454px wide × 281px tall (desktop), centered with `left: 618px, top: 50%`

**Grid:** 2×2 grid, 20px gap, 20px padding
**Fields:** NAME, LAST NAME, EMAIL, CELLPHONE
- Input style: `background: rgba(186, 186, 186, 0)`, bottom border: `1px solid rgba(0,0,0,0.6)`, border-radius: 10px
- Font: Inter 14px, color `#999999`

**Submit Button:** 411px wide, 39px tall, absolute positioned `bottom: 48px`
**Legal text:** Source Sans 3, 12px, centered, white, links to ./tc

---

## 13. DISTANCE GRID (Location Section)

Two columns: "FROM HOTEL ZONE" and "FROM ALDEA ZAMA"
Three rows: DRIVE / BIKE RIDE / WALK

```
FROM HOTEL ZONE:   15 MIN. DRIVE  |  08 MIN. BIKE RIDE  |  40 MIN. WALK
FROM ALDEA ZAMA:   20 MIN. DRIVE  |  15 MIN. BIKE RIDE  |  60 MIN. WALK
```

Text style: Source Sans 3, `letter-spacing: 0.14em`, `line-height: 1.5em`, 17px, white

---

## 14. FOOTER — Exact Layout (Desktop, 339px height)

```
[Logo image — 247px wide, left: 21%, top: 20%]         [Address text — right-aligned, left: 73%]
                                                          Parcela, Carretera Tulum - Boca Paila  (Austin Cyr Italic 26px)
                                                          1678-Km. 5.5, 77780 Tulum, Q.R.        (Source Sans 3 20px 500)
                                                          
                                                          hello@tehmplo.mx                        (Source Sans 3 20px 500)

─────────────────── separator (rgba 255,255,255, 0.22, 943px wide) ───────────────────────

["experience the REAL Tulum" badge — 289px wide, left: 23%, top: 77%]

[TERMS & CONDITIONS]  [PRIVACY POLICY]  [COOKIES]  [English selector]   ← General Sans 10px
```

---

## 15. /TC PAGE — Terms & Conditions

**Title:** `TÉRMINOS Y CONDICIONES GENERALES DE TEHMPLO.COM`
**Last updated:** `02 de Mayo de 2025`
**Language:** Spanish

**Sections:**
1. ACCESO Y USO DEL SITIO WEB
2. IDENTIFICACIÓN DE LAS PARTES (Core Global Trans-Logistic SA de CV, C. Luigi Pirandello 5297, Col. Vallarta Universidad, 45110, Zapopan, Jalisco)
3. GENERALIDADES (Tickets via Tickets.tehmplo.com / VivaTickets exclusively)
4. POLÍTICA DE REEMBOLSO Y TRANSFERENCIA (No refunds; name transfer with original buyer ID)
5. EVENTO, ARTISTAS Y HORARIOS SUJETOS A CAMBIOS
6. PROPIEDAD INTELECTUAL DE TEHMPLO (irrevocable image/voice rights granted on attendance)
7. PROHIBICIÓN DE TRANSMISIONES EN VIVO
8. ASUNCIÓN DE RIESGO, RENUNCIA Y LIMITACIÓN DE RESPONSABILIDAD
9. CHECK-IN Y HORARIO (Check-in: 21:00–02:00, ~15 min validation)
10. FORMAS DE PAGO (Credit/debit: Visa, MasterCard, Discover, AmEx; Mexican Pesos only)
11. PRODUCTOS ESPECIALES (Multi-ticket packages Dec 31, 2025–Jan 12, 2026)
12. REQUERIMIENTOS DE ENTRADA (18+, valid ID, dress code, prohibited items)
13. ARTÍCULOS PROHIBIDOS

**Prohibited items include:** weapons, professional recording equipment, large bags, controlled substances

---

## 16. TECHNICAL METADATA

| Property | Value |
|---|---|
| Framework | Framer (version `b322937`) |
| Published | January 13, 2026, 10:15 PM UTC |
| SSR released | 2026-01-12T13:29:41.257Z |
| Page optimized | 2026-01-13T22:15:55.963Z |
| Analytics | Google Analytics `G-FVMKLEM3NT` |
| Canonical URL | https://www.tehmplo.com/ |
| hreflang | `en` (default), `es-MX` (/es/) |
| OG image | Not in static HTML (likely set dynamically) |
| Robots | `max-image-preview:large` |
| Description | "Hidden in the jungle, this is where music, people, and emotions come together to make Tulum truly one of a kind. World-class DJs and an atmosphere that awakens your senses." |

---

## 17. NEXT.JS TAILWIND IMPLEMENTATION NOTES

### CSS Variables to define
```css
:root {
  --color-bg: #0f0e0c;
  --color-hero-bg: #0d0e11;
  --color-accent: #ef8024;   /* rgb(239, 128, 36) */
  --color-nav-text: #9c9b9b; /* rgb(156, 155, 155) */
  --color-text: #ffffff;
  --color-muted: #888888;
  --color-form-bg: #212121;
  --color-footer-bg: #000000;
}
```

### Tailwind Config (tailwind.config.ts)
```js
colors: {
  'tehmplo-bg': '#0f0e0c',
  'tehmplo-hero': '#0d0e11',
  'tehmplo-accent': '#ef8024',
  'tehmplo-nav': '#9c9b9b',
  'tehmplo-form': '#212121',
}
fontFamily: {
  'basteleur': ['"Basteleur Moonlight"', 'sans-serif'],
  'basteleur-bold': ['"Basteleur Bold"', 'sans-serif'],
  'austin-italic': ['"Austin Cyr Italic"', 'sans-serif'],
  'austin-roman': ['"Austin Cyr Roman"', 'sans-serif'],
  'source-sans': ['"Source Sans 3"', 'sans-serif'],
  'general-sans': ['"General Sans"', 'sans-serif'],
  'inter': ['Inter', 'sans-serif'],
}
screens: {
  'sm': '390px',
  'md': '810px',
  'lg': '1200px',
}
```

### Key layout values
- Nav height: `60px`, `position: fixed`, `z-index: 6`
- Max content width: `1200px`
- Mobile width: `390px`
- VIP section height: `318px`
- Location section height: `574px`
- About section height: `100vh`
- Newsletter section height: `456px` (desktop), `534px` (mobile)
- Footer height: `339px`
