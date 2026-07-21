import Image, { type StaticImageData } from 'next/image';

export function ImageStory({
  image,
  alt,
  label,
  title,
  children,
  reverse = false,
}: {
  image: StaticImageData;
  alt: string;
  label: string;
  title: string;
  children: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <section className="section-pad">
      <div className={`mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:px-12 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <div className="relative min-h-[420px] overflow-hidden border border-line bg-parchment">
          <Image src={image} alt={alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        </div>
        <div className="self-center">
          <p className="eyebrow">{label}</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">{title}</h2>
          <div className="mt-5 max-w-prose text-lg leading-8 text-soft-ink">{children}</div>
        </div>
      </div>
    </section>
  );
}
