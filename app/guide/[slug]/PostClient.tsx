'use client';

import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';
import { GuidePost } from '@/lib/guide';

interface PostClientProps {
  post: GuidePost;
  relatedPosts: Omit<GuidePost, 'content'>[];
}

const subtleFadeProps = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

export default function PostClient({ post, relatedPosts }: PostClientProps) {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      
      {/* Article Header */}
      <header className="relative pt-32 pb-20 overflow-hidden bg-surface-container-low">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(163,0,17,0.05),transparent_70%)]" />
        <div className="shell relative z-10">
          <motion.div {...subtleFadeProps} className="max-w-4xl">
            <nav className="flex items-center gap-2 mb-8">
              <Link href="/guide" className="font-headline text-[0.72rem] font-black tracking-widest text-secondary hover:text-primary transition-colors">
                预订指南
              </Link>
              <span className="text-on-surface-variant/30 text-xs">/</span>
              <span className="font-headline text-[0.72rem] font-bold tracking-widest text-on-surface-variant/60">
                {post.category}
              </span>
            </nav>
            
            <h1 className="font-headline text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-on-surface">
              {post.title}
            </h1>
            
            <p className="mt-8 text-lg md:text-xl text-on-surface-variant font-medium leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-outline-variant/30 pt-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-black text-xs">网</span>
                </div>
                <div>
                  <p className="text-[0.72rem] font-black text-on-surface leading-none">重庆舞狮网执行团队</p>
                  <p className="mt-1 text-[0.65rem] font-bold text-on-surface-variant/60">发布于 {post.date}</p>
                </div>
              </div>
              <div className="h-4 w-px bg-outline-variant/30 hidden sm:block" />
              <div className="flex flex-wrap gap-2">
                {post.keywords.slice(0, 3).map((keyword) => (
                  <span key={keyword} className="text-[0.65rem] font-bold text-on-surface-variant/60 bg-white px-3 py-1 rounded-full border border-outline-variant/10 shadow-sm">
                    #{keyword}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Article Content Area */}
      <section className="py-20">
        <div className="shell grid gap-16 lg:grid-cols-[1fr_320px]">
          {/* Main Content */}
          <motion.article 
            {...subtleFadeProps}
            transition={{ ...subtleFadeProps.transition, delay: 0.2 }}
            className="min-w-0"
          >
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[2.5rem] mb-16 shadow-2xl border border-white/20">
              <Image 
                src={post.coverImage} 
                alt={post.coverAlt} 
                fill 
                priority
                className="object-cover"
              />
            </div>
            
            <div className="prose-guide">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
            </div>

            {/* In-article CTA Section */}
            <div className="mt-20 rounded-[2.5rem] bg-[#1a1714] p-8 md:p-12 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
                <div className="max-w-md">
                  <span className="font-headline text-[0.7rem] font-black tracking-[0.2em] text-secondary-fixed">商业转化建议</span>
                  <h3 className="mt-4 font-headline text-2xl font-black tracking-tight">{post.ctaText}</h3>
                  <p className="mt-4 text-white/60 text-sm leading-relaxed font-medium">
                    我们将根据您的场地位置与预期效果，提供一份包含报价、动线图及应急预案在内的专业执行大纲。
                  </p>
                </div>
                <div className="shrink-0">
                  <Link href="/contact" className="button-primary !bg-secondary-fixed !text-on-secondary-fixed shadow-lg hover:shadow-secondary-fixed/20">
                    立即咨询报价
                  </Link>
                </div>
              </div>
            </div>

            {/* Internal Links Footer */}
            <nav className="mt-16 pt-10 border-t border-outline-variant/20 flex flex-wrap gap-4">
              <span className="text-xs font-black text-on-surface-variant uppercase tracking-widest mr-4">相关链接</span>
              <Link href="/services" className="text-sm font-bold text-on-surface hover:text-primary underline decoration-primary/20 underline-offset-4">服务项目</Link>
              <Link href="/faq" className="text-sm font-bold text-on-surface hover:text-primary underline decoration-primary/20 underline-offset-4">常见问题</Link>
              <Link href="/solutions" className="text-sm font-bold text-on-surface hover:text-primary underline decoration-primary/20 underline-offset-4">场景方案</Link>
            </nav>
          </motion.article>

          {/* Sidebar */}
          <aside className="space-y-12">
            {/* Sidebar CTA */}
            <div className="sticky top-32 space-y-12">
              <div className="rounded-3xl bg-surface-container-high p-8 border border-outline-variant/30 shadow-sm">
                <h4 className="font-headline text-lg font-black text-on-surface tracking-tight">需要专业建议？</h4>
                <p className="mt-4 text-sm leading-relaxed text-on-surface-variant font-medium">
                  重庆本地 15 年执行经验，服务过 1000+ 企业，我们懂流程，更懂您的预算焦虑。
                </p>
                <Link href="/contact" className="button-primary mt-8 w-full">
                  添加执行官微信
                </Link>
              </div>

              {/* Related Posts */}
              <div>
                <h4 className="font-headline text-lg font-black text-on-surface tracking-tight mb-8">更多指南</h4>
                <div className="space-y-8">
                  {relatedPosts.map((r) => (
                    <Link key={r.slug} href={`/guide/${r.slug}`} className="group block">
                      <div className="relative aspect-video overflow-hidden rounded-2xl mb-4 border border-outline-variant/10">
                        <Image src={r.coverImage} alt={r.coverAlt} fill className="object-cover transition-transform group-hover:scale-105" />
                      </div>
                      <h5 className="font-headline text-sm font-black text-on-surface group-hover:text-primary transition-colors leading-snug">
                        {r.title}
                      </h5>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
