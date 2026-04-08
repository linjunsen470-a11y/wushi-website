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
            直接告诉我们
          </>
        }
        description={
          <>
            无论您是刚开始了解，还是已经确定档期和场地，
            <br className="hidden md:block" />
            都可以先把需求发给我们，我们会尽快回复并给出建议。
          </>
        }
        chips={['初步咨询', '活动沟通', '方案报价', '快速回复']}
        actions={
          <>
            <a href={`tel:${contactPanel.phone.replace(/\s+/g, '')}`} className="button-primary px-7 py-4 shadow-[0_18px_40px_rgba(163,0,17,0.2)]">
              立即电话沟通
            </a>
            <a href={`mailto:${contactPanel.email}`} className="button-secondary border-outline-variant/30 bg-white/65 px-7 py-4 text-on-surface">
              发送邮件咨询
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
              <p className="text-xs tracking-[0.18em] text-secondary">服务范围</p>
              <p className="mt-2 text-sm leading-6 text-on-surface-variant">{contactPanel.address}</p>
            </div>
          </div>
        }
      />
      <section className="bg-surface-container-low section-space">
        <div className="shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-[0_24px_60px_rgba(30,27,19,0.06)] md:p-12">
            <h2 className="page-section-title text-on-surface">提交活动需求</h2>
            <form className="mt-8 space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <label className="block">
                  <span className="field-label">活动类型</span>
                  <select className="field-control">
                    <option>开业庆典</option>
                    <option>商场商演</option>
                    <option>婚礼宴会</option>
                    <option>节庆活动</option>
                    <option>其他活动</option>
                  </select>
                </label>
                <label className="block">
                  <span className="field-label">活动日期</span>
                  <input type="date" className="field-control" />
                </label>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                <label className="block">
                  <span className="field-label">联系人</span>
                  <input type="text" placeholder="您的姓名" className="field-control placeholder:text-on-surface-variant/50" />
                </label>
                <label className="block">
                  <span className="field-label">联系电话</span>
                  <input type="tel" placeholder="手机或微信" className="field-control placeholder:text-on-surface-variant/50" />
                </label>
              </div>
              <label className="block">
                <span className="field-label">活动城市与场地</span>
                <input type="text" placeholder="例如：重庆 / 商场中庭 / 酒店宴会厅" className="field-control placeholder:text-on-surface-variant/50" />
              </label>
              <label className="block">
                <span className="field-label">补充说明</span>
                <textarea rows={5} placeholder="欢迎告诉我们活动流程、预算范围、是否需要高桩、是否需要配合剪彩揭幕或品牌主题。" className="field-control resize-none placeholder:text-on-surface-variant/50" />
              </label>
              <button type="submit" className="button-primary w-full rounded-md px-8 py-5 hover:scale-[1.01] hover:bg-primary-container">
                提交咨询需求
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="rounded-[1.75rem] bg-[#17120f] p-8 text-white">
              <h2 className="page-section-title !text-2xl text-white">联系方式</h2>
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
                      <p className="body-copy mt-2 leading-7 text-on-surface-variant">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[320px] overflow-hidden rounded-[1.75rem]">
              <Image src={contactPanel.image} alt="舞狮演出现场展示图" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
