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
  title: '重庆鑫龙堂舞狮 | 西南专业舞狮演出团队_开业醒狮_商演路演_婚礼宴会',
  description: '重庆鑫龙堂是面向重庆及西南地区的专业舞狮演出团队。提供开业剪彩点睛、商场路演快闪、企业年会开场、婚礼喜庆宴会等多类型醒狮表演，场均 1000+场次执行经验。',
  alternates: {
    canonical: 'https://www.cqwushi.com',
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
