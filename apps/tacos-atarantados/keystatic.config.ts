import { config, collection, singleton, fields } from '@keystatic/core';

export default config({
  storage: process.env.NODE_ENV === 'development'
    ? { kind: 'local' }
    : { kind: 'cloud' },
  cloud: { project: 'mandala-group/new-mg-mkt-cms' },
  ui: { brand: { name: 'Tacos Atarantados CMS' } },

  singletons: {
    siteSettings: singleton({
      label: 'Configuración del Sitio',
      path: 'content/site-settings',
      schema: {
        siteName: fields.text({ label: 'Nombre del sitio', defaultValue: 'Tacos Atarantados' }),
        tagline: fields.text({ label: 'Tagline / Eslogan', defaultValue: 'Tacos norteños, bien servidos.' }),
        favicon: fields.image({ label: 'Favicon', directory: 'public/images', publicPath: '/images' }),
        ogImage: fields.image({ label: 'OG Image', directory: 'public/images', publicPath: '/images' }),
        facebookUrl: fields.url({ label: 'Facebook URL', defaultValue: 'https://www.facebook.com/TacosAtarantados/?locale=es_LA' }),
        instagramUrl: fields.url({ label: 'Instagram URL', defaultValue: 'https://www.instagram.com/tacosatarantados/?hl=es' }),
        tiktokUrl: fields.url({ label: 'TikTok URL', defaultValue: 'https://www.tiktok.com/@tacosatarantados?lang=es' }),
        twitterUrl: fields.url({ label: 'X/Twitter URL', defaultValue: 'https://x.com/atarantados' }),
      },
    }),

    homepage: singleton({
      label: 'Página de Inicio',
      path: 'content/homepage',
      schema: {
        heroImage: fields.image({ label: 'Imagen del Hero', directory: 'public/images', publicPath: '/images' }),
        aboutText: fields.text({
          label: 'Texto ¿Quiénes somos?',
          multiline: true,
          defaultValue: `Nacimos en Monterrey y eso se nota.
Somos tacos norteños, bien servidos y hechos con carácter.
El trompo es nuestra bandera y la mesa es nuestro punto de encuentro.`,
        }),
      },
    }),

    merch: singleton({
      label: 'Merch',
      path: 'content/merch',
      schema: {
        comingSoonText: fields.text({
          label: 'Texto Coming Soon',
          defaultValue: 'muy pronto',
        }),
      },
    }),
  },

  collections: {
    locations: collection({
      label: 'Sucursales',
      slugField: 'name',
      path: 'content/locations/*',
      schema: {
        name: fields.slug({ name: { label: 'Nombre de la sucursal' } }),
        region: fields.select({
          label: 'Región',
          options: [
            { label: 'Monterrey', value: 'monterrey' },
            { label: 'Ciudad de México', value: 'cdmx' },
            { label: 'USA', value: 'usa' },
          ],
          defaultValue: 'monterrey',
        }),
        neighborhood: fields.text({ label: 'Barrio / Centro Comercial' }),
        address: fields.text({ label: 'Dirección completa', multiline: true }),
        phone: fields.text({ label: 'Teléfono' }),
        uberEatsUrl: fields.url({ label: 'URL UberEats' }),
        active: fields.checkbox({ label: 'Activa', defaultValue: true }),
      },
    }),
  },
});
