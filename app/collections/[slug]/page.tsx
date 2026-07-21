import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MetadataTable } from '@/components/editorial/MetadataTable';
import { StatusBadge } from '@/components/editorial/StatusBadge';
import { bookItems } from '@/content/books';
import { events } from '@/content/events';
import { officialCollections } from '@/content/official';
import { podcastEpisodes } from '@/content/podcast';
import { pageMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return [...officialCollections.map((item) => ({ slug: item.slug })), ...bookItems.map((item) => ({ slug: item.slug }))];
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const collection = officialCollections.find((record) => record.slug === params.slug);
  if (collection) return pageMetadata(collection.name, collection.summary, `/collections/${collection.slug}`);
  const item = bookItems.find((record) => record.slug === params.slug);
  return item ? pageMetadata(item.title, item.shortDescription, `/collections/${item.slug}`) : {};
}

export default function CollectionItemPage({ params }: { params: { slug: string } }) {
  const collection = officialCollections.find((record) => record.slug === params.slug);
  if (collection) {
    const relatedEvents = events.filter((event) => event.relatedCollectionSlugs?.includes(collection.slug));
    const relatedPodcast = podcastEpisodes.find((episode) => relatedEvents.some((event) => event.relatedPodcastSlug === episode.slug));

    return (
      <main className="pt-20">
        <section className="section-pad bg-parchment">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <StatusBadge status="Verified from official website" />
            <h1 className="mt-5 font-display text-6xl leading-tight text-ink">{collection.name}</h1>
            <p className="mt-3 text-lg font-semibold text-terracotta">{collection.lifespan} {collection.role ? `· ${collection.role}` : ''}</p>
            <p className="mt-6 text-lg leading-8 text-soft-ink">{collection.summary}</p>
            <a className="btn-secondary mt-7" href={collection.sourceUrl} target="_blank" rel="noreferrer">Official source</a>
          </div>
        </section>
        <section className="section-pad bg-warm-white">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <MetadataTable rows={[
              ['Format', collection.format],
              ['Processing status', collection.processingStatus],
              ['Access status', collection.accessStatus],
              ['Catalogue status', collection.catalogueStatus],
              ['Source', collection.sourceUrl],
            ]} />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <div className="border border-line bg-parchment p-5">
                <h2 className="font-display text-3xl text-ink">Related programme</h2>
                {relatedEvents.length ? relatedEvents.map((event) => (
                  <a key={event.slug} className="mt-2 block text-forest underline" href={`/programme/events/${event.slug}`}>{event.title}</a>
                )) : <p className="mt-2 text-soft-ink">Programme connection pending.</p>}
              </div>
              <div className="border border-line bg-parchment p-5">
                <h2 className="font-display text-3xl text-ink">Related podcast</h2>
                {relatedPodcast ? <a className="mt-2 block text-forest underline" href={`/podcast/${relatedPodcast.slug}`}>{relatedPodcast.title}</a> : <p className="mt-2 text-soft-ink">Podcast connection pending.</p>}
              </div>
              <div className="border border-line bg-parchment p-5">
                <h2 className="font-display text-3xl text-ink">Explore location</h2>
                <a className="mt-2 block text-forest underline" href="/explore-the-house">Explore the House</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const item = bookItems.find((record) => record.slug === params.slug);
  if (!item) notFound();

  return (
    <main className="pt-20">
      <section className="bg-parchment py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-12">
          <div className="relative min-h-[520px] border border-line">
            <Image src={item.image} alt={`Image for ${item.title}`} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="self-center">
            <StatusBadge status={item.metadataStatus === 'verified' ? 'Verified' : 'Metadata pending verification'} />
            <h1 className="mt-5 font-display text-6xl leading-tight text-ink">{item.title}</h1>
            <p className="mt-5 text-lg leading-8 text-soft-ink">{item.shortDescription}</p>
            <p className="mt-4 leading-7 text-soft-ink">{item.whyItMatters ?? 'Collection details to be confirmed by Casa dos Livros.'}</p>
          </div>
        </div>
      </section>
      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <MetadataTable rows={[
            ['Author', item.author],
            ['Publication year', item.publicationYear],
            ['Date', item.dateLabel],
            ['Language', item.language],
            ['Collection', item.collection],
            ['Call number', item.callNumber],
            ['Material type', item.materialType],
            ['Related room', item.relatedRoom],
            ['Rights', item.rights],
          ]} />
          <div className="mt-10 border border-line bg-parchment p-6">
            <h2 className="font-display text-4xl text-ink">Citation and download</h2>
            <p className="mt-3 leading-7 text-soft-ink">Citation, IIIF, downloadable metadata and rights statements are placeholders until verified catalogue records are supplied.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
