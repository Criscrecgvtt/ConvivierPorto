export function StatusBadge({ status }: { status: string }) {
  const tone = status.toLowerCase().includes('verified') || status.toLowerCase().includes('confirmed')
    ? 'border-forest/30 bg-forest/10 text-forest'
    : 'border-terracotta/30 bg-terracotta/10 text-terracotta';

  return (
    <span className={`inline-flex w-fit items-center border px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${tone}`}>
      {status}
    </span>
  );
}
