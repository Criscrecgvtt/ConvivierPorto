import Link from 'next/link';
import { EditorialHero } from '@/components/editorial/EditorialHero';
import { SectionHeading } from '@/components/editorial/SectionHeading';
import { StatusBadge } from '@/components/editorial/StatusBadge';
import { partners } from '@/content/partners';
import { imageAlt, siteImages } from '@/lib/assets';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Partners', 'The Casa dos Livros and CONVIVER cultural network across bookstores, museums, hotels, students and creative communities.', '/partners');

export default function PartnersPage() {
  const groups = Array.from(new Set(partners.map((partner) => partner.group)));

  return (
    <main>
      <EditorialHero
        eyebrow="Cultural ecosystem"
        title="A Porto route made of books, places and people."
        subtitle="Bookstores, museums, hotels, student channels and neighbourhood spaces help visitors move from curiosity to repeat cultural participation."
        image={siteImages.gardenView}
        alt={imageAlt.gardenView}
      />
      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Partner journeys" title="Every partner has a role in the visitor path.">
            The network is designed around discovery: pick up a passport, follow a story, attend an event, return for a collection, bring someone else.
          </SectionHeading>
          <div className="mt-10 grid gap-8">
            {groups.map((group) => (
              <section key={group}>
                <div className="flex items-end justify-between gap-4 border-b border-line pb-3">
                  <h2 className="font-display text-4xl text-ink">{group}</h2>
                  <p className="text-sm uppercase tracking-[0.18em] text-terracotta">{partners.filter((partner) => partner.group === group).length} nodes</p>
                </div>
                <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {partners.filter((partner) => partner.group === group).map((partner) => (
                    <article key={partner.name} className="border border-line bg-parchment p-6">
                      <StatusBadge status={partner.status} />
                      <h3 className="mt-4 font-display text-3xl leading-tight text-ink">{partner.name}</h3>
                      <p className="mt-3 leading-7 text-soft-ink">{partner.role}</p>
                      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-terracotta">Visitor journey</p>
                      <p className="mt-2 leading-7 text-soft-ink">{partner.journey}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link className="btn-primary" href="/passport">Open the passport route</Link>
            <Link className="btn-secondary" href="/conviver/ecosystem">View ecosystem map</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
