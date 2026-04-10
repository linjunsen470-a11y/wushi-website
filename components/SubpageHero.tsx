import type { ReactNode } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { motion } from 'motion/react';
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

const subtleFadeProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
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
          <Image src={bgImage} alt="" fill priority placeholder="blur" sizes="100vw" className="object-cover" />
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
          '[background-size:104px_104px]'
        )}
      />

      <div
        className={cn(
          'shell relative grid min-h-[clamp(32rem,65vh,44rem)] gap-10 py-20 md:py-24 lg:items-center lg:gap-20 lg:py-28',
          isFull ? 'lg:grid-cols-1' : 'lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]'
        )}
      >
        <motion.div {...subtleFadeProps} className="max-w-4xl">
          <span className={cn('section-eyebrow', isDark ? 'text-secondary-fixed' : 'text-secondary')}>
            {eyebrow}
          </span>
          <h1 className={cn('page-hero-title mt-5 md:mt-6', isDark ? 'text-white' : 'text-primary')}>
            {title}
          </h1>
          <div className={cn('h-1 w-20 mt-8 mb-8', isDark ? 'bg-secondary-fixed' : 'bg-primary')} />
          <p className={cn('page-lead mt-7 md:mt-8', isDark ? 'text-white/78' : 'text-on-surface-variant')}>
            {description}
          </p>

          {chips.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-3 md:mt-10 md:gap-4">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className={cn(
                    'hero-chip',
                    isDark
                      ? 'border-white/12 bg-white/6 text-white/86'
                      : isMedia
                        ? 'border-primary/10 bg-primary/[0.04] text-on-surface'
                        : 'border-primary/20 bg-white/78 text-on-surface'
                  )}
                >
                  {chip}
                </span>
              ))}
            </div>
          ) : null}

          {actions ? <div className="mt-10 flex flex-wrap gap-5 md:mt-12">{actions}</div> : null}
        </motion.div>
        
        {!isFull && panel && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={cn(
              'hero-panel !rounded-[2.5rem]',
              isDark
                ? 'border-white/10 bg-white/6 text-white shadow-[0_32px_100px_rgba(0,0,0,0.3)] backdrop-blur-md'
                : 'border-outline-variant/30 bg-white/95 text-on-surface shadow-[0_32px_100px_rgba(30,27,19,0.12)] backdrop-blur-md'
            )}
          >
            {panel}
          </motion.div>
        )}
      </div>
    </header>
  );
}
