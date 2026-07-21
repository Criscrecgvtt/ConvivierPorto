import { SectionHeading } from '@/components/editorial/SectionHeading';
import { audienceJourneys, kpiGroups, planningTargets } from '@/content/conviver';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Project Strategy', 'Internal BIP prototype strategy page for CONVIVER planning assumptions.', '/project/strategy');

export default function StrategyPage() {
  return (
    <main className="pt-20">
      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Internal prototype strategy" title="Two-solution model.">
            Official Casa dos Livros information remains the institutional foundation. CONVIVER adds discovery, recurring programme, passport journeys and measurement.
          </SectionHeading>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="border border-line bg-parchment p-6"><h2 className="font-display text-4xl">Problem</h2><p className="mt-3 text-soft-ink">Cultural value exists, but discovery, repeat engagement and audience pathways need clearer design.</p></article>
            <article className="border border-line bg-parchment p-6"><h2 className="font-display text-4xl">Solution</h2><p className="mt-3 text-soft-ink">Institutional redesign plus CONVIVER engagement ecosystem.</p></article>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {audienceJourneys.map((journey) => (
              <article key={journey.slug} className="border border-line bg-parchment p-6">
                <h2 className="font-display text-3xl text-ink">{journey.title}</h2>
                <p className="mt-3 text-soft-ink">{journey.need}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.16em] text-terracotta">{journey.priority.join(' · ')}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {kpiGroups.map(([group, items]) => (
              <article key={group} className="border border-line bg-parchment p-6">
                <h2 className="font-display text-3xl text-ink">{group}</h2>
                <ul className="mt-3 space-y-1 text-soft-ink">{items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="mt-10 border border-line bg-parchment p-6">
            <h2 className="font-display text-4xl text-ink">Working targets - pending baseline validation</h2>
            {planningTargets.map(([period, targets]) => <div key={period} className="mt-5"><h3 className="font-semibold text-ink">{period}</h3><p className="mt-2 text-soft-ink">{targets.join(' · ')}</p></div>)}
          </div>
        </div>
      </section>
    </main>
  );
}
