# FuturFestival.mx — Complete Design Extraction
**Extracted:** April 3, 2026 | **Source:** https://futurfestival.mx/ (Framer site)

---

## 1. GLOBAL DESIGN TOKENS

### Colors
| Token | Hex / RGB | Usage |
|-------|-----------|-------|
| Background (home/collab) | `#224366` = `rgb(34, 67, 102)` | Page background |
| Background (privacy) | `#ffffff` = `rgb(255, 255, 255)` | White page |
| Text primary | `#ffffff` | All headings + body on dark pages |
| Text muted | `#888888` | Form labels, footer links |
| Text placeholder | `#696969` | Input placeholders (registration modal) |
| Text placeholder (collab) | `#999999` | Input placeholders (collab form) |
| Accent orange | `#ff8000` | Checkbox checked state |
| Accent peach | `#ffb973` | Input focused border color |
| Link color | `#0099ff` = `rgb(0, 153, 255)` | All inline links |
| Link hover (muted) | `#888888` | Privacy policy link (in modal) |
| Modal overlay | `rgba(63, 104, 143, 0.69)` | Registration modal backdrop |
| Form card background | `#fefefe` | Registration modal card |
| Form card border | `#fefefe` | 1px solid |
| Input background (reg modal) | `#fefefe` | Registration form text inputs |
| Input background (date field) | `rgba(254, 254, 254, 0.15)` | Birth date field |
| Input checkbox bg | `rgba(136, 136, 136, 0.2)` | Unchecked state |
| Input checkbox checked | `#ff8000` | Checked state |
| Submit button default | `rgb(51, 51, 51)` | Both forms |
| Submit button hover | `rgba(51, 51, 51, 0.85)` | Hover state |
| Submit button success gradient | `linear-gradient(180deg, rgb(255,182,64) 0%, rgb(219,172,180) 35%, rgb(161,192,215) 70%, rgb(70,114,171) 100%)` | Homepage button success |
| Submit button error bg | `rgba(255, 34, 68, 0.15)` | Error state |
| Submit button error text | `rgb(255, 34, 68)` | Error text color |
| Success text color | `rgb(255, 255, 255)` | "YOU'RE IN" text |
| Nav bg (privacy) | `rgba(255, 255, 255, 0.7)` | Navbar with blur(5px) |
| Nav shadow (privacy) | `0px 3px 10px 3px rgba(0,0,0,0.25)` | Navbar shadow |
| Nav border bottom (privacy) | `rgba(0, 0, 0, 0.08)` | 1px bottom border |
| Collab form card | `#ffffff` | White card |
| Collab form card radius | `8px` | Border radius |
| Collab input background | `rgba(187,187,187,0.15)` = `#bbbbbb26` | Input bg |
| Collab input border | `rgba(136,136,136,0.1)` = `#8888881a` | Input border |
| Collab input focus border | `#0099ff` | Focus ring |

### Fonts

#### NT Dapper Bold (Custom, primary display font)
```css
@font-face {
  font-family: "NT Dapper Bold";
  src: url("https://framerusercontent.com/assets/lg8pGDhHXkXCwpzc4qbeWBUI.woff2");
  font-display: swap;
  font-style: normal;
  font-weight: 700;
}
```

#### Inter (System/body font)
Multiple weights (400, 500, 600, 700, 900) — standard Inter from Framer CDN.
- **Weight 400 Latin**: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`
- **Weight 600 Latin**: `https://framerusercontent.com/assets/yDtI2UI8XcEg1W2je9XPN3Noo.woff2`
- **Weight 700 Latin**: `https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`

---

## 2. TYPOGRAPHY PRESETS

### preset-nspcl7 — Body/Navigation text (h3 tag)
```css
font-family: "NT Dapper Bold", "NT Dapper Bold Placeholder", sans-serif;
font-size: 16px;
font-weight: 700;
font-style: normal;
letter-spacing: 0em;
line-height: 1.2em;
paragraph-spacing: 40px;
color: #ffffff;
text-transform: none;
text-decoration: none;
```
Used for: Navigation top line, footer copyright, collab page subtext

### preset-1gsqncf — CTA / Button text (h2 tag)
```css
font-family: "NT Dapper Bold", "NT Dapper Bold Placeholder", sans-serif;
font-size: 21px;
font-weight: 700;
letter-spacing: 0em;
line-height: 1.2em;
color: #ffffff;
```
Used for: "REGISTER NOW!" button text

