# SEO Audit

## Scope

This audit reviews the current `Next.js 16` website with a focus on:

- image alternative text quality
- technical SEO gaps
- metadata completeness
- internal linking issues
- content language consistency

## Overall Conclusion

The current site has a usable structural foundation, but the SEO implementation is still incomplete.

The most important issues are:

1. broken internal links in the footer
2. no page-level metadata strategy
3. no sitemap or robots configuration
4. many weak or generic image `alt` texts
5. mixed Chinese and English content in key SEO areas
6. no structured data

## Findings

### 1. Broken Internal Links

Severity: High

The footer renders links to pages that do not currently exist.

Relevant files:

- [components/Footer.tsx](/D:/work/wushi-website/components/Footer.tsx#L27)
- [lib/site-data.ts](/D:/work/wushi-website/lib/site-data.ts#L199)

Problem routes:

- `/media`
- `/solutions`
- `/faq`

Why this matters:

- creates site-wide dead links
- weakens crawl quality
- wastes internal link authority
- harms user trust and navigation quality

Recommended fix:

- remove these links until the pages exist
- or implement the missing routes immediately

### 2. Metadata Is Only Defined Globally

Severity: High

The site currently defines only one global `title` and `description`.

Relevant file:

- [app/layout.tsx](/D:/work/wushi-website/app/layout.tsx#L17)

Current issue:

- homepage, services, cases, about, and contact all inherit the same metadata
- there are no page-specific `title`, `description`, `canonical`, `openGraph`, or `twitter` settings

Why this matters:

- pages compete with duplicated metadata
- search engines get weak relevance signals
- click-through rate may suffer because snippets are not tailored
- social sharing previews are under-specified

Recommended fix:

- add per-page `metadata` or `generateMetadata`
- define unique titles and descriptions for:
  - homepage
  - services
  - cases
  - about
  - contact
- add canonical URLs
- add Open Graph and Twitter metadata

### 3. Missing `robots` and `sitemap`

Severity: High

There is currently no `robots.ts`, `sitemap.ts`, or other metadata file for crawl guidance.

Observed from current app structure:

- no `app/robots.ts`
- no `app/sitemap.ts`

Why this matters:

- search engines receive no explicit crawl guidance
- sitemap discovery is weaker
- technical SEO baseline is incomplete

Recommended fix:

- add `app/robots.ts`
- add `app/sitemap.ts`
- if needed later, add `manifest.json` and richer metadata files

### 4. Many Image `alt` Texts Are Too Generic

Severity: Medium

Some image alternative texts are acceptable, especially where they reuse a meaningful content title. But many are generic, placeholder-like, or too vague to help accessibility or image SEO.

Examples of weak `alt` text:

- [app/page.tsx](/D:/work/wushi-website/app/page.tsx#L22) `Lion dance opening ceremony`
- [app/page.tsx](/D:/work/wushi-website/app/page.tsx#L118) `Audience and stage`
- [app/page.tsx](/D:/work/wushi-website/app/page.tsx#L123) `Red carpet ceremony`
- [app/page.tsx](/D:/work/wushi-website/app/page.tsx#L151) `High jong`
- [app/page.tsx](/D:/work/wushi-website/app/page.tsx#L154) `Blue lion stance`
- [app/page.tsx](/D:/work/wushi-website/app/page.tsx#L166) `Training scene 1`
- [app/page.tsx](/D:/work/wushi-website/app/page.tsx#L190) `Gallery 1`
- [app/about/page.tsx](/D:/work/wushi-website/app/about/page.tsx#L33) `Opening ceremony story image`
- [app/about/page.tsx](/D:/work/wushi-website/app/about/page.tsx#L82) `Lion head closeup`
- [app/about/page.tsx](/D:/work/wushi-website/app/about/page.tsx#L86) `High jong stage`
- [app/contact/page.tsx](/D:/work/wushi-website/app/contact/page.tsx#L124) `Contact inquiry stage`

Why this matters:

- weak accessibility value
- poor keyword relevance for image search
- does not explain the actual business context of the image

Better direction:

- describe the actual visual scene and business context
- include relevant Chinese service intent where natural
- examples:
  - `商场开业醒狮表演现场`
  - `婚宴双狮迎宾舞台合影`
  - `高桩醒狮动作特写`
  - `品牌开业红毯醒狮队列`

### 5. Decorative Images Are Not Clearly Treated as Decorative

Severity: Medium

Some gallery and atmosphere images appear to be decorative or low-information, but they still use generic text such as `Gallery 1` or `Training scene 1`.

Relevant examples:

- [app/page.tsx](/D:/work/wushi-website/app/page.tsx#L166)
- [app/page.tsx](/D:/work/wushi-website/app/page.tsx#L190)

Why this matters:

- screen reader output becomes noisy
- generic `alt` is worse than empty `alt` for decorative images

Recommended fix:

- if an image conveys unique information, write a meaningful `alt`
- if it is purely decorative, use `alt=""`

### 6. Language Mismatch Between Site Language and `alt` Text

Severity: Medium

The document language is Chinese, but many image `alt` texts are written in English.

Relevant file:

- [app/layout.tsx](/D:/work/wushi-website/app/layout.tsx#L24)

Examples:

- [app/page.tsx](/D:/work/wushi-website/app/page.tsx#L22)
- [app/about/page.tsx](/D:/work/wushi-website/app/about/page.tsx#L33)

Why this matters:

- weakens Chinese-language semantic consistency
- reduces alignment with likely Chinese search queries
- is less natural for accessibility in a Chinese-language site

Recommended fix:

- prefer Chinese `alt` text for Chinese audience pages
- keep terminology consistent with target search intent

### 7. Key On-Page Copy Is Mixed Between Chinese and English

Severity: Medium

Important headings and labels on key pages are still partly English.

Examples:

- [app/page.tsx](/D:/work/wushi-website/app/page.tsx#L27)
- [app/page.tsx](/D:/work/wushi-website/app/page.tsx#L53)
- [app/page.tsx](/D:/work/wushi-website/app/page.tsx#L177)
- [app/page.tsx](/D:/work/wushi-website/app/page.tsx#L200)
- [app/contact/page.tsx](/D:/work/wushi-website/app/contact/page.tsx#L13)
- [app/contact/page.tsx](/D:/work/wushi-website/app/contact/page.tsx#L28)

Why this matters:

- dilutes Chinese keyword targeting
- makes page intent less clear for local search
- weakens consistency across title, headings, body copy, and `alt`

Recommended fix:

- localize key navigational and conversion content into Chinese
- use bilingual text only where it supports branding rather than replacing search intent

### 8. No Structured Data

Severity: Medium

There is currently no JSON-LD visible in the app for:

- `Organization`
- `LocalBusiness`
- `Service`
- `FAQPage`
- `BreadcrumbList`

Why this matters:

- weakens machine-readable context for search engines and AI systems
- misses eligibility for richer search understanding
- does not fully communicate service business intent

Recommended fix:

- add `Organization` or `LocalBusiness` globally
- add `Service` schema for services page
- add `FAQPage` schema for FAQ sections
- add breadcrumb schema where appropriate

## Image Alt Text Assessment

### What Is Reasonable

These patterns are generally acceptable:

- image `alt` that matches a meaningful card title
- image `alt` that clearly reflects the content block it supports

Examples:

- [app/page.tsx](/D:/work/wushi-website/app/page.tsx#L85)
- [app/about/page.tsx](/D:/work/wushi-website/app/about/page.tsx#L58)

These are not perfect, but they are at least content-related.

### What Is Not Reasonable

These patterns should be revised:

- numbered placeholders like `Gallery 1`
- vague phrases like `Audience and stage`
- generic narrative labels like `Opening ceremony story image`
- English-only scene names on a Chinese-language commercial site

## Recommended Priority Order

### Priority 1

- remove or fix broken footer links
- add page-specific metadata
- add `robots.ts`
- add `sitemap.ts`

### Priority 2

- rewrite image `alt` text in Chinese
- distinguish informative images from decorative images
- localize key English headings and conversion copy

### Priority 3

- add Open Graph and Twitter metadata
- add structured data
- strengthen canonical and sharing strategy

## Suggested Next Implementation Batch

The most valuable first implementation batch would be:

1. fix footer dead links
2. add page metadata for all existing routes
3. add `app/robots.ts`
4. add `app/sitemap.ts`
5. rewrite weak image `alt` text
6. add JSON-LD for organization and services

## Final Assessment

The site is visually strong and already has solid content blocks, but the current SEO layer is still at an early stage.

The image `alt` text is only partially reasonable:

- some title-based `alt` text is acceptable
- many other `alt` texts are too generic, too English-heavy, or purely placeholder-like

The main SEO weaknesses are not only the image `alt` text. The more important issues are:

- missing page-level metadata
- missing crawl files
- broken internal links
- missing structured data

These issues are all fixable without changing the overall design direction of the website.
