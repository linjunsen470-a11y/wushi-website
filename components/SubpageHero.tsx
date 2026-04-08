import type { ReactNode } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';

type SubpageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  chips?: string[];
  actions?: ReactNode;
  panel?: ReactNode;
  variant?: 'light' | 'dark' | 'media' | 'full';
  bgImage?: StaticImageData | string;
};

export default function SubpageHero({
  eyebrow,
  title,
  description,
  chips = [],
  actions,
  panel,
  variant = 'light',
  bgImage,
}: SubpageHeroProps) {
  const isDark = variant === 'dark' || variant === 'full';
  const isFull = variant === 'full';
  const isMedia = variant === 'media';

  return (
    <header
      className={cn(
        'relative overflow-hidden',
        isFull ? 'bg-black text-white' : isDark ? 'bg-[#17120f] text-white' : 'bg-surface text-on-surface'
      )}
    >
      {isFull && bgImage && (
        <div className="absolute inset-0 z-0">
          <Image src={bgImage} alt="" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>
      )}
      <div
        className={cn(
          'absolute inset-0',
          isDark
            ? 'bg-[radial-gradient(circle_at_top_left,rgba(255,219,112,0.1),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(163,0,17,0.28),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]'
            : 'bg-[radial-gradient(circle_at_top_left,rgba(255,219,112,0.18),transparent_24%),radial-gradient(circle_at_82%_22%,rgba(163,0,17,0.08),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.7),rgba(249,244,235,0.96))]'
        )}
      />
      <div
        className={cn(
          'absolute inset-0 opacity-[0.06]',
          isDark
            ? '[background-image:linear-gradient(rgba(255,255,255,0.65)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.65)_1px,transparent_1px)]'
            : '[background-image:linear-gradient(rgba(163,0,17,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(163,0,17,0.6)_1px,transparent_1px)]',
          '[background-size:54px_54px]'
        )}
      />

      <div
        className={cn(
          'shell relative grid min-h-[clamp(36rem,74vh,48rem)] gap-10 py-20 md:py-24 lg:items-end lg:gap-16 lg:py-24',
          isFull ? 'lg:grid-cols-1' : 'lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]'
        )}
      >
        <div className="max-w-4xl">
          <span className={cn('page-eyebrow', isDark ? 'text-secondary-fixed' : 'text-secondary')}>
            {eyebrow}
          </span>
          <h1 className={cn('page-hero-title mt-5 md:mt-6', isDark ? 'text-white' : 'text-primary')}>
            {title}
          </h1>
          <p className={cn('page-lead mt-7 md:mt-8', isDark ? 'text-white/78' : 'text-on-surface-variant')}>
            {description}
          </p>

          {chips.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-3 md:mt-9 md:gap-3.5">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className={cn(
                    'hero-chip',
                    isDark
                      ? 'border-white/12 bg-white/6 text-white/86'
                      : isMedia
                        ? 'border-primary/10 bg-primary/[0.04] text-on-surface'
                        : 'border-[#dfcfbb] bg-white/78 text-on-surface'
                  )}
                >
                  {chip}
                </span>
              ))}
            </div>
          ) : null}

          {actions ? <div className="mt-10 flex flex-wrap gap-4 md:mt-11">{actions}</div> : null}
        </div>
        
        {!isFull && panel && (
          <div
            className={cn(
              'hero-panel',
              isDark
                ? 'border-white/10 bg-white/6 text-white shadow-[0_28px_90px_rgba(0,0,0,0.28)]'
                : 'border-[#eadcca] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,241,230,0.96))] text-on-surface shadow-[0_24px_70px_rgba(30,27,19,0.12)]'
            )}
          >
            {panel}
          </div>
        )}
      </div>
    </header>
  );
}
