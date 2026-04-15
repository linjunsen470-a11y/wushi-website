'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import {
  AlertCircle,
  Check,
  CheckCircle2,
  Copy,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Tv2,
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { contactPanel } from '@/lib/site-data';
import { submitContactForm } from '@/app/actions/contact';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  projectType: z.string().min(1, '请选择活动类型'),
  preferredContactMethod: z.enum(['wechat', 'phone']),
  name: z.string().min(2, '请输入您的称呼'),
  contact: z.string().min(5, '请输入手机号或微信号'),
  eventDate: z.string().optional(),
  venue: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const supportIconMap = {
  douyin: Tv2,
  xhs: MessageCircle,
} as const;

export default function ContactPage() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema as any),
    defaultValues: {
      preferredContactMethod: 'wechat',
    },
  });

  const phoneChannel = contactPanel.primaryChannels.find((channel) => channel.id === 'phone');
  const wechatChannel = contactPanel.primaryChannels.find((channel) => channel.id === 'wechat');
  const wechatQrImage = wechatChannel?.qrFocusImage ?? wechatChannel?.qrImage;

  const onSubmit = async (data: FormData) => {
    setSubmitStatus('submitting');

    try {
      const result = await submitContactForm(data);

      if (result.success) {
        setSubmitStatus('success');
        reset({ preferredContactMethod: data.preferredContactMethod });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
  };

  const handleCopy = (value: string, key: string) => {
    navigator.clipboard.writeText(value);
    setCopiedId(key);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      <section className="shell py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="max-w-3xl">
              <span className="section-eyebrow text-secondary">联系我们</span>
              <h1 className="page-hero-title mt-6 text-on-surface !leading-[1.08] tracking-tight">
                获取专属您的
                <br />
                专业舞狮演出方案
              </h1>
              <p className="page-lead mt-8 font-medium leading-relaxed text-on-surface-variant">
                立足重庆，辐射西南。我们深知每场商业活动都至关重要。无论是商场开业、品牌商演还是喜宴庆典，请告诉我们您的时间、场地与大致需求，我们将第一时间为您核对档期并提供报价与执行建议。
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr]">
              {phoneChannel ? (
                <a
                  href={phoneChannel.href}
                  className="rounded-[1.45rem] bg-primary px-6 py-6 text-white shadow-[0_24px_60px_rgba(163,0,17,0.22)] transition-transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[0.95rem] bg-white/16">
                      <Phone size={22} />
                    </div>
                    <div>
                      <p className="text-[11px] font-black tracking-[0.18em] text-white/68">快速咨询</p>
                      <h2 className="mt-2 font-headline text-2xl font-black tracking-tight">{phoneChannel.label}</h2>
                      <p className="mt-2 font-headline text-3xl font-black tracking-tight">{phoneChannel.value}</p>
                      <p className="mt-3 max-w-md text-sm leading-7 text-white/80">{phoneChannel.description}</p>
                    </div>
                  </div>
                </a>
              ) : null}

              {wechatChannel && wechatQrImage ? (
                <div className="rounded-[1.45rem] border border-outline-variant/20 bg-surface-container-low px-6 py-6">
                  <div className="flex items-start gap-4">
                    <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-[1rem] border border-white bg-white p-2 shadow-sm">
                      <Image src={wechatQrImage} alt="微信二维码" fill sizes="112px" className="object-contain p-1" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-black tracking-[0.18em] text-on-surface/45">微信沟通</p>
                      <h2 className="mt-2 font-headline text-2xl font-black tracking-tight text-on-surface">
                        {wechatChannel.label}
                      </h2>
                      <p className="mt-2 font-headline text-2xl font-black tracking-tight text-on-surface">
                        {wechatChannel.value}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-on-surface-variant">{wechatChannel.description}</p>
                      <button
                        onClick={() => handleCopy(wechatChannel.value, wechatChannel.id)}
                        className={cn(
                          'mt-4 inline-flex items-center gap-2 rounded-[0.95rem] border px-4 py-2.5 text-[11px] font-black transition-colors',
                          copiedId === wechatChannel.id
                            ? 'border-green-200 bg-green-50 text-green-600'
                            : 'border-outline-variant/30 bg-white text-on-surface hover:border-primary/30 hover:text-primary'
                        )}
                      >
                        {copiedId === wechatChannel.id ? <Check size={13} /> : <Copy size={13} />}
                        <span>{copiedId === wechatChannel.id ? '已复制微信号' : '复制微信号'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="rounded-[1.45rem] border border-outline-variant/15 bg-white px-6 py-6 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div className="max-w-2xl">
                  <p className="text-[11px] font-black tracking-[0.18em] text-on-surface/45">关注各大平台</p>
                  <h2 className="mt-2 font-headline text-2xl font-black tracking-tight text-on-surface">
                    了解我们的过往案例与现场实力
                  </h2>
                  <p className="mt-3 text-base leading-8 text-on-surface-variant">
                    欢迎关注我们的抖音与小红书账号，查看更多真实演出现场的高清视频与图文记录，直观感受鑫龙堂带来的热烈氛围与专业标准。
                  </p>
                </div>

                <div className="flex items-center gap-3 rounded-[1rem] bg-surface-container-low px-4 py-3 text-sm text-on-surface-variant">
                  <MapPin size={16} className="text-primary" />
                  <span>{contactPanel.address}</span>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {contactPanel.supportChannels.map((channel) => {
                  const Icon = supportIconMap[channel.id as keyof typeof supportIconMap];

                  return (
                    <div
                      key={channel.id}
                      className="rounded-[1.2rem] border border-outline-variant/15 bg-surface-container-low px-5 py-5"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-[1rem] border border-white bg-white p-2 shadow-sm">
                          <Image
                            src={channel.qrFocusImage ?? channel.qrImage}
                            alt={`${channel.label}二维码`}
                            fill
                            sizes="112px"
                            className="object-contain p-1"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-[0.8rem] bg-white text-on-surface">
                              <Icon size={15} />
                            </div>
                            <p className="font-headline text-lg font-black text-on-surface">{channel.label}</p>
                          </div>
                          <p className="mt-3 text-sm leading-6 text-on-surface-variant">{channel.description}</p>
                          <p className="mt-2 text-xs leading-6 text-on-surface-variant/80">{channel.helperText}</p>
                          <button
                            onClick={() => handleCopy(channel.value, channel.id)}
                            className={cn(
                              'mt-4 inline-flex items-center gap-2 rounded-[0.95rem] border px-4 py-2.5 text-[11px] font-black transition-colors',
                              copiedId === channel.id
                                ? 'border-green-200 bg-green-50 text-green-600'
                                : 'border-outline-variant/25 bg-white text-on-surface hover:border-primary/20 hover:text-primary'
                            )}
                          >
                            {copiedId === channel.id ? <Check size={13} /> : <Copy size={13} />}
                            <span>{copiedId === channel.id ? '已复制平台 ID' : `复制${channel.label}号`}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.15rem] border border-outline-variant/10 bg-white px-5 py-5 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-[0.95rem] bg-primary/5 text-primary">
                  <Phone size={20} />
                </div>
                <p className="mt-4 font-headline text-lg font-black text-on-surface">一对一电话</p>
                <p className="mt-2 text-sm leading-6 text-on-surface-variant">高效沟通，快速为您评估活动档期及费用范围。</p>
              </div>
              <div className="rounded-[1.15rem] border border-outline-variant/10 bg-white px-5 py-5 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-[0.95rem] bg-primary/5 text-primary">
                  <MessageCircle size={20} />
                </div>
                <p className="mt-4 font-headline text-lg font-black text-on-surface">项目对接</p>
                <p className="mt-2 text-sm leading-6 text-on-surface-variant">添加微信发送场地照片及要求，细化执行方案。</p>
              </div>
              <div className="rounded-[1.15rem] border border-outline-variant/10 bg-white px-5 py-5 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-[0.95rem] bg-primary/5 text-primary">
                  <Mail size={20} />
                </div>
                <p className="mt-4 font-headline text-lg font-black text-on-surface">需求登记</p>
                <p className="mt-2 text-sm leading-6 text-on-surface-variant">提交您的活动初步计划，我们将安排专人主动与您联系。</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="premium-shadow overflow-hidden rounded-[1.6rem] border border-outline-variant/10 bg-white"
          >
            <div className="border-b border-primary/10 bg-primary/5 px-8 py-7">
              <p className="text-[11px] font-black tracking-[0.18em] text-primary">在线留言</p>
              <h2 className="mt-2 font-headline text-2xl font-black tracking-tight text-on-surface">
                提交活动需求
              </h2>
              <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                留下您的活动信息与联系方式，我们的专家团队将尽快为您提供项目方案与报价建议。
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-7 p-8 md:p-10">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="ml-1 text-xs font-black tracking-widest text-on-surface/60">活动类型</label>
                  <select
                    {...register('projectType')}
                    className="w-full appearance-none rounded-[1rem] border border-outline-variant bg-surface-container-low px-5 py-4 font-medium transition-all focus:border-primary focus:ring-4 focus:ring-primary/5 disabled:opacity-50"
                    disabled={submitStatus === 'submitting'}
                  >
                    <option value="">请选择...</option>
                    <option value="商场开业/庆典">商场开业 / 庆典</option>
                    <option value="品牌商演/路演">品牌商演 / 路演</option>
                    <option value="企业年会/盛典">企业年会 / 盛典</option>
                    <option value="婚礼/宴会/喜事">婚礼 / 宴会 / 喜事</option>
                    <option value="其他定制项目">其他定制项目</option>
                  </select>
                  {errors.projectType ? <p className="ml-1 text-xs font-bold text-primary">{errors.projectType.message}</p> : null}
                </div>

                <div className="space-y-2">
                  <label className="ml-1 text-xs font-black tracking-widest text-on-surface/60">希望怎么联系</label>
                  <select
                    {...register('preferredContactMethod')}
                    className="w-full appearance-none rounded-[1rem] border border-outline-variant bg-surface-container-low px-5 py-4 font-medium transition-all focus:border-primary focus:ring-4 focus:ring-primary/5 disabled:opacity-50"
                    disabled={submitStatus === 'submitting'}
                  >
                    <option value="wechat">优先微信</option>
                    <option value="phone">优先电话</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="ml-1 text-xs font-black tracking-widest text-on-surface/60">您的称呼</label>
                  <input
                    type="text"
                    {...register('name')}
                    placeholder="例如：陈先生"
                    className="w-full rounded-[1rem] border border-outline-variant bg-surface-container-low px-5 py-4 font-medium transition-all focus:border-primary focus:ring-4 focus:ring-primary/5 disabled:opacity-50"
                    disabled={submitStatus === 'submitting'}
                  />
                  {errors.name ? <p className="ml-1 text-xs font-bold text-primary">{errors.name.message}</p> : null}
                </div>

                <div className="space-y-2">
                  <label className="ml-1 text-xs font-black tracking-widest text-on-surface/60">联系电话 / 微信</label>
                  <input
                    type="text"
                    {...register('contact')}
                    placeholder="方便我们及时联系您"
                    className="w-full rounded-[1rem] border border-outline-variant bg-surface-container-low px-5 py-4 font-medium transition-all focus:border-primary focus:ring-4 focus:ring-primary/5 disabled:opacity-50"
                    disabled={submitStatus === 'submitting'}
                  />
                  {errors.contact ? <p className="ml-1 text-xs font-bold text-primary">{errors.contact.message}</p> : null}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="ml-1 text-xs font-black tracking-widest text-on-surface/60">活动日期（可选）</label>
                  <input
                    type="date"
                    {...register('eventDate')}
                    className="w-full rounded-[1rem] border border-outline-variant bg-surface-container-low px-5 py-4 font-medium transition-all focus:border-primary focus:ring-4 focus:ring-primary/5 disabled:opacity-50"
                    disabled={submitStatus === 'submitting'}
                  />
                </div>

                <div className="space-y-2">
                  <label className="ml-1 text-xs font-black tracking-widest text-on-surface/60">活动地点（可选）</label>
                  <input
                    type="text"
                    {...register('venue')}
                    placeholder="例如：渝中区某商场中庭"
                    className="w-full rounded-[1rem] border border-outline-variant bg-surface-container-low px-5 py-4 font-medium transition-all focus:border-primary focus:ring-4 focus:ring-primary/5 disabled:opacity-50"
                    disabled={submitStatus === 'submitting'}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="ml-1 text-xs font-black tracking-widest text-on-surface/60">备注说明（可选）</label>
                <textarea
                  {...register('message')}
                  rows={5}
                  placeholder="如有流程要求、场地限制、预算范围或拍摄需求，请在这里说明。"
                  className="w-full resize-none rounded-[1rem] border border-outline-variant bg-surface-container-low px-5 py-4 font-medium transition-all focus:border-primary focus:ring-4 focus:ring-primary/5 disabled:opacity-50"
                  disabled={submitStatus === 'submitting'}
                />
              </div>

              <div className="relative pt-2">
                <AnimatePresence mode="wait">
                  {submitStatus === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center justify-center gap-3 rounded-[1rem] border border-green-100 bg-green-50 p-6 text-green-700"
                    >
                      <CheckCircle2 size={24} />
                      <p className="font-bold">需求提交成功，我们会按您选择的方式尽快联系。</p>
                    </motion.div>
                  ) : submitStatus === 'error' ? (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center justify-center gap-3 rounded-[1rem] border border-red-100 bg-red-50 p-6 text-red-700"
                    >
                      <AlertCircle size={24} />
                      <p className="font-bold">提交失败，请稍后重试，或直接电话联系。</p>
                      <button
                        type="button"
                        onClick={() => setSubmitStatus('idle')}
                        className="ml-4 text-sm font-bold underline"
                      >
                        重试
                      </button>
                    </motion.div>
                  ) : (
                    <motion.button
                      key="idle"
                      type="submit"
                      disabled={submitStatus === 'submitting'}
                      className="button-primary group relative flex w-full items-center justify-center gap-3 overflow-hidden !py-4"
                    >
                      {submitStatus === 'submitting' ? (
                        <>
                          <Loader2 className="animate-spin" size={20} />
                          <span>正在提交...</span>
                        </>
                      ) : (
                        <span>提交需求并开始沟通</span>
                      )}
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
