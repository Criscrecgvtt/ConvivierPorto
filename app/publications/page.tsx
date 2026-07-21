import Image from 'next/image';
import { MetadataTable } from '@/components/editorial/MetadataTable';
import { SectionHeading } from '@/components/editorial/SectionHeading';
import { StatusBadge } from '@/components/editorial/StatusBadge';
import { officialPublication } from '@/content/official';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Publications', 'Casa dos Livros publications, purchase information and bibliographic details.', '/publications');

export default function PublicationsPage() {
  return (
    <main className="pt-20">
      <section className="section-pad bg-parchment">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
          <div className="relative min-h-[460px] border border-line">
            <Image src={officialPublication.image} alt="Casa dos Livros publication feature image" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          </div>
          <div>
            <StatusBadge status="Verified from official website excerpt" />
            <SectionHeading title={officialPublication.title}>{officialPublication.details}</SectionHeading>
            <div className="mt-8">
              <MetadataTable rows={[
                ['ISBN', officialPublication.isbn],
                ['Price', officialPublication.price],
                ['Availability', officialPublication.availability],
                ['Purchase', officialPublication.purchase],
              ]} />
            </div>
            <a className="btn-secondary mt-8" href={officialPublication.sourceUrl} target="_blank" rel="noreferrer">Official publications page</a>
          </div>
        </div>
      </section>
    </main>
  );
}
