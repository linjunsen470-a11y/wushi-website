import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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

export function getAllGuidePosts(): Omit<GuidePost, 'content'>[] {
  if (!fs.existsSync(guideDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(guideDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(guideDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        updated: data.updated,
        excerpt: data.excerpt,
        coverImage: data.coverImage,
        coverAlt: data.coverAlt,
        category: data.category,
        tags: data.tags || [],
        keywords: data.keywords || [],
        ctaText: data.ctaText,
      } as Omit<GuidePost, 'content'>;
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getGuidePostBySlug(slug: string): GuidePost | null {
  try {
    const fullPath = path.join(guideDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      updated: data.updated,
      excerpt: data.excerpt,
      coverImage: data.coverImage,
      coverAlt: data.coverAlt,
      category: data.category,
      tags: data.tags || [],
      keywords: data.keywords || [],
      ctaText: data.ctaText,
      content,
    } as GuidePost;
  } catch {
    return null;
  }
}
