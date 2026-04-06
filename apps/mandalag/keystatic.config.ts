import { collection, singleton, fields } from '@keystatic/core';
import { createBrandConfig, seoFields, imageField } from '@mg/keystatic-config';

export default createBrandConfig({
  brandName: 'Mandala Group',
  brandSlug: 'mandalag',
  singletons: {
    homepage: singleton({
      label: 'Hero',
      path: 'content/homepage',
      schema: {
        heroLine1: fields.text({ label: 'Línea 1 (ej: WORLD CLASS)', defaultValue: 'WORLD CLASS' }),
        heroLine2: fields.text({ label: 'Línea 2 (ej: EXPERIENCES)', defaultValue: 'EXPERIENCES' }),
        heroLine3: fields.text({ label: 'Línea 3 (ej: CRAFTERS)', defaultValue: 'CRAFTERS' }),
        heroVideo: fields.text({ label: 'Video de fondo (ruta)', defaultValue: '/assets/videos/OCFeezDYPIb3z0si1RnNiifcK3o.mp4' }),
        cta1Text: fields.text({ label: 'Botón 1 - Texto', defaultValue: 'EXPLORE OUR VENUES' }),
        cta1Link: fields.text({ label: 'Botón 1 - Link', defaultValue: '#venues' }),
        cta2Text: fields.text({ label: 'Botón 2 - Texto', defaultValue: 'RESERVATIONS' }),
        cta2Link: fields.text({ label: 'Botón 2 - Link', defaultValue: '#reservations' }),
      },
    }),
    navbar: singleton({
      label: 'Navbar',
      path: 'content/navbar',
      schema: {
        logoImage: fields.text({ label: 'Logo SVG (ruta)', defaultValue: '/assets/images/mandala-logo-nav.svg' }),
        link1Text: fields.text({ label: 'Link 1 - Texto', defaultValue: 'Venues' }),
        link2Text: fields.text({ label: 'Link 2 - Texto', defaultValue: 'Corporate Events' }),
        link3Text: fields.text({ label: 'Link 3 - Texto', defaultValue: 'Private Events' }),
      },
    }),
    newsletter: singleton({
      label: 'Newsletter',
      path: 'content/newsletter',
      schema: {
        description: fields.text({ label: 'Descripción', defaultValue: "Subscribe to the ultimate insider's guide to unforgettable experiences." }),
        buttonText: fields.text({ label: 'Texto del botón', defaultValue: 'Submit' }),
        image: fields.text({ label: 'Imagen (ruta)', defaultValue: '/assets/images/wDCJ6PQEkdOh0itp6dwputtehl4_f0569aea.png' }),
      },
    }),
    footer: singleton({
      label: 'Footer',
      path: 'content/footer',
      schema: {
        logoImage: fields.text({ label: 'Logo SVG (ruta)', defaultValue: '/assets/images/mandala-logo-white.svg' }),
        link1Text: fields.text({ label: 'Link 1', defaultValue: 'PRIVACY' }),
        link1Url: fields.text({ label: 'Link 1 URL', defaultValue: '/privacy' }),
        link2Text: fields.text({ label: 'Link 2', defaultValue: 'TERMS & CONDITIONS' }),
        link2Url: fields.text({ label: 'Link 2 URL', defaultValue: '/terms' }),
        link3Text: fields.text({ label: 'Link 3', defaultValue: 'LEGAL' }),
        link3Url: fields.text({ label: 'Link 3 URL', defaultValue: '/legal' }),
      },
    }),
  },
  collections: {
    divisions: collection({
      label: 'Divisiones',
      slugField: 'title',
      path: 'content/divisions/*',
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ label: 'Descripción' }),
        video: fields.text({ label: 'Video (ruta)' }),
        order: fields.integer({ label: 'Orden', defaultValue: 0 }),
      },
    }),
    venues: collection({
      label: 'Venues',
      slugField: 'name',
      path: 'content/venues/*',
      schema: {
        name: fields.slug({ name: { label: 'Nombre' } }),
        category: fields.select({
          label: 'Categoría',
          options: [
            { label: 'Nightlife', value: 'Nightlife' },
            { label: 'Gastronomic', value: 'Gastronomic' },
            { label: 'Daylife', value: 'Daylife' },
            { label: 'Events', value: 'Events' },
          ],
          defaultValue: 'Nightlife',
        }),
        image: imageField('Imagen', 'venues'),
        url: fields.text({ label: 'URL del sitio' }),
        order: fields.integer({ label: 'Orden', defaultValue: 0 }),
      },
    }),
    press: collection({
      label: 'Press',
      slugField: 'title',
      path: 'content/press/*',
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        source: fields.text({ label: 'Fuente' }),
        url: fields.url({ label: 'URL del artículo' }),
        image: imageField('Imagen', 'press'),
        order: fields.integer({ label: 'Orden', defaultValue: 0 }),
      },
    }),
  },
});
