import { config, singleton, fields } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },
  ui: { brand: { name: 'Guepardo CMS' } },

  singletons: {
    siteSettings: singleton({
      label: 'Configuración del Sitio',
      path: 'content/site-settings',
      schema: {
        // Hero
        heroBackgroundImage: fields.image({
          label: 'Imagen de Fondo del Hero',
          description: 'Imagen principal de fondo del hero (1920×1080)',
          directory: 'public/images',
          publicPath: '/images',
        }),
        heroLogoImage: fields.image({
          label: 'Logo del Hero (crema)',
          description: 'Logo GUEPARDO en color crema centrado en el hero (229×229)',
          directory: 'public/images',
          publicPath: '/images',
        }),
        sunburstImage: fields.image({
          label: 'Imagen Sunburst / Sol Decorativo',
          description: 'Imagen decorativa del sol/sunburst con animación de rotación',
          directory: 'public/images',
          publicPath: '/images',
        }),

        // Reservations
        reservationUrl: fields.text({
          label: 'URL del Widget de Reservaciones (CoverManager)',
          description: 'URL del iframe de CoverManager para reservaciones',
        }),
        reservationsBgImage: fields.image({
          label: 'Imagen de Fondo — Sección Reservaciones',
          description: 'Imagen de fondo de la sección de reservaciones (1920×1080)',
          directory: 'public/images',
          publicPath: '/images',
        }),
        guepardoBannerImage: fields.image({
          label: 'Banner Circular GUEPARDO',
          description: 'Banner circular con mix-blend-mode: hard-light (653×275)',
          directory: 'public/images',
          publicPath: '/images',
        }),

        // Footer
        address: fields.text({
          label: 'Dirección',
          description: 'Dirección completa del restaurante',
        }),
        whatsappUrl: fields.text({
          label: 'Enlace de WhatsApp',
          description: 'URL completa de WhatsApp (ej. https://wa.me/523320559502)',
        }),
        instagramUrl: fields.text({
          label: 'Enlace de Instagram',
          description: 'URL de la página de Instagram',
        }),
        googleMapsUrl: fields.text({
          label: 'Enlace de Google Maps',
          description: 'URL de Google Maps para la ubicación',
        }),
        mandalaGroupUrl: fields.text({
          label: 'Enlace Mandala Group',
          description: 'URL del sitio web de Mandala Group',
        }),
        mandalaGroupLogo: fields.image({
          label: 'Logo de Mandala Group',
          description: 'Logo de Mandala Group para el footer (442×84)',
          directory: 'public/images',
          publicPath: '/images',
        }),
        copyright: fields.text({
          label: 'Texto de Copyright',
          description: 'Texto de copyright en el footer',
        }),
      },
    }),
  },
});