### preset-89l7r3 — Large heading (h1 tag)
```css
font-family: "NT Dapper Bold", "NT Dapper Bold Placeholder", sans-serif;
font-size: 35px;
font-weight: 700;
letter-spacing: 0em;
line-height: 1.2em;
paragraph-spacing: 0px;
color: #ffffff;
```
Used for: "JOIN THE FUTUR." and "AVISO DE PRIVACIDAD."

### preset-149xvez — Link style override
```css
--framer-link-text-color: #ffffff;
```
Used for: Navigation link "WHAT IS THE FUTUR"

### preset-horxd7 — Muted link style
```css
--framer-link-text-color: #888888;
--framer-link-text-decoration: underline;
```
Used for: "privacy policy." link in registration form

### Form label text (h3 in modal)
```
NT Dapper Bold, 12px, weight 700, color #888888
```

### Privacy text label (collab form)
```
Inter Medium, 12px, weight 500, color rgb(136,136,136)
```

### Submit button text
```
Inter SemiBold, 14px, weight 600, color #ffffff
```

---

## 3. BREAKPOINTS

| Name | Media Query | Container Width |
|------|-------------|-----------------|
| Desktop | `(min-width: 1200px)` | `1200px` |
| Tablet | `(min-width: 810px) and (max-width: 1199.98px)` | `810px` |
| Mobile | `(max-width: 809.98px)` | `390px` |

---

## 4. IMAGES / ASSETS

| Asset | URL | Dimensions | Usage |
|-------|-----|------------|-------|
| Logo (white, horizontal) | `https://framerusercontent.com/images/QqnMVevVgeLXzflmO0nSUdGw.png` | 8979×922px | Main logo on all pages |
| Hero background | `https://framerusercontent.com/images/Xve18KHYNQ5NaJxBlj8xaJqAmo.png` | 2085×1316px | Full-page hero bg (sunset gradient with noise) |
| Favicon (light mode) | `https://framerusercontent.com/images/q3a9DIwpgUAa9UkaX02tkaHl4.png` | 2084×2084px | Used as icon on privacy page nav |
| Favicon (dark mode) | `https://framerusercontent.com/images/5LD1lCXaNaG7tKE12KgT3f4A.png` | — | Icon dark |
| Apple touch icon | `https://framerusercontent.com/images/MK0M5bvJSSMABBbZjLAkBoi4u8.png` | — | Touch icon |
| Spinner SVG | `https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg` | 20×20px | Button loading spinner mask |

### Logo sizing by breakpoint
- **Desktop (≥1200px)**: 600px wide × 199px tall (`object-fit: contain`)
- **Tablet (810-1199px)**: 600px wide × 199px tall
- **Mobile (<810px)**: 100% width (`calc(100vw - 60px)`)

### On Collab page, logo is in the navbar bar:
- **Desktop**: ~272.68px wide
- **Tablet**: ~399.28px wide  
- **Mobile**: `max(100vw - 40px, 1px)`

---

## 5. HOMEPAGE LAYOUT

### Page Structure
```
<body bg="#224366">
  <div.framer-72rtr7>  /* Container, width: 1200px (desktop) */
    <div.framer-1b0qbon data-name="Hero">  /* height: 100vh, padding: 20px */
      [background image: sunset gradient hero, cover]
      
      <div.framer-1je4s9e data-name="First Line">  /* flex-row, justify-between, padding: 10px */
        <h3.preset-nspcl7>WHAT IS THE FUTUR</h3>  /* → external link to kappafuturfestival.it */
        <h3.preset-nspcl7>COMING TO MEXICO</h3>   /* desktop/tablet only */
        /* mobile: "MEXICO 2026" instead of "COMING TO MEXICO" */
      </div>
      
      <div.framer-psp0qz data-name="Content">  /* flex-col, align-center, gap: 10px, padding: 10px */
        <div.framer-p3u1en data-name="Logo">  /* 600×199px desktop, 100% mobile */
          [Logo image: object-fit contain]
        </div>
        
        <div.framer-rlp1ck data-name="Register Button">  /* 258px wide, 42px tall, transparent bg */
          /* 3px solid white border on all sides */
          /* cursor: pointer */
          <h2.preset-1gsqncf>REGISTER NOW!</h2>  /* centered, absolute position */
        </div>
      </div>
      
      <div.framer-21pnhy data-name="Base Line">  /* flex-row, justify-between, padding: 10px */
        <h3.preset-nspcl7>© 2026 Movement Entertainment Srl</h3>
        /* mobile: centered text */
      </div>
    </div>
  </div>
  
  <div#overlay>  /* Portal mount for modal */
</body>
```

