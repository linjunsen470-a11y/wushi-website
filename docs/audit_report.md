# 网站审计报告

更新时间：`2026-04-24`

## 审计结论

> [!IMPORTANT]
> 本项目已具备“**可上线的营销站骨架**”，并非低质量站点。其视觉方向统一、真实素材充足、CTA 一致、Lint 与生产构建均已通过，且大部分页面完成了静态预渲染。

然而，从“用户浏览感受、获客转化能力、SEO”三个核心目标来看，当前站点的属性更偏向于**展示型**，尚未演进为能**持续放大获客效率的转化型站点**。

### 主观评分
- 🎨 **浏览体验**：`7.5 / 10`
- 🎯 **获客与转化**：`5.0 / 10`
- 🔍 **SEO**：`6.5 / 10`

### 验证状态
- [x] `pnpm lint` 通过
- [x] `pnpm build` 通过
- [x] 构建结果验证：营销页均为静态路由（除 `/api/video` 动态路由外）

---

## 主要优点

- **视觉系统完整**：具备辨识度的色彩、字体及摄影素材，CTA 语言统一，非模板凑。
- **转化链路清晰**：从首页到联系页的信息链条顺畅，导航、悬浮联系、底部 CTA 与表单形成闭环。
- **SEO 基础扎实**：已落地全局 Metadata、分页面 TDK、`robots.ts`、`sitemap.ts` 以及 `LocalBusiness/Service/FAQ` 等 JSON-LD 结构化数据（参考 [layout.tsx](file:///d:/work/wushi-website/app/layout.tsx#L25)）。
- **信任背书明确**：文案有效传达了“真实案例/素材/本地执行”的卖点，适合建立初始信任。

---

## 关键问题

### 🔴 高优先级 (P1)
1. **获客无法归因**：表单仅采集业务字段，未记录 UTM 参数、来源页、Referrer 或广告渠道。全库未见任何 Analytics SDK（如 Gtag, PostHog, Vercel Analytics），无法追踪咨询来源。
2. **线索链路存在单点故障**：线索采集完全依赖 Resend 邮件发送，无服务端分库、重试队列或备用 Webhook。且缺乏防滥用保护（如 Captcha/Rate Limit），易导致垃圾信息污染或真实线索丢失。
3. **客户端运行时负担重**：营销站核心页面（首页、关于、服务等）及共享组件（Navbar、LogoWall 等）过度依赖 Client Components，增加了不必要的 Hydration 成本。同时缺乏针对动效的 `prefers-reduced-motion` 优化。

### 🟡 中优先级 (P2)
4. **结构化数据可信度**：JSON-LD 中的图片 URL（如 `logo-red.png`）与实际仓库资源路径不匹配，部分 `sameAs` 链接仍为示例性质（如抖音链接），会降低品牌实体一致性。
5. **视频资产未 SEO 化**：媒体页核心为 Bilibili Iframe，缺乏 `VideoObject` JSON-LD、视频转录及关键镜头摘要。虽然已有本地流式接口，但未在前端有效利用。
6. **操作摩擦力**：社媒导流（抖音/小红书）仅提供二维码和 ID 复制，缺乏一键直达链接。移动端悬浮按钮仅跳转页面，未集成电话/微信快捷唤起。

### 🔵 低优先级 (P3)
7. **Sitemap 信号失真**：所有页面 `lastModified` 均为构建时间，长期会向搜索引擎发送低质量的更新信号。
8. **合规性不完整**：页脚备案号仍为占位符（`渝ICP备XXXXXXXX号`），直接影响国内用户的正规性观感。
9. **表单微体验**：联系方式输入框未适配专用 Type（如 `tel`），提交状态缺乏 `aria-live` 等无障碍播报。

---

## 分维度深度调研

| 维度 | 现状评价 | 改进核心 |
| :--- | :--- | :--- |
| **浏览体验** | “看起来好”，但局部过于沉重。 | 回收 Server Components，优化移动端快捷咨询。 |
| **获客转化** | 文案定位精准，但缺乏“运营系统”。 | 补齐归因测量，建立线索备份与防滥用机制。 |
| **SEO** | 架构优于同类，但细节不够严谨。 | 修正 Schema 路径，结构化展示视频资产，真实化 Sitemap。 |

---

## 建议执行计划

### 1️⃣ 第一阶段：固本培元 (P1)
- [ ] **补齐测量**：记录 `utm_source`, `landing_page`, `referrer` 等字段并随表单提交。
- [ ] **增强稳健性**：引入表单服务端落库备份（或接入多渠道通知），添加 Rate Limit 防护。
- [ ] **优化架构**：将非交互性内容回归为 Server Components，实现局部 Client Island。

### 2️⃣ 第二阶段：提效增质 (P2)
- [ ] **修复结构化数据**：确保 JSON-LD 资源可访问，更新真实的社媒 Profile。
- [ ] **视频 SEO 升级**：为视频内容添加文字摘要及 `VideoObject` 描述。
- [ ] **降低操作阻力**：优化社媒直达链接，集成移动端快捷联系动作。

### 3️⃣ 第三阶段：精耕细作 (P3)
- [ ] **真实化内容信号**：按内容实际更新时间更新 Sitemap。
- [ ] **补齐合规/信任**：更新真实备案号，完善服务流程 (SLA) 与团队资历等 EEAT 信号。

---

## 审计依据

- [Next.js Metadata & OG Images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)
- [Next.js JSON-LD Guide](https://nextjs.org/docs/app/guides/json-ld)
- [Next.js Production Checklist](https://nextjs.org/docs/app/guides/production-checklist)
- [Vercel Web Interface Guidelines](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md)