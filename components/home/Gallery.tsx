import Image from 'next/image';
import { galleryItems } from '@/lib/site-data';
import { FadeIn } from '@/components/animations/FadeIn';

export default function Gallery() {
  return (
    <section className="bg-surface-container-low section-space-lg">
      <div className="shell">
        <FadeIn className="mx-auto mb-20 text-center flex flex-col items-center max-w-2xl">
          <span className="section-eyebrow text-secondary">所见即所得</span>
          <h2 className="section-title">所有素材均来自我们的真实执行现场</h2>
          <p className="body-copy mt-6 text-on-surface-variant font-medium">
            您在网站看到的每一张图、每一段视频，都是我们鑫龙堂团队实际参与的活动记录。真实效果，比任何空话都有力。
          </p>
        </FadeIn>
        <div className="columns-1 gap-8 space-y-8 sm:columns-2 lg:columns-3">
          {galleryItems.slice(0, 6).map((item, index) => (
            <FadeIn
              key={index}
              delay={index * 0.1}
              className="hover-lift group relative break-inside-avoid overflow-hidden rounded-[2rem] shadow-xl border border-outline-variant/10"
            >
              <Image
                src={item.src}
                alt={item.alt}
                className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
