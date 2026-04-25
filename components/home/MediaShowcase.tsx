import Image from 'next/image';
import { homepageSections } from '@/lib/site-data';
import { FadeIn } from '@/components/animations/FadeIn';

export default function MediaShowcase() {
  return (
    <section className="bg-surface-container-low section-space-lg">
      <div className="shell">
        <FadeIn className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="group premium-shadow relative aspect-[3/4] overflow-hidden rounded-[2.25rem]">
              <Image
                src={homepageSections.media.imageA}
                alt={homepageSections.media.imageAAlt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="flex flex-col gap-10">
              <div className="editorial-card group relative overflow-hidden !p-12">
                <span className="section-eyebrow text-secondary">真实交付</span>
                <h2 className="section-title !text-4xl !leading-[1.1]">{homepageSections.media.title}</h2>
                <p className="body-copy mt-6 text-on-surface-variant font-medium leading-relaxed">{homepageSections.media.text}</p>
              </div>
              <div className="premium-shadow relative min-h-[250px] flex-1 overflow-hidden rounded-[2rem]">
                <Image
                  src={homepageSections.media.imageB}
                  alt={homepageSections.media.imageBAlt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 20vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="premium-shadow relative aspect-[4/5] overflow-hidden rounded-[2.25rem] lg:h-[700px] lg:aspect-auto">
            <Image
              src={homepageSections.media.imageC}
              alt={homepageSections.media.imageCAlt}
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 30vw, 100vw"
              className="object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
