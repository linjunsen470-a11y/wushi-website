import { brand, legalInfo } from '@/lib/site-data';

export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': brand.name,
    'description': brand.tagline,
    'legalName': legalInfo.companyName,
    'identifier': legalInfo.socialCreditCode,
    'telephone': legalInfo.phone,
    'email': legalInfo.email,
    'url': 'https://www.cqwushi.com',
    'logo': 'https://www.cqwushi.com/logo-red.png',
    'image': 'https://www.cqwushi.com/logo-red.png',
    'sameAs': [
      'https://v.douyin.com/bQWHTYtaQVc/',
      'https://www.xiaohongshu.com/user/profile/623419540000000010005cb3?xhsshare=userQrCode',
    ],
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': legalInfo.address,
      'addressLocality': '重庆',
      'addressRegion': '重庆市',
      'postalCode': '400000',
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
    'priceRange': '基础双狮约¥1500起，高桩与群狮按场地和流程报价',
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
        'opens': '00:00',
        'closes': '23:59',
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
