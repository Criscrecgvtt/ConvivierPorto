import Image from 'next/image';
import Link from 'next/link';
import { EditorialHero } from '@/components/editorial/EditorialHero';
import { SectionHeading } from '@/components/editorial/SectionHeading';
import { rooms } from '@/content/rooms';
import { imageAlt, siteImages } from '@/lib/assets';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Explore the House', 'A guided editorial journey through Casa dos Livros rooms, objects and memories.', '/explore');

export default function ExplorePage() {
  return (
    <main>
      <EditorialHero eyebrow="Explore the House" title="A guided journey through rooms." subtitle="A polished 2D editorial tour is used here for stability, clarity and accessibility." image={siteImages.houseHall} alt={imageAlt.houseHall} />
      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Room chapters" title="Move slowly from threshold to garden.">
            Each chapter connects atmosphere, associated objects and clearly labelled pending facts.
          </SectionHeading>
          <div className="mt-12 grid gap-8">
            {rooms.map((room, index) => (
              <article key={room.slug} className="grid overflow-hidden border border-line bg-parchment lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[340px]">
                  <Image src={room.image} alt={`Photograph representing ${room.title}`} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
                </div>
                <div className="p-8 lg:p-12">
                  <p className="eyebrow">Chapter {index + 1}</p>
                  <h2 className="mt-4 font-display text-5xl text-ink">{room.title}</h2>
                  <p className="mt-5 text-lg leading-8 text-soft-ink">{room.description}</p>
                  <p className="mt-5 font-semibold text-terracotta">{room.fact}</p>
                  <p className="mt-6 text-sm uppercase tracking-[0.18em] text-soft-ink">Associated objects</p>
                  <ul className="mt-2 text-soft-ink">
                    {room.associatedObjects.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <Link className="btn-secondary mt-7" href="/collections">Continue the tour</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
