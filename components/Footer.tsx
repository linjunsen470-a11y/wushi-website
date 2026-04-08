import Image from 'next/image';
import Link from 'next/link';
import { brand, contactPanel, footerLinks } from '@/lib/site-data';

export default function Footer() {
  return (
    <footer className="bg-[#17120f] text-white">
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Image src={brand.logoYellow} alt={brand.name} className="h-12 w-12 object-contain" />
            <div>
              <div className="font-headline text-2xl font-black uppercase tracking-tight">{brand.name}</div>
              <p className="text-sm tracking-[0.16em] text-white/45">{brand.tagline}</p>
            </div>
          </div>
          <p className="max-w-md text-base leading-7 text-white/68">
            服务开业庆典、商演活动、婚礼宴会、节庆项目与城市活动，用真实现场效果和真实案例，帮助您更安心地做出选择。
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
            联系方式
          </h3>
          <div className="space-y-3 text-white/70">
            <p>{contactPanel.phone}</p>
            <p>{contactPanel.email}</p>
            <p>{contactPanel.address}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-3 py-5 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {brand.name}. All rights reserved.</p>
          <p>中国大陆地区舞狮商业演出与活动服务网站。</p>
        </div>
      </div>
    </footer>
  );
}
