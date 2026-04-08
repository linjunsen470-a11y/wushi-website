import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { aboutGallery, teamHighlights } from '@/lib/site-data';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <header className="relative overflow-hidden bg-surface py-20 sm:py-24">
        <div className="shell grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-secondary sm:text-xs">
              <span className="h-px w-10 bg-secondary/60" />
              关于我们
            </span>

            <div className="mt-6 space-y-6">
              <h1 className="font-headline text-[2.8rem] font-black leading-[1.02] tracking-[-0.05em] text-primary sm:text-6xl lg:text-[5.25rem]">
                传统底色，
                <br />
                现代执行。
              </h1>
              <p className="max-w-2xl text-base leading-8 text-on-surface-variant sm:text-lg">
                我们面向中国大陆商业活动市场提供舞狮演出服务，不是抽象的文化展示团队，而是长期服务开业、商演、婚礼和节庆项目的执行团队。
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ['服务导向', '以活动流程、到场观感和镜头呈现为核心。'],
                ['执行稳定', '熟悉商业开业、婚礼宴会与节庆活动节奏。'],
                ['画面意识', '兼顾现场效果与后续传播素材的完成度。'],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-[1.5rem] border border-outline-variant/20 bg-surface-container-lowest/80 px-5 py-5"
                >
                  <p className="font-headline text-base font-extrabold tracking-[-0.03em] text-on-surface">{title}</p>
                  <p className="mt-2 text-sm leading-7 text-on-surface-variant">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_28px_70px_rgba(35,24,15,0.12)]">
              <Image
                src={aboutGallery.story}
                alt="团队故事"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-x-6 bottom-6 rounded-[1.5rem] bg-black/45 px-5 py-4 text-white backdrop-blur-sm">
              <p className="text-[11px] font-semibold tracking-[0.22em] text-white/70">WUSHI TEAM</p>
              <p className="mt-2 font-headline text-xl font-extrabold tracking-[-0.04em]">把传统表演做成可交付的商业现场</p>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-surface-container-low py-20 sm:py-24">
        <div className="shell">
          <div className="mb-14 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-secondary sm:text-xs">
              <span className="h-px w-10 bg-secondary/60" />
              团队亮点
            </span>
            <h2 className="font-headline text-3xl font-black leading-[1.08] tracking-[-0.04em] text-on-surface sm:text-5xl lg:text-[3.75rem]">
              用真实项目经验，
              <br className="hidden sm:block" />
              把能力讲明白
            </h2>
            <p className="max-w-2xl text-base leading-8 text-on-surface-variant sm:text-lg">
              不靠空泛形容词，而是用排练基础、现场完成度和不同场景下的落地经验来说明团队的执行能力。
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {teamHighlights.map((item, index) => (
              <article
                key={item.title}
                className={`overflow-hidden rounded-[1.75rem] border border-outline-variant/15 bg-surface shadow-[0_18px_45px_rgba(33,25,18,0.06)] ${index === 1 ? 'md:translate-y-8' : ''}`}
              >
                <div className="relative aspect-[4/5]">
                  <Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
                </div>
                <div className="p-8">
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-secondary">TEAM 0{index + 1}</p>
                  <h3 className="mt-3 font-headline text-[1.75rem] font-black leading-[1.12] tracking-[-0.04em] text-on-surface">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-8 text-on-surface-variant">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#17120f] py-20 text-white sm:py-24">
        <div className="shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-secondary-fixed sm:text-xs">
              <span className="h-px w-10 bg-secondary-fixed/60" />
              细节质感
            </span>
            <h2 className="font-headline text-3xl font-black leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.6rem]">
              狮头工艺、舞台表现与画面质感，
              <br className="hidden sm:block" />
              同样重要
            </h2>
            <p className="text-base leading-8 text-white/68 sm:text-lg">
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
