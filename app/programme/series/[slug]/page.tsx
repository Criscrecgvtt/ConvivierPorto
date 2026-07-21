import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SectionHeading } from '@/components/editorial/SectionHeading';
import { StatusBadge } from '@/components/editorial/StatusBadge';
import { events, programmeSeries } from '@/content/events';
import { pageMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return programmeSeries.map((series) => ({ slug: series.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const series = programmeSeries.find((item) => item.slug === params.slug);
  return series ? pageMetadata(series.title, series.purpose, `/programme/series/${series.slug}`) : {};
}

export default function SeriesPage({ params }: { params: { slug: string } }) {
  const series = programmeSeries.find((item) => item.slug === params.slug);
  if (!series) notFound();
  const relatedEvents = events.filter((event) => event.seriesSlug === series.slug);

  return (
    <main className="pt-20">
      <section className="section-pad bg-parchment">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div className="relative min-h-[480px] border border-line">
            <Image src={series.image} alt={`Programme series image for ${series.title}`} fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          </div>
          <div className="self-center">
            <StatusBadge status={series.sourceStatus} />
            <h1 className="mt-5 font-display text-6xl leading-tight text-ink">{series.title}</h1>
            <p className="mt-5 text-lg leading-8 text-soft-ink">{series.purpose}</p>
            <p className="mt-4 font-semibold text-terracotta">Next session status: {series.status}. Notify-me only; no registration stored in this prototype.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn-primary" href="https://wp.letras.up.pt/casadoslivros/pt/newsletter/" target="_blank" rel="noreferrer">Notify me when announced</a>
              {series.passportStampEligible ? <Link className="btn-secondary" href="/passport">Passport eligibility</Link> : null}
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Programme design" title="Operationally honest by design." />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="border border-line bg-parchment p-5"><h2 className="font-display text-3xl">Audience</h2><p className="mt-3 text-soft-ink">{series.audience.join(', ')}</p></div>
            <div className="border border-line bg-parchment p-5"><h2 className="font-display text-3xl">Language</h2><p className="mt-3 text-soft-ink">{series.language}</p></div>
            <div className="border border-line bg-parchment p-5"><h2 className="font-display text-3xl">Capacity</h2><p className="mt-3 text-soft-ink">{series.proposedCapacity ?? 'Pending'} proposed</p></div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="border border-line bg-parchment p-6">
              <h2 className="font-display text-4xl text-ink">Reading/resources</h2>
              <ul className="mt-4 space-y-2 text-soft-ink">{(series.readingResources ?? ['Resources pending']).map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="border border-line bg-parchment p-6">
              <h2 className="font-display text-4xl text-ink">Operational needs</h2>
              <ul className="mt-4 space-y-2 text-soft-ink">{series.operationalNotes.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
          {relatedEvents.length ? (
            <div className="mt-10">
              <h2 className="font-display text-4xl text-ink">Related events</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">{relatedEvents.map((event) => <Link key={event.slug} className="border border-line bg-parchment p-5" href={`/programme/events/${event.slug}`}>{event.title}</Link>)}</div>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
