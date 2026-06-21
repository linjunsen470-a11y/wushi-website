import { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: '联系我们 - 获取实时方案与演出报价',
  description: '通过电话 18983662830 或微信联系我们。提交活动需求表单，我们将为您提供重庆及西南地区的专业舞狮演出报价单及执行建议。',
  keywords: '联系舞狮队, 重庆舞狮咨询, 舞狮演出电话, 鑫龙堂联系方式, 舞狮预订',
  alternates: { canonical: 'https://www.cqwushi.com/contact' },
  openGraph: {
    title: '联系重庆鑫龙堂舞狮 - 获取实时报价与方案',
    description: '通过电话 18983662830 或微信联系我们，免费获取专业舞狮演出报价与方案。',
    url: 'https://www.cqwushi.com/contact',
    type: 'website',
  },
};

export default function Page() {
  return <PageClient />;
}
