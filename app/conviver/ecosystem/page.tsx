import Link from 'next/link';
import { SectionHeading } from '@/components/editorial/SectionHeading';
import { ecosystemGroups } from '@/content/conviver';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('CONVIVER Ecosystem', 'Accessible ecosystem map connecting Casa dos Livros knowledge, digital experience, programme, passport, community and measurement.', '/conviver/ecosystem');

export default function EcosystemPage() {
  return (
    <main className="pt-20">
      <section className="section-pad bg-forest text-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <p className="eyebrow text-muted-gold">Ecosystem map</p>
          <h1 className="mt-4 font-display text-6xl leading-tight">Casa dos Livros at the centre.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-warm-white/78">This map is built with semantic links and a text alternative, not a canvas-only diagram.</p>
        </div>
      </section>
      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="border-4 border-forest bg-parchment p-8 text-center">
            <h2 className="font-display text-5xl text-forest">Casa dos Livros</h2>
            <p className="mt-3 text-soft-ink">Institutional knowledge, public programme and CONVIVER engagement layer.</p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3" aria-label="CONVIVER ecosystem branches">
            {ecosystemGroups.map((group) => (
              <section key={group.title} className="border border-line bg-parchment p-6">
                <h3 className="font-display text-3xl text-ink">{group.title}</h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map(([label, href]) => (
                    <li key={`${group.title}-${label}`}>
                      <Link className="text-forest underline" href={href}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-parchment">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <SectionHeading eyebrow="Text alternative" title="Ecosystem branches as a readable list.">
            {ecosystemGroups.map((group) => `${group.title}: ${group.items.map(([label]) => label).join(', ')}. `).join('')}
          </SectionHeading>
        </div>
      </section>
    </main>
  );
}
