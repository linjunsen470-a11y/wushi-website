import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getGuidePostBySlug, getAllGuidePosts } from '@/lib/guide';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';
import ArticleJsonLd from '@/components/ArticleJsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedGuides from '@/components/RelatedGuides';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getGuidePostBySlug(slug);

  if (!post) return { title: '文章未找到' };

  return {
    title: `${post.title} - 舞狮预订指南`,
    description: post.excerpt,
    keywords: post.keywords.join(', '),
    alternates: {
      canonical: `https://www.cqwushi.com/guide/${slug}`,
    },
    openGraph: {
      title: `${post.title} - 舞狮预订指南 | 重庆鑫龙堂舞狮`,
      description: post.excerpt,
      url: `https://www.cqwushi.com/guide/${slug}`,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      authors: ['重庆鑫龙堂舞狮'],
      images: [
        {
          url: `https://www.cqwushi.com${post.coverImage}`,
          alt: post.coverAlt || post.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllGuidePosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function GuidePostPage({ params }: Props) {
  const { slug } = await params;
  const post = getGuidePostBySlug(slug);

  if (!post) {
    notFound();
  }

  const posts = getAllGuidePosts();
  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex >= 0 && currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      <ArticleJsonLd post={post} />

      <section className="bg-surface pt-24 pb-8 md:pt-[7.5rem] md:pb-10">
        <div className="shell">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { name: '预订指南', item: '/guide' },
                { name: post.title, item: `/guide/${slug}` },
              ]}
            />
            <Link 
              href="/guide" 
              className="mb-7 inline-flex items-center gap-2 font-headline text-xs font-black tracking-[0.16em] text-primary transition-colors hover:text-primary-container"
            >
              <ArrowLeft aria-hidden="true" size={17} strokeWidth={2.4} />
              指南目录
            </Link>

            <div className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="font-headline text-[0.72rem] font-black tracking-[0.18em] text-secondary">
                {post.category}
              </span>
              <time className="text-sm font-medium text-on-surface-variant/70">
                {post.date}
              </time>
            </div>

            <h1 className="page-hero-title max-w-4xl text-on-surface">
              {post.title}
            </h1>

            <p className="page-lead mt-6 text-on-surface-variant">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="shell">
          <div className="relative mx-auto aspect-[16/8] w-full max-w-6xl overflow-hidden rounded-[2rem] border border-outline-variant/10 bg-surface-container-low premium-shadow">
            <Image
              src={post.coverImage}
              alt={post.coverAlt || post.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="shell">
          <div className="mx-auto max-w-3xl">
            <div className="prose-guide prose-lg prose-p:text-on-surface-variant prose-p:font-medium prose-p:leading-relaxed prose-h2:mt-14 prose-h2:mb-6 prose-h2:text-3xl prose-h3:text-2xl prose-strong:text-on-surface prose-strong:font-black prose-table:border-collapse prose-th:bg-surface-container prose-th:p-4 prose-td:border-b prose-td:border-outline-variant/10 prose-td:p-4">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {post.tags.length > 0 ? (
              <div className="mt-16 border-t border-outline-variant/15 pt-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="mr-2 font-headline text-xs font-black tracking-[0.16em] text-on-surface-variant">
                    主题
                  </span>
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="rounded-full bg-surface-container-low px-4 py-1.5 font-headline text-[0.7rem] font-bold tracking-[0.08em] text-on-surface-variant"
                  >
                    #{tag}
                  </span>
                ))}
                </div>
              </div>
            ) : null}

            <RelatedGuides currentSlug={post.slug} category={post.category} />

            {/* 上一篇/下一篇导航按钮 */}
            <div className="mt-16 pt-10 border-t border-outline-variant/15 flex flex-col sm:flex-row gap-4 justify-between items-stretch">
              {/* 上一篇 */}
              <Link 
                href={prevPost ? `/guide/${prevPost.slug}` : '/guide'}
                className="flex-1 flex items-center gap-4 rounded-2xl border border-outline-variant/30 hover:border-primary/50 hover:bg-surface-container-low px-5 py-4 transition-all duration-300 group min-w-0"
              >
                <ArrowLeft size={16} className="text-on-surface-variant group-hover:text-primary transition-colors shrink-0" />
                <div className="text-left min-w-0">
                  <span className="block font-headline text-[0.68rem] font-bold tracking-[0.1em] text-on-surface-variant/60 uppercase">
                    {prevPost ? '上一篇' : '没有更新了'}
                  </span>
                  <span className="block mt-1 font-headline text-sm font-black text-on-surface group-hover:text-primary transition-colors truncate">
                    {prevPost ? prevPost.title : '返回指南目录'}
                  </span>
                </div>
              </Link>

              {/* 下一篇 */}
              <Link 
                href={nextPost ? `/guide/${nextPost.slug}` : '/guide'}
                className="flex-1 flex items-center justify-between gap-4 rounded-2xl border border-outline-variant/30 hover:border-primary/50 hover:bg-surface-container-low px-5 py-4 transition-all duration-300 group min-w-0"
              >
                <div className="text-left min-w-0">
                  <span className="block font-headline text-[0.68rem] font-bold tracking-[0.1em] text-on-surface-variant/60 uppercase">
                    {nextPost ? '下一篇' : '没有更旧了'}
                  </span>
                  <span className="block mt-1 font-headline text-sm font-black text-on-surface group-hover:text-primary transition-colors truncate">
                    {nextPost ? nextPost.title : '返回指南目录'}
                  </span>
                </div>
                <ArrowRight size={16} className="text-on-surface-variant group-hover:text-primary transition-colors shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
