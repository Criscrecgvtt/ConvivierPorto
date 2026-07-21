import Link from 'next/link';
import { SectionHeading } from '@/components/editorial/SectionHeading';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Programme', 'Events, exhibitions and publications for Casa dos Livros.', '/programme');

export default function ProgrammePage() {
  return (
    <main className="pt-20">
      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Programme" title="Public cultural activity and publications." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ['Upcoming events', '/events'],
              ['Exhibitions', '/exhibitions'],
              ['Publications', '/publications'],
            ].map(([title, href]) => (
              <Link key={href} href={href} className="border border-line bg-parchment p-8 font-display text-4xl text-ink">{title}</Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
