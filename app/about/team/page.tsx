import { SectionHeading } from '@/components/editorial/SectionHeading';
import { StatusBadge } from '@/components/editorial/StatusBadge';
import { officialTeam } from '@/content/official';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Team', 'Official Casa dos Livros team and CONVIVER project-team context.', '/about/team');

export default function TeamPage() {
  return (
    <main className="pt-20">
      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Team" title="Institutional team remains official." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {officialTeam.map((person) => (
              <article key={person.name} className="border border-line bg-parchment p-6">
                <StatusBadge status="Casa dos Livros team" />
                <h2 className="mt-4 font-display text-4xl text-ink">{person.name}</h2>
                <p className="mt-2 text-soft-ink">{person.role}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 border border-line bg-parchment p-6">
            <StatusBadge status="CONVIVER project team" />
            <h2 className="mt-4 font-display text-4xl text-ink">CONVIVER student project team</h2>
            <p className="mt-3 text-soft-ink">Names, roles and academic context should be inserted after institutional review.</p>
          </div>
          <a className="btn-secondary mt-8" href="/contact">Contact the team</a>
        </div>
      </section>
    </main>
  );
}
