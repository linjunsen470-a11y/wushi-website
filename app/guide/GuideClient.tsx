'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubpageHero from '@/components/SubpageHero';
import ContactCTA from '@/components/ContactCTA';
import { GuidePost } from '@/lib/guide';

const subtleFadeProps = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

interface GuideClientProps {
  initialPosts: Omit<GuidePost, 'content'>[];
}

export default function GuideClient({ initialPosts }: GuideClientProps) {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SubpageHero
        eyebrow="预订指南 —— GUIDE"
        title={
          <>
            舞狮预订指南
          </>
        }
        description={
          <>
            汇总报价、流程、点睛、采青及团队选择等核心信息。
            <br className="hidden md:block" />
            为开业庆典、商务活动和宴会演出提供清晰参考。
          </>
        }
        chips={['报价参考', '流程准备', '团队选择', '仪式细节']}
        panel={
          <div>
            <p className="font-headline text-lg font-black tracking-tight text-on-surface">
              预订前重点参考
            </p>
            <p className="mt-4 text-sm font-medium leading-relaxed text-on-surface-variant">
              内容聚焦适用场景、流程衔接、报价构成与执行风险，便于前期筛选方案。
            </p>
            <div className="mt-6 border-t border-outline-variant/25 pt-6">
              <p className="text-xs font-black tracking-[0.16em] text-secondary">当前收录</p>
              <p className="mt-2 font-headline text-3xl font-black tracking-tight text-primary">
                {initialPosts.length} 篇指南
              </p>
            </div>
          </div>
        }
      />

      <section className="bg-surface py-24 md:py-32">
        <div className="shell">
          <motion.div {...subtleFadeProps} className="mb-16 max-w-3xl">
            <span className="section-eyebrow text-secondary">实用预订指南</span>
            <h2 className="page-section-title mt-6 tracking-tight">
              预算、流程及执行，一页看懂
            </h2>
            <p className="body-copy mt-6 text-on-surface-variant">
              内容按发布时间展示，适合结合场地条件、活动类型和档期安排进行对照。
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {initialPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                {...subtleFadeProps}
                transition={{ ...subtleFadeProps.transition, delay: index * 0.08 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-outline-variant/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_24px_60px_-30px_rgba(30,27,19,0.35)]"
              >
                <Link href={`/guide/${post.slug}`} className="absolute inset-0 z-10">
                  <span className="sr-only">查看指南：{post.title}</span>
                </Link>

                <div className="relative aspect-[16/10] overflow-hidden bg-surface-container-low">
                  <Image
                    src={post.coverImage}
                    alt={post.coverAlt || post.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-7 md:p-8">
                  <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="font-headline text-[0.68rem] font-black tracking-[0.16em] text-secondary">
                      {post.category}
                    </span>
                    <time className="text-sm font-medium text-on-surface-variant/70">
                      {post.date}
                    </time>
                  </div>

                  <h3 className="font-headline text-2xl font-black leading-tight tracking-tight text-on-surface transition-colors duration-300 group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-[0.98rem] font-medium leading-relaxed text-on-surface-variant">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex items-center gap-2 pt-8 font-headline text-[0.74rem] font-black tracking-[0.14em] text-primary">
                    <span>查看指南</span>
                    <ArrowRight aria-hidden="true" size={16} strokeWidth={2.4} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
