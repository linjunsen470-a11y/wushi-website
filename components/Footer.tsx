import Image from 'next/image';
import Link from 'next/link';
import { brand, contactPanel, footerLinks, socialLinks } from '@/lib/site-data';

export default function Footer() {
  return (
    <footer className="bg-[#17120f] text-white">
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Image src={brand.logoYellow} alt={brand.name} className="h-20 w-20 object-contain" />
            <div>
              <div className="font-headline text-2xl font-black uppercase tracking-tight">{brand.name}</div>
              <p className="text-sm tracking-[0.16em] text-white/45">{brand.tagline}</p>
            </div>
          </div>
          <p className="max-w-md text-base leading-7 text-white/68">
            立足重庆，专业承接开业庆典、商场演艺、婚礼宴会等高标准舞狮项目，以卓越执行力打造每一场精彩瞬间。
          </p>
        </div>

        <div>
          <h3 className="mb-5 font-headline text-xs font-black tracking-[0.28em] text-secondary-fixed">
            页面导航
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-white/70 hover:text-secondary-fixed">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-headline text-xs font-black tracking-[0.28em] text-secondary-fixed">
            联系咨询
          </h3>
          <div className="space-y-3 text-white/70 mb-8">
            <p>{contactPanel.phone}</p>
            <p>微信: {contactPanel.wechatId}</p>
            <p>{contactPanel.email}</p>
            <p>{contactPanel.address}</p>
          </div>

          <h3 className="mb-5 font-headline text-xs font-black tracking-[0.28em] text-secondary-fixed">
            社交平台
          </h3>
          <div className="flex flex-wrap gap-4 text-sm">
            {socialLinks.map((link) => (
              <span
                key={link.label}
                className="text-white/70 border-b border-transparent"
              >
                {link.label}: {link.value}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-3 py-5 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {brand.name}. All rights reserved.</p>
          <p>重庆本地专业舞狮演艺服务标杆平台</p>
        </div>
      </div>
    </footer>
  );
}
