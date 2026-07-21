export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">{title}</h2>
      {children ? <div className="mt-5 text-lg leading-8 text-soft-ink">{children}</div> : null}
    </div>
  );
}
