import Image from 'next/image';
import { notFound } from 'next/navigation';
import { AddToCalendarButton } from '@/components/events/AddToCalendarButton';
import { MetadataTable } from '@/components/editorial/MetadataTable';
import { events } from '@/content/events';
import { formatEventDate } from '@/lib/formatters';
import { pageMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const event = events.find((item) => item.slug === params.slug);
  return event ? pageMetadata(event.title, event.shortDescription, `/events/${event.slug}`) : {};
}

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = events.find((item) => item.slug === params.slug);
  if (!event) notFound();

  return (
    <main className="pt-20">
      <section className="section-pad bg-parchment">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div className="relative min-h-[500px] border border-line">
            <Image src={event.image} alt={`Photograph for ${event.title}`} fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          </div>
          <div className="self-center">
            <p className="eyebrow">{event.category}</p>
            <h1 className="mt-4 font-display text-6xl leading-tight text-ink">{event.title}</h1>
            <p className="mt-5 text-lg leading-8 text-soft-ink">{event.description}</p>
            <p className="mt-4 font-semibold text-terracotta">Registration placeholder: no bookings are stored by this frontend.</p>
            <div className="mt-7"><AddToCalendarButton event={event} /></div>
          </div>
        </div>
      </section>
      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <MetadataTable rows={[
            ['Date', formatEventDate(event.date)],
            ['Time', event.time],
            ['Language', event.language],
            ['Location', event.location],
            ['Capacity', event.capacity],
            ['Status', event.bookingStatus],
          ]} />
        </div>
      </section>
    </main>
  );
}
