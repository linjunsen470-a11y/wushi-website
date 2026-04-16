import { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: '舞狮服务项目 - 重庆开业庆典 / 商务演艺 / 婚礼宴会专业服务',
  description: '提供全方位的舞狮演艺服务：包括高标准的商场店招开业醒狮、极具人气聚拢效应的品牌路演、以及氛围热烈的中式婚礼与企业年会舞狮执行。专业团队，透明报价。',
  keywords: '重庆开业舞狮, 醒狮表演, 商务演艺, 婚礼舞狮, 重庆活动策划',
  alternates: { canonical: 'https://www.cqwushi.com/services' },
};

export default function Page() {
  return <PageClient />;
}
