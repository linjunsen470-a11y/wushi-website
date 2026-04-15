'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { testimonials } from '@/lib/site-data';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="bg-surface-container-low py-32 overflow-hidden">
      <div className="shell">
        <div className="max-w-3xl mb-16">
          <span className="section-eyebrow text-secondary">客户评价</span>
          <h2 className="page-section-title !text-on-surface mt-4 tracking-tight">
            听听合作过的
            <br />
            甲方与策划人怎么说
          </h2>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="editorial-card !p-10 flex flex-col justify-between group hover:border-primary/20 transition-all"
            >
              <div>
                <Quote className="text-primary/10 mb-8 group-hover:text-primary/20 transition-colors" size={48} />
                <p className="text-lg leading-relaxed text-on-surface-variant font-medium">
                  {item.content}
                </p>
              </div>
              
              <div className="mt-12 flex items-center gap-4 border-t border-outline-variant/30 pt-8">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-outline-variant/20">
                  <Image src={item.avatar} alt={item.altText || item.author} fill sizes="48px" className="object-cover" />
                </div>
                <div>
                  <p className="font-headline text-base font-black text-on-surface tracking-tight">{item.author}</p>
                  <p className="text-[11px] font-bold text-on-surface-variant/60 uppercase tracking-widest mt-0.5">{item.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
