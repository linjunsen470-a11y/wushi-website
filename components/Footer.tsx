import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { brand, contactPanel, filingInfo, footerLinks, legalInfo, legalLinks } from '@/lib/site-data';

export default function Footer() {
  return (
    <footer className="bg-[#17120f] text-white">
      <div className="shell grid gap-10 py-12 lg:grid-cols-[1.2fr_0.9fr_1fr] lg:items-start">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <Image src={brand.logoYellow} alt={brand.logoAlt} className="h-16 w-16 object-contain" />
            <div>
              <div className="font-headline text-2xl font-black tracking-tight">{brand.name}</div>
              <p className="text-sm text-white/45">{brand.tagline}</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/65">
            立足重庆，专注承接开业庆典、商场商演、婚礼宴会等商业舞狮项目，以稳定执行力推进每一场活动更快进入可执行状态。
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-headline text-xs font-black tracking-[0.24em] text-secondary-fixed">页面导航</h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-white/68 transition-colors hover:text-secondary-fixed">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-headline text-xs font-black tracking-[0.24em] text-secondary-fixed">联系信息</h3>
          <div className="space-y-3">
            <a
              href={`tel:${contactPanel.phone}`}
              className="flex items-center gap-3 rounded-[0.95rem] border border-white/10 bg-white/5 px-4 py-3 text-white/88 transition-colors hover:border-white/20"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-[0.8rem] bg-white/10 text-secondary-fixed">
                <Phone size={16} />
              </div>
              <div>
                <p className="text-[11px] font-black tracking-[0.16em] text-white/45">电话 / 微信 (同号)</p>
                <p className="font-headline text-lg font-black">{contactPanel.phone}</p>
              </div>
            </a>

            <a
              href={`mailto:${contactPanel.email}`}
              className="flex items-center gap-3 rounded-[0.95rem] border border-white/10 bg-white/5 px-4 py-3 text-white/88 transition-colors hover:border-white/20"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-[0.8rem] bg-white/10 text-secondary-fixed">
                <Mail size={16} />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-black tracking-[0.16em] text-white/45">邮箱</p>
                <p className="truncate font-headline text-lg font-black">{contactPanel.email}</p>
              </div>
            </a>


          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="shell flex flex-col gap-4 py-6 text-sm text-white/38 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            <p>© 2026 {brand.name}. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/25 transition-colors hover:text-white/45"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={filingInfo.icpUrl}
                target="_blank"
                rel="noreferrer"
                className="text-white/25 transition-colors hover:text-white/45"
              >
                {filingInfo.icp}
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 md:flex-row md:items-end md:gap-6">
            <p className="text-white/25">{legalInfo.companyName}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
