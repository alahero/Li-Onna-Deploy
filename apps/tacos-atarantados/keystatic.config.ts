import { config, collection, singleton, fields } from '@keystatic/core';
import { seoFields, socialFields, imageField, richTextField } from '@mg/keystatic-config';

export default config({
  storage: { kind: 'local' },
  ui: { brand: { name: 'Tacos Atarantados CMS' } },

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
      label: 'Página de Inicio',
      path: 'content/homepage',
      schema: {
        heroTitle: fields.text({
          label: 'Título del Hero',
          defaultValue: 'Los Mejores Tacos de la Ciudad',
        }),
        heroSubtitle: fields.text({
          label: 'Subtítulo del Hero',
          multiline: true,
          defaultValue: 'Sabor auténtico, ingredientes frescos, calidad insuperable.',
        }),
        heroImage: imageField('Imagen del Hero', 'hero'),
        heroCtaText: fields.text({
          label: 'Texto del botón CTA',
          defaultValue: 'Ver Menú',
        }),
        heroCtaLink: fields.text({
          label: 'Enlace del CTA',
          defaultValue: '#menu',
        }),
      },
    }),

    about: singleton({
      label: 'Nosotros',
      path: 'content/about',
      schema: {
        title: fields.text({
          label: 'Título',
          defaultValue: 'Nuestra Historia',
        }),
        description: richTextField('Descripción'),
        image: imageField('Imagen de Nosotros', 'about'),
      },
    }),

    orderSection: singleton({
      label: 'Sección de Pedidos',
      path: 'content/order-section',
      schema: {
        title: fields.text({
          label: 'Título',
          defaultValue: 'Pide a Domicilio',
        }),
        description: fields.text({
          label: 'Descripción',
          multiline: true,
          defaultValue: 'Recibe tus tacos favoritos sin salir de casa. ¡Entrega rápida garantizada!',
        }),
        deliveryUrl: fields.url({
          label: 'URL entrega propia',
        }),
        uberEatsUrl: fields.url({
          label: 'URL Uber Eats',
        }),
        rappiUrl: fields.url({
          label: 'URL Rappi',
        }),
        didiFoodUrl: fields.url({
          label: 'URL DiDi Food',
        }),
      },
    }),
  },

  collections: {
    menuCategories: collection({
      label: 'Categorías del Menú',
      slugField: 'name',
      path: 'content/menu-categories/*',
      schema: {
        name: fields.slug({
          name: {
            label: 'Nombre de la categoría',
          },
        }),
        description: fields.text({
          label: 'Descripción',
          multiline: true,
        }),
        order: fields.number({
          label: 'Orden de aparición',
          defaultValue: 0,
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
            label: 'Nombre del platillo',
          },
        }),
        description: fields.text({
          label: 'Descripción',
          multiline: true,
        }),
        price: fields.number({
          label: 'Precio (MXN)',
          defaultValue: 0,
        }),
        image: imageField('Imagen del platillo', 'menu'),
        category: fields.relationship({
          label: 'Categoría',
          collection: 'menuCategories',
        }),
        spicyLevel: fields.integer({
          label: 'Nivel de picante (1-5)',
          validation: { isRequired: true, min: 1, max: 5 },
        }),
        vegetarian: fields.checkbox({
          label: 'Opción vegetariana',
          defaultValue: false,
        }),
        featured: fields.checkbox({
          label: 'Destacado en homepage',
          defaultValue: false,
        }),
      },
    }),

    locations: collection({
      label: 'Sucursales',
      slugField: 'name',
      path: 'content/locations/*',
      schema: {
        name: fields.slug({
          name: {
            label: 'Nombre de la sucursal',
          },
        }),
        address: fields.text({
          label: 'Dirección completa',
          multiline: true,
        }),
        phone: fields.text({ label: 'Teléfono' }),
        whatsapp: fields.text({ label: 'WhatsApp' }),
        mapUrl: fields.url({ label: 'URL de Google Maps' }),
        hours: fields.text({
          label: 'Horario',
          multiline: true,
        }),
        image: imageField('Foto de la sucursal', 'locations'),
      },
    }),
  },
});
