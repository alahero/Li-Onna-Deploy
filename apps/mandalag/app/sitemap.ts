import type { MetadataRoute } from 'next';

const BASE_URL = 'https://mandalagroup.mx';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes: Array<{ path: string; priority: number; changeFrequency: 'monthly' | 'yearly' }> = [
    { path: '', priority: 1, changeFrequency: 'monthly' },
    { path: '/corporate-events', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/private-events', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/legal', priority: 0.3, changeFrequency: 'yearly' },
  ];
  return routes.map((r) => ({
    url: `${BASE_URL}${r.path || '/'}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
