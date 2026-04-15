import { brand } from '@/lib/site-data';

export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': brand.name,
    'description': brand.tagline,
    'telephone': '18983662830',
    'email': 'service@cqwushi.com',
    'url': 'https://www.cqwushi.com',
    'logo': 'https://www.cqwushi.com/logo-red.png',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '重庆市各区域服务',
      'addressLocality': '重庆市',
      'addressRegion': '重庆市',
      'addressCountry': 'CN',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 29.5630,
      'longitude': 106.5516,
    },
    'serviceArea': {
      '@type': 'GeoCircle',
      'geoMidpoint': {
        'latitude': 29.56,
        'longitude': 106.55,
      },
      'geoRadius': '100000',
    },
    'priceRange': '¥¥ (均价 2000 元)',
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        'opens': '08:00',
        'closes': '22:00',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
