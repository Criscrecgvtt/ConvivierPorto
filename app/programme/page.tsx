import Image from 'next/image';
import Link from 'next/link';
import { ProgrammeFilters } from '@/components/programme/ProgrammeFilters';
import { SectionHeading } from '@/components/editorial/SectionHeading';
import { StatusBadge } from '@/components/editorial/StatusBadge';
import { events, programmeSeries } from '@/content/events';
import { officialPages } from '@/content/official';
import { siteImages } from '@/lib/assets';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Programme', 'Recurring, seasonal and one-off programme concepts for Casa dos Livros and CONVIVER.', '/programme');

export default function ProgrammePage() {
  const featured = events[0];

  return (
    <main className="pt-20">
      <section className="bg-forest text-warm-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <p className="eyebrow text-muted-gold">Programme</p>
            <h1 className="mt-4 font-display text-6xl leading-tight">A living cultural rhythm for Casa dos Livros.</h1>
            <p className="mt-5 text-lg leading-8 text-warm-white/78">Recurring series, seasonal events, exhibition memory and publication pathways remain connected to the institution.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link className="btn-primary bg-warm-white text-forest hover:bg-parchment" href="/programme/events">Upcoming events</Link>
              <Link className="btn-secondary border-warm-white/40 text-warm-white hover:bg-warm-white/10" href="/programme/calendar">Calendar view</Link>
            </div>
          </div>
          <div className="relative min-h-[420px] border border-warm-white/20">
            <Image src={siteImages.readingRoom} alt="Reading room prepared for programme activity" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Featured event" title={featured.title}>{featured.shortDescription}</SectionHeading>
          <div className="mt-5 flex flex-wrap gap-2">
            <StatusBadge status="Programme" />
            {featured.passportStampEligible ? <StatusBadge status="Passport stamp available" /> : null}
          </div>
          <Link className="btn-primary mt-7" href={`/programme/events/${featured.slug}`}>Open featured event</Link>
        </div>
      </section>

      <section className="section-pad bg-parchment">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Recurring series" title="Recurring and seasonal structures." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {programmeSeries.map((series) => (
              <Link key={series.slug} href={`/programme/series/${series.slug}`} className="border border-line bg-warm-white p-6">
                <StatusBadge status={series.sourceStatus} />
                <h2 className="mt-4 font-display text-4xl leading-tight text-ink">{series.title}</h2>
                <p className="mt-3 text-sm uppercase tracking-[0.16em] text-terracotta">{series.frequency} · {series.language}</p>
                <p className="mt-4 leading-7 text-soft-ink">{series.purpose}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Find your path" title="Filter by audience or switch to calendar." />
          <div className="mt-10"><ProgrammeFilters events={events} /></div>
        </div>
      </section>

      <section className="section-pad bg-forest text-warm-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <p className="eyebrow text-muted-gold">Stay connected</p>
            <h2 className="mt-3 font-display text-5xl">Programme announcements should use the official newsletter workflow.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="btn-primary bg-warm-white text-forest hover:bg-parchment" href={officialPages.newsletter} target="_blank" rel="noreferrer">Newsletter</a>
            <Link className="btn-secondary border-warm-white/40 text-warm-white hover:bg-warm-white/10" href="/visit">Plan your visit</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
