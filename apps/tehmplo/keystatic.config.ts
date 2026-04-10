import { config, collection, singleton, fields } from '@keystatic/core';
import { seoFields, socialFields } from '@mg/keystatic-config';

export default config({
  storage: process.env.NODE_ENV === 'development'
    ? { kind: 'local' }
    : { kind: 'github', repo: 'MandalaGroup/new-mg-mkt-cms' },
  ui: { brand: { name: 'Tehmplo CMS' } },

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
      label: 'Hero de la Página Principal',
      path: 'content/homepage',
      schema: {
        heroTitle: fields.text({
          label: 'Título del Hero',
          description: 'Texto principal que aparece sobre la imagen/video del hero',
          defaultValue: 'ELEVATE YOUR TULUM EXPERIENCE',
        }),
        heroSubtitle: fields.text({
          label: 'Subtítulo del Hero',
          description: 'Línea secundaria debajo del título',
          multiline: true,
          defaultValue: 'Premium open-air jungle nightclub in the heart of Tulum',
        }),
        heroBackgroundImage: fields.image({
          label: 'Imagen de Fondo del Hero',
          description: 'Imagen de respaldo para la sección hero',
          directory: 'public/images/hero',
          publicPath: '/images/hero',
        }),
        heroVideoUrl: fields.url({
          label: 'URL del Video de Fondo',
          description: 'URL del video para el fondo del hero (MP4 recomendado)',
        }),
        ctaText: fields.text({
          label: 'Texto del Botón Principal',
          defaultValue: 'Reserve Your Table',
        }),
        ctaLink: fields.url({
          label: 'Enlace del Botón Principal',
          description: 'Link del botón de call-to-action',
        }),
        ctaSecondaryText: fields.text({
          label: 'Texto del Botón Secundario',
          defaultValue: 'View Events',
        }),
      },
    }),

    vipSection: singleton({
      label: 'Sección de Mesas VIP',
      path: 'content/vip-section',
      schema: {
        title: fields.text({
          label: 'Título de la Sección',
          defaultValue: 'VIP TABLES',
        }),
        description: fields.text({
          label: 'Descripción',
          multiline: true,
          defaultValue:
            'Elevate your night with an exclusive VIP table experience. Personalized service, premium bottle selection, and the best views of the stage.',
        }),
        whatsappNumber: fields.text({
          label: 'Número de WhatsApp',
          description: 'Incluir código de país, ej. 529841234567',
          defaultValue: '529841234567',
        }),
        whatsappMessage: fields.text({
          label: 'Mensaje pre-llenado de WhatsApp',
          multiline: true,
          defaultValue: 'Hola! Me gustaría reservar una mesa VIP en Tehmplo.',
        }),
        packages: fields.array(
          fields.object({
            name: fields.text({ label: 'Nombre del Paquete' }),
            description: fields.text({ label: 'Descripción del Paquete', multiline: true }),
            minSpend: fields.text({ label: 'Consumo Mínimo', description: 'Ej. $5,000 MXN' }),
            features: fields.text({
              label: 'Características',
              description: 'Una característica por línea',
              multiline: true,
            }),
            highlighted: fields.checkbox({
              label: 'Destacar este paquete',
              defaultValue: false,
            }),
          }),
          {
            label: 'Paquetes VIP',
            itemLabel: (props) => props.fields.name.value || 'Paquete',
          }
        ),
      },
    }),

    about: singleton({
      label: 'Sección About',
      path: 'content/about',
      schema: {
        title: fields.text({
          label: 'Título de la Sección',
          defaultValue: 'THE TEHMPLO EXPERIENCE',
        }),
        description: fields.text({
          label: 'Descripción',
          multiline: true,
          defaultValue:
            'Nestled within the lush jungle of Tulum, Tehmplo is more than a nightclub — it is a sanctuary where ancient energy meets contemporary sound.',
        }),
        pillars: fields.array(
          fields.object({
            title: fields.text({ label: 'Título del Pilar' }),
            description: fields.text({ label: 'Descripción del Pilar', multiline: true }),
            icon: fields.text({
              label: 'Icono',
              description: 'Nombre del icono o emoji para este pilar',
            }),
          }),
          {
            label: 'Tres Pilares',
            itemLabel: (props) => props.fields.title.value || 'Pilar',
          }
        ),
      },
    }),

    location: singleton({
      label: 'Sección de Ubicación',
      path: 'content/location',
      schema: {
        address: fields.text({
          label: 'Dirección Completa',
          defaultValue: 'Carretera Tulum-Boca Paila Km 5.5, Tulum, Quintana Roo, Mexico',
        }),
        mapUrl: fields.url({
          label: 'URL del Mapa (Embed)',
          description: 'URL de embed de Google Maps (src del iframe)',
        }),
        mapDirectionsUrl: fields.url({
          label: 'URL de Cómo Llegar',
          description: 'Link para abrir en Google Maps',
        }),
        phone: fields.text({
          label: 'Teléfono',
          defaultValue: '+52 984 123 4567',
        }),
        email: fields.text({
          label: 'Email',
          defaultValue: 'hello@tehmplo.mx',
        }),
        travelTimes: fields.array(
          fields.object({
            from: fields.text({ label: 'Desde' }),
            duration: fields.text({ label: 'Tiempo de Viaje' }),
            method: fields.text({ label: 'Medio de Transporte', description: 'Ej. auto, taxi, caminando' }),
          }),
          {
            label: 'Tiempos de Viaje',
            itemLabel: (props) => props.fields.from.value || 'Ubicación',
          }
        ),
        openingHours: fields.text({
          label: 'Horario de Apertura',
          multiline: true,
          defaultValue: 'Thursday – Sunday\n10:00 PM – 5:00 AM',
        }),
      },
    }),
  },

  collections: {
    events: collection({
      label: 'Eventos',
      slugField: 'title',
      path: 'content/events/*',
      format: { data: 'yaml' },
      schema: {
        title: fields.slug({
          name: {
            label: 'Título del Evento',
            description: 'Nombre del evento o DJ',
          },
        }),
        date: fields.date({
          label: 'Fecha del Evento',
        }),
        time: fields.text({
          label: 'Hora de Apertura',
          defaultValue: '10:00 PM',
        }),
        description: fields.text({
          label: 'Descripción del Evento',
          multiline: true,
        }),
        image: fields.image({
          label: 'Imagen del Evento',
          directory: 'public/images/events',
          publicPath: '/images/events',
        }),
        djName: fields.text({
          label: 'Nombre del DJ / Artista',
          description: 'Artista principal del evento',
        }),
        djOrigin: fields.text({
          label: 'Origen del DJ',
          description: 'Ciudad/país de donde es el DJ, ej. Berlín, Alemania',
        }),
        genre: fields.text({
          label: 'Género Musical',
          description: 'Ej. Organic House, Afro House, Melodic Techno',
        }),
        ticketUrl: fields.url({
          label: 'URL de Boletos',
          description: 'Enlace externo de venta de boletos',
        }),
        ticketPrice: fields.text({
          label: 'Precio del Boleto',
          description: 'Ej. $500 MXN',
        }),
        featured: fields.checkbox({
          label: 'Evento Destacado',
          description: 'Mostrar prominentemente en la página principal',
          defaultValue: false,
        }),
        soldOut: fields.checkbox({
          label: 'Agotado',
          defaultValue: false,
        }),
      },
    }),
  },
});
