import { config, collection, singleton, fields } from '@keystatic/core';
import { seoFields, socialFields } from '@mg/keystatic-config';

export default config({
  storage: { kind: 'local' },
  ui: { brand: { name: 'Guepardo CMS' } },

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
          description: 'Título principal que aparece en el hero',
        }),
        heroSubtitle: fields.text({
          label: 'Subtítulo del Hero',
          description: 'Texto secundario bajo el título',
          multiline: true,
        }),
        heroBackgroundImage: fields.image({
          label: 'Imagen de Fondo del Hero',
          directory: 'public/images/hero',
          publicPath: '/images/hero',
        }),
        heroCtaText: fields.text({
          label: 'Texto del Botón CTA',
          description: 'Texto del botón de llamada a la acción',
        }),
        heroCtaLink: fields.text({
          label: 'Enlace del Botón CTA',
          description: 'URL o ancla al que lleva el botón',
        }),
        heroSecondaryCtaText: fields.text({
          label: 'Texto del Botón Secundario',
          description: 'Texto del segundo botón (opcional)',
        }),
        heroSecondaryCtaLink: fields.text({
          label: 'Enlace del Botón Secundario',
        }),
      },
    }),

    vipSection: singleton({
      label: 'Sección VIP / Reservaciones',
      path: 'content/vip-section',
      schema: {
        title: fields.text({
          label: 'Título de la Sección',
        }),
        description: fields.text({
          label: 'Descripción',
          multiline: true,
        }),
        whatsappLink: fields.text({
          label: 'Enlace de WhatsApp',
          description: 'URL completo de WhatsApp para reservaciones (ej. https://wa.me/521234567890)',
        }),
        whatsappButtonText: fields.text({
          label: 'Texto del Botón WhatsApp',
        }),
        packages: fields.array(
          fields.object({
            name: fields.text({ label: 'Nombre del Paquete' }),
            description: fields.text({ label: 'Descripción', multiline: true }),
            price: fields.text({ label: 'Precio (ej. $2,500 MXN)' }),
            includes: fields.text({
              label: 'Incluye',
              description: 'Lista de lo que incluye (separado por comas)',
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

    locationSection: singleton({
      label: 'Ubicación y Contacto',
      path: 'content/location',
      schema: {
        address: fields.text({
          label: 'Dirección',
          multiline: true,
        }),
        city: fields.text({ label: 'Ciudad' }),
        mapUrl: fields.text({
          label: 'URL del Mapa (Google Maps embed)',
          description: 'URL para incrustar el mapa de Google Maps',
        }),
        mapDirectionsUrl: fields.text({
          label: 'URL Cómo llegar',
          description: 'URL de Google Maps para cómo llegar',
        }),
        phone: fields.text({ label: 'Teléfono' }),
        email: fields.text({ label: 'Correo Electrónico' }),
        hours: fields.text({
          label: 'Horarios',
          description: 'Horario de operación del antro',
          multiline: true,
        }),
        parkingInfo: fields.text({
          label: 'Información de Estacionamiento',
          multiline: true,
        }),
      },
    }),
  },

  collections: {
    events: collection({
      label: 'Eventos',
      slugField: 'title',
      path: 'content/events/*',
      schema: {
        title: fields.slug({
          name: {
            label: 'Nombre del Evento',
          },
          slug: {
            label: 'Slug',
          },
        }),
        date: fields.date({
          label: 'Fecha del Evento',
        }),
        time: fields.text({
          label: 'Hora',
          description: 'Hora de inicio (ej. 10:00 PM)',
        }),
        description: fields.text({
          label: 'Descripción',
          multiline: true,
        }),
        image: fields.image({
          label: 'Imagen del Evento',
          directory: 'public/images/events',
          publicPath: '/images/events',
        }),
        djName: fields.text({
          label: 'Nombre del DJ / Artista',
        }),
        djGenre: fields.text({
          label: 'Género Musical',
        }),
        ticketUrl: fields.text({
          label: 'URL de Boletos',
          description: 'Enlace para comprar boletos (opcional)',
        }),
        ticketPrice: fields.text({
          label: 'Precio de Entrada',
          description: 'Precio aproximado (ej. $200 MXN)',
        }),
        featured: fields.checkbox({
          label: 'Evento Destacado',
          description: 'Mostrar este evento de forma prominente',
          defaultValue: false,
        }),
        status: fields.select({
          label: 'Estado',
          options: [
            { label: 'Próximo', value: 'upcoming' },
            { label: 'Pasado', value: 'past' },
            { label: 'Cancelado', value: 'cancelled' },
          ],
          defaultValue: 'upcoming',
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
            { label: 'Ambiente', value: 'ambiente' },
            { label: 'Eventos', value: 'eventos' },
            { label: 'VIP', value: 'vip' },
            { label: 'Instalaciones', value: 'instalaciones' },
          ],
          defaultValue: 'ambiente',
        }),
        order: fields.integer({
          label: 'Orden de aparición',
          description: 'Número para ordenar las imágenes (menor = primero)',
          defaultValue: 99,
        }),
      },
    }),
  },
});
