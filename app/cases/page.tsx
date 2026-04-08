import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { caseStudies, stats } from '@/lib/site-data';

export default function CasesPage() {
  const featured = caseStudies[0];
  const restCases = caseStudies.slice(1);

  return (
    <main className="min-h-screen">
      <Navbar />

      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={featured.image} alt={featured.title} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,18,15,0.25)_0%,rgba(23,18,15,0.78)_85%)]" />
        </div>
        <div className="shell relative flex min-h-[70vh] items-end py-20">
          <div className="max-w-4xl text-white">
            <span className="section-eyebrow text-secondary-fixed">案例展示</span>
            <h1 className="display-title leading-[0.92]">{featured.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">{featured.description}</p>
          </div>
        </div>
      </header>

      <section className="bg-surface py-24">
        <div className="shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <span className="section-eyebrow">案例说明</span>
            <h2 className="section-title">用案例说明项目适配能力</h2>
            <p className="leading-8 text-on-surface-variant">
              案例页不仅展示图片，还帮助客户快速判断项目场景、节目强度、舞台适配和视觉传播效果是否符合自己的需求。
            </p>
          </div>
          <div className="grid gap-4 rounded-[1.75rem] bg-surface-container-low p-8 sm:grid-cols-2">
            <div>
              <p className="font-headline text-xs font-black tracking-[0.24em] text-secondary">客户类型</p>
              <p className="mt-2 text-lg font-semibold text-on-surface">{featured.client}</p>
            </div>
            <div>
              <p className="font-headline text-xs font-black tracking-[0.24em] text-secondary">活动地点</p>
              <p className="mt-2 text-lg font-semibold text-on-surface">{featured.location}</p>
            </div>
            <div>
              <p className="font-headline text-xs font-black tracking-[0.24em] text-secondary">年份</p>
              <p className="mt-2 text-lg font-semibold text-on-surface">{featured.date}</p>
            </div>
            <div>
              <p className="font-headline text-xs font-black tracking-[0.24em] text-secondary">项目类型</p>
              <p className="mt-2 text-lg font-semibold text-on-surface">{featured.category}</p>
            </div>
            {featured.metrics.map((metric) => (
              <div key={metric} className="sm:col-span-2">
                <p className="text-on-surface-variant">• {metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24">
        <div className="shell">
          <div className="mb-12 max-w-3xl">
            <span className="section-eyebrow">更多项目</span>
            <h2 className="section-title">不同场景下的落地案例</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {restCases.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[1.75rem] bg-surface">
                <div className="relative aspect-[4/3]">
                  <Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
                </div>
                <div className="p-8">
                  <p className="text-sm tracking-[0.22em] text-secondary">{item.category}</p>
                  <h3 className="mt-3 font-headline text-2xl font-black text-on-surface">{item.title}</h3>
                  <p className="mt-4 leading-7 text-on-surface-variant">{item.description}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {item.metrics.map((metric) => (
                      <span key={metric} className="rounded-full bg-surface-container-high px-4 py-2 text-xs font-headline font-black tracking-[0.18em] text-on-surface-variant">
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

      <section className="ink-silk py-24 text-white">
        <div className="shell grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[1.5rem] border border-white/12 bg-white/6 p-8 text-center">
              <div className="font-headline text-5xl font-black text-secondary-fixed">{stat.value}</div>
              <div className="mt-3 text-sm tracking-[0.22em] text-white/75">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
