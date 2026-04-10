import { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: '舞狮预订指南与常见问题 - 重庆鑫龙堂专业解答',
  description: '解决您关于舞狮报价、预订周期、场地要求及执行细节的所有疑问。提供 1500-3000 元/均价参考，助您快速准备咨询信息。',
  keywords: '舞狮价格, 重庆舞狮多少钱, 舞狮预订流程, 舞狮常见问题, 租狮子演出',
};

export default function Page() {
  return <PageClient />;
}
