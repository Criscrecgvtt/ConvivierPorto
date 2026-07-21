import Link from 'next/link';
import { CollectionExplorer } from '@/components/collections/CollectionExplorer';
import { EditorialHero } from '@/components/editorial/EditorialHero';
import { SectionHeading } from '@/components/editorial/SectionHeading';
import { StatusBadge } from '@/components/editorial/StatusBadge';
import { officialCollections, researchTools } from '@/content/official';
import { imageAlt, siteImages } from '@/lib/assets';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Collections', 'Official Casa dos Livros acervos, catalogue access and CONVIVER collection discovery.', '/collections');

export default function CollectionsPage() {
  return (
    <main>
      <EditorialHero eyebrow="Collections / Acervos" title="Official collections remain central." subtitle="Casa dos Livros collections are preserved with source links, access statuses and research pathways." image={siteImages.collectionsShelves} alt={imageAlt.collectionsShelves} />
      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Official acervos" title="Collections listed by Casa dos Livros." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {officialCollections.map((collection) => (
              <Link key={collection.slug} href={`/collections/${collection.slug}`} className="border border-line bg-parchment p-6">
                <StatusBadge status="Verified from official website" />
                <h2 className="mt-4 font-display text-4xl leading-tight text-ink">{collection.name}</h2>
                <p className="mt-2 text-sm font-semibold text-terracotta">{collection.lifespan} {collection.role ? `· ${collection.role}` : ''}</p>
                <p className="mt-4 leading-7 text-soft-ink">{collection.summary}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-forest">Access: {collection.accessStatus}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-parchment">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Research access" title="Catalogues and inventories are not hidden." />
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {researchTools.map((tool) => (
              <a key={tool.title} href={tool.href} target="_blank" rel="noreferrer" className="border border-line bg-warm-white p-5">
                <h3 className="font-display text-3xl text-ink">{tool.title}</h3>
                <p className="mt-3 text-sm leading-6 text-soft-ink">{tool.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="CONVIVER layer" title="Object discovery prototype." >
            These cards are proposed interpretive records and remain separate from official catalogue metadata.
          </SectionHeading>
          <div className="mt-10"><CollectionExplorer /></div>
        </div>
      </section>
    </main>
  );
}
