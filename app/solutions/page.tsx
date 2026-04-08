import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { solutionPlaybooks } from '@/lib/site-data';

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <header className="bg-surface py-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="section-eyebrow">场景方案</span>
            <h1 className="display-title text-primary leading-[0.92]">
              按活动场景
              <br />
              而不是按节目名词来卖
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-on-surface-variant">
            这页是专门给甲方看的。客户通常不会先问“你们有几种舞狮”，而是会先问“我的商场开业、婚礼宴会、品牌活动，到底适不适合做、该怎么做”。
          </p>
        </div>
      </header>

      <section className="bg-surface-container-low py-24">
        <div className="shell space-y-16">
          {solutionPlaybooks.map((playbook, index) => (
            <article key={playbook.title} className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                  <Image src={playbook.image} alt={playbook.title} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="section-eyebrow">Solution Playbook</span>
                <h2 className="section-title text-3xl">{playbook.title}</h2>
                <p className="mt-5 text-lg leading-8 text-on-surface-variant">{playbook.summary}</p>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <div className="rounded-[1.5rem] bg-surface p-6">
                    <h3 className="font-headline text-lg font-black text-on-surface">适合什么场景</h3>
                    <ul className="mt-4 space-y-2 text-sm leading-6 text-on-surface-variant">
                      {playbook.fit.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-[1.5rem] bg-surface p-6">
                    <h3 className="font-headline text-lg font-black text-on-surface">常见交付内容</h3>
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

      <section className="bg-surface py-24">
        <div className="shell text-center">
          <span className="section-eyebrow">为什么这页重要</span>
          <h2 className="mx-auto max-w-4xl section-title">
            它让客户更快判断“这是不是适合我的活动”，比抽象服务介绍更容易转化。
          </h2>
        </div>
      </section>

      <Footer />
    </main>
  );
}
