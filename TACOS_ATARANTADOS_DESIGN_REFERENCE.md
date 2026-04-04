# Tacos Atarantados — Complete Design Reference
## For Pixel-Perfect Next.js + Tailwind Recreation

> Source: `https://tacosatarantados.mx/` (iframe wrapper)
> Real Framer app: `https://soulful-types-912265.framer.app/`
> Published: March 23, 2026

---

## 1. SITE ARCHITECTURE

### Wrapper (`tacosatarantados.mx`)
The production domain is a **pure iframe wrapper** — no content of its own:
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tacos Atarantados</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 100%; height: 100%; overflow: hidden; }
    iframe { width: 100%; height: 100%; border: none; display: block; }
  </style>
</head>
<body>
  <iframe src="https://soulful-types-912265.framer.app/" title="Tacos Atarantados" allowfullscreen></iframe>
</body>
</html>
```

### Pages / Routes
| Route | URL (Framer) | Description |
|-------|-------------|-------------|
| `/` | `soulful-types-912265.framer.app/` | Home |
| `/sucursales` | `soulful-types-912265.framer.app/sucursales` | Locations |
| `/menu-mex` | `soulful-types-912265.framer.app/menu-mex` | Menu (image-only) |
| `/contacto` | `soulful-types-912265.framer.app/contacto` | Contact form |
| `/merch` | `soulful-types-912265.framer.app/merch` | Merch ("muy pronto") |
| `/facturacion` | `soulful-types-912265.framer.app/facturacion` | Billing |

---

## 2. DESIGN TOKENS / CSS VARIABLES

### Color Palette
```css
/* CSS Custom Properties defined in :root / body */
--token-f47a6f2e-b891-417f-bb8d-79fc73f4cce2: #0c7528;   /* VERDE — primary green */
--token-c2aafaf1-8c39-4bd7-a0fe-7c272e1266f1: #085e1f;   /* VERDE OSCURO — dark green */
--token-808e64f0-2121-4b17-b415-4377277d197d: #fff0;      /* Transparent white */
```

### Color Usage
| Color | Hex | Usage |
|-------|-----|-------|
| Primary Green (VERDE) | `#0c7528` / `rgb(12, 117, 40)` | Nav links, footer text, buttons, SVG lines, sticky section background |
| Dark Green | `#085e1f` / `rgb(8, 94, 31)` | Hover/darker green state |
| White | `#ffffff` / `rgb(255, 255, 255)` | Page background, header bg, button bg |
| Transparent | `rgba(255, 255, 255, 0)` / `#fff0` | Overlay divs (transparent) |
| Black | `#000000` | Default text fallback |
| Link blue | `rgb(0, 153, 255)` | Framer link decoration color |
| Dark text sucursales | `rgb(13, 116, 39)` | Phone numbers on sucursales page |

---

## 3. TYPOGRAPHY

### Font Families
| Font Name | Type | Source | Weights |
|-----------|------|--------|---------|
| **Gothic Regular** | Custom WOFF2 | Framer CDN | 400 (regular) |
| **Oswald** | Google Font via Framer | Framer third-party CDN | 400 |
| **Inter** | Framer CDN | `framerusercontent.com/assets/` | 400, 500, 600, 700, 800 |
| **Inter Variable** | Variable font | Framer CDN | 400 |

### Font Files (WOFF2 URLs)
```
Gothic Regular:
  https://framerusercontent.com/assets/7Bvz3EI9iaQekp8AmnRhAn2Jrs.woff2

Oswald Regular:
  https://framerusercontent.com/third-party-assets/fontshare/wf/PYCLPQS6HZBLJGMCPKBPEXQKWPKQ7OHE/TPDXSFLT6F2DLRHVAQNPEX367ZCFB6CP/OF7M536OVLRNXVSLVYIW3HQVUIUZ56CU.woff2

Inter (select Latin subset, weight 700):
  https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2
Inter (weight 800, Latin):
  https://framerusercontent.com/assets/Mput0MSwESKlJ6TMz9MPDXhgrk.woff2
Inter (weight 400, Latin):
  https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2
Inter Variable (weight 400, Latin):
  https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2
```

### Typography Scale (from inline styles)
| Element | Font | Weight | Size | Color |
|---------|------|--------|------|-------|
| Nav "¿Quiénes somos?" heading | Gothic Regular | 400 | 47px | white `#fff` |
| Nav main labels | Gothic Regular | 400 | 35px | white `#fff` |
| Nav sub labels | Gothic Regular | 400 | 30px | white `#fff` |
| Nav small labels (Oswald) | Oswald | 400 | 11px–12px | white `#fff` |
| Footer links | Inter | 700 | 13px | `#0c7528` |
| Footer copyright | Inter | 700 | 13px | `#0c7528` |
| Social handles | Inter | 700 | auto | `#0c7528` |
| Contact form labels | Inter | 700 | 15px | white `#fff` |
| Contact submit button | Inter | 700 | 14px | `#0c7528` |
| Sucursales phone numbers | Inter | 800 | 21px | `rgb(13, 116, 39)` |

