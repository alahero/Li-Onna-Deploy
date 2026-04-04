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
        siteName: fields.text({ label: 'Nombre del sitio', defaultValue: 'Houdinni' }),
        tagline: fields.text({ label: 'Tagline / Eslogan', defaultValue: 'Houdinni Madrid' }),
        logo: fields.image({ label: 'Logo (blanco)', directory: 'public/images', publicPath: '/images' }),
        logoDark: fields.image({ label: 'Logo (oscuro)', directory: 'public/images', publicPath: '/images' }),
        favicon: fields.image({ label: 'Favicon', directory: 'public', publicPath: '/' }),
        ...seoFields,
        social: fields.object(socialFields, { label: 'Redes Sociales' }),
      },
    }),

    contact: singleton({
      label: 'Información de Contacto',
      path: 'content/contact',
      schema: {
        address: fields.text({
          label: 'Dirección',
          description: 'Ej. C. de Serrano 41, Local A y B, Salamanca 28001',
          defaultValue: 'C. de Serrano 41, Local A y B, Salamanca 28001',
        }),
        city: fields.text({
          label: 'Ciudad',
          defaultValue: 'Madrid, España',
        }),
        phoneVenue: fields.text({
          label: 'Teléfono del local',
          defaultValue: '+34 910 46 39 11',
        }),
        phoneWhatsapp: fields.text({
          label: 'Teléfono WhatsApp',
          defaultValue: '+34 671 80 77 47',
        }),
        email: fields.text({
          label: 'Email',
          defaultValue: 'hola@houdinni.com',
        }),
        mapsUrl: fields.url({
          label: 'Enlace Google Maps',
        }),
      },
    }),

    marqueeText: singleton({
      label: 'Texto del Marquee / Ticker',
      path: 'content/marquee',
      schema: {
        mainText: fields.text({
          label: 'Texto principal del ticker',
          multiline: true,
          defaultValue:
            "HOUDINNI OR NOWHERE // MUSIC IS THE ANSWER // AUTHENTICITY, COMMUNITY, AND IRREVERENCE. CRAFTING A COMMUNITY OF LOUD MUSIC-LOVERS FREAKS. // NOW YOU SEE ME, NOW YOU DON'T. // LA MÚSICA VA PRIMERO // HOUDINNI",
        }),
        eventText: fields.text({
          label: 'Texto del ticker de eventos',
          multiline: true,
          defaultValue: 'BETICAL 23 OCT // BENJA 06 NOV // OKIO - ASIAN STREET MARKET',
        }),
      },
    }),
  },

  collections: {
    events: collection({
      label: 'Eventos / Artistas',
      slugField: 'name',
      path: 'content/events/*',
      schema: {
        name: fields.slug({
          name: { label: 'Nombre del evento / artista' },
          slug: { label: 'Slug (URL)' },
        }),
        date: fields.date({ label: 'Fecha del evento' }),
        time: fields.text({ label: 'Hora', description: 'Ej. 23:00' }),
        description: fields.text({ label: 'Descripción', multiline: true }),
        image: fields.image({
          label: 'Imagen del evento',
          directory: 'public/images/events',
          publicPath: '/images/events',
        }),
        ticketUrl: fields.url({ label: 'URL de entradas (tickets.houdinni.com)' }),
        featured: fields.checkbox({ label: 'Destacado', defaultValue: false }),
        tag: fields.text({ label: 'Tag / Etiqueta', defaultValue: 'PRÓXIMAMENTE' }),
      },
    }),

    gallery: collection({
      label: 'Galería de fotos',
      slugField: 'title',
      path: 'content/gallery/*',
      schema: {
        title: fields.slug({ name: { label: 'Título / Descripción' } }),
        image: fields.image({
          label: 'Imagen',
          directory: 'public/images/gallery',
          publicPath: '/images/gallery',
        }),
        category: fields.select({
          label: 'Categoría',
          options: [
            { label: 'Venue', value: 'venue' },
            { label: 'Eventos', value: 'events' },
            { label: 'DJ / Artistas', value: 'dj' },
          ],
          defaultValue: 'venue',
        }),
        order: fields.integer({ label: 'Orden', defaultValue: 99 }),
      },
    }),
  },
});
