'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubpageHero from '@/components/SubpageHero';
import { motion } from 'motion/react';
import { legalInfo } from '@/lib/site-data';

const sections = [
  {
    title: '1. 服务确认与范围',
    content: `重庆鑫龙堂文化传播有限公司（以下简称“本公司”）为您提供包括但不限于舞狮演出、舞龙演出、民俗活动策划及现场执行等服务。具体服务内容以双方沟通确认的方案或合同为准。`,
  },
  {
    title: '2. 预订与支付政策',
    content: `为保证演出档期，客户需在确认方案后支付约定的定金。余款应在演出当天现场执行完毕后即刻结清，或按双方约定的支付周期执行。如因客户原因单方面取消活动，定金将视情况作为违约金不予退还。`,
  },
  {
    title: '3. 现场执行与配合',
    content: `客户需为演职人员提供必要的更衣空间、饮用水及基本候场条件。针对“高桩舞狮”等高难度项目，客户需确保现场舞台承重、层高及地面平整度符合安全作业要求（通常需4.5米以上层高及稳固舞台）。`,
  },
  {
    title: '4. 安全与免责',
    content: `本公司演职人员均具备专业资质及保险。如遇不可抗力（如极端天气、政策管制、突发公共卫生事件等）导致演出无法进行或延期，双方应友好协商解决方案，本公司不承担由此产生的额外经济赔偿责任。`,
  },
  {
    title: '5. 知识产权与肖像权',
    content: `除特别约定外，本公司拥有在演出过程中拍摄、录制视频及图片素材用于品牌宣传、案例展示的权利。客户如需商业用途的高清原片，可联系本公司协商获取。`,
  },
];

export default function TermsClient() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      <SubpageHero
        eyebrow="法律条款"
        title={
          <>
            服务协议 <span className="text-on-surface">/ TERMS</span>
          </>
        }
        description="为了保障您的权益并确保演出顺利进行，请在预订前仔细阅读以下服务条款。"
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

            <div className="mt-20 rounded-2xl bg-surface-container-lowest p-8 border border-outline-variant/20">
              <h3 className="font-headline text-lg font-black text-on-surface">公司信息</h3>
              <div className="mt-4 grid gap-4 text-sm text-on-surface-variant font-medium md:grid-cols-2">
                <div>
                  <p className="text-secondary text-[10px] font-black tracking-widest uppercase mb-1">主体名称</p>
                  <p className="text-on-surface">{legalInfo.companyName}</p>
                </div>
                <div>
                  <p className="text-secondary text-[10px] font-black tracking-widest uppercase mb-1">社会信用代码</p>
                  <p className="text-on-surface">{legalInfo.socialCreditCode}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-secondary text-[10px] font-black tracking-widest uppercase mb-1">注册地址</p>
                  <p className="text-on-surface">{legalInfo.address}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
