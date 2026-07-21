import Link from 'next/link';
import { EditorialHero } from '@/components/editorial/EditorialHero';
import { SectionHeading } from '@/components/editorial/SectionHeading';
import { StatusBadge } from '@/components/editorial/StatusBadge';
import { partners } from '@/content/partners';
import { imageAlt, siteImages } from '@/lib/assets';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Partners', 'Confirmed, proposed and distribution partner opportunities for CONVIVER.', '/partners');

export default function PartnersPage() {
  const groups = Array.from(new Set(partners.map((partner) => partner.group)));

  return (
    <main>
      <EditorialHero eyebrow="Partners" title="A cultural route is built together." subtitle="Confirmed and proposed relationships are separated clearly, especially for the Porto Cultural Passport pilot." image={siteImages.gardenView} alt={imageAlt.gardenView} />
      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Partnership map" title="No proposed partner is presented as confirmed." />
          <div className="mt-10 grid gap-8">
            {groups.map((group) => (
              <section key={group}>
                <h2 className="font-display text-4xl text-ink">{group}</h2>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {partners.filter((partner) => partner.group === group).map((partner) => (
                    <article key={partner.name} className="border border-line bg-parchment p-6">
                      <StatusBadge status={partner.status} />
                      <h3 className="mt-4 font-display text-3xl text-ink">{partner.name}</h3>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <Link className="btn-primary mt-10" href="/visit">Become part of the Porto Cultural Passport</Link>
        </div>
      </section>
    </main>
  );
}
