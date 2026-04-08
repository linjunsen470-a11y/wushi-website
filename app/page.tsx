'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  brand,
  homepageSections,
  mixedGallery,
  serviceCards,
  stats,
  workflowSteps,
} from '@/lib/site-data';

const growthPages = [
  {
    title: '媒体案例库',
    href: '/media',
    text: '直观呈现高标准执行细节，建立扎实的品牌信任感。',
  },
  {
    title: '场景化方案',
    href: '/solutions',
    text: '针对商场、婚礼、品牌发布等不同场景提供定制化策划建议。',
  },
  {
    title: '落地服务指南',
    href: '/faq',
    text: '快速了解合作流程与常见问题，让项目推进更高效。',
  },
];

const fadeInProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <header className="relative min-h-screen overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-[-10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-primary/20 blur-[120px]" />
        
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover brightness-[0.45]"
          >
            <source src="/assets/videos/lion-dance-bank-opening-red-carpet.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(26,23,16,0.8)_100%)]" />
        </div>

        <div className="shell relative flex min-h-screen flex-col justify-center pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <span className="section-eyebrow text-secondary-fixed mb-6 block">—— 中国大陆专业商演舞狮服务</span>
            <h1 className="display-title text-white">
              赋能开业盛典
              <br />
              <span className="text-secondary-fixed">构筑非凡气场</span>
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/80 md:text-2xl">
              {brand.name} 致力为高标准的商业活动提供最具现场感染力的醒狮演艺。不仅是传统技艺的展示，更是品牌价值的深度传播，让每一个关键时刻都熠熠生辉。
            </p>
            <div className="mt-12 flex flex-wrap gap-5">
              <Link href="/contact" className="group relative overflow-hidden rounded-full bg-primary px-10 py-5 font-headline text-base font-black tracking-widest text-white transition-all hover:scale-105 hover:bg-primary-container shadow-2xl">
                <span className="relative z-10">获取专业方案报价</span>
                <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform group-hover:translate-x-0" />
              </Link>
              <Link href="/media" className="rounded-full border border-white/30 px-10 py-5 font-headline text-base font-black tracking-widest text-white backdrop-blur-md transition-all hover:bg-white hover:text-on-surface">
                浏览实拍案例库
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute bottom-12 right-8 hidden lg:block"
          >
            <div className="editorial-card max-w-md">
              <p className="section-eyebrow">高效执行标准</p>
              <div className="space-y-6">
                {workflowSteps.slice(0, 3).map((step, index) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="font-headline text-2xl font-black text-primary/30">0{index + 1}</div>
                    <div>
                      <h2 className="font-headline text-lg font-black text-on-surface">{step.title}</h2>
                      <p className="mt-1 text-sm leading-relaxed text-on-surface-variant line-clamp-2">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <section className="bg-surface py-32 leading-none">
        <div className="shell">
          <motion.div {...fadeInProps} className="mb-20 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="section-eyebrow">演艺场景覆盖</span>
              <h2 className="section-title">适配不同维度的商业庆典需求</h2>
            </div>
            <div className="h-px flex-1 bg-outline-variant/30 mx-8 hidden lg:block" />
            <p className="max-w-md text-lg text-on-surface-variant leading-relaxed">
              聚焦核心项目场景，将舞狮传统艺术与现代商业叙事完美结合。
            </p>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-3">
            {serviceCards.map((service, idx) => (
              <motion.article 
                key={service.title} 
                {...fadeInProps}
                transition={{ ...fadeInProps.transition, delay: idx * 0.15 }}
                className="hover-lift overflow-hidden rounded-[2.5rem] bg-surface-container-low"
              >
                <div className="relative aspect-[5/4]">
                  <Image src={service.image} alt={service.title} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="font-headline text-xs font-black tracking-[0.3em] text-secondary-fixed">{service.subtitle}</p>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="font-headline text-3xl font-black text-on-surface">{service.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-on-surface-variant">{service.description}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {service.points.map((point: string) => (
                      <span key={point} className="px-3 py-1 bg-surface-container text-xs font-bold text-secondary rounded-full border border-secondary/10">
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

      <section className="bg-surface-container-low py-32">
        <div className="shell">
          <motion.div {...fadeInProps} className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="grid gap-10 md:grid-cols-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[3rem] premium-shadow group">
                <Image src={homepageSections.media.imageA} alt={homepageSections.media.title} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="flex flex-col gap-10">
                <div className="editorial-card !p-12 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
                  <span className="section-eyebrow">传播价值</span>
                  <h2 className="section-title !text-4xl">{homepageSections.media.title}</h2>
                  <p className="mt-6 text-lg leading-relaxed text-on-surface-variant">{homepageSections.media.text}</p>
                </div>
                <div className="relative flex-1 min-h-[250px] overflow-hidden rounded-[2.5rem] premium-shadow">
                  <Image src={homepageSections.media.imageB} alt="现场观众与舞台" fill sizes="(min-width: 1024px) 20vw, 100vw" className="object-cover" />
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[700px] overflow-hidden rounded-[3.5rem] premium-shadow">
              <Image src={homepageSections.media.imageC} alt="活动红毯现场" fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="ink-silk py-32 text-white relative overflow-hidden">
        {/* Animated Watermark */}
        <div className="watermark absolute -bottom-10 -right-10 opacity-10">WUSHI</div>
        
        <div className="shell relative z-10">
          <motion.div {...fadeInProps} className="mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="section-eyebrow text-secondary-fixed">品质执着</span>
              <h2 className="section-title text-white">用专业感定义每一场精彩演艺</h2>
            </div>
            <p className="max-w-xl text-xl leading-relaxed text-white/70">
              我们深知，一支优秀的舞狮团队，除了热闹外，更代表了主办方的审美水准与品牌形象。
            </p>
          </motion.div>

          <div className="grid gap-10 md:grid-cols-12">
            <motion.div 
              {...fadeInProps}
              className="relative overflow-hidden rounded-[3rem] md:col-span-8 h-[400px] md:h-auto premium-shadow"
            >
              <Image src={homepageSections.craft.imageA} alt={homepageSections.craft.title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </motion.div>
            <div className="grid gap-10 md:col-span-4">
              <motion.div 
                {...fadeInProps}
                transition={{ delay: 0.2 }}
                className="rounded-[3rem] bg-white/10 backdrop-blur-xl p-12 border border-white/12 shadow-2xl"
              >
                <h3 className="font-headline text-4xl font-black text-secondary-fixed">{homepageSections.craft.title}</h3>
                <p className="mt-6 text-lg leading-relaxed text-white/80">{homepageSections.craft.text}</p>
              </motion.div>
              <div className="grid gap-6 grid-cols-2">
                <motion.div {...fadeInProps} transition={{ delay: 0.3 }} className="relative aspect-square overflow-hidden rounded-[2.5rem]">
                  <Image src={homepageSections.craft.imageB} alt="高桩表演" fill sizes="15vw" className="object-cover" />
                </motion.div>
                <motion.div {...fadeInProps} transition={{ delay: 0.4 }} className="relative aspect-square overflow-hidden rounded-[2.5rem]">
                  <Image src={homepageSections.craft.imageC} alt="狮头细节" fill sizes="15vw" className="object-cover" />
                </motion.div>
              </div>
            </div>
          </div>

          <div className="mt-24 grid gap-8 md:grid-cols-4">
            {homepageSections.training.images.map((image, index) => (
              <motion.div
                key={index}
                {...fadeInProps}
                transition={{ delay: index * 0.1 }}
                className={`relative aspect-[3/4] overflow-hidden rounded-[2.5rem] ${index % 2 === 1 ? 'md:translate-y-12' : ''} premium-shadow`}
              >
                <Image src={image} alt={`训练场景 ${index + 1}`} fill sizes="(min-width: 1024px) 20vw, 100vw" className="object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-32 overflow-hidden">
        <div className="shell">
          <motion.div {...fadeInProps} className="mb-20 grid gap-12 lg:grid-cols-[1fr_1.2fr] items-center">
            <div>
              <span className="section-eyebrow">深化连接</span>
              <h2 className="section-title">全方位多维度的服务价值链接</h2>
            </div>
            <div className="w-full h-px bg-outline-variant/30 hidden lg:block" />
          </motion.div>
          
          <div className="grid gap-10 lg:grid-cols-3">
            {growthPages.map((item, idx) => (
              <motion.div 
                key={item.href}
                {...fadeInProps}
                transition={{ delay: idx * 0.2 }}
              >
                <Link href={item.href} className="editorial-card group block h-full border border-transparent hover:border-primary/20 transition-all">
                  <div className="h-14 w-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500 mb-8">
                    <div className="w-6 h-6 border-2 border-current rounded-full" />
                  </div>
                  <h3 className="font-headline text-3xl font-black text-on-surface">{item.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-on-surface-variant line-clamp-2">{item.text}</p>
                  <div className="mt-10 flex items-center gap-2 text-primary font-headline font-black uppercase tracking-widest text-sm translate-x-0 group-hover:translate-x-2 transition-transform">
                    <span>进入页面</span>
                    <span className="text-xl">→</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-32">
        <div className="shell">
          <motion.div {...fadeInProps} className="mb-20 text-center mx-auto max-w-3xl">
            <span className="section-eyebrow">项目记录</span>
            <h2 className="section-title">坚持真实执行底片交付</h2>
            <p className="mt-6 text-lg text-on-surface-variant max-w-2xl mx-auto">
              拒绝网络配图。本站所有展示素材均源自真实的执行现场，见证我们在全国各地的每一次专业交付。
            </p>
          </motion.div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {mixedGallery.slice(0, 6).map((image, index) => (
              <motion.div
                key={index}
                {...fadeInProps}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden rounded-[2.5rem] break-inside-avoid shadow-xl hover-lift group"
              >
                <Image src={image} alt={`现场图 ${index + 1}`} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a1710] py-40 text-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
        <div className="shell relative z-10 grid gap-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <span className="section-eyebrow text-secondary-fixed">数智洞察</span>
            <h2 className="section-title text-white">从现场气场到商业转化，每一个环节都为您精心设计</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {stats.map((stat, idx) => (
              <motion.div 
                key={stat.label} 
                {...fadeInProps}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel rounded-[2.5rem] p-10 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-secondary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
                <div className="font-headline text-7xl font-black text-secondary-fixed">{stat.value}</div>
                <div className="mt-4 text-base font-bold tracking-[0.2em] text-white/60 uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