### Mobile Overrides
```css
@media (max-width: 809.98px) {
  .container { width: 390px; }
  .first-line { padding: 0px; }
  .logo { width: 100%; }
  .register-btn { width: 185px; }  /* smaller button */
  .base-line { gap: 10px; justify-content: center; }
}

@media (min-width: 810px) and (max-width: 1199.98px) {
  .container { width: 810px; }
}
```

---

## 6. REGISTRATION MODAL (Homepage)

The "REGISTER NOW!" button triggers a Framer overlay portal.

### Modal Structure
```
[Overlay: fixed, inset: 0, bg: rgba(63,104,143,0.69), z-index: 2]
  [Modal container: fixed, centered via translate(-50%,-50%), z-index: 2]
    
    [Close button: 25×25px, border-radius top-left+right: 4px, cursor: pointer]
      [X icon: SVG, color #ffffff, line-width: 1.5, opacity: 1]
    
    [Form card: 327px wide, bg #fefefe, border: 1px solid #fefefe]
      [border-radius: 0 4px 4px 4px (top-right, bottom-right, bottom-left — no top-left)]
      [padding: 20px, gap: 20px, align-items: flex-end]
      
      [Form: POST to https://api.framer.com/forms/v1/forms/6c2dd0b7-0a55-485d-b373-6d14febfe722/submit]
        
        Fields (each in a label wrapper, flex-col, gap: 10px):
        
        1. First Name
           - type: text
           - placeholder: "First Name"
           - required: true
           - class: framer-zvwcvq (same input styling as below)
        
        2. Last Name
           - type: text
           - placeholder: "Last Name"
           - required: true
        
        3. Email
           - type: email
           - placeholder: "Email"
           - required: true
        
        4. Phone (International Phone Input component)
           - type: phone
           - defaultCountry: "MX"
           - showFlag: true (emoji flags)
           - showPhoneCode: true
           - required: true
           - input width: 287px
           - background: rgb(254, 254, 254)
           - border: 1px solid rgb(136, 136, 136)
           - focus border: 2px solid rgb(255, 185, 115)
           - font: Inter 400 15px, letter-spacing: -0.01em
           - placeholder color: rgb(105, 105, 105)
           - text color: rgb(105, 105, 105)
           - radius: 4px
           - padding: 10px 12px
           - dropdown: 200px height, radius 4px, shadow: 0 4px 8px rgba(43,43,43,0.35)
           - dropdown bg: rgb(254, 254, 254)
           - dropdown border: 1px solid rgb(105, 105, 105)
        
        5. Birth Date
           - type: date
           - placeholder: (date picker native)
           - required: true
           - label text: "Birth Date"  (NT Dapper Bold, 12px, weight 700)
           - background: rgba(254, 254, 254, 0.15) — semi-transparent
           - border: 1px solid #888888
           - border-radius: 4px
           - focused border: 1px solid #ffb973
           - font: Inter 400, 14px
           - placeholder color: #696969
           - height: 40px
        
        6. Privacy Checkbox row (flex-row, gap: 10px, align-center)
           - Checkbox: 16×16px, border-radius: 4px
             - unchecked bg: rgba(136,136,136,0.2)
             - unchecked border: rgba(136,136,136,0.2)
             - checked bg: #ff8000
             - icon color: #ffffff
             - focused border: #ffb973
           - Label text: "By clicking below to submit this form, you acknowledge that the 
             information you provide will be processed in accordance with our [privacy policy.]"
             - Font: NT Dapper Bold, 9px, weight 700, color #888888
             - "privacy policy." link → /privacy, color #888888, underline
        
        Submit Button (287px wide, 40px tall):
        - border-radius: 4px (homepage) / 10px (collab page)
        - Default: background: rgb(51, 51, 51)
        - Hover: background: rgba(51, 51, 51, 0.85)
        - Loading: spinner animation (conic-gradient)
        - Disabled: opacity: 0.5
        - Success: gradient (rgb(255,182,64) → rgb(219,172,180) → rgb(161,192,215) → rgb(70,114,171))
        - Error: background rgba(255, 34, 68, 0.15)
        
        Button text states:
        - Default: "Submit" — Inter SemiBold 14px, white
        - Success: "YOU'RE IN. SEE YOU IN THE FUTUR" — Inter SemiBold 13px, white
        - Error: "Something went wrong" — Inter SemiBold 14px, rgb(255,34,68)
        - Loading: spinner icon (no text)
```

