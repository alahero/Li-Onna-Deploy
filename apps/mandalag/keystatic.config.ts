import { config, collection, singleton, fields } from '@keystatic/core';
import { seoFields, socialFields, imageField } from '@mg/keystatic-config';

export default config({
  storage: { kind: 'local' },
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
          description: 'Ruta al archivo .mp4 dentro de /public (ej: /assets/videos/hero.mp4)',
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
          description: 'Opcional. Se muestra arriba del grid de venues.',
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
          description: 'Ruta dentro de /public (ej: /assets/images/newsletter.png)',
          defaultValue: '/assets/images/wDCJ6PQEkdOh0itp6dwputtehl4_f0569aea.png',
        }),
        emailPlaceholder: fields.text({ label: 'Placeholder del email', defaultValue: 'your@email.com' }),
        buttonText: fields.text({ label: 'Texto del botón', defaultValue: 'Submit' }),
        submitUrl: fields.url({
          label: 'URL de envío (form action)',
          description: 'URL del endpoint o formulario de Mailchimp / Brevo / Resend. Si se deja vacío, el formulario no envía.',
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
          description: 'Opcional. Se muestra arriba del grid de artículos.',
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
        address: fields.text({
          label: 'Dirección',
          multiline: true,
        }),
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
       STATIC PAGES (rich text)
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
       DIVISIONS (Daylife, Nightlife, etc.)
       ──────────────────────────────── */
    divisions: collection({
      label: 'Divisiones',
      slugField: 'title',
      path: 'content/divisions/*',
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ label: 'Descripción' }),
        video: fields.text({
          label: 'Video (ruta)',
          description: 'Ruta al .mp4 dentro de /public',
        }),
        order: fields.integer({ label: 'Orden', defaultValue: 0 }),
      },
    }),

    /* ────────────────────────────────
       VENUES
       ──────────────────────────────── */
    venues: collection({
      label: 'Venues',
      slugField: 'name',
      path: 'content/venues/*',
      schema: {
        name: fields.slug({ name: { label: 'Nombre' } }),
        subtitle: fields.text({
          label: 'Subtítulo / Ubicación',
          description: 'Opcional. Ej: "Guadalajara, México"',
        }),
        shortDescription: fields.text({
          label: 'Descripción corta',
          multiline: true,
          description: 'Opcional. Se usa para tooltips/cards.',
        }),
        category: fields.select({
          label: 'Categoría',
          options: [
            { label: 'Nightlife', value: 'Nightlife' },
            { label: 'Gastronomic', value: 'Gastronomic' },
            { label: 'Daylife', value: 'Daylife' },
            { label: 'Events', value: 'Events' },
          ],
          defaultValue: 'Nightlife',
        }),
        image: imageField('Imagen principal', 'venues'),
        logoImage: imageField('Logo del venue (opcional)', 'venues/logos'),
        url: fields.text({ label: 'URL del sitio' }),
        order: fields.integer({ label: 'Orden', defaultValue: 0 }),
      },
    }),

    /* ────────────────────────────────
       PRESS
       ──────────────────────────────── */
    press: collection({
      label: 'Press',
      slugField: 'title',
      path: 'content/press/*',
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        source: fields.text({ label: 'Fuente (ej: El Heraldo)' }),
        date: fields.date({ label: 'Fecha de publicación' }),
        excerpt: fields.text({
          label: 'Resumen corto',
          multiline: true,
          description: 'Opcional. Párrafo corto para previews.',
        }),
        url: fields.url({ label: 'URL del artículo' }),
        image: imageField('Imagen', 'press'),
        order: fields.integer({ label: 'Orden', defaultValue: 0 }),
      },
    }),
  },
});
