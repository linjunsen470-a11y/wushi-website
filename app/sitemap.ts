import { MetadataRoute } from 'next';
import { getAllGuidePosts } from '@/lib/guide';
import { landingPagesData } from '@/lib/landing-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.cqwushi.com';
  // Use current date for static and landing pages to reflect updates at build time
  const buildDate = new Date();

  const staticPages = [
    { route: '', priority: 1.0, changeFrequency: 'daily' as const },
    { route: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/solutions', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/cases', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { route: '/media', priority: 0.7, changeFrequency: 'weekly' as const },
    { route: '/guide', priority: 0.7, changeFrequency: 'daily' as const },
    { route: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
    { route: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { route: '/terms', priority: 0.3, changeFrequency: 'monthly' as const },
    { route: '/privacy', priority: 0.3, changeFrequency: 'monthly' as const },
  ];

  const staticEntries = staticPages.map(page => ({
    url: `${baseUrl}${page.route}`,
    lastModified: buildDate,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const guidePosts = getAllGuidePosts();
  const dynamicEntries = guidePosts.map(post => {
    const postDate = post.updated ? new Date(post.updated) : new Date(post.date);
    return {
      url: `${baseUrl}/guide/${post.slug}`,
      lastModified: isNaN(postDate.getTime()) ? buildDate : postDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    };
  });

  const landingEntries = Object.keys(landingPagesData).map(slug => ({
    url: `${baseUrl}/landing/${slug}`,
    lastModified: buildDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...dynamicEntries, ...landingEntries];
}