### Input Styling (Registration Modal Text Inputs)
```css
background: #fefefe;
border: 1px solid #888888;
border-radius: 4px;
height: 40px;
padding: 12px;
font-family: "Inter";
font-size: 14px;
font-weight: 400;
color: #000000;
placeholder-color: #696969;
/* Focus state: */
border-color: #ffb973;
border-style: solid;
border-width: 1px;
```

---

## 7. COLLAB PAGE (/collab)

### Layout
```
<body bg="#224366">
  Container: 1200px (desktop), 810px (tablet), 390px (mobile)
  
  Hero section (100vh, padding: 20px):
    Background: same sunset gradient hero image
    
    Top bar (flex-row, space-between, height: 48px desktop / 61px mobile):
      Logo (in navbar position, aspect-ratio: 9.74)
    
    Content area:
      Desktop layout (flex-row, gap: 77px, align-center):
        LEFT: Form card (387px wide)
        RIGHT: Text content (40% width)
      
      Tablet (flex-col, gap: 26px)
      Mobile (flex-col, gap: 46px)
    
    Footer (flex-row, justify-between, padding: 10px):
      © 2026 Movement Entertainment Srl
```

### Collab Form Card
```css
background: #ffffff;
border-radius: 8px;
padding: 20px;
gap: 20px;
width: 387px;
```

### Collab Form Fields
**POST to**: `https://api.framer.com/forms/v1/forms/1a134124-d3e8-4832-9912-4c0701004a97/submit`

```
1. Name
   - type: text
   - name: "Name"
   - placeholder: "Name and last name"
   - label: "Name" (Inter 500 12px, color #888888)

2. Email
   - type: email
   - name: "Email"
   - placeholder: "your@mail.com"
   - label: "Email" (Inter 500 12px, color #888888)

3. Cellphone
   - type: tel
   - name: "Cellphone"
   - placeholder: "Phone Number"
   - label: "Cellphone" (Inter 500 12px, color #888888)

4. Your role (select/dropdown)
   - name: "Location"
   - required: true
   - Default option: "Select…" (disabled, selected)
   - Options:
     • "Influencer"
     • "Content Creator"
     [divider hr]
     • "Agency"
     • "DJ"
     [divider hr]
     • "Photographer"
     • "Filmmaker"
     • "Press / Media"
     • "Fan Page"
     [divider hr]
     • "Volunteer / Staff"
     • "Supplier"
     • "Sponsor / Brand"
     [divider hr]
     • "Other"

5. Your message (textarea)
   - name: "Message"
   - placeholder: "How you want to collaborate"
   - label: "Your message" (Inter 500 12px, color #888888)
   - min-height: 100px, resize: vertical

6. Link
   - type: url
   - name: "Links"
   - placeholder: "Portfolio, demo reel, profile, etc."
   - label: "Link" (Inter 500 12px, color #888888)

Submit Button:
- Default: bg rgb(51,51,51), text "Submit", Inter SemiBold 14px white
- Hover: bg rgba(51,51,51,0.85)
- Success: text "Thank you", white
- Error: text "Something went wrong", rgb(255,34,68), bg rgba(255,34,68,0.15)
- border-radius: 10px (collab page specifically)
- width: 240px
- height: 40px
```

### Collab Input Styling
```css
background: rgba(187, 187, 187, 0.15);
border: 1px solid rgba(136, 136, 136, 0.1);
border-radius: 10px;
height: 40px;
padding: 12px;
font-family: "Inter";
font-size: 14px;
font-weight: 400;
color: #999999;
placeholder-color: #999999;
/* Focus state: */
border-color: #0099ff;
border-style: solid;
border-width: 1px;
```

