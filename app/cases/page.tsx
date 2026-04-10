import { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: '舞狮成功案例实录 - 重庆万象城 / 海尔 / IFS 专业演出展示',
  description: '查看重庆鑫龙堂舞狮的真实落地项目。涵盖大型商场开业、企业年度盛典、品牌发布会及高规格私人宴会。所见即所得，坚持实拍素材。',
  keywords: '舞狮案例, 重庆万象城舞狮, 海尔年会演艺, 重庆IFS开业, 演出现场实录',
};

export default function Page() {
  return <PageClient />;
}
