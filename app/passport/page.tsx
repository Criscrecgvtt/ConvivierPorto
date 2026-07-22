import Image from 'next/image';
import Link from 'next/link';
import { PassportProgress } from '@/components/passport/PassportProgress';
import { EventCard } from '@/components/programme/EventCard';
import { EditorialHero } from '@/components/editorial/EditorialHero';
import { SectionHeading } from '@/components/editorial/SectionHeading';
import { StatusBadge } from '@/components/editorial/StatusBadge';
import { events } from '@/content/events';
import { passportLocations, rewardTiers } from '@/content/passport';
import { passportAudienceModules } from '@/content/conviver';
import { imageAlt, siteImages } from '@/lib/assets';
import { pageMetadata } from '@/lib/seo';

const acquisitionChannels = [
  'Casa dos Livros',
  'selected hotels and hostels',
  'university welcome packs',
  'campus locations',
  'cultural partner venues',
  'tourism information points',
  'event posters and QR cards',
  'social media',
];

const funnel = ['Awareness', 'Passport pickup', 'First visit and stamp', 'QR story', 'Event participation', 'More locations', 'Reward', 'Newsletter / repeat visit'];

export const metadata = pageMetadata('Porto Cultural Passport', 'Porto Cultural Passport route, audience strategy and digital stamp progress.', '/passport');

export default function PassportPage() {
  const stampEvents = events.filter((event) => event.passportStampEligible);

  return (
    <main>
      <EditorialHero eyebrow="CONVIVER route" title="Porto Cultural Passport" subtitle="A literary route for discovering Casa dos Livros, bookshops, cultural places and digital stories through physical stamps." image={siteImages.gardenView} alt={imageAlt.gardenView} />

      <section className="section-pad bg-warm-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <SectionHeading eyebrow="Why it exists" title="Audience attraction, not gimmickry.">
            The passport gives students, visitors, residents and researchers a simple reason to begin at Casa dos Livros, return for events and continue toward official collections and research tools.
          </SectionHeading>
          <div className="border border-line bg-parchment p-6">
            <StatusBadge status="Digital passport" />
            <p className="mt-4 leading-7 text-soft-ink">No real stamp is awarded automatically. The current progress tool uses localStorage only; secure QR validation should replace it later.</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-parchment">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Who it is for" title="Audience modules and retention paths." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {passportAudienceModules.map((module) => (
              <article key={module.audience} className="border border-line bg-warm-white p-6">
                <h2 className="font-display text-3xl text-ink">{module.audience}</h2>
                <p className="mt-3 text-soft-ink"><strong>Need:</strong> {module.need}</p>
                <p className="mt-3 text-soft-ink"><strong>Channel:</strong> {module.channel}</p>
                <p className="mt-3 text-soft-ink"><strong>Hook:</strong> {module.hook}</p>
                <p className="mt-3 text-soft-ink"><strong>Retention:</strong> {module.retention}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="How it works" title="From awareness to repeat visit." />
          <ol className="mt-10 grid gap-3 md:grid-cols-4">
            {funnel.map((step, index) => (
              <li key={step} className="border border-line bg-parchment p-5">
                <p className="font-display text-5xl text-terracotta">{index + 1}</p>
                <p className="mt-3 font-semibold text-ink">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad bg-parchment">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Route and partners" title="Casa dos Livros is the anchor." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {passportLocations.map((location) => (
              <article key={location.slug} className="border border-line bg-warm-white">
                {location.image ? <div className="relative h-56"><Image src={location.image} alt={`Photograph for ${location.name}`} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" /></div> : null}
                <div className="p-6">
                  <StatusBadge status={location.partnerStatus === 'anchor' ? 'Anchor' : 'Route partner'} />
                  <h2 className="mt-4 font-display text-3xl text-ink">{location.name}</h2>
                  <p className="mt-3 leading-7 text-soft-ink">{location.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Stamp-eligible events" title="Events can provide stamps after validation." />
          <div className="mt-10 grid gap-6 md:grid-cols-2">{stampEvents.slice(0, 4).map((event) => <EventCard key={event.slug} event={event} />)}</div>
        </div>
      </section>

      <section className="section-pad bg-parchment">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Rewards and distribution" title="Passport mechanics." />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="border border-line bg-warm-white p-6">
              <h2 className="font-display text-4xl text-ink">Rewards</h2>
              <ul className="mt-4 space-y-2 text-soft-ink">{rewardTiers.map((tier) => <li key={tier.stamps}>{tier.stamps} stamps: {tier.reward}</li>)}</ul>
            </div>
            <div className="border border-line bg-warm-white p-6">
              <h2 className="font-display text-4xl text-ink">Distribution points</h2>
              <ul className="mt-4 space-y-2 text-soft-ink">{acquisitionChannels.map((channel) => <li key={channel}>{channel}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <PassportProgress />
        </div>
      </section>

      <section className="section-pad bg-forest text-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="FAQ and conditions" title="Risk-aware by design.">
            <span className="text-warm-white/78">Rewards, discounts and route stories are designed to bring visitors back to books, rooms, events and the newsletter. Personal data is never required for the demo progress tool.</span>
          </SectionHeading>
          <Link className="btn-primary mt-8 bg-warm-white text-forest hover:bg-parchment" href="/conviver/ecosystem">See the ecosystem</Link>
        </div>
      </section>
    </main>
  );
}