### Right text content (collab page)
```
h1: "JOIN THE FUTUR."
    NT Dapper Bold, 35px, white, text-align: left (desktop)

h3: "ARE YOU INTERESTED IN COLLABORATING WITH US?
     SEND US A MESSAGE.
     [desktop only:] WE'LL REVIEW ALL APPLICATIONS AND GET BACK TO YOU AS SOON AS POSSIBLE."
    NT Dapper Bold, 16px, white

h3 [below form, tablet/mobile]:
    "WE'LL REVIEW ALL APPLICATIONS AND GET BACK TO YOU AS SOON AS POSSIBLE."
```

---

## 8. PRIVACY PAGE (/privacy)

### Layout
```
Background: #ffffff (white)

[Sticky navbar (desktop):
  backdrop-filter: blur(5px)
  background: rgba(255,255,255,0.7)
  box-shadow: 0 3px 10px 3px rgba(0,0,0,0.25)
  height: 64px, padding: 20px
  
  Logo: 98×47px (brand favicon/square logo)
  URL: https://framerusercontent.com/images/q3a9DIwpgUAa9UkaX02tkaHl4.png
  Links: [empty on privacy page]
  Bottom line: 1px rgba(0,0,0,0.08)
]

Content area:
  max-width: 1080px
  padding: 60px 200px (desktop)
  padding: 20px (mobile)
  gap: 10px
```

### Privacy Page Typography
- **h1**: NT Dapper Bold 35px, black (color overridden to rgb(0,0,0) on this page)
- **body p**: Inter paragraph text, black

### Privacy Page Content (complete)
**Title:** AVISO DE PRIVACIDAD.

**Responsible Party:** CORE GLOBAL TRANS-LOGISTIC SA de CV, con nombre comercial **Mandala Group y/o FuturFestival Mexico**, con domicilio en **Calle Luigi Pirandello #5297, Zapopan, Jalisco, 45110**, es responsable del tratamiento de sus datos personales conforme a la **Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)**

**Sections:**
1. DATOS PERSONALES QUE SE RECABAN — Nombre, Fecha de nacimiento, Teléfono, Correo electrónico, Cookies (IP, sesión, dispositivo, preferencias)
2. FINALIDADES DEL TRATAMIENTO DE DATOS — Marketing, encuestas, recomendaciones, eventos
3. TRANSFERENCIAS DE DATOS PERSONALES — Centros de consumo, socios, autoridades, seguridad
4. CONSERVACIÓN DE DATOS — Identificación/contacto: 5 años; publicitarios: hasta cancelación
5. MEDIDAS DE SEGURIDAD — Acceso restringido, cifrado, registros electrónicos, controles
6. DERECHOS ARCO — Acceder, Rectificar, Cancelar, Oponerse | Email: privacidad@mandalagroup.mx
7. REVOCACIÓN DEL CONSENTIMIENTO — Finalidades secundarias solamente
8. LIMITACIÓN DEL USO Y DIVULGACIÓN — Petición a privacidad@mandalagroup.mx
9. USO DE COOKIES Y TECNOLOGÍAS DE SEGUIMIENTO — Cookies, beacons, píxeles
10. MODIFICACIONES AL AVISO DE PRIVACIDAD — Publicadas en el sitio
11. ACEPTACIÓN DEL AVISO DE PRIVACIDAD — Uso del sitio, compra de boleto, datos voluntarios, casilla

**Last updated:** [FEBRERO 2026]

---

## 9. ANIMATIONS (Framer Motion)

All animations are entrance effects triggered on scroll-into-view.

### Element: First Line (nav bar top row) — ID: 1je4s9e / 1r259ga
```javascript
initial: { opacity: 0.001, y: -150 }
animate: { opacity: 1, y: 0 }
transition: { type: "spring", bounce: 0.2, delay: 0, duration: 0.4 }
```

### Element: Logo — ID: p3u1en / breku1
```javascript
initial: { opacity: 0.001, y: 150 }
animate: { opacity: 1, y: 0 }
transition: { type: "tween", delay: 0.1, duration: 0.9, ease: [0.44, 0, 0.56, 1] }
// Same animation for all breakpoints
```

### Element: Register Button — ID: rlp1ck
```javascript
initial: { opacity: 0.001, x: 0, y: 0 }
animate: { opacity: 1, x: 0, y: 0 }
transition: { type: "spring", bounce: 0.2, delay: 0.7, duration: 0.9 }
```

