import { Metadata } from 'next';
import PrivacyClient from './PrivacyClient';

export const metadata: Metadata = {
  title: '隐私政策 - 重庆鑫龙堂舞狮',
  description: '重庆鑫龙堂舞狮官方隐私政策，详细说明我们如何收集、使用及保护您的个人沟通信息。',
  alternates: { canonical: 'https://www.cqwushi.com/privacy' },
};

export default function Page() {
  return <PrivacyClient />;
}
