import { collection, singleton, fields } from '@keystatic/core';
import { createBrandConfig, seoFields, imageField } from '@mg/keystatic-config';

export default createBrandConfig({
  brandName: 'Mandala Group',
  brandSlug: 'mandalag',
  singletons: {
    homepage: singleton({
      label: 'Página Principal',
      path: 'content/homepage',
      schema: {
        heroTitle: fields.text({ label: 'Hero - Título' }),
        heroSubtitle: fields.text({ label: 'Hero - Subtítulo' }),
        heroImage: imageField('Hero - Imagen de Fondo', 'hero'),
        heroCta1Text: fields.text({ label: 'Hero - Botón 1 Texto' }),
        heroCta1Link: fields.text({ label: 'Hero - Botón 1 Link' }),
        heroCta2Text: fields.text({ label: 'Hero - Botón 2 Texto' }),
        heroCta2Link: fields.text({ label: 'Hero - Botón 2 Link' }),
      },
    }),
    newsletter: singleton({
      label: 'Newsletter',
      path: 'content/newsletter',
      schema: {
        title: fields.text({ label: 'Título' }),
        description: fields.text({ label: 'Descripción' }),
        buttonText: fields.text({ label: 'Texto del botón' }),
      },
    }),
  },
  collections: {
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
      },
    }),
  },
});
