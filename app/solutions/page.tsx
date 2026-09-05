import { sharedOpenGraph } from '@/lib/seo';
import { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: '场景方案 - 开业、路演、年会、喜宴怎么排',
  description: '商场开业、街上路演、年会、喜宴——场合不一样，几只狮、走哪些环节也不一样。对照着看。',
  alternates: { canonical: 'https://www.cqwushi.com/solutions' },
  openGraph: {
    ...sharedOpenGraph,
    title: '舞狮场景方案 | 重庆鑫龙堂舞狮',
    description: '商场开业、品牌路演、年会、婚礼——按场景看舞狮怎么配。',
    url: 'https://www.cqwushi.com/solutions',
    type: 'website',
  },
};

export default function Page() {
  return <PageClient />;
}
