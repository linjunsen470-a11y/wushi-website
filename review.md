结论：**这个计划方向基本正确，可以让 AI agent 执行，但需要先改几处关键点。**
尤其是日期、路由命名、Tailwind 版本、SEO sitemap、内链/转化入口这几项，不改会影响后续收录和成交效果。

## 1. 技术方案：可行，但要补几个硬点

### 可以保留的部分

用 `content/blog/*.md + lib/blog.ts + app/blog/[slug]/page.tsx` 这套静态 Markdown 方案是合适的。你现在只有 6 篇软文，不需要上 CMS，Markdown 静态生成更简单、更稳定。

Next.js App Router 支持用 `generateStaticParams` 在构建时生成动态路由页面，也支持用 `generateMetadata` 生成页面级 SEO 信息，所以这个方案和 Next.js 技术栈是匹配的。([nextjs.org][1])

### 需要修改的点

AI agent 计划里写了“引入 `motion` 动画”，但依赖项里没有写 `framer-motion`。这里有两个选择：

一是**不要新增动画库**，用 Tailwind CSS 的 transition / animation 做轻量 Hover 和淡入，减少包体积。

二是如果坚持用 Framer Motion，就必须补充依赖，并且把动画卡片拆成 Client Component，避免整个博客列表页都变成客户端组件。

我的建议：**第一版不要上 Framer Motion。** 你的网站是本地服务转化型网站，不是作品集站，速度和稳定比复杂动画更重要。

## 2. Tailwind Typography：要先确认 Tailwind 版本

`@tailwindcss/typography` 可以用，它确实适合渲染 Markdown 文章内容，官方说明它用于给 Markdown 或 CMS 输出的 HTML 提供 `prose` 排版样式。([GitHub][2])

但计划里写：

```css
@plugin "@tailwindcss/typography";
```

这个写法适合 Tailwind CSS v4。官方文档也说明，如果还在用 Tailwind v3，需要把插件加到 `tailwind.config.js` 的 `plugins` 里。([GitHub][2])

所以给 AI agent 的指令要改成：

> 先检查项目 Tailwind 版本。
> 如果是 Tailwind v4，在 `globals.css` 使用 `@plugin "@tailwindcss/typography";`。
> 如果是 Tailwind v3，在 `tailwind.config.js` 使用 `require('@tailwindcss/typography')`。

这是一个容易构建失败的点。

## 3. URL 路由：我建议不用 `/blog`，改成 `/news` 或 `/guide`

你的现有导航是：首页、关于我们、服务项目、场景方案、真实案例、视频展示、预订指南、联系我们。当前网站定位是“重庆及西南地区专业舞狮演出服务商”，服务场景包括开业醒狮、商演路演、宴会婚礼等。([重庆鑫龙堂舞狮][3])

对这类本地商业服务站，我不建议叫“Blog”。更适合：

**首选：`/guide`，中文导航叫“预订指南”或“舞狮指南”**
原因：文章主题都是用户下单前会搜索的问题，比如价格、怎么选、流程、准备事项。

**次选：`/news`，中文导航叫“资讯中心”**
比较通用，但商业转化感弱一点。

**不建议：`/blog`**
“博客”偏个人化，对舞狮服务转化没有明显帮助。

如果你现在已经有 `/booking-guide` 或“预订指南”页面，可以把文章列表放在：

```text
/guide
/guide/chongqing-lion-dance-price
/guide/lion-dance-opening-checklist
```

这比 `/blog` 更贴近搜索意图。

## 4. 日期：不要自动分配 2024 年 5 月

这是计划里最大的问题之一。

现在是 2026 年，你的网站底部也是 2026 版权信息。([重庆鑫龙堂舞狮][3]) 如果新发布的 6 篇文章却写成 2024 年 5 月，会显得内容陈旧，也不真实。

建议改成：

```yaml
date: "2026-05-12"
updated: "2026-05-12"
```

或者按真实发布时间递增：

```yaml
date: "2026-05-12"
date: "2026-05-13"
date: "2026-05-14"
```

但不要伪造很早的历史日期。软文的价值是承接当下搜索流量，尤其是“重庆舞狮多少钱”“开业舞狮流程”这种商业搜索，日期越新越自然。

## 5. SEO 方案：方向对，但不完整

计划里已有：

* `generateMetadata`
* Open Graph
* 语义化 HTML
* JSON-LD Article

这些都应该保留。Next.js 官方也说明 Metadata API 可用于 SEO 和社交分享展示。([nextjs.org][4])

但还缺 5 个重要 SEO 项：

### 必须补充 1：`generateStaticParams`

`app/blog/[slug]/page.tsx` 里不仅要写 `generateMetadata`，还应该写：

```ts
export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}
```

这样 6 篇文章会在 build 阶段静态生成，更适合 SEO 和访问速度。Next.js 官方说明 `generateStaticParams` 可用于动态路由的构建时静态生成。([nextjs.org][1])

### 必须补充 2：`sitemap.ts`

新增文章后，要让 sitemap 自动包含这些文章 URL。Google 官方建议 sitemap 放在站点根目录会影响整个站点，并且 sitemap 有助于搜索引擎发现需要抓取的 URL。([Google for Developers][5])

建议新增：

```text
app/sitemap.ts
```

里面包含：首页、服务页、场景页、案例页、预订指南页、6 篇文章页。

### 必须补充 3：`robots.ts`

可以新增：

```text
app/robots.ts
```

允许抓取主要页面，并声明 sitemap 地址。Google 官方说明 robots.txt 主要用于管理爬虫访问，但不应用它来隐藏希望不被索引的页面。([Google for Developers][6])

### 必须补充 4：文章内链

每篇文章末尾必须加 2 类链接：

