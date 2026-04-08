import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import { solutionPlaybooks } from '@/lib/site-data';

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SubpageHero
        eyebrow="场景方案"
        title={
          <>
            不同活动场景，
            <br />
            适合不同演出方式
          </>
        }
        description={
          <>
            如果您已经知道活动类型，但还不确定该怎么安排舞狮，
            <br className="hidden md:block" />
            这一页可以帮您更快找到合适方向。
          </>
        }
        chips={['商场开业', '品牌活动', '婚礼宴会', '节庆活动']}
        panel={
          <div className="space-y-4">
            <div>
              <p className="page-eyebrow text-secondary">四类常见场景</p>
              <div className="mt-4 grid gap-3">
                {solutionPlaybooks.map((playbook, index) => (
                  <div key={playbook.title} className="rounded-[1.3rem] border border-[#e4d5c1] bg-white/70 px-5 py-4">
                    <div className="flex items-start justify-between gap-4">
                      <p className="font-headline text-lg font-black text-on-surface">{playbook.title}</p>
                      <span className="font-headline text-sm font-black text-primary/35">0{index + 1}</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-on-surface-variant">{playbook.fit[0]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        }
      />
      <section className="bg-surface-container-low section-space">
        <div className="shell space-y-16">
          {solutionPlaybooks.map((playbook, index) => (
            <article key={playbook.title} className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                  <Image src={playbook.image} alt={playbook.title} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="page-eyebrow text-secondary">Scene Guide</span>
                <h2 className="page-section-title mt-4">{playbook.title}</h2>
                <p className="body-copy mt-5 !text-lg !leading-[1.75] text-on-surface-variant">
                  {playbook.summary}
                </p>
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <div className="rounded-[1.5rem] bg-surface p-6">
                    <h3 className="font-headline text-lg font-black text-on-surface">适合什么情况？</h3>
                    <ul className="mt-4 space-y-2 text-sm leading-6 text-on-surface-variant">
                      {playbook.fit.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-[1.5rem] bg-surface p-6">
                    <h3 className="font-headline text-lg font-black text-on-surface">通常包含什么？</h3>
                    <ul className="mt-4 space-y-2 text-sm leading-6 text-on-surface-variant">
                      {playbook.deliverables.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-surface section-space">
        <div className="shell text-center">
          <span className="page-eyebrow text-secondary">快速判断</span>
          <h2 className="page-section-title mx-auto mt-4">
            选对形式，比单纯“有舞狮”更重要。
            <br />
            适合的方案，才能真正让活动效果更好。
          </h2>
        </div>
      </section>
      <Footer />
    </main>
  );
}
