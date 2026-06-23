import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LogoWall from '@/components/LogoWall';
import Testimonials from '@/components/Testimonials';
import ContactCTA from '@/components/ContactCTA';

// Home Sections
import HomeHero from '@/components/home/HomeHero';
import ServiceGrid from '@/components/home/ServiceGrid';
import Stats from '@/components/home/Stats';

export const metadata: Metadata = {
  title: {
    absolute: '重庆鑫龙堂舞狮 | 西南专业舞狮演出团队_开业醒狮_商演路演_婚礼宴会',
  },
  description: '重庆鑫龙堂舞狮队，提供开业剪彩、商场路演、企业年会及喜宴舞狮。拥有千场商演执行经验，现场流程严谨，服装道具整洁，欢迎联系确认演出档期。',
  keywords: '重庆开业舞狮, 醒狮表演, 重庆舞狮队, 商演路演舞狮, 年会舞狮, 婚礼舞狮',
  alternates: {
    canonical: 'https://www.cqwushi.com',
  },
  openGraph: {
    title: '重庆鑫龙堂舞狮 | 西南专业舞狮演出团队',
    description: '提供开业剪彩点睛、商场路演快闪、企业年会开场、婚礼喜庆宴会等多类型醒狮表演。',
    url: 'https://www.cqwushi.com',
    type: 'website',
  },
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HomeHero />
      <Stats />
      <LogoWall />
      <ServiceGrid />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
}
