import { brand, serviceCards } from '@/lib/site-data';

export default function ServiceJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'provider': {
      '@type': 'LocalBusiness',
      'name': brand.name,
      'image': 'https://www.cqwushi.com/logo-red.png'
    },
    'areaServed': {
      '@type': 'State',
      'name': '重庆'
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': '舞狮演艺服务',
      'itemListElement': serviceCards.map((service, index) => ({
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': service.title,
          'description': service.description
        },
        'position': index + 1
      }))
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
