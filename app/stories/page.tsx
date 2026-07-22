import Link from 'next/link';
import { SectionHeading } from '@/components/editorial/SectionHeading';
import { buildingHistory, officialCollections } from '@/content/official';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Stories', 'Layered Casa dos Livros stories connecting official content to the CONVIVER experience.', '/stories');

export default function StoriesPage() {
  return (
    <main className="pt-20">
      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Stories" title="Institutional information at different depths.">
            Short introductions lead to visual stories, collection paths, podcast episodes and research tools.
          </SectionHeading>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <Link className="border border-line bg-parchment p-6" href="/about/palacete-burmester">
              <h2 className="font-display text-4xl text-ink">{buildingHistory.title}</h2>
              <p className="mt-3 leading-7 text-soft-ink">{buildingHistory.summary}</p>
            </Link>
            {officialCollections.slice(0, 2).map((collection) => (
              <Link key={collection.slug} className="border border-line bg-parchment p-6" href={`/collections/${collection.slug}`}>
                <h2 className="font-display text-4xl text-ink">{collection.name}</h2>
                <p className="mt-3 leading-7 text-soft-ink">{collection.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
