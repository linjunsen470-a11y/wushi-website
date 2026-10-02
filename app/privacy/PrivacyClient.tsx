import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubpageHero from '@/components/SubpageHero';
import AnalyticsPreference from '@/components/AnalyticsPreference';
import { legalInfo } from '@/lib/site-data';

const sections = [
  {
    title: '信息收集范围',
    content: '当您通过在线表单、电话或微信咨询时，我们会收到您主动提供的称呼、手机号或微信号、活动类型和备注。请勿在备注中填写身份证号、银行卡信息等与咨询无关的敏感资料。',
  },
  {
    title: '信息使用与保存',
    content: '咨询信息用于回复需求、确认档期、提供报价和演出对接，不用于无关推销，不出售您的联系方式。咨询记录由服务人员管理；您可联系我们查询、更正或请求删除不再需要的咨询记录。涉及已确认订单及依法需要保留的记录，会按相应服务和法律要求处理。',
  },
  {
    title: '邮件与第三方服务',
    content: '在线表单通过 Resend 邮件服务发送咨询通知，因此您填写的内容会交由该服务商处理。电话、微信和第三方平台上的沟通也受对应平台规则约束。视频展示页嵌入哔哩哔哩播放器，加载时会向该平台发送网络请求，平台可能获得 IP 地址、浏览器信息并使用 Cookie。仅浏览普通页面不会发送在线表单中的信息。',
  },
  {
    title: '访问统计与本地偏好',
    content: '百度访问统计默认关闭，仅在您主动开启后加载。开启后，百度可能处理页面访问、来源、设备和网络信息，并使用统计 Cookie；相关数据由其服务系统处理。我们用浏览器本地存储记住您的统计选择，不将此偏好用于咨询表单。您可在下方关闭统计，或清除浏览器网站数据重置偏好。第三方服务的处理地点及规则由各服务商说明，不承诺所有数据仅在本地保存。',
  },
  {
    title: '联系与用户权利',
    content: `如需查询、更正或删除咨询信息，或对本政策有疑问，请拨打 ${legalInfo.phone} 联系我们。我们会核实与请求相关的信息后处理。`,
  },
];

export default function PrivacyClient() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-surface">
      <Navbar />
      <SubpageHero
        eyebrow="隐私保障"
        title={
          <>
            隐私政策 <span className="text-on-surface">/ PRIVACY</span>
          </>
        }
        description="我们非常重视您的个人隐私，并承诺妥善保护您在咨询过程中提供的所有信息。"
        variant="light"
      />

      <section className="py-20">
        <div className="shell max-w-4xl">
          <div
            className="rounded-[2.5rem] border border-outline-variant/30 bg-white p-8 md:p-16 shadow-premium"
          >
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="group">
                  <h2 className="font-headline text-2xl font-black tracking-tight text-primary flex items-center gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/5 text-sm text-secondary">
                      {index + 1}
                    </span>
                    {section.title}
                  </h2>
                  <div className="mt-4 h-px w-12 bg-secondary/30 transition-[width] group-hover:w-20" />
                  <p className="mt-6 text-lg leading-relaxed text-on-surface-variant font-medium">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <AnalyticsPreference />

            <div className="mt-20 border-t border-outline-variant/20 pt-10">
              <p className="text-sm text-on-surface-variant font-medium">
                本政策自发布之日起生效。如有重大更新，我们将在本页面进行公示。
                <br />
                最后更新日期：2026年10月2日
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
