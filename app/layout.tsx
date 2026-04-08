import type { Metadata } from 'next';
import { Epilogue, Manrope } from 'next/font/google';
import './globals.css';

const epilogue = Epilogue({
  subsets: ['latin'],
  variable: '--font-headline',
  weight: ['700', '800', '900'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: '舞狮堂 WUSHI | 开业庆典、商演活动、婚礼宴会舞狮服务',
  description:
    '舞狮堂 WUSHI 面向中国大陆用户提供开业庆典、商场商演、婚礼宴会、节庆活动等舞狮演出服务，并展示真实案例、视频内容和预订指南。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={`${epilogue.variable} ${manrope.variable}`}>
      <body
        className="bg-[#fff8ef] text-[#1e1b13] font-body selection:bg-[#b22222] selection:text-white overflow-x-hidden"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
