'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { brand, primaryNavLinks, utilityNavLinks } from '@/lib/site-data';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);
  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 border-b border-transparent',
        scrolled
          ? 'bg-surface/85 backdrop-blur-xl shadow-[0_12px_30px_rgba(30,27,19,0.06)]'
          : 'bg-transparent'
      )}
    >
      <div className="shell flex items-center justify-between gap-6 py-4">
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <Image src={brand.logoRed} alt={brand.name} className="h-10 w-10 object-contain" priority />
          <div>
            <div className="font-headline text-lg font-black uppercase tracking-tight text-primary md:text-xl">
              {brand.name}
            </div>
            <div className="hidden text-[11px] tracking-[0.18em] text-on-surface-variant md:block">
              {brand.tagline}
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-5 md:flex xl:gap-7">
          <Link
            href="/"
            className={cn(
              'border-b-2 pb-1 font-headline text-sm font-bold tracking-[0.18em]',
              isActive('/')
                ? 'border-secondary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            )}
          >
            首页
          </Link>
          {primaryNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'border-b-2 pb-1 font-headline text-sm font-bold tracking-[0.18em]',
                isActive(link.href)
                  ? 'border-secondary text-primary'
                  : 'border-transparent text-on-surface-variant hover:text-primary'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-md bg-primary px-5 py-3 font-headline text-xs font-black tracking-[0.22em] text-white hover:scale-[1.02] hover:bg-primary-container"
          >
            联系我们
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? '关闭菜单' : '打开菜单'}
          className="rounded-full p-2 text-primary md:hidden"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-outline-variant/20 bg-surface md:hidden">
          <div className="shell py-6">
            <div className="rounded-[1.5rem] bg-surface-container-low p-5">
              <p className="font-headline text-xs font-black tracking-[0.28em] text-secondary">网站入口</p>
              <div className="mt-5 space-y-3">
                {utilityNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(
                      'flex items-center justify-between rounded-2xl border px-4 py-4',
                      isActive(link.href)
                        ? 'border-secondary/40 bg-secondary/10 text-primary'
                        : 'border-outline-variant/20 bg-surface text-on-surface'
                    )}
                  >
                    <div>
                      <div className="font-headline text-lg font-black tracking-[0.12em]">{link.label}</div>
                      <div className="mt-1 text-sm text-on-surface-variant">{link.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-[1.5rem] bg-[#17120f] p-5 text-white">
              <p className="font-headline text-xs font-black tracking-[0.28em] text-secondary-fixed">核心页面</p>
              <div className="mt-5 grid gap-3">
                {primaryNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(
                      'rounded-2xl border px-4 py-4',
                      isActive(link.href)
                        ? 'border-secondary-fixed/60 bg-white/10 text-white'
                        : 'border-white/10 bg-white/4 text-white/90'
                    )}
                  >
                    <div className="font-headline text-lg font-black tracking-[0.12em]">{link.label}</div>
                    <div className="mt-1 text-sm text-white/65">{link.description}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
