import Image from 'next/image';
import Link from 'next/link';
import { EditorialHero } from '@/components/editorial/EditorialHero';
import { FinalInvitation } from '@/components/editorial/FinalInvitation';
import { SectionHeading } from '@/components/editorial/SectionHeading';
import { StatusBadge } from '@/components/editorial/StatusBadge';
import { audienceJourneys, experienceSpaces } from '@/content/conviver';
import { events } from '@/content/events';
import { passportLocations } from '@/content/passport';
import { podcastEpisodes, podcastName } from '@/content/podcast';
import { buildingHistory, missionPillars, officialCollections, officialContacts, officialInstitution, officialPublication, researchTools } from '@/content/official';
import { imageAlt, siteImages } from '@/lib/assets';
import { formatEventDate } from '@/lib/formatters';

const activityHighlights = [
  'Literary conversations',
  'Reading clubs',
  'Creative writing workshops',
  'Exhibitions',
  'Academic meetings',
  'Digital humanities labs',
  'Cultural walks',
  'International student gatherings',
];

export default function Home() {
  const nextEvent = events[0];
  const episode = podcastEpisodes[0];

  return (
    <main>
      <EditorialHero
        eyebrow="Centre for Culture Studies in Portugal - University of Porto"
        title="Casa dos Livros"
        subtitle="A meeting place for literature, humanities, culture and new forms of coexistence in Porto."
        image={siteImages.readingRoom}
        alt={imageAlt.readingRoom}
      >
        <p className="font-display text-4xl text-warm-white">CONVIVER - Stay. Read. Breathe.</p>
        <p className="mt-3 max-w-2xl text-warm-white/82">Bookshelves, archives, rooms and gardens become a welcoming route for students, researchers, neighbours and visitors to Porto.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/about/casa-dos-livros" className="btn-primary bg-warm-white text-forest hover:bg-parchment">Discover the house</Link>
          <Link href="/programme" className="btn-secondary border-warm-white/40 text-warm-white hover:bg-warm-white/10">Explore activities</Link>
          <Link href="/explore" className="btn-secondary border-warm-white/40 text-warm-white hover:bg-warm-white/10">Explore with CONVIVER</Link>
        </div>
      </EditorialHero>

      <section className="section-pad bg-warm-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
          <div>
            <p className="eyebrow">Institutional identity</p>
            <StatusBadge status="Casa dos Livros" />
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
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
          <div className="self-center">
            <p className="eyebrow">About the House</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-ink">A literary home inside FLUP.</h2>
            <p className="mt-5 text-lg leading-8 text-soft-ink">Casa dos Livros connects the university, literary heritage and public culture through collections, research tools, guided interpretation and a calm programme of encounters.</p>
            <p className="mt-4 leading-7 text-soft-ink">The CONVIVER layer translates that identity into clearer journeys: discover the building, meet the collections, join activities and continue into Porto through partner cultural spaces.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ['FLUP', 'Academic home'],
                ['2017', 'CECUP regulation'],
                ['Campo Alegre', 'Porto location'],
              ].map(([value, label]) => (
                <div key={value} className="border border-line bg-warm-white p-4">
                  <p className="font-display text-4xl text-forest">{value}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-soft-ink">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[460px] border border-line">
            <Image src={siteImages.collectionsShelves} alt={imageAlt.collectionsShelves} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Mission" title="Four mission commitments.">
            The CONVIVER layer supports the institution by making research, access and public participation easier to understand.
          </SectionHeading>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {missionPillars.map((pillar) => (
              <article key={pillar.title} className="border border-line bg-parchment p-6">
                <h3 className="font-display text-3xl text-ink">{pillar.title}</h3>
                <p className="mt-3 leading-7 text-soft-ink">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-parchment">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div className="relative min-h-[460px] border border-line">
            <Image src={siteImages.houseHall} alt={imageAlt.houseHall} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="self-center">
            <p className="eyebrow">History of the space</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-ink">{buildingHistory.title}</h2>
            <p className="mt-5 text-lg leading-8 text-soft-ink">{buildingHistory.summary}</p>
            <p className="mt-4 leading-7 text-soft-ink">{buildingHistory.note}</p>
            <Link className="btn-secondary mt-7" href="/about/palacete-burmester">Read building history</Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-forest text-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="CONVIVER project" title="A cultural experience layer for the house.">
            <span className="text-warm-white/78">CONVIVER adds an immersive route, podcast ideas, city partners and a cultural passport while keeping Casa dos Livros at the centre.</span>
          </SectionHeading>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ['Explore', 'A room-by-room digital visit with images, objects and short interpretive stories.', '/explore-the-house'],
              ['Listen', `${podcastName} connects books, archives, sound memory and conversations.`, '/podcast'],
              ['Collect', 'The Porto Cultural Passport links Casa dos Livros with bookshops, venues and student routes.', '/passport'],
            ].map(([title, copy, href]) => (
              <Link key={title} href={href} className="border border-warm-white/20 bg-forest-deep p-6">
                <h3 className="font-display text-4xl">{title}</h3>
                <p className="mt-4 leading-7 text-warm-white/76">{copy}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Typical activities" title="A programme that can grow through the year.">
            Activities include literary meetings, workshops, exhibitions and cultural conversations. Dates and formats may vary throughout the academic year.
          </SectionHeading>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {activityHighlights.map((activity) => (
              <div key={activity} className="border border-line bg-parchment p-5">
                <p className="font-semibold text-forest">{activity}</p>
                <p className="mt-2 text-sm leading-6 text-soft-ink">Designed for a quiet, literary audience and linked back to the house, collections or city route.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-parchment">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-12">
          <div>
            <p className="eyebrow">Programme highlights</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-ink">{nextEvent.title}</h2>
            <p className="mt-4 text-soft-ink">{nextEvent.date ? formatEventDate(nextEvent.date) : 'Dates announced soon'} - {nextEvent.language} - {nextEvent.location}</p>
            <p className="mt-5 text-lg leading-8 text-soft-ink">{nextEvent.shortDescription}</p>
            <StatusBadge status="Subject to programme availability" />
            <div className="mt-7 flex flex-wrap gap-3">
              <Link className="btn-primary" href={`/events/${nextEvent.slug}`}>Event details</Link>
              <Link className="btn-secondary" href="/programme">Explore programme</Link>
            </div>
          </div>
          <div className="relative min-h-[420px] border border-line">
            <Image src={siteImages.memoryArchive} alt={imageAlt.memoryArchive} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="section-pad bg-forest text-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Explore the collections" title="Official collections remain central.">
            <span className="text-warm-white/78">Books, manuscripts, objects and archives are presented as living cultural material rather than decorative catalogue entries.</span>
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
          <SectionHeading eyebrow="Spaces" title="Rooms with clear uses, not empty promises.">
            Each space is presented as a practical visitor experience, from reading and research to listening, stamping and seasonal gatherings.
          </SectionHeading>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {experienceSpaces.slice(0, 6).map((space) => (
              <article key={space.slug} className="border border-line bg-warm-white p-6">
                <h3 className="font-display text-3xl text-ink">{space.title}</h3>
                <p className="mt-3 leading-7 text-soft-ink">{space.purpose}</p>
                <p className="mt-4 text-sm uppercase tracking-[0.14em] text-terracotta">{space.activities.join(' - ')}</p>
              </article>
            ))}
          </div>
          <Link className="btn-secondary mt-8" href="/conviver/spaces">Explore all spaces</Link>
        </div>
      </section>

      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Access research tools" title="Catalogues, inventories and digital guides.">
            Researchers need direct access to official systems, not hidden links.
          </SectionHeading>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {researchTools.map((tool) => (
              <a key={tool.title} href={tool.href} className="border border-line bg-parchment p-6" target="_blank" rel="noopener noreferrer" aria-label={`${tool.title} opens on Casa dos Livros`}>
                <StatusBadge status={tool.status} />
                <h3 className="mt-4 font-display text-3xl text-ink">{tool.title}</h3>
                <p className="mt-3 leading-7 text-soft-ink">{tool.description}</p>
              </a>
            ))}
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
            <p className="mt-3 font-semibold text-terracotta">{officialPublication.price} - {officialPublication.availability}</p>
            <Link className="btn-secondary mt-7" href="/publications">Publications</Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Students and visitors" title="Choose the route that fits your visit." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {audienceJourneys.slice(0, 5).map((journey) => (
              <article key={journey.slug} className="border border-line bg-parchment p-6">
                <h3 className="font-display text-3xl text-ink">{journey.title}</h3>
                <p className="mt-3 leading-7 text-soft-ink">{journey.need}</p>
                <p className="mt-4 text-sm font-semibold text-forest">{journey.priority.join(' - ')}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-parchment">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:px-8 lg:grid-cols-3 lg:px-12">
          <article className="border border-line bg-warm-white p-6 lg:col-span-2">
            <p className="eyebrow">Podcast and story layer</p>
            <h2 className="mt-4 font-display text-5xl text-ink">{episode.title}</h2>
            <p className="mt-5 text-lg leading-8 text-soft-ink">{episode.description}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link className="btn-primary" href="/podcast">Open podcast</Link>
              <Link className="btn-secondary" href="/stories">Read stories</Link>
            </div>
          </article>
          <article className="border border-line bg-warm-white p-6">
            <p className="eyebrow">Cultural Passport</p>
            <h3 className="mt-4 font-display text-4xl text-ink">Anchor: {passportLocations[0].name}</h3>
            <p className="mt-4 leading-7 text-soft-ink">A city route that turns bookshops, cultural venues and Casa dos Livros into a collectable literary journey.</p>
            <Link className="btn-secondary mt-6" href="/passport">Open passport route</Link>
          </article>
        </div>
      </section>

      <section className="section-pad bg-forest text-warm-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="eyebrow text-muted-gold">Location and contact</p>
            <h2 className="mt-4 font-display text-5xl">{officialContacts.address}</h2>
          </div>
          <dl className="grid gap-4">
            <div><dt className="eyebrow text-muted-gold">Building hours</dt><dd>{officialContacts.buildingHours}</dd></div>
            <div><dt className="eyebrow text-muted-gold">Reading room</dt><dd>{officialContacts.readingRoomHours}</dd></div>
            <div><dt className="eyebrow text-muted-gold">Contact</dt><dd>{officialContacts.telephone} - {officialContacts.email}</dd></div>
            <div><dt className="eyebrow text-muted-gold">Official source</dt><dd><a className="underline" href={officialContacts.sourceUrl} target="_blank" rel="noopener noreferrer">Casa dos Livros contacts</a></dd></div>
          </dl>
        </div>
      </section>

      <section className="section-pad bg-parchment">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <p className="eyebrow">Newsletter</p>
          <h2 className="mt-4 font-display text-5xl text-ink">Stay connected to Casa dos Livros.</h2>
          <p className="mx-auto mt-5 text-lg leading-8 text-soft-ink">Programme announcements may vary throughout the academic year. Use the contact and newsletter routes for the most current activity information.</p>
          <a className="btn-primary mt-7" href={officialContacts.sourceUrl} target="_blank" rel="noopener noreferrer">Contact Casa dos Livros</a>
        </div>
      </section>

      <FinalInvitation />
    </main>
  );
}
