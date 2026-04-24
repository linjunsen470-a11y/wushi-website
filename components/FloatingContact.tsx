'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Copy, MessageCircle, Phone, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { contactPanel } from '@/lib/site-data';

export default function FloatingContact() {
  const [showPopup, setShowPopup] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const phoneChannel = contactPanel.primaryChannels.find((channel) => channel.id === 'phone');
  const wechatChannel = contactPanel.primaryChannels.find((channel) => channel.id === 'wechat');
  const wechatQrImage = wechatChannel?.qrFocusImage ?? wechatChannel?.qrImage;

  const handleCopy = (value: string, key: string) => {
    navigator.clipboard.writeText(value);
    setCopiedId(key);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed bottom-8 right-5 z-[100] md:bottom-10 md:right-10">
      <div className="flex flex-col items-end gap-3">
        <div className="flex flex-col gap-3 md:hidden">
          <Link
            href="/contact"
            className="flex h-14 w-14 items-center justify-center rounded-[1.05rem] bg-primary text-white shadow-[0_18px_36px_rgba(163,0,17,0.28)] transition-colors hover:bg-primary-container"
            aria-label="前往联系页"
          >
            <MessageCircle size={22} />
          </Link>
        </div>

        <div className="hidden flex-col gap-3 md:flex">
          <AnimatePresence>
            {showPopup && phoneChannel && wechatChannel && wechatQrImage ? (
              <motion.div
                initial={{ opacity: 0, x: 18, y: 8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 18, y: 8 }}
                className="mb-1 w-[18.5rem] overflow-hidden rounded-[1.35rem] border border-[#eadcc9] bg-white p-4 shadow-[0_26px_64px_rgba(30,27,19,0.22)]"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="font-headline text-xs font-black tracking-[0.16em] text-primary">快速咨询</p>
                    <h3 className="mt-2 font-headline text-lg font-black text-on-surface">先电话或微信确认</h3>
                    <p className="mt-2 text-sm leading-6 text-on-surface-variant">{contactPanel.responseTime}</p>
                  </div>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="rounded-[0.8rem] p-2 text-on-surface-variant/60 transition-colors hover:bg-surface-container-low hover:text-primary"
                    aria-label="关闭咨询浮层"
                  >
                    <X size={16} />
                  </button>
                </div>

                <a
                  href={phoneChannel.href}
                  className="block rounded-[1rem] bg-primary px-4 py-4 text-white transition-transform hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-[0.85rem] bg-white/16">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] font-black tracking-[0.16em] text-white/65">{phoneChannel.label}</p>
                      <p className="mt-1 font-headline text-lg font-black">{phoneChannel.value}</p>
                    </div>
                  </div>
                </a>

                <div className="mt-3 rounded-[1rem] border border-outline-variant/20 bg-surface-container-low p-4">
                  <div className="flex items-start gap-3">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden border border-white bg-white p-1.5">
                      <Image src={wechatQrImage} alt={contactPanel.primaryChannels[1].qrAlt || '微信二维码'} fill sizes="80px" className="object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-black tracking-[0.16em] text-on-surface/45">{wechatChannel.label}</p>
                      <p className="mt-1 font-headline text-lg font-black text-on-surface">{wechatChannel.value}</p>
                      <p className="mt-2 text-sm leading-6 text-on-surface-variant">{wechatChannel.description}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <button
                      onClick={() => handleCopy(wechatChannel.value, wechatChannel.id)}
                      className={cn(
                        'inline-flex items-center gap-2 rounded-[0.85rem] border px-3 py-2 text-[11px] font-black transition-colors',
                        copiedId === wechatChannel.id
                          ? 'border-green-200 bg-green-50 text-green-600'
                          : 'border-outline-variant/30 bg-white text-on-surface hover:border-primary/30 hover:text-primary'
                      )}
                    >
                      {copiedId === wechatChannel.id ? <Check size={12} /> : <Copy size={12} />}
                      <span>{copiedId === wechatChannel.id ? '已复制微信号' : '复制微信号'}</span>
                    </button>
                    <Link
                      href="/contact"
                      className="inline-flex items-center rounded-[0.85rem] border border-outline-variant/25 px-3 py-2 text-[11px] font-black text-on-surface transition-colors hover:border-primary/25 hover:text-primary"
                    >
                      查看完整方式
                    </Link>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setShowPopup((value) => !value)}
            className={cn(
              'group relative flex h-14 w-14 items-center justify-center rounded-[1.05rem] shadow-[0_18px_36px_rgba(163,0,17,0.28)] transition-all duration-300',
              showPopup
                ? 'bg-primary-container text-white'
                : 'bg-primary text-white hover:bg-primary-container'
            )}
            aria-label="联系我们"
          >
            <MessageCircle size={22} />
            <span className="absolute right-full mr-4 hidden whitespace-nowrap rounded-lg border border-outline-variant/35 bg-surface-container-highest px-4 py-2 text-xs font-black tracking-widest text-on-surface shadow-xl opacity-0 transition-opacity group-hover:opacity-100 xl:block">
              联系我们
            </span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
