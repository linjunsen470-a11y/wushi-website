# 重庆鑫龙堂舞狮网站

重庆鑫龙堂舞狮官网，基于 `Next.js 16`、`React 19`、`TypeScript` 和 `Tailwind CSS v4` 构建，面向重庆及西南地区商业活动、开业庆典、品牌路演、企业晚宴等场景的营销展示与线索转化。

## 项目概览

- 首页、关于我们、服务项目、场景方案、真实案例、视频展示、预订指南、联系我们共 8 个主要页面
- 以本地真实活动图片和视频为核心素材
- 内置联系人浮层、联系表单、结构化数据、`robots.ts` 与 `sitemap.ts`
- 当前视觉方向为暖白底、深红主色、金色强调，首页 Hero 使用“左侧细竖线 + 浅米色前导文案”的弱强调样式

## 技术栈

- `Next.js 16` App Router
- `React 19`
- `TypeScript`
- `Tailwind CSS v4`
- `motion`
- `react-hook-form` + `zod`
- `Resend`

## 目录结构

```text
app/           路由与页面入口
components/    可复用 UI 组件
hooks/         自定义 hooks
lib/           站点数据与工具函数
assets/        本地图片、视频、Logo、二维码等素材
public/        SEO、分享图等公开静态资源
stich-assets/  设计参考与风格文档
```

## 本地开发

### 运行要求

- Node.js `>=20.9.0`
- `pnpm`

### 安装与启动

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

开发服务器默认运行在 `http://localhost:3000`。

## 环境变量

请以 `.env.example` 为准，当前仓库中需要关注的变量如下：

| 变量名 | 是否必需 | 说明 |
| --- | --- | --- |
| `LEAD_TO_EMAIL` | 是 | 接收线索邮件的邮箱 |
| `RESEND_API_KEY` | 是 | Resend API Key |
| `LEAD_FROM_EMAIL` | 否 | 发件人邮箱，需与 Resend 已验证域名一致 |
| `APP_URL` | 否 | 站点部署地址，部分场景可用于生成绝对链接 |

说明：

- `.env.example` 中仍保留了 `GEMINI_API_KEY` 注释，但当前仓库代码中未发现实际调用，可视为历史模板遗留项。
- 生产环境请通过托管平台的密钥管理能力注入，不要提交 `.env.local`。

## 常用命令

```bash
pnpm dev      # 启动开发服务器
pnpm build    # 生产构建
pnpm start    # 启动生产服务
pnpm lint     # 运行 ESLint
pnpm clean    # 清理 .next
```

## 内容与设计说明

- 站点文案、导航、案例、FAQ、团队信息主要集中在 [`lib/site-data.ts`](./lib/site-data.ts)
- 全局视觉基础在 [`app/globals.css`](./app/globals.css)
- 首页 Hero 位于 [`app/page.tsx`](./app/page.tsx)
- 结构化数据输出位于 [`components/JsonLd.tsx`](./components/JsonLd.tsx)

## 文档索引

- [COMPANY_PROFILE.md](./docs/COMPANY_PROFILE.md): 公司简介与业务定位
- [CMS_ANALYSIS.md](./docs/CMS_ANALYSIS.md): CMS 选型分析
- [SEO_AUDIT.md](./docs/SEO_AUDIT.md): SEO 审计与修复建议
- [audit_report.md](./audit_report.md): 当前工程审计摘要（包含性能、合规与安全修复进度）
- [audit_report_2026-04-12.md](./docs/audit_report_2026-04-12.md): 2026-04-12 审计快照
- [bilibili.md](./docs/bilibili.md): 参考视频链接
- [stich-assets/awakened_spirit/DESIGN.md](./stich-assets/awakened_spirit/DESIGN.md): 视觉设计原则

## 当前状态与进展

- ✅ **安全加固**: 已轮换 Resend API Key 并确保 `.env.local` 被正确忽略。
- ✅ **IDE 优化**: 解决了 Tailwind v4 在 VS Code 中的语法警告问题。
- ✅ **性能优化**: 引入了基于 CSS 变量的高性能 `<FadeIn>` 动画组件，减少了对 JS 动画引擎的依赖。
- ✅ **合规修复**: 已清理无用的依赖项及 ICP 备案占位符。

## 验证基线

文档更新前仓库约定的最小验证标准：

- `pnpm lint`
- `pnpm build`

如果改动涉及 UI，建议额外做浏览器端回归检查。
