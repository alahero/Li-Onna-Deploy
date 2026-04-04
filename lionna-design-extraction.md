# LI-ONNA リオンナ — Complete Design Extraction
> Extracted from https://lionna.es/ · Last site update: Dec 9, 2025
> For pixel-perfect Next.js + Tailwind recreation

---

## 1. BRAND IDENTITY

- **Name (display):** LI-ONNA
- **Japanese name:** リオンナ (katakana: ri-o-n-na — U+30EA U+30AA U+30F3 U+30CA)
- **Tagline:** "Cocina japonesa con alma latina"
- **Hero greeting:** "hola Madrid"
- **Brand statement:** "Desde esta esquina en el corazón de la capital perseguimos la sintonía perfecta entre la cocina japonesa y nuestras raíces latinas creando una atmósfera atemporal y auténtica."
- **CMS ID:** Framer site ID `444Zjpj4rTuCyWXDsWsnPL`

---

## 2. COLORS (Exact Values)

### Primary Palette
| Token | Hex | Usage |
|---|---|---|
| Brand Blue | `#005BFF` / `rgb(0, 91, 255)` | Nav bar BG, CTA buttons background, hero text |
| Brand Blue (variant) | `#005CFE` / `rgb(0, 92, 254)` | CTA buttons (contact form submit), body text accent |
| Brand Blue Light | `#005DFD` | Link text color |
| Brand Blue Alt | `#005BF9` | Current link color |
| Page Background | `#F7F8F3` | Root page background |
| Section Background | `#F6F6F2` | Off-white content sections |
| Gradient Start | `#F6F4F0` | Gradient in photo section |
| Gradient Trans | `#F6F4F000` | Transparent gradient start |
| White | `#FFFFFF` / `rgb(255, 255, 255)` | Text on blue, nav, overlay |
| Black | `#000000` | Body text |
| Light Gray | `#E3E3E3` | Token color (borders/dividers) |
| Medium Gray | `#8C8C8C` | Hover state for links |
| Dark Navy | `#00102E` | Current link color (alt) |
| Light Blue | `#D4EBFF` | Hover link color |
| Overlay | `rgba(0, 0, 0, 0.3)` | Modal overlay |
| Nav Overlay | `rgba(0, 0, 0, 0.302)` | Mobile menu overlay |
| Glass card | `rgba(255, 255, 255, 0.1)` | Semi-transparent cards |
| White 80% | `#FFFFFFBF` | White semi-transparent |
| Blue 30% | `#005BFF4D` | Blue semi-transparent (mobile) |

### Design Tokens (CSS variables on body)
```css
--token-46582866-06e6-4e1a-9f17-de823848f813: #e3e3e3;
--token-ada24fd4-77f0-4880-9857-74463b5d775b: #fff;
--token-ea950c64-5afa-4b79-96d5-372e92ba5e69: #e3e3e3;
--token-12b094fe-3ff6-4d99-bf30-e2bf6e12aeba: #fff;
```

---

## 3. TYPOGRAPHY

### Font Families (all served from framerusercontent.com)

| Family Name | Weight | Usage | WOFF2 URL |
|---|---|---|---|
| **Odesta Regular Regular** | 600 (display) | Hero "hola Madrid", "Imprescindibles", dish names, section titles | `https://framerusercontent.com/assets/NgzKruRo8Lke2A7u9sKhAp37qo.woff2` |
| **Odesta Medium Regular** | 600 (display) | Secondary display text | `https://framerusercontent.com/assets/M2IZBj7cY7Jc4Fcm06CVgpbwQ.woff2` |
| **Editorial New Medium** | 500 | Nav items, labels, button text, section labels, small caps | `https://framerusercontent.com/assets/t5CEKBcH3elZnrTQXyLfolQ00.woff2` |
| **Editorial New Regular** | 400 | Body text, subtitles, descriptions, form labels | `https://framerusercontent.com/assets/o7NxqFm5JSnwuYiiGCwUgl6Pi2I.woff2` |
| **Editorial New Thin** | 100 | Large thin decorative text | `https://framerusercontent.com/assets/p41UOFADaqudUOpPaWIhG2nr5vQ.woff2` |
| **Editorial New Bold** | 700 | Bold editorial text | `https://framerusercontent.com/assets/Et0lgQuEPkG4VJEIQlQkm59x6s.woff2` |
| **Editorial New Light** | – | Light editorial text | `https://framerusercontent.com/assets/Tggg3GiaGmnIuNydBwR00UmzhI.woff2` |
| **Core Circus Regular** | – | Decorative / display use | `https://framerusercontent.com/assets/bt1FlXIE9FpUS3mxJPKL0UinyIw.woff2` |
| **Core Circus 2D Line2 Regular** | – | Decorative outline variant | `https://framerusercontent.com/assets/0g8F9Je7QV1G3ofXkQMUo8hoT0.woff2` |
| **Inter** | 400 | Form inputs, small UI text | system / framer CDN |

