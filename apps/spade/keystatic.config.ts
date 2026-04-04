import { config, collection, singleton, fields } from '@keystatic/core';
import { seoFields, socialFields, imageField, richTextField } from '@mg/keystatic-config';

export default config({
  storage: { kind: 'local' },
  ui: { brand: { name: 'SPADE CMS' } },

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
          description: 'Título principal — ej. "DONDE LA NOCHE TOMA FORMA"',
          defaultValue: 'DONDE LA NOCHE TOMA FORMA',
        }),
        heroSubtitle: fields.text({
          label: 'Subtítulo del Hero',
          description: 'Texto secundario bajo el título',
          multiline: true,
          defaultValue: 'Cocktails de autor, ambiente sofisticado y una noche que no olvidarás.',
        }),
        heroImage: imageField('Imagen de Fondo del Hero', 'hero'),
        ctaText: fields.text({
          label: 'Texto del Botón CTA',
          defaultValue: 'Reservar Mesa',
        }),
        ctaLink: fields.text({
          label: 'Enlace del Botón CTA',
          defaultValue: '#reservaciones',
        }),
      },
    }),

    about: singleton({
      label: 'Nosotros',
      path: 'content/about',
      schema: {
        title: fields.text({
          label: 'Título de la Sección',
          defaultValue: 'Nuestra Historia',
        }),
        description: richTextField('Historia / Descripción'),
        image: imageField('Imagen de Nosotros', 'about'),
      },
    }),

    reservations: singleton({
      label: 'Reservaciones',
      path: 'content/reservations',
      schema: {
        title: fields.text({
          label: 'Título de la Sección',
          defaultValue: 'Reserva Tu Mesa',
        }),
        description: fields.text({
          label: 'Descripción',
          multiline: true,
          defaultValue: 'Vive una noche memorable en SPADE. Reserva tu mesa y recibe atención personalizada.',
        }),
        whatsappNumber: fields.text({
          label: 'Número de WhatsApp',
          description: 'Con código de país, ej. 521234567890',
          defaultValue: '521234567890',
        }),
        phone: fields.text({
          label: 'Teléfono de Contacto',
        }),
        email: fields.text({
          label: 'Correo Electrónico',
        }),
        bookingUrl: fields.text({
          label: 'URL de Reservas Online',
          description: 'Enlace a plataforma de reservas (opcional)',
        }),
      },
    }),
  },

  collections: {
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
          multiline: true,
        }),
        ingredients: fields.text({
          label: 'Ingredientes',
          description: 'Lista de ingredientes separados por coma',
          multiline: true,
        }),
        image: imageField('Imagen del Cóctel', 'cocktails'),
        category: fields.select({
          label: 'Categoría',
          options: [
            { label: 'Signature', value: 'signature' },
            { label: 'Clásicos', value: 'classic' },
            { label: 'De Temporada', value: 'seasonal' },
          ],
          defaultValue: 'signature',
        }),
        featured: fields.checkbox({
          label: 'Destacar en Homepage',
          defaultValue: false,
        }),
        price: fields.text({
          label: 'Precio',
          description: 'Ej. $195 MXN',
        }),
      },
    }),

    menuItems: collection({
      label: 'Menú de Alimentos',
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
          description: 'Ej. $245 MXN',
        }),
        category: fields.select({
          label: 'Categoría',
          options: [
            { label: 'Entradas', value: 'starters' },
            { label: 'Platos Fuertes', value: 'mains' },
            { label: 'Postres', value: 'desserts' },
          ],
          defaultValue: 'starters',
        }),
        image: imageField('Imagen del Platillo', 'menu'),
      },
    }),

    events: collection({
      label: 'Eventos',
      slugField: 'title',
      path: 'content/events/*',
      schema: {
        title: fields.slug({
          name: {
            label: 'Título del Evento',
          },
          slug: {
            label: 'Slug',
          },
        }),
        date: fields.date({
          label: 'Fecha del Evento',
        }),
        description: fields.text({
          label: 'Descripción',
          multiline: true,
        }),
        image: imageField('Imagen del Evento', 'events'),
        djOrPerformer: fields.text({
          label: 'DJ / Artista',
          description: 'Nombre del DJ o artista invitado',
        }),
        ticketUrl: fields.text({
          label: 'URL de Boletos',
          description: 'Enlace para adquirir boletos (opcional)',
        }),
        coverCharge: fields.text({
          label: 'Cover / Entrada',
          description: 'Precio de entrada, ej. $300 MXN',
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
        image: imageField('Imagen', 'gallery'),
        category: fields.select({
          label: 'Categoría',
          options: [
            { label: 'Venue', value: 'venue' },
            { label: 'Cócteles', value: 'cocktails' },
            { label: 'Eventos', value: 'events' },
          ],
          defaultValue: 'venue',
        }),
        order: fields.integer({
          label: 'Orden de aparición',
          description: 'Número menor = aparece primero',
          defaultValue: 99,
        }),
      },
    }),
  },
});
