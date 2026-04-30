import type { Metadata } from 'next';
import { Epilogue, Manrope, Noto_Sans_SC } from 'next/font/google';
import Script from 'next/script';
import FloatingContact from '@/components/FloatingContact';
import JsonLd from '@/components/JsonLd';
import './globals.css';

const epilogue = Epilogue({
  subsets: ['latin'],
  variable: '--font-headline',
  weight: ['700', '800', '900'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body-latin',
  weight: ['400', '500', '600', '700'],
});

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  variable: '--font-chinese',
  weight: ['400', '500', '700', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cqwushi.com'),
  title: '重庆鑫龙堂舞狮 | 专业舞狮演出标杆团队_开业庆典_商演活动_婚礼宴会',
  description:
    '重庆鑫龙堂舞狮是面向重庆及西南地区的专业舞狮演出服务商。提供开业庆典、商场活动、婚礼宴会、品牌发布等各类高标准舞狮演艺，以真实现场与卓越执行力为活动增色。',
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
        alt: '重庆鑫龙堂舞狮 - 重庆专业演出服务商',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '重庆鑫龙堂舞狮 | 专业舞狮演出服务商',
    description: '重庆及西南地区专业舞狮演艺，专注开业庆典、商演、宴会，稳定交付，品质过硬。',
    images: ['https://www.cqwushi.com/og-image.webp'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={`${epilogue.variable} ${manrope.variable} ${notoSansSC.variable}`} data-scroll-behavior="smooth">
      <head>
        <JsonLd />
      </head>
      <body
        className="bg-[#fff8ef] text-[#1e1b13] font-body selection:bg-[#b22222] selection:text-white overflow-x-hidden"
        suppressHydrationWarning
      >
        <Script id="baidu-tongji" strategy="beforeInteractive">
          {`
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?5993a407a0f1e813d26b91081adc46c8";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
          `}
        </Script>
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
