import { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: '场景方案建议 - 定制演出流程与配置建议',
  description: '根据商场庆典、品牌快闪、大型年会及中式喜宴等不同场景，提供针对性的舞狮配置方案。涵盖人员规模建议、环节衔接策略及交付标准。',
  keywords: '舞狮方案, 场景演艺, 重庆商场活动, 活动流程设计, 鑫龙堂方案',
  alternates: { canonical: 'https://www.cqwushi.com/solutions' },
  openGraph: {
    title: '舞狮场景方案建议 - 定制演出流程 | 重庆鑫龙堂舞狮',
    description: '商场庆典、品牌路演、大型年会、中式婚礼等定制舞狮演艺方案与配置建议。',
    url: 'https://www.cqwushi.com/solutions',
    type: 'website',
  },
};

export default function Page() {
  return <PageClient />;
}
