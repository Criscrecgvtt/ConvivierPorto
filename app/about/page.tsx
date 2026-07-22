import Link from 'next/link';
import { EditorialHero } from '@/components/editorial/EditorialHero';
import { SectionHeading } from '@/components/editorial/SectionHeading';
import { officialInstitution } from '@/content/official';
import { imageAlt, siteImages } from '@/lib/assets';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Discover', 'Discover Casa dos Livros, its mission, team and Palacete Burmester.', '/about');

export default function AboutPage() {
  return (
    <main>
      <EditorialHero eyebrow="Discover" title="Casa dos Livros first." subtitle={officialInstitution.fullName} image={siteImages.memoryArchive} alt={imageAlt.memoryArchive} />
      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Institutional information" title="Explore the official foundation before the experience layer." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              ['About Casa dos Livros', '/about/casa-dos-livros', officialInstitution.summary],
              ['Mission', '/about/mission', 'The complete mission translated into four official pillars.'],
              ['Palacete Burmester', '/about/palacete-burmester', 'Building history and architectural context.'],
              ['Team', '/about/team', 'Official institutional team and CONVIVER project context.'],
            ].map(([title, href, text]) => (
              <Link key={href} href={href} className="border border-line bg-parchment p-6">
                <h2 className="font-display text-4xl text-ink">{title}</h2>
                <p className="mt-3 leading-7 text-soft-ink">{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
