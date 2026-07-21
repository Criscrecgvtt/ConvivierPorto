'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { bookItems } from '@/content/books';
import { StatusBadge } from '@/components/editorial/StatusBadge';
import { trackEvent } from '@/lib/analytics';

export function CollectionExplorer() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('all');
  const [tag, setTag] = useState('all');

  const tags = Array.from(new Set(bookItems.flatMap((item) => item.tags))).sort();
  const types = Array.from(new Set(bookItems.map((item) => item.materialType ?? 'object'))).sort();

  const filtered = useMemo(() => {
    const text = query.toLowerCase();
    return bookItems.filter((item) => {
      const matchesText = !text || [item.title, item.shortDescription, item.whyItMatters, item.language, item.collection].filter(Boolean).join(' ').toLowerCase().includes(text);
      const matchesType = type === 'all' || item.materialType === type;
      const matchesTag = tag === 'all' || item.tags.includes(tag);
      return matchesText && matchesType && matchesTag;
    });
  }, [query, tag, type]);

  return (
    <div className="space-y-8">
      <div className="grid gap-4 border border-line bg-warm-white p-4 md:grid-cols-[1fr_220px_220px]">
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Search collections
          <input
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              trackEvent('book_search', { query: event.target.value });
            }}
            className="border border-line bg-white px-3 py-3 font-normal text-ink"
            placeholder="Search books, objects, rooms..."
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Material
          <select value={type} onChange={(event) => setType(event.target.value)} className="border border-line bg-white px-3 py-3 font-normal text-ink">
            <option value="all">All materials</option>
            {types.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Subject
          <select value={tag} onChange={(event) => setTag(event.target.value)} className="border border-line bg-white px-3 py-3 font-normal text-ink">
            <option value="all">All subjects</option>
            {tags.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
      </div>

      {filtered.length === 0 ? (
        <div className="border border-line bg-parchment p-8 text-soft-ink">No collection records match these filters. Try a broader search.</div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((item) => (
            <Link key={item.slug} href={`/collections/${item.slug}`} onClick={() => trackEvent('collection_open', { slug: item.slug })} className="group grid overflow-hidden border border-line bg-warm-white md:grid-cols-[180px_1fr]">
              <div className="relative min-h-[220px]">
                <Image src={item.image} alt={`Image for ${item.title}`} fill sizes="(max-width: 768px) 100vw, 180px" className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <StatusBadge status={item.metadataStatus === 'verified' ? 'Verified' : 'Pending verification'} />
                <h3 className="mt-4 font-display text-3xl leading-tight text-ink">{item.title}</h3>
                <p className="mt-3 leading-7 text-soft-ink">{item.shortDescription}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">View record</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