一类是服务页链接，例如：

```text
了解重庆开业醒狮服务
查看商场路演舞狮方案
获取舞狮报价与档期
```

另一类是相关文章链接，例如：

```text
重庆舞狮队怎么选？
请舞狮队前需要准备什么？
普通舞狮、高桩舞狮、群狮怎么选？
```

没有内链，软文容易变成“孤岛页面”，SEO 和转化都会弱。

### 必须补充 5：CTA 转化模块

你的网站现有转化点很清楚：微信/电话沟通、免费出具初步方案、1 小时内极速响应。([重庆鑫龙堂舞狮][3])
文章详情页底部应该固定加一个转化模块：

```text
正在筹备开业、路演或庆典？
可发送场地照片 / 活动时间 / 预算范围，获取重庆舞狮演出建议方案。
按钮：微信/电话咨询
按钮：查看真实案例
```

软文不是只为了阅读，是为了把搜索用户导向咨询。

## 6. 文章 Frontmatter 建议升级

不要只放：

```yaml
title
date
excerpt
coverImage
category
```

建议改成：

```yaml
title: "重庆开业舞狮多少钱？2026年商场、门店、庆典醒狮报价参考"
slug: "chongqing-lion-dance-price"
date: "2026-05-12"
updated: "2026-05-12"
excerpt: "重庆开业舞狮价格通常受演出形式、狮队规模、是否高桩、场地距离和活动流程影响。本文帮助商家判断预算和配置。"
coverImage: "/images/blog/red-lion-dance-high-jong-stage.webp"
category: "价格指南"
keywords:
  - "重庆舞狮多少钱"
  - "重庆开业舞狮价格"
  - "重庆醒狮报价"
ctaText: "获取重庆开业舞狮报价"
```

这样后面做 SEO、相关推荐、分类页、站内搜索都会更方便。

## 7. 图片映射：基本合理，但要注意 alt 文案

6 张图的匹配逻辑没问题。
但 AI agent 计划没有写 `alt`，这是遗漏。

每张封面图都应该有明确 alt，例如：

```text
重庆商场开业红色醒狮高桩表演现场
重庆开业庆典多头舞狮列队表演
重庆舞狮队红白狮头近景细节
```

不要写空泛的：

```text
舞狮图片
文章封面
blog image
```

你的图片本身也已经在首页有较强的商业场景描述，例如“重庆商场开业大型红毯舞狮表演现场全景”。([重庆鑫龙堂舞狮][3]) 文章图片应该沿用这种具体描述风格。

## 8. 我建议给 AI agent 的最终修改版指令

你可以直接把下面这段发给 IDE AI agent：

```text
请按原计划集成 Markdown 软文模块，但做以下调整：

1. 路由不要使用 /blog，改为 /guide。中文导航名称使用“舞狮指南”或“预订指南”。
2. 不要自动分配 2024 年日期。所有文章使用真实发布时间，首批统一使用 2026-05-12，增加 updated 字段。
3. 先检查 Tailwind CSS 版本：
   - Tailwind v4：在 globals.css 使用 @plugin "@tailwindcss/typography";
   - Tailwind v3：在 tailwind.config.js plugins 中添加 require("@tailwindcss/typography")。
4. 第一版不要引入 framer-motion。列表卡片使用 Tailwind transition / hover 效果即可，避免增加客户端 JS。
5. app/guide/[slug]/page.tsx 必须实现 generateStaticParams 和 generateMetadata。
6. 新增或更新 app/sitemap.ts，把 6 篇文章 URL 加入 sitemap。
7. 新增或检查 app/robots.ts，确保 sitemap 地址被声明。
8. 每篇文章 Frontmatter 增加 title、slug、date、updated、excerpt、coverImage、coverAlt、category、keywords、ctaText。
9. 文章详情页底部增加统一 CTA 模块：微信/电话咨询、查看真实案例、获取演出方案。
10. 每篇文章正文中加入 2-3 个站内链接，链接到服务项目、真实案例、预订指南或相关文章。
11. 保持页面为静态生成，避免不必要的 Client Component。
12. 完成后运行 pnpm build 和 pnpm lint。
```

## 最终判断

这个 AI agent 的计划可以执行，但它偏“技术集成”，还不够“商业转化型 SEO”。

我的建议是：

**技术方案保留 70%，SEO/转化结构补强 30%。**

最重要的四个改动是：

1. `/blog` 改成 `/guide`
2. 不要用 2024 假日期，改成 2026 真实发布日期
3. 补 `sitemap.ts`、`robots.ts`、`generateStaticParams`
4. 每篇文章底部加咨询 CTA 和站内链接

这样这 6 篇软文才不只是“页面上线”，而是能真正承接“重庆舞狮多少钱 / 重庆舞狮队怎么选 / 开业醒狮流程”这类搜索流量。

[1]: https://nextjs.org/docs/app/api-reference/functions/generate-static-params?utm_source=chatgpt.com "Functions: generateStaticParams"
[2]: https://github.com/tailwindlabs/tailwindcss-typography "GitHub - tailwindlabs/tailwindcss-typography: Beautiful typographic defaults for HTML you don't control. · GitHub"
[3]: https://www.cqwushi.com/ "重庆鑫龙堂舞狮 | 西南专业舞狮演出团队_开业醒狮_商演路演_婚礼宴会"
[4]: https://nextjs.org/docs/app/getting-started/metadata-and-og-images?utm_source=chatgpt.com "Getting Started: Metadata and OG images"
[5]: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?utm_source=chatgpt.com "Build and Submit a Sitemap | Google Search Central"
[6]: https://developers.google.com/search/docs/crawling-indexing/robots/intro?utm_source=chatgpt.com "Robots.txt Introduction and Guide | Google Search Central"
