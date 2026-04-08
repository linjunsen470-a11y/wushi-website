import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { contactPanel, workflowSteps } from '@/lib/site-data';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <header className="bg-surface py-24">
        <div className="shell">
          <span className="section-eyebrow">联系我们</span>
          <h1 className="display-title text-primary">
            把活动需求
            <br />
            直接说清楚
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-on-surface-variant">
            联系页现在面向中国大陆用户表达，适合直接承接开业庆典、商场商演、婚礼宴会和节庆项目的初次询价。
          </p>
        </div>
      </header>

      <section className="bg-surface-container-low py-24">
        <div className="shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-[0_24px_60px_rgba(30,27,19,0.06)] md:p-12">
            <h2 className="font-headline text-3xl font-black text-on-surface">演出需求表单</h2>
            <form className="mt-8 space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <label className="block">
                  <span className="font-headline text-xs font-black tracking-[0.24em] text-secondary">活动类型</span>
                  <select className="mt-3 w-full border-0 border-b border-outline-variant/40 bg-transparent px-0 py-3 text-lg text-on-surface focus:border-secondary focus:outline-none">
                    <option>开业庆典</option>
                    <option>商场商演</option>
                    <option>婚礼宴会</option>
                    <option>节庆活动</option>
                    <option>其他活动</option>
                  </select>
                </label>
                <label className="block">
                  <span className="font-headline text-xs font-black tracking-[0.24em] text-secondary">活动日期</span>
                  <input type="date" className="mt-3 w-full border-0 border-b border-outline-variant/40 bg-transparent px-0 py-3 text-lg text-on-surface focus:border-secondary focus:outline-none" />
                </label>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <label className="block">
                  <span className="font-headline text-xs font-black tracking-[0.24em] text-secondary">联系人</span>
                  <input type="text" placeholder="姓名" className="mt-3 w-full border-0 border-b border-outline-variant/40 bg-transparent px-0 py-3 text-lg text-on-surface placeholder:text-on-surface-variant/50 focus:border-secondary focus:outline-none" />
                </label>
                <label className="block">
                  <span className="font-headline text-xs font-black tracking-[0.24em] text-secondary">联系电话</span>
                  <input type="tel" placeholder="手机号 / 微信" className="mt-3 w-full border-0 border-b border-outline-variant/40 bg-transparent px-0 py-3 text-lg text-on-surface placeholder:text-on-surface-variant/50 focus:border-secondary focus:outline-none" />
                </label>
              </div>

              <label className="block">
                <span className="font-headline text-xs font-black tracking-[0.24em] text-secondary">活动城市与场地</span>
                <input type="text" placeholder="例如：重庆 / 商场中庭 / 酒店宴会厅" className="mt-3 w-full border-0 border-b border-outline-variant/40 bg-transparent px-0 py-3 text-lg text-on-surface placeholder:text-on-surface-variant/50 focus:border-secondary focus:outline-none" />
              </label>

              <label className="block">
                <span className="font-headline text-xs font-black tracking-[0.24em] text-secondary">补充说明</span>
                <textarea rows={5} placeholder="请描述活动流程、预算区间、是否需要高桩、主持配合或品牌定制。" className="mt-3 w-full resize-none border-0 border-b border-outline-variant/40 bg-transparent px-0 py-3 text-lg text-on-surface placeholder:text-on-surface-variant/50 focus:border-secondary focus:outline-none" />
              </label>

              <button type="submit" className="w-full rounded-md bg-primary px-8 py-5 font-headline text-sm font-black tracking-[0.24em] text-white hover:scale-[1.01] hover:bg-primary-container">
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
              <p className="section-eyebrow">咨询后流程</p>
              <div className="space-y-6">
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
