import { config, collection, singleton, fields } from '@keystatic/core';
import { seoFields, socialFields, imageField } from '@mg/keystatic-config';

/**
 * Mandala Group CMS — schema mirrors the original Framer CMS collections
 * (Brands, Venues, Division, Subdivision, City, Press) so the editorial
 * experience matches what marketing already knew in Framer.
 *
 * Framer structure (reference):
 *   - Division (4): title + slug                 → Gastronomic, Events, Daylife, Nightlife
 *   - Subdivision (7): title + slug              → Fine Dining, Casual Dining, High End Nightlife, …
 *   - City (33): title + slug                    → Guadalajara, CDMX, Tulum, Madrid, Marbella, …
 *   - Brands (54): name, id, divisions[],        → Spade, Li-onna, Señor Frogs, Cokin, …
 *                  subdivisions[], link, image
 *   - Venues (132): brand, location, city,       → Spade Guadalajara, Señor Frogs Cabo, …
 *                   thumbnail, description (RT),
 *                   link, gallery, division, subdivision
 *   - Press: title, id, cover, autor, link,      → Graziano's article, Press intro
 *            brand, venue, division, slug
 */

export default config({
  storage: process.env.NODE_ENV === 'development'
    ? { kind: 'local' }
    : { kind: 'github', repo: 'MandalaGroup/new-mg-mkt-cms' },
  ui: { brand: { name: 'Mandala Group CMS' } },

  singletons: {
    /* ────────────────────────────────
       GLOBAL SITE SETTINGS
       ──────────────────────────────── */
    siteSettings: singleton({
      label: 'Configuración del Sitio',
      path: 'content/site-settings',
      schema: {
        siteName: fields.text({ label: 'Nombre del sitio', defaultValue: 'Mandala Group' }),
        tagline: fields.text({ label: 'Tagline / Eslogan', defaultValue: 'World Class Experiences Crafters' }),
        language: fields.select({
          label: 'Idioma por defecto',
          options: [
            { label: 'Inglés', value: 'en' },
            { label: 'Español', value: 'es' },
          ],
          defaultValue: 'en',
        }),
        logo: fields.image({ label: 'Logo', directory: 'public/images', publicPath: '/images' }),
        logoDark: fields.image({ label: 'Logo (versión oscura)', directory: 'public/images', publicPath: '/images' }),
        favicon: fields.image({ label: 'Favicon', directory: 'public', publicPath: '/' }),
        ...seoFields,
        social: fields.object(socialFields, { label: 'Redes Sociales' }),
      },
    }),

    /* ────────────────────────────────
       HERO (HOMEPAGE)
       ──────────────────────────────── */
    homepage: singleton({
      label: 'Hero',
      path: 'content/homepage',
      schema: {
        heroLine1: fields.text({ label: 'Línea 1 (ej: WORLD CLASS)', defaultValue: 'WORLD CLASS' }),
        heroLine2: fields.text({ label: 'Línea 2 (ej: EXPERIENCES)', defaultValue: 'EXPERIENCES' }),
        heroLine3: fields.text({ label: 'Línea 3 (ej: CRAFTERS)', defaultValue: 'CRAFTERS' }),
        heroVideo: fields.text({
          label: 'Video de fondo (ruta)',
          description: 'Ruta al archivo .mp4 dentro de /public',
          defaultValue: '/assets/videos/OCFeezDYPIb3z0si1RnNiifcK3o.mp4',
        }),
        heroPoster: fields.image({
          label: 'Poster del hero (opcional)',
          description: 'Imagen que se muestra mientras carga el video',
          directory: 'public/images/hero',
          publicPath: '/images/hero',
        }),
        cta1Text: fields.text({ label: 'Botón 1 - Texto', defaultValue: 'EXPLORE OUR VENUES' }),
        cta1Link: fields.text({ label: 'Botón 1 - Link', defaultValue: '#venues' }),
        cta2Text: fields.text({ label: 'Botón 2 - Texto', defaultValue: 'RESERVATIONS' }),
        cta2Link: fields.text({ label: 'Botón 2 - Link', defaultValue: '#reservations' }),
      },
    }),

    /* ────────────────────────────────
       DIVISIONS SECTION (homepage cards)
       ────────────────────────────────
       The home page renders 4 big cards (Daylife, Nightlife, Gastronomic,
       Events) with a description + a background video. In Framer this
       is hardcoded in the page design; we expose it as a CMS-editable
       list so marketing can swap videos and copy without touching code.
    */
    divisionsSection: singleton({
      label: 'Secciones de Divisiones (Home)',
      path: 'content/divisions-section',
      schema: {
        items: fields.array(
          fields.object({
            title: fields.text({ label: 'Título' }),
            description: fields.text({ label: 'Descripción', multiline: true }),
            video: fields.text({
              label: 'Video (ruta)',
              description: 'Ruta al .mp4 dentro de /public',
            }),
          }),
          {
            label: 'Tarjetas de División',
            itemLabel: (props) => props.fields.title.value || 'Sin título',
          }
        ),
      },
    }),

    /* ────────────────────────────────
       NAVBAR
       ──────────────────────────────── */
    navbar: singleton({
      label: 'Navbar',
      path: 'content/navbar',
      schema: {
        logoImage: fields.text({ label: 'Logo SVG (ruta)', defaultValue: '/assets/images/mandala-logo-nav.svg' }),
        logoAlt: fields.text({ label: 'Texto alternativo del logo', defaultValue: 'Mandala Group' }),
        link1Text: fields.text({ label: 'Link 1 - Texto', defaultValue: 'Venues' }),
        link1Url: fields.text({ label: 'Link 1 - URL', defaultValue: '#venues' }),
        link2Text: fields.text({ label: 'Link 2 - Texto', defaultValue: 'Corporate Events' }),
        link2Url: fields.text({ label: 'Link 2 - URL', defaultValue: '/corporate-events' }),
        link3Text: fields.text({ label: 'Link 3 - Texto', defaultValue: 'Private Events' }),
        link3Url: fields.text({ label: 'Link 3 - URL', defaultValue: '/private-events' }),
      },
    }),

    /* ────────────────────────────────
       PORTFOLIO / VENUES SECTION
       ──────────────────────────────── */
    portfolio: singleton({
      label: 'Sección Portfolio (Venues)',
      path: 'content/portfolio',
      schema: {
        sectionTitle: fields.text({
          label: 'Título de la sección',
          defaultValue: 'Our Venues',
        }),
        allLabel: fields.text({ label: 'Etiqueta del filtro "All"', defaultValue: 'All' }),
        loadMoreLabel: fields.text({ label: 'Texto del botón "Load More"', defaultValue: 'Load More' }),
      },
    }),

    /* ────────────────────────────────
       NEWSLETTER
       ──────────────────────────────── */
    newsletter: singleton({
      label: 'Newsletter',
      path: 'content/newsletter',
      schema: {
        heading: fields.text({ label: 'Heading pequeño', defaultValue: 'Newsletter' }),
        description: fields.text({
          label: 'Descripción',
          multiline: true,
          defaultValue: "Subscribe to the ultimate insider's guide to unforgettable experiences.",
        }),
        image: fields.text({
          label: 'Imagen (ruta)',
          defaultValue: '/assets/images/wDCJ6PQEkdOh0itp6dwputtehl4_f0569aea.png',
        }),
        emailPlaceholder: fields.text({ label: 'Placeholder del email', defaultValue: 'your@email.com' }),
        buttonText: fields.text({ label: 'Texto del botón', defaultValue: 'Submit' }),
        submitUrl: fields.url({
          label: 'URL de envío (form action)',
          description: 'Endpoint de Mailchimp / Brevo / Resend. Vacío = modo dry-run.',
        }),
        successMessage: fields.text({
          label: 'Mensaje de éxito',
          defaultValue: '¡Gracias por suscribirte!',
        }),
        errorMessage: fields.text({
          label: 'Mensaje de error',
          defaultValue: 'Hubo un problema. Intenta de nuevo.',
        }),
      },
    }),

    /* ────────────────────────────────
       PRESS SECTION META
       ──────────────────────────────── */
    pressSection: singleton({
      label: 'Sección Press (encabezado)',
      path: 'content/press-section',
      schema: {
        sectionTitle: fields.text({
          label: 'Título de la sección',
          defaultValue: 'Press',
        }),
      },
    }),

    /* ────────────────────────────────
       FOOTER
       ──────────────────────────────── */
    footer: singleton({
      label: 'Footer',
      path: 'content/footer',
      schema: {
        logoImage: fields.text({ label: 'Logo SVG (ruta)', defaultValue: '/assets/images/mandala-logo-white.svg' }),
        copyright: fields.text({
          label: 'Texto de copyright',
          defaultValue: '© 2026 Mandala Group. All rights reserved.',
        }),
        address: fields.text({ label: 'Dirección', multiline: true }),
        phone: fields.text({ label: 'Teléfono' }),
        email: fields.text({ label: 'Email de contacto' }),
        showSocials: fields.checkbox({
          label: 'Mostrar íconos de redes sociales',
          description: 'Lee las URLs de siteSettings.social',
          defaultValue: true,
        }),
        link1Text: fields.text({ label: 'Link 1 - Texto', defaultValue: 'PRIVACY' }),
        link1Url: fields.text({ label: 'Link 1 - URL', defaultValue: '/privacy' }),
        link2Text: fields.text({ label: 'Link 2 - Texto', defaultValue: 'TERMS & CONDITIONS' }),
        link2Url: fields.text({ label: 'Link 2 - URL', defaultValue: '/terms' }),
        link3Text: fields.text({ label: 'Link 3 - Texto', defaultValue: 'LEGAL' }),
        link3Url: fields.text({ label: 'Link 3 - URL', defaultValue: '/legal' }),
      },
    }),

    /* ────────────────────────────────
       STATIC PAGES (text body)
       ──────────────────────────────── */
    corporateEventsPage: singleton({
      label: 'Página: Corporate Events',
      path: 'content/corporate-events',
      schema: {
        title: fields.text({ label: 'Título', defaultValue: 'Corporate Events' }),
        intro: fields.text({
          label: 'Intro',
          multiline: true,
          defaultValue: 'Experiencias corporativas diseñadas para dejar huella.',
        }),
        heroImage: imageField('Imagen de encabezado', 'pages'),
        body: fields.text({
          label: 'Contenido del cuerpo',
          multiline: true,
          description: 'Usa una línea en blanco para separar párrafos. Los títulos se pueden marcar con # al inicio de la línea.',
          defaultValue: '',
        }),
      },
    }),

    privateEventsPage: singleton({
      label: 'Página: Private Events',
      path: 'content/private-events',
      schema: {
        title: fields.text({ label: 'Título', defaultValue: 'Private Events' }),
        intro: fields.text({
          label: 'Intro',
          multiline: true,
          defaultValue: 'Celebraciones íntimas con un estándar de primera clase.',
        }),
        heroImage: imageField('Imagen de encabezado', 'pages'),
        body: fields.text({
          label: 'Contenido del cuerpo',
          multiline: true,
          description: 'Usa una línea en blanco para separar párrafos. Los títulos se pueden marcar con # al inicio de la línea.',
          defaultValue: '',
        }),
      },
    }),

    privacyPage: singleton({
      label: 'Página: Privacy',
      path: 'content/privacy',
      schema: {
        title: fields.text({ label: 'Título', defaultValue: 'Privacy Policy' }),
        lastUpdated: fields.date({ label: 'Última actualización' }),
        body: fields.text({
          label: 'Contenido del cuerpo',
          multiline: true,
          description: 'Usa una línea en blanco para separar párrafos. Los títulos se pueden marcar con # al inicio de la línea.',
          defaultValue: '',
        }),
      },
    }),

    termsPage: singleton({
      label: 'Página: Terms & Conditions',
      path: 'content/terms',
      schema: {
        title: fields.text({ label: 'Título', defaultValue: 'Terms & Conditions' }),
        lastUpdated: fields.date({ label: 'Última actualización' }),
        body: fields.text({
          label: 'Contenido del cuerpo',
          multiline: true,
          description: 'Usa una línea en blanco para separar párrafos. Los títulos se pueden marcar con # al inicio de la línea.',
          defaultValue: '',
        }),
      },
    }),

    legalPage: singleton({
      label: 'Página: Legal',
      path: 'content/legal',
      schema: {
        title: fields.text({ label: 'Título', defaultValue: 'Legal' }),
        lastUpdated: fields.date({ label: 'Última actualización' }),
        body: fields.text({
          label: 'Contenido del cuerpo',
          multiline: true,
          description: 'Usa una línea en blanco para separar párrafos. Los títulos se pueden marcar con # al inicio de la línea.',
          defaultValue: '',
        }),
      },
    }),
  },

  collections: {
    /* ────────────────────────────────
       DIVISION  (Framer: "Division" — 4 items)
       Gastronomic, Events, Daylife, Nightlife
       ──────────────────────────────── */
    divisions: collection({
      label: 'Divisiones',
      slugField: 'title',
      path: 'content/divisions/*',
      schema: {
        title: fields.slug({
          name: { label: 'Título', description: 'Ej: Gastronomic, Events, Daylife, Nightlife' },
        }),
      },
    }),

    /* ────────────────────────────────
       SUBDIVISION  (Framer: "Subdivision" — 7 items)
       Fine Dining, Casual Dining, High End Nightlife,
       Casual Nightlife, Beachclub, Festival, Concert
       ──────────────────────────────── */
    subdivisions: collection({
      label: 'Subdivisiones',
      slugField: 'title',
      path: 'content/subdivisions/*',
      schema: {
        title: fields.slug({
          name: { label: 'Título', description: 'Ej: Fine Dining, Casual Dining, Beachclub, Festival' },
        }),
      },
    }),

    /* ────────────────────────────────
       CITIES  (Framer: "City" — 33 items)
       Guadalajara, Monterrey, CDMX, Tulum, Cancún,
       Miami, Madrid, Marbella, …
       ──────────────────────────────── */
    cities: collection({
      label: 'Ciudades',
      slugField: 'title',
      path: 'content/cities/*',
      schema: {
        title: fields.slug({
          name: { label: 'Nombre', description: 'Ej: Guadalajara, Madrid, Tulum' },
        }),
      },
    }),

    /* ────────────────────────────────
       BRANDS  (Framer: "Brands" — 54 items)
       The parent brand itself (Spade, Li-onna, Tehmplo, …).
       Each brand can have MANY venues (locations).
       ──────────────────────────────── */
    brands: collection({
      label: 'Marcas (Brands)',
      slugField: 'name',
      path: 'content/brands/*',
      schema: {
        name: fields.slug({ name: { label: 'Nombre de la marca' } }),
        orderId: fields.integer({
          label: 'ID (para ordenar)',
          description: 'Número manual de ordenamiento. Puede ser negativo.',
          defaultValue: 0,
        }),
        link: fields.url({ label: 'Link principal', description: 'Sitio web oficial o Instagram' }),
        image: imageField('Imagen', 'brands'),
        divisions: fields.array(
          fields.relationship({
            label: 'División',
            collection: 'divisions',
          }),
          {
            label: 'Divisiones',
            description: 'Una o más divisiones a las que pertenece la marca',
            itemLabel: (props) => props.value || 'Seleccionar…',
          }
        ),
        subdivisions: fields.array(
          fields.relationship({
            label: 'Subdivisión',
            collection: 'subdivisions',
          }),
          {
            label: 'Subdivisiones',
            itemLabel: (props) => props.value || 'Seleccionar…',
          }
        ),
      },
    }),

    /* ────────────────────────────────
       VENUES  (Framer: "Venues" — 132 items)
       A specific location of a brand (Spade Guadalajara,
       Señor Frogs Cabo, El Cokin Universidad, …).
       ──────────────────────────────── */
    venues: collection({
      label: 'Venues (ubicaciones)',
      slugField: 'slug',
      path: 'content/venues/*',
      schema: {
        slug: fields.slug({
          name: { label: 'Slug (Brand+Location)', description: 'Ej: spade-guadalajara' },
        }),
        brand: fields.relationship({
          label: 'Marca',
          collection: 'brands',
          description: 'La marca padre a la que pertenece este venue',
        }),
        location: fields.text({
          label: 'Ubicación / Sucursal',
          description: 'Ej: Real Center, Cabos, Puerta de Hierro, Chapalita',
        }),
        city: fields.relationship({
          label: 'Ciudad',
          collection: 'cities',
        }),
        thumbnail: imageField('Thumbnail', 'venues'),
        description: fields.text({
          label: 'Descripción',
          multiline: true,
          description: 'Párrafo descriptivo del venue. Usa líneas en blanco para separar párrafos.',
        }),
        link: fields.url({ label: 'Link del venue' }),
        gallery: fields.array(
          imageField('Imagen', 'venues/gallery'),
          {
            label: 'Galería',
            description: 'Imágenes adicionales del venue',
          }
        ),
        division: fields.relationship({
          label: 'División',
          collection: 'divisions',
        }),
        subdivision: fields.relationship({
          label: 'Subdivisión',
          collection: 'subdivisions',
        }),
      },
    }),

    /* ────────────────────────────────
       PRESS  (Framer: "Press")
       ──────────────────────────────── */
    press: collection({
      label: 'Press',
      slugField: 'title',
      path: 'content/press/*',
      schema: {
        title: fields.slug({ name: { label: 'Título del artículo' } }),
        orderId: fields.integer({
          label: 'ID (para ordenar)',
          defaultValue: 0,
        }),
        cover: imageField('Cover / imagen principal', 'press'),
        autor: fields.text({ label: 'Autor / Fuente', description: 'Ej: El Heraldo' }),
        link: fields.url({ label: 'Link del artículo' }),
        brand: fields.relationship({
          label: 'Marca relacionada (opcional)',
          collection: 'brands',
        }),
        venue: fields.relationship({
          label: 'Venue relacionado (opcional)',
          collection: 'venues',
        }),
        division: fields.relationship({
          label: 'División (opcional)',
          collection: 'divisions',
        }),
      },
    }),
  },
});
