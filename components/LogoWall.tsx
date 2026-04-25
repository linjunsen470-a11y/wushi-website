import { partnerLogos } from '@/lib/site-data';
import { FadeIn } from '@/components/animations/FadeIn';

export default function LogoWall() {
  return (
    <section className="bg-surface py-20 border-y border-outline-variant/10">
      <div className="shell">
        <div className="text-center mb-12">
          <span className="section-eyebrow text-secondary">合作伙伴</span>
          <h2 className="font-headline text-2xl font-black text-on-surface mt-2 tracking-tight">
            深耕重庆及西南区域，服务众多头部商业项目
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {partnerLogos.map((partner, idx) => (
            <FadeIn
              key={partner}
              delay={idx * 0.05}
              duration={0.5}
              direction="up"
              distance={10}
              className="flex items-center justify-center p-8 rounded-[1.2rem] bg-surface-container-low border border-outline-variant/15 hover:border-primary/20 transition-all group relative overflow-hidden shadow-sm hover:shadow-md"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="font-headline text-lg font-black text-on-surface/40 group-hover:text-primary group-hover:scale-105 transition-all tracking-tighter text-center uppercase">
                {partner}
              </span>
            </FadeIn>
          ))}
          <FadeIn
            delay={partnerLogos.length * 0.05}
            duration={0.5}
            direction="up"
            distance={10}
            className="flex items-center justify-center p-8 rounded-[1.1rem] bg-primary/5 border border-dashed border-primary/20"
          >
            <span className="font-headline text-sm font-black text-primary/60 tracking-tight">等众多商业地产及品牌</span>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
