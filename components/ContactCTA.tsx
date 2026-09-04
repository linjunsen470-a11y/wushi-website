import Link from 'next/link';
import { brand } from '@/lib/site-data';

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-surface-container-low section-space">
      {/* Decorative Background Element */}
      <div className="watermark absolute -right-20 -bottom-20 opacity-[0.03] select-none pointer-events-none">
        鑫龙堂
      </div>
      
      <div className="shell relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div>
            <span className="section-eyebrow text-secondary">即刻开启专业合作</span>
            <h2 className="mt-8 font-headline text-4xl font-black leading-tight tracking-tight text-on-surface md:text-5xl lg:text-6xl">
              期待与您的合作
              <br />
              快速确认档期与演出方案
            </h2>
            <p className="body-copy mx-auto mt-10 text-lg leading-relaxed text-on-surface-variant md:text-xl">
              无论是商场开业、品牌路演还是宴会活动，{brand.name} 团队都会根据场地与流程安排演出。欢迎通过微信或电话联系我们，核对档期与建议配置。
            </p>
            
            <div className="mt-14 flex flex-wrap justify-center gap-6">
              <Link
                href="/contact"
                className="button-primary group relative overflow-hidden px-10 py-5 text-lg shadow-[0_20px_50px_rgba(163,0,17,0.24)] transition-[color,background-color,box-shadow,transform] hover:-translate-y-1 hover:bg-primary-container"
              >
                <span className="relative z-10">微信/电话沟通</span>
                <div className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-0" />
              </Link>
              <Link
                href="/media"
                className="button-secondary border-primary/20 bg-white/60 px-10 py-5 text-lg text-on-surface backdrop-blur-md transition-[color,background-color,border-color,transform] hover:-translate-y-1 hover:bg-white"
              >
                视频案例
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-black tracking-widest text-on-surface/40 uppercase">
              <div className="flex items-center gap-2">
                <div aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                <span>免费出具初步方案</span>
              </div>
              <div className="flex items-center gap-2">
                <div aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                <span>定金及取消安排以双方确认的约定为准</span>
              </div>
              <div className="flex items-center gap-2">
                <div aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                <span>工作时间内及时响应</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
