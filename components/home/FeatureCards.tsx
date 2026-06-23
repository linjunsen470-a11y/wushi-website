import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';

const growthPages = [
  {
    title: '看视频',
    href: '/media',
    text: '以前演过的现场，没拼素材。鼓齐不齐、人稳不稳，自个儿看。',
  },
  {
    title: '场合咋排',
    href: '/solutions',
    text: '商场开业、街上路演、喜宴——场合不一样，排法也不一样。',
  },
  {
    title: '常问的',
    href: '/faq',
    text: '价钱、啥时候定、现场要准备啥。问的人多，搁这儿了。',
  },
];

export default function FeatureCards() {
  return (
    <section className="overflow-hidden bg-surface section-space-lg">
      <div className="shell">
        <FadeIn className="section-intro grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="max-w-xl">
            <span className="section-eyebrow text-secondary">多看看</span>
            <h2 className="section-title">视频、场合、价钱——自个儿翻翻</h2>
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
