import Image from 'next/image';
import Link from 'next/link';
import { EditorialHero } from '@/components/editorial/EditorialHero';
import { FinalInvitation } from '@/components/editorial/FinalInvitation';
import { SectionHeading } from '@/components/editorial/SectionHeading';
import { StatusBadge } from '@/components/editorial/StatusBadge';
import { events } from '@/content/events';
import { podcastEpisodes, podcastName } from '@/content/podcast';
import { rewardTiers } from '@/content/passport';
import { bookItems } from '@/content/books';
import { imageAlt, siteImages } from '@/lib/assets';
import { formatEventDate } from '@/lib/formatters';

export default function Home() {
  const featured = bookItems[0];
  const nextEvent = events[0];
  const episode = podcastEpisodes[0];

  return (
    <main>
      <EditorialHero
        eyebrow="Palacete Burmester · Porto"
        title="CONVIVER"
        subtitle="Discover Casa dos Livros through rooms, books, voices and stories."
        image={siteImages.heroDoorway}
        alt={imageAlt.heroDoorway}
      >
        <p className="font-display text-4xl text-warm-white">A house where books live.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/explore" className="btn-primary bg-warm-white text-forest hover:bg-parchment">Enter the house</Link>
          <Link href="/passport" className="btn-secondary border-warm-white/40 text-warm-white hover:bg-warm-white/10">Start your passport</Link>
        </div>
        <p className="mt-10 text-sm uppercase tracking-[0.22em] text-warm-white/70">Scroll to explore</p>
      </EditorialHero>

      <section className="section-pad bg-warm-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
          <p className="eyebrow">Stay · Read · Breathe</p>
          <div>
            <h2 className="font-display text-5xl leading-tight text-ink md:text-7xl">
              The challenge is not preserving heritage. The challenge is making people discover it.
            </h2>
            <p className="mt-6 text-lg leading-8 text-soft-ink">
              CONVIVER is a Digital Humanities communication ecosystem for Casa dos Livros: a way to connect a historic house, its books and rooms, public programming, podcast stories, the Porto Cultural Passport and measurable cultural engagement.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-parchment">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Three pathways" title="Choose how to enter the house.">
            Each pathway uses the real project photographs and a grounded content model, avoiding fake certainty where catalogue data still needs institutional verification.
          </SectionHeading>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              ['Explore the House', 'Rooms, architecture and objects.', '/explore', siteImages.houseHall, imageAlt.houseHall],
              ['Discover the Collections', 'Books, dictionaries and cultural memory.', '/collections', siteImages.collectionsShelves, imageAlt.collectionsShelves],
              ['Collect the Passport', 'Follow a cultural route through Porto.', '/passport', siteImages.gardenView, imageAlt.gardenView],
            ].map(([title, copy, href, image, alt]) => (
              <Link key={title as string} href={href as string} className="group block overflow-hidden border border-line bg-warm-white">
                <div className="relative h-80">
                  <Image src={image} alt={alt as string} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-4xl text-ink">{title as string}</h3>
                  <p className="mt-3 leading-7 text-soft-ink">{copy as string}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-warm-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-12">
          <div className="relative min-h-[520px] border border-line">
            <Image src={featured.image} alt={`Image for ${featured.title}`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="self-center">
            <p className="eyebrow">Featured book / object</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-ink">{featured.title}</h2>
            <div className="mt-5"><StatusBadge status="Metadata pending verification" /></div>
            <p className="mt-6 text-lg leading-8 text-soft-ink">{featured.shortDescription}</p>
            <p className="mt-4 leading-7 text-soft-ink">{featured.whyItMatters}</p>
            {/* Verified catalogue metadata from Casa dos Livros should replace this pending record. */}
            <Link className="btn-secondary mt-7" href={`/collections/${featured.slug}`}>View cultural record</Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-forest text-warm-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <p className="eyebrow text-muted-gold">Upcoming event</p>
            <h2 className="mt-4 font-display text-5xl leading-tight">{nextEvent.title}</h2>
            <p className="mt-5 text-lg leading-8 text-warm-white/78">{nextEvent.shortDescription}</p>
          </div>
          <div className="border border-warm-white/20 bg-forest-deep p-6">
            <dl className="grid gap-4 text-sm">
              <div><dt className="eyebrow text-muted-gold">Date</dt><dd className="mt-1">{formatEventDate(nextEvent.date)}</dd></div>
              <div><dt className="eyebrow text-muted-gold">Time</dt><dd className="mt-1">{nextEvent.time}</dd></div>
              <div><dt className="eyebrow text-muted-gold">Language</dt><dd className="mt-1">{nextEvent.language}</dd></div>
              <div><dt className="eyebrow text-muted-gold">Location</dt><dd className="mt-1">{nextEvent.location}</dd></div>
              <div><dt className="eyebrow text-muted-gold">Status</dt><dd className="mt-1">Coming soon · capacity {nextEvent.capacity}</dd></div>
            </dl>
            <Link className="btn-primary mt-6 bg-warm-white text-forest hover:bg-parchment" href={`/events/${nextEvent.slug}`}>Event details</Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-parchment">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
          <div className="relative min-h-[420px] border border-line">
            <Image src={episode.coverImage} alt={`Cover image for ${episode.title}`} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          </div>
          <div className="self-center">
            <p className="eyebrow">{podcastName}</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-ink">{episode.title}</h2>
            <p className="mt-5 text-lg leading-8 text-soft-ink">{episode.description}</p>
            <p className="mt-4 font-semibold text-terracotta">Pilot episode in preparation · no audio published yet</p>
            <Link className="btn-secondary mt-7" href={`/podcast/${episode.slug}`}>Transcript and details</Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Passport teaser" title="A cultural route through Porto.">
            Pick up a printed passport, collect physical stamps, scan QR codes and unlock digital stories. Rewards below are a proposed pilot model.
          </SectionHeading>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {rewardTiers.map((tier) => (
              <div key={tier.stamps} className="border border-line bg-parchment p-5">
                <p className="font-display text-5xl text-forest">{tier.stamps}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-soft-ink">stamps</p>
                <p className="mt-3 font-semibold text-ink">{tier.reward}</p>
              </div>
            ))}
          </div>
          <Link className="btn-primary mt-8" href="/passport">Start the route</Link>
        </div>
      </section>

      <FinalInvitation />
    </main>
  );
}
