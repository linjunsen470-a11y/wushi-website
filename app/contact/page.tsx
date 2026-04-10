import { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: '联系重庆鑫龙堂舞狮 - 获取实时报价与方案建议',
  description: '通过电话 18983662830 或微信联系我们。提交活动需求表单，我们将为您提供重庆及西南地区的专业舞狮演出报价单及执行建议。',
  keywords: '联系舞狮队, 重庆舞狮咨询, 舞狮演出电话, 鑫龙堂联系方式, 舞狮预订',
};

export default function Page() {
  return <PageClient />;
}
