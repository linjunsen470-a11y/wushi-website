import { GuidePost } from '@/lib/guide';

interface Props {
  post: GuidePost;
}

export default function ArticleJsonLd({ post }: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': post.title,
    'description': post.excerpt,
    'image': `https://www.cqwushi.com${post.coverImage}`,
    'datePublished': post.date,
    'dateModified': post.updated || post.date,
    'author': {
      '@type': 'Organization',
      'name': '重庆鑫龙堂舞狮',
      'url': 'https://www.cqwushi.com',
    },
    'publisher': {
      '@type': 'Organization',
      'name': '重庆鑫龙堂舞狮',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.cqwushi.com/logo-red.png',
      },
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://www.cqwushi.com/guide/${post.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