### Element: Footer line — ID: 21pnhy / 19c398q
```javascript
initial: { opacity: 0.001, y: 150 }
animate: { opacity: 1, y: 0 }
transition: { type: "spring", bounce: 0.2, delay: 0, duration: 0.4 }
```

### Modal Open Animation
```javascript
animate: { opacity: 1, transition: { delay: 0, duration: 0.3, ease: [0.5, 0, 0.88, 0.77], type: "tween" } }
initial: { opacity: 0 }
exit: { opacity: 0, transition: { delay: 0, duration: 0, ease: [0, 0, 1, 1], type: "tween" } }
```

### Button Loading Spinner
```javascript
// CSS conic-gradient mask spinner, continuous rotation
__framer__loop: { opacity: 1, rotate: 360 }
__framer__loopRepeatType: "loop"
```

---

## 10. COMPLETE CSS (Homepage — pixel perfect)

```css
/* ===== ROOT ===== */
html body { background: rgb(34, 67, 102); }

/* ===== CONTAINER ===== */
.page-container {
  align-content: center;
  align-items: center;
  background-color: #224366;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 0px;
  height: min-content;
  justify-content: flex-start;
  min-height: 100vh;
  overflow: clip;
  padding: 0px;
  position: relative;
  width: 1200px;
}
@media (min-width: 810px) and (max-width: 1199.98px) {
  .page-container { width: 810px; }
}
@media (max-width: 809.98px) {
  .page-container { width: 390px; }
}

/* ===== HERO ===== */
.hero {
  align-content: center;
  align-items: center;
  display: flex;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100vh;
  justify-content: space-between;
  overflow: hidden;
  padding: 20px;
  position: relative;
  width: 100%;
  z-index: 1;
}

/* ===== FIRST LINE (nav-like) ===== */
.first-line {
  align-content: center;
  align-items: center;
  display: flex;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: min-content;
  justify-content: space-between;
  overflow: clip;
  padding: 10px;
  position: relative;
  width: 100%;
}
@media (max-width: 809.98px) {
  .first-line { padding: 0px; }
}

/* ===== CONTENT AREA (logo + button) ===== */
.content-area {
  align-content: center;
  align-items: center;
  display: flex;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 10px;
  height: min-content;
  justify-content: center;
  overflow: clip;
  padding: 10px;
  position: relative;
  width: 100%;
}

/* ===== LOGO ===== */
.logo {
  flex: none;
  height: 199px;
  position: relative;
  width: 600px;
}
@media (max-width: 809.98px) {
  .logo { width: 100%; }
}

/* ===== REGISTER BUTTON ===== */
.register-button {
  --border-bottom-width: 3px;
  --border-color: #ffffff;
  --border-left-width: 3px;
  --border-right-width: 3px;
  --border-style: solid;
  --border-top-width: 3px;
  background-color: rgba(255, 255, 255, 0);
  cursor: pointer;
  flex: none;
  height: 42px;
  overflow: clip;
  position: relative;
  width: 258px;
}
.register-button::after {
  content: "";
  border: 3px solid #ffffff;
  width: 100%;
  height: 100%;
  position: absolute;
  box-sizing: border-box;
  left: 0;
  top: 0;
  pointer-events: none;
}
.register-button-text {
  flex: none;
  height: auto;
  left: 50%;
  position: absolute;
  top: 52%;
  transform: translate(-50%, -50%);
  white-space: pre;
  width: auto;
}
@media (max-width: 809.98px) {
  .register-button { width: 185px; }
  .register-button-text { left: 49%; top: 48%; }
}

/* ===== BASE LINE (footer) ===== */
.base-line {
  align-content: center;
  align-items: center;
  display: flex;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: min-content;
  justify-content: space-between;
  overflow: clip;
  padding: 10px;
  position: relative;
  width: 100%;
}
@media (max-width: 809.98px) {
  .base-line { gap: 10px; justify-content: center; }
}

/* ===== MODAL OVERLAY ===== */
.modal-overlay {
  background-color: rgba(63, 104, 143, 0.69);
  inset: 0px;
  position: fixed;
  user-select: none;
  z-index: 2;
}

/* ===== MODAL CONTAINER ===== */
.modal-container {
  align-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 0px;
  height: min-content;
  justify-content: center;
  left: 50%;
  overflow: clip;
  padding: 0px;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: min-content;
  z-index: 2;
}

/* ===== CLOSE BUTTON ===== */
.close-button {
  aspect-ratio: 1;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  cursor: pointer;
  flex: none;
  height: 25px;
  overflow: clip;
  position: relative;
  width: 25px;
}

/* ===== FORM CARD ===== */
.form-card {
  --border-bottom-width: 1px;
  --border-color: #fefefe;
  --border-left-width: 1px;
  --border-right-width: 1px;
  --border-style: solid;
  --border-top-width: 1px;
  align-content: flex-end;
  align-items: flex-end;
  background-color: #fefefe;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  /* NO border-top-left-radius — connects to close button */
  display: flex;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 20px;
  height: min-content;
  justify-content: flex-end;
  overflow: hidden;
  padding: 20px;
  position: relative;
  width: 327px;
}

/* ===== FORM FIELD GROUPS ===== */
.form-field {
  align-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 10px;
  height: min-content;
  justify-content: flex-start;
  padding: 0px;
  position: relative;
  width: 100%;
}

/* ===== TEXT INPUTS (Registration modal) ===== */
.reg-input {
  --framer-input-background: #fefefe;
  --framer-input-border-color: #888888;
  --framer-input-border-radius: 4px;
  --framer-input-border-style: solid;
  --framer-input-border-width: 1px;
  --framer-input-focused-border-color: #ffb973;
  --framer-input-font-color: #000000;
  --framer-input-font-family: "Inter";
  --framer-input-font-size: 14px;
  --framer-input-font-weight: 400;
  --framer-input-padding: 12px;
  --framer-input-placeholder-color: #696969;
  flex: none;
  width: 100%;
  height: 40px;
  position: relative;
  
  /* Actual CSS: */
  background: #fefefe;
  border: 1px solid #888888;
  border-radius: 4px;
  padding: 12px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #000;
  outline: none;
}
.reg-input:focus {
  border-color: #ffb973;
}
.reg-input::placeholder {
  color: #696969;
}

/* ===== DATE INPUT (semi-transparent) ===== */
.date-input {
  background: rgba(254, 254, 254, 0.15);
  border: 1px solid #888888;
  border-radius: 4px;
  padding: 12px;
  height: 40px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #000;
}
.date-input:focus { border-color: #ffb973; }
.date-input::placeholder { color: #696969; }

/* ===== PRIVACY ROW ===== */
.privacy-row {
  align-content: center;
  align-items: center;
  display: flex;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 10px;
  height: min-content;
  justify-content: flex-start;
  padding: 0px;
  position: relative;
  width: 100%;
}

/* ===== CHECKBOX ===== */
.privacy-checkbox {
  aspect-ratio: 1;
  height: 16px;
  width: 16px;
  flex: none;
  position: relative;
  border: 1px solid rgba(136, 136, 136, 0.2);
  border-radius: 4px;
  background: rgba(136, 136, 136, 0.2);
}
.privacy-checkbox:checked {
  background: #ff8000;
  border-color: #ff8000;
}
.privacy-checkbox:focus { border-color: #ffb973; }

/* ===== SUBMIT BUTTON (homepage) ===== */
.submit-btn {
  background: rgb(51, 51, 51);
  border-radius: 4px;
  height: 40px;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
}
.submit-btn:hover { background: rgba(51, 51, 51, 0.85); }
.submit-btn.success {
  background: linear-gradient(180deg, rgb(255,182,64) 0%, rgb(219,172,180) 35%, rgb(161,192,215) 70%, rgb(70,114,171) 100%);
}
.submit-btn.error { background: rgba(255, 34, 68, 0.15); }
.submit-btn.disabled { opacity: 0.5; }
```

