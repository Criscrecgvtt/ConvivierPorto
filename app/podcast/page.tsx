import Image from 'next/image';
import Link from 'next/link';
import { EditorialHero } from '@/components/editorial/EditorialHero';
import { SectionHeading } from '@/components/editorial/SectionHeading';
import { podcastEpisodes, podcastName } from '@/content/podcast';
import { imageAlt, siteImages } from '@/lib/assets';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Voices of the House', 'Pilot podcast concepts for Casa dos Livros, marked honestly as coming soon.', '/podcast');

export default function PodcastPage() {
  return (
    <main>
      <EditorialHero eyebrow="Podcast" title={podcastName} subtitle="CONVIVER stories from Casa dos Livros, currently prepared as a pilot season." image={siteImages.portraitPainting} alt={imageAlt.portraitPainting} />
      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Season 1" title="Pilot episode concepts." />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {podcastEpisodes.map((episode) => (
              <Link key={episode.slug} href={`/podcast/${episode.slug}`} className="grid overflow-hidden border border-line bg-parchment md:grid-cols-[190px_1fr]">
                <div className="relative min-h-[220px]"><Image src={episode.coverImage} alt={`Cover for ${episode.title}`} fill sizes="190px" className="object-cover" /></div>
                <div className="p-6">
                  <p className="eyebrow">Episode {episode.episodeNumber} · {episode.language}</p>
                  <h2 className="mt-3 font-display text-3xl text-ink">{episode.title}</h2>
                  <p className="mt-3 leading-7 text-soft-ink">{episode.description}</p>
                  <p className="mt-4 font-semibold text-terracotta">Pilot episode in preparation</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
