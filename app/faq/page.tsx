import { Metadata } from 'next';
import FaqJsonLd from '@/components/FaqJsonLd';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: '常见问题与预订指南 - 专业解答',
  description: '解决您关于舞狮报价、预订周期、场地要求及执行细节的常见问题。基础双狮约 1500 元起，高桩、群狮和远郊执行按场地与流程另行报价。',
  alternates: { canonical: 'https://www.cqwushi.com/faq' },
  openGraph: {
    title: '常见问题与预订指南 - 鑫龙堂专业解答 | 重庆鑫龙堂舞狮',
    description: '关于舞狮报价、预订周期、场地要求、发票及执行细节的常见问题解答。',
    url: 'https://www.cqwushi.com/faq',
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      <FaqJsonLd />
      <PageClient />
    </>
  );
}
