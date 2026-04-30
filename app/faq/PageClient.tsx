'use client';

import { motion } from 'motion/react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import ContactCTA from '@/components/ContactCTA';
import { faqSections, prepChecklist } from '@/lib/site-data';

const subtleFadeProps = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

export default function FaqPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SubpageHero
        eyebrow="疑问解答中心 / FAQ"
        title="透明服务流程 打消前期顾虑"
        description="整理活动报价、筹备及执行的核心信息。以清晰标准为您提供安心的合作保障。"
        chips={['报价透明', '准备清单', '执行标准', '安心保障']}
        panel={
          <div className="space-y-6">
            <div className="rounded-[1rem] bg-secondary/5 p-8 border border-secondary/10">
              <span className="section-eyebrow text-secondary uppercase">咨询建议</span>
              <h4 className="mt-3 font-headline text-lg font-black text-on-surface">咨询准备清单</h4>
              <ul className="mt-4 space-y-3">
                {prepChecklist.slice(0, 3).map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-on-surface-variant">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        }
      />
      
      <section className="bg-surface-container-low py-32">
        <div className="shell grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.aside 
            {...subtleFadeProps}
            className="editorial-card h-fit !p-12 sticky top-32"
          >
            <span className="section-eyebrow text-secondary">业务评估指南</span>
            <h2 className="page-section-title mt-4 !text-3xl">专属方案筹备要素</h2>
            <p className="mt-6 text-on-surface-variant leading-relaxed font-medium">
              明确以下核心活动信息，能够协助我们的专家团队为您迅速匹配最适合的表演编制与精准报价方案：
            </p>
            <ul className="mt-8 space-y-4">
              {prepChecklist.map((item) => (
                <li key={item} className="flex gap-4 p-4 rounded-[0.9rem] bg-surface-container-low border border-outline-variant/20">
                  <span className="text-secondary font-black text-xs mt-1">✓</span>
                  <span className="text-sm font-bold text-on-surface">{item}</span>
                </li>
              ))}
            </ul>
          </motion.aside>

          <div className="space-y-12">
            {faqSections.map((section, index) => (
              <motion.section 
                key={section.title} 
                {...subtleFadeProps}
                transition={{ ...subtleFadeProps.transition, delay: index * 0.1 }}
                className="rounded-[2.25rem] bg-white p-10 md:p-14 premium-shadow border border-outline-variant/10"
              >
                <div className="mb-10 flex items-center gap-6">
                  <span className="font-headline text-5xl font-black text-primary/10 tracking-tighter">0{index + 1}</span>
                  <h2 className="font-headline text-3xl font-black text-on-surface tracking-tight">{section.title}</h2>
                </div>
                <div className="space-y-5">
                  {section.items.map((item, itemIndex) => (
                    <details 
                      key={item.question} 
                      open={itemIndex === 0} 
                      className="group overflow-hidden rounded-[1rem] border border-outline-variant/30 transition-all duration-300 open:border-primary/20 open:bg-primary/[0.02]"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between px-8 py-6 font-headline text-lg font-black text-on-surface hover:bg-surface-container-low group-open:hover:bg-transparent">
                        <span>{item.question}</span>
                        <span className="text-2xl font-light text-primary transition-transform group-open:rotate-45">+</span>
                      </summary>
                      <div className="px-8 pb-8">
                        <div className="h-px w-full bg-outline-variant/20 mb-6" />
                        <p className="text-[17px] leading-relaxed text-on-surface-variant font-medium">{item.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
