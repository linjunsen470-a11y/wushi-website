'use client';

import { motion, HTMLMotionProps } from 'motion/react';
import { ReactNode } from 'react';

interface FadeInProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  once?: boolean;
  margin?: string;
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
  ...props
}: FadeInProps) {
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
      {...props}
    >
      {children}
    </motion.div>
  );
}
