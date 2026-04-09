import type { MetadataRoute } from 'next';

const BASE_URL = 'https://tacosatarantados.mx';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = ['', '/sucursales', '/menu-mex', '/merch', '/contacto', '/facturacion'];
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
