import Image from 'next/image';
import { notFound } from 'next/navigation';
import { podcastEpisodes, podcastName } from '@/content/podcast';
import { pageMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return podcastEpisodes.map((episode) => ({ slug: episode.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const episode = podcastEpisodes.find((item) => item.slug === params.slug);
  return episode ? pageMetadata(episode.title, episode.description, `/podcast/${episode.slug}`) : {};
}

export default function PodcastDetailPage({ params }: { params: { slug: string } }) {
  const episode = podcastEpisodes.find((item) => item.slug === params.slug);
  if (!episode) notFound();

  return (
    <main className="pt-20">
      <section className="section-pad bg-parchment">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div className="relative min-h-[500px] border border-line">
            <Image src={episode.coverImage} alt={`Cover image for ${episode.title}`} fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          </div>
          <div className="self-center">
            <p className="eyebrow">{podcastName} · Episode {episode.episodeNumber}</p>
            <h1 className="mt-4 font-display text-6xl leading-tight text-ink">{episode.title}</h1>
            <p className="mt-5 text-lg leading-8 text-soft-ink">{episode.description}</p>
            <dl className="mt-8 grid gap-3 text-soft-ink">
              <div><dt className="font-semibold text-ink">Status</dt><dd>Pilot episode in preparation</dd></div>
              <div><dt className="font-semibold text-ink">Language</dt><dd>{episode.language}</dd></div>
              <div><dt className="font-semibold text-ink">Transcript</dt><dd>Transcript placeholder pending audio production.</dd></div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