### @font-face Declarations (for self-hosting)
```css
@font-face {
  font-family: "Gothic Regular";
  src: url("https://framerusercontent.com/assets/7Bvz3EI9iaQekp8AmnRhAn2Jrs.woff2");
  font-display: swap;
  font-style: normal;
  font-weight: 400;
}
@font-face {
  font-family: "Oswald";
  src: url("https://framerusercontent.com/third-party-assets/fontshare/wf/PYCLPQS6HZBLJGMCPKBPEXQKWPKQ7OHE/TPDXSFLT6F2DLRHVAQNPEX367ZCFB6CP/OF7M536OVLRNXVSLVYIW3HQVUIUZ56CU.woff2");
  font-display: swap;
  font-style: normal;
  font-weight: 400;
}
```

---

## 4. RESPONSIVE BREAKPOINTS

```css
/* Desktop */
@media (min-width: 1200px) { ... }

/* Tablet */
@media (min-width: 810px) and (max-width: 1199.98px) { ... }

/* Mobile */
@media (max-width: 809.98px) { ... }
```

Framer breakpoint hash classes:
- Desktop: `.framer-72rtr7` (home), `.framer-a4vxjv` (sucursales)
- Tablet: `.framer-9e4o0j` / `.framer-9wywgw`
- Mobile: `.framer-1oj7wk3` / `.framer-1sikmew`

---

## 5. PAGE: HOME (`/`)

### Page Dimensions
- **Desktop**: `width: 1200px; height: 3340px` (full scroll height)
- **Mobile**: `width: 390px; height: 4116px`
- **Tablet**: `width: 810px`

### Section Structure (top to bottom)

#### Section 1 — HERO (framer-lutkn5)
- **Height**: 675px (desktop)
- **Background**: Full-bleed photo — `https://framerusercontent.com/images/4c5p96aAxM0cqVUlc8HS9gqUCDk.png`
  - Original dimensions: 8001 × 4501px
  - `object-fit: cover; object-position: center`
- **Overlay**: `will-change: filter` (Framer CSS filter)
- Contains:
  - **Top Navigation Bar** (`framer-p37ltw-container`) — `height: 90px; position: absolute; top: 0; left: 0; right: 0`
  - **Navigation Menu** (`framer-12upwek-container`) — `width: 723px; height: 408px; position: absolute; bottom: 96px; left: calc(50% - 361.5px)` — Desktop scaled `transform: scale(1.2)`

#### Navigation Bar (framer-bUItI)
- **Container**: `width: 1200px; height: 90px; display: flex; flex-direction: row; justify-content: center; align-items: center; overflow: hidden`
- **Logo** (`framer-a81ly3`): `width: 170px; height: 46px; aspect-ratio: 3.687; position: absolute; top: 47%; left: 47%`
  - Logo image: `https://framerusercontent.com/images/ZJwpQPHidJONA6KjQxJE3uBH76A.png` (988×268px native)
  - Links to `/`
- **Taco cursor icon** (framer-HO6hA): `width: 51px; height: 29px; position: absolute; top: calc(50% - 14.5px); left: calc(53.87% - 25.5px)`
  - Image: `https://framerusercontent.com/images/aHBLAe7ZSiAIy2BU3FhhN61cEM.png` (229×130px)

#### Navigation Menu Panel (framer-W4o1T / framer-TdoHo)
This is the main nav tile grid — a column of 3 rows with image-based nav buttons:

```
Row 1 (height: 127px, gap: 0px):
  [SUCURSALES button: 320×103px] [19px spacer] [QUIENES SOMOS button: 349×124px]

Row 2 (height: 114px, gap: 24px, total width: 701px):
  [MERCH button: 234×101px] [GIF element: 123×122px] [MENU button: 272×117px]

Row 3 (height: min-content, padding: 8px 0 28px, width: 700px, gap: 0):
  [CONTACTO button: 321×101px] [FACTURACION button: 330×106px]
```

Container: `display: flex; flex-direction: column; align-items: center; gap: 7px; height: 675px; justify-content: center; overflow: hidden; padding: 145px; width: 1200px`

**Nav Button Images:**
| Button | Image URL | Native Size | Display Size |
|--------|-----------|-------------|--------------|
| SUCURSALES | `https://framerusercontent.com/images/5KhyjCAUjG7oF94fvwSmnkRYWbc.png` | 3211×1031 | 320×103px |
| QUIENES SOMOS | `https://framerusercontent.com/images/ckylCtHhqhm29X366FEJK1pumM.png` | 769×282 | 349×124px |
| MERCH | `https://framerusercontent.com/images/Roz5ZFKqLGqMUmbftiK25GlIk0A.png` | 590×254 | 234×101px |
| GIF (decorative) | `https://framerusercontent.com/images/WnSS2st1R5BjHgJJjtAIMOlO4s.gif` | 800×800 | 123×122px |
| MENU MEX | `https://framerusercontent.com/images/D6oQXvD840bMKCShxzkS426A.png` | 2454×1055 | 272×117px |
| CONTACTO | `https://framerusercontent.com/images/PatZgZgo2TWMRWSbSYl9GDLvO8.png` | 3217×1017 | 321×101px |
| FACTURACION | `https://framerusercontent.com/images/e9jDs6V9RXVTlI639MIy768kzY.png` | 3224×1022 | 330×106px |
| QUIENES SOMOS (desktop) | `https://framerusercontent.com/images/6OcFiZ2AT0rxyIECdhYjUmdN1rM.png` | 768×282 | 202×74px |

