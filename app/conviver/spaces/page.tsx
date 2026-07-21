import Link from 'next/link';
import { SectionHeading } from '@/components/editorial/SectionHeading';
import { StatusBadge } from '@/components/editorial/StatusBadge';
import { experienceSpaces } from '@/content/conviver';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('CONVIVER Spaces', 'Proposed CONVIVER programme zones for Casa dos Livros.', '/conviver/spaces');

export default function ConviverSpacesPage() {
  return (
    <main className="pt-20">
      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Permanent experience areas" title="Proposed zones, not confirmed construction.">
            Each area is an operational concept subject to institutional approval.
          </SectionHeading>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {experienceSpaces.map((space) => (
              <article key={space.slug} className="border border-line bg-parchment p-6">
                <StatusBadge status="Proposed CONVIVER area" />
                <h2 className="mt-4 font-display text-4xl text-ink">{space.title}</h2>
                <p className="mt-3 leading-7 text-soft-ink">{space.purpose}</p>
                <p className="mt-4 text-sm uppercase tracking-[0.16em] text-terracotta">Main audiences</p>
                <p className="mt-2 text-soft-ink">{space.audiences.join(', ')}</p>
                <p className="mt-4 text-sm uppercase tracking-[0.16em] text-terracotta">Example activities</p>
                <p className="mt-2 text-soft-ink">{space.activities.join(', ')}</p>
                <p className="mt-4 text-sm uppercase tracking-[0.16em] text-terracotta">Operational needs</p>
                <ul className="mt-2 space-y-1 text-soft-ink">{space.needs.map((need) => <li key={need}>{need}</li>)}</ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {space.relatedEvents.map((slug) => <Link key={slug} className="text-sm font-semibold text-forest underline" href={`/programme/series/${slug}`}>{slug}</Link>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