### Typography Scale (with breakpoints)

#### Hero "hola Madrid" — Odesta Regular Regular
- Desktop (≥1440px): `84px`, `letter-spacing: 0.02em`, color `rgb(0, 91, 255)`, `text-align: right`
- Tablet (810–1439px): `44px`, `letter-spacing: 0.02em`, color `rgb(0, 91, 255)`, `text-align: right`
- Mobile (≤809px): implied ~30px

#### "Imprescindibles" section title — Odesta Regular Regular
- Desktop: `50px`, `letter-spacing: 0.02em`, `text-align: center`, color `rgb(0, 92, 254)`

#### Dish names ticker — Editorial New Regular (h4, preset `kta4qq`)
- Desktop (≥1200px): `22px`, `letter-spacing: -0.04em`, `line-height: 1.4em`, color `#fff`
- Tablet (810–1199px): `18px`
- Mobile (≤809px): `16px`

#### Section H2 — Editorial New Regular (preset `b9ovq7`)
- Desktop (≥1440px): `60px`, `letter-spacing: -0.04em`, `line-height: 1.4em`, color `#000`
- Tablet (810–1439px): `44px`, `letter-spacing: -0.04em`
- Mobile (≤809px): `36px`, `letter-spacing: -0.02em`

#### Section H3 — Editorial New Medium (preset `hrixfk`)
- Desktop (≥1440px): `34px`, `letter-spacing: 0.01em`, `line-height: 1.2em`
- Tablet (810–1439px): `24px`
- Mobile (≤809px): `19px`

#### Body paragraph — Editorial New Regular (preset `15oastb`)
- All: `16px`, `letter-spacing: 0.02em`, `line-height: 1.2em`, `text-align: center`, color `#000`

#### Nav links — Editorial New Medium
- `13px`, `letter-spacing: 0.04em`, color `rgb(255, 255, 255)`

#### "RESERVAS / PRONTO" pill buttons — Editorial New Medium
- `13px`, color `rgb(0, 92, 254)` or `rgb(255, 255, 255)` (context-dependent)

#### Logo SVG on navbar — Editorial New Medium
- `12px`, `letter-spacing: 0.21em`, `line-height: 0.1em`, color white

#### Footer text / legal — Editorial New Regular
- `10px`–`14px`, `letter-spacing: 0.1em`, color white

#### Contact/form submit button — Editorial New Medium
- `14px`, `letter-spacing: 0.04em`, color white on `#005CFE` background

#### Section "MENÚ" button — Editorial New Medium
- `12px`, `letter-spacing: 0.21em`

#### Large display text — Odesta Regular Regular + Editorial New Thin
- Large display: `81px`–`111px` (seen in CSS)
- Thin variant: `44px`–`48px`

#### Japanese text (リオンナ) — Odesta Regular Regular
- Appears at `30px`–`50px` sizes in body/footer

---

## 4. LAYOUT & BREAKPOINTS

### Breakpoints (Framer-defined)
```
Desktop:  min-width: 1440px    (hash: nuvou2)   — container: 1440px
Tablet:   810px–1439.98px      (hash: 1cnx3bs)  — container: 810px
Mobile:   max-width: 809.98px  (hash: ymy34r)   — container: 390px
```

