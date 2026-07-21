import Link from 'next/link';
import { EditorialHero } from '@/components/editorial/EditorialHero';
import { SectionHeading } from '@/components/editorial/SectionHeading';
import { events } from '@/content/events';
import { imageAlt, siteImages } from '@/lib/assets';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Visit', 'Practical visitor information for Casa dos Livros with verification status clearly shown.', '/visit');

export default function VisitPage() {
  return (
    <main>
      <EditorialHero eyebrow="Visit" title="Plan a slow encounter with the house." subtitle="Visitor details are intentionally marked pending until confirmed by Casa dos Livros." image={siteImages.heroDoorway} alt={imageAlt.heroDoorway} />
      <section className="section-pad bg-warm-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:px-8 lg:grid-cols-3 lg:px-12">
          {[
            ['Address', 'Information pending confirmation by Casa dos Livros.'],
            ['Opening hours', 'Information pending confirmation by Casa dos Livros.'],
            ['Accessibility', 'Access information, lifts, seating and sensory details pending institutional confirmation.'],
            ['Languages', 'Portuguese and English visitor information proposed for the pilot.'],
            ['How to arrive', 'Map embed or official map link pending confirmation.'],
            ['Groups and schools', 'Group visit process and booking contact pending confirmation.'],
          ].map(([title, copy]) => (
            <div key={title} className="border border-line bg-parchment p-6">
              <h2 className="font-display text-3xl text-ink">{title}</h2>
              <p className="mt-3 leading-7 text-soft-ink">{copy}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section-pad bg-forest text-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Current opportunity" title={events[0].title}>
            <span className="text-warm-white/80">{events[0].shortDescription}</span>
          </SectionHeading>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="btn-primary bg-warm-white text-forest hover:bg-parchment" href={`/events/${events[0].slug}`}>View event</Link>
            <Link className="btn-secondary border-warm-white/40 text-warm-white hover:bg-warm-white/10" href="/passport">Passport pickup note</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
