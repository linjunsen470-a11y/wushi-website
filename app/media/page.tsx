import { sharedOpenGraph } from '@/lib/seo';
import { Metadata } from 'next';
import VideoJsonLd from '@/components/VideoJsonLd';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: '视频展示 - 雪地舞狮/鼓乐/开业/婚礼实录',
  description: '通过真实现场视频了解我们的演出效果，包含雪地舞狮、鼓乐演奏、门店开业与婚礼舞狮实录。',
  alternates: { canonical: 'https://www.cqwushi.com/media' },
  openGraph: {
    ...sharedOpenGraph,
    title: '舞狮视频展示 - 演出实景 | 重庆鑫龙堂舞狮',
    description: '通过真实演出实录视频，直观感受我们的现场效果与技术功底。',
    url: 'https://www.cqwushi.com/media',
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      <VideoJsonLd />
      <PageClient />
    </>
  );
}
