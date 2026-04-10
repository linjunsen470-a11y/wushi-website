'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { brand } from '@/lib/site-data';

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-surface-container-low py-24 md:py-32">
      {/* Decorative Background Element */}
      <div className="watermark absolute -right-20 -bottom-20 opacity-[0.03] select-none pointer-events-none">
        鑫龙堂
      </div>
      
      <div className="shell relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="section-eyebrow text-secondary">即刻开启专业合作</span>
            <h2 className="mt-8 font-headline text-4xl font-black leading-tight tracking-tight text-on-surface md:text-5xl lg:text-6xl">
              让您的活动现场，
              <br />
              不仅热闹，更显专业见地
            </h2>
            <p className="body-copy mx-auto mt-10 text-lg leading-relaxed text-on-surface-variant md:text-xl">
              无论是开业庆典、商演路演还是私人宴会，{brand.name} 团队都将以行业标杆级的标准，
              为您打造极具视觉冲击力与仪式感的精彩瞬间。
            </p>
            
            <div className="mt-14 flex flex-wrap justify-center gap-6">
              <Link
                href="/contact"
                className="button-primary group relative overflow-hidden px-10 py-5 text-lg shadow-[0_20px_50px_rgba(163,0,17,0.24)] transition-all hover:-translate-y-1 hover:bg-primary-container"
              >
                <span className="relative z-10">立即咨询报价</span>
                <div className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-0" />
              </Link>
              <Link
                href="/cases"
                className="button-secondary border-primary/20 bg-white/60 px-10 py-5 text-lg text-on-surface backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white"
              >
                查看更多真实案例
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
