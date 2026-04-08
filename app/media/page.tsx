import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { mediaHighlights, mediaLogos, mediaVideos } from '@/lib/site-data';

export default function MediaPage() {
  const featured = mediaVideos[0];
  const restVideos = mediaVideos.slice(1);

  return (
    <main className="min-h-screen">
      <Navbar />

      <header className="bg-surface py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="section-eyebrow">媒体视频</span>
            <h1 className="display-title text-primary leading-[0.92]">
              用真实视频
              <br />
              建立第一层信任
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-on-surface-variant">
            这个页面承接社媒传播和项目视频展示，不做空泛的 vlog 页面，而是把开业、商演、婚礼和高桩类素材直接转化为可销售的内容证据。
          </p>
        </div>
      </header>

      <section className="bg-surface-container-low py-24">
        <div className="shell grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] bg-black">
            <video
              controls
              preload="metadata"
              poster={featured.poster.src}
              className="aspect-video w-full object-cover"
              src={`/api/video?file=${encodeURIComponent(featured.fileName)}`}
            />
          </div>
          <div className="editorial-card">
            <span className="section-eyebrow">精选视频</span>
            <h2 className="section-title text-3xl">{featured.title}</h2>
            <p className="mt-4 text-sm uppercase tracking-[0.22em] text-secondary">{featured.category}</p>
            <p className="mt-6 leading-7 text-on-surface-variant">{featured.description}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {mediaHighlights.map((item) => (
                <div key={item.title} className="rounded-2xl bg-surface-container-low p-5">
                  <h3 className="font-headline text-lg font-black text-on-surface">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-on-surface-variant">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="shell">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="section-eyebrow">视频分类</span>
              <h2 className="section-title">适合给甲方和渠道直接转发</h2>
            </div>
            <div className="flex flex-wrap gap-3 text-xs font-headline font-black tracking-[0.2em] text-on-surface-variant">
              {mediaLogos.map((logo) => (
                <span key={logo} className="rounded-full bg-surface-container-low px-4 py-2">{logo}</span>
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {restVideos.map((video) => (
              <article key={video.fileName} className="overflow-hidden rounded-[1.75rem] bg-surface-container-low">
                <div className="overflow-hidden bg-black">
                  <video
                    controls
                    preload="metadata"
                    poster={video.poster.src}
                    className="aspect-video w-full object-cover"
                    src={`/api/video?file=${encodeURIComponent(video.fileName)}`}
                  />
                </div>
                <div className="p-8">
                  <p className="text-sm uppercase tracking-[0.22em] text-secondary">{video.category}</p>
                  <h3 className="mt-3 font-headline text-2xl font-black text-on-surface">{video.title}</h3>
                  <p className="mt-4 leading-7 text-on-surface-variant">{video.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ink-silk py-24 text-white">
        <div className="shell text-center">
          <span className="section-eyebrow text-secondary-fixed">媒体页的作用</span>
          <h2 className="mx-auto max-w-4xl font-headline text-4xl font-black tracking-tight md:text-6xl">
            把“社媒宣传”和“视频案例”合并成一页，既能承接传播，也能服务成交。
          </h2>
        </div>
      </section>

      <Footer />
    </main>
  );
}
