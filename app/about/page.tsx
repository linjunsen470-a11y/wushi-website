import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { aboutGallery, teamHighlights } from '@/lib/site-data';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <header className="relative overflow-hidden bg-surface py-24">
        <div className="shell grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <span className="section-eyebrow">关于我们</span>
            <h1 className="display-title text-primary leading-[0.92]">
              传统底色
              <br />
              现代执行
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-on-surface-variant">
              我们面向中国大陆商业活动市场提供舞狮演出服务，不是抽象的文化展示团队，而是长期服务开业、商演、婚礼和节庆项目的执行团队。
            </p>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image src={aboutGallery.story} alt="团队故事" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </header>

      <section className="bg-surface-container-low py-24">
        <div className="shell">
          <div className="mb-14 max-w-3xl">
            <span className="section-eyebrow">团队亮点</span>
            <h2 className="section-title">用真实项目经验证明能力</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {teamHighlights.map((item, index) => (
              <article key={item.title} className={`overflow-hidden rounded-[1.75rem] bg-surface ${index === 1 ? 'md:translate-y-10' : ''}`}>
                <div className="relative aspect-[4/5]">
                  <Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="font-headline text-2xl font-black text-on-surface">{item.title}</h3>
                  <p className="mt-4 leading-7 text-on-surface-variant">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#17120f] py-24 text-white">
        <div className="shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="section-eyebrow text-secondary-fixed">细节质感</span>
            <h2 className="section-title text-white">狮头工艺、舞台表现和画面质感同样重要</h2>
            <p className="mt-6 leading-8 text-white/68">
              客户真正会记住的，不只是热闹感，还有质感。包括狮头细节、动作力度、舞台配合和最终留下的镜头效果。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[240px] overflow-hidden rounded-[1.5rem] md:min-h-[420px]">
              <Image src={aboutGallery.materialA} alt="狮头细节" fill sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover" />
            </div>
            <div className="grid gap-6">
              <div className="relative min-h-[200px] overflow-hidden rounded-[1.5rem]">
                <Image src={aboutGallery.materialB} alt="高桩表演" fill sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover" />
              </div>
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="relative min-h-[180px] overflow-hidden rounded-[1.25rem]">
                  <Image src={aboutGallery.portraitA} alt="近景图一" fill sizes="(min-width: 1024px) 10vw, 100vw" className="object-cover" />
                </div>
                <div className="relative min-h-[180px] overflow-hidden rounded-[1.25rem]">
                  <Image src={aboutGallery.portraitB} alt="近景图二" fill sizes="(min-width: 1024px) 10vw, 100vw" className="object-cover" />
                </div>
                <div className="relative min-h-[180px] overflow-hidden rounded-[1.25rem]">
                  <Image src={aboutGallery.portraitC} alt="近景图三" fill sizes="(min-width: 1024px) 10vw, 100vw" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
