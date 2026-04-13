# Wushi Website Code Audit

审计日期：2026-04-12  
项目路径：`D:\work\wushi-website`  
技术栈：Next.js 16 App Router、React 19、TypeScript、Tailwind CSS v4

## 审计范围
- 代码目录：`app/`、`components/`、`hooks/`、`lib/`
- 配置与工程文件：`package.json`、`next.config.ts`、`README.md`
- 验证动作：
  - `pnpm lint` 通过
  - `pnpm build` 通过

## 结论摘要
- 这是一个可以正常构建、静态产物可生成的营销站，但距离“可稳定上线并长期维护”的标准还有明显差距。
- 当前最主要的问题不在编译层，而在产品质量层：转化链路、反滥用、结构化数据真实性、无障碍、客户端负载和仓库卫生。
- 代码里实际中文内容是正常的；此前在 Windows shell 中出现的乱码属于终端显示问题，不是源码损坏，不应作为审计结论。

## 严重级别定义
- `P0`：直接影响安全、数据质量或核心业务链路，应优先修复
- `P1`：明显影响 SEO、可访问性、稳定性或线上体验
- `P2`：影响性能、维护性或品牌一致性
- `P3`：低风险优化项

## Findings

### P0

1. `app/actions/contact.ts:30-91` 服务器端邮件模板直接插入用户输入，缺少最基本的输出转义。
   - 影响：`name`、`contact`、`venue`、`message` 被直接拼进 HTML 邮件正文。虽然这是发送到邮件服务而不是直接回显到页面，但依然可能导致邮件内容注入、布局破坏，甚至污染下游工单/邮件客户端展示。
   - 现状：服务端只做了 `zod` 长度校验，没有对 HTML 特殊字符做编码。
   - 建议：在服务端对所有进入 HTML 的字段做最小化转义，或改为纯文本邮件 / 模板引擎安全插值。

2. `app/actions/contact.ts:6`、`app/actions/contact.ts:30-32` 联系表单缺少反滥用和限流设计。
   - 影响：当前任何人都可以高频触发 Server Action 发送邮件，容易被脚本刷爆，导致邮箱噪音、Resend 配额消耗、线索质量下降。
   - 现状：没有验证码、时间窗口限制、IP / 指纹限流、蜜罐字段，也没有最低提交间隔。
   - 建议：至少增加一层服务端限流；如果站点面向公网，建议再加蜜罐或验证码。

3. `app/api/video/route.ts:46-56` 视频 Range 请求未做非法边界校验。
   - 影响：`start` / `end` 可能是 `NaN`、负数、超出文件大小或 `start > end`。这会把异常直接交给 `createReadStream`，最终表现为 500、日志噪音，甚至被恶意探测拖垮。
   - 缺失：没有 416 `Range Not Satisfiable` 分支，也没有对无效 Range 的显式保护。
   - 建议：在解析 Range 后立即校验区间，非法请求返回 416，并带上 `Content-Range: bytes */${fileSize}`。

### P1

4. `lib/site-data.ts:288-290`、`components/JsonLd.tsx:50-52` 仍保留占位社媒链接，且页脚会把它们作为真实外链输出。
   - 影响：用户点击后进入无效账号或空链接，直接损伤信任；结构化数据里的 `sameAs` 也会给搜索引擎错误信号。
   - 现状：抖音、小红书仍是 `YOUR_ACCOUNT_ID`，微信视频号仍是 `#`。
   - 建议：未准备好就不要输出；要么替换成真实链接，要么从 UI 和 JSON-LD 同时移除。

5. `components/JsonLd.tsx:4-53` LocalBusiness 结构化数据存在真实性和建模问题。
   - 影响：错误或不稳定的结构化数据比缺失更糟，会降低搜索引擎对站点实体信息的信任。
   - 具体问题：
     - `sameAs` 仍是占位链接。
     - `logo` 指向 `/logo-red.png`，但当前公开静态资源中只确认有 [`public/og-image.png`](D:\work\wushi-website\public\og-image.png)。
     - `serviceArea` 使用 `GeoCircle`，对这个场景过度复杂，维护成本高且没有明显收益。
     - `priceRange` 写死为“均价 2000 元”，但页面并未形成统一价格策略说明。
   - 建议：只保留确定无误的实体信息；`sameAs` 和 `logo` 先修正再发布。

6. `app/contact/PageClient.tsx:167-296` 联系表单可访问性和输入语义不完整。
   - 影响：键盘用户、读屏用户和移动端自动填充体验都受损，表单完成率会下降。
   - 具体问题：
     - 各 `label` 没有 `htmlFor`，输入控件也没有对应 `id`。
     - 缺少 `autocomplete`，手机号/姓名等无法利用浏览器自动填充。
     - 联系方式字段仍是通用 `type="text"`，没有 `inputMode` 辅助。
     - 成功/失败状态块没有 `aria-live`，读屏用户无法及时感知提交结果。
   - 建议：补齐语义绑定、自动填充和状态播报。

7. `app/page.tsx:1` 以及 `app/about/PageClient.tsx:1`、`app/services/PageClient.tsx:1`、`app/solutions/PageClient.tsx:1`、`app/cases/PageClient.tsx:1`、`app/media/PageClient.tsx:1`、`app/faq/PageClient.tsx:1`、`app/contact/PageClient.tsx:1` 将整站展示页整体下沉到客户端。
   - 影响：营销站的大部分内容本可在服务器侧输出，但现在首页与多个子页都加载 `motion/react` 和客户端组件树，增加首屏 JS 体积、解析成本和水合开销。
   - 说明：页面仍能静态生成，SEO 不会因为 `metadata` 丢失而失效；问题在于不必要的客户端负担，而不是渲染模式错误。
   - 建议：将静态内容页尽量恢复为 Server Component，只把动画或交互小块隔离到客户端。

