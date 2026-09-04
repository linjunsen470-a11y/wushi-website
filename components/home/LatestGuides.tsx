import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import type { GuidePost } from '@/lib/guide';

type LatestGuidesProps = {
  posts: Omit<GuidePost, 'content'>[];
};

export default function LatestGuides({ posts }: LatestGuidesProps) {
  if (posts.length === 0) return null;

  return (
    <section className="bg-surface-container-low section-space-lg">
      <div className="shell">
        <FadeIn className="section-intro flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="section-eyebrow text-secondary">最新预订指南</span>
            <h2 className="section-title">
              舞狮演出全流程指南
            </h2>
          </div>
          <div className="max-w-xl">
            <p className="body-copy text-on-surface-variant">
              清晰了解舞狮报价、流程与执行标准。
            </p>
            <Link
              href="/guide"
              className="mt-5 inline-flex items-center gap-2 font-headline text-xs font-black tracking-[0.16em] text-primary transition-colors hover:text-primary-container"
            >
              查看全部指南
              <ArrowRight aria-hidden="true" size={16} strokeWidth={2.4} />
            </Link>
          </div>
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-3">
          {posts.map((post, index) => (
            <FadeIn
              key={post.slug}
              delay={index * 0.12}
              className="group h-full overflow-hidden rounded-[2rem] border border-outline-variant/10 bg-white shadow-sm transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_24px_60px_-30px_rgba(30,27,19,0.35)]"
            >
              <article className="flex h-full flex-col">
                <Link href={`/guide/${post.slug}`} className="block">
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface-container-low">
                    <Image
                      src={post.coverImage}
                      alt={post.coverAlt || post.title}
                      fill
                      sizes="(min-width: 1024px) 30vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Link>

                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="font-headline text-[0.68rem] font-black tracking-[0.16em] text-secondary">
                      {post.category}
                    </span>
                    <time className="text-sm font-medium text-on-surface-variant/70">
                      {post.updated || post.date}
                    </time>
                  </div>

                  <h3 className="font-headline text-2xl font-black leading-tight tracking-tight text-on-surface transition-colors duration-300 group-hover:text-primary">
                    <Link href={`/guide/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-[0.98rem] font-medium leading-relaxed text-on-surface-variant">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/guide/${post.slug}`}
                    className="mt-auto flex items-center gap-2 pt-8 font-headline text-[0.74rem] font-black tracking-[0.14em] text-primary"
                  >
                    查看指南
                    <ArrowRight aria-hidden="true" size={16} strokeWidth={2.4} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
