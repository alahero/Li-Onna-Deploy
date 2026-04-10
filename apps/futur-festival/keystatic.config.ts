import { config, collection, singleton, fields } from '@keystatic/core';
import { seoFields, socialFields, imageField, richTextField } from '@mg/keystatic-config';

export default config({
  storage: process.env.NODE_ENV === 'development'
    ? { kind: 'local' }
    : { kind: 'github', repo: 'MandalaGroup/new-mg-mkt-cms' },
  ui: { brand: { name: 'FUTUR Festival CMS' } },

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
      label: 'Homepage — Hero',
      path: 'content/homepage',
      schema: {
        heroTitle: fields.text({
          label: 'Título principal del Hero',
          defaultValue: 'FUTUR FESTIVAL',
        }),
        heroSubtitle: fields.text({
          label: 'Subtítulo del Hero',
          defaultValue: 'El futuro del sonido. México.',
          multiline: true,
        }),
        heroVideoUrl: fields.url({
          label: 'URL de video de fondo (opcional)',
          description: 'URL de un video mp4 o webm para el fondo del hero',
        }),
        heroImage: imageField('Imagen de fondo del Hero', 'hero'),
        heroCtaText: fields.text({
          label: 'Texto del CTA principal',
          defaultValue: 'Consigue tus boletos',
        }),
        ticketUrl: fields.url({
          label: 'URL de venta de boletos',
        }),
        festivalDate: fields.text({
          label: 'Fecha del festival',
          defaultValue: '14–16 NOV 2025',
        }),
        festivalLocation: fields.text({
          label: 'Ubicación del festival',
          defaultValue: 'Foro Sol, Ciudad de México',
        }),
        countdownTarget: fields.text({
          label: 'Fecha objetivo para countdown (ISO 8601)',
          description: 'Ej: 2025-11-14T20:00:00',
          defaultValue: '2025-11-14T20:00:00',
        }),
      },
    }),

    tickets: singleton({
      label: 'Boletos',
      path: 'content/tickets',
      schema: {
        title: fields.text({
          label: 'Título de la sección',
          defaultValue: 'BOLETOS',
        }),
        description: fields.text({
          label: 'Descripción',
          multiline: true,
          defaultValue: 'Elige tu experiencia. Acceso limitado.',
        }),
        tiers: fields.array(
          fields.object({
            name: fields.text({ label: 'Nombre del tier', defaultValue: 'General' }),
            price: fields.text({ label: 'Precio', defaultValue: '$1,200 MXN' }),
            description: fields.text({
              label: 'Descripción corta',
              defaultValue: 'Acceso general al festival',
            }),
            features: fields.text({
              label: 'Características (una por línea)',
              multiline: true,
            }),
            soldOut: fields.checkbox({ label: '¿Agotado?', defaultValue: false }),
            buyUrl: fields.url({ label: 'URL de compra' }),
            featured: fields.checkbox({
              label: '¿Destacado?',
              defaultValue: false,
              description: 'Muestra este tier con mayor énfasis visual',
            }),
          }),
          {
            label: 'Tiers de boletos',
            itemLabel: (props) => props.fields.name.value ?? 'Tier',
          }
        ),
      },
    }),

    venue: singleton({
      label: 'Venue',
      path: 'content/venue',
      schema: {
        name: fields.text({
          label: 'Nombre del venue',
          defaultValue: 'Foro Sol',
        }),
        address: fields.text({
          label: 'Dirección',
          defaultValue: 'Av. Viaducto Río de la Piedad s/n, Ciudad de México',
        }),
        description: fields.text({
          label: 'Descripción del venue',
          multiline: true,
        }),
        mapUrl: fields.url({
          label: 'URL de Google Maps',
        }),
        transportInfo: richTextField('Cómo llegar'),
        image: imageField('Imagen del venue', 'venue'),
      },
    }),

    sponsors: singleton({
      label: 'Patrocinadores',
      path: 'content/sponsors',
      schema: {
        title: fields.text({
          label: 'Título de la sección',
          defaultValue: 'PATROCINADORES',
        }),
        tiers: fields.array(
          fields.object({
            tierName: fields.text({
              label: 'Nombre del tier',
              defaultValue: 'Platino',
            }),
            logos: fields.array(
              fields.image({
                label: 'Logo del patrocinador',
                directory: 'public/images/sponsors',
                publicPath: '/images/sponsors',
              }),
              {
                label: 'Logos',
                itemLabel: () => 'Logo',
              }
            ),
          }),
          {
            label: 'Tiers de patrocinadores',
            itemLabel: (props) => props.fields.tierName.value ?? 'Tier',
          }
        ),
      },
    }),
  },

  collections: {
    artists: collection({
      label: 'Artistas',
      path: 'content/artists/*',
      slugField: 'name',
      schema: {
        name: fields.slug({
          name: { label: 'Nombre del artista' },
          slug: { label: 'Slug', description: 'Identificador único en URL (ej: bicep, peggy-gou)' },
        }),
        image: imageField('Foto del artista', 'artists'),
        genre: fields.text({
          label: 'Género musical',
          defaultValue: 'Electronic',
        }),
        country: fields.text({
          label: 'País',
          defaultValue: 'México',
        }),
        bio: fields.text({
          label: 'Biografía',
          multiline: true,
        }),
        socialUrl: fields.url({
          label: 'Perfil en redes (Instagram, etc.)',
        }),
        headliner: fields.checkbox({
          label: '¿Es headliner?',
          defaultValue: false,
        }),
        day: fields.select({
          label: 'Día de presentación',
          options: [
            { label: 'Viernes', value: 'friday' },
            { label: 'Sábado', value: 'saturday' },
            { label: 'Domingo', value: 'sunday' },
          ],
          defaultValue: 'friday',
        }),
        performanceTime: fields.text({
          label: 'Horario de presentación',
          description: 'Ej: 22:00 – 00:00',
        }),
        stage: fields.text({
          label: 'Escenario',
          defaultValue: 'Escenario Principal',
        }),
      },
    }),

    schedule: collection({
      label: 'Programa / Schedule',
      path: 'content/schedule/*',
      slugField: 'day',
      schema: {
        day: fields.slug({
          name: { label: 'Día', description: 'Ej: Viernes 14 Nov' },
          slug: { label: 'Slug del día' },
        }),
        stages: fields.array(
          fields.object({
            stageName: fields.text({
              label: 'Nombre del escenario',
              defaultValue: 'Escenario Principal',
            }),
            sets: fields.array(
              fields.object({
                artistName: fields.text({ label: 'Nombre del artista' }),
                startTime: fields.text({
                  label: 'Hora de inicio',
                  description: 'Ej: 22:00',
                }),
                endTime: fields.text({
                  label: 'Hora de fin',
                  description: 'Ej: 00:00',
                }),
                headliner: fields.checkbox({
                  label: '¿Headliner?',
                  defaultValue: false,
                }),
              }),
              {
                label: 'Sets',
                itemLabel: (props) => props.fields.artistName.value ?? 'Set',
              }
            ),
          }),
          {
            label: 'Escenarios',
            itemLabel: (props) => props.fields.stageName.value ?? 'Escenario',
          }
        ),
      },
    }),

    gallery: collection({
      label: 'Galería',
      path: 'content/gallery/*',
      slugField: 'title',
      schema: {
        title: fields.slug({ name: { label: 'Título / descripción de la foto' }, slug: { label: 'Slug' } }),
        image: imageField('Imagen', 'gallery'),
        edition: fields.text({
          label: 'Edición del festival',
          description: 'Ej: FUTUR 2024',
          defaultValue: 'FUTUR 2024',
        }),
        order: fields.number({
          label: 'Orden de aparición',
          defaultValue: 0,
        }),
      },
    }),

    faq: collection({
      label: 'Preguntas Frecuentes',
      path: 'content/faq/*',
      slugField: 'question',
      schema: {
        question: fields.slug({ name: { label: 'Pregunta' }, slug: { label: 'Slug' } }),
        answer: fields.text({
          label: 'Respuesta',
          multiline: true,
        }),
        order: fields.number({
          label: 'Orden de aparición',
          defaultValue: 0,
        }),
      },
    }),
  },
});
