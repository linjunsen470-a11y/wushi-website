import { sharedOpenGraph } from '@/lib/seo';
import { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: '联系我们 - 咨询演出方案与报价',
  description: '通过电话 18983662830 或微信联系我们。提交活动需求表单，我们将为您提供重庆及西南地区的专业舞狮演出报价单及执行建议。',
  alternates: { canonical: 'https://www.cqwushi.com/contact' },
  openGraph: {
    ...sharedOpenGraph,
    title: '联系重庆鑫龙堂舞狮 - 咨询演出报价与方案',
    description: '通过电话 18983662830 或微信联系我们，免费获取专业舞狮演出报价与方案。',
    url: 'https://www.cqwushi.com/contact',
    type: 'website',
  },
};

export default function Page() {
  return <PageClient />;
}
