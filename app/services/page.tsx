import { Metadata } from 'next';
import ServiceJsonLd from '@/components/ServiceJsonLd';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: '服务项目 - 开业醒狮/商务演艺/婚礼宴会专业服务',
  description: '提供全方位的舞狮演艺服务：包括高标准的商场店招开业醒狮、极具人气聚拢效应的品牌路演、以及氛围热烈的中式婚礼与企业年会舞狮执行。专业团队，透明报价。', // wait, let's keep original description text as much as possible
  alternates: { canonical: 'https://www.cqwushi.com/services' },
  openGraph: {
    title: '舞狮服务项目 - 专业演出服务 | 重庆鑫龙堂舞狮',
    description: '提供全方位的高标准舞狮演艺服务：商场店招开业醒狮、品牌路演、中式婚礼、企业年会舞狮执行。',
    url: 'https://www.cqwushi.com/services',
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      <ServiceJsonLd />
      <PageClient />
    </>
  );
}
