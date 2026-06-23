import { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: '关于我们 - 10年专业舞狮演出团队',
  description: '重庆鑫龙堂是谁、队员做过哪些场。在重庆干了十来年，商场酒店户外都演过，照片视频都是实拍。',
  alternates: { canonical: 'https://www.cqwushi.com/about' },
  openGraph: {
    title: '关于我们 - 10年专业舞狮演出团队 | 重庆鑫龙堂舞狮',
    description: '了解重庆鑫龙堂舞狮的品牌故事、创始团队与资深演职人员。我们拥有10年以上的重庆及西南地区演艺经验。',
    url: 'https://www.cqwushi.com/about',
    type: 'website',
  },
};

export default function Page() {
  return <PageClient />;
}
