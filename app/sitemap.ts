import { MetadataRoute } from 'next';
import { getAllGuidePosts } from '@/lib/guide';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.cqwushi.com';
  
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/solutions',
    '/cases',
    '/media',
    '/guide',
    '/contact',
    '/terms',
    '/privacy',
  ];

  const guidePosts = getAllGuidePosts();
  const dynamicRoutes = guidePosts.map(post => `/guide/${post.slug}`);

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'daily' : 'weekly') as 'daily' | 'weekly' | 'always' | 'hourly' | 'monthly' | 'yearly' | 'never',
    priority: route === '' ? 1 : 0.8,
  }));
}
