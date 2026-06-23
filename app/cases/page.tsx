import { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: '成功案例 - 万象城/IFS/海尔等专业演出实录',
  description: '查看重庆鑫龙堂舞狮的真实落地项目。涵盖大型商场开业、企业年度盛典、品牌发布会及高规格私人宴会。所见即所得，坚持实拍素材。',
  alternates: { canonical: 'https://www.cqwushi.com/cases' },
  openGraph: {
    title: '舞狮成功案例实录 - 演出展示 | 重庆鑫龙堂舞狮',
    description: '真实落地案例：重庆万象城、IFS、海尔年会等高规格演出现场实录。',
    url: 'https://www.cqwushi.com/cases',
    type: 'website',
  },
};

export default function Page() {
  return <PageClient />;
}
