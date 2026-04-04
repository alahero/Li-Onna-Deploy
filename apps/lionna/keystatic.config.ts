import { config, collection, singleton, fields } from '@keystatic/core';
import { seoFields, socialFields, imageField, richTextField } from '@mg/keystatic-config';

export default config({
  storage: { kind: 'local' },
  ui: { brand: { name: 'LI-ONNA CMS' } },

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
      label: 'Página Principal',
      path: 'content/homepage',
      schema: {
        heroTitle: fields.text({
          label: 'Título del Hero',
          description: 'Título principal (ej. "Hola, Madrid")',
          defaultValue: 'Hola, Madrid',
        }),
        heroSubtitle: fields.text({
          label: 'Subtítulo del Hero',
          description: 'Texto secundario — puede incluir texto japonés (リオンナ)',
          defaultValue: 'リオンナ — Cocina japonesa con alma latina',
          multiline: true,
        }),
        heroImage: imageField('Imagen de Fondo del Hero', 'hero'),
        brandStatement: richTextField('Declaración de Marca'),
      },
    }),

    giftCards: singleton({
      label: 'Gift Cards',
      path: 'content/gift-cards',
      schema: {
        title: fields.text({
          label: 'Título',
          defaultValue: 'Regala una Experiencia',
        }),
        description: fields.text({
          label: 'Descripción',
          multiline: true,
          defaultValue: 'El regalo perfecto para los amantes de la cocina japonesa. Válido en todos nuestros servicios.',
        }),
        amounts: fields.array(
          fields.number({ label: 'Importe (€)' }),
          {
            label: 'Importes disponibles',
            itemLabel: (props) => `€${props.value ?? ''}`,
          }
        ),
        purchaseUrl: fields.url({
          label: 'URL de compra',
          description: 'Enlace al portal de compra de gift cards',
        }),
      },
    }),

    reservations: singleton({
      label: 'Reservaciones',
      path: 'content/reservations',
      schema: {
        title: fields.text({
          label: 'Título',
          defaultValue: 'Reserva tu Mesa',
        }),
        description: fields.text({
          label: 'Descripción',
          multiline: true,
          defaultValue: 'Vive la experiencia LI-ONNA. Reserva con antelación para asegurar tu mesa en el corazón de Salamanca.',
        }),
        bookingUrl: fields.url({
          label: 'URL de reserva (CoverManager)',
          description: 'Enlace al widget de CoverManager para reservas online',
        }),
        phone: fields.text({
          label: 'Teléfono',
          description: 'Número de teléfono para reservas (ej. +34 91 000 0000)',
        }),
        whatsapp: fields.text({
          label: 'WhatsApp',
          description: 'Número o enlace de WhatsApp para reservas',
        }),
        email: fields.text({
          label: 'Email de reservas',
        }),
      },
    }),

    contact: singleton({
      label: 'Contacto',
      path: 'content/contact',
      schema: {
        address: fields.text({
          label: 'Dirección',
          defaultValue: 'C. de Recoletos, 1, Barrio Salamanca, 28001 Madrid',
          multiline: true,
        }),
        phone: fields.text({
          label: 'Teléfono',
        }),
        whatsapp: fields.text({
          label: 'WhatsApp',
        }),
        email: fields.text({
          label: 'Email',
        }),
        hours: richTextField('Horarios de apertura'),
        mapUrl: fields.url({
          label: 'URL de Google Maps (embed)',
          description: 'URL del iframe de Google Maps para incrustar en la página',
        }),
      },
    }),
  },

  collections: {
    signatureDishes: collection({
      label: 'Platos Firma (Imprescindibles)',
      slugField: 'name',
      path: 'content/signature-dishes/*',
      schema: {
        name: fields.slug({
          name: { label: 'Nombre del plato' },
          slug: { label: 'Slug' },
        }),
        description: fields.text({
          label: 'Descripción',
          multiline: true,
        }),
        image: imageField('Imagen del plato', 'signature-dishes'),
        category: fields.select({
          label: 'Categoría',
          options: [
            { label: 'Entrantes Fríos', value: 'cold-starters' },
            { label: 'Entrantes Calientes', value: 'hot-starters' },
            { label: 'Arroces y Ensaladas', value: 'rice-salads' },
            { label: 'Pescados y Mariscos', value: 'seafood' },
            { label: 'Cortes Premium', value: 'premium-cuts' },
            { label: 'Sashimi y Nigiri', value: 'sashimi-nigiri' },
            { label: 'Rolls', value: 'rolls' },
            { label: 'Postres', value: 'desserts' },
          ],
          defaultValue: 'cold-starters',
        }),
        featured: fields.checkbox({
          label: 'Destacado en homepage',
          defaultValue: false,
        }),
        order: fields.integer({
          label: 'Orden de aparición',
          description: 'Número menor = aparece primero',
          defaultValue: 99,
        }),
      },
    }),

    menuCategories: collection({
      label: 'Categorías del Menú',
      slugField: 'name',
      path: 'content/menu-categories/*',
      schema: {
        name: fields.slug({
          name: { label: 'Nombre de la categoría' },
          slug: { label: 'Slug' },
        }),
        description: fields.text({
          label: 'Descripción',
          multiline: true,
        }),
        order: fields.integer({
          label: 'Orden de aparición',
          defaultValue: 0,
        }),
      },
    }),

    menuItems: collection({
      label: 'Platos del Menú',
      slugField: 'name',
      path: 'content/menu-items/*',
      schema: {
        name: fields.slug({
          name: { label: 'Nombre del plato' },
          slug: { label: 'Slug' },
        }),
        description: fields.text({
          label: 'Descripción',
          multiline: true,
        }),
        price: fields.text({
          label: 'Precio',
          description: 'Precio del plato (ej. "24€" o "Precio bajo consulta")',
        }),
        category: fields.relationship({
          label: 'Categoría del Menú',
          collection: 'menuCategories',
        }),
        allergens: fields.text({
          label: 'Alérgenos',
          description: 'Lista de alérgenos separados por coma (ej. "gluten, crustáceos, soja")',
          multiline: false,
        }),
      },
    }),

    events: collection({
      label: 'Eventos',
      slugField: 'title',
      path: 'content/events/*',
      schema: {
        title: fields.slug({
          name: { label: 'Título del Evento' },
          slug: { label: 'Slug' },
        }),
        date: fields.date({
          label: 'Fecha del Evento',
        }),
        description: fields.text({
          label: 'Descripción',
          multiline: true,
        }),
        image: imageField('Imagen del Evento', 'events'),
        recurring: fields.checkbox({
          label: 'Evento recurrente',
          description: 'Marcar si este evento se repite periódicamente',
          defaultValue: false,
        }),
        ticketUrl: fields.url({
          label: 'URL de entradas',
          description: 'Enlace para comprar entradas (opcional)',
        }),
      },
    }),
  },
});
