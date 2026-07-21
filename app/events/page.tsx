import Image from 'next/image';
import Link from 'next/link';
import { EditorialHero } from '@/components/editorial/EditorialHero';
import { SectionHeading } from '@/components/editorial/SectionHeading';
import { events } from '@/content/events';
import { imageAlt, siteImages } from '@/lib/assets';
import { formatEventDate } from '@/lib/formatters';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Events', 'Proposed pilot events and cultural programming for Casa dos Livros.', '/events');

export default function EventsPage() {
  return (
    <main>
      <EditorialHero eyebrow="Events" title="Gatherings shaped by reading." subtitle="Guided visits, workshops, talks and pilot podcast recordings, clearly marked until dates are verified." image={siteImages.readingRoom} alt={imageAlt.readingRoom} />
      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Upcoming first" title="Proposed pilot programme." />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {events.map((event) => (
              <Link key={event.slug} href={`/events/${event.slug}`} className="group overflow-hidden border border-line bg-parchment">
                <div className="relative h-72">
                  <Image src={event.image} alt={`Photograph for ${event.title}`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="eyebrow">{event.category} · {event.language}</p>
                  <h2 className="mt-3 font-display text-4xl text-ink">{event.title}</h2>
                  <p className="mt-3 text-soft-ink">{formatEventDate(event.date)} · {event.time}</p>
                  <p className="mt-4 leading-7 text-soft-ink">{event.shortDescription}</p>
                  <p className="mt-4 font-semibold text-terracotta">Booking status: coming soon</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