### Responsive Padding
| Section | Desktop | Tablet | Mobile |
|---|---|---|---|
| Nav bar | `0 80px` | `0 64px` | `0 16px` |
| Hero content | `0 80px` | – | `0 16px` |
| Photo/content sections | `120px 80px 80px` | `120px 24px 80px` | `120px 0 80px` |
| Floating dish section | `80px 80px 90px` | `80px 24px 90px` | `24px 16px` |
| About section | `120px 80px 24px` | – | `24px 16px` |

### Key Dimensions
- **Nav bar height:** `60px` (sticky, z-index: 4), blue `#005BFF`
- **Logo nav area height:** `80px`, sticky top 0
- **Hero section height:** `100vh` desktop, `90vh` mobile
- **Viewport offset section:** `46vh` desktop, `36vh` mobile
- **Page width (max):** `1440px` desktop
- **Mobile drawer:** `371px` wide, right-anchored, `border-radius: 12px`, white BG
- **Mobile drawer position:** `top: 76px`, `bottom: 16px`, `right: 16px`

---

## 5. PAGE STRUCTURE — HOMEPAGE (/)

### Section 1: Full-Page Video Hero (Background-color)
- **Component:** `framer-m5tbbn` — fixed, full viewport, z-index: 1, background `#005BFF`
- **Video:** `https://framerusercontent.com/assets/NNn0oRHAdCKhmfzY0qcxeLYBKuM.mp4`
  - `loop`, `muted`, `playsinline`, `preload="none"`
  - `object-fit: cover`, `object-position: 50% 50%`
- **Video poster/fallback:** `https://framerusercontent.com/images/PgbwLB2TLZN4eoatElS6gXmfHz8.png`
- **Opacity overlay on video:** `opacity: 0.3` (framer-ls7axf-container)
- **Mask on video container:** `linear-gradient(#000 63.5276%, #0000 100%)` (top to bottom fade-out)

### Section 2: Hero Content Overlay
- **Class:** `framer-1w1x9tv` — flex column, `height: 100vh`, `padding: 0 80px`
- **Sub-element (sticky top bar):** `framer-e4e5zt` — sticky, `height: 80px`
  - Contains: Logo (36% width), navigation links
- **Logo (large):** `framer-l0pssb` — aspect-ratio 3.85517, `width: 36%`
  - Image: `https://framerusercontent.com/images/FaDW9YPrzIzhcSzyIqVv92TAEn8.svg` (7966×2181px)
- **Scroll indicator:** circular animated element, `140×140px` at bottom center
- **Lionna Curve badge:** animated rotating circle `framer-30ei2y-container` `140×140px`
- **Down arrow:** `framer-1we6yiq-container` `32×32px` at bottom center

### Section 3: Navigation Bar (Sticky)
- **Class:** `framer-25ilpa`
- **Height:** `60px`, `position: sticky; top: 0`, `z-index: 4`
- **Background:** `#005BFF`
- **Padding:** `0 80px` desktop, `0 64px` tablet, `0 16px` mobile
- **Layout:** flex row, `justify-content: space-between`, `align-items: center`
- **Left:** Logo link (SVG, `width: 7%`, aspect-ratio 3.84615)
  - Logo image: `https://framerusercontent.com/images/1yUb7j2eehJHrooYzEHWMngRXA.png` (607×89px)
  - Or secondary logo: `https://framerusercontent.com/images/iXyETh9yrMzH1DzK3sgd4T4yXA.png` (442×84px)
- **Center nav links (desktop):**
  - `Eventos` → `/eventos`
  - `Tarjetas Regalo` → `/giftcards`
  - `Contacto` → `/contact`
  - Gap: `24px` between items
- **Right:** "RESERVAS / PRONTO" pill button
  - Style: `background: rgba(255,255,255,0.1)`, `border: 1px solid #fff`, `border-radius: 8px`
  - Font: Editorial New Medium, 13px

### Section 4: Hero Text
- **"hola Madrid"** — Odesta Regular Regular, `84px`, `rgb(0, 91, 255)`, `text-align: right`
- **Body copy:** "Desde esta esquina en el corazón..." — Editorial New Regular, ~`24px`, `letter-spacing: 0.02em`, `text-align: justify`

