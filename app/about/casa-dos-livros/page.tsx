import { EditorialHero } from '@/components/editorial/EditorialHero';
import { SectionHeading } from '@/components/editorial/SectionHeading';
import { StatusBadge } from '@/components/editorial/StatusBadge';
import { officialInstitution, officialPages } from '@/content/official';
import { imageAlt, siteImages } from '@/lib/assets';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('About Casa dos Livros', 'Institutional presentation of Casa dos Livros based on the official website.', '/about/casa-dos-livros');

export default function AboutCasaPage() {
  return (
    <main>
      <EditorialHero eyebrow="Institutional presentation" title="Casa dos Livros" subtitle={officialInstitution.fullName} image={siteImages.memoryArchive} alt={imageAlt.memoryArchive} />
      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <StatusBadge status="Verified from official website" />
          <SectionHeading title="A specialised technical and cultural centre.">
            {officialInstitution.summary}
          </SectionHeading>
          <p className="mt-6 text-lg leading-8 text-soft-ink">{officialInstitution.origin}</p>
          <a className="btn-secondary mt-8" href={officialPages.presentation} target="_blank" rel="noreferrer">Official source</a>
        </div>
      </section>
    </main>
  );
}
