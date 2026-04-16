'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Check, Copy, MessageCircle, Tv2 } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import ContactCTA from '@/components/ContactCTA';
import { contactPanel, mediaHighlights, mediaLogos, mediaVideos } from '@/lib/site-data';
import { cn } from '@/lib/utils';

const subtleFadeProps = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

const supportIconMap = {
  douyin: Tv2,
  xhs: MessageCircle,
} as const;

export default function MediaPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const featured = mediaVideos[0];

  const handleCopy = (value: string, key: string) => {
    navigator.clipboard.writeText(value);
    setCopiedId(key);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <SubpageHero
        eyebrow="真实影像展示 / MEDIA"
        variant="media"
        title={
          <>
            重庆本地商演实录，
            <br />
            见证实战交付水准
          </>
        }
        description={
          <>
            所有视频均为鑫龙堂团队的真实演出记录，绝不套用任何网络样片。
            <br className="hidden md:block" />
            通过高清视频，您可以直观感受活动现场的热烈氛围与完美的镜头视觉张力。
          </>
        }
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
          <motion.div {...subtleFadeProps} className="mb-20 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
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
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2">
            {mediaVideos.map((video, idx) => (
              <motion.article
                key={video.bvid}
                {...subtleFadeProps}
                transition={{ ...subtleFadeProps.transition, delay: idx * 0.1 }}
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
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7f0] py-24">
        <div className="shell">
          <motion.div {...subtleFadeProps} className="mb-12 max-w-3xl">
            <span className="section-eyebrow text-secondary">官方自媒体门户</span>
            <h2 className="page-section-title mt-6">随时解锁海量现场最新素材</h2>
            <p className="mt-5 text-lg font-medium leading-8 text-on-surface-variant">
              欢迎访问我们的抖音与小红书官方主页。我们将持续更新未加修饰的高清图文及现场实拍，为您策划完美活动提供最具参考价值的创意与灵感。
            </p>
          </motion.div>

          <div className="grid gap-5 lg:grid-cols-2">
            {contactPanel.supportChannels.map((channel, idx) => {
              const Icon = supportIconMap[channel.id as keyof typeof supportIconMap];

              return (
                <motion.article
                  key={channel.id}
                  {...subtleFadeProps}
                  transition={{ ...subtleFadeProps.transition, delay: idx * 0.08 }}
                  className="rounded-[1.45rem] border border-[#eadcc9] bg-white px-6 py-6 shadow-[0_18px_50px_rgba(30,27,19,0.08)]"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-[1rem] border border-[#efe3d3] bg-white p-2 shadow-sm">
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
                </motion.article>
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
