'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import ContactCTA from '@/components/ContactCTA';
import { solutionPlaybooks } from '@/lib/site-data';

const subtleFadeProps = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

export default function SolutionsPage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen">
      <Navbar />
      <SubpageHero
        eyebrow="演出场景方案 —— SOLUTIONS"
        title={
          <>
            按需定制，契合多元活动场景
          </>
        }
        description={
          <>
            商场开业、街区路演、企业年会、高端喜宴等不同场景有着截然不同的演出诉求。我们制定了标准演艺方案，帮助您快速找到适合当前活动定位的配置。
          </>
        }
        chips={['商场开业', '商圈路演', '酒店年会', '喜宴寿宴']}
        panel={
          <div className="space-y-6">
            <div className="grid gap-4">
              {solutionPlaybooks.slice(0, 3).map((playbook) => (
                <div key={playbook.title} className="rounded-2xl bg-white/60 p-5 border border-outline-variant/30 backdrop-blur-sm shadow-sm flex items-center justify-between">
                  <p className="font-headline text-lg font-black text-on-surface tracking-tight">{playbook.title}</p>
                </div>
              ))}
            </div>
          </div>
        }
      />
      
      <section className="bg-surface-container-low section-space">
        <div className="shell space-y-32">
          {solutionPlaybooks.map((playbook, index) => (
            <motion.article 
              key={playbook.title} 
              {...subtleFadeProps}
              transition={{ ...subtleFadeProps.transition, delay: 0.1 }}
              className="grid gap-16 lg:grid-cols-2 lg:items-center"
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2.25rem] premium-shadow border border-outline-variant/10 group">
                  <Image src={playbook.image} alt={playbook.altText || playbook.title} fill placeholder="blur" sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/5" />
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="section-eyebrow text-secondary">方案 0{index + 1}</span>
                <h2 className="page-section-title mt-6 !text-4xl">{playbook.title}</h2>
                <div className="h-1 w-16 bg-primary mt-8 mb-8" />
                <p className="body-copy mt-8 text-xl text-on-surface-variant font-medium !leading-relaxed">
                  {playbook.summary}
                </p>
                <div className="mt-12 grid gap-8 md:grid-cols-2">
                  <div className="rounded-[1.5rem] bg-white p-8 border border-outline-variant/20 shadow-sm">
                    <h3 className="font-headline text-lg font-black text-on-surface tracking-tight">适用场景</h3>
                    <ul className="mt-5 space-y-4">
                      {playbook.fit.map((item) => (
                        <li key={item} className="flex gap-3 text-sm font-bold text-on-surface-variant">
                          <span className="text-secondary">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-[1.5rem] bg-white p-8 border border-outline-variant/20 shadow-sm">
                    <h3 className="font-headline text-lg font-black text-on-surface tracking-tight">服务内容</h3>
                    <ul className="mt-5 space-y-4">
                      {playbook.deliverables.map((item) => (
                        <li key={item} className="flex gap-3 text-sm font-bold text-on-surface-variant">
                          <span className="text-primary">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
