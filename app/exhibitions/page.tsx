import { SectionHeading } from '@/components/editorial/SectionHeading';
import { StatusBadge } from '@/components/editorial/StatusBadge';
import { officialPages } from '@/content/official';
import { pageMetadata } from '@/lib/seo';

const exhibitions = [
  'Mistérios em Exposição: a Dama do Crime nos Espólios da Casa dos Livros',
  'Desejos em papel: uma exposição documental',
  'A Camoniana da Biblioteca Vasco Graça Moura',
  'Verba Volant, Scripta Manent',
];

export const metadata = pageMetadata('Exhibitions', 'Bibliographic exhibition catalogues preserved from the official Casa dos Livros website.', '/exhibitions');

export default function ExhibitionsPage() {
  return (
    <main className="pt-20">
      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Exhibitions" title="Bibliographic exhibition memory." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {exhibitions.map((title) => (
              <article key={title} className="border border-line bg-parchment p-6">
                <StatusBadge status="Verified from official exhibition catalogues page" />
                <h2 className="mt-4 font-display text-4xl text-ink">{title}</h2>
              </article>
            ))}
          </div>
          <a className="btn-secondary mt-8" href={officialPages.exhibitionCatalogues} target="_blank" rel="noreferrer">Official exhibition catalogues</a>
        </div>
      </section>
    </main>
  );
}
