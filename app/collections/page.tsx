import Image from 'next/image';
import Link from 'next/link';
import { CollectionExplorer } from '@/components/collections/CollectionExplorer';
import { EditorialHero } from '@/components/editorial/EditorialHero';
import { SectionHeading } from '@/components/editorial/SectionHeading';
import { bookItems } from '@/content/books';
import { imageAlt, siteImages } from '@/lib/assets';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Collections', 'Search pending collection records, cultural objects and room connections.', '/collections');

export default function CollectionsPage() {
  const bookOfWeek = bookItems[0];

  return (
    <main>
      <EditorialHero eyebrow="Collections" title="Books, objects and cultural memory." subtitle="Search a credible pending catalogue designed for verified institutional data." image={siteImages.collectionsShelves} alt={imageAlt.collectionsShelves} />
      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Collection search" title="Find records without inventing certainty." />
          <div className="mt-10"><CollectionExplorer /></div>
        </div>
      </section>
      <section className="section-pad bg-parchment">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div className="relative min-h-[420px] border border-line">
            <Image src={bookOfWeek.image} alt={`Book of the Week image for ${bookOfWeek.title}`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="self-center">
            <p className="eyebrow">Book of the Week</p>
            <h2 className="mt-4 font-display text-5xl text-ink">{bookOfWeek.title}</h2>
            <p className="mt-5 text-lg leading-8 text-soft-ink">{bookOfWeek.whyItMatters}</p>
            <Link className="btn-primary mt-7" href={`/collections/${bookOfWeek.slug}`}>Open record</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
