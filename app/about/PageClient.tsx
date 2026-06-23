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
                耍狮子的
                <br />
                <span className="text-on-surface">也接商演</span>
              </h1>
              <p className="page-lead text-on-surface-variant font-medium leading-relaxed">
                老手艺是老手艺，商场开业那套流程是另一回事。
                <br className="hidden md:block" />
                我们两边都干——村里庙会能演，万象城开业也能演，不耽误人家剪彩。
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                ['场子熟', '万象城、融创茂、尼依格罗都进过。物业咋批、几点能进场，不用你们现学。'],
                ['家伙不差', '狮头狮皮该换就换，排练没少练。上台不能丢人。'],
                ['图没造假', '网站这些照片视频，全是自己人拍的，没从网上扒。'],
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
              <p className="font-headline text-2xl font-black tracking-tight leading-tight">该敲鼓的时候敲，该安静的时候安静</p>
            </div>
          </motion.div>
        </div>
      </header>

      <section className="bg-surface-container-low py-32">
        <div className="shell">
          <motion.div {...subtleFadeProps} className="max-w-3xl mb-20">
            <span className="section-eyebrow text-secondary">干过啥</span>
            <h2 className="page-section-title !text-on-surface mt-4 tracking-tight">
              商场里、酒店里、广场上
              <br className="hidden sm:block" />
              都演过
            </h2>
            <p className="body-copy text-lg text-on-surface-variant leading-relaxed font-medium mt-6">
              街上路演得把人拢住，开业得体面，喜宴得红火。场合不一样，排法不一样。反正头天对好，当天别乱。
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

      <section className="bg-surface py-32">
        <div className="shell">
          <motion.div {...subtleFadeProps} className="max-w-3xl mb-16">
            <span className="section-eyebrow text-secondary">管理团队</span>
            <h2 className="page-section-title !text-on-surface mt-4 tracking-tight">
              从艺术指导到现场执行
              <br />
              从排练到现场，有人盯
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
              狮头狮皮
              <br className="hidden sm:block" />
              上台前瞅一眼
            </h2>
            <p className="page-lead text-xl !text-white/70 font-medium">
              远远看热闹就行，摄像机怼上来又是另一码事。毛别炸、皮别脏、衣服别皱，拍出来才过得去。
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
