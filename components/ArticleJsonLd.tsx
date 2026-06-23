import { GuidePost } from '@/lib/guide';

interface Props {
  post: GuidePost;
}

function extractFaqs(content: string) {
  const faqs: Array<{ question: string; answer: string }> = [];
  const pattern = /\*\*Q[:：]([\s\S]*?)\*\*\s*\r?\nA[:：]([\s\S]*?)(?=\r?\n\r?\n|\r?\n\*\*Q[:：]|$)/g;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(content)) !== null) {
    const question = match[1]?.trim();
    const answer = match[2]?.trim();

    if (question && answer) {
      faqs.push({ question, answer });
    }
  }

  return faqs;
}

export default function ArticleJsonLd({ post }: Props) {
  const articleSchema = {
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

  const faqs = extractFaqs(post.content);
  const schemas = faqs.length > 0
    ? [
        articleSchema,
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': faqs.map((faq) => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': faq.answer,
            },
          })),
        },
      ]
    : [articleSchema];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}
