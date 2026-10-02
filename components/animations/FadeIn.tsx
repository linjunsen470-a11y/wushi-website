'use client';

import type { CSSProperties, HTMLAttributes } from 'react';
import { useReveal } from '@/hooks/use-reveal';
import { cn } from '@/lib/utils';

interface FadeInProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  once?: boolean;
  margin?: string;
}

export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  distance = 30,
  duration = 0.8,
  once = true,
  margin = '-100px',
  className,
  style,
  ...props
}: FadeInProps) {
  const { ref, isVisible } = useReveal({ once, rootMargin: `0px 0px ${margin} 0px` });
  // Runtime values cannot be interpolated into Tailwind class names.
  const animationStyle = {
    '--reveal-delay': `${delay}s`,
    '--reveal-duration': `${duration}s`,
    '--reveal-x': `${direction === 'left' ? distance : direction === 'right' ? -distance : 0}px`,
    '--reveal-y': `${direction === 'up' ? distance : direction === 'down' ? -distance : 0}px`,
    ...style,
  } as CSSProperties;

  return (
    <div ref={ref} className={cn('reveal', isVisible && 'reveal-visible', className)} style={animationStyle} {...props}>
      {children}
    </div>
  );
}
