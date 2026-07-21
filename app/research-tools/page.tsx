import { SectionHeading } from '@/components/editorial/SectionHeading';
import { StatusBadge } from '@/components/editorial/StatusBadge';
import { officialContacts, officialPages, researchTools } from '@/content/official';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Research Tools', 'Official Casa dos Livros catalogues, inventories and digital research tools.', '/research-tools');

export default function ResearchToolsPage() {
  return (
    <main className="pt-20">
      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Research tools" title="Access to collections and research systems.">
            These links preserve the official research pathways from Casa dos Livros.
          </SectionHeading>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {researchTools.map((tool) => (
              <a key={tool.title} href={tool.href} target="_blank" rel="noreferrer" className="border border-line bg-parchment p-6">
                <StatusBadge status={tool.status} />
                <h2 className="mt-4 font-display text-4xl text-ink">{tool.title}</h2>
                <p className="mt-3 leading-7 text-soft-ink">{tool.description}</p>
              </a>
            ))}
          </div>
          <p className="mt-8 text-soft-ink">Research assistance: {officialContacts.email}</p>
          <a className="btn-secondary mt-6" href={officialPages.researchTools} target="_blank" rel="noreferrer">Official research-tools page</a>
        </div>
      </section>
    </main>
  );
}
