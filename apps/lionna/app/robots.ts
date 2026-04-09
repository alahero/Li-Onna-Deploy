import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/keystatic/', '/api/'],
      },
    ],
    sitemap: 'https://lionna.es/sitemap.xml',
    host: 'https://lionna.es',
  };
}
