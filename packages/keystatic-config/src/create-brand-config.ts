import { config, collection, singleton, fields } from '@keystatic/core';
import type { BrandKeystaticConfig } from './types';
import { seoFields, socialFields } from './fields';

/**
 * Creates a Keystatic config for a brand, merging base singletons
 * (site settings, SEO) with brand-specific collections and singletons.
 */
export function createBrandConfig(brandConfig: BrandKeystaticConfig) {
  const { brandName, collections = {}, singletons = {} } = brandConfig;

  return config({
    storage: {
      kind: 'local',
    },
    ui: {
      brand: {
        name: `${brandName} CMS`,
      },
    },
    singletons: {
      // Base singleton: site-wide settings
      siteSettings: singleton({
        label: 'Configuración del Sitio',
        path: 'content/site-settings',
        schema: {
          siteName: fields.text({ label: 'Nombre del sitio' }),
          tagline: fields.text({ label: 'Tagline / Eslogan' }),
          logo: fields.image({
            label: 'Logo',
            directory: 'public/images',
            publicPath: '/images',
          }),
          logoDark: fields.image({
            label: 'Logo (versión oscura)',
            directory: 'public/images',
            publicPath: '/images',
          }),
          favicon: fields.image({
            label: 'Favicon',
            directory: 'public',
            publicPath: '/',
          }),
          ...seoFields,
          social: fields.object(socialFields, { label: 'Redes Sociales' }),
        },
      }),
      // Spread brand-specific singletons
      ...singletons,
    },
    collections: {
      // Spread brand-specific collections
      ...collections,
    },
  });
}