8. 缺少错误与兜底文件约定。
   - 影响：当前 `app/` 下未见 `not-found.tsx`、`error.tsx`、`loading.tsx` 等特定文件。线上出现异常或空路由时，只能依赖默认行为，不利于品牌一致性和错误恢复。
   - 建议：至少补齐品牌化的 `not-found` 和 `error` 页面。

### P2

9. `app/page.tsx:362`、`app/cases/PageClient.tsx:140` 使用第三方纹理 URL 作为背景。
   - 影响：页面渲染依赖外部域名 `transparenttextures.com`，会引入额外请求、不确定性和潜在隐私泄露；一旦外部资源不可用，视觉效果退化。
   - 建议：把纹理转成本地静态资源，或改为纯 CSS 图案。

10. `app/globals.css:45`、`app/globals.css:144` 以及多个组件广泛使用 `transition-all`，且未适配 reduced motion。
   - 影响：`transition-all` 会让不该参与动画的属性也进入过渡，增加重绘与调试成本；对“减少动态效果”用户没有降级策略。
   - 建议：改成明确的属性级过渡，并增加 `prefers-reduced-motion` 处理。

11. `app/contact/PageClient.tsx:35`、`app/sitemap.ts:20` 仍存在 `as any` 类型断言。
   - 影响：这类断言不大，但说明有局部类型问题被绕过，会降低后续重构可信度。
   - 建议：分别修正 `zodResolver` 的类型和 `MetadataRoute.Sitemap` 的 `changeFrequency` 字面量类型。

12. `package.json:2`、`README.md:5-20` 工程元信息仍然是模板残留。
   - 影响：包名还是 `ai-studio-applet`，README 仍在描述 “AI Studio app” 和 `GEMINI_API_KEY`。这会误导新接手的开发者，也会污染后续部署、文档和品牌识别。
   - 建议：把项目名、运行说明、环境变量和部署说明改成与舞狮站点一致。

13. 根目录存在与站点运行无关的审计/素材文件，仓库边界不清晰。
   - 现状：根目录存在 `audit_report.md`、`CMS_ANALYSIS.md`、`SEO_AUDIT.md`、`COMPANY_PROFILE.md`、`image.png`、`image2.png` 等非运行时文件。
   - 影响：增加仓库噪音，抬高新成员理解成本，也容易把内部材料带入生产仓库。
   - 建议：收敛到 `docs/` 或 `reports/`，运行时仓库保持最小化。

### P3

14. `app/api/video/route.ts:7-13` 白名单与实际视频目录不一致。
   - 现状：[`assets/videos`](D:\work\wushi-website\assets\videos) 下有多于 6 个视频文件，但接口只暴露其中 6 个。
   - 风险：这不构成安全问题，反而是正确的最小暴露策略；但如果未来内容团队增加视频而忘记同步白名单，页面会出现“资源存在但接口不可播”的维护问题。
   - 建议：把白名单从代码常量提取到统一内容配置，避免双写。

15. `components/Footer.tsx:49-57` 页脚外链统一 `target="_blank"`，但没有做有效性过滤。
   - 影响：当链接是占位值时，用户仍会离开当前页面；这属于体验问题，不是安全问题，因为 `rel="noopener noreferrer"` 已正确设置。
   - 建议：只对真实可用链接渲染外链，其他情况下展示为纯文本或隐藏。

## 已确认的正向项
- `pnpm lint` 与 `pnpm build` 全部通过，说明项目当前没有明显的语法、类型或构建阻断。
- `app/layout.tsx` 与各子页面都定义了 `Metadata`，基础 SEO 不为空白。
- `app/robots.ts` 和 `app/sitemap.ts` 已存在，优于很多同类营销站。
- `app/api/video/route.ts` 使用文件名白名单限制可访问视频，方向是正确的。
- 图片资源大量使用本地静态导入，`next/image` 集成基本到位。

## 建议排期

### 第一阶段：上线前必须修
- 为 `app/actions/contact.ts` 增加输出转义和最小限流。
- 为 `app/api/video/route.ts` 增加 Range 边界校验和 416 响应。
- 去掉所有占位社媒链接，并同步修正 `JsonLd`。
- 修正 `JsonLd` 中不确定或错误的字段，至少保证 `sameAs` 与 `logo` 真实可用。

### 第二阶段：转化与体验修复
- 补齐联系表单的 `id` / `htmlFor` / `autocomplete` / `aria-live`。
- 将纯展示页恢复为 Server Component 优先，仅保留必要的客户端动画孤岛。
- 增加品牌化 `not-found` / `error` 页面。

### 第三阶段：工程收口
- 移除第三方纹理依赖。
- 收敛 `transition-all`，补 reduced motion。
- 去掉 `as any`。
- 清理 `package.json`、`README.md` 和根目录杂项文件。

## 验证记录

### 运行结果
```txt
pnpm lint   -> 通过
pnpm build  -> 通过
```

### 说明
- 本次审计以静态代码审查为主。
- 没有运行浏览器级人工回归，也没有启动本地 dev server 做运行时交互验证。
- 如果后续需要第二轮审计，建议补充：
  - 浏览器控制台错误检查
  - Lighthouse / Core Web Vitals
  - 联系表单真实提交流程联调
  - 移动端导航和浮层交互验证
