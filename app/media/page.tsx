import { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: '视频展示 - 演出实景/高桩竞技/环节演示',
  description: '通过视频直观了解我们的演出效果。包含银行开业红毯、宴会舞台近景、品牌高桩节目及沉浸式夜场舞狮视频实录。',
  keywords: '舞狮视频, 重庆舞狮表演视频, 高桩舞狮实录, 醒狮视频素材, 鑫龙堂视频',
  alternates: { canonical: 'https://www.cqwushi.com/media' },
  openGraph: {
    title: '舞狮视频展示 - 演出实景 | 重庆鑫龙堂舞狮',
    description: '通过真实演出实录视频，直观感受我们的现场效果与技术功底。',
    url: 'https://www.cqwushi.com/media',
    type: 'website',
  },
};

export default function Page() {
  return <PageClient />;
}
