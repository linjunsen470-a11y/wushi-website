import { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: '关于我们 - 10年专业舞狮演出团队',
  description: '了解重庆鑫龙堂舞狮的品牌故事、创始团队与资深演职人员。我们拥有10年以上的重庆及西南地区演艺经验，坚持高桩竞技功底，确保每一场商务演出都稳妥交付。',
  keywords: '重庆舞狮团队, 鑫龙堂舞狮, 舞狮艺术指导, 高桩舞狮, 重庆演艺公司',
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
