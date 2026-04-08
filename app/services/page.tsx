import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import { faqItems, serviceCards, workflowSteps } from '@/lib/site-data';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <SubpageHero
        eyebrow="服务内容"
        title={
          <>
            面向正式项目的
            <br />
            舞狮服务方案
          </>
        }
        description="这页不是简单的项目罗列，而是按客户真正会采购的活动类型来组织内容，让对方在进入详情前，就先判断项目适配度与交付深度。"
        chips={['开业庆典', '商场商演', '婚礼宴会', '节庆项目']}
        panel={
          <div className="space-y-5">
            <div>
              <p className="page-eyebrow text-secondary">服务覆盖</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {serviceCards.map((service) => (
                  <div key={service.title} className="hero-stat">
                    <p className="font-headline text-lg font-black text-on-surface">{service.title}</p>
                    <p className="mt-2 text-sm leading-6 text-on-surface-variant">{service.points[0]}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[1.5rem] bg-[#221c16] px-5 py-5 text-white">
              <p className="font-headline text-base font-black tracking-[0.06em]">适合怎样的项目</p>
              <p className="mt-3 text-sm leading-6 text-white/72">
                适合需要明确流程、现场组织和传播画面的商业项目，不是单纯节目清单式展示页。
              </p>
            </div>
          </div>
        }
      />

      <section>
        {serviceCards.map((service, index) => (
          <section
            key={service.title}
            className={index % 2 === 0 ? 'bg-surface-container-low py-24' : 'bg-surface py-24'}
          >
            <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <p className="page-eyebrow text-secondary">{service.subtitle}</p>
                <h2 className="page-section-title mt-4">{service.title}</h2>
                <p className="mt-6 text-lg leading-8 text-on-surface-variant">{service.description}</p>
                <ul className="mt-8 space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="text-on-surface">
                      • {point}
                    </li>
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
            <span className="page-eyebrow text-secondary-fixed">合作步骤</span>
            <h2 className="page-section-title mt-4 text-white">把节目落地成项目，需要清晰流程</h2>
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
            <span className="page-eyebrow text-secondary">常见问题</span>
            <h2 className="page-section-title mt-4">客户常问的三个基础判断</h2>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <details
                key={item.question}
                open={index === 0}
                className="rounded-[1.5rem] bg-surface-container-low px-7 py-6"
              >
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
