import Image, { type StaticImageData } from 'next/image';

export function EditorialHero({
  eyebrow,
  title,
  subtitle,
  image,
  alt,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: StaticImageData;
  alt: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-forest-deep text-warm-white">
      <Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(19,42,37,0.88),rgba(19,42,37,0.42),rgba(19,42,37,0.12))]" />
      <div className="relative mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-end px-6 pb-16 pt-32 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          {eyebrow ? <p className="eyebrow text-muted-gold">{eyebrow}</p> : null}
          <h1 className="mt-5 font-display text-6xl leading-[0.92] text-warm-white md:text-8xl">{title}</h1>
          {subtitle ? <p className="mt-6 max-w-2xl text-xl leading-8 text-warm-white/86">{subtitle}</p> : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
