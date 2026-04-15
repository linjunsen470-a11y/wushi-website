'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Copy, MessageCircle, Phone, Tv2, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { contactPanel } from '@/lib/site-data';

const supportIconMap = {
  douyin: Tv2,
  xhs: MessageCircle,
} as const;

export default function FloatingContact() {
  const [showPopup, setShowPopup] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, key: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(key);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const phoneChannel = contactPanel.primaryChannels.find((channel) => channel.id === 'phone');
  const wechatChannel = contactPanel.primaryChannels.find((channel) => channel.id === 'wechat');

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4 md:bottom-12 md:right-12">
      <AnimatePresence>
        {showPopup && phoneChannel && wechatChannel?.qrImage ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            className="mb-2 w-[22rem] overflow-hidden rounded-[1.6rem] border border-[#eadcc9] bg-white p-5 shadow-[0_32px_80px_rgba(30,27,19,0.2)]"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="font-headline text-xs font-black tracking-[0.18em] text-primary">快速咨询</p>
                <h3 className="mt-2 font-headline text-xl font-black text-on-surface">先确认档期，再聊配置</h3>
                <p className="mt-2 text-sm leading-6 text-on-surface-variant">{contactPanel.responseTime}</p>
              </div>
              <button
                onClick={() => setShowPopup(false)}
                className="rounded-[0.9rem] p-2 text-on-surface-variant/50 transition-colors hover:bg-surface-container-low hover:text-primary"
                aria-label="关闭咨询弹层"
              >
                <X size={16} />
              </button>
            </div>

            <div className="grid gap-3">
              <a
                href={phoneChannel.href}
                className="rounded-[1.1rem] bg-primary px-4 py-4 text-white transition-transform hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[0.9rem] bg-white/16">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] font-black tracking-[0.18em] text-white/65">{phoneChannel.label}</p>
                    <p className="mt-1 font-headline text-lg font-black">{phoneChannel.value}</p>
                  </div>
                </div>
              </a>

              <div className="rounded-[1.1rem] border border-outline-variant/20 bg-surface-container-low px-4 py-4">
                <div className="flex items-start gap-4">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[0.9rem] border border-white bg-white p-2">
                    <Image src={wechatChannel.qrImage} alt="微信二维码" fill sizes="96px" className="object-contain p-1" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-black tracking-[0.18em] text-on-surface/45">{wechatChannel.label}</p>
                    <p className="mt-1 font-headline text-lg font-black text-on-surface">{wechatChannel.value}</p>
                    <p className="mt-2 text-sm leading-6 text-on-surface-variant">{wechatChannel.description}</p>
                    <button
                      onClick={() => handleCopy(wechatChannel.value, wechatChannel.id)}
                      className={cn(
                        'mt-3 inline-flex items-center gap-2 rounded-[0.9rem] border px-3 py-2 text-[11px] font-black transition-colors',
                        copiedId === wechatChannel.id
                          ? 'border-green-200 bg-green-50 text-green-600'
                          : 'border-outline-variant/30 bg-white text-on-surface hover:border-primary/30 hover:text-primary'
                      )}
                    >
                      {copiedId === wechatChannel.id ? <Check size={12} /> : <Copy size={12} />}
                      <span>{copiedId === wechatChannel.id ? '已复制微信号' : '复制微信号'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 border-t border-outline-variant/20 pt-5">
              <div className="mb-3 flex items-center justify-between">
                <p className="font-headline text-xs font-black tracking-[0.16em] text-on-surface/55">先看真实案例</p>
                <p className="text-[11px] font-bold text-on-surface-variant">辅助入口</p>
              </div>
              <div className="grid gap-3">
                {contactPanel.supportChannels.map((channel) => {
                  const Icon = supportIconMap[channel.id as keyof typeof supportIconMap];

                  return (
                    <div
                      key={channel.id}
                      className="rounded-[1rem] border border-outline-variant/20 bg-white px-4 py-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.9rem] bg-surface-container-low text-on-surface">
                          <Icon size={16} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="font-headline text-sm font-black text-on-surface">{channel.label}</p>
                              <p className="mt-1 text-sm leading-6 text-on-surface-variant">{channel.description}</p>
                            </div>
                            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[0.85rem] border border-outline-variant/15 bg-white p-1.5">
                              <Image src={channel.qrImage} alt={`${channel.label}二维码`} fill sizes="56px" className="object-contain" />
                            </div>
                          </div>
                          <button
                            onClick={() => handleCopy(channel.value, channel.id)}
                            className={cn(
                              'mt-3 inline-flex items-center gap-2 rounded-[0.9rem] border px-3 py-2 text-[11px] font-black transition-colors',
                              copiedId === channel.id
                                ? 'border-green-200 bg-green-50 text-green-600'
                                : 'border-outline-variant/25 bg-surface-container-low text-on-surface hover:border-primary/20 hover:text-primary'
                            )}
                          >
                            {copiedId === channel.id ? <Check size={12} /> : <Copy size={12} />}
                            <span>{copiedId === channel.id ? '已复制平台 ID' : `复制 ${channel.label}号 ${channel.value}`}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="flex flex-col gap-3.5">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowPopup((value) => !value)}
          className={cn(
            'group relative flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-300 shadow-lg',
            showPopup
              ? 'border-primary bg-primary text-white'
              : 'border-primary/20 bg-white/90 text-primary backdrop-blur-md hover:border-primary hover:bg-primary hover:text-white'
          )}
          aria-label="查看二维码"
        >
          <MessageCircle size={24} />
          <span className="absolute right-full mr-5 hidden whitespace-nowrap rounded-lg border border-outline-variant/40 bg-surface-container-highest px-4 py-2 text-xs font-black tracking-widest text-on-surface opacity-0 shadow-xl transition-opacity group-hover:opacity-100 md:block">
            咨询与关注
          </span>
        </motion.button>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={`tel:${contactPanel.phone.replace(/\s+/g, '')}`}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-[0_15px_35px_rgba(163,0,17,0.3)] transition-transform hover:bg-primary-container"
          aria-label="直接拨打电话"
        >
          <Phone size={24} />
          <span className="absolute right-full mr-5 hidden whitespace-nowrap rounded-lg border border-outline-variant/40 bg-surface-container-highest px-4 py-2 text-xs font-black tracking-widest text-on-surface opacity-0 shadow-xl transition-opacity group-hover:opacity-100 md:block">
            热线: {contactPanel.phone}
          </span>
        </motion.a>
      </div>
    </div>
  );
}
