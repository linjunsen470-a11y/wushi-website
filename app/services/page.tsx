import { sharedOpenGraph } from '@/lib/seo';
import { Metadata } from 'next';
import ServiceJsonLd from '@/components/ServiceJsonLd';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: '服务项目 - 开业醒狮/商务演艺/婚礼宴会专业服务',
  description: '提供商场及门店开业醒狮、品牌路演、中式婚礼与企业年会舞狮服务。根据场地、流程和活动规模安排演出，并提供明细报价。',
  alternates: { canonical: 'https://www.cqwushi.com/services' },
  openGraph: {
    ...sharedOpenGraph,
    title: '舞狮服务项目 - 专业演出服务 | 重庆鑫龙堂舞狮',
    description: '提供商场及门店开业醒狮、品牌路演、中式婚礼与企业年会舞狮服务，并根据场地和流程安排演出。',
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