### Section 5: Photo Gallery Section (framer-tnwvjl)
- **Background:** `#F6F6F2`
- **Section wrapper:** `framer-11tutbb` — `padding: 120px 80px 80px`, flex column, `gap: 48px`
- **SVG Curve decoration:** `framer-15boe1` — aspect-ratio 0.671141, `width: 96%`, absolute positioned at top, uses `FaDW9YPrzIzhcSzyIqVv92TAEn8.svg`
- **Gradient overlay:** `framer-w5b5wf` — `linear-gradient(#f6f4f000 0%, #f6f4f0 68.7829%)`, `654px` tall, absolute at bottom
- **Floating photo cards** (absolutely positioned, animated scroll parallax):
  - Card 1 (`framer-1lntjlu`): `222×231px`, `top: 171px`, `right: 418px`, `z-index: 6`
  - Card 2 (`framer-16d5ez`): `243×344px`, `top: -22px`, `right: 149px`, `z-index: 5`
  - Card 3 (`framer-hs11q7`): `288×339px`, `bottom: 149px`, `left: 75px`, `z-index: 5`
  - Card 4 (`framer-1fbmi6m`): `217×215px`, `top: 395px`, `left: 532px`, `z-index: 6`
  - Card 5 (`framer-xhjzkc`): `264×311px`, `bottom: 26px`, `right: 172px`, `z-index: 5`
  - Card 6 (`framer-1tis485`): `228×267px`, `top: 539px`, `left: 304px`, `z-index: 5`
  - Card 7 (`framer-g883a4`): `359×231px`, `bottom: -82px`, `left: 570px`, `z-index: 6`
  - All cards: `border-radius: 2px`, box-shadow layered (subtle realistic shadow):
    ```
    0.398px 0.398px 0.563px -0.9375px #0000002e,
    1.207px 1.207px 1.707px -1.875px #0000002b,
    3.191px 3.191px 4.513px -2.8125px #00000026,
    10px 10px 14.142px -3.75px #0000000f
    ```
- **Photo container section:** `framer-148sddx` — `height: 90vh`, `padding: 80px 80px 90px`

### Photo Images (used in floating cards and sections)
| Image | URL | Dimensions | Notes |
|---|---|---|---|
| Interior/atmosphere | `https://framerusercontent.com/images/dDDquKhowGHY7sXWVULdPvdaEs.png` | 1300×1937 | Portrait — interior shot |
| Dish photo 1 | `https://framerusercontent.com/images/KcZHwCV5NtzmQYlMHozlGR6p4.jpg` | 900×900 | Square — food |
| Dish photo 2 | `https://framerusercontent.com/images/YOlUsHpKPBpYFu5zLyo8KVRDTyc.jpg` | 1365×2048 | Portrait |
| Dish photo 3 | `https://framerusercontent.com/images/7G3aON4HZdbB3RrCsnya1HKPJHo.jpg` | 1365×2048 | Portrait |
| Interior wide | `https://framerusercontent.com/images/TROkdWJlgaw4uhSp82WEz6fzY.jpg` | 2048×1365 | Landscape |
| Portrait dish | `https://framerusercontent.com/images/u4Fjl2KkKDKGajIPZvm8lgV5o.jpg` | 2000×3000 | Portrait tall |
| Interior 2 | `https://framerusercontent.com/images/66FNBIOl5ycFb6RnoCicr388M.png` | 1206×1284 | Near-square |
| Interior 3 | `https://framerusercontent.com/images/KYqz2wBJTfWexp8CfbYBn5JKdM.jpg` | 1512×1119 | Landscape |
| Dish portrait | `https://framerusercontent.com/images/4t5SAoxli4JUQzYY3yVl9gjOH10.jpg` | 2000×3000 | Portrait tall |
| Dish portrait 2 | `https://framerusercontent.com/images/NQRXSjuHyVmjhdMaXAy2UwD221w.jpg` | 1365×2048 | Portrait |
| Background noise/texture | `https://framerusercontent.com/images/iQtL7jmW7HJ3WSzPZcDtiOf9o8A.png` | 1882×895 | Texture overlay |

