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
  description: '重庆鑫龙堂舞狮，开业、路演、喜宴都接。干了上千场，头天对流程当天照着敲。电话 18983662830。',
  keywords: '重庆开业舞狮, 醒狮表演, 重庆舞狮队, 商演路演舞狮, 年会舞狮, 婚礼舞狮',
  alternates: {
    canonical: 'https://www.cqwushi.com',
  },
  openGraph: {
    title: '重庆鑫龙堂舞狮 | 西南专业舞狮演出团队',
    description: '重庆本地舞狮队，开业、商演、喜宴都接。看视频看案例，微信问档期。',
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
