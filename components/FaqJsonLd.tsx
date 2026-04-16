import { faqItems, faqSections } from '@/lib/site-data';

export default function FaqJsonLd() {
  // Combine all FAQ items from all sections into a flat list for schema
  const allFaqs = [
    ...faqItems,
    ...faqSections.flatMap(section => section.items)
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': allFaqs.map(item => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