### Section 6: "Imprescindibles" + Dish Names Ticker
- **Heading:** "Imprescindibles" — Odesta Regular Regular, `50px`, `letter-spacing: 0.02em`, `text-align: center`, `rgb(0, 92, 254)`
- **Ticker row 1:** "Tostada de Atún | Tacos de Hamachi | ⁠Tataki de Res | ⁠Kushiage de Queso | ⁠Tacos de Bacalao | Fujiyama"
- **Ticker row 2:** "Akami Pesto | ⁠Ensaladas de Setas Crujientes"
- **Ticker row 3:** "Salmón Gochugaru | ⁠Pulpo Anticucho | ⁠Atún Futomaki | ⁠Li-Onna Roll | ⁠Gogo Roll"
- **Ticker component:** Framer Ticker (`Ticker.CBW_kKox.mjs`) — horizontal marquee, `direction: left`, auto-scroll, hover slows speed
- **Ticker font:** Editorial New Regular, h4 styled, `22px` desktop
- **Separator:** decorative SVG separator between ticker items

### Section 7: About / Brand Statement
- **Section class:** `framer-a50yfl` — `padding: 120px 80px 24px`, flex column, bottom-aligned
- **Content box:** `framer-wghdos` — max-width `900px`, `gap: 48px`, flex row on desktop
- **Body text:** Editorial New Regular, `24px`, `letter-spacing: 0.02em`, `text-align: justify`
- **Text animation:** Words animate in with blur + translateY (Framer scroll animation)
  - Each word: `opacity: 0.001`, `filter: blur(10px)`, `transform: translateY(10px)`, then animates to visible

### Section 8: Contact / Instagram Section
- **Heading:** "¡Síguenos para no perderte nada!" — Editorial New Regular
- **CTA:** "Siguenos en Instagram" → `https://www.instagram.com/lionnaes`
- **Contact form fields:** First Name, Last Name, Phone, Email
  - Input style: `font-family: Inter`, `14px`, `border-radius: 30px`, `padding: 6px 16px`, `background: #fff`
- **Submit button "Contáctanos":** Editorial New Medium, `14px`, `letter-spacing: 0.04em`, white text on `rgb(0, 92, 254)` bg, `border-radius: 10px`
- **Privacy note:** "*Al completar este formulario acceptas nuestro aviso de privacidad" — Inter Italic, `10px`
- **Contact info within section:**
  - Dirección: C. de Recoletos, 1, Salamanca, 28001 Madrid, España
  - Teléfono: +34 910 463 911 → `tel:+34910463911`
  - Email: hola@lionna.es → `mailto:hola@lionna.es`

### Section 9: Footer
- **Structure:** Desktop | Tablet | Phone (three responsive layouts)
- **Left column:** 
  - "EN COLABORACIÓN CON" (label)
  - Logo groups (Mandala Group / Grupo Kampai)
  - "Copyright ® 2024 Mandala Group."
  - "Copyright ® 2024 Grupo Kampai"
- **Center column:**
  - C. de Recoletos, 1, Salamanca, 28001
  - Madrid, España
  - Tel: +34 910 463 911 → `tel:+34910463911`
  - Mob: +34 679 83 65 61 → WhatsApp `https://api.whatsapp.com/send?phone=34679836561`
  - hola@lionna.es → `mailto:hola@lionna.es`
- **Right column / Legal links:**
  - `POLITICA DE PRIVACIDAD` → `/politica-de-privacidad`
  - `INFORMACION LEGAL` → `/aviso-legal`
  - `POLITICA DE COOKIES` → `/politica-de-cookies`
  - `CONTACTO` → `/contact`
- **Logo in footer:** same SVG logo files (FaDW9YPrzIzhcSzyIqVv92TAEn8.svg)
- **Background:** matches page background `#F7F8F3` or section color

---

## 6. PAGE STRUCTURE — EVENTOS (/eventos)

### Hero Section
- Same nav as homepage
- No video hero — static layout
- **Main heading:** "Eventos a tu medida" (also split as "Eventos a" / "tu medida" on mobile)
- Section image: `https://framerusercontent.com/images/uVvny0uTHoeEaKMNwbeqLysQeA.png` (events interior)

