'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  AlertCircle,
  Check,
  CheckCircle2,
  ChevronDown,
  Loader2,
  MessageCircle,
  Phone,
  Sparkles,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { caseStudies, contactPanel } from '@/lib/site-data';
import { submitContactForm } from '@/app/actions/contact';
import { LandingPage } from '@/lib/landing-data';
import { cn } from '@/lib/utils';
import { contactFormSchema, type ContactFormData } from '@/lib/contact-schema';

interface LandingClientProps {
  page: LandingPage;
}

export default function LandingClient({ page }: LandingClientProps) {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    shouldFocusError: true,
    defaultValues: {
      projectType: page.formProjectType,
      preferredContactMethod: 'wechat',
    },
  });

  const phoneChannel = contactPanel.primaryChannels.find((channel) => channel.id === 'phone');
  const wechatChannel = contactPanel.primaryChannels.find((channel) => channel.id === 'wechat');

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('submitting');
    setSubmitError('');
    try {
      const result = await submitContactForm(data);
      if (result.success) {
        setSubmitStatus('success');
        reset({
          projectType: page.formProjectType,
          preferredContactMethod: data.preferredContactMethod,
        });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setSubmitError(result.error || '提交失败，请直接电话或微信联系。');
      }
    } catch {
      setSubmitStatus('error');
      setSubmitError('网络连接异常，请直接电话或微信联系。');
    }
  };

  const handleCopy = (value: string, key: string) => {
    navigator.clipboard.writeText(value);
    setCopiedId(key);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Find cases that match the landing page configs
  const matchedCasesData = caseStudies.filter((c) => page.matchedCases.includes(c.title));

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-surface pb-20 md:pb-0">
      <Navbar />
      <p className="sr-only" role="status" aria-live="polite">
        {copiedId ? '微信号已复制' : ''}
      </p>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#eadcc9]/20 to-surface pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="shell relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/8 px-4 py-1.5 text-xs font-black tracking-widest text-primary uppercase">
              <Sparkles size={12} />
              {page.hero.tag}
            </span>
            <h1 className="mt-6 font-headline text-4xl font-black leading-tight tracking-tight text-on-surface md:text-5xl lg:text-6xl">
              {page.hero.title}
            </h1>
            <p className="body-copy mx-auto mt-6 max-w-2xl text-base leading-relaxed text-on-surface-variant md:text-lg">
              {page.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {phoneChannel && (
                <a
                  href={phoneChannel.href}
                  className="button-primary flex items-center gap-2 px-8 py-4 shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  <Phone size={18} />
                  <span>立即电话咨询</span>
                </a>
              )}
              {wechatChannel && (
                <button
                  type="button"
                  onClick={() => handleCopy(wechatChannel.value, wechatChannel.id)}
                  className="button-secondary bg-white border border-outline-variant/30 flex items-center gap-2 px-8 py-4 shadow-sm transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle size={18} className="text-green-600" />
                  <span>{copiedId === wechatChannel.id ? '微信号已复制' : '复制微信客服'}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Direct AI/Search Answer Box (Optimized for GEO) */}
      <section className="pb-16">
        <div className="shell">
          <div className="mx-auto max-w-4xl rounded-2xl border border-primary/10 bg-primary/[0.02] p-6 md:p-8 shadow-sm">
            <h2 className="font-headline text-lg font-black text-primary flex items-center gap-2">
              <span className="text-xl">💡</span>
              直达解答：{page.targetQuery}
            </h2>
            <p className="mt-4 text-sm font-medium leading-relaxed text-on-surface-variant/90 border-l-2 border-primary/30 pl-4">
              {page.directAnswer}
            </p>
          </div>
        </div>
      </section>

      {/* Content Form & Benefits Section */}
      <section className="bg-surface-container-low py-16 md:py-24">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Left: Custom Value Propositions */}
            <div className="space-y-8">
              <div>
                <span className="section-eyebrow text-secondary">鑫龙堂服务优势</span>
                <h2 className="section-title mt-4">专注重庆本地演出<br />以严谨纪律交付每一场精彩</h2>
                <p className="body-copy mt-4 text-on-surface-variant">
                  每场商业庆典与宴会的场地和流程都不同，我们会在确认需求后提供对应的配置建议。
                </p>
              </div>

              <div className="space-y-6">
                {page.benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4 rounded-xl bg-white p-5 border border-outline-variant/10 shadow-sm">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
                      <Check size={20} strokeWidth={3} />
                    </div>
                    <div>
                      <h3 className="font-headline text-base font-black text-on-surface">{benefit.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-on-surface-variant">{benefit.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Functional Form */}
            <div className="rounded-2xl border border-outline-variant/10 bg-white p-6 md:p-10 shadow-md">
              <h3 className="font-headline text-xl font-black text-on-surface tracking-tight">
                {page.formTitle}
              </h3>
              <p className="mt-2 text-xs leading-5 text-on-surface-variant/80">
                请填写以下简要需求，我们会在看到信息后尽快联系，并提供初步的演出配置建议。
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5" noValidate>
                <input type="text" {...register('website')} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

                <div className="space-y-1.5">
                  <label htmlFor="project-type" className="text-xs font-black tracking-wider text-on-surface/60">活动类型</label>
                  <select
                    id="project-type"
                    {...register('projectType')}
                    aria-invalid={Boolean(errors.projectType)}
                    aria-describedby={errors.projectType ? 'project-type-error' : undefined}
                    className="w-full rounded-lg border border-outline-variant bg-surface px-4 py-3 text-sm font-medium focus:border-primary focus:ring-2 focus:ring-primary/5 disabled:opacity-50"
                    disabled={submitStatus === 'submitting'}
                  >
                    <option value="商场开业/庆典">商场开业 / 庆典</option>
                    <option value="品牌商演/路演">品牌商演 / 路演</option>
                    <option value="企业年会/盛典">企业年会 / 盛典</option>
                    <option value="婚礼/宴会/喜事">婚礼 / 宴会 / 喜事</option>
                    <option value="其他定制项目">其他定制项目</option>
                  </select>
                  {errors.projectType ? <p id="project-type-error" className="text-xs font-bold text-primary">{errors.projectType.message}</p> : null}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="preferred-contact" className="text-xs font-black tracking-wider text-on-surface/60">首选联系方式</label>
                    <select
                      id="preferred-contact"
                      {...register('preferredContactMethod')}
                      className="w-full rounded-lg border border-outline-variant bg-surface px-4 py-3 text-sm font-medium focus:border-primary focus:ring-2 focus:ring-primary/5 disabled:opacity-50"
                      disabled={submitStatus === 'submitting'}
                    >
                      <option value="wechat">优先微信</option>
                      <option value="phone">优先电话</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="user-name" className="text-xs font-black tracking-wider text-on-surface/60">您的称呼</label>
                    <input
                      id="user-name"
                      type="text"
                      {...register('name')}
                      autoComplete="name"
                      placeholder="陈先生"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'user-name-error' : undefined}
                      className="w-full rounded-lg border border-outline-variant bg-surface px-4 py-3 text-sm font-medium focus:border-primary focus:ring-2 focus:ring-primary/5 disabled:opacity-50"
                      disabled={submitStatus === 'submitting'}
                    />
                    {errors.name && <p id="user-name-error" className="text-xs font-bold text-primary">{errors.name.message}</p>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="user-contact" className="text-xs font-black tracking-wider text-on-surface/60">联系电话 / 微信</label>
                  <input
                  id="user-contact"
                  type="text"
                  {...register('contact')}
                  autoComplete="tel"
                  spellCheck={false}
                  placeholder="方便我们快速联系您"
                  aria-invalid={Boolean(errors.contact)}
                  aria-describedby={errors.contact ? 'user-contact-error' : undefined}
                    className="w-full rounded-lg border border-outline-variant bg-surface px-4 py-3 text-sm font-medium focus:border-primary focus:ring-2 focus:ring-primary/5 disabled:opacity-50"
                    disabled={submitStatus === 'submitting'}
                  />
                  {errors.contact && <p id="user-contact-error" className="text-xs font-bold text-primary">{errors.contact.message}</p>}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="event-message" className="text-xs font-black tracking-wider text-on-surface/60">补充要求（可选）</label>
                  <textarea
                    id="event-message"
                  {...register('message')}
                  rows={3}
                  autoComplete="off"
                  placeholder="如具体的活动时间、场地层高限制或特殊风俗要求。"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'event-message-error' : undefined}
                    className="w-full resize-none rounded-lg border border-outline-variant bg-surface px-4 py-3 text-sm font-medium focus:border-primary focus:ring-2 focus:ring-primary/5 disabled:opacity-50"
                  disabled={submitStatus === 'submitting'}
                  />
                  {errors.message ? <p id="event-message-error" className="text-xs font-bold text-primary">{errors.message.message}</p> : null}
                </div>

                <div className="pt-2" aria-live="polite">
                  <AnimatePresence mode="wait">
                    {submitStatus === 'success' ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="flex items-center gap-2 rounded-lg bg-green-50 p-4 text-green-700 text-sm"
                      >
                        <CheckCircle2 size={18} />
                        <p className="font-bold">需求已提交，项目经理将尽快与您对接！</p>
                      </motion.div>
                    ) : submitStatus === 'error' ? (
                      <motion.div
                        key="error"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="flex items-center gap-2 rounded-lg bg-red-50 p-4 text-red-700 text-sm"
                      >
                        <AlertCircle size={18} />
                        <p className="font-bold">{submitError}</p>
                      </motion.div>
                    ) : (
                      <motion.button
                        key="idle"
                        type="submit"
                        disabled={submitStatus === 'submitting'}
                        className="button-primary flex w-full items-center justify-center gap-2 py-3.5 shadow-md disabled:opacity-50"
                      >
                        {submitStatus === 'submitting' ? (
                          <>
                            <Loader2 className="animate-spin" size={16} />
                            <span>提交中...</span>
                          </>
                        ) : (
                          <span>提交需求 • 免费获取配置方案</span>
                        )}
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Matched Case Studies */}
      {matchedCasesData.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="shell">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="section-eyebrow text-secondary">案例见证 • CLIENT PROOF</span>
              <h2 className="section-title mt-4">重庆本土商演案例实拍</h2>
              <p className="body-copy mt-3">
                鑫龙堂展示的案例均采用实际活动现场素材，便于您了解团队的演出与执行情况。
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {matchedCasesData.map((c, i) => (
                <div key={i} className="group overflow-hidden rounded-2xl border border-outline-variant/10 bg-white shadow-sm transition-shadow hover:shadow-md">
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface-container-low">
                    <Image src={c.image} alt={c.altText || c.title} fill className="object-cover transition-transform duration-700 group-hover:scale-103" />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold text-on-surface-variant/70">
                      <span>{c.client}</span>
                      <span>•</span>
                      <span>{c.location}</span>
                    </div>
                    <h3 className="font-headline text-xl font-black mt-3 text-on-surface">{c.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{c.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {c.metrics.map((m, idx) => (
                        <span key={idx} className="rounded bg-primary/4 px-2.5 py-1 text-[11px] font-bold text-primary">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Target FAQ Section */}
      <section className="bg-surface-container-low py-16 md:py-24">
        <div className="shell">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <span className="section-eyebrow text-secondary">常见问答 • FAQ</span>
              <h2 className="section-title mt-4">关于本演出场景的专业解答</h2>
            </div>

            <div className="space-y-4">
              {page.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-xl border border-outline-variant/15 bg-white shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      aria-controls={`landing-faq-${idx}`}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left font-headline text-base font-black text-on-surface transition-colors hover:bg-primary/[0.01]"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        size={18}
                        className={cn('text-primary transition-transform duration-300', isOpen && 'rotate-180')}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                        >
                          <div id={`landing-faq-${idx}`} className="border-t border-outline-variant/10 p-5 text-sm leading-relaxed text-on-surface-variant font-medium bg-surface/30">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Bottom Bar for Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-outline-variant/15 bg-white/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-10px_30px_rgba(30,27,19,0.08)] backdrop-blur-md md:hidden">
        <div className="flex gap-3">
          {phoneChannel && (
            <a
              href={phoneChannel.href}
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-white font-headline text-sm font-black shadow-md transition-[color,background-color,box-shadow,transform] active:scale-98"
            >
              <Phone size={16} />
              <span>电话沟通</span>
            </a>
          )}
          {wechatChannel && (
            <button
              type="button"
              onClick={() => handleCopy(wechatChannel.value, wechatChannel.id)}
              className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-outline-variant/30 bg-white py-3.5 text-on-surface font-headline text-sm font-black transition-[color,background-color,border-color,transform] active:scale-98"
            >
              <MessageCircle size={16} className="text-green-600" />
              <span>{copiedId === wechatChannel.id ? '微信号已复制' : '复制微信'}</span>
            </button>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
