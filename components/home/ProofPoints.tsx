import { proofPoints } from '@/lib/site-data';
import { FadeIn } from '@/components/animations/FadeIn';

export default function ProofPoints() {
  return (
    <section className="bg-surface-container-low py-14">
      <div className="shell grid gap-6 lg:grid-cols-3">
        {proofPoints.map((item, idx) => (
          <FadeIn
            key={item.title}
            delay={idx * 0.1}
            className="editorial-card !p-8 h-full"
          >
            <p className="font-headline text-2xl font-black tracking-tight text-on-surface">{item.title}</p>
            <p className="mt-4 text-base leading-relaxed text-on-surface-variant font-medium">{item.text}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
