import Link from 'next/link';
import Image from 'next/image';
import { getAllGuidePosts } from '@/lib/guide';

interface Props {
  currentSlug: string;
  category: string;
}

export default function RelatedGuides({ currentSlug, category }: Props) {
  const allPosts = getAllGuidePosts();

  const related = allPosts
    .filter(post => post.slug !== currentSlug)
    .sort((a, b) => {
      if (a.category === category && b.category !== category) return -1;
      if (a.category !== category && b.category === category) return 1;
      return 0;
    })
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <div className="mt-16 border-t border-outline-variant/15 pt-12">
      <h3 className="font-headline text-lg font-black tracking-wider text-on-surface mb-6">
        相关指南推荐
      </h3>
      <div className="grid gap-6 sm:grid-cols-3">
        {related.map(post => (
          <Link
            key={post.slug}
            href={`/guide/${post.slug}`}
            className="group flex flex-col rounded-2xl border border-outline-variant/20 bg-surface-container-low overflow-hidden hover:border-primary/50 hover:bg-surface-container transition-[background-color,border-color,box-shadow] duration-300 premium-shadow-sm"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-container-low">
              <Image
                src={post.coverImage}
                alt={post.coverAlt || post.title}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <span className="font-headline text-[0.65rem] font-bold tracking-[0.15em] text-secondary uppercase mb-1.5 block">
                {post.category}
              </span>
              <h4 className="font-headline text-sm font-black text-on-surface group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                {post.title}
              </h4>
              <p className="mt-2 text-xs text-on-surface-variant/80 line-clamp-2 leading-relaxed flex-1">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
