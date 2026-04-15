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
      <header className="relative overflow-hidden bg-surface py-24 md:py-32">
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
                传承舞狮民俗
                <br />
                <span className="text-on-surface">更懂商业演艺</span>
              </h1>
              <p className="page-lead text-on-surface-variant font-medium leading-relaxed">
                鑫龙堂致力于将传统的狮舞、龙舞技艺，转化为更贴合现代商业需求的演艺方案。
                <br className="hidden md:block" />
                我们提供的不仅是热闹，更是让您的活动现场更加出众的专业保障。
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                ['实战团队', '熟悉各大商场与酒店流程，确保每一个环节都衔接自如。'],
                ['效果保证', '从装备质感到动作力道，全方位提升现场的视觉观感。'],
                ['真实案例', '坚持使用自家团队的真实落地视频与照片，所见即所得。'],
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
              <p className="font-headline text-2xl font-black tracking-tight leading-tight">让每一次重要环节，都成为现场的焦点</p>
            </div>
          </motion.div>
        </div>
      </header>

      <section className="bg-surface-container-low py-32">
        <div className="shell">
          <motion.div {...subtleFadeProps} className="max-w-3xl mb-20">
            <span className="section-eyebrow text-secondary">团队硬实力</span>
            <h2 className="page-section-title !text-on-surface mt-4 tracking-tight">
              丰富的实战经验，
              <br className="hidden sm:block" />
              是您值得信任的理由
            </h2>
            <p className="body-copy text-lg text-on-surface-variant leading-relaxed font-medium mt-6">
              无论是品牌路演还是大型庆典，我们都以专业的素养和稳定的表现，
              确保演出每一个阶段都能符合预期效果。
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
                  <p className="text-[11px] font-black tracking-[0.25em] text-secondary uppercase italic">Core Strength 0{index + 1}</p>
                  <h3 className="mt-4 font-headline text-3xl font-black tracking-tight text-on-surface">{item.title}</h3>
                  <p className="mt-5 text-base leading-relaxed text-on-surface-variant font-medium">{item.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-32">
        <div className="shell">
          <motion.div {...subtleFadeProps} className="max-w-3xl mb-16">
            <span className="section-eyebrow text-secondary">管理团队</span>
            <h2 className="page-section-title !text-on-surface mt-4 tracking-tight">
              从艺术指导到现场执行，
              <br />
              确保每一个项目稳妥交付
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

      <section className="bg-[#1a1714] py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_60%_40%,rgba(163,0,17,0.12),transparent_50%)]" />
        <div className="shell relative z-10 grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <motion.div {...subtleFadeProps} className="max-w-2xl space-y-8">
            <span className="section-eyebrow text-secondary-fixed">品质把控</span>
            <h2 className="page-section-title !text-white !leading-tight tracking-tight">
              更精良的装备，
              <br className="hidden sm:block" />
              才能成就非凡的现场品质
            </h2>
            <p className="page-lead text-xl !text-white/70 font-medium">
              我们相信，卓越的演出不仅在于现场的热闹。从狮头扎制到每一件演出服的整洁程度，我们都坚持最高标准，确保在镜头下同样出彩。
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