### Contact for Events
- **Events email:** eventos@lionnamadrid.es → `mailto:eventos@lionnamadrid.es`
- **Events phone:** +34 654 17 71 26 → `tel:+34654177126`
- **Contact form:** First Name, Last Name, Phone, Email, Submit ("Submit" button text)
- Same form styling as homepage

### Footer
Same as homepage footer.

---

## 7. PAGE STRUCTURE — GIFTCARDS (/giftcards)

### Hero Section
- **Japanese text:** リオンナ (displayed prominently)
- **Text:** "LI-ONNA —"
- **Tagline:** "Cocina japonesa con alma latina"
- **CTA:** "Gift Card — 100€ PRONTO" → `https://www.covermanager.com/eco/buy_products/restaurante-li-onna/spanish`
- **WhatsApp link:** +34 679 836 561 → `https://api.whatsapp.com/send?phone=34679836561`
- **Images specific to giftcards:**
  - `https://framerusercontent.com/images/Kq5hGdJPP2U4Ub6eeFudgIVlI.png` (gift card visual)
  - `https://framerusercontent.com/images/lHLfDqpzuI9LCnuLEHtPSpHpQg.png` (secondary visual)

---

## 8. PAGE STRUCTURE — CONTACT (/contact)

### Layout Components
- `Desktop`, `Left`, `Top`, `RRight` — split layout sections
- **Maps Container** — Google Maps embed area
- **Contact info displayed:**
  - +34 679 836 561 → `tel:34 6 7983 6561`
  - hola@lionna.es → `mailto:hola@lionna.es`
  - www.instagram.com/lionnaes → `https://www.instagram.com/lionnaes`
- **Section heading:** "Contáctanos"
- **Privacy note:** "*Al completar este formulario acceptas nuestro aviso de privacidad"
- **Contact image:** `https://framerusercontent.com/images/lmAdvFlGKBeNaWXT64w8bQ3QJc.jpg` (2048px wide — interior/restaurant photo)
- **Circular badge:** `Badge` + `Circulo` — animated rotating badge (same as homepage scroll indicator)

---

## 9. LOGOS & ASSETS

### Brand Logos
| Asset | URL | Dimensions | Usage |
|---|---|---|---|
| Main wordmark (navbar) | `https://framerusercontent.com/images/1yUb7j2eehJHrooYzEHWMngRXA.png` | 607×89px | Navbar logo PNG |
| Secondary wordmark | `https://framerusercontent.com/images/iXyETh9yrMzH1DzK3sgd4T4yXA.png` | 442×84px | Alternate navbar logo |
| Large hero logo / curve SVG | `https://framerusercontent.com/images/FaDW9YPrzIzhcSzyIqVv92TAEn8.svg` | 7966×2181px | Hero section, footer |
| Favicon (light) | `https://framerusercontent.com/images/elKA5GScO1oG21hwGlTbhJL5Fo.png` | – | Browser tab favicon |
| Apple touch icon | `https://framerusercontent.com/images/TUQ3fANnFR0RPfjgn1tn7mU.png` | – | iOS home screen |
| OG/Twitter card image | `https://framerusercontent.com/images/tuiT0wZXQS1hn7IPx3BUSeIU.png` | – | Social share preview |
| Video poster | `https://framerusercontent.com/images/PgbwLB2TLZN4eoatElS6gXmfHz8.png` | 1125×2436px | Mobile video fallback |

### Video Assets
| Asset | URL | Usage |
|---|---|---|
| Hero background video | `https://framerusercontent.com/assets/NNn0oRHAdCKhmfzY0qcxeLYBKuM.mp4` | Full-page looping hero |

---

## 10. INTERACTIVE ELEMENTS & INTEGRATIONS

### Reservation System
- **Button text:** "RESERVAS PRONTO" (coming soon — not yet linked to CoverManager)
- **CoverManager base URL for reservations:** `https://www.covermanager.com/` (implied)
- **Gift cards purchase:** `https://www.covermanager.com/eco/buy_products/restaurante-li-onna/spanish`
- **Menu platform:** `https://www.mnu.bio/lionna` (external digital menu)

