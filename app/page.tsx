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
  mixedGalleryAlt,
  proofPoints,
  responsePromises,
  serviceCards,
  stats,
} from '@/lib/site-data';

const growthPages = [
  {
    title: '视频案例',
    href: '/media',
    text: '观看过往真实演出现场，直观感受热烈气氛、高质量配合与视觉呈现。',
  },
  {
    title: '场景方案',
    href: '/solutions',
    text: '涵盖商场开业、品牌路演、喜宴等多元化场景，提供定制级专业配置。',
  },
  {
    title: '预订指南',
    href: '/faq',
    text: '了解服务流程、报价参考与执行细节，让您的前期规划更清晰可控。',
  },
];

const heroPillars = ['商场开业', '品牌路演', '企业晚宴', '重庆本地执行'];

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
            alt={homeShowcase.heroAlt || "舞狮开业演出现场"}
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
                  <span className="relative z-10">加微信 / 电话拿方案</span>
                  <div className="absolute inset-0 -translate-x-full bg-white/18 transition-transform duration-500 group-hover:translate-x-0" />
                </Link>
                <Link
                  href="/cases"
                  className="button-secondary border-white/16 bg-white/6 px-8 text-white backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white hover:text-on-surface"
                >
                  看真实落地案例
                </Link>
              </div>
              <div className="mt-10 grid gap-3 text-sm text-white/78 md:max-w-3xl md:grid-cols-3">
                {responsePromises.map((item) => (
                  <div key={item} className="rounded-[1rem] border border-white/10 bg-black/18 px-4 py-3 backdrop-blur-md">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      <LogoWall />

      <section className="bg-surface-container-low py-14">
        <div className="shell grid gap-6 lg:grid-cols-3">
          {proofPoints.map((item, idx) => (
            <motion.article
              key={item.title}
              {...fadeInProps}
              transition={{ ...transitionBase, delay: idx * 0.1 }}
              className="editorial-card !p-8"
            >
              <p className="font-headline text-2xl font-black tracking-tight text-on-surface">{item.title}</p>
              <p className="mt-4 text-base leading-relaxed text-on-surface-variant font-medium">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-surface section-space-lg leading-none">
        <div className="shell">
          <motion.div {...fadeInProps} className="section-intro flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="section-eyebrow text-secondary">服务项目</span>
              <h2 className="section-title">
                我们能承接的演出
                <br />
                与典型商业场景
              </h2>
            </div>
            <p className="body-copy text-on-surface-variant max-w-xl">
              无论是需要正式剪彩与点睛、品牌活动中的聚客互动，还是企业宴会中的开场与压轴节目，鑫龙堂都有成熟执行经验。
            </p>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-3">
            {serviceCards.map((service, idx) => (
              <motion.article
                key={service.title}
                {...fadeInProps}
                transition={{ ...transitionBase, delay: idx * 0.15 }}
                className="hover-lift overflow-hidden rounded-[2rem] bg-surface-container-low"
              >
                <div className="relative aspect-[5/4]">
                  <Image
                    src={service.image}
                    alt={service.altText || service.title}
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
                        className="rounded-[0.85rem] border border-secondary/10 bg-surface-container px-3.5 py-1.5 text-xs font-bold text-secondary"
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
              <div className="group premium-shadow relative aspect-[3/4] overflow-hidden rounded-[2.25rem]">
                <Image
                  src={homepageSections.media.imageA}
                  alt={homepageSections.media.imageAAlt}
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
                <div className="premium-shadow relative min-h-[250px] flex-1 overflow-hidden rounded-[2rem]">
                  <Image
                    src={homepageSections.media.imageB}
                    alt={homepageSections.media.imageBAlt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 20vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="premium-shadow relative aspect-[4/5] overflow-hidden rounded-[2.25rem] lg:h-[700px] lg:aspect-auto">
              <Image
                src={homepageSections.media.imageC}
                alt={homepageSections.media.imageCAlt}
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
              className="premium-shadow relative h-[400px] overflow-hidden rounded-[2.25rem] md:col-span-8 md:h-auto"
            >
              <Image
                src={homepageSections.craft.imageA}
                alt={homepageSections.craft.imageAAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            <div className="grid gap-10 md:col-span-4">
              <motion.div
                {...fadeInProps}
                transition={{ ...transitionBase, delay: 0.2 }}
                className="rounded-[2.25rem] border border-white/12 bg-white/10 p-12 shadow-2xl backdrop-blur-xl"
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
                  className="relative aspect-square overflow-hidden rounded-[2rem]"
                >
                  <Image
                    src={homepageSections.craft.imageB}
                    alt={homepageSections.craft.imageBAlt}
                    fill
                    sizes="15vw"
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  {...fadeInProps}
                  transition={{ ...transitionBase, delay: 0.4 }}
                  className="relative aspect-square overflow-hidden rounded-[2rem]"
                >
                  <Image
                    src={homepageSections.craft.imageC}
                    alt={homepageSections.craft.imageCAlt}
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
              <span className="section-eyebrow text-secondary">服务特色</span>
              <h2 className="section-title">全方位了解我们强悍的专业服务体系</h2>
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
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-[1rem] bg-primary/5 text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-white">
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
                className="hover-lift group relative break-inside-avoid overflow-hidden rounded-[2rem] shadow-xl border border-outline-variant/10"
              >
                <Image
                  src={image}
                  alt={mixedGalleryAlt[index] || `现场图片 ${index + 1}`}
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
                className="glass-panel group relative overflow-hidden rounded-[2rem] p-10"
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
