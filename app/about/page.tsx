import { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: '关于重庆鑫龙堂舞狮 - 专业舞狮团队 & 10年演出历程',
  description: '了解重庆鑫龙堂舞狮的品牌故事、创始团队与资深演职人员。我们拥有10年以上的重庆及西南地区演艺经验，坚持高桩竞技功底，确保每一场商务演出都稳妥交付。',
  keywords: '重庆舞狮团队, 鑫龙堂舞狮, 舞狮艺术指导, 高桩舞狮, 重庆演艺公司',
};

export default function Page() {
  return <PageClient />;
}
