import { brand, legalInfo, serviceCards } from '@/lib/site-data';

export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.cqwushi.com/#business',
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
    'areaServed': [
      { '@type': 'City', 'name': '重庆市' },
      { '@type': 'AdministrativeArea', 'name': '中国西南地区' },
    ],
    'priceRange': '¥¥',
    'currenciesAccepted': 'CNY',
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': legalInfo.phone,
      'contactType': 'sales',
      'areaServed': 'CN',
      'availableLanguage': ['zh-CN'],
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': '舞狮演出服务',
      'itemListElement': serviceCards.map((service) => ({
        '@type': 'Offer',
        'url': `https://www.cqwushi.com${service.href}`,
        'itemOffered': {
          '@type': 'Service',
          'name': service.title,
          'description': service.description,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
    />
  );
}
