import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import { contactPanel, workflowSteps } from '@/lib/site-data';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <SubpageHero
        eyebrow="联系我们"
        title={
          <>
            把活动需求
            <br />
            直接说清楚
          </>
        }
        description="联系页面向中国大陆用户表达，适合直接承接开业庆典、商场商演、婚礼宴会和节庆项目的初次询价。首屏先给出联系方式和沟通预期，避免进入表单前仍然信息不足。"
        chips={['初次询价', '项目沟通', '方案报价', '快速响应']}
        actions={
          <>
            <a
              href={`tel:${contactPanel.phone.replace(/\s+/g, '')}`}
              className="rounded-full bg-primary px-7 py-4 font-headline text-sm font-black tracking-[0.14em] text-white shadow-[0_18px_40px_rgba(163,0,17,0.2)]"
            >
              立即电话沟通
            </a>
            <a
              href={`mailto:${contactPanel.email}`}
              className="rounded-full border border-outline-variant/30 bg-white/65 px-7 py-4 font-headline text-sm font-black tracking-[0.14em] text-on-surface"
            >
              发送邮件需求
            </a>
          </>
        }
        panel={
          <div className="space-y-4">
            <div className="hero-stat bg-white/72">
              <p className="text-xs tracking-[0.18em] text-secondary">联系电话</p>
              <p className="mt-2 text-lg font-semibold text-on-surface">{contactPanel.phone}</p>
            </div>
            <div className="hero-stat bg-white/72">
              <p className="text-xs tracking-[0.18em] text-secondary">邮箱</p>
              <p className="mt-2 text-lg font-semibold text-on-surface">{contactPanel.email}</p>
            </div>
            <div className="hero-stat bg-white/72">
              <p className="text-xs tracking-[0.18em] text-secondary">可咨询项目</p>
              <p className="mt-2 text-sm leading-6 text-on-surface-variant">{contactPanel.address}</p>
            </div>
          </div>
        }
      />

      <section className="bg-surface-container-low py-24">
        <div className="shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-[0_24px_60px_rgba(30,27,19,0.06)] md:p-12">
            <h2 className="page-section-title !text-[clamp(2rem,3.2vw,3.2rem)] text-on-surface">演出需求表单</h2>
            <form className="mt-8 space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <label className="block">
                  <span className="font-headline text-xs font-black tracking-[0.18em] text-secondary">活动类型</span>
                  <select className="mt-3 w-full border-0 border-b border-outline-variant/40 bg-transparent px-0 py-3 text-lg text-on-surface focus:border-secondary focus:outline-none">
                    <option>开业庆典</option>
                    <option>商场商演</option>
                    <option>婚礼宴会</option>
                    <option>节庆活动</option>
                    <option>其他活动</option>
                  </select>
                </label>
                <label className="block">
                  <span className="font-headline text-xs font-black tracking-[0.18em] text-secondary">活动日期</span>
                  <input type="date" className="mt-3 w-full border-0 border-b border-outline-variant/40 bg-transparent px-0 py-3 text-lg text-on-surface focus:border-secondary focus:outline-none" />
                </label>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <label className="block">
                  <span className="font-headline text-xs font-black tracking-[0.18em] text-secondary">联系人</span>
                  <input type="text" placeholder="姓名" className="mt-3 w-full border-0 border-b border-outline-variant/40 bg-transparent px-0 py-3 text-lg text-on-surface placeholder:text-on-surface-variant/50 focus:border-secondary focus:outline-none" />
                </label>
                <label className="block">
                  <span className="font-headline text-xs font-black tracking-[0.18em] text-secondary">联系电话</span>
                  <input type="tel" placeholder="手机号 / 微信" className="mt-3 w-full border-0 border-b border-outline-variant/40 bg-transparent px-0 py-3 text-lg text-on-surface placeholder:text-on-surface-variant/50 focus:border-secondary focus:outline-none" />
                </label>
              </div>

              <label className="block">
                <span className="font-headline text-xs font-black tracking-[0.18em] text-secondary">活动城市与场地</span>
                <input type="text" placeholder="例如：重庆 / 商场中庭 / 酒店宴会厅" className="mt-3 w-full border-0 border-b border-outline-variant/40 bg-transparent px-0 py-3 text-lg text-on-surface placeholder:text-on-surface-variant/50 focus:border-secondary focus:outline-none" />
              </label>

              <label className="block">
                <span className="font-headline text-xs font-black tracking-[0.18em] text-secondary">补充说明</span>
                <textarea rows={5} placeholder="请描述活动流程、预算区间、是否需要高桩、主持配合或品牌定制。" className="mt-3 w-full resize-none border-0 border-b border-outline-variant/40 bg-transparent px-0 py-3 text-lg text-on-surface placeholder:text-on-surface-variant/50 focus:border-secondary focus:outline-none" />
              </label>

              <button type="submit" className="w-full rounded-md bg-primary px-8 py-5 font-headline text-sm font-black tracking-[0.18em] text-white hover:scale-[1.01] hover:bg-primary-container">
                提交询价需求
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="rounded-[1.75rem] bg-[#17120f] p-8 text-white">
              <h2 className="font-headline text-2xl font-black">联系信息</h2>
              <div className="mt-6 space-y-4 text-white/72">
                <p>{contactPanel.phone}</p>
                <p>{contactPanel.email}</p>
                <p>{contactPanel.address}</p>
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-surface p-8">
              <p className="page-eyebrow text-secondary">咨询后流程</p>
              <div className="mt-6 space-y-6">
                {workflowSteps.slice(0, 3).map((step, index) => (
                  <div key={step.title} className="grid grid-cols-[52px_1fr] gap-4">
                    <div className="font-headline text-3xl font-black text-primary/25">0{index + 1}</div>
                    <div>
                      <h3 className="font-headline text-xl font-black text-on-surface">{step.title}</h3>
                      <p className="mt-2 leading-7 text-on-surface-variant">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[320px] overflow-hidden rounded-[1.75rem]">
              <Image src={contactPanel.image} alt="联系页展示图" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