---

## 11. COLLAB PAGE CSS (pixel perfect)

```css
/* ===== COLLAB CONTAINER ===== */
.collab-hero {
  align-content: center;
  align-items: center;
  display: flex;
  flex: none;
  flex-direction: column; /* desktop: row-ish via inner flex */
  height: 100vh;
  justify-content: space-between;
  overflow: hidden;
  padding: 20px;
  position: relative;
  width: 100%;
}
/* Desktop: convert to justify-center with gap */
@media (min-width: 1200px) {
  .collab-hero { justify-content: center; gap: 74px; }
}
@media (min-width: 810px) and (max-width: 1199.98px) {
  .collab-hero { justify-content: center; gap: 74px; height: min-content; }
}

/* ===== COLLAB CONTENT (form + text side-by-side) ===== */
.collab-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 77px;
  width: 100%;
}
@media (min-width: 810px) and (max-width: 1199.98px) {
  .collab-content { flex-direction: column; gap: 26px; }
}
@media (max-width: 809.98px) {
  .collab-content { flex-direction: column; gap: 46px; }
}

/* ===== COLLAB FORM CARD ===== */
.collab-form-card {
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;
  gap: 20px;
  width: 387px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
}

/* ===== COLLAB INPUTS ===== */
.collab-input {
  background: rgba(187, 187, 187, 0.15);
  border: 1px solid rgba(136, 136, 136, 0.1);
  border-radius: 10px;
  height: 40px;
  padding: 12px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #999999;
  width: 100%;
  outline: none;
}
.collab-input:focus { border-color: #0099ff; }
.collab-input::placeholder { color: #999999; }

/* ===== COLLAB SUBMIT BUTTON ===== */
.collab-submit {
  background: rgb(51, 51, 51);
  border-radius: 10px;  /* different from homepage! */
  height: 40px;
  width: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.collab-submit:hover { background: rgba(51, 51, 51, 0.85); }
.collab-submit.error { background: rgba(255, 34, 68, 0.15); }
.collab-submit.disabled { opacity: 0.5; }
```