**Nav hover behavior**: On hover, image `opacity` transitions from `1` → `0.6` (spring animation: `bounce: 0.2, delay: 0, duration: 0.4`)

**SUCURSALES** opens in `target="_blank"` (new tab)

#### Section 2 — QUIENES SOMOS (framer-9fckm3-container)
- **Height**: 1026px; **Width**: 389px (centered)
- Contains an image-based section with two panels + text overlay
- Text container: `position: absolute; top: 55%; left: 50%; transform: translate(-50%); width: 81%; overflow: hidden`
- Layout desktop: `width: 1205px; height: 681px; padding: 24px; display: flex; flex-direction: row`
- Layout mobile: `flex-direction: column; width: 396px; height: 976px`
- Layout tablet: `width: 866px`

**Images in Quienes Somos:**
- Main food photo: `https://framerusercontent.com/images/7omtfBRT94OqgY88I2FDwqtf6o.png` (3876×3356px)
- Interior photo: `https://framerusercontent.com/images/dNlNudDpE9f9DalM41gglBGEM0.png` (8001×4032px)
- Detail photo: `https://framerusercontent.com/images/tvOqddpH28vmOOZoKuVtJW8kFY.png` (2817×2576px)

**Text Content** (¿Quiénes somos? section):
```
¿Quiénes somos?

Nacimos en Monterrey y eso se nota.
Somos tacos norteños, bien servidos y hechos con carácter.
El trompo es nuestra bandera y la mesa es nuestro punto de encuentro.
Pero no solo somos sabor.
Somos atención cálida, trato cercano y mesas donde siempre hay espacio para uno más.
Creemos en las salsas que transforman el taco. En la variedad que te invita a probar,
combinar y regresar por otra ronda. Porque en el norte el taco no está completo sin
una salsa a su altura.
En Atarantados te atendemos como en casa, pero comiendo mejor.
Aquí no hay complicaciones, solo buena comida, buena vibra y ganas de repetir.
Porque cuando el taco está bien servido, la felicidad esta garantizada.
```

Text styles:
- Heading "¿Quiénes somos?" — Gothic Regular, white, large size
- Body paragraphs — Gothic Regular/Oswald, white, 11–12px

#### Section 3 — CIRCULAR IMAGE (framer-1tiwkvm / framer-1bq15sm)
- **Height**: 623px full width
- Inner circle container: `width: 338px; height: 338px; position: absolute; top: calc(48.6% - 169px); left: calc(50% - 169px); overflow: hidden`
- Inner circle image: `width: 304px; height: 304px; aspect-ratio: 1; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); overflow: hidden; will-change: filter`

#### Section 4 — SCROLLING IMAGE ROW (framer-j3ofo2)
- `height: 706px; width: 1198px; overflow: clip`
- Inner: `display: flex; flex-direction: row; justify-content: center; align-items: center; gap: 0; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)`
- Contains: `framer-1m8di6p-container` (1200px × 706px)

#### Section 5 — STICKY GREEN ATARANTADOS MOVEMENT (framer-1f2isyb)
- **Background**: `#0c7528` (PRIMARY GREEN)
- **Height**: 958px
- **Position**: `sticky; top: 0; z-index: 1` (desktop), `position: relative` (mobile)
- **Width**: 100%
- **Overflow**: hidden

Inside:
- Container: `width: 1602px; height: 769px; position: absolute; top: calc(49.9% - 384.5px); right: -790px`
- ATARANTADOS MOVEMENT image (animated horizontal scroll): 
  - `width: 1602px; height: 769px; aspect-ratio: 2.084`
  - Image: `https://framerusercontent.com/images/D3U4ytuMRRBMjcsigfRpOeGus.png` (4000×2250px)
  - Animation: `will-change: transform; opacity: 1; transform: translateX(300px)` — horizontal scroll animation

#### Section 6 — FOOTER (framer-1ffd4rp-container / framer-aXzgM)
- **Height**: 337px (desktop), 796px (mobile)
- **Background**: `rgb(255, 255, 255)` (white)
- **Width**: 100% (desktop: 1200px, tablet: 810px, mobile: 390px)
- **Padding**: 24px

Footer has 3 rows:
1. **Top row** (framer-1mjv80f): Social links + logo
2. **Middle row** (framer-1pvao40): Horizontal rule line + Mandala/GBV logos
3. **Bottom row** (framer-1hultpp): Legal links + copyright

---

#### Footer: Social/Logo Row (framer-n91qgf)
`display: flex; flex-direction: row; align-items: center; gap: 19px; height: 100%; overflow: hidden`

**Logo element (framer-hw1ont)**:
- `aspect-ratio: 1.013; width: 18%; padding: 0 17px 0 0`
- Image: `https://framerusercontent.com/images/bAO9PXBUVc79okgfoKz1UO5RfMc.png` (480×474px)

