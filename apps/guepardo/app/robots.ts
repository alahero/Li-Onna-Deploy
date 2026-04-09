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
    sitemap: 'https://guepardo.com.mx/sitemap.xml',
    host: 'https://guepardo.com.mx',
  };
}
