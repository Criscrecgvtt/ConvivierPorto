import Link from 'next/link';
import { EditorialHero } from '@/components/editorial/EditorialHero';
import { SectionHeading } from '@/components/editorial/SectionHeading';
import { events } from '@/content/events';
import { officialContacts } from '@/content/official';
import { imageAlt, siteImages } from '@/lib/assets';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Visit', 'Practical visitor information for Casa dos Livros with verification status clearly shown.', '/visit');

export default function VisitPage() {
  return (
    <main>
      <EditorialHero eyebrow="Visit" title="Plan a slow encounter with Casa dos Livros." subtitle="Official address, hours and contact details are preserved from the institutional website." image={siteImages.heroDoorway} alt={imageAlt.heroDoorway} />
      <section className="section-pad bg-warm-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:px-8 lg:grid-cols-3 lg:px-12">
          {[
            ['Address', officialContacts.address],
            ['Building hours', officialContacts.buildingHours],
            ['Reading/reference room', officialContacts.readingRoomHours],
            ['Telephone', officialContacts.telephone],
            ['Official email', officialContacts.email],
            ['Accessibility', 'Step-free guidance, quiet seating and staff assistance are available during public activities.'],
            ['Languages', 'Portuguese and English visitor information.'],
            ['How to arrive', 'Use the Campo Alegre entrance and plan extra time for the garden approach.'],
            ['Groups and schools', 'Group visits can be arranged by email with a preferred date, audience and language.'],
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
