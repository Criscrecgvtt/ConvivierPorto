import { EditorialHero } from '@/components/editorial/EditorialHero';
import { ImageStory } from '@/components/editorial/ImageStory';
import { SectionHeading } from '@/components/editorial/SectionHeading';
import { imageAlt, siteImages } from '@/lib/assets';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('About', 'The purpose, methodology and Digital Humanities approach behind CONVIVER.', '/about');

export default function AboutPage() {
  return (
    <main>
      <EditorialHero eyebrow="About CONVIVER" title="Heritage made discoverable." subtitle="CONVIVER connects Casa dos Livros, Palacete Burmester, public programming and digital engagement without pretending uncertain content is official." image={siteImages.memoryArchive} alt={imageAlt.memoryArchive} />
      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <SectionHeading eyebrow="Purpose" title="A Digital Humanities communication ecosystem.">
            Casa dos Livros is treated as a living cultural experience: rooms, books, objects, stories, visits, podcast episodes, events and the Porto Cultural Passport all work together as one public-facing system.
          </SectionHeading>
          <div className="mt-10 grid gap-6 text-lg leading-8 text-soft-ink">
            <p>The methodology moves from cultural challenge to audience experience: preserve with care, communicate with honesty, invite participation, and measure engagement without reducing heritage to marketing metrics.</p>
            <p>Project team, academic context and institutional credits should be inserted after confirmation by the relevant staff and partners.</p>
          </div>
        </div>
      </section>
      <ImageStory image={siteImages.ornateCeiling} alt={imageAlt.ornateCeiling} label="Approach" title="Modern, but not technological for its own sake.">
        The interface uses editorial pacing, responsive photography and clear metadata statuses so visitors can understand what is known, what is proposed and what remains pending verification.
      </ImageStory>
    </main>
  );
}
