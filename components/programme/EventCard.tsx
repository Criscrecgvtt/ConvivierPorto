import Image from 'next/image';
import Link from 'next/link';
import { StatusBadge } from '@/components/editorial/StatusBadge';
import type { CulturalEvent } from '@/content/events';
import { formatEventDate } from '@/lib/formatters';

export function EventCard({ event, basePath = '/programme/events' }: { event: CulturalEvent; basePath?: string }) {
  return (
    <Link href={`${basePath}/${event.slug}`} className="group overflow-hidden border border-line bg-warm-white">
      {event.image ? (
        <div className="relative h-64">
          <Image src={event.image} alt={`Programme image for ${event.title}`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
        </div>
      ) : null}
      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          <StatusBadge status={event.institutionalVerification === 'verified' ? 'Confirmed' : event.institutionalVerification === 'proposed' ? 'Programme' : 'In development'} />
          {event.passportStampEligible ? <StatusBadge status="Passport stamp available" /> : null}
        </div>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">{event.category} · {event.frequency}</p>
        <h3 className="mt-2 font-display text-4xl leading-tight text-ink">{event.title}</h3>
        <p className="mt-3 text-sm text-soft-ink">{event.date ? formatEventDate(event.date) : 'Date announced soon'} · {event.language}</p>
        <p className="mt-4 leading-7 text-soft-ink">{event.shortDescription}</p>
      </div>
    </Link>
  );
}
