import { Metadata } from 'next';
import { getAllGuidePosts } from '@/lib/guide';
import GuideClient from './GuideClient';

export const metadata: Metadata = {
  title: '舞狮预订指南 - 重庆开业庆典 / 商务演艺执行参考',
  description: '整理重庆本地舞狮报价、点睛流程、采青习俗及团队选择要点，为开业庆典、商务演艺和宴会活动提供预订参考。',
  keywords: '重庆舞狮报价, 开业舞狮流程, 醒狮点睛, 舞狮队怎么选, 舞狮注意事项',
  alternates: { canonical: 'https://www.cqwushi.com/guide' },
};

export default function GuidePage() {
  const posts = getAllGuidePosts();
  
  return (
    <GuideClient initialPosts={posts} />
  );
}
