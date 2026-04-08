import Image from 'next/image';
import { Sparkles, Maximize, Video, MapPin, Users, Calendar, Award } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import { caseStudies, stats } from '@/lib/site-data';

export default function CasesPage() {
  const featured = caseStudies[0];
  const restCases = caseStudies.slice(1);

  return (
    <main className="min-h-screen">
      <Navbar />
      <SubpageHero
        eyebrow="真实案例"
        variant="full"
        bgImage={featured.image}
        title={featured.title}
        description={
          <>
            每一个案例都来自真实活动现场。
            <br className="hidden md:block" />
            您可以直接看到不同场景下的呈现方式、气氛效果和落地能力。
          </>
        }
        chips={[featured.category, featured.client, featured.location]}
        actions={
          <div className="grid grid-cols-2 gap-6 border-l border-white/20 pl-8 md:grid-cols-4">
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">客户类型</p>
              <p className="font-headline text-sm font-extrabold text-white">{featured.client}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">活动地点</p>
              <p className="font-headline text-sm font-extrabold text-white">{featured.location}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">项目年份</p>
              <p className="font-headline text-sm font-extrabold text-white">{featured.date}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">项目类型</p>
              <p className="font-headline text-sm font-extrabold text-white">{featured.category}</p>
            </div>
          </div>
        }
      />
      <section className="bg-surface section-space overflow-hidden">
        <div className="shell grid gap-16 lg:grid-cols-[1fr_1fr] items-center">
          <div className="space-y-8">
            <span className="page-eyebrow text-secondary">项目解析</span>
            <h2 className="page-section-title">
              用实地项目交付，
              <br />
              让最终呈现效果有据可依
            </h2>
            <p className="body-copy text-on-surface-variant leading-loose">
              我们深知每一个活动的独特性。通过对过往案例的复盘与归纳，您可以从空间利用率、视觉冲击力及流程配合度等多个维度，精准预估演出的实地效果，从而降低沟通成本与执行风险。
            </p>
          </div>
          
          <div className="relative flex flex-col gap-6 md:gap-8 lg:pl-12">
            {[
              { text: featured.metrics[0], icon: Sparkles, offset: 'lg:translate-x-0' },
              { text: featured.metrics[1], icon: Maximize, offset: 'lg:translate-x-16' },
              { text: featured.metrics[2], icon: Video, offset: 'lg:translate-x-8' },
            ].map((metric, idx) => (
              <div 
                key={idx} 
                className={`editorial-card hover-lift flex items-center gap-6 group transition-all duration-500 ${metric.offset} max-w-md w-full`}
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-secondary/5 text-secondary ring-1 ring-secondary/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white group-hover:ring-secondary">
                  <metric.icon size={26} strokeWidth={1.5} />
                </div>
                <p className="font-headline text-[1.1rem] font-extrabold tracking-tight text-on-surface">
                  {metric.text}
                </p>
              </div>
            ))}
            
            {/* Background Decorative Element */}
            <div className="absolute -left-8 top-12 bottom-12 hidden w-px bg-gradient-to-b from-transparent via-secondary/30 to-transparent lg:block" />
          </div>
        </div>
      </section>
      <section className="bg-surface-container-low section-space">
        <div className="shell">
          <div className="mb-12 max-w-3xl">
            <span className="page-eyebrow text-secondary">更多案例</span>
            <h2 className="page-section-title mt-4">不同场景下的真实落地效果</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {restCases.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[1.75rem] bg-surface">
                <div className="relative aspect-[4/3]">
                  <Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
                </div>
                <div className="p-8">
                  <p className="page-eyebrow text-secondary">{item.category}</p>
                  <h3 className="mt-4 font-headline text-2xl font-black text-on-surface">{item.title}</h3>
                  <p className="body-copy mt-4 leading-7 text-on-surface-variant">{item.description}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {item.metrics.map((metric) => (
                      <span key={metric} className="rounded-full bg-surface-container-high px-4 py-2 text-xs font-headline font-black tracking-[0.12em] text-on-surface-variant">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="ink-silk section-space text-white">
        <div className="shell grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[1.5rem] border border-white/12 bg-white/6 p-8 text-center">
              <div className="font-headline text-5xl font-black text-secondary-fixed">{stat.value}</div>
              <div className="mt-3 text-sm tracking-[0.18em] text-white/75">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