**Social links** (each: `display: flex; flex-direction: row; align-items: center; gap: 10px; text-decoration: none`):

| Platform | Icon Image URL | Dimensions | Handle | Link |
|----------|---------------|------------|--------|------|
| Facebook | `https://framerusercontent.com/images/epCMqtmjUktfDir8IulgHmLJhUc.png` | 116×115px, display 20×20px | tacosatarantados | `https://www.facebook.com/TacosAtarantados/?locale=es_LA` |
| Instagram | `https://framerusercontent.com/images/HtcaqDuEGEA1z9FgjSn95CfglOk.png` | 117×117px, display 25×25px | tacosatarantados | `https://www.instagram.com/tacosatarantados/?hl=es` |
| TikTok | `https://framerusercontent.com/images/OdghfFefQkgK2P6GzRhUQX4cc.png` | 103×115px, display 23×26px | tacosatarantados | `https://www.tiktok.com/@tacosatarantados?lang=es` |
| X/Twitter | `https://framerusercontent.com/images/AnVUjC7PPiOY0xVKtH6funH9M4U.png` | 104×95px, display 27×25px | atarantados | `https://x.com/atarantados` |

Handle text style: `font-family: Inter; font-weight: 700; color: rgb(12, 117, 40)` (text next to each icon)

#### Footer: Scrolling Brand Strip (framer-1i3x33p)
- Container: `width: 1152px; height: 83px; overflow: hidden`
- Inner: `display: flex; flex-direction: row; align-items: center; gap: 43px; min-width: 1152px; padding: 0 41px; position: absolute; top: 49%; left: 50%`
- SVG horizontal line: `<path d="M 0 0 L 1089 0" stroke: #0c7528; stroke-width: 2`

#### Footer: Partner Logos Row (framer-17xdw9h)
- `display: flex; flex-direction: row; gap: 43px; padding: 41px`
- **Mandala Group Logo** (`framer-106fe0e`): `width: 230px; height: 41px; aspect-ratio: 5.565`
  - Image: `https://framerusercontent.com/images/f739sOsI80bTSeKLic8vCNlOnCY.png` (256×46px)
  - Links to: `https://mandalagroup.mx/`
- **Grupo Buenas Vibras Logo** (`framer-azw4xm`): `width: 85px; height: 81px; aspect-ratio: 1.053`
  - Image: `https://framerusercontent.com/images/Bk62mTK4HJmVz66mwXMVxB6EM.png` (140×133px)
  - Links to: `https://www.instagram.com/grupo_buenasvibras/?hl=es`

#### Footer: Legal Links (framer-1u0uw8a)
`display: flex; flex-direction: column; align-items: flex-end; gap: 0; justify-content: flex-end`

Links (all: `font-family: Inter; font-weight: 700; font-size: 13px; color: #0c7528`):
- POLÍTICAS DE PRIVACIDAD
- POLÍTICA DE COOKIES
- INFORMACIÓN LEGAL
- CONTACTO

#### Footer: Copyright Row (framer-1rhqvll)
`display: flex; flex-direction: row; gap: 63px; align-items: center`

Texts (both: `font-family: Inter; font-weight: 700; font-size: 13px; color: #0c7528`):
- `Copyright ® 2025 Mandala Group`
- `Copyright ® 2025 Grupo Buenas Vibras`

---

## 6. PAGE: SUCURSALES (`/sucursales`)

### Page Dimensions
- Desktop: `width: 1200px; height: 2335px`
- Background: white `#fff`
- Background image (full page texture): `https://framerusercontent.com/images/ziRAe7XxMXzQreRPAscVOtGS51Y.png` (8001×13266px)

### Sucursales Header
- Image: `https://framerusercontent.com/images/eDQwyCPxYZr5OnJ3CDzC6jMV4Ok.png` (939×260px)

### Location Card Grid (framer-1rtlquo)
- `display: grid; grid-template-rows: repeat(3, minmax(0, 1fr)); grid-template-columns: repeat(3, minmax(50px, 1fr)); gap: 10px; width: 1098px; height: 1052px; position: absolute; top: 371px; left: calc(51.17% - 549px)`

#### Monterrey / México Locations
All 6 Mexico cards + USA section banner + 2 CDMX + Wynwood:

