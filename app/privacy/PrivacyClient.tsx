'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubpageHero from '@/components/SubpageHero';
import { motion } from 'motion/react';
import { legalInfo } from '@/lib/site-data';

const sections = [
  {
    title: '1. 信息收集范围',
    content: `当您通过本网站、电话或微信咨询舞狮服务时，我们可能会收集您的姓名、联系电话、微信账号、所属公司名称以及活动具体需求（如时间、地点、类型等）。我们不收集您的银行卡密码、指纹等生物识别敏感信息。`,
  },
  {
    title: '2. 信息使用目的',
    content: `您提供的信息仅用于以下用途：与您沟通演出方案、提供档期查询、发送项目报价、以及在确认合作后进行现场执行对接。我们不会将您的信息用于任何与舞狮演艺服务无关的商业推销。`,
  },
  {
    title: '3. 信息安全保护',
    content: `本公司采取严格的内部管理措施保护您的个人信息安全。所有咨询记录均由专人管理，严禁私自外泄。我们不会向任何第三方公司或个人出售或转让您的联系方式，除非获得您的明确授权或法律法规要求。`,
  },
  {
    title: '4. Cookie 与技术追踪',
    content: `本网站可能使用基础的 Cookie 技术来优化您的访问体验（如记住您的语言偏好）。我们不会利用技术手段追踪您的个人行踪或进行跨站数据抓取。`,
  },
  {
    title: '5. 用户权利',
    content: `如您希望修改或删除在我们系统中留存的咨询信息，可随时拨打本公司官方电话 ${legalInfo.phone} 联系我们处理。`,
  },
];

export default function PrivacyClient() {
  return (
    <main className="min-h-screen bg-surface">
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
                  <div className="mt-4 h-px w-12 bg-secondary/30 transition-all group-hover:w-20" />
                  <p className="mt-6 text-lg leading-relaxed text-on-surface-variant font-medium">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-20 border-t border-outline-variant/20 pt-10">
              <p className="text-sm text-on-surface-variant font-medium">
                本政策自发布之日起生效。如有重大更新，我们将在本页面进行公示。
                <br />
                最后更新日期：2026年4月25日
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
