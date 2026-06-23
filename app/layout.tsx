import type { Metadata } from 'next';
import Script from 'next/script';
import FloatingContact from '@/components/FloatingContact';
import JsonLd from '@/components/JsonLd';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cqwushi.com'),
  title: {
    default: '重庆鑫龙堂舞狮 | 西南专业舞狮演出团队_开业醒狮_商演路演_婚礼宴会',
    template: '%s | 重庆鑫龙堂舞狮',
  },
  description:
    '重庆鑫龙堂舞狮是面向重庆及西南地区的专业舞狮演出服务团队。提供开业庆典、商场活动、婚礼宴会、品牌发布等各类高标准舞狮演艺，以丰富的商业综合体执行经验与严谨的现场纪律为活动增色。',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://www.cqwushi.com',
    siteName: '重庆鑫龙堂舞狮',
    images: [
      {
        url: 'https://www.cqwushi.com/og-image.webp',
        width: 1200,
        height: 630,
        alt: '重庆鑫龙堂舞狮队',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '重庆鑫龙堂舞狮 | 专业舞狮演出服务团队',
    description: '重庆及西南地区专业舞狮演艺服务商，提供开业庆典、商演路演、婚礼宴会舞狮表演，流程严谨，交付稳定。',
    images: ['https://www.cqwushi.com/og-image.webp'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" data-scroll-behavior="smooth">
      <head>
        <JsonLd />
      </head>
      <body
        className="bg-[#fff8ef] text-[#1e1b13] font-body selection:bg-[#b22222] selection:text-white overflow-x-hidden"
        suppressHydrationWarning
      >
        <Script id="baidu-tongji-init" strategy="afterInteractive">
          {`
            window._hmt = window._hmt || [];
          `}
        </Script>
        <Script
          id="baidu-tongji"
          src="https://hm.baidu.com/hm.js?5993a407a0f1e813d26b91081adc46c8"
          strategy="afterInteractive"
        />
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
