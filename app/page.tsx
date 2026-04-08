'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  brand,
  homeShowcase,
  homepageSections,
  mixedGallery,
  serviceCards,
  stats,
  workflowSteps,
} from '@/lib/site-data';

const growthPages = [
  {
    title: '真实视频',
    href: '/media',
    text: '直接看真实演出视频，更快判断现场气氛、节目质量和整体完成度。',
  },
  {
    title: '场景方案',
    href: '/solutions',
    text: '按开业、商演、婚礼、节庆等不同场景，找到更适合您活动的安排。',
  },
  {
    title: '预订指南',
    href: '/faq',
    text: '提前了解报价、准备信息和预订细节，咨询更高效，决策更轻松。',
  },
];

const heroPillars = ['开业庆典', '商演活动', '品牌发布', '婚礼宴会'];

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

      <header className="relative min-h-screen overflow-hidden bg-[#140d0b] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={homeShowcase.hero}
            alt="舞狮开业演出现场"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,13,11,0.22)_0%,rgba(20,13,11,0.54)_30%,rgba(20,13,11,0.86)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,13,11,0.8)_0%,rgba(20,13,11,0.42)_42%,rgba(20,13,11,0.72)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,219,112,0.16),transparent_34%),radial-gradient(circle_at_78%_18%,rgba(163,0,17,0.3),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.18),transparent_32%)]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:clamp(44px,6vw,72px)_clamp(44px,6vw,72px)]" />
        </div>

        <div className="shell relative flex min-h-screen items-end pt-28 pb-14 md:pt-32 md:pb-20">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative z-10 max-w-[62rem] pb-8 md:pb-12"
            >
              <span className="section-eyebrow text-secondary-fixed mb-6 block">
                中国大陆地区专业舞狮演出服务
              </span>
              <h1 className="page-hero-title text-white">
                让重要场合，
                <br />
                一开场就被记住
              </h1>
              <p className="page-lead mt-10 text-white/76 md:text-[1.12rem]">
                {brand.name} 专注服务开业庆典、商演活动、婚礼宴会和品牌发布等正式场合。我们用真实演出经验，把热闹的气氛、仪式感、现场秩序和镜头效果都做到位，让您的活动不仅热闹，而且更值得传播。
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
                  className="button-primary group relative overflow-hidden px-7 shadow-[0_18px_52px_rgba(163,0,17,0.32)] transition-all hover:-translate-y-1 hover:bg-primary-container"
                >
                  <span className="relative z-10">获取活动方案与报价</span>
                  <div className="absolute inset-0 -translate-x-full bg-white/18 transition-transform duration-500 group-hover:translate-x-0" />
                </Link>
                <Link
                  href="/media"
                  className="button-secondary border-white/16 bg-white/6 px-7 text-white backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white hover:text-on-surface"
                >
                  查看真实演出视频
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="hidden"
            >
              <div className="relative isolate max-w-[32rem] overflow-hidden rounded-[2.75rem] border border-white/12 bg-black/28 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.34)] backdrop-blur-xl">
                <Image
                  src={homeShowcase.hero}
                  alt="舞狮开业演出现场实拍"
                  fill
                  sizes="(min-width: 1024px) 36vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,13,11,0.12)_0%,rgba(20,13,11,0.24)_34%,rgba(20,13,11,0.92)_100%)]" />
                <div className="absolute left-6 top-6 rounded-full border border-white/14 bg-black/24 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-white/70 backdrop-blur-md">
                  Real Project Footage
                </div>
                <div className="absolute -left-8 bottom-8 w-[42%] rounded-[1.8rem] border border-white/12 bg-[#1c130f]/80 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem]">
                    <Image
                      src={homeShowcase.secondary}
                      alt="舞狮表演现场观众"
                      fill
                      sizes="220px"
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-3 text-[0.72rem] font-bold uppercase tracking-[0.24em] text-secondary-fixed/90">
                    Audience Energy
                  </div>
                </div>
                <div className="relative z-10 mt-48 rounded-[2rem] border border-white/10 bg-black/28 p-6 backdrop-blur-xl">
                  <p className="section-eyebrow">服务流程</p>
                  <div className="mt-5 space-y-4">
                    {workflowSteps.slice(0, 3).map((step, index) => (
                      <div
                        key={step.title}
                        className="grid grid-cols-[auto_1fr] gap-4 border-b border-white/8 pb-4 last:border-b-0 last:pb-0"
                      >
                        <div className="font-headline text-2xl font-black text-secondary-fixed/88">0{index + 1}</div>
                        <div>
                          <h2 className="font-headline text-lg font-black text-white">{step.title}</h2>
                          <p className="mt-1 text-sm leading-relaxed text-white/68 line-clamp-2">{step.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      <section className="bg-surface section-space-lg leading-none">
        <div className="shell">
          <motion.div {...fadeInProps} className="section-intro flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="section-eyebrow">服务场景</span>
              <h2 className="section-title">
                适合不同类型的
                <br />
                重要活动现场
              </h2>
            </div>
            <div className="h-px mx-8 hidden flex-1 bg-outline-variant/30 lg:block" />
            <p className="body-copy text-on-surface-variant">
              无论您要的是正式开场、热闹气氛、品牌亮相，还是喜庆迎宾，
              <br className="hidden md:block" />
              都能在这里找到更贴合活动目标的舞狮服务方案。
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
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-8">
                    <p className="font-headline text-xs font-black tracking-[0.3em] text-secondary-fixed">{service.subtitle}</p>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="font-headline text-3xl font-black leading-[1.08] tracking-[-0.02em] text-on-surface">{service.title}</h3>
                  <p className="body-copy mt-4 text-on-surface-variant">{service.description}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {service.points.map((point: string) => (
                      <span
                        key={point}
                        className="rounded-full border border-secondary/10 bg-surface-container px-3 py-1 text-xs font-bold text-secondary"
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
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="flex flex-col gap-10">
                <div className="editorial-card group relative overflow-hidden !p-12">
                  <div className="absolute top-0 right-0 -mt-16 -mr-16 h-32 w-32 rounded-full bg-primary/5 transition-transform duration-700 group-hover:scale-150" />
                  <span className="section-eyebrow">真实传播价值</span>
                  <h2 className="section-title !text-4xl !leading-[1.08]">{homepageSections.media.title}</h2>
                  <p className="body-copy mt-6 text-on-surface-variant">{homepageSections.media.text}</p>
                </div>
                <div className="premium-shadow relative min-h-[250px] flex-1 overflow-hidden rounded-[2.5rem]">
                  <Image
                    src={homepageSections.media.imageB}
                    alt="舞狮现场观众与舞台"
                    fill
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
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="ink-silk relative overflow-hidden section-space-lg text-white">
        <div className="watermark absolute -right-10 -bottom-10 opacity-10">WUSHI</div>

        <div className="shell relative z-10">
          <motion.div {...fadeInProps} className="section-intro flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="section-eyebrow text-secondary-fixed">专业呈现</span>
              <h2 className="section-title text-white">
                让现场好看，
                <br />
                也让您更放心
              </h2>
            </div>
            <p className="max-w-xl text-[1.02rem] leading-[1.8] text-white/70 md:text-[1.12rem]">
              真正值得选择的团队，不只是会表演，
              <br className="hidden md:block" />
              还要能把质感、节奏、配合和活动氛围一起做好。
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
                <h3 className="font-headline text-4xl font-black leading-[1.08] tracking-[-0.02em] text-secondary-fixed">
                  {homepageSections.craft.title}
                </h3>
                <p className="body-copy mt-6 text-white/80">{homepageSections.craft.text}</p>
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

          <div className="mt-24 grid gap-8 md:grid-cols-4">
            {homepageSections.training.images.map((image, index) => (
              <motion.div
                key={index}
                {...fadeInProps}
                transition={{ ...transitionBase, delay: index * 0.1 }}
                className={`premium-shadow relative aspect-[3/4] overflow-hidden rounded-[2.5rem] ${
                  index % 2 === 1 ? 'md:translate-y-12' : ''
                }`}
              >
                <Image
                  src={image}
                  alt={`训练与演出场景 ${index + 1}`}
                  fill
                  sizes="(min-width: 1024px) 20vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-surface section-space-lg">
        <div className="shell">
          <motion.div {...fadeInProps} className="section-intro grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <span className="section-eyebrow">继续了解</span>
              <h2 className="section-title">从视频、方案到预订信息，一次看清楚</h2>
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
                  <h3 className="font-headline text-3xl font-black text-on-surface">{item.title}</h3>
                  <p className="body-copy mt-4 line-clamp-2 text-on-surface-variant">{item.text}</p>
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
          <motion.div {...fadeInProps} className="mx-auto mb-20 text-center flex flex-col items-center">
            <span className="section-eyebrow">真实记录</span>
            <h2 className="section-title">所有展示素材都来自真实项目现场</h2>
            <p className="body-copy mt-6 text-on-surface-variant">
              您看到的图片和视频，来自我们实际参与的活动执行现场。
              <br className="hidden md:block" />
              真实案例，比任何空泛描述都更能说明效果。
            </p>
          </motion.div>
          <div className="columns-1 gap-8 space-y-8 sm:columns-2 lg:columns-3">
            {mixedGallery.slice(0, 6).map((image, index) => (
              <motion.div
                key={index}
                {...fadeInProps}
                transition={{ ...transitionBase, delay: index * 0.1 }}
                className="hover-lift group relative break-inside-avoid overflow-hidden rounded-[2.5rem] shadow-xl"
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
            <span className="section-eyebrow text-secondary-fixed">为什么选择我们</span>
            <h2 className="section-title text-white">
              从现场气氛到活动观感，每个细节都影响最终效果
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
                <div className="absolute top-0 left-0 h-full w-2 origin-top scale-y-0 bg-secondary transition-transform duration-500 group-hover:scale-y-100" />
                <div className="font-headline text-7xl font-black text-secondary-fixed">{stat.value}</div>
                <div className="mt-4 text-base font-bold uppercase tracking-[0.2em] text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
