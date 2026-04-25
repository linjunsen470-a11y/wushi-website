import Image from 'next/image';
import { homepageSections } from '@/lib/site-data';
import { FadeIn } from '@/components/animations/FadeIn';

export default function Craftsmanship() {
  return (
    <section className="ink-silk relative overflow-hidden section-space-lg text-white">
      <div className="watermark absolute -right-10 -bottom-10 opacity-10">XINLONG</div>

      <div className="shell relative z-10">
        <FadeIn className="section-intro flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="section-eyebrow text-secondary-fixed">稳定表现</span>
            <h2 className="section-title text-white">
              现场效果更好，
              <br />
              也是因为更在意细节
            </h2>
          </div>
          <p className="max-w-xl text-[1.02rem] leading-[1.8] text-white/70 md:text-[1.12rem]">
            一场演出好不好，不仅是看跳得高不高，
            <br className="hidden md:block" />
            还要看动作整不整齐、狮头新不新，以及跟现场互动的节奏。
          </p>
        </FadeIn>

        <div className="grid gap-10 md:grid-cols-12">
          <FadeIn
            className="premium-shadow relative h-[400px] overflow-hidden rounded-[2.25rem] md:col-span-8 md:h-auto"
          >
            <Image
              src={homepageSections.craft.imageA}
              alt={homepageSections.craft.imageAAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </FadeIn>
          <div className="grid gap-10 md:col-span-4">
            <FadeIn
              delay={0.2}
              className="rounded-[2.25rem] border border-white/12 bg-white/10 p-12 shadow-2xl backdrop-blur-xl"
            >
              <h3 className="font-headline text-4xl font-black leading-[1.1] tracking-tight text-secondary-fixed">
                {homepageSections.craft.title}
              </h3>
              <p className="body-copy mt-6 text-white/80 font-medium">{homepageSections.craft.text}</p>
            </FadeIn>
            <div className="grid grid-cols-2 gap-6">
              <FadeIn
                delay={0.3}
                className="relative aspect-square overflow-hidden rounded-[2rem]"
              >
                <Image
                  src={homepageSections.craft.imageB}
                  alt={homepageSections.craft.imageBAlt}
                  fill
                  sizes="15vw"
                  className="object-cover"
                />
              </FadeIn>
              <FadeIn
                delay={0.4}
                className="relative aspect-square overflow-hidden rounded-[2rem]"
              >
                <Image
                  src={homepageSections.craft.imageC}
                  alt={homepageSections.craft.imageCAlt}
                  fill
                  sizes="15vw"
                  className="object-cover"
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
