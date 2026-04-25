import Link from 'next/link';
import { stats } from '@/lib/site-data';
import { FadeIn } from '@/components/animations/FadeIn';

export default function Stats() {
  return (
    <section className="relative bg-[#1a1710] section-space-lg text-white">
      <div className="absolute inset-0 bg-[url('/patterns/carbon-fibre.png')] opacity-5" />
      <div className="shell relative z-10 grid gap-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <FadeIn>
          <span className="section-eyebrow text-secondary-fixed">为什么选我们</span>
          <h2 className="section-title text-white">
            不仅仅跳得精彩，
            <br />
            更能理解您的活动需求
          </h2>
          <div className="mt-10">
            <Link
              href="/contact"
              className="button-primary group relative inline-flex overflow-hidden px-8 py-3.5 shadow-[0_18px_52px_rgba(163,0,17,0.32)] transition-all hover:-translate-y-1 hover:bg-primary-container"
            >
              <span className="relative z-10">免费定制专属演出方案</span>
              <div className="absolute inset-0 -translate-x-full bg-white/18 transition-transform duration-500 group-hover:translate-x-0" />
            </Link>
          </div>
        </FadeIn>
        <div className="grid gap-8 sm:grid-cols-2">
          {stats.map((stat, idx) => (
            <FadeIn
              key={stat.label}
              delay={idx * 0.1}
              className="glass-panel group relative overflow-hidden rounded-[2rem] p-10 h-full"
            >
              <div className="absolute top-0 left-0 h-full w-1 origin-top scale-y-0 bg-secondary transition-transform duration-500 group-hover:scale-y-100" />
              <div className="font-headline text-7xl font-black text-secondary-fixed tracking-tight">{stat.value}</div>
              <div className="mt-4 text-sm font-black uppercase tracking-[0.2em] text-white/50">{stat.label}</div>
              {stat.value.includes('+') && (
                <Link href="/cases" className="mt-4 inline-block text-[10px] font-black tracking-widest text-secondary hover:underline">
                  查看真实案例记录 →
                </Link>
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
