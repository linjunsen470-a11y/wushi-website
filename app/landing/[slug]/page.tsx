import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { landingPagesData } from '@/lib/landing-data';
import LandingClient from './LandingClient';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  // eslint-disable-next-line security/detect-object-injection
  const page = landingPagesData[slug];

  if (!page) {
    return { title: '页面未找到 - 重庆鑫龙堂舞狮' };
  }

  return {
    title: page.metadata.title,
    description: page.metadata.description,
    keywords: page.metadata.keywords,
    alternates: {
      canonical: `https://www.cqwushi.com/landing/${slug}`,
    },
    openGraph: {
      title: page.metadata.title,
      description: page.metadata.description,
      url: `https://www.cqwushi.com/landing/${slug}`,
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(landingPagesData).map((slug) => ({
    slug,
  }));
}

export default async function LandingPage({ params }: Props) {
  const { slug } = await params;
  // eslint-disable-next-line security/detect-object-injection
  const page = landingPagesData[slug];

  if (!page) {
    notFound();
  }

  return <LandingClient page={page} />;
}
