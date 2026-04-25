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
    '/terms',
    '/privacy',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'daily' : 'weekly') as 'daily' | 'weekly' | 'always' | 'hourly' | 'monthly' | 'yearly' | 'never',
    priority: route === '' ? 1 : 0.8,
  }));
}
