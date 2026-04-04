import { config, collection, singleton, fields } from '@keystatic/core';
import { seoFields, socialFields } from '@mg/keystatic-config';

export default config({
  storage: { kind: 'local' },
  ui: { brand: { name: 'Houdinni CMS' } },

  singletons: {
    siteSettings: singleton({
      label: 'Configuración del Sitio',
      path: 'content/site-settings',
      schema: {
        siteName: fields.text({ label: 'Nombre del sitio' }),
        tagline: fields.text({ label: 'Tagline / Eslogan' }),
        logo: fields.image({ label: 'Logo', directory: 'public/images', publicPath: '/images' }),
        logoDark: fields.image({ label: 'Logo (versión oscura)', directory: 'public/images', publicPath: '/images' }),
        favicon: fields.image({ label: 'Favicon', directory: 'public', publicPath: '/' }),
        ...seoFields,
        social: fields.object(socialFields, { label: 'Redes Sociales' }),
      },
    }),

    homepage: singleton({
      label: 'Página Principal (Hero)',
      path: 'content/homepage',
      schema: {
        heroTitle: fields.text({
          label: 'Título del Hero',
          description: 'Título principal del speakeasy (ej. "Donde la Magia Ocurre")',
        }),
        heroSubtitle: fields.text({
          label: 'Subtítulo del Hero',
          description: 'Frase misteriosa bajo el título',
          multiline: true,
        }),
        heroImage: fields.image({
          label: 'Imagen de Fondo del Hero',
          directory: 'public/images/hero',
          publicPath: '/images/hero',
        }),
        heroVideoUrl: fields.text({
          label: 'URL de Video de Fondo (opcional)',
          description: 'URL de video MP4 para el fondo del hero. Tiene prioridad sobre la imagen.',
        }),
        ctaText: fields.text({
          label: 'Texto del Botón Principal',
          description: 'Ej. "Reservar Mesa"',
        }),
        ctaLink: fields.text({
          label: 'Enlace del Botón Principal',
          description: 'URL o ancla (ej. #reservaciones)',
        }),
      },
    }),

    concept: singleton({
      label: 'El Concepto / Nuestra Historia',
      path: 'content/concept',
      schema: {
        title: fields.text({
          label: 'Título de la Sección',
          description: 'Ej. "El Secreto Detrás del Telón"',
        }),
        tagline: fields.text({
          label: 'Tagline / Frase Mágica',
          description: 'Frase corta e intrigante',
        }),
        description: fields.text({
          label: 'Historia del Concepto',
          description: 'Descripción completa del concepto del speakeasy.',
          multiline: true,
        }),
        image: fields.image({
          label: 'Imagen del Concepto',
          directory: 'public/images/concept',
          publicPath: '/images/concept',
        }),
      },
    }),

    reservations: singleton({
      label: 'Reservaciones',
      path: 'content/reservations',
      schema: {
        title: fields.text({
          label: 'Título de la Sección',
          description: 'Ej. "Solicita Tu Acceso"',
        }),
        description: fields.text({
          label: 'Descripción',
          multiline: true,
        }),
        whatsappNumber: fields.text({
          label: 'Número de WhatsApp',
          description: 'Solo el número con código de país, sin espacios (ej. 521234567890)',
        }),
        phone: fields.text({
          label: 'Teléfono de Contacto',
        }),
        email: fields.text({
          label: 'Correo Electrónico',
        }),
        bookingUrl: fields.text({
          label: 'URL de Reservación Externa (opcional)',
          description: 'Si usas plataforma como OpenTable, TheFork, etc.',
        }),
      },
    }),
  },

  collections: {
    shows: collection({
      label: 'Shows / Espectáculos',
      slugField: 'title',
      path: 'content/shows/*',
      schema: {
        title: fields.slug({
          name: {
            label: 'Nombre del Show',
          },
          slug: {
            label: 'Slug (URL)',
          },
        }),
        date: fields.date({
          label: 'Fecha del Show',
        }),
        time: fields.text({
          label: 'Hora',
          description: 'Ej. "9:00 PM"',
        }),
        description: fields.text({
          label: 'Descripción del Show',
          multiline: true,
        }),
        image: fields.image({
          label: 'Imagen del Show',
          directory: 'public/images/shows',
          publicPath: '/images/shows',
        }),
        performer: fields.text({
          label: 'Artista / Mago / Performer',
          description: 'Nombre del artista principal',
        }),
        ticketUrl: fields.text({
          label: 'URL de Boletos',
          description: 'Enlace para adquirir boletos (opcional)',
        }),
        price: fields.text({
          label: 'Precio',
          description: 'Precio de entrada (ej. "$450 MXN por persona")',
        }),
        featured: fields.checkbox({
          label: 'Show Destacado',
          description: 'Mostrar este show de forma prominente en la página',
          defaultValue: false,
        }),
      },
    }),

    menuCategories: collection({
      label: 'Categorías del Menú',
      slugField: 'name',
      path: 'content/menu-categories/*',
      schema: {
        name: fields.slug({
          name: {
            label: 'Nombre de la Categoría',
          },
          slug: {
            label: 'Slug',
          },
        }),
        order: fields.integer({
          label: 'Orden de Aparición',
          description: 'Número menor aparece primero',
          defaultValue: 99,
        }),
      },
    }),

    menuItems: collection({
      label: 'Platillos del Menú',
      slugField: 'name',
      path: 'content/menu-items/*',
      schema: {
        name: fields.slug({
          name: {
            label: 'Nombre del Platillo',
          },
          slug: {
            label: 'Slug',
          },
        }),
        description: fields.text({
          label: 'Descripción',
          multiline: true,
        }),
        price: fields.text({
          label: 'Precio',
          description: 'Ej. "$180 MXN"',
        }),
        category: fields.relationship({
          label: 'Categoría',
          collection: 'menuCategories',
        }),
        image: fields.image({
          label: 'Imagen del Platillo',
          directory: 'public/images/menu',
          publicPath: '/images/menu',
        }),
      },
    }),

    cocktails: collection({
      label: 'Cócteles',
      slugField: 'name',
      path: 'content/cocktails/*',
      schema: {
        name: fields.slug({
          name: {
            label: 'Nombre del Cóctel',
          },
          slug: {
            label: 'Slug',
          },
        }),
        description: fields.text({
          label: 'Descripción',
          description: 'Historia o inspiración detrás del cóctel',
          multiline: true,
        }),
        ingredients: fields.text({
          label: 'Ingredientes',
          description: 'Lista de ingredientes separados por coma',
          multiline: true,
        }),
        image: fields.image({
          label: 'Imagen del Cóctel',
          directory: 'public/images/cocktails',
          publicPath: '/images/cocktails',
        }),
        featured: fields.checkbox({
          label: 'Cóctel de la Casa',
          description: 'Destacar este cóctel en la sección principal',
          defaultValue: false,
        }),
        price: fields.text({
          label: 'Precio',
          description: 'Ej. "$220 MXN"',
        }),
      },
    }),

    gallery: collection({
      label: 'Galería',
      slugField: 'title',
      path: 'content/gallery/*',
      schema: {
        title: fields.slug({
          name: {
            label: 'Título / Descripción',
          },
        }),
        image: fields.image({
          label: 'Imagen',
          directory: 'public/images/gallery',
          publicPath: '/images/gallery',
        }),
        category: fields.select({
          label: 'Categoría',
          options: [
            { label: 'Venue / Local', value: 'venue' },
            { label: 'Shows y Espectáculos', value: 'shows' },
            { label: 'Cócteles', value: 'cocktails' },
          ],
          defaultValue: 'venue',
        }),
        order: fields.integer({
          label: 'Orden de Aparición',
          description: 'Número menor aparece primero',
          defaultValue: 99,
        }),
      },
    }),
  },
});
