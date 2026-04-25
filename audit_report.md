# 🔍 Wushi Website — 上线前综合审计报告

> 审计时间: 2026-04-25 | 审计范围: 工程质量 + 安全 + SEO + UX/CRO
> 构建状态: ✅ `pnpm lint` 通过 | ✅ `tsc --noEmit` 通过 | ✅ `pnpm build` 通过

---

## 一、执行结果摘要

| 检查项 | 结果 |
|--------|------|
| `pnpm lint` | ✅ Exit 0, 无警告 |
| `tsc --noEmit` | ✅ Exit 0, 无错误 |
| `pnpm build` | ✅ 14 页面全部静态生成, 仅 `/api/video` 为动态 |

---

## 二、问题总览

| 级别 | 数量 |
|------|------|
| 🔴 Blocker | 1 |
| 🟠 High | 5 |
| 🟡 Medium | 7 |
| 🔵 Low | 5 |

---

## 三、Blocker（阻止上线）

### B-1: `.env.local` 中 Resend API Key 已泄露至代码审计可见范围

- 📍 [.env.local](file:///d:/work/wushi-website/.env.local) L7
- ❗ `RESEND_API_KEY=re_5ZGyoW14_P3tEDMRGQCkvFb79JvdaK7r1` 明文存在。如果此文件曾被提交到 Git，密钥已泄露。
- 💥 攻击者可滥用该 Key 发送大量垃圾邮件，导致域名被列入黑名单，Resend 账户被封禁。
- 🔍 检查 `git log --all -- .env.local` 确认是否曾提交。
- ✅ **立即到 Resend 后台轮换（Rotate）此 API Key**。确认 `.env.local` 在 `.gitignore` 中（当前已在）。运行 `git log --diff-filter=A -- .env.local` 验证历史。

---

## 四、High（严重问题）

### H-1: 整个首页作为单一巨型 Client Component

- 📍 [app/PageClient.tsx](file:///d:/work/wushi-website/app/PageClient.tsx) — 428 行, `'use client'`
- ❗ 首页全部 UI（Hero + 6 个 section + Navbar + Footer）都在一个 `'use client'` 组件中，导致整页 JS 被发送到客户端。
- 💥 **首屏 JS 膨胀**。motion 库 + 所有图片数据 + 所有静态文本都进入客户端 bundle。移动端用户首屏加载延迟显著增加。
- 🔍 在 Chrome DevTools → Network → JS 中观察首页加载的 JS 总量。
- ✅ 将不需要交互的 section 提取为 Server Component，只对需要 `motion` 动画的部分使用 `'use client'`。例如：
  - `Testimonials`, `LogoWall`, `ContactCTA` 已经独立为 client component（合理）
  - Hero 的静态文案、serviceCards 展示、gallery 展示、stats 展示等可以做成 Server Component
  - 将 `motion.div` 的 fade-in 效果封装为一个轻量 `<FadeIn>` client wrapper

> **同样问题影响**: `about/PageClient.tsx`, `services/PageClient.tsx`, `contact/PageClient.tsx`, `cases/PageClient.tsx`, `solutions/PageClient.tsx`, `media/PageClient.tsx`, `faq/PageClient.tsx` — **每个子页都是整页 client component**。

---

### H-2: 表单 `zodResolver(formSchema)` 恢复类型安全 ✅

- 📍 [app/contact/PageClient.tsx](file:///d:/work/wushi-website/app/contact/PageClient.tsx#L55) L55
- ❗ 已移除 `as any`，并通过降级 `zod` 到 `3.24.2` 解决了版本不兼容导致的类型报错。
- ✅ **已修复**：现在表单 schema 与 `FormData` 类型受到 TypeScript 严格检查。

---

### H-3: In-memory Rate Limit 内存管理优化 ✅

- 📍 [app/actions/contact.ts](file:///d:/work/wushi-website/app/actions/contact.ts#L11) L11
- ❗ 已添加自动清理机制，防止 `rateLimitMap` 无限增长导致的内存泄漏（OOM）。
- ✅ **已修复**：现在每 5 分钟会自动清理一次过期条目。
- ⚠️ **注意**：对于分布式/Serverless 部署，仍建议未来迁移到 Redis。

---

### H-4: ICP 备案号清理 ✅

- 📍 [components/Footer.tsx](file:///d:/work/wushi-website/components/Footer.tsx#L74) L74
- ❗ 原为 `渝ICP备XXXXXXXX号` 占位符。
- ✅ **已修复**：根据业务状态（备案进行中），已暂时从页脚移除占位符。待备案完成后再行添加。

---

### H-5: 冗余依赖 `firebase-tools` 清理 ✅

- 📍 [package.json](file:///d:/work/wushi-website/package.json#L44) L44
- ❗ 已成功移除 `firebase-tools`。
- ✅ **已修复**：减小了依赖树体积，优化了 `pnpm install` 速度并降低了供应链风险。

---

## 五、Medium（中等问题）

### M-1: 组件边界明确化 ✅

- 📍 [components/SubpageHero.tsx](file:///d:/work/wushi-website/components/SubpageHero.tsx#L1) L1
- ✅ **已修复**：已添加 `'use client'` 指令，明确其为客户端组件。

---

### M-2: API 路径遍历防护 ✅

- 📍 [app/api/video/route.ts](file:///d:/work/wushi-website/app/api/video/route.ts#L25) L25
- ✅ **已修复**：已添加路径过滤逻辑，确保文件请求无法脱离预设目录。

---

### M-3: API 异常处理优化 ✅

- 📍 [app/api/video/route.ts](file:///d:/work/wushi-website/app/api/video/route.ts#L30) L30
- ✅ **已修复**：已添加 `try-catch` 块处理文件系统异常，确保找不到文件时返回 404。

---

### M-4: 输入校验强化 ✅

- 📍 [app/actions/contact.ts](file:///d:/work/wushi-website/app/actions/contact.ts#L18) L18
- ✅ **已修复**：已将服务端 `projectType` 校验逻辑升级为枚举白名单，防止非法文本注入邮件主题。

---

### M-5: JSON-LD `logo` 路径修复 ✅

- 📍 [components/JsonLd.tsx](file:///d:/work/wushi-website/components/JsonLd.tsx#L12) L12
- ❗ 原指向 `logo-red.png` 但文件不存在于 `public/`。
- ✅ **已修复**：已将 `assets/logo-red.png` 复制到 `public/logo-red.png`，确保 Google 结构化数据校验通过。

---

### M-6: OG Image 绝对 URL 修复 ✅

- 📍 [app/layout.tsx](file:///d:/work/wushi-website/app/layout.tsx#L38) L38
- ❗ 原为相对路径 `/og-image.png`。
- ✅ **已修复**：已统一改为绝对 URL `https://www.cqwushi.com/og-image.png`，提升社交平台爬虫兼容性。

---

### M-7: 冗余插件 `autoprefixer` 已清理 ✅

- 📍 [package.json](file:///d:/work/wushi-website/package.json#L18) L18 + [postcss.config.mjs](file:///d:/work/wushi-website/postcss.config.mjs#L5) L5
- ❗ Tailwind CSS v4 已内置 autoprefixer，额外配置会导致重复处理。
- ✅ **已修复**：已移除依赖及 PostCSS 配置文件中的引用。

---

## 六、Low（优化项）

### L-1: Testimonials 头像用的是活动现场照而非人物头像

- 📍 [lib/site-data.ts](file:///d:/work/wushi-website/lib/site-data.ts#L98) L98-113
- ❗ `avatar: pinkCloseup` / `teamFormation` / `corporateAnnual` — 这些是舞狮活动照片，不是客户头像。
- 💥 **UX 信任问题**：用户看到"陈女士"的头像是一张舞狮全景照，会怀疑评价的真实性。
- ✅ 使用真实客户头像（需授权），或使用文字首字母占位符代替照片头像。

### L-2: `tw-animate-css` 已清理 ✅

- 📍 [package.json](file:///d:/work/wushi-website/package.json#L47) L47
- ✅ **已修复**：已移除未使用的动画库依赖。

### L-3: `@tailwindcss/typography` 已清理 ✅

- 📍 [package.json](file:///d:/work/wushi-website/package.json#L35) L35
- ✅ **已修复**：已移除未使用的排版插件依赖。

### L-4: `playwright` + `tests/` 目录存在但无实际测试

- 📍 `playwright.config.ts` + `tests/` 目录
- ❗ 已配置 Playwright 但无测试用例，增加仓库噪音。
- ✅ 添加基本的冒烟测试（首页加载、联系表单提交），或暂时移除配置。

### L-5: 首页 Hero 存在两层半透明遮罩叠加

- 📍 [app/PageClient.tsx](file:///d:/work/wushi-website/app/PageClient.tsx#L67-L68) L67-68
- ❗ 两个 `div` 分别加了 `linear-gradient` 遮罩，可合并为一个以减少 DOM 节点。
- ✅ 合并为单一 gradient 层。

---

## 七、UX 与转化审计

### 7.1 首屏（Hero）分析

| 维度 | 评估 |
|------|------|
| 3 秒内知道干什么？ | ✅ "西南地区专业舞狮，为您的商业活动赋能" 明确 |
| 知道是否适合自己？ | ✅ 标签"商场开业 / 品牌路演 / 企业晚宴 / 重庆本地执行"精准 |
| 下一步做什么？ | ✅ 双 CTA "加微信/电话拿方案" + "看真实落地案例" |
| CTA 问题 | ⚠️ 主 CTA 文案"加微信 / 电话拿方案"偏口语，且点击后跳转到 /contact 整页表单，用户期望的是直接加微信 |

**用户心理**: 点击"加微信"却看到一个复杂表单页，会产生"被套路"感。

**建议**: 主 CTA 改为"免费获取演出方案"或"立即咨询报价"，降低心理预期偏差。

---

### 7.2 转化路径分析

```
首页 Hero → 浏览内容 → 信任建立 → 联系决策 → 表单提交
```

| 阶段 | 状态 | 问题 |
|------|------|------|
| 信息获取 | ✅ 内容丰富 | 首页内容过长（~420 行），7+ 个 section 可能导致用户中途离开 |
| 信任建立 | ⚠️ 部分缺失 | 合作伙伴仅展示文字 logo（无真实 logo 图片），评价头像不真实 |
| 联系决策 | ✅ 多触点 | 浮动按钮 + 底部 CTA + Contact 页面，触点充足 |
| 表单提交 | ⚠️ 阻力大 | 表单 7 个字段偏多，缺少"提交后预期"说明 |

**关键流失点**:
1. 首页底部 stats section（"10年+" "1000+"）没有直接 CTA，用户被数据说服后无即时转化路径
2. 表单缺少"免费""无套路"等降低决策成本的心理暗示

---

### 7.3 信任建立评估

| 信任元素 | 状态 |
|----------|------|
| 客户案例（真实） | ✅ 4 个具体案例，有客户名、地点、日期 |
| 数据证明 | ⚠️ "10年+" "1000+" 缺少具体佐证 |
| 用户评价 | ⚠️ 3 条评价，但头像为活动照而非人物，降低可信度 |
| 风险消除 | ❌ 缺少"免费咨询""不满意退款"等风险消除承诺 |
| 合作伙伴 | ⚠️ 仅文字名称，无 logo 图片，说服力有限 |

---

### 7.4 表单体验

- 📍 [app/contact/PageClient.tsx](file:///d:/work/wushi-website/app/contact/PageClient.tsx#L273-L424)
- ✅ **做得好的**: 明确 label、placeholder 提示、加载状态、成功/失败反馈
- ⚠️ **问题**:
  1. 7 个字段（活动类型、联系方式偏好、称呼、联系号码、日期、地点、备注）——对于初次咨询偏多
  2. 缺少"提交后会发生什么"的说明（如"我们将在 1 小时内通过微信联系您"）
  3. 提交按钮"提交需求并开始沟通"缺少免费/无压力的暗示
  4. 表单上方的联系信息区域占据了大量空间（电话、微信、抖音、小红书），可能让用户在到达表单前就离开

**建议**:
- 将必填字段精简为 3 个：活动类型、称呼、联系方式
- 在提交按钮下方添加："提交后，我们的项目经理将在 1 小时内通过微信联系您，免费提供初步方案。"
- 按钮文案改为"免费获取方案"

---

### 7.5 页面结构定位

当前网站更像 **品牌展示页 + Portfolio**，而非 **转化导向的销售页**。

- ✅ 内容质量高，案例真实，视觉专业
- ❌ 缺少典型销售页要素：
  - 无价格锚定（FAQ 页提到 1500-5000 但首页/服务页未提及）
  - 无紧迫感（无"本月已排满 X 场"、"热门档期预约中"等）
  - 无社会证明的量化呈现（如"本月已服务 X 场"）

---

### 7.6 动画与视觉

- ⚠️ **过度动画**: 几乎每个 section 都有 `whileInView` fade-in 动画，13 个 client components 都 import 了 `motion`
- 💥 影响：
  1. **JS bundle 膨胀**: `motion` 库即使 tree-shaken 后仍较大（~30-40KB gzipped）
  2. **用户注意力分散**: 每滚动一次都有元素飞入，用户可能更关注动画而非内容
  3. **移动端性能**: 低端设备上大量 `whileInView` 监听 + CSS transform 可能导致卡顿
- ✅ 建议：
  - 仅在 Hero 和关键 CTA 处使用动画
  - 普通 section 用 CSS `@starting-style` 或纯 CSS `animation` 替代 JS 动画
  - 考虑 `prefers-reduced-motion` 媒体查询

---

## 八、最终评分与建议

### 评分

| 维度 | 分数 | 说明 |
|------|------|------|
| **工程质量** | **72 / 100** | 构建/lint/TS 全部通过，代码结构清晰，但 client component 边界不合理、有 `as any`、死依赖残留 |
| **转化能力** | **58 / 100** | 内容质量高但结构偏展示导向，表单阻力大，缺少风险消除和紧迫感设计 |

---

### 是否建议上线？

> **⚠️ 有条件上线 (Conditional Yes)**

修复 Blocker B-1（密钥轮换）和 H-4（ICP 备案号）后可上线。其余 High 问题建议一周内完成修复。

---

### 🔥 必须立刻修复的 TOP 5

| # | 问题 | 影响 | 耗时 |
|---|------|------|------|
| 1 | **B-1** Resend API Key 泄露 → 立即轮换 | 安全 | 5 min |
| 2 | **H-4** ICP 备案号占位符 → 替换真实号或移除 | 合规 / 信任 | 2 min |
| 3 | **H-5** 移除 `firebase-tools` | 安装速度 / 清洁 | 1 min |
| 4 | **H-2** 移除 `as any` 类型绕过 | 类型安全 | 15 min |
| 5 | **M-5** JSON-LD logo 路径修复 | SEO | 5 min |

---

### 📅 一周内建议优化

1. **M-4**: `projectType` 改为 `z.enum()` 白名单验证
2. **M-1**: `SubpageHero` 添加 `'use client'` 声明
3. **M-2 + M-3**: Video API 添加路径防护和错误处理
4. **L-1**: Testimonials 头像替换为真实人物或文字占位
5. **L-2 + L-3**: 清理 `tw-animate-css` 和 `@tailwindcss/typography` 死依赖
6. **M-7**: 移除重复的 `autoprefixer`
7. 表单精简为 3 个必填字段 + 添加提交后预期文案
8. 添加 `rateLimitMap` 内存清理逻辑

---

### 🏗️ 长期重构建议

1. **Server/Client 组件重构**: 将每个页面的 `PageClient.tsx` 拆分，把静态内容移入 Server Component，仅动画包装器保留 `'use client'`。预计可减少 40-60% 客户端 JS。

2. **动画库轻量化**: 评估是否可以用 CSS `@starting-style` + Intersection Observer 替代大部分 `motion` 的 `whileInView` 用法，显著减小 bundle。

3. **转化导向重构**:
   - 首页精简为 5 个 section（Hero → 信任证明 → 服务概览 → 案例/评价 → CTA）
   - 每个 section 底部添加微型 CTA
   - 增加价格锚定和紧迫感设计

4. **分布式限流**: 迁移到 Upstash Redis 做 rate limiting，支持多实例部署。

5. **E2E 测试**: 利用已有的 Playwright 配置，添加关键路径冒烟测试（首页加载、表单提交流程、移动端导航）。

6. **合作伙伴 Logo**: 获取真实合作方的 logo 授权，替换纯文字展示。
