import { SectionHeading } from '@/components/editorial/SectionHeading';
import { researchTools } from '@/content/official';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Catalogues', 'Library catalogues, archival inventories, thematic catalogues and exhibition catalogues.', '/catalogues');

export default function CataloguesPage() {
  return (
    <main className="pt-20">
      <section className="section-pad bg-parchment">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Catalogues" title="Official access points." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {researchTools.map((tool) => (
              <a key={tool.title} href={tool.href} target="_blank" rel="noreferrer" className="border border-line bg-warm-white p-6">
                <h2 className="font-display text-3xl text-ink">{tool.title}</h2>
                <p className="mt-3 text-sm leading-6 text-soft-ink">{tool.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
