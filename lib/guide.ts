import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { load } from 'js-yaml';
import { z } from 'zod';

const guideDirectory = path.join(process.cwd(), 'content/guide');

export interface GuidePost {
  title: string;
  slug: string;
  date: string;
  updated: string;
  excerpt: string;
  coverImage: string;
  coverAlt: string;
  category: string;
  tags: string[];
  keywords: string[];
  ctaText: string;
  content: string;
}

const matterOptions = {
  engines: {
    yaml: {
      parse: (str: string) => load(str) as object,
    },
  },
};

const dateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine((value) => {
  const date = new Date(value);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}, '日期必须是有效的 YYYY-MM-DD');

const metadataSchema = z.object({
  title: z.string().trim().min(1),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  date: dateSchema,
  updated: dateSchema,
  excerpt: z.string().trim().min(1),
  coverImage: z.string().regex(/^\/images\/guide\/[a-zA-Z0-9_-]+\.(?:webp|png|jpe?g)$/),
  coverAlt: z.string().trim().min(1),
  category: z.string().trim().min(1),
  tags: z.array(z.string().trim().min(1)),
  keywords: z.array(z.string().trim().min(1)),
  ctaText: z.string().trim().min(1),
}).refine((data) => data.updated >= data.date, {
  message: '更新日期不能早于发布日期',
  path: ['updated'],
});

function readGuidePost(slug: string): GuidePost {
  const fileContents = fs.readFileSync(path.join(guideDirectory, `${slug}.md`), 'utf8');
  const { data, content } = matter(fileContents, matterOptions);
  const parsed = metadataSchema.safeParse(data);
  if (!parsed.success) {
    throw new Error(`文章 ${slug} 元数据无效：${parsed.error.message}`);
  }
  if (parsed.data.slug !== slug) {
    throw new Error(`文章 ${slug} 的 slug 与文件名不一致`);
  }
  if (!fs.existsSync(path.join(process.cwd(), 'public', parsed.data.coverImage))) {
    throw new Error(`文章 ${slug} 的封面不存在：${parsed.data.coverImage}`);
  }
  return { ...parsed.data, content };
}

export function getAllGuidePosts(): Omit<GuidePost, 'content'>[] {
  if (!fs.existsSync(guideDirectory)) return [];

  return fs.readdirSync(guideDirectory)
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const { content: _content, ...metadata } = readGuidePost(fileName.slice(0, -3));
      return metadata;
    })
    .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
}

export function getGuidePostBySlug(slug: string): GuidePost | null {
  // Reject path separators and traversal before touching the filesystem.
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return null;
  if (!fs.existsSync(path.join(guideDirectory, `${slug}.md`))) return null;
  // Invalid published content must fail the build instead of silently becoming a 404.
  return readGuidePost(slug);
}
