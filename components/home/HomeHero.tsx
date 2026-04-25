'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { brand, homeShowcase } from '@/lib/site-data';

const heroPillars = ['商场开业', '品牌路演', '企业晚宴', '重庆本地执行'];

export default function HomeHero() {
  return (
    <header className="relative min-h-[90vh] overflow-hidden bg-[#140d0b] text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src={homeShowcase.hero}
          alt={homeShowcase.heroAlt || "舞狮开业演出现场"}
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,13,11,0.12)_0%,rgba(20,13,11,0.24)_30%,rgba(20,13,11,0.64)_100%),linear-gradient(90deg,rgba(20,13,11,0.6)_0%,rgba(20,13,11,0.1)_42%,rgba(20,13,11,0.5)_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:clamp(44px,6vw,72px)_clamp(44px,6vw,72px)]" />
      </div>

      <div className="shell relative flex min-h-[90vh] items-center pt-28 pb-14 md:pt-32 md:pb-20">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative z-10 max-w-[62rem]"
          >
            <span className="mb-6 inline-flex items-center border-l-2 border-[#caa66a] pl-3 text-[0.78rem] font-semibold tracking-[0.18em] text-[#efe3cf] drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
              重庆本地商业活动舞狮执行团队
            </span>
            <h1 className="page-hero-title text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
              西南地区专业舞狮，
              <br />
              为您的商业活动赋能
            </h1>
            <p className="page-lead mt-10 text-white/94 md:text-[1.12rem] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {brand.name} 深耕重庆本地市场，专注承接商场开业、品牌路演、企业晚宴等高规格商业活动。以高标准的场控、精准的卡点与热烈的现场氛围，确保每一场演出完美交付。
            </p>
            <div className="mt-11 flex flex-wrap gap-3">
              {heroPillars.map((item) => (
                <span
                  key={item}
                  className="hero-chip border-white/10 bg-black/16 py-2 text-white/74 backdrop-blur-md"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="button-primary group relative overflow-hidden px-8 shadow-[0_18px_52px_rgba(163,0,17,0.32)] transition-all hover:-translate-y-1 hover:bg-primary-container"
              >
                <span className="relative z-10">免费获取演出方案</span>
                <div className="absolute inset-0 -translate-x-full bg-white/18 transition-transform duration-500 group-hover:translate-x-0" />
              </Link>
              <Link
                href="/cases"
                className="button-secondary border-white/16 bg-white/6 px-8 text-white backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white hover:text-on-surface"
              >
                看真实落地案例
              </Link>
            </div>
            <p className="mt-6 text-xs font-black tracking-[0.2em] text-[#caa66a] uppercase drop-shadow-sm">
              📅 节假日与周末请提前预约档期，确保优质服务交付
            </p>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
