'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';
import LogoWall from '@/components/LogoWall';
import Testimonials from '@/components/Testimonials';
import {
  brand,
  homeShowcase,
  homepageSections,
  mixedGallery,
  serviceCards,
  stats,
} from '@/lib/site-data';

const growthPages = [
  {
    title: '看视频',
    href: '/media',
    text: '直接看以往真实演出视频，更快判断现场气氛、配合质量和整体完成度。',
  },
  {
    title: '场景方案',
    href: '/solutions',
    text: '按照开业、商演、婚礼、节庆等不同场景，找到更适合您活动的配置。',
  },
  {
    title: '预订指南',
    href: '/faq',
    text: '提前了解报价范围及预订细节，咨询更高效，决策更轻松。',
  },
];

const heroPillars = ['开业庆典', '品牌路演', '酒店宴会', '婚礼喜事'];

const transitionBase = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

const fadeInProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: transitionBase,
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <header className="relative min-h-[90vh] overflow-hidden bg-[#140d0b] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={homeShowcase.hero}
            alt="舞狮开业演出现场"
            fill
            priority
            placeholder="blur"
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,13,11,0.12)_0%,rgba(20,13,11,0.24)_30%,rgba(20,13,11,0.64)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,13,11,0.6)_0%,rgba(20,13,11,0.1)_42%,rgba(20,13,11,0.5)_100%)]" />
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
              <span className="section-eyebrow text-secondary-fixed mb-6 block drop-shadow-sm">
                重庆本地专业舞狮演出团队
              </span>
              <h1 className="page-hero-title text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
                让重要场合，
                <br />
                不仅热闹而且出众
              </h1>
              <p className="page-lead mt-10 text-white/94 md:text-[1.12rem] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                {brand.name} 专注服务商场开业、品牌路演及高规格婚宴。我们不仅提供精彩的演出，更重视现场的流程配合、仪式感以及适合拍照传播的精彩瞬间。
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
                  <span className="relative z-10">获取方案与实时报价</span>
                  <div className="absolute inset-0 -translate-x-full bg-white/18 transition-transform duration-500 group-hover:translate-x-0" />
                </Link>
                <Link
                  href="/media"
                  className="button-secondary border-white/16 bg-white/6 px-8 text-white backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white hover:text-on-surface"
                >
                  看真实演出视频
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      <LogoWall />

      <section className="bg-surface section-space-lg leading-none">
        <div className="shell">
          <motion.div {...fadeInProps} className="section-intro flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="section-eyebrow text-secondary">服务项目</span>
              <h2 className="section-title">
                我们的演出
                <br />
                能覆盖哪些活动？
              </h2>
            </div>
            <p className="body-copy text-on-surface-variant max-w-xl">
              无论是需要正式的剪彩开营、商场巡游聚拢人气，还是在酒店宴会厅呈现高标准的舞台节目，鑫龙堂均有对应的成熟执行方案。
            </p>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-3">
            {serviceCards.map((service, idx) => (
              <motion.article
                key={service.title}
                {...fadeInProps}
                transition={{ ...transitionBase, delay: idx * 0.15 }}
                className="hover-lift overflow-hidden rounded-[2.5rem] bg-surface-container-low"
              >
                <div className="relative aspect-[5/4]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-8">
                    <p className="font-headline text-xs font-black tracking-[0.3em] text-secondary-fixed">{service.subtitle}</p>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="font-headline text-3xl font-black leading-[1.08] tracking-[-0.02em] text-on-surface">{service.title}</h3>
                  <p className="body-copy mt-4 text-on-surface-variant font-medium leading-relaxed">{service.description}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {service.points.map((point: string) => (
                      <span
                        key={point}
                        className="rounded-xl border border-secondary/10 bg-surface-container px-3.5 py-1.5 text-xs font-bold text-secondary"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low section-space-lg">
        <div className="shell">
          <motion.div {...fadeInProps} className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-10 md:grid-cols-2">
              <div className="group premium-shadow relative aspect-[3/4] overflow-hidden rounded-[3rem]">
                <Image
                  src={homepageSections.media.imageA}
                  alt={homepageSections.media.title}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="flex flex-col gap-10">
                <div className="editorial-card group relative overflow-hidden !p-12">
                  <span className="section-eyebrow text-secondary">真实交付</span>
                  <h2 className="section-title !text-4xl !leading-[1.1]">{homepageSections.media.title}</h2>
                  <p className="body-copy mt-6 text-on-surface-variant font-medium leading-relaxed">{homepageSections.media.text}</p>
                </div>
                <div className="premium-shadow relative min-h-[250px] flex-1 overflow-hidden rounded-[2.5rem]">
                  <Image
                    src={homepageSections.media.imageB}
                    alt="舞狮现场观众与舞台"
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 20vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="premium-shadow relative aspect-[4/5] overflow-hidden rounded-[3.5rem] lg:h-[700px] lg:aspect-auto">
              <Image
                src={homepageSections.media.imageC}
                alt="活动红毯舞狮现场"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Testimonials />

      <section className="ink-silk relative overflow-hidden section-space-lg text-white">
        <div className="watermark absolute -right-10 -bottom-10 opacity-10">XINLONG</div>

        <div className="shell relative z-10">
          <motion.div {...fadeInProps} className="section-intro flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="section-eyebrow text-secondary-fixed">稳定表现</span>
              <h2 className="section-title text-white">
                现场效果更好，
                <br />
                也是因为更在意细节
              </h2>
            </div>
            <p className="max-w-xl text-[1.02rem] leading-[1.8] text-white/70 md:text-[1.12rem]">
              一场演出好不好，不仅是看跳得高不高，
              <br className="hidden md:block" />
              还要看动作整不整齐、狮头新不新，以及跟现场互动的节奏。
            </p>
          </motion.div>

          <div className="grid gap-10 md:grid-cols-12">
            <motion.div
              {...fadeInProps}
              className="premium-shadow relative h-[400px] overflow-hidden rounded-[3rem] md:col-span-8 md:h-auto"
            >
              <Image
                src={homepageSections.craft.imageA}
                alt={homepageSections.craft.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            <div className="grid gap-10 md:col-span-4">
              <motion.div
                {...fadeInProps}
                transition={{ ...transitionBase, delay: 0.2 }}
                className="rounded-[3rem] border border-white/12 bg-white/10 p-12 shadow-2xl backdrop-blur-xl"
              >
                <h3 className="font-headline text-4xl font-black leading-[1.1] tracking-tight text-secondary-fixed">
                  {homepageSections.craft.title}
                </h3>
                <p className="body-copy mt-6 text-white/80 font-medium">{homepageSections.craft.text}</p>
              </motion.div>
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  {...fadeInProps}
                  transition={{ ...transitionBase, delay: 0.3 }}
                  className="relative aspect-square overflow-hidden rounded-[2.5rem]"
                >
                  <Image
                    src={homepageSections.craft.imageB}
                    alt="高桩表演"
                    fill
                    sizes="15vw"
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  {...fadeInProps}
                  transition={{ ...transitionBase, delay: 0.4 }}
                  className="relative aspect-square overflow-hidden rounded-[2.5rem]"
                >
                  <Image
                    src={homepageSections.craft.imageC}
                    alt="狮头细节"
                    fill
                    sizes="15vw"
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-surface section-space-lg">
        <div className="shell">
          <motion.div {...fadeInProps} className="section-intro grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div className="max-w-xl">
              <span className="section-eyebrow text-secondary">更多了解</span>
              <h2 className="section-title">看视频、挑方案、领报价，一次看清楚</h2>
            </div>
            <div className="hidden h-px w-full bg-outline-variant/30 lg:block" />
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-3">
            {growthPages.map((item, idx) => (
              <motion.div
                key={item.href}
                {...fadeInProps}
                transition={{ ...transitionBase, delay: idx * 0.2 }}
              >
                <Link
                  href={item.href}
                  className="editorial-card group block h-full border border-transparent transition-all hover:border-primary/20"
                >
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-white">
                    <div className="h-6 w-6 rounded-full border-2 border-current" />
                  </div>
                  <h3 className="font-headline text-3xl font-black text-on-surface tracking-tight">{item.title}</h3>
                  <p className="body-copy mt-4 text-on-surface-variant font-medium leading-relaxed">{item.text}</p>
                  <div className="mt-10 flex translate-x-0 items-center gap-2 font-headline text-sm font-black uppercase tracking-widest text-primary transition-transform group-hover:translate-x-2">
                    <span>进入页面</span>
                    <span className="text-xl">→</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low section-space-lg">
        <div className="shell">
          <motion.div {...fadeInProps} className="mx-auto mb-20 text-center flex flex-col items-center max-w-2xl">
            <span className="section-eyebrow text-secondary">所见即所得</span>
            <h2 className="section-title">所有素材均来自我们的真实执行现场</h2>
            <p className="body-copy mt-6 text-on-surface-variant font-medium">
              您在网站看到的每一张图、每一段视频，都是我们鑫龙堂团队实际参与的活动记录。真实效果，比任何空话都有力。
            </p>
          </motion.div>
          <div className="columns-1 gap-8 space-y-8 sm:columns-2 lg:columns-3">
            {mixedGallery.slice(0, 6).map((image, index) => (
              <motion.div
                key={index}
                {...fadeInProps}
                transition={{ ...transitionBase, delay: index * 0.1 }}
                className="hover-lift group relative break-inside-avoid overflow-hidden rounded-[2.5rem] shadow-xl border border-outline-variant/10"
              >
                <Image
                  src={image}
                  alt={`现场图片 ${index + 1}`}
                  className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#1a1710] section-space-lg text-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
        <div className="shell relative z-10 grid gap-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <span className="section-eyebrow text-secondary-fixed">为什么选我们</span>
            <h2 className="section-title text-white">
              不仅仅跳得精彩，
              <br />
              更能理解您的活动需求
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                {...fadeInProps}
                transition={{ ...transitionBase, delay: idx * 0.1 }}
                className="glass-panel group relative overflow-hidden rounded-[2.5rem] p-10"
              >
                <div className="absolute top-0 left-0 h-full w-1 origin-top scale-y-0 bg-secondary transition-transform duration-500 group-hover:scale-y-100" />
                <div className="font-headline text-7xl font-black text-secondary-fixed tracking-tight">{stat.value}</div>
                <div className="mt-4 text-sm font-black uppercase tracking-[0.2em] text-white/50">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
