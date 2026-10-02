import { mediaVideos } from '@/lib/site-data';

export default function VideoJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': '重庆鑫龙堂舞狮演出视频',
    'itemListElement': mediaVideos.map((video, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': video.title,
      'url': `https://www.bilibili.com/video/${video.bvid}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
    />
  );
}
