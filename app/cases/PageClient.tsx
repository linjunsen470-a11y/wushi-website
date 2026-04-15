'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Sparkles, Maximize, Video } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import ContactCTA from '@/components/ContactCTA';
import { caseStudies, stats } from '@/lib/site-data';

const subtleFadeProps = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

export default function CasesPage() {
  const featured = caseStudies[0];
  const restCases = caseStudies.slice(1);

  return (
    <main className="min-h-screen">
      <Navbar />
      <SubpageHero
        eyebrow="真实案例名录 —— CASE STUDIES"
        variant="full"
        bgImage={featured.image}
        title={featured.title}
        description={
          <>
            深耕重庆及西南区域重点商业项目。每一个案例均源自鑫龙堂团队的真实落地执行，
            <br className="hidden md:block" />
            为您提供直观的现场效果参考、动作细节解析以及不同场地的执行经验。
          </>
        }
        chips={[featured.category, featured.client, featured.location]}
        actions={
          <div className="grid grid-cols-2 gap-8 border-l border-white/20 pl-10 md:grid-cols-4">
            <div className="space-y-2">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Client</p>
              <p className="font-headline text-sm font-black text-white">{featured.client}</p>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Location</p>
              <p className="font-headline text-sm font-black text-white">{featured.location}</p>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Date</p>
              <p className="font-headline text-sm font-black text-white">{featured.date}</p>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Category</p>
              <p className="font-headline text-sm font-black text-white">{featured.category}</p>
            </div>
          </div>
        }
      />

      <section className="bg-surface py-32 overflow-hidden">
        <div className="shell grid gap-20 lg:grid-cols-[1fr_1fr] items-center">
          <motion.div {...subtleFadeProps} className="max-w-xl space-y-8">
            <span className="section-eyebrow text-secondary">实战交付</span>
            <h2 className="page-section-title !text-5xl tracking-tight !leading-tight">
              用实排预演，
              <br />
              确保现场万无一失
            </h2>
            <p className="body-copy text-xl text-on-surface-variant leading-relaxed font-medium">
              我们深知每一场活动都是不可逆的。通过对过往案例的整理，您可以直观地看到我们在不同空间布局下的演出质感、仪式配合及氛围把控能力，帮您在决策时更有底气。
            </p>
          </motion.div>
          
          <div className="relative flex flex-col gap-8 lg:pl-16">
            {[
              { text: featured.metrics[0], icon: Sparkles, offset: 'lg:translate-x-0' },
              { text: featured.metrics[1], icon: Maximize, offset: 'lg:translate-x-12' },
              { text: featured.metrics[2], icon: Video, offset: 'lg:translate-x-6' },
            ].map((metric, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1, duration: 0.8 }}
                className={`editorial-card hover-lift flex items-center gap-8 group transition-all duration-500 ${metric.offset} max-w-md w-full !p-8`}
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.25rem] bg-secondary/5 text-secondary ring-1 ring-secondary/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white group-hover:ring-secondary shadow-sm">
                  <metric.icon size={28} strokeWidth={1.5} />
                </div>
                <p className="font-headline text-xl font-black tracking-tight text-on-surface">
                  {metric.text}
                </p>
              </motion.div>
            ))}
            <div className="absolute -left-10 top-12 bottom-12 hidden w-px bg-gradient-to-b from-transparent via-outline-variant to-transparent lg:block" />
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-32">
        <div className="shell">
          <motion.div {...subtleFadeProps} className="mb-20 max-w-3xl">
            <span className="section-eyebrow text-secondary">更多项目</span>
            <h2 className="page-section-title mt-6 tracking-tight !leading-tight">不同业态下的真实演艺交付效果</h2>
          </motion.div>
          <div className="grid gap-12 lg:grid-cols-2 lg:mx-auto">
            {restCases.map((item, idx) => (
              <motion.article 
                key={item.title} 
                {...subtleFadeProps}
                transition={{ ...subtleFadeProps.transition, delay: idx * 0.1 }}
                className="hover-lift overflow-hidden rounded-[2.25rem] bg-white premium-shadow border border-outline-variant/10"
              >
                <div className="relative aspect-[16/9] group overflow-hidden">
                  <Image src={item.image} alt={item.title} fill placeholder="blur" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-x-6 bottom-6 flex justify-end">
                    <span className="glass-panel px-4 py-2 rounded-full text-[10px] font-black text-on-surface uppercase tracking-widest">{item.location}</span>
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <p className="text-[11px] font-black tracking-[0.2em] text-secondary uppercase italic">{item.category} | {item.client}</p>
                  </div>
                  <h3 className="mt-5 font-headline text-3xl font-black text-on-surface tracking-tight leading-tight">{item.title}</h3>
                  <p className="body-copy mt-5 text-base leading-relaxed text-on-surface-variant font-medium">{item.description}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {item.metrics.map((metric) => (
                      <span key={metric} className="rounded-xl bg-surface-container-low px-4 py-2.5 text-[11px] font-black tracking-[0.1em] text-secondary border border-secondary/10">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a1714] py-32 text-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
        <div className="shell relative z-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
          {stats.map((stat, idx) => (
            <motion.div 
              key={stat.label} 
              {...subtleFadeProps}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel rounded-[2rem] p-10 text-center relative overflow-hidden group border border-white/5"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              <div className="font-headline text-6xl font-black text-secondary-fixed tracking-tighter">{stat.value}</div>
              <div className="mt-4 text-[10px] font-black tracking-[0.3em] text-white/50 uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>
      <ContactCTA />
      <Footer />
    </main>
  );
}