### WhatsApp Integration
- **URL:** `https://api.whatsapp.com/send?phone=34679836561`
- Used in: homepage footer, contact page, gift cards page
- Phone: +34 679 83 65 61

### Instagram
- **Handle:** @lionnaes
- **URL:** `https://www.instagram.com/lionnaes`
- "¡Síguenos para no perderte nada!" CTA in homepage

### Contact Form (Framer native form)
- Fields: First Name, Last Name, Phone, Email
- Button: "Contáctanos" → submits to eventos@lionnamadrid.es (events page) or hola@lionna.es (general)
- Privacy disclaimer shown below form

### Mobile Navigation
- Hamburger triggers slide-in drawer (right side)
- Drawer: white, `border-radius: 12px`, `width: 371px`, top: 76px, right: 16px
- Overlay behind drawer: `rgba(0, 0, 0, 0.302)`, fixed position

---

## 11. ANIMATIONS & EFFECTS

### Backdrop Blur (layered glass blur on hero bottom)
```css
/* 8 layers of progressive blur masks at hero bottom */
z-index: 1: blur(0.25px), mask: 0–37.5%
z-index: 2: blur(0.5px),  mask: 12.5–50%
z-index: 3: blur(1px),    mask: 25–62.5%
z-index: 4: blur(2px),    mask: 37.5–75%
z-index: 5: blur(4px),    mask: 50–87.5%
z-index: 6: blur(8px),    mask: 62.5–100%
z-index: 7: blur(16px),   mask: 75–100%
z-index: 8: blur(32px),   mask: 87.5–100%
```
Applied with rotate(180deg) on bottom of hero (blurs the bottom transition from video to content).

### Scroll Animations (Framer Motion)
- Photo cards: parallax transform on scroll (`will-change: transform`)
- Text reveal: words animate from `opacity: 0.001, blur(10px), translateY(10px)` to visible
- All animated elements use `will-change: transform`

### Sticky Elements
- Nav bar: `position: sticky; top: 0; z-index: 4`
- Hero header: `position: sticky; top: 0; z-index: 1`

### Ticker / Marquee
- Dish names scroll horizontally on loop
- Direction: left
- Has fade-in/fade-out on left and right edges via `mask-image`
- Slows on hover

### Rotating Badge (scroll indicator)
- `framer-30ei2y-container`: 140×140px circular rotating element
- Contains arrow indicator at bottom center (`32×32px`)

---

## 12. NAVIGATION STRUCTURE

```
Logo (links to /) [LEFT in nav]
  ├─ Eventos → /eventos
  ├─ Tarjetas Regalo → /giftcards  
  ├─ Contacto → /contact
  └─ RESERVAS PRONTO → (coming soon, currently no active link or CoverManager)

Footer nav:
  ├─ POLITICA DE PRIVACIDAD → /politica-de-privacidad
  ├─ INFORMACION LEGAL → /aviso-legal
  ├─ POLITICA DE COOKIES → /politica-de-cookies
  └─ CONTACTO → /contact
```

---

## 13. CONTACT INFORMATION (Complete)

| Type | Value | Link |
|---|---|---|
| Main phone | +34 910 463 911 | `tel:+34910463911` |
| Mobile / WhatsApp | +34 679 83 65 61 | `https://api.whatsapp.com/send?phone=34679836561` |
| Events phone | +34 654 17 71 26 | `tel:+34654177126` |
| General email | hola@lionna.es | `mailto:hola@lionna.es` |
| Events email | eventos@lionnamadrid.es | `mailto:eventos@lionnamadrid.es` |
| Address | C. de Recoletos, 1, Salamanca, 28001 Madrid, España | Google Maps embed |
| Instagram | @lionnaes | `https://www.instagram.com/lionnaes` |

---

## 14. JAPANESE UNICODE CHARACTERS

| Character | Unicode | Romaji | Usage |
|---|---|---|---|
| リ | U+30EA | ri | Part of リオンナ |
| オ | U+30AA | o | Part of リオンナ |
| ン | U+30F3 | n | Part of リオンナ |
| ナ | U+30CA | na | Part of リオンナ |

