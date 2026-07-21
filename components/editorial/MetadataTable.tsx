export function MetadataTable({ rows }: { rows: Array<[string, string | number | undefined]> }) {
  return (
    <dl className="divide-y divide-line border-y border-line">
      {rows.map(([label, value]) => (
        <div key={label} className="grid gap-1 py-4 sm:grid-cols-[180px_1fr]">
          <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-soft-ink">{label}</dt>
          <dd className="text-ink">{value ?? 'Metadata pending verification'}</dd>
        </div>
      ))}
    </dl>
  );
}
