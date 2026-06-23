import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/llms.txt'],
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://www.cqwushi.com/sitemap.xml',
  };
}
