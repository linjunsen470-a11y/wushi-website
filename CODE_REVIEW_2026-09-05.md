# 代码、文案、SEO 与浏览体验审查

审查对象：GitHub `linjunsen470-a11y/wushi-website` 对应的本地工作区。本次提交包含审查修复，以及用户确认的基础演出预算调整（2000–2500 元）。

## 已修复

| 位置 | 问题与处理 |
| --- | --- |
| `lib/seo.ts:1`、各路由 `page.tsx` | 子页面重写 Open Graph 对象后丢失布局中的图片、语言和站点名称。提取公共字段并在各页面显式复用。文章 Twitter 卡片使用对应封面。 |
| `app/page.tsx`、`lib/landing-data.ts` | 首页和六个落地页标题存在关键词堆叠、品牌重复。缩短为页面意图与服务内容，品牌由布局模板追加。 |
| `app/contact/page.tsx`、`lib/site-data.ts` | “实时报价”“最真实”“雨雪下依旧稳定”等表达可能超出实际服务承诺。改为咨询报价、现场记录和按条件评估的描述；简化部分宣传式图片替代文字。 |
| `content/guide/chongqing-lion-dance-price.md` | 报价参考被描述为行业标准，并把价格与服务品质直接关联。明确是预算参考、最终以书面报价为准，移除未经证实的市场均价判断与品牌权威表述，更新修改日期。 |
| `lib/site-data.ts` | 中式婚宴方案使用雪地演出照片，改用已有婚宴照片。 |
| `components/Navbar.tsx` | 小屏菜单展开后锁住页面但未提供内部滚动；切换桌面尺寸可能继续锁屏。移除全局滚动锁，限制菜单高度并允许滚动，Escape 返回按钮焦点，桌面断点自动关闭。平板使用折叠菜单，展开时覆盖悬浮联系按钮。 |
| `hooks/use-copy.ts`、联系页与悬浮咨询 | 剪贴板请求未等待就显示成功。统一异步复制，拒绝授权时显示手动复制号码；清理定时器并防止旧请求覆盖新状态。悬浮咨询补充展开状态、Escape 关闭及减少动态效果支持。 |
| `app/guide/GuideClient.tsx` | 无交互的指南列表依赖客户端动画才显示。改为服务端组件，文章卡片直接可见，并补充空列表提示。 |
| `app/guide/[slug]/page.tsx` | 手机端表格拥挤，增加带标签和键盘焦点的横向滚动容器及最小列宽；显示文章更新日期和机器可读日期；优化上一篇/下一篇边界文案。 |
| `lib/guide.ts:37` | 两套重复解析逻辑依赖类型断言，错误文章可能静默变成 404。统一解析并验证必填字段、日期、slug 与文件名一致性、封面存在性；无效文章阻断构建。排序增加同日期的稳定顺序。 |
| `lib/guide.ts:83`、`app/landing/[slug]/page.tsx:14` | 文章查询先拒绝路径穿越；落地页查询只接受对象自身键，避免 `constructor`、`toString` 等异常地址进入页面渲染。 |

Open Graph 的处理依据 [Next.js 元数据合并规则](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#merging)。图片文字参考 [Google 图片 SEO 指南](https://developers.google.com/search/docs/appearance/google-images)，交互审查参考 [Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines/blob/main/command.md)。

## 验证

- `pnpm lint` 与 `pnpm build` 均通过，`git diff --check` 通过。
- 全套 Playwright 曾通过 58 项，2 项按设备跳过；最后的菜单层级与表格调整后，针对性重跑新增 14 项全部通过。
- Playwright 桌面与手机 Chromium：原有页面、导航与表单校验；新增分享元数据、菜单滚动与焦点、复制授权拒绝、无 JavaScript 阅读、异常落地页 404、文章表格滚动检查。
- 构建校验全部 15 篇生产指南，生成 38 个静态页面。
- 手机菜单与文章表格截图位于 `test-results/`，测试 HTML 报告位于 `playwright-report/index.html`。
- 未实际发送咨询表单邮件，也未测试第三方视频服务的可用性；未进行线上流量、排名或 Core Web Vitals 测量。

## 仍需业务资料确认

- 案例客户、演出日期、客户评价和团队履历是现有内容，代码审查不能证明其真实性。应保留对应现场记录与使用授权。
- `components/VideoJsonLd.tsx` 的视频缺少可核实的上传日期。取得真实日期后再补充 `uploadDate`，不应使用本次构建日期代替。
- 实际报价区间需业务方持续维护；基础演出区间已按用户确认统一调整为 2000–2500 元；其他配置数额保持原有内容。
- 测试启动时出现现有 `output: standalone` 与 `next start` 的提示；本地路由检查通过，生产部署仍应沿用项目部署脚本并核对 standalone 静态资源复制流程。
