'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { brand, primaryNavLinks } from '@/lib/site-data';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileNavLinks = [
    { label: '首页', href: '/' },
    ...primaryNavLinks.map(({ label, href }) => ({ label, href })),
    { label: '联系我们', href: '/contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  const ariaLabel = isOpen ? '关闭菜单' : '打开菜单';

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
          <Image src={brand.logoRed} alt={brand.name} className="h-16 w-16 object-contain" priority />
          <div>
            <div className="font-headline text-xl font-black uppercase tracking-tight text-primary md:text-2xl">
              {brand.name}
            </div>
            <div className="hidden text-[12px] tracking-[0.18em] text-on-surface-variant md:block">
              {brand.tagline}
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-5 md:flex xl:gap-7">
          <Link
            href="/"
            className={cn(
              'nav-link',
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
                'nav-link',
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
            className="button-primary !rounded-[0.95rem] px-5 py-3 hover:scale-[1.02] hover:bg-primary-container"
          >
            联系我们
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-label={ariaLabel}
          className={cn(
            'rounded-[1rem] border p-2.5 shadow-[0_10px_30px_rgba(30,27,19,0.08)] md:hidden',
            isOpen
              ? 'border-primary bg-primary text-white'
              : 'border-outline-variant/30 bg-white/85 text-primary backdrop-blur-md'
          )}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-outline-variant/15 bg-[rgba(255,248,239,0.94)] backdrop-blur-2xl md:hidden">
          <div className="shell pb-6 pt-4">
            <div className="rounded-[1.5rem] border border-[#eadcc9] bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(248,241,230,0.96))] p-4 shadow-[0_28px_70px_rgba(30,27,19,0.12)]">
              <div className="grid gap-3">
                {mobileNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(
                      'mobile-nav-link',
                      isActive(link.href)
                        ? 'border-primary bg-primary text-white shadow-[0_16px_32px_rgba(163,0,17,0.2)]'
                        : 'border-[#e7d9c6] bg-white/72 text-on-surface hover:border-primary/35 hover:bg-white'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mt-4 rounded-[1.1rem] bg-[#221c16] px-5 py-4 text-white">
                <p className="font-headline text-base font-black tracking-[0.08em]">鑫龙堂舞狮</p>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="button-secondary mt-3 border-white bg-white px-4 py-2 text-[0.8rem] text-[#221c16]"
                >
                  立即咨询
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
