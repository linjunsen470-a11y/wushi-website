'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, CheckCircle2, AlertCircle, Loader2, Copy, Check } from 'lucide-react';
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
  contact: z.string().min(5, '请输入您的手机号或微信号'),
  eventDate: z.string().optional(),
  venue: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

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

  const handleCopy = (id: string, platform: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(platform);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      <section className="shell py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <span className="section-eyebrow text-secondary">联系我们 —— CONTACT</span>
              <h1 className="page-hero-title mt-6 text-on-surface !leading-[1.1] tracking-tight">
                先把档期和配置
                <br />
                快速聊清楚
              </h1>
              <p className="page-lead mt-8 text-on-surface-variant font-medium leading-relaxed">
                商业活动前期不一定已经定完所有细节，先把活动类型、联系人和大致方向告诉我们就够了。
                <br className="hidden md:block" />
                我们会优先通过微信或电话和您确认档期、场地条件与建议配置。
              </p>
            </div>

            <div className="space-y-8">
              <div className="editorial-card !p-8 flex items-start gap-6 group hover:border-primary/20 transition-all">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60">预约电话</p>
                  <a href={`tel:${contactPanel.phone}`} className="mt-1 block font-headline text-2xl font-black text-on-surface hover:text-primary transition-colors tracking-tight">
                    {contactPanel.phone}
                  </a>
                </div>
              </div>

              <div className="editorial-card !p-8 flex items-start gap-6 group hover:border-primary/20 transition-all">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60">电子邮箱</p>
                  <a href={`mailto:${contactPanel.email}`} className="mt-1 block font-headline text-2xl font-black text-on-surface hover:text-primary transition-colors tracking-tight">
                    {contactPanel.email}
                  </a>
                </div>
              </div>

              <div className="editorial-card !p-8 flex items-start gap-6 group hover:border-primary/20 transition-all">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60">服务区域</p>
                  <p className="mt-1 font-headline text-lg font-black text-on-surface leading-snug tracking-tight">
                    {contactPanel.address}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{contactPanel.responseTime}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[3rem] bg-surface-container-low p-10 border border-outline-variant/10">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <div className="relative h-44 w-full overflow-hidden rounded-3xl premium-shadow border border-white bg-white p-4">
                    <Image src={contactPanel.wechatQr} alt="微信二维码" fill sizes="200px" className="object-contain p-2" />
                  </div>
                  <div className="mt-5">
                    <p className="font-headline text-lg font-black text-on-surface tracking-tight">微信咨询</p>
                    <p className="mt-2 text-[11px] leading-relaxed text-on-surface-variant font-bold">扫码添加微信，快速确认档期与报价范围</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="relative h-44 w-full overflow-hidden rounded-3xl premium-shadow border border-zinc-800 bg-zinc-900 group">
                    <Image src={contactPanel.douyinQr} alt="抖音二维码" fill sizes="200px" className="object-contain p-4" />
                  </div>
                  <div className="mt-5 w-full">
                    <p className="font-headline text-lg font-black text-on-surface tracking-tight">抖音主页</p>
                    <button
                      onClick={() => handleCopy(contactPanel.douyinId, 'douyin')}
                      className={cn(
                        'mt-3 w-full flex items-center justify-center gap-2 py-2 rounded-xl border transition-all text-[10px] font-bold',
                        copiedId === 'douyin'
                          ? 'bg-green-50 border-green-200 text-green-600'
                          : 'bg-white border-outline-variant/30 text-zinc-600 hover:border-zinc-300'
                      )}
                    >
                      {copiedId === 'douyin' ? (
                        <><Check size={12} /> 已复制 ID</>
                      ) : (
                        <><Copy size={12} /> 抖音号: {contactPanel.douyinId}</>
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="relative h-44 w-full overflow-hidden rounded-3xl premium-shadow border border-white bg-white">
                    <Image src={contactPanel.xhsQr} alt="小红书二维码" fill sizes="200px" className="object-contain p-4" />
                  </div>
                  <div className="mt-5 w-full">
                    <p className="font-headline text-lg font-black text-on-surface tracking-tight">小红书名片</p>
                    <button
                      onClick={() => handleCopy(contactPanel.xhsId, 'xhs')}
                      className={cn(
                        'mt-3 w-full flex items-center justify-center gap-2 py-2 rounded-xl border transition-all text-[10px] font-bold',
                        copiedId === 'xhs'
                          ? 'bg-green-50 border-green-200 text-green-600'
                          : 'bg-white border-outline-variant/30 text-rose-600 hover:border-rose-200'
                      )}
                    >
                      {copiedId === 'xhs' ? (
                        <><Check size={12} /> 已复制 ID</>
                      ) : (
                        <><Copy size={12} /> 小红书: {contactPanel.xhsId}</>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="premium-shadow overflow-hidden rounded-[3.5rem] bg-white border border-outline-variant/5"
          >
            <div className="bg-primary/5 px-10 py-8 border-b border-primary/10">
              <h2 className="font-headline text-2xl font-black text-on-surface tracking-tight">提交您的活动需求</h2>
              <p className="mt-2 text-sm text-on-surface-variant font-medium">先留核心信息即可，我们会按您偏好的方式尽快联系。</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="p-10 md:p-12 space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-on-surface/60 ml-1">活动类型</label>
                  <select
                    {...register('projectType')}
                    className="w-full rounded-2xl border border-outline-variant bg-surface-container-low px-5 py-4 font-medium transition-all focus:border-primary focus:ring-4 focus:ring-primary/5 disabled:opacity-50 appearance-none"
                    disabled={submitStatus === 'submitting'}
                  >
                    <option value="">请选择...</option>
                    <option value="商场开业/庆典">商场开业 / 庆典</option>
                    <option value="品牌商演/路演">品牌商演 / 路演</option>
                    <option value="企业年会/盛典">企业年会 / 盛典</option>
                    <option value="婚礼/宴会/喜事">婚礼 / 宴会 / 喜事</option>
                    <option value="其他定制项目">其他定制项目</option>
                  </select>
                  {errors.projectType && <p className="text-xs font-bold text-primary mt-1 ml-1">{errors.projectType.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-on-surface/60 ml-1">希望怎么联系</label>
                  <select
                    {...register('preferredContactMethod')}
                    className="w-full rounded-2xl border border-outline-variant bg-surface-container-low px-5 py-4 font-medium transition-all focus:border-primary focus:ring-4 focus:ring-primary/5 disabled:opacity-50 appearance-none"
                    disabled={submitStatus === 'submitting'}
                  >
                    <option value="wechat">优先微信</option>
                    <option value="phone">优先电话</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-on-surface/60 ml-1">您的称呼</label>
                  <input
                    type="text"
                    {...register('name')}
                    placeholder="例如：陈先生"
                    className="w-full rounded-2xl border border-outline-variant bg-surface-container-low px-5 py-4 font-medium transition-all focus:border-primary focus:ring-4 focus:ring-primary/5 disabled:opacity-50"
                    disabled={submitStatus === 'submitting'}
                  />
                  {errors.name && <p className="text-xs font-bold text-primary mt-1 ml-1">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-on-surface/60 ml-1">联系电话 / 微信</label>
                  <input
                    type="text"
                    {...register('contact')}
                    placeholder="方便我们及时回复您"
                    className="w-full rounded-2xl border border-outline-variant bg-surface-container-low px-5 py-4 font-medium transition-all focus:border-primary focus:ring-4 focus:ring-primary/5 disabled:opacity-50"
                    disabled={submitStatus === 'submitting'}
                  />
                  {errors.contact && <p className="text-xs font-bold text-primary mt-1 ml-1">{errors.contact.message}</p>}
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-on-surface/60 ml-1">活动日期（可选）</label>
                  <input
                    type="date"
                    {...register('eventDate')}
                    className="w-full rounded-2xl border border-outline-variant bg-surface-container-low px-5 py-4 font-medium transition-all focus:border-primary focus:ring-4 focus:ring-primary/5 disabled:opacity-50"
                    disabled={submitStatus === 'submitting'}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-on-surface/60 ml-1">活动地点（可选）</label>
                  <input
                    type="text"
                    {...register('venue')}
                    placeholder="例如：渝中区 解放碑英利广场，未定也可以先留空"
                    className="w-full rounded-2xl border border-outline-variant bg-surface-container-low px-5 py-4 font-medium transition-all focus:border-primary focus:ring-4 focus:ring-primary/5 disabled:opacity-50"
                    disabled={submitStatus === 'submitting'}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-on-surface/60 ml-1">备注说明（可选）</label>
                <textarea
                  {...register('message')}
                  rows={4}
                  placeholder="如有特殊流程、场地限制、预算区间或拍摄需求，请在这里说明。"
                  className="w-full rounded-2xl border border-outline-variant bg-surface-container-low px-5 py-4 font-medium transition-all focus:border-primary focus:ring-4 focus:ring-primary/5 disabled:opacity-50 resize-none"
                  disabled={submitStatus === 'submitting'}
                />
              </div>

              <div className="relative pt-4">
                <AnimatePresence mode="wait">
                  {submitStatus === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center justify-center gap-3 rounded-2xl bg-green-50 p-6 text-green-700 border border-green-100"
                    >
                      <CheckCircle2 size={24} />
                      <p className="font-bold">需求提交成功！我们会按您选择的方式尽快联系。</p>
                    </motion.div>
                  ) : submitStatus === 'error' ? (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center justify-center gap-3 rounded-2xl bg-red-50 p-6 text-red-700 border border-red-100"
                    >
                      <AlertCircle size={24} />
                      <p className="font-bold">提交失败，请稍后重试或直接电话联系。</p>
                      <button
                        type="button"
                        onClick={() => setSubmitStatus('idle')}
                        className="ml-4 text-sm underline font-bold"
                      >
                        重试
                      </button>
                    </motion.div>
                  ) : (
                    <motion.button
                      key="idle"
                      type="submit"
                      disabled={submitStatus === 'submitting'}
                      className="button-primary group w-full relative overflow-hidden flex items-center justify-center gap-3 !py-5"
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
