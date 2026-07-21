import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MetadataTable } from '@/components/editorial/MetadataTable';
import { StatusBadge } from '@/components/editorial/StatusBadge';
import { bookItems } from '@/content/books';
import { pageMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return bookItems.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = bookItems.find((record) => record.slug === params.slug);
  return item ? pageMetadata(item.title, item.shortDescription, `/collections/${item.slug}`) : {};
}

export default function CollectionItemPage({ params }: { params: { slug: string } }) {
  const item = bookItems.find((record) => record.slug === params.slug);
  if (!item) notFound();

  return (
    <main className="pt-20">
      <section className="bg-parchment py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-12">
          <div className="relative min-h-[520px] border border-line">
            <Image src={item.image} alt={`Image for ${item.title}`} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="self-center">
            <StatusBadge status={item.metadataStatus === 'verified' ? 'Verified' : 'Metadata pending verification'} />
            <h1 className="mt-5 font-display text-6xl leading-tight text-ink">{item.title}</h1>
            <p className="mt-5 text-lg leading-8 text-soft-ink">{item.shortDescription}</p>
            <p className="mt-4 leading-7 text-soft-ink">{item.whyItMatters ?? 'Collection details to be confirmed by Casa dos Livros.'}</p>
          </div>
        </div>
      </section>
      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <MetadataTable rows={[
            ['Author', item.author],
            ['Publication year', item.publicationYear],
            ['Date', item.dateLabel],
            ['Language', item.language],
            ['Collection', item.collection],
            ['Call number', item.callNumber],
            ['Material type', item.materialType],
            ['Related room', item.relatedRoom],
            ['Rights', item.rights],
          ]} />
          <div className="mt-10 border border-line bg-parchment p-6">
            <h2 className="font-display text-4xl text-ink">Citation and download</h2>
            <p className="mt-3 leading-7 text-soft-ink">Citation, IIIF, downloadable metadata and rights statements are placeholders until verified catalogue records are supplied.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
