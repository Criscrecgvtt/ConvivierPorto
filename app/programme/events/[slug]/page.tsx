import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AddToCalendarButton } from '@/components/events/AddToCalendarButton';
import { MetadataTable } from '@/components/editorial/MetadataTable';
import { StatusBadge } from '@/components/editorial/StatusBadge';
import { events, programmeSeries } from '@/content/events';
import { officialCollections } from '@/content/official';
import { podcastEpisodes } from '@/content/podcast';
import { formatEventDate } from '@/lib/formatters';
import { pageMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const event = events.find((item) => item.slug === params.slug);
  return event ? pageMetadata(event.title, event.shortDescription, `/programme/events/${event.slug}`) : {};
}

export default function ProgrammeEventDetailPage({ params }: { params: { slug: string } }) {
  const event = events.find((item) => item.slug === params.slug);
  if (!event) notFound();

  const series = programmeSeries.find((item) => item.slug === event.seriesSlug);
  const relatedPodcast = podcastEpisodes.find((item) => item.slug === event.relatedPodcastSlug);
  const relatedCollections = officialCollections.filter((collection) => event.relatedCollectionSlugs?.includes(collection.slug));
  const nextInSeries = events.find((item) => item.seriesSlug === event.seriesSlug && item.slug !== event.slug);

  return (
    <main className="pt-20">
      <section className="section-pad bg-parchment">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          {event.image ? (
            <div className="relative min-h-[500px] border border-line">
              <Image src={event.image} alt={`Programme image for ${event.title}`} fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
            </div>
          ) : null}
          <div className="self-center">
            <div className="flex flex-wrap gap-2">
              <StatusBadge status={event.institutionalVerification === 'proposed' ? 'Programme' : event.status} />
              {event.passportStampEligible ? <StatusBadge status="Passport stamp available" /> : null}
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">{event.category} · {event.frequency}</p>
            <h1 className="mt-3 font-display text-6xl leading-tight text-ink">{event.title}</h1>
            <p className="mt-5 text-lg leading-8 text-soft-ink">{event.description}</p>
            {event.category === 'cinema' ? <p className="mt-4 font-semibold text-terracotta">Seasonal cinema includes licensing, captions, space planning and a weather fallback.</p> : null}
            <div className="mt-7 flex flex-wrap gap-3">
              <AddToCalendarButton event={event} />
              {series ? <Link className="btn-secondary" href={`/programme/series/${series.slug}`}>Series page</Link> : null}
              {event.passportStampEligible ? <Link className="btn-primary" href="/passport">Passport details</Link> : null}
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad bg-warm-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:px-12">
          <MetadataTable rows={[
            ['Date', event.date ? formatEventDate(event.date) : 'Date announced soon'],
            ['Time', event.time],
            ['Duration', event.duration],
            ['Language', event.language],
            ['Location', event.location],
            ['Indoor/outdoor', event.indoorOutdoor],
            ['Audience', event.audiences.join(', ')],
            ['Capacity', event.capacity ? `${event.capacity} seats` : 'Flexible'],
            ['Price', event.priceLabel],
            ['Verification', event.institutionalVerification],
          ]} />
          <aside className="space-y-5">
            <div className="border border-line bg-parchment p-5">
              <h2 className="font-display text-3xl text-ink">Connections</h2>
              {relatedCollections.map((collection) => <Link key={collection.slug} className="mt-3 block text-forest underline" href={`/collections/${collection.slug}`}>{collection.name}</Link>)}
              {relatedPodcast ? <Link className="mt-3 block text-forest underline" href={`/podcast/${relatedPodcast.slug}`}>{relatedPodcast.title}</Link> : null}
              {event.relatedRoom ? <Link className="mt-3 block text-forest underline" href="/explore-the-house">{event.relatedRoom}</Link> : null}
              {nextInSeries ? <Link className="mt-3 block text-forest underline" href={`/programme/events/${nextInSeries.slug}`}>Next in series: {nextInSeries.title}</Link> : null}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