---

## 12. EXTERNAL LINKS

- "WHAT IS THE FUTUR" → `https://www.kappafuturfestival.it/en/?utm_source=website&utm_medium=mexico&utm_campaign=kffmx_preregistration`
  - Opens in new tab (`target="_blank"`, `rel="noopener"`)

---

## 13. ANALYTICS / TRACKING

- **Facebook Pixel ID**: `1455104012884985`
- **Google Analytics ID**: `G-S93BY7F0BS`
- **Framer Site ID**: `1b95b44b84108bb432a6200181c55c53033d4305d61451cf5b0505f35a26152b`

---

## 14. NEXT.JS + TAILWIND RECREATION NOTES

### Tailwind Config
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-blue': '#224366',
        'brand-orange': '#ff8000',
        'brand-peach': '#ffb973',
        'brand-link': '#0099ff',
      },
      fontFamily: {
        'dapper': ['"NT Dapper Bold"', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      screens: {
        'tablet': '810px',   // min-width: 810px
        'desktop': '1200px', // min-width: 1200px
      },
    },
  },
}
```

### Font Loading (Next.js)
```javascript
// app/layout.tsx
// Use next/font/local for NT Dapper Bold
import localFont from 'next/font/local'

const ntDapper = localFont({
  src: [{
    path: '../public/fonts/NT-Dapper-Bold.woff2',
    weight: '700',
    style: 'normal',
  }],
  variable: '--font-nt-dapper',
  display: 'swap',
})
// Download from: https://framerusercontent.com/assets/lg8pGDhHXkXCwpzc4qbeWBUI.woff2
```

### Routes
- `/` — Homepage (hero full-screen, register modal)
- `/collab` — Collaboration form page
- `/privacy` — Privacy notice (white bg, navbar, prose content)

### Key Components
1. `HeroSection` — Full-viewport hero with background image + logo + button
2. `RegisterModal` — Fixed overlay with form (6 fields + checkbox)
3. `CollabForm` — Side-by-side layout with form card + text
4. `SubmitButton` — Multi-state: Default/Loading/Disabled/Success/Error
5. `PhoneInput` — International phone with flag picker (suggest `react-phone-input-2` or `react-international-phone`)
6. `PrivacyPage` — White bg, navbar, prose layout

### Form Submission Endpoints (direct Framer Forms API)
- Registration: `POST https://api.framer.com/forms/v1/forms/6c2dd0b7-0a55-485d-b373-6d14febfe722/submit`
- Collab: `POST https://api.framer.com/forms/v1/forms/1a134124-d3e8-4832-9912-4c0701004a97/submit`
- Honeypot field: `name="website"` with `tabindex="-1"` and `aria-hidden="true"`
