import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { faqItems, serviceCards, workflowSteps } from '@/lib/site-data';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <header className="bg-surface py-24">
        <div className="shell">
          <span className="section-eyebrow">服务内容</span>
          <h1 className="display-title text-primary">
            面向正式项目的
            <br />
            舞狮服务方案
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-on-surface-variant">
            这页不是简单的项目罗列，而是按甲方真正会购买的活动场景来组织，让客户更快判断我们适不适合他的项目。
          </p>
        </div>
      </header>

      <section>
        {serviceCards.map((service, index) => (
          <section key={service.title} className={index % 2 === 0 ? 'bg-surface-container-low py-24' : 'bg-surface py-24'}>
            <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                  <Image src={service.image} alt={service.title} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <p className="font-headline text-xs font-black tracking-[0.28em] text-secondary">{service.subtitle}</p>
                <h2 className="mt-3 section-title">{service.title}</h2>
                <p className="mt-6 text-lg leading-8 text-on-surface-variant">{service.description}</p>
                <ul className="mt-8 space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="text-on-surface">• {point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </section>

      <section className="bg-[#17120f] py-24 text-white">
        <div className="shell">
          <div className="mb-14 max-w-3xl">
            <span className="section-eyebrow text-secondary-fixed">合作步骤</span>
            <h2 className="section-title text-white">把节目落地成项目，需要清晰流程</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {workflowSteps.map((step, index) => (
              <article key={step.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-8">
                <div className="font-headline text-4xl font-black text-secondary-fixed/60">0{index + 1}</div>
                <h3 className="mt-4 font-headline text-2xl font-black">{step.title}</h3>
                <p className="mt-4 leading-7 text-white/70">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="shell max-w-4xl">
          <div className="mb-10 text-center">
            <span className="section-eyebrow">常见问题</span>
            <h2 className="section-title">客户常问的三个基础判断</h2>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <details key={item.question} open={index === 0} className="rounded-[1.5rem] bg-surface-container-low px-7 py-6">
                <summary className="cursor-pointer list-none font-headline text-xl font-black text-on-surface">
                  {item.question}
                </summary>
                <p className="pt-4 leading-7 text-on-surface-variant">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
