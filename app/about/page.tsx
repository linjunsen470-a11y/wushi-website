import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { aboutGallery, teamHighlights } from '@/lib/site-data';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <header className="relative overflow-hidden bg-surface section-space">
        <div className="shell grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-secondary sm:text-xs">
              <span className="h-px w-10 bg-secondary/60" />
              关于我们
            </span>
            <div className="mt-6 space-y-6">
              <h1 className="page-hero-title text-primary">
                传统底色，
                <br />
                真实演出实力
              </h1>
              <p className="page-lead text-on-surface-variant">
                我们长期服务开业庆典、商演活动、婚礼宴会和节庆项目。
                <br className="hidden md:block" />
                您得到的不只是一次表演，而是一支更懂现场节奏、活动配合与观众感受的专业团队。
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ['更懂现场', '知道什么时间点最该出效果，什么环节最需要配合。'],
                ['更重完成度', '兼顾气氛、节奏、仪式感和整体观感。'],
                ['更有说服力', '真实案例、真实图片、真实视频，所见即所得。'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[1.5rem] border border-outline-variant/20 bg-surface-container-lowest/80 px-5 py-5">
                  <p className="font-headline text-base font-extrabold tracking-[-0.03em] text-on-surface">{title}</p>
                  <p className="mt-2 text-sm leading-7 text-on-surface-variant">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_28px_70px_rgba(35,24,15,0.12)]">
              <Image src={aboutGallery.story} alt="舞狮团队演出现场" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute inset-x-6 bottom-6 rounded-[1.5rem] bg-black/45 px-5 py-4 text-white backdrop-blur-sm">
              <p className="text-[11px] font-semibold tracking-[0.22em] text-white/70">WUSHI TEAM</p>
              <p className="mt-2 font-headline text-xl font-extrabold tracking-[-0.04em]">把每一次重要亮相，做成更值得被记住的现场</p>
            </div>
          </div>
        </div>
      </header>
      <section className="bg-surface-container-low section-space">
        <div className="shell">
          <div className="section-intro max-w-3xl section-stack">
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-secondary sm:text-xs">
              <span className="h-px w-10 bg-secondary/60" />
              团队亮点
            </span>
            <h2 className="page-section-title !text-on-surface">
              让您放心选择的，
              <br className="hidden sm:block" />
              是实打实的项目经验
            </h2>
            <p className="body-copy text-on-surface-variant">
              无论是正式开业、宴会舞台还是节庆活动，我们更关注最终结果是否足够出彩，
              <br className="hidden md:block" />
              是否真的能帮您的活动加分。
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {teamHighlights.map((item, index) => (
              <article key={item.title} className={`overflow-hidden rounded-[1.75rem] border border-outline-variant/15 bg-surface shadow-[0_18px_45px_rgba(33,25,18,0.06)] ${index === 1 ? 'md:translate-y-8' : ''}`}>
                <div className="relative aspect-[4/5]">
                  <Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
                </div>
                <div className="p-8">
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-secondary">TEAM 0{index + 1}</p>
                  <h3 className="mt-3 font-headline text-[1.75rem] font-black leading-[1.12] tracking-[-0.04em] text-on-surface">{item.title}</h3>
                  <p className="mt-4 text-[15px] leading-8 text-on-surface-variant">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#17120f] section-space text-white">
        <div className="shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-secondary-fixed sm:text-xs">
              <span className="h-px w-10 bg-secondary-fixed/60" />
              细节质感
            </span>
            <h2 className="page-section-title !text-white">
              看得见的细节，
              <br className="hidden sm:block" />
              才能撑起现场的高级感
            </h2>
            <p className="page-lead !text-white/68">
              客户和观众真正记住的，不只是热闹，
              <br className="hidden md:block" />
              还有动作的干净利落、狮头的质感、舞台上的气势，
              <br className="hidden md:block" />
              以及最终留下的照片和视频效果。
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
