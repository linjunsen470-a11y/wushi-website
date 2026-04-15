'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, X, Tv2, Smartphone, Copy, Check } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { contactPanel } from '@/lib/site-data';

type SocialTab = 'wechat' | 'douyin' | 'xhs';

export default function FloatingContact() {
  const [showPopup, setShowPopup] = useState(false);
  const [activeTab, setActiveTab] = useState<SocialTab>('wechat');
  const [copied, setCopied] = useState(false);

  const tabs = [
    { id: 'wechat' as SocialTab, label: '微信', icon: MessageCircle, color: 'text-green-600' },
    { id: 'douyin' as SocialTab, label: '抖音', icon: Tv2, color: 'text-zinc-900' },
    { id: 'xhs' as SocialTab, label: '小红书', icon: Smartphone, color: 'text-red-600' },
  ];

  const handleCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4 md:bottom-12 md:right-12">
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="mb-2 w-72 overflow-hidden rounded-[2.5rem] border border-[#eadcc9] bg-white p-6 shadow-[0_32px_80px_rgba(30,27,19,0.2)] backdrop-blur-xl"
          >
            <div className="flex items-center justify-between mb-5 px-1">
              <span className="font-headline text-xs font-black tracking-[0.2em] text-[#221c16] uppercase">各平台咨询</span>
              <button 
                onClick={() => setShowPopup(false)}
                className="text-on-surface-variant/40 hover:text-primary transition-colors p-1"
                aria-label="关闭"
              >
                <X size={16} />
              </button>
            </div>

            <div className="flex gap-1 mb-5 p-1 bg-surface-container-low rounded-2xl border border-outline-variant/10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setCopied(false);
                  }}
                  className={cn(
                    'flex-1 flex flex-col items-center gap-1.5 py-2.5 rounded-xl transition-all h-[52px]',
                    activeTab === tab.id 
                      ? 'bg-white shadow-sm border border-outline-variant/20 text-primary' 
                      : 'text-on-surface-variant/60 hover:text-on-surface hover:bg-white/50'
                  )}
                >
                  <tab.icon size={16} />
                  <span className="text-[10px] font-black">{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-outline-variant/10 shadow-inner bg-surface-container-highest">
              <AnimatePresence mode="wait">
                {activeTab === 'wechat' && (
                  <motion.div
                    key="wechat"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative w-full h-full p-2 bg-white"
                  >
                    <Image src={contactPanel.wechatQr} alt="微信二维码" fill sizes="288px" className="object-contain p-2" />
                  </motion.div>
                )}
                {activeTab === 'douyin' && (
                   <motion.div
                    key="douyin"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative w-full h-full p-2 bg-zinc-900"
                  >
                    <Image src={contactPanel.douyinQr} alt="抖音二维码" fill sizes="288px" className="object-contain" />
                  </motion.div>
                )}
                {activeTab === 'xhs' && (
                  <motion.div
                    key="xhs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative w-full h-full p-2 bg-white"
                  >
                    <Image src={contactPanel.xhsQr} alt="小红书二维码" fill sizes="288px" className="object-contain" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-5 space-y-4">
              <p className="text-center text-[11px] font-bold text-on-surface-variant leading-relaxed px-2">
                {activeTab === 'wechat' && <>扫码加我微信<br />实时报价与方案</>}
                {activeTab === 'douyin' && <>扫码关注或复制 ID 搜索<br />观看最新实战影像</>}
                {activeTab === 'xhs' && <>扫码加好友或复制 ID 搜索<br />获取更多案例图</>}
              </p>

              {(activeTab === 'douyin' || activeTab === 'xhs') && (
                <button
                  onClick={() => handleCopy(activeTab === 'douyin' ? contactPanel.douyinId : contactPanel.xhsId)}
                  className={cn(
                    "w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border transition-all text-[11px] font-bold",
                    copied 
                      ? "bg-green-50 border-green-200 text-green-600" 
                      : "bg-surface-container-low border-outline-variant/20 text-on-surface hover:bg-surface-container-high"
                  )}
                >
                  {copied ? (
                    <>
                      <Check size={14} />
                      <span>已复制平台 ID</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>复制 {activeTab === 'douyin' ? '抖音' : '小红书'}号: {activeTab === 'douyin' ? contactPanel.douyinId : contactPanel.xhsId}</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col gap-3.5">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowPopup(!showPopup)}
          className={cn(
            'group relative flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-300 shadow-lg',
            showPopup 
              ? 'bg-primary border-primary text-white' 
              : 'bg-white/90 border-primary/20 text-primary backdrop-blur-md hover:bg-primary hover:text-white hover:border-primary'
          )}
          aria-label="查看二维码"
        >
          <MessageCircle size={24} />
          <span className="absolute right-full mr-5 whitespace-nowrap rounded-lg bg-surface-container-highest px-4 py-2 text-xs font-black tracking-widest text-on-surface opacity-0 transition-opacity group-hover:opacity-100 hidden md:block border border-outline-variant/40 shadow-xl">
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
          <span className="absolute right-full mr-5 whitespace-nowrap rounded-lg bg-surface-container-highest px-4 py-2 text-xs font-black tracking-widest text-on-surface opacity-0 transition-opacity group-hover:opacity-100 hidden md:block border border-outline-variant/40 shadow-xl">
            热线: {contactPanel.phone}
          </span>
        </motion.a>
      </div>
    </div>
  );
}
