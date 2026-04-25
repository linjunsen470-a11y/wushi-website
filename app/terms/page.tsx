import { Metadata } from 'next';
import TermsClient from './TermsClient';

export const metadata: Metadata = {
  title: '服务协议 - 重庆鑫龙堂舞狮',
  description: '重庆鑫龙堂舞狮官方服务协议，涵盖预订流程、服务标准、现场配合及相关免责声明。',
  alternates: { canonical: 'https://www.cqwushi.com/terms' },
};

export default function Page() {
  return <TermsClient />;
}
