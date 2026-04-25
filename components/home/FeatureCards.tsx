import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';

const growthPages = [
  {
    title: '视频案例',
    href: '/media',
    text: '观看过往真实演出现场，直观感受热烈气氛、高质量配合与视觉呈现。',
  },
  {
    title: '场景方案',
    href: '/solutions',
    text: '涵盖商场开业、品牌路演、喜宴等多元化场景，提供定制级专业配置。',
  },
  {
    title: '预订指南',
    href: '/faq',
    text: '了解服务流程、报价参考与执行细节，让您的前期规划更清晰可控。',
  },
];

export default function FeatureCards() {
  return (
    <section className="overflow-hidden bg-surface section-space-lg">
      <div className="shell">
        <FadeIn className="section-intro grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="max-w-xl">
            <span className="section-eyebrow text-secondary">服务特色</span>
            <h2 className="section-title">全方位了解我们强悍的专业服务体系</h2>
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
                className="editorial-card group block h-full border border-transparent transition-all hover:border-primary/20"
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
