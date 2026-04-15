import Image from 'next/image';
import Link from 'next/link';
import { Mail, MessageCircle, Phone, Tv2 } from 'lucide-react';
import { brand, contactPanel, footerLinks } from '@/lib/site-data';

const primaryIconMap = {
  phone: Phone,
  wechat: MessageCircle,
} as const;

const supportIconMap = {
  douyin: Tv2,
  xhs: MessageCircle,
} as const;

export default function Footer() {
  return (
    <footer className="bg-[#17120f] text-white">
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.1fr_0.9fr_1.1fr]">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Image src={brand.logoYellow} alt={brand.name} className="h-20 w-20 object-contain" />
            <div>
              <div className="font-headline text-2xl font-black uppercase tracking-tight">{brand.name}</div>
              <p className="text-sm tracking-[0.16em] text-white/45">{brand.tagline}</p>
            </div>
          </div>
          <p className="max-w-md text-base leading-7 text-white/68">
            立足重庆，专业承接开业庆典、商场演艺、婚礼宴会等高标准舞狮项目，以稳定执行力推进每一场活动更快进入可执行状态。
          </p>
        </div>

        <div>
          <h3 className="mb-5 font-headline text-xs font-black tracking-[0.28em] text-secondary-fixed">
            页面导航
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-white/70 transition-colors hover:text-secondary-fixed">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="mb-5 font-headline text-xs font-black tracking-[0.28em] text-secondary-fixed">
              快速咨询
            </h3>
            <div className="space-y-3">
              {contactPanel.primaryChannels.map((channel) => {
                const Icon = primaryIconMap[channel.id as keyof typeof primaryIconMap];

                return (
                  <div
                    key={channel.id}
                    className="rounded-[1rem] border border-white/10 bg-white/6 px-4 py-4 backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.9rem] bg-white/10 text-secondary-fixed">
                        <Icon size={18} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-black tracking-[0.18em] text-white/45">{channel.label}</p>
                        {channel.href ? (
                          <a href={channel.href} className="mt-1 block font-headline text-lg font-black text-white hover:text-secondary-fixed">
                            {channel.value}
                          </a>
                        ) : (
                          <p className="mt-1 font-headline text-lg font-black text-white">{channel.value}</p>
                        )}
                        <p className="mt-2 text-sm leading-6 text-white/62">{channel.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="rounded-[1rem] border border-white/10 bg-white/6 px-4 py-4 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.9rem] bg-white/10 text-secondary-fixed">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] font-black tracking-[0.18em] text-white/45">邮箱</p>
                    <a href={`mailto:${contactPanel.email}`} className="mt-1 block font-headline text-lg font-black text-white hover:text-secondary-fixed">
                      {contactPanel.email}
                    </a>
                    <p className="mt-2 text-sm leading-6 text-white/62">{contactPanel.responseTime}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-headline text-xs font-black tracking-[0.28em] text-secondary-fixed">
              平台内容入口
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {contactPanel.supportChannels.map((channel) => {
                const Icon = supportIconMap[channel.id as keyof typeof supportIconMap];

                return (
                  <div
                    key={channel.id}
                    className="rounded-[1rem] border border-white/10 bg-white/4 px-4 py-4 text-white/72"
                  >
                    <div className="flex items-center gap-2 text-sm font-black">
                      <Icon size={14} />
                      <span>{channel.label}</span>
                    </div>
                    <p className="mt-2 font-headline text-base font-black text-white">{channel.value}</p>
                    <p className="mt-2 text-sm leading-6 text-white/55">{channel.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-3 py-5 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {brand.name}. All rights reserved.</p>
          <p>重庆本地专业舞狮演艺服务平台</p>
        </div>
      </div>
    </footer>
  );
}
