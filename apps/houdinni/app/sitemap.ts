import type { MetadataRoute } from 'next';

const BASE_URL = 'https://houdinni.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = ['', '/events', '/calendar'];
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
