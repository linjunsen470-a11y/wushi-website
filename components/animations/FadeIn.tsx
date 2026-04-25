'use client';

import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { useReveal } from '@/hooks/use-reveal';
import { cn } from '@/lib/utils';

interface FadeInProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  once?: boolean;
  margin?: string;
  useJS?: boolean;
  className?: string;
}

const transitionBase = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  distance = 30,
  duration = 0.8,
  once = true,
  margin = "-100px",
  useJS = false,
  className,
  ...props
}: FadeInProps) {
  const { ref, isVisible } = useReveal({ 
    once, 
    rootMargin: `0px 0px ${margin} 0px` 
  });

  const getDirectionOffset = () => {
    switch (direction) {
      case 'up': return { y: distance };
      case 'down': return { y: -distance };
      case 'left': return { x: distance };
      case 'right': return { x: -distance };
      case 'none': return {};
      default: return { y: distance };
    }
  };

  // If useJS is requested, fall back to motion
  if (useJS) {
    return (
      <motion.div
        initial={{ opacity: 0, ...getDirectionOffset() }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once, margin }}
        transition={{
          duration,
          ease: transitionBase.ease,
          delay,
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  // Default CSS-based reveal
  const { x, y } = getDirectionOffset();

  return (
    <div
      ref={ref}
      className={cn(
        'reveal',
        isVisible && 'reveal-visible',
        `[--reveal-delay:${delay}s]`,
        `[--reveal-duration:${duration}s]`,
        `[--reveal-x:${x ?? 0}px]`,
        `[--reveal-y:${y ?? 0}px]`,
        className
      )}
      {...(props as any)}
    >
      {children}
    </div>
  );
}
