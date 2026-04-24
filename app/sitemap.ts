import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.cqwushi.com';
  
  const routes = [
    '',
    '/about',
    '/services',
    '/solutions',
    '/cases',
    '/media',
    '/faq',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-04-24'),
    changeFrequency: (route === '' ? 'daily' : 'weekly') as 'daily' | 'weekly' | 'always' | 'hourly' | 'monthly' | 'yearly' | 'never',
    priority: route === '' ? 1 : 0.8,
  }));
}
