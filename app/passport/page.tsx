import Image from 'next/image';
import { PassportProgress } from '@/components/passport/PassportProgress';
import { EditorialHero } from '@/components/editorial/EditorialHero';
import { SectionHeading } from '@/components/editorial/SectionHeading';
import { passportLocations } from '@/content/passport';
import { imageAlt, siteImages } from '@/lib/assets';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Porto Cultural Passport', 'A believable MVP for the Porto Cultural Passport route and demo stamp progress.', '/passport');

export default function PassportPage() {
  return (
    <main>
      <EditorialHero eyebrow="Flagship MVP" title="Porto Cultural Passport" subtitle="Pick up a passport, visit cultural places, collect stamps, scan QR codes and unlock stories." image={siteImages.gardenView} alt={imageAlt.gardenView} />
      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="How it works" title="A route designed for physical visits and digital stories." />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {['Pick up your passport', 'Visit cultural places', 'Collect stamps', 'Unlock rewards'].map((step, index) => (
              <div key={step} className="border border-line bg-parchment p-6">
                <p className="font-display text-6xl text-forest">{index + 1}</p>
                <p className="mt-5 font-semibold text-ink">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-parchment">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Route locations" title="Anchor location and proposed partners." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {passportLocations.map((location) => (
              <article key={location.slug} className="border border-line bg-warm-white">
                {location.image ? (
                  <div className="relative h-56"><Image src={location.image} alt={`Photograph for ${location.name}`} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" /></div>
                ) : null}
                <div className="p-6">
                  <p className="eyebrow">{location.partnerStatus === 'anchor' ? 'Anchor' : 'Partnership subject to confirmation'}</p>
                  <h2 className="mt-3 font-display text-3xl text-ink">{location.name}</h2>
                  <p className="mt-3 leading-7 text-soft-ink">{location.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <PassportProgress />
        </div>
      </section>
    </main>
  );
}
