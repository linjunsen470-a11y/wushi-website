import { mediaVideos } from '@/lib/site-data';

export default function VideoJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': '重庆鑫龙堂舞狮演出视频',
    'itemListElement': mediaVideos.map((video, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'VideoObject',
        'name': video.title,
        'description': video.description,
        'thumbnailUrl': [`https://www.cqwushi.com${video.poster.src}`],
        'embedUrl': `https://player.bilibili.com/player.html?bvid=${video.bvid}&page=1&high_quality=1&danmaku=0&autoplay=0`,
        'publisher': {
          '@type': 'Organization',
          'name': '重庆鑫龙堂舞狮',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://www.cqwushi.com/logo-red.png',
          },
        },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
    />
  );
}
