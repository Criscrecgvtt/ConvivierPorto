import { SectionHeading } from '@/components/editorial/SectionHeading';
import { StatusBadge } from '@/components/editorial/StatusBadge';
import { missionPillars, officialPages } from '@/content/official';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Mission', 'Casa dos Livros mission translated into research, access, collaboration and welcome.', '/about/mission');

export default function MissionPage() {
  return (
    <main className="pt-20">
      <section className="section-pad bg-parchment">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <StatusBadge status="Casa dos Livros" />
          <SectionHeading title="Mission of Casa dos Livros">
            Preserved as four readable pillars from the official mission text.
          </SectionHeading>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {missionPillars.map((pillar) => (
              <article key={pillar.title} className="border border-line bg-warm-white p-6">
                <h2 className="font-display text-4xl text-ink">{pillar.title}</h2>
                <p className="mt-4 leading-7 text-soft-ink">{pillar.text}</p>
              </article>
            ))}
          </div>
          <a className="btn-secondary mt-8" href="/programme">See the programme</a>
        </div>
      </section>
    </main>
  );
}
