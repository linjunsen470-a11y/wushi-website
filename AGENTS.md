# Repository Guidelines

## Project Structure & Module Organization
This repository is a Next.js 16 App Router site written in TypeScript. Route entry points live under `app/` (`app/page.tsx`, `app/about/page.tsx`, `app/services/page.tsx`). Shared UI belongs in `components/`, reusable hooks in `hooks/`, and utility helpers in `lib/`. Static media is stored in `assets/` with subfolders for `photos/` and `videos/`. `stich-assets/` holds design reference material and should be treated as source inspiration, not runtime code. `blog-template/` is a dedicated workspace for drafting blog posts, soft articles, and research; it is ignored by Git and should be used as a creative staging area.

## Build, Test, and Development Commands
Use `pnpm` with Node `>=20.9.0`.

- `pnpm install`: install dependencies.
- `pnpm dev`: start the local dev server with webpack.
- `pnpm build`: create a production build.
- `pnpm start`: run the production server after a build.
- `pnpm lint`: run ESLint across the repo.
- `pnpm clean`: remove `.next/` build output.

Before local development, copy `.env.example` to `.env.local` and provide `GEMINI_API_KEY`.

## Coding Style & Naming Conventions
Follow the existing TypeScript and React style: strict typing, functional components, and absolute imports via `@/`. Use PascalCase for components (`Navbar.tsx`), camelCase for hooks and utilities (`use-mobile.ts`, `utils.ts`), and keep route files named `page.tsx` or `layout.tsx` per App Router conventions. The codebase uses 2-space indentation, semicolons, and single quotes. Styling is handled with Tailwind CSS v4 in `app/globals.css`; prefer utility classes over ad hoc CSS files. When dynamic styles (like animation delays) are needed, use Tailwind 4 arbitrary property classes (e.g., `[--delay:1s]`) instead of React inline styles to maintain a clean lint state. For entry reveal animations, wrap server components in the `<FadeIn>` client wrapper to preserve SSR benefits while adding interactivity.

## Testing Guidelines
There is no committed test suite yet. At minimum, run `pnpm lint` and `pnpm build` before opening a PR. When adding tests, place them near the feature or in a dedicated `__tests__/` folder, and use `*.test.ts(x)` naming. Favor component and route-level coverage for new interactive behavior.

## Commit & Pull Request Guidelines
Git history is not available in this checkout, so no repository-specific commit convention can be inferred. Use short, imperative commit subjects such as `Add contact page hero copy` or `Fix mobile nav scroll state`. PRs should include a concise summary, testing notes, linked issues when applicable, and screenshots or recordings for UI changes.

## Security & Configuration Tips
Do not commit secrets. Keep runtime configuration in `.env.local`, using `.env.example` as the template. Review remote image or video sources carefully; prefer local assets in `assets/` when stability matters.

## Local CMS & Content Maintenance
The site uses a local file-based Markdown CMS for publishing articles in the "预订指南" (Booking Guide) section.

### 1. File Location & Naming
- Production articles live under `content/guide/[slug].md`.
- Drafts, templates, and tone instructions are stored in `blog-template/` (ignored by Git). Once a draft is approved, move it to `content/guide/` as a production Markdown file.

### 2. Frontmatter Schema
Every Markdown article must include the following YAML Frontmatter fields:
```yaml
---
title: "文章标题"
slug: "url-slug"                   # must match the file basename
date: "YYYY-MM-DD"                 # use the actual current date (e.g., 2026-07-03)
updated: "YYYY-MM-DD"              # update date
excerpt: "用于列表页和SEO的简短摘要"
coverImage: "/images/guide/filename.webp" # select from public/images/guide/
coverAlt: "图片描述文案，用作图片alt属性进行SEO优化"
category: "开业指南"               # e.g., "开业指南", "场景方案", "价格指南"
tags: ["标签1", "标签2"]
keywords:
  - "主关键词"
  - "辅助关键词"
ctaText: "联系咨询或报价按钮文案"
---
```

### 3. Verification & SEO Automation
- Next.js reads these files dynamically and performs SSG rendering for `/guide/[slug]` routes.
- The `postbuild` hook automatically runs `scripts/seo-submit.mjs` to extract all guide routes and push them directly to search engines (Baidu & IndexNow/Bing).
- **Required check**: Always run `pnpm lint` and `pnpm build` locally before opening a pull request to ensure that metadata parses correctly and the build compiles successfully.

