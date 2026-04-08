import Image from 'next/image';
import { CheckCircle2, MapPin, Users, Calendar, Award } from 'lucide-react';
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
      <section className="bg-surface section-space">
        <div className="shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <span className="page-eyebrow text-secondary">案例说明</span>
            <h2 className="page-section-title">
              用真实项目，
              <br />
              帮助判断是否适合自己的活动
            </h2>
            <p className="body-copy text-on-surface-variant">
              从场地类型、现场气氛到节目强度，真实案例能更直观地告诉您最终效果，
              <br className="hidden md:block" />
              而不是只靠想象。
            </p>
          </div>
          <div className="grid gap-4 rounded-[2.5rem] bg-surface-container-low p-8 md:p-10 lg:grid-cols-2">
            {featured.metrics.map((metric) => (
              <div key={metric} className="group flex items-start gap-4 rounded-[1.8rem] bg-surface p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <CheckCircle2 size={20} />
                </div>
                <p className="text-[0.95rem] font-medium leading-[1.6] text-on-surface-variant">
                  {metric}
                </p>
              </div>
            ))}
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
