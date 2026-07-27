'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ContactCTA from '@/components/ContactCTA';
import { aboutGallery, teamHighlights, teamMembers } from '@/lib/site-data';

const subtleFadeProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <header className="relative overflow-hidden bg-surface py-16 md:py-24">
        <div className="shell grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <span className="section-eyebrow text-secondary">
              关于我们 —— 鑫龙堂
            </span>
            <div className="mt-8 space-y-8">
              <h1 className="page-hero-title text-primary !leading-[1.1] tracking-tight">
                传承醒狮民俗
                <br />
                <span className="text-on-surface">专注商业演艺</span>
              </h1>
              <p className="page-lead text-on-surface-variant font-medium leading-relaxed">
                融汇传统醒狮艺术与现代商业活动规范，我们致力于提供兼具民俗文化内涵与专业执行标准的演出服务。
                <br className="hidden md:block" />
                无论是地方传统庙会，还是地标级商业中心的开业庆典，我们均能精准把握活动节奏，确保演出圆满成功。
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                ['经验丰富', '曾多次进入万象城、IFS、来福士、尼依格罗酒店等大型商业体及高档酒店执行，熟知进场报批与安全配合流程。'],
                ['装备精良', '定期更新狮头与服饰道具，保障上镜及现场视觉质感。'],
                ['真实案例', '官方网站展示的全部图片和视频均来自团队真实演出现场，无任何虚假素材。'],
              ].map(([title, text], idx) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="rounded-[1.75rem] border border-outline-variant/30 bg-white/50 px-6 py-6 shadow-sm backdrop-blur-sm"
                >
                  <p className="font-headline text-lg font-black tracking-tight text-on-surface">{title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-on-surface-variant font-medium">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_32px_80px_rgba(35,24,15,0.15)]">
              <Image src={aboutGallery.story} alt={aboutGallery.storyAlt || '重庆舞狮团队表演实景'} fill placeholder="blur" sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute inset-x-8 bottom-8 rounded-[1.5rem] bg-black/60 px-8 py-6 text-white backdrop-blur-md border border-white/10">
              <p className="font-headline text-2xl font-black tracking-tight leading-tight">紧密配合流程，现场调度有序，动静皆合规范</p>
            </div>
          </motion.div>
        </div>
      </header>

      <section className="bg-surface-container-low section-space">
        <div className="shell">
          <motion.div {...subtleFadeProps} className="max-w-3xl mb-20">
            <span className="section-eyebrow text-secondary">演艺足迹</span>
            <h2 className="page-section-title !text-on-surface mt-4 tracking-tight">
              地标商场、星级酒店、企业年会
              <br className="hidden sm:block" />
              全场景演出经验
            </h2>
            <p className="body-copy text-lg text-on-surface-variant leading-relaxed font-medium mt-6">
              针对不同场合（如商场路演的聚客互动、开业庆典的庄重体面、商务晚宴的喜庆祥和），量身定制表演编排。前期对接清晰，确保现场执行无纰漏。
            </p>
          </motion.div>
          <div className="grid gap-10 md:grid-cols-3">
            {teamHighlights.map((item, index) => (
              <motion.article
                key={item.title}
                {...subtleFadeProps}
                transition={{ ...subtleFadeProps.transition, delay: index * 0.15 }}
                className={`hover-lift overflow-hidden rounded-[2rem] bg-white premium-shadow ${index === 1 ? 'md:translate-y-12' : ''}`}
              >
                <div className="relative aspect-[4/5]">
                  <Image src={item.image} alt={item.altText || item.title} fill placeholder="blur" sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-10">
                  <p className="text-[11px] font-black tracking-[0.25em] text-secondary uppercase italic">0{index + 1}</p>
                  <h3 className="mt-4 font-headline text-3xl font-black tracking-tight text-on-surface">{item.title}</h3>
                  <p className="mt-5 text-base leading-relaxed text-on-surface-variant font-medium">{item.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface section-space">
        <div className="shell">
          <motion.div {...subtleFadeProps} className="max-w-3xl mb-16">
            <span className="section-eyebrow text-secondary">管理团队</span>
            <h2 className="page-section-title !text-on-surface mt-4 tracking-tight">
              从艺术指导到现场调度
              <br />
              专业团队，全程专人专责
            </h2>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-3">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                {...subtleFadeProps}
                transition={{ ...subtleFadeProps.transition, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-[2rem] bg-surface-container shadow-sm border border-outline-variant/10"
              >
                <div className="relative aspect-[1/1] overflow-hidden">
                  <Image src={member.image} alt={member.altText || member.name} fill placeholder="blur" sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-10">
                  <div className="flex items-baseline gap-4">
                    <h3 className="font-headline text-2xl font-black text-on-surface tracking-tight">{member.name}</h3>
                    <p className="text-sm font-bold text-secondary">{member.role}</p>
                  </div>
                  <p className="mt-6 text-on-surface-variant font-medium leading-relaxed text-base italic">
                    &quot;{member.bio}&quot;
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a1714] section-space text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_60%_40%,rgba(163,0,17,0.12),transparent_50%)]" />
        <div className="shell relative z-10 grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <motion.div {...subtleFadeProps} className="max-w-2xl space-y-8">
            <span className="section-eyebrow text-secondary-fixed">品质把控</span>
            <h2 className="page-section-title !text-white !leading-tight tracking-tight">
              精益求精
              <br className="hidden sm:block" />
              细节彰显专业质感
            </h2>
            <p className="page-lead text-xl !text-white/70 font-medium">
              无论是现场观众还是专业摄影摄像捕捉，我们均要求狮皮洁净、配饰齐整、队员精神饱满，以高标准展示团队形象。
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <motion.div {...subtleFadeProps} className="relative min-h-[300px] overflow-hidden rounded-[2rem] md:min-h-[500px] premium-shadow border border-white/5">
              <Image src={aboutGallery.materialA} alt={aboutGallery.materialAAlt || '优质手工醒狮狮头近景'} fill placeholder="blur" sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover" />
            </motion.div>
            <div className="grid gap-8">
              <motion.div {...subtleFadeProps} transition={{ delay: 0.2 }} className="relative min-h-[240px] overflow-hidden rounded-[2rem] premium-shadow border border-white/5">
                <Image src={aboutGallery.materialB} alt={aboutGallery.materialBAlt || '高难度高桩特技表演抓拍'} fill placeholder="blur" sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover" />
              </motion.div>
              <div className="grid gap-6 grid-cols-3">
                {[
                  { img: aboutGallery.portraitA, alt: aboutGallery.portraitAAlt },
                  { img: aboutGallery.portraitB, alt: aboutGallery.portraitBAlt },
                  { img: aboutGallery.portraitC, alt: aboutGallery.portraitCAlt },
                ].map(({ img, alt }, i) => (
                  <motion.div key={i} {...subtleFadeProps} transition={{ delay: 0.3 + i * 0.1 }} className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-white/5">
                    <Image src={img} alt={alt || `重庆舞狮现场素材图${i + 1}`} fill placeholder="blur" sizes="15vw" className="object-cover" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactCTA />
      <Footer />
    </main>
  );
}