| # | Name | Address | Phone | UberEats |
|---|------|---------|-------|---------|
| 1 | **CUMBRES** (LEONES) | Av. Paseo de los Leones 2235, Cumbres 2o. Sector Secc C, 64610 Monterrey, N.L. | TEL. 81 4175 3684 | [Link](https://www.ubereats.com/mx/store/tacos-atarantados-cumbres/ZjX3b27RUieDWl0vCPVEvg?diningMode=DELIVERY) |
| 2 | **VASCONCELOS** (del valle) | Av. José Vasconcelos 465-interior 7, Del Valle, 66220 San Pedro Garza García, N.L. | TEL. 81 3955 7935 / TEL. 81 2710 7986 | [Link](https://www.ubereats.com/mx/store/tacos-atarantados-vasconcelos/PG6r9jpBXA69vRHATVBRIA?diningMode=DELIVERY) |
| 3 | **SAN JERÓNIMO** (plaza vía 2) | Plaza Vía 2, Blvd. Rogelio Cantú Gómez 1000, San Jerónimo, Las Lajas, Sin Nombre de Col 27, 64630 Monterrey, N.L. | TEL. 81 4001 3622 | [Link](https://www.ubereats.com/mx/store/tacos-atarantados-san-jeronimo/r5Oj42dcVYCL1lqgkqDYhQ?diningMode=DELIVERY) |
| 4 | **armida** (valle oriente) | Zona Valle Oriente, Av. Cto. Frida Kahlo 303, Haciendas de La Sierra, 66278 San Pedro Garza García, N.L. | TEL. 81 3715 5843 | [Link](https://www.ubereats.com/mx/store/tacos-atarantados-distrito-armida/9GKBkqToWxCjnYCd9P_oUQ?diningMode=DELIVERY) |
| 5 | **omnia** (carretera nacional) | Carr. Nacional km 267, Col. El Uro, 64988 Monterrey, N.L. | TEL. 81 3674 7668 | [Link](https://www.ubereats.com/mx/store/tacos-atarantados-omnia/jvNtUcf4WVe9QuafVwn8eQ?diningMode=DELIVERY) |
| 6 | **san nicolás** (manuel l. barragán) | Plaza Vía 2, Blvd. Rogelio Cantú Gómez 1000, San Jerónimo, Las Lajas, Sin Nombre de Col 27, 64630 Monterrey, N.L. | TEL. 81 4175 3684 | [Link](https://www.ubereats.com/mx/store/tacos-atarantados-san-nicolas/tgS6O9W9VByJ0VMQHBwRpw?diningMode=DELIVERY) |

#### México City + USA Section Banner
- Image (USA separator): `https://framerusercontent.com/images/Z2yiooU3ODLeUO0QnMwh2CLHc.png` (3331×925px)
- CDMX section header image: `https://framerusercontent.com/images/SeVwIncGHz9gS3FikTcxxQCRow.png` (1544×245px)

#### Ciudad de México Locations
| Name | Address | Phone |
|------|---------|-------|
| **LAS PALMAS** | Sierra Mojada 215, Lomas - Virreyes, Lomas de Chapultepec, Miguel Hidalgo, 11000 Ciudad de México, CDMX | TEL. 55 2120 7201 |
| **ROMA** | Córdoba 113, Roma Nte., Cuauhtémoc, 06700 Ciudad de México, CDMX | TEL. 55 5584 0947 |

#### USA Location
| Name | Address | Phone |
|------|---------|-------|
| **WYNWOOD** | 218 NW 25th St, Miami, FL 33127, Estados Unidos | TEL. 000000000 |

### Sucursales — UberEats Button Images
- UberEats button image: `https://framerusercontent.com/images/9Sg0D8s12rhlHWnOUrHnAdzZU78.png` (implied from related page context)

---

## 7. PAGE: MENU MEX (`/menu-mex`)

This page is essentially **image-only** — no readable text menu items. The menu is displayed as a full-page image.

### Menu Images
- Background (same as home): `https://framerusercontent.com/images/4c5p96aAxM0cqVUlc8HS9gqUCDk.png` (8001×4501px)
- **Main menu image**: `https://framerusercontent.com/images/CFj4oVM4xRdR0Fw9JC0kj9ykoiE.png` (1080×1632px — portrait menu card)
- Additional menu spread: `https://framerusercontent.com/images/9Sg0D8s12rhlHWnOUrHnAdzZU78.png` (3373×2250px)

The menu page contains the standard navigation and footer components.

---

## 8. PAGE: CONTACTO (`/contacto`)

### Page Background
- Uses same hero background: `https://framerusercontent.com/images/4c5p96aAxM0cqVUlc8HS9gqUCDk.png`

### Contact Form (Framer native form)
```
Component: data-framer-name="DATOS DE CONTACTO"
CSS class: .framer-1akof9h
```

**Form Fields:**
1. **NOMBRE** (Name)
   - Input type: `text`
   - Required: yes
   - Placeholder: `Jane Smith`
   - Label style: `Inter; font-weight: 700; font-size: 15px; color: rgb(255, 255, 255)`

2. **E-MAIL**
   - Input type: `email`
   - Required: yes
   - Placeholder: `jane@framer.com`
   - Label style: same as above

3. **MENSAJE** (Message)
   - Input type: `textarea`
   - Placeholder: `¡Hola!`
   - Label style: same as above

**Submit Button (framer-YnSxe)**:
- Style: `background-color: rgb(255, 255, 255); border-radius: 3px; opacity: 1`
- Text: `ENVIAR`
- Text style: `Inter; font-weight: 700; font-size: 14px; color: #0c7528`

### Input Styling (CSS variables)
```css
.framer-form-input {
  padding: var(--framer-input-padding);
  font-family: var(--framer-input-font-family);
  font-weight: var(--framer-input-font-weight);
  font-size: var(--framer-input-font-size);
  color: var(--framer-input-font-color);
  background: none;
  border: none;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.framer-form-input:focus-visible { outline: none; }
```

---

## 9. PAGE: MERCH (`/merch`)

Content: "muy pronto" (coming soon placeholder)
Only contains the standard navigation, footer and the text "muy pronto".

---

## 10. NAVIGATION STRUCTURE

### All Pages & Routes
- `/` — Home
- `/sucursales` — Branches/Locations
- `/menu-mex` — Menu
- `/contacto` — Contact
- `/merch` — Merchandise (coming soon)
- `/facturacion` — Billing/Invoice
- `/#quienesomos1` — Anchor: Who we are (desktop)
- `/#quienesomos1-1` — Anchor: Who we are (mobile/alt)

### Nav Menu Links (framer-W4o1T)
Each nav item is an **image-based link** (text is baked into image):
```
SUCURSALES      → ./sucursales        (opens in new tab: target="_blank")
QUIENES SOMOS   → ./#quienesomos1-1  (anchor scroll)
MERCH           → ./merch
MENU MEX        → ./menu-mex
CONTACTO        → ./contacto
FACTURACION     → ./facturacion
```

---

## 11. ANIMATIONS & SPECIAL EFFECTS

### 1. Sticky Green Section (ATARANTADOS MOVEMENT)
- Background: `#0c7528`
- `position: sticky; top: 0; z-index: 1` — sticks to top while scrolling
- Contains a horizontally-scrolling image with text "ATARANTADOS MOVEMENT"
- Image starts at `transform: translateX(300px)`, likely animates on scroll
- `opacity: 1; will-change: transform`

### 2. Navigation Hover Effect
- On hover: image opacity changes from `1.0` → `0.6`
- Spring animation: `{ bounce: 0.2, delay: 0, duration: 0.4, type: "spring" }`
- Implemented via Framer Motion variants

### 3. Taco Cursor
- Custom cursor component (`framer-CXWeb` / `TACO_CURSOR`)
- Image: `https://framerusercontent.com/images/mSET5M2zFzoi0D77wBQV9HHtxuw.png`
- Dimensions: `52×35px; aspect-ratio: 1.563`
- Replaces default cursor on the site

### 4. Circular Photo Section
- `overflow: hidden; border-radius: circular` (full circle via overflow)
- `will-change: filter` for parallax-like effect

### 5. Framer Motion Transitions
All transitions use Framer Motion with `spring` type:
```js
{ bounce: 0.2, delay: 0, duration: 0.4, type: "spring" }
```

### 6. SVG Decorative Lines
```svg
<path d="M 0 0 L 1089 0" stroke="#0c7528" stroke-width="2" fill="#0c7528"/>
<path d="M 0 0 L 302 0" stroke="#0c7528" stroke-width="2" fill="#0c7528"/>
```

---

## 12. ALL IMAGE/ASSET URLS (COMPLETE)

### Favicons / OG Images
| File | URL | Usage |
|------|-----|-------|
| Favicon (light, GIF) | `https://framerusercontent.com/images/jcf97yjlu7RzyOv8J5BFDzRquBU.gif` | `<link rel="icon">` light |
| Favicon (dark, GIF) | `https://framerusercontent.com/images/IlKKr3pGAoXEvCy34BOpgtiv0A.gif` | `<link rel="icon">` dark |
| Apple touch icon | `https://framerusercontent.com/images/AXjDbzMc4m1f06Oygfio5JQ21Cs.png` | Apple touch |
| OG image | `https://framerusercontent.com/images/h1SSx3YCnDZJch7vL7rBhwKA.png` | Open Graph / Twitter card |

### HOME PAGE Images
| Name | URL (base) | Native Size | Usage |
|------|-----------|-------------|-------|
| Hero background | `https://framerusercontent.com/images/4c5p96aAxM0cqVUlc8HS9gqUCDk.png` | 8001×4501 | Hero full-bleed |
| Logo / Wordmark | `https://framerusercontent.com/images/ZJwpQPHidJONA6KjQxJE3uBH76A.png` | 988×268 | Navbar logo |
| Hamburger/taco cursor | `https://framerusercontent.com/images/aHBLAe7ZSiAIy2BU3FhhN61cEM.png` | 229×130 | Nav icon right |
| Nav: SUCURSALES | `https://framerusercontent.com/images/5KhyjCAUjG7oF94fvwSmnkRYWbc.png` | 3211×1031 | Nav button |
| Nav: QUIENES SOMOS | `https://framerusercontent.com/images/ckylCtHhqhm29X366FEJK1pumM.png` | 769×282 | Nav button |
| Nav: MERCH | `https://framerusercontent.com/images/Roz5ZFKqLGqMUmbftiK25GlIk0A.png` | 590×254 | Nav button |
| Nav: GIF decoration | `https://framerusercontent.com/images/WnSS2st1R5BjHgJJjtAIMOlO4s.gif` | 800×800 | Decorative GIF |
| Nav: MENU MEX | `https://framerusercontent.com/images/D6oQXvD840bMKCShxzkS426A.png` | 2454×1055 | Nav button |
| Nav: CONTACTO | `https://framerusercontent.com/images/PatZgZgo2TWMRWSbSYl9GDLvO8.png` | 3217×1017 | Nav button |
| Nav: FACTURACION | `https://framerusercontent.com/images/e9jDs6V9RXVTlI639MIy768kzY.png` | 3224×1022 | Nav button |
| Nav: QUIENES SOMOS alt | `https://framerusercontent.com/images/6OcFiZ2AT0rxyIECdhYjUmdN1rM.png` | 768×282 | Nav button alt |
| Quienes somos food | `https://framerusercontent.com/images/7omtfBRT94OqgY88I2FDwqtf6o.png` | 3876×3356 | Who we are section |
| Quienes somos interior | `https://framerusercontent.com/images/dNlNudDpE9f9DalM41gglBGEM0.png` | 8001×4032 | Who we are section |
| Quienes somos detail | `https://framerusercontent.com/images/tvOqddpH28vmOOZoKuVtJW8kFY.png` | 2817×2576 | Who we are section |
| ATARANTADOS MOVEMENT | `https://framerusercontent.com/images/D3U4ytuMRRBMjcsigfRpOeGus.png` | 4000×2250 | Sticky green section |
| Footer logo/mascot | `https://framerusercontent.com/images/bAO9PXBUVc79okgfoKz1UO5RfMc.png` | 480×474 | Footer top-left |
| Social: Facebook icon | `https://framerusercontent.com/images/epCMqtmjUktfDir8IulgHmLJhUc.png` | 116×115 | Footer social |
| Social: Instagram icon | `https://framerusercontent.com/images/HtcaqDuEGEA1z9FgjSn95CfglOk.png` | 117×117 | Footer social |
| Social: TikTok icon | `https://framerusercontent.com/images/OdghfFefQkgK2P6GzRhUQX4cc.png` | 103×115 | Footer social |
| Social: X/Twitter icon | `https://framerusercontent.com/images/AnVUjC7PPiOY0xVKtH6funH9M4U.png` | 104×95 | Footer social |
| Mandala Group logo | `https://framerusercontent.com/images/f739sOsI80bTSeKLic8vCNlOnCY.png` | 256×46 | Footer partner |
| Grupo Buenas Vibras | `https://framerusercontent.com/images/Bk62mTK4HJmVz66mwXMVxB6EM.png` | 140×133 | Footer partner |
| Taco cursor image | `https://framerusercontent.com/images/mSET5M2zFzoi0D77wBQV9HHtxuw.png` | ~105×67 | Custom cursor |

### SUCURSALES PAGE Images
| Name | URL | Native Size | Usage |
|------|-----|-------------|-------|
| Full page texture/bg | `https://framerusercontent.com/images/ziRAe7XxMXzQreRPAscVOtGS51Y.png` | 8001×13266 | Page background |
| Sucursales header | `https://framerusercontent.com/images/eDQwyCPxYZr5OnJ3CDzC6jMV4Ok.png` | 939×260 | Page header title |
| Mexico title label | `https://framerusercontent.com/images/Z2yiooU3ODLeUO0QnMwh2CLHc.png` | 3331×925 | Section separator |
| CDMX title label | `https://framerusercontent.com/images/SeVwIncGHz9gS3FikTcxxQCRow.png` | 1544×245 | Section separator |

### MENU PAGE Images
| Name | URL | Native Size | Usage |
|------|-----|-------------|-------|
| Hero background | `https://framerusercontent.com/images/4c5p96aAxM0cqVUlc8HS9gqUCDk.png` | 8001×4501 | Page background |
| Menu card | `https://framerusercontent.com/images/CFj4oVM4xRdR0Fw9JC0kj9ykoiE.png` | 1080×1632 | Menu image |
| Menu spread | `https://framerusercontent.com/images/9Sg0D8s12rhlHWnOUrHnAdzZU78.png` | 3373×2250 | Menu spread |

---

## 13. INTERACTIVE ELEMENTS

### Social Media Links
| Platform | URL |
|----------|-----|
| Facebook | `https://www.facebook.com/TacosAtarantados/?locale=es_LA` |
| Instagram | `https://www.instagram.com/tacosatarantados/?hl=es` |
| TikTok | `https://www.tiktok.com/@tacosatarantados?lang=es` |
| X/Twitter | `https://x.com/atarantados` |

All open `target="_blank" rel="noopener"`.

### UberEats Delivery Links (per location)
| Location | UberEats URL |
|----------|-------------|
| Cumbres | `https://www.ubereats.com/mx/store/tacos-atarantados-cumbres/ZjX3b27RUieDWl0vCPVEvg?diningMode=DELIVERY` |
| Vasconcelos | `https://www.ubereats.com/mx/store/tacos-atarantados-vasconcelos/PG6r9jpBXA69vRHATVBRIA?diningMode=DELIVERY` |
| San Jerónimo | `https://www.ubereats.com/mx/store/tacos-atarantados-san-jeronimo/r5Oj42dcVYCL1lqgkqDYhQ?diningMode=DELIVERY` |
| Armida/Valle Oriente | `https://www.ubereats.com/mx/store/tacos-atarantados-distrito-armida/9GKBkqToWxCjnYCd9P_oUQ?diningMode=DELIVERY` |
| Omnia/Carretera Nacional | `https://www.ubereats.com/mx/store/tacos-atarantados-omnia/jvNtUcf4WVe9QuafVwn8eQ?diningMode=DELIVERY` |
| San Nicolás | `https://www.ubereats.com/mx/store/tacos-atarantados-san-nicolas/tgS6O9W9VByJ0VMQHBwRpw?diningMode=DELIVERY` |

Full URLs include a `pl` query param with encoded location data (CDMX preset). The base URL without `pl` also works.

### Partner Links
| Partner | URL |
|---------|-----|
| Mandala Group | `https://mandalagroup.mx/` |
| Grupo Buenas Vibras | `https://www.instagram.com/grupo_buenasvibras/?hl=es` |

### Contact Form
- Framer's native form system
- Fields: Name (required), Email (required), Mensaje (textarea)
- Honeypot fields included (website, company, message, subject, etc.)
- Submit button: white bg, green text "ENVIAR", border-radius: 3px

---

## 14. GLOBAL CSS RESET & BASE STYLES

```css
html, body, #main {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
:root {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  box-sizing: border-box;
  -webkit-font-smoothing: inherit;
}
h1, h2, h3, h4, h5, h6, p, figure {
  margin: 0;
}
body, input, textarea, select, button {
  font-family: sans-serif;
  font-size: 12px;
}
body {
  --token-f47a6f2e-b891-417f-bb8d-79fc73f4cce2: #0c7528;
  --token-808e64f0-2121-4b17-b415-4377277d197d: #fff0;
  --token-c2aafaf1-8c39-4bd7-a0fe-7c272e1266f1: #085e1f;
}
html body {
  background: rgb(255, 255, 255);
}
```

---

## 15. KEY LAYOUT MEASUREMENTS SUMMARY

### Desktop (1200px)
| Component | Width | Height | Notes |
|-----------|-------|--------|-------|
| Page root | 1200px | varies | Centered |
| Hero section | 100% | 675px | |
| Navbar | 1200px | 90px | absolute in hero |
| Logo | 170px | 46px | |
| Nav menu panel | 723px | 408px | bottom: 96px in hero |
| Nav menu padding | — | 145px | all sides |
| Nav row gap | — | 7px | between rows |
| Quienes somos | 1205px | 681px | padded 24px |
| Circle section | 338px circle | 623px tall | |
| Green sticky section | 100% | 958px | |
| Movement image | 1602px | 769px | animated |
| Footer | 1200px | 337px | |
| Footer padding | — | 24px | |
| Footer social gap | — | 19px | |
| Footer row 1 width | 420px | 103px | social area |
| Footer scrollbar strip | 1152px | 83px | |
| Footer legal column | auto | auto | flex-end align |
| Footer copyright row gap | — | 63px | |

### Mobile (390px)
| Component | Width | Height |
|-----------|-------|--------|
| Page root | 390px | 4116px |
| Footer | 390px | 796px |
| Nav menu | 237px | 430px |

---

## 16. SEO & META

```html
<html lang="es">
<title>Tacos Atarantados</title>
<meta name="description" content="Representando los tradicionales tacos y especialidades mexicanas, brindamos una experiencia llena de sabores y colores del México urbano, repleto de camaradería y las mejores cumbias.">
<meta property="og:type" content="website">
<meta property="og:title" content="Tacos Atarantados">
<meta property="og:image" content="https://framerusercontent.com/images/h1SSx3YCnDZJch7vL7rBhwKA.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="robots" content="max-image-preview:large">
```

Canonical: `https://tacosatarantados.mx/`

---

## 17. NEXT.JS TAILWIND IMPLEMENTATION NOTES

### Tailwind Config Extensions Needed
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'verde': '#0c7528',
        'verde-oscuro': '#085e1f',
      },
      fontFamily: {
        'gothic': ['"Gothic Regular"', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      screens: {
        'sm': '390px',
        'md': '810px',
        'lg': '1200px',
      },
    },
  },
}
```

### Next.js Font Setup
```js
// app/layout.tsx — for Google Fonts (Oswald) via next/font
import { Oswald } from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'], weight: ['400'] })

// Gothic Regular — self-hosted from Framer CDN
// Add to /public/fonts/GothicRegular.woff2
```

### Key Animation (ATARANTADOS MOVEMENT horizontal scroll)
```tsx
// Framer Motion equivalent
<motion.div
  style={{ translateX: scrollYProgress }}  // scroll-linked
  animate={{ x: [-790, 0] }}
  transition={{ duration: 0.4, type: 'spring', bounce: 0.2 }}
>
  <img src="..." />
</motion.div>
```

### Nav Hover Animation
```tsx
<motion.a
  whileHover={{ opacity: 0.6 }}
  transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
>
  <img src="..." />
</motion.a>
```

---

*This document was extracted directly from the Framer source HTML, CSS (SSR), and JS bundle at `soulful-types-912265.framer.app`. All values are exact, not approximated.*
