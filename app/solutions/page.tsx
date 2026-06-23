import { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: '场景方案 - 开业、路演、年会、喜宴怎么排',
  description: '商场开业、品牌路演、企业年会、中式喜宴——不同场合舞狮配置不一样。对照场景看几狮、流程怎么排。',
  keywords: '舞狮方案, 场景演艺, 重庆商场活动, 活动流程设计, 鑫龙堂方案',
  alternates: { canonical: 'https://www.cqwushi.com/solutions' },
  openGraph: {
    title: '舞狮场景方案 | 重庆鑫龙堂舞狮',
    description: '商场开业、品牌路演、年会、婚礼——按场景看舞狮怎么配。',
    url: 'https://www.cqwushi.com/solutions',
    type: 'website',
  },
};

export default function Page() {
  return <PageClient />;
}
