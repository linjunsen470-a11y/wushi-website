'use client';

import { motion } from 'motion/react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import ContactCTA from '@/components/ContactCTA';
import { mediaHighlights, mediaLogos, mediaVideos } from '@/lib/site-data';

const subtleFadeProps = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

export default function MediaPage() {
  const featured = mediaVideos[0];
  const restVideos = mediaVideos.slice(1);

  return (
    <main className="min-h-screen">
      <Navbar />
      <SubpageHero
        eyebrow="实战影像展示 —— MEDIA"
        variant="media"
        title={
          <>
            重庆本地实战影像
            <br />
            见证专业演出质量
          </>
        }
        description={
          <>
            拒绝网络素材，还原真实表现。我们集中展示了鑫龙堂在重庆执行过的标杆案例，
            <br className="hidden md:block" />
            让您直观感受演出的节奏、专业水准以及对重要场合氛围的把控能力。
          </>
        }
        chips={['真实实录', '多场景覆盖', '现场气氛还原', featured.category]}
        panel={
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[2rem] bg-black shadow-2xl border border-white/10 ring-1 ring-white/5">
              <iframe 
                className="aspect-video w-full border-none" 
                src={`//player.bilibili.com/player.html?bvid=${featured.bvid}&page=1&high_quality=1&danmaku=0`} 
                scrolling="no" 
                allowFullScreen 
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {mediaHighlights.slice(0, 2).map((item) => (
                <div key={item.title} className="rounded-2xl bg-white/60 p-5 border border-outline-variant/30 backdrop-blur-sm">
                  <p className="font-headline text-base font-black text-on-surface tracking-tight">{item.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-on-surface-variant font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <section className="bg-surface-container-low py-32">
        <div className="shell grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div 
            {...subtleFadeProps}
            className="overflow-hidden rounded-[3rem] bg-black premium-shadow border border-white/5"
          >
            <iframe 
              className="aspect-video w-full border-none" 
              src={`//player.bilibili.com/player.html?bvid=${featured.bvid}&page=1&high_quality=1&danmaku=0`} 
              scrolling="no" 
              allowFullScreen 
            />
          </motion.div>
          <motion.div 
            {...subtleFadeProps}
            transition={{ delay: 0.2 }}
            className="editorial-card !p-12"
          >
            <span className="section-eyebrow text-secondary">重点案例实录</span>
            <h2 className="page-section-title mt-6 !text-4xl">{featured.title}</h2>
            <div className="mt-4 flex items-center gap-3">
              <span className="h-1 w-10 bg-primary" />
              <p className="text-xs uppercase tracking-[0.25em] font-black text-secondary">{featured.category}</p>
            </div>
            <p className="body-copy mt-8 text-lg text-on-surface-variant font-medium leading-relaxed">{featured.description}</p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {mediaHighlights.map((item) => (
                <div key={item.title} className="rounded-2xl bg-surface-container-low p-6 border border-outline-variant/20">
                  <h3 className="font-headline text-lg font-black text-on-surface tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-on-surface-variant font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-surface py-32">
        <div className="shell">
          <motion.div {...subtleFadeProps} className="mb-20 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="section-eyebrow text-secondary">视频库</span>
              <h2 className="page-section-title mt-6">
                不同场景下的真实演出录像，
                <br />
                见证鑫龙堂的专业交付
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 text-[10px] font-black tracking-[0.15em] text-on-surface-variant uppercase">
              {mediaLogos.map((logo) => (
                <span key={logo} className="rounded-full bg-surface-container-low px-5 py-2.5 border border-outline-variant/30">{logo}</span>
              ))}
            </div>
          </motion.div>
          <div className="grid gap-12 lg:grid-cols-2">
            {restVideos.map((video, idx) => (
              <motion.article 
                key={video.bvid} 
                {...subtleFadeProps}
                transition={{ ...subtleFadeProps.transition, delay: idx * 0.1 }}
                className="overflow-hidden rounded-[3rem] bg-surface-container-low premium-shadow group"
              >
                <div className="overflow-hidden bg-black aspect-video relative">
                  <iframe 
                    className="w-full h-full border-none transition-transform duration-700 group-hover:scale-105" 
                    src={`//player.bilibili.com/player.html?bvid=${video.bvid}&page=1&high_quality=1&danmaku=0`} 
                    scrolling="no" 
                    allowFullScreen 
                  />
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <p className="text-[11px] font-black tracking-[0.2em] text-secondary uppercase italic">{video.category}</p>
                  </div>
                  <h3 className="mt-5 font-headline text-3xl font-black text-on-surface tracking-tight leading-tight">{video.title}</h3>
                  <p className="body-copy mt-5 text-lg leading-relaxed text-on-surface-variant font-medium">{video.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
