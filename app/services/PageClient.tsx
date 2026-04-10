'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import ContactCTA from '@/components/ContactCTA';
import { faqItems, serviceCards, workflowSteps } from '@/lib/site-data';

const subtleFadeProps = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SubpageHero
        eyebrow="服务项目 —— SERVICES"
        title={
          <>
            专业演艺，
            <br />
            为您的活动增色
          </>
        }
        description={
          <>
            从热情的开业盛典，到雅致的商场路演或私人宴会，
            <br className="hidden md:block" />
            我们提供与您活动风格高度匹配的定制舞狮服务方案。
          </>
        }
        chips={['开业庆典', '品牌路演', '酒店宴会', '节庆定制']}
        panel={
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-1">
              {serviceCards.slice(0, 2).map((service) => (
                <div key={service.title} className="rounded-2xl bg-white/60 p-5 border border-outline-variant/30 backdrop-blur-sm shadow-sm">
                  <p className="font-headline text-lg font-black text-on-surface tracking-tight">{service.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-on-surface-variant font-medium line-clamp-2">{service.description}</p>
                </div>
              ))}
            </div>
            <div className="rounded-[1.75rem] bg-secondary-container px-6 py-6 text-on-secondary-container">
              <p className="mt-1 text-sm leading-relaxed font-bold">
                舞狮不仅是热闹，也代表了活动的排面与质感。我们坚持“器材要新、动作要稳”的执行底线。
              </p>
            </div>
          </div>
        }
      />
      
      <section>
        {serviceCards.map((service, index) => (
          <section key={service.title} className={index % 2 === 0 ? 'bg-surface-container-low py-32' : 'bg-surface py-32'}>
            <div className="shell grid gap-16 lg:grid-cols-2 lg:items-center">
              <motion.div 
                {...subtleFadeProps}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] premium-shadow border border-outline-variant/10 group">
                  <Image src={service.image} alt={service.title} fill placeholder="blur" sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/5" />
                </div>
              </motion.div>
              <motion.div 
                {...subtleFadeProps}
                transition={{ ...subtleFadeProps.transition, delay: 0.2 }}
                className={index % 2 === 1 ? 'lg:order-1' : ''}
              >
                <span className="section-eyebrow text-secondary">{service.subtitle}</span>
                <h2 className="page-section-title mt-6 !text-4xl">{service.title}</h2>
                <div className="h-1 w-16 bg-primary mt-8 mb-8" />
                <p className="page-lead mt-6 text-xl text-on-surface-variant !leading-relaxed font-medium">
                  {service.description}
                </p>
                <ul className="mt-10 space-y-5">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-4 items-center p-4 rounded-2xl bg-white shadow-sm border border-outline-variant/20">
                      <span className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="text-base font-bold text-on-surface">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>
        ))}
      </section>

      <section className="bg-[#1a1714] py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(163,0,17,0.08),transparent_50%)]" />
        <div className="shell relative z-10">
          <motion.div {...subtleFadeProps} className="max-w-3xl mb-20 section-stack">
            <span className="section-eyebrow text-secondary-fixed">服务流程</span>
            <h2 className="page-section-title mt-6 text-white !leading-tight">
              标准化执行环节，
              <br />
              确保现场不出错
            </h2>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-4">
            {workflowSteps.map((step, index) => (
              <motion.article 
                key={step.title} 
                {...subtleFadeProps}
                transition={{ ...subtleFadeProps.transition, delay: index * 0.1 }}
                className="rounded-[2.5rem] border border-white/5 bg-white/5 p-10 hover:bg-white/10 transition-colors group"
              >
                <div className="font-headline text-5xl font-black text-secondary-fixed/30 group-hover:text-secondary-fixed/50 transition-colors tracking-tighter">0{index + 1}</div>
                <h3 className="mt-6 font-headline text-2xl font-black text-white tracking-tight">{step.title}</h3>
                <p className="mt-5 text-[15px] leading-relaxed text-white/60 font-medium">{step.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-32">
        <div className="shell max-w-4xl">
          <motion.div {...subtleFadeProps} className="mb-20 text-center mx-auto">
            <span className="section-eyebrow text-secondary">常见问题</span>
            <h2 className="page-section-title mt-6 tracking-tight !leading-tight">
              预订前
              <br className="sm:hidden" />
              您可以先了解这些
            </h2>
          </motion.div>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <motion.details 
                key={item.question} 
                open={index === 0} 
                {...subtleFadeProps}
                transition={{ ...subtleFadeProps.transition, delay: index * 0.1 }}
                className="group overflow-hidden rounded-[2rem] bg-surface-container-low border border-transparent transition-all duration-300 open:bg-white open:border-outline-variant/30 open:premium-shadow"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between px-10 py-8 font-headline text-xl font-black text-on-surface hover:text-primary transition-colors">
                  <span>{item.question}</span>
                  <span className="text-2xl font-light text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-10 pb-10">
                  <div className="h-px w-full bg-outline-variant/20 mb-6" />
                  <p className="text-[17px] leading-relaxed text-on-surface-variant font-medium">{item.answer}</p>
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
      <Footer />
    </main>
  );
}
