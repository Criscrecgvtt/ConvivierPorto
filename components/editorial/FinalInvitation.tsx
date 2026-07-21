import Image from 'next/image';
import Link from 'next/link';
import { imageAlt, siteImages } from '@/lib/assets';

export function FinalInvitation() {
  return (
    <section className="relative overflow-hidden bg-forest-deep py-28 text-warm-white">
      <Image src={siteImages.gardenView} alt={imageAlt.gardenView} fill sizes="100vw" className="object-cover opacity-55" />
      <div className="absolute inset-0 bg-forest-deep/60" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <p className="eyebrow text-muted-gold">Final invitation</p>
        <h2 className="mt-4 font-display text-6xl leading-none md:text-8xl">Stay. Read. Breathe.</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="btn-primary bg-warm-white text-forest hover:bg-parchment" href="/visit">Plan your visit</Link>
          <Link className="btn-secondary border-warm-white/40 text-warm-white hover:bg-warm-white/10" href="/events">Explore upcoming events</Link>
        </div>
      </div>
    </section>
  );
}