Full word: **リオンナ** = `\u30EA\u30AA\u30F3\u30CA`

Also found in CSS content escape references:
- `#x306b` = に (ni)
- `#x30af` = ク (ku)
- `#x30b9` = ス (su)
- `#x30eb` = ル (ru)
- `#x30ed` = ロ (ro)
- `#x30fc` = ー (long vowel)
- `#x4e0b` = 下 (below/down)
- `#xc1` = Á

---

## 15. FOOTER CREDITS

```
EN COLABORACIÓN CON

[Mandala Group logo]    [Grupo Kampai logo]

Copyright ® 2024 Mandala Group.
Copyright ® 2024 Grupo Kampai
```

---

## 16. SEO / META

```html
<title>LI-ONNA リオンナ — Cocina japonesa con alma latina</title>
<meta name="description" content="LI-ONNA リオンナ  - Cocina japonesa con alma latina">
<meta property="og:image" content="https://framerusercontent.com/images/tuiT0wZXQS1hn7IPx3BUSeIU.png">
<html lang="es">
```

---

## 17. CSS GLOBAL RESETS (Framer standard)

```css
html, body, #main { box-sizing: border-box; margin: 0; padding: 0; }
:root { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
* { box-sizing: border-box; -webkit-font-smoothing: inherit; }
h1,h2,h3,h4,h5,h6,p,figure { margin: 0; }
body, input, textarea, select, button { font-family: sans-serif; font-size: 12px; }
html body { background: rgb(247, 248, 243); }  /* #F7F8F3 */
```

---

## 18. NEXT.JS IMPLEMENTATION NOTES

### Tailwind Config Additions Needed
```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      'brand-blue': '#005BFF',
      'brand-blue-dark': '#005CFE',
      'page-bg': '#F7F8F3',
      'section-bg': '#F6F6F2',
      'section-fade': '#F6F4F0',
    },
    fontFamily: {
      'odesta': ['"Odesta Regular Regular"', 'sans-serif'],
      'odesta-medium': ['"Odesta Medium Regular"', 'sans-serif'],
      'editorial': ['"Editorial New Regular"', 'sans-serif'],
      'editorial-medium': ['"Editorial New Medium"', 'sans-serif'],
      'editorial-thin': ['"Editorial New Thin"', 'sans-serif'],
    },
    screens: {
      'sm': '390px',   // mobile
      'md': '810px',   // tablet
      'lg': '1440px',  // desktop
    }
  }
}
```

### Font Loading (next/font or @font-face)
```css
/* All fonts self-hosted from framerusercontent.com */
@font-face {
  font-family: "Editorial New Medium";
  src: url("https://framerusercontent.com/assets/t5CEKBcH3elZnrTQXyLfolQ00.woff2");
  font-weight: 500;
  font-display: swap;
}
@font-face {
  font-family: "Editorial New Regular";
  src: url("https://framerusercontent.com/assets/o7NxqFm5JSnwuYiiGCwUgl6Pi2I.woff2");
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: "Editorial New Thin";
  src: url("https://framerusercontent.com/assets/p41UOFADaqudUOpPaWIhG2nr5vQ.woff2");
  font-weight: 100;
  font-display: swap;
}
@font-face {
  font-family: "Odesta Regular Regular";
  src: url("https://framerusercontent.com/assets/NgzKruRo8Lke2A7u9sKhAp37qo.woff2");
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: "Odesta Medium Regular";
  src: url("https://framerusercontent.com/assets/M2IZBj7cY7Jc4Fcm06CVgpbwQ.woff2");
  font-weight: 500;
  font-display: swap;
}
```

### Route Structure
```
app/
  page.tsx              → /
  eventos/
    page.tsx            → /eventos
  giftcards/
    page.tsx            → /giftcards
  contact/
    page.tsx            → /contact
  politica-de-privacidad/
    page.tsx
  aviso-legal/
    page.tsx
  politica-de-cookies/
    page.tsx
```

---

*Extraction complete. All values sourced directly from live HTML/CSS/JS at lionna.es (Framer site, last updated Dec 9, 2025).*
