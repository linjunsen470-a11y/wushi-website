import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import { faqSections, prepChecklist } from '@/lib/site-data';

export default function FaqPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SubpageHero
        eyebrow="预订指南"
        title={
          <>
            在咨询之前，
            <br />
            先把关心的问题看明白
          </>
        }
        description={
          <>
            如果您还在比较、还没完全确定，这一页会把报价、准备信息和执行细节说明白，
            <br className="hidden md:block" />
            帮助您更安心地迈出第一步。
          </>
        }
        chips={['报价参考', '准备信息', '执行细节', '咨询建议']}
        panel={
          <div className="space-y-5">
            <div>
              <p className="page-eyebrow text-secondary">咨询前准备</p>
              <div className="mt-4 space-y-3">
                {prepChecklist.map((item) => (
                  <div key={item} className="hero-stat bg-white/70">
                    <p className="text-sm leading-6 text-on-surface-variant">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        }
      />
      <section className="bg-surface-container-low section-space">
        <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="editorial-card h-fit">
            <span className="page-eyebrow text-secondary">咨询前准备</span>
            <h2 className="page-section-title mt-4">
              提前确认这些信息，
              <br />
              让沟通更高效
            </h2>
            <ul className="mt-6 space-y-3 text-on-surface-variant">
              {prepChecklist.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </aside>
          <div className="space-y-8">
            {faqSections.map((section, index) => (
              <section key={section.title} className="rounded-[1.75rem] bg-surface p-8">
                <div className="mb-6 flex items-center gap-4">
                  <span className="font-headline text-3xl font-black text-primary/25">0{index + 1}</span>
                  <h2 className="font-headline text-2xl font-black text-on-surface">{section.title}</h2>
                </div>
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <details key={item.question} open={itemIndex === 0} className="rounded-2xl bg-surface-container-low px-6 py-5">
                      <summary className="cursor-pointer list-none font-headline text-lg font-black text-on-surface">{item.question}</summary>
                      <p className="pt-4 leading-7 text-on-surface-variant">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
      <section className="ink-silk section-space text-white">
        <div className="shell text-center">
          <span className="page-eyebrow text-secondary-fixed">更安心地咨询</span>
          <h2 className="page-section-title mx-auto mt-4 text-white">
            了解得越清楚，沟通越高效，
            <br />
            也更容易找到真正适合您活动的方案。
          </h2>
        </div>
      </section>
      <Footer />
    </main>
  );
}
