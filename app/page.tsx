import Image from 'next/image';
import Link from 'next/link';
import { EditorialHero } from '@/components/editorial/EditorialHero';
import { FinalInvitation } from '@/components/editorial/FinalInvitation';
import { SectionHeading } from '@/components/editorial/SectionHeading';
import { StatusBadge } from '@/components/editorial/StatusBadge';
import { officialCollections } from '@/content/official';
import { events } from '@/content/events';
import { podcastEpisodes, podcastName } from '@/content/podcast';
import { passportLocations } from '@/content/passport';
import { buildingHistory, missionPillars, officialContacts, officialInstitution, officialPublication, researchTools } from '@/content/official';
import { imageAlt, siteImages } from '@/lib/assets';
import { formatEventDate } from '@/lib/formatters';

export default function Home() {
  const nextEvent = events[0];
  const episode = podcastEpisodes[0];

  return (
    <main>
      <EditorialHero
        eyebrow="Centre for Culture Studies in Portugal · University of Porto"
        title="Casa dos Livros"
        subtitle="Books, archives, authors and Portuguese culture live here."
        image={siteImages.heroDoorway}
        alt={imageAlt.heroDoorway}
      >
        <p className="font-display text-4xl text-warm-white">CONVIVER · Stay · Read · Breathe.</p>
        <p className="mt-3 max-w-2xl text-warm-white/78">A Digital Humanities experience developed to help new audiences discover, explore and participate in Casa dos Livros.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/about/casa-dos-livros" className="btn-primary bg-warm-white text-forest hover:bg-parchment">Discover Casa dos Livros</Link>
          <Link href="/events" className="btn-secondary border-warm-white/40 text-warm-white hover:bg-warm-white/10">View upcoming events</Link>
          <Link href="/explore" className="btn-secondary border-warm-white/40 text-warm-white hover:bg-warm-white/10">Explore with CONVIVER</Link>
        </div>
      </EditorialHero>

      <section className="section-pad bg-warm-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
          <div>
            <p className="eyebrow">Institutional identity</p>
            <StatusBadge status="Verified from official website" />
          </div>
          <div>
            <h2 className="font-display text-5xl leading-tight text-ink md:text-7xl">{officialInstitution.fullName}</h2>
            <p className="mt-6 text-lg leading-8 text-soft-ink">{officialInstitution.summary}</p>
            <p className="mt-4 text-lg leading-8 text-soft-ink">{officialInstitution.origin}</p>
            <Link className="btn-secondary mt-7" href="/about/casa-dos-livros">Read the institutional presentation</Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-parchment">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Mission" title="Four official mission commitments.">
            The CONVIVER layer supports the mission; it does not replace it.
          </SectionHeading>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {missionPillars.map((pillar) => (
              <article key={pillar.title} className="border border-line bg-warm-white p-6">
                <h3 className="font-display text-3xl text-ink">{pillar.title}</h3>
                <p className="mt-3 leading-7 text-soft-ink">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-warm-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-12">
          <div>
            <p className="eyebrow">Current events and exhibitions</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-ink">{nextEvent.title}</h2>
            <p className="mt-4 text-soft-ink">{formatEventDate(nextEvent.date)} · {nextEvent.language} · {nextEvent.location}</p>
            <p className="mt-5 text-lg leading-8 text-soft-ink">{nextEvent.shortDescription}</p>
            <StatusBadge status="Proposed CONVIVER feature" />
            <div className="mt-7 flex flex-wrap gap-3">
              <Link className="btn-primary" href={`/events/${nextEvent.slug}`}>Event details</Link>
              <Link className="btn-secondary" href="/exhibitions">Exhibition catalogues</Link>
            </div>
          </div>
          <div className="relative min-h-[420px] border border-line">
            <Image src={siteImages.readingRoom} alt={imageAlt.readingRoom} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="section-pad bg-forest text-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Explore the collections" title="Official acervos remain central.">
            <span className="text-warm-white/78">The redesign preserves Casa dos Livros collections instead of reducing them to decorative cards.</span>
          </SectionHeading>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {officialCollections.slice(0, 8).map((collection) => (
              <Link key={collection.slug} href={`/collections/${collection.slug}`} className="border border-warm-white/20 bg-forest-deep p-5">
                <p className="eyebrow text-muted-gold">{collection.role ?? 'Official collection'}</p>
                <h3 className="mt-3 font-display text-3xl">{collection.name}</h3>
                <p className="mt-3 text-sm leading-6 text-warm-white/72">{collection.processingStatus}</p>
              </Link>
            ))}
          </div>
          <Link className="btn-primary mt-8 bg-warm-white text-forest hover:bg-parchment" href="/collections">View all collections</Link>
        </div>
      </section>

      <section className="section-pad bg-parchment">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Access research tools" title="Catalogues, inventories and digital guides.">
            Researchers need direct access to official systems, not hidden links.
          </SectionHeading>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {researchTools.map((tool) => (
              <a key={tool.title} href={tool.href} className="border border-line bg-warm-white p-6" target="_blank" rel="noreferrer" aria-label={`${tool.title} opens on official Casa dos Livros website`}>
                <StatusBadge status={tool.status} />
                <h3 className="mt-4 font-display text-3xl text-ink">{tool.title}</h3>
                <p className="mt-3 leading-7 text-soft-ink">{tool.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-warm-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div className="relative min-h-[460px] border border-line">
            <Image src={siteImages.houseHall} alt={imageAlt.houseHall} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="self-center">
            <p className="eyebrow">Discover Palacete Burmester</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-ink">{buildingHistory.title}</h2>
            <p className="mt-5 text-lg leading-8 text-soft-ink">{buildingHistory.summary}</p>
            <p className="mt-4 leading-7 text-soft-ink">{buildingHistory.note}</p>
            <Link className="btn-secondary mt-7" href="/about/palacete-burmester">Read building history</Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-parchment">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
          <div className="relative min-h-[400px] border border-line">
            <Image src={officialPublication.image} alt="Bookshelves representing Casa dos Livros publications" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          </div>
          <div className="self-center">
            <p className="eyebrow">Featured publication</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-ink">{officialPublication.title}</h2>
            <p className="mt-5 leading-7 text-soft-ink">{officialPublication.details}</p>
            <p className="mt-3 font-semibold text-terracotta">{officialPublication.price} · {officialPublication.availability}</p>
            <Link className="btn-secondary mt-7" href="/publications">Publications</Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-warm-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:px-8 lg:grid-cols-3 lg:px-12">
          <article className="border border-line bg-parchment p-6 lg:col-span-2">
            <p className="eyebrow">CONVIVER digital experience</p>
            <h2 className="mt-4 font-display text-5xl text-ink">Stay · Read · Breathe.</h2>
            <p className="mt-5 text-lg leading-8 text-soft-ink">CONVIVER adds house exploration, stories, podcast concepts and the Porto Cultural Passport while leading visitors back to official Casa dos Livros content.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link className="btn-primary" href="/explore">Explore the House</Link>
              <Link className="btn-secondary" href="/podcast">{podcastName}</Link>
            </div>
          </article>
          <article className="border border-line bg-parchment p-6">
            <p className="eyebrow">Cultural Passport</p>
            <h3 className="mt-4 font-display text-4xl text-ink">Anchor: {passportLocations[0].name}</h3>
            <p className="mt-4 leading-7 text-soft-ink">A proposed route model. Partner participation and rewards require confirmation.</p>
            <Link className="btn-secondary mt-6" href="/passport">Open passport pilot</Link>
          </article>
        </div>
      </section>

      <section className="section-pad bg-forest text-warm-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="eyebrow text-muted-gold">Visit information</p>
            <h2 className="mt-4 font-display text-5xl">{officialContacts.address}</h2>
          </div>
          <dl className="grid gap-4">
            <div><dt className="eyebrow text-muted-gold">Building hours</dt><dd>{officialContacts.buildingHours}</dd></div>
            <div><dt className="eyebrow text-muted-gold">Reading room</dt><dd>{officialContacts.readingRoomHours}</dd></div>
            <div><dt className="eyebrow text-muted-gold">Contact</dt><dd>{officialContacts.telephone} · {officialContacts.email}</dd></div>
          </dl>
        </div>
      </section>

      <section className="section-pad bg-parchment">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <p className="eyebrow">Newsletter</p>
          <h2 className="mt-4 font-display text-5xl text-ink">Stay connected to Casa dos Livros.</h2>
          <p className="mx-auto mt-5 text-lg leading-8 text-soft-ink">Newsletter subscription remains connected to the official Casa dos Livros workflow.</p>
          <a className="btn-primary mt-7" href="https://wp.letras.up.pt/casadoslivros/pt/newsletter/" target="_blank" rel="noreferrer">Subscribe on official site</a>
        </div>
      </section>

      <FinalInvitation />
    </main>
  );
}
