'use client';

import { useCopy } from '@/hooks/use-copy';
import Image from 'next/image';
import { Check, Copy, MessageCircle, Tv2 } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import ContactCTA from '@/components/ContactCTA';
import { contactPanel, mediaHighlights, mediaLogos, mediaVideos } from '@/lib/site-data';
import { cn } from '@/lib/utils';

const supportIconMap = {
  douyin: Tv2,
  xhs: MessageCircle,
} as const;

export default function MediaPage() {
  const { copiedId, copyError, handleCopy } = useCopy();
  const featured = mediaVideos[0];

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen">
      <Navbar />
      <p role="status" className="sr-only">{copiedId ? '已复制平台 ID' : ''}</p>
      {copyError && <p role="alert" className="fixed inset-x-4 bottom-24 z-50 mx-auto max-w-xl rounded-xl border border-primary/20 bg-white p-4 text-sm text-primary shadow-lg">{copyError}</p>}
      <SubpageHero
        eyebrow="真实影像展示 / MEDIA"
        variant="media"
        title="演艺影像集锦"
        description="全部视频源自团队真实演出现场记录，展现动作细节与鼓乐节奏的真实质感。"
        chips={['真实实录', '视频为主', '平台补充', featured.category]}
        panel={
          <div className="space-y-6">
            <div className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-black shadow-2xl ring-1 ring-white/5">
              <Image
                src={featured.poster}
                alt="实战影像"
                placeholder="blur"
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="aspect-video w-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {mediaHighlights.slice(0, 2).map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.15rem] border border-outline-variant/30 bg-white/60 p-5 backdrop-blur-sm"
                >
                  <p className="font-headline text-base font-black tracking-tight text-on-surface">{item.title}</p>
                  <p className="mt-2 text-xs font-medium leading-relaxed text-on-surface-variant">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <section className="bg-surface py-28">
        <div className="shell">
          <div className="mb-20 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="section-eyebrow text-secondary">视频案例</span>
              <h2 className="page-section-title mt-6">
                沉浸式影像档案，
                <br />
                展示每一次高光时刻
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 text-[10px] font-black uppercase tracking-[0.15em] text-on-surface-variant">
              {mediaLogos.map((logo) => (
                <span
                  key={logo}
                  className="rounded-[0.95rem] border border-outline-variant/30 bg-surface-container-low px-5 py-2.5"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {mediaVideos.map((video) => (
              <article
                key={video.bvid}
                className="group overflow-hidden rounded-[2rem] bg-surface-container-low premium-shadow"
              >
                <div className="relative aspect-video overflow-hidden bg-black">
                    <iframe
                      title={video.title}
                      className="h-full w-full border-none transition-transform duration-700 group-hover:scale-105"
                      src={`//player.bilibili.com/player.html?bvid=${video.bvid}&page=1&high_quality=1&danmaku=0&autoplay=0`}
                      scrolling="no"
                      allowFullScreen
                      loading="lazy"
                    />
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-secondary" />
                    <p className="text-[11px] font-black uppercase italic tracking-[0.2em] text-secondary">
                      {video.category}
                    </p>
                  </div>
                  <h3 className="mt-5 font-headline text-3xl font-black leading-tight tracking-tight text-on-surface">
                    {video.title}
                  </h3>
                  <p className="body-copy mt-5 text-lg font-medium leading-relaxed text-on-surface-variant">
                    {video.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7f0] py-24">
        <div className="shell">
          <div className="mb-12 max-w-3xl">
            <span className="section-eyebrow text-secondary">官方自媒体门户</span>
            <h2 className="page-section-title mt-6">查看更多近期演出素材</h2>
            <p className="mt-5 text-lg font-medium leading-8 text-on-surface-variant">
              欢迎访问我们的抖音与小红书主页。我们会持续更新现场图文与演出实拍，帮助您了解不同场地和活动流程的实际效果。
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {contactPanel.supportChannels.map((channel) => {
              const Icon = supportIconMap[channel.id as keyof typeof supportIconMap];

              return (
                <article
                  key={channel.id}
                  className="rounded-[1.45rem] border border-[#eadcc9] bg-white px-6 py-6 shadow-[0_18px_50px_rgba(30,27,19,0.08)]"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <div className="relative h-32 w-32 shrink-0 overflow-hidden border border-[#efe3d3] bg-white p-2 shadow-sm">
                      <Image
                        src={channel.qrFocusImage ?? channel.qrImage}
                        alt={channel.label}
                        fill
                        sizes="128px"
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-[0.95rem] bg-surface-container-low text-on-surface">
                          <Icon size={18} />
                        </div>
                        <div>
                          <p className="font-headline text-xl font-black text-on-surface">{channel.label}</p>
                          <p className="mt-1 text-sm text-on-surface-variant">
                            {channel.id === 'douyin' ? '全景现场视频直击' : '高颜图文素材参考'}
                          </p>
                        </div>
                      </div>
                      <p className="mt-4 text-base leading-7 text-on-surface-variant">{channel.description}</p>
                      <p className="mt-2 text-sm leading-6 text-on-surface-variant/85">{channel.helperText}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                      <button
                        type="button"
                          onClick={() => handleCopy(channel.value, channel.id)}
                          className={cn(
                            'inline-flex items-center gap-2 rounded-[0.9rem] border px-4 py-2.5 text-[11px] font-black transition-colors',
                            copiedId === channel.id
                              ? 'border-green-200 bg-green-50 text-green-600'
                              : 'border-outline-variant/25 bg-surface-container-low text-on-surface hover:border-primary/20 hover:text-primary'
                          )}
                        >
                          {copiedId === channel.id ? <Check size={13} /> : <Copy size={13} />}
                          <span>{copiedId === channel.id ? '已复制平台 ID' : `复制${channel.label}号`}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
