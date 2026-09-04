import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';

const growthPages = [
  {
    title: '视频案例',
    href: '/media',
    text: '直击过往真实演出现场，直观了解现场氛围与团队交付水平。',
  },
  {
    title: '场景方案',
    href: '/solutions',
    text: '涵盖商超开业、品牌路演及喜宴庆典等多场景定制化配置。',
  },
  {
    title: '预订指南',
    href: '/faq',
    text: '汇总演出报价、时间预约及现场筹备等常见问题与解答。',
  },
];

export default function FeatureCards() {
  return (
    <section className="overflow-hidden bg-surface section-space-lg">
      <div className="shell">
        <FadeIn className="section-intro grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="max-w-xl">
            <span className="section-eyebrow text-secondary">服务特色</span>
            <h2 className="section-title">了解我们的服务与执行标准</h2>
          </div>
          <div className="hidden h-px w-full bg-outline-variant/30 lg:block" />
        </FadeIn>

        <div className="grid gap-10 lg:grid-cols-3">
          {growthPages.map((item, idx) => (
            <FadeIn
              key={item.href}
              delay={idx * 0.2}
              className="h-full"
            >
              <Link
                href={item.href}
                className="editorial-card group block h-full border border-transparent transition-[border-color,box-shadow] hover:border-primary/20"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-[1rem] bg-primary/5 text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-white">
                  <div className="h-6 w-6 rounded-full border-2 border-current" />
                </div>
                <h3 className="font-headline text-3xl font-black text-on-surface tracking-tight">{item.title}</h3>
                <p className="body-copy mt-4 text-on-surface-variant font-medium leading-relaxed">{item.text}</p>
                <div className="mt-10 flex translate-x-0 items-center gap-2 font-headline text-sm font-black uppercase tracking-widest text-primary transition-transform group-hover:translate-x-2">
                  <span>进入页面</span>
                  <span className="text-xl">→</span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
