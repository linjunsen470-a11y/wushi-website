import Image from 'next/image';
import { serviceCards } from '@/lib/site-data';
import { FadeIn } from '@/components/animations/FadeIn';

export default function ServiceGrid() {
  return (
    <section className="bg-surface section-space-lg leading-none">
      <div className="shell">
        <FadeIn className="section-intro flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="section-eyebrow text-secondary">服务项目</span>
            <h2 className="section-title">
              我们能承接的演出
              <br />
              与典型商业场景
            </h2>
          </div>
          <div className="max-w-xl">
            <p className="body-copy text-on-surface-variant">
              无论是需要正式剪彩与点睛、品牌活动中的聚客互动，还是企业宴会中的开场与压轴节目，鑫龙堂都有成熟执行经验。
            </p>
            <p className="mt-4 text-xs font-black tracking-widest text-primary uppercase">
              基础演出服务 ¥1,500 元起，欢迎咨询定制方案
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-10 lg:grid-cols-3">
          {serviceCards.map((service, idx) => (
            <FadeIn
              key={service.title}
              delay={idx * 0.15}
              className="hover-lift overflow-hidden rounded-[2rem] bg-surface-container-low h-full"
            >
              <article className="h-full flex flex-col">
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
                <div className="p-10 flex-1 flex flex-col">
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
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
