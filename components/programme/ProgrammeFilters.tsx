'use client';

import { useMemo, useState } from 'react';
import { EventCard } from '@/components/programme/EventCard';
import type { AudienceType, CulturalEvent } from '@/content/events';

export function ProgrammeFilters({ events }: { events: CulturalEvent[] }) {
  const [audience, setAudience] = useState<AudienceType | 'all'>('all');
  const [view, setView] = useState<'list' | 'calendar'>('list');

  const filtered = useMemo(() => audience === 'all' ? events : events.filter((event) => event.audiences.includes(audience)), [audience, events]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end gap-3 border border-line bg-warm-white p-4">
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Audience path
          <select value={audience} onChange={(event) => setAudience(event.target.value as AudienceType | 'all')} className="border border-line bg-white px-3 py-3 font-normal">
            <option value="all">All audiences</option>
            {['students', 'erasmus', 'researchers', 'tourists', 'local-community', 'families', 'schools', 'creative-community'].map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
        <div className="flex border border-line" role="group" aria-label="Programme view">
          <button className={`px-4 py-3 text-sm font-semibold ${view === 'list' ? 'bg-forest text-warm-white' : 'bg-white text-forest'}`} onClick={() => setView('list')}>List</button>
          <button className={`px-4 py-3 text-sm font-semibold ${view === 'calendar' ? 'bg-forest text-warm-white' : 'bg-white text-forest'}`} onClick={() => setView('calendar')}>Calendar</button>
        </div>
      </div>
      {view === 'calendar' ? (
        <div className="overflow-x-auto border border-line bg-parchment">
          <table className="w-full min-w-[720px] text-left">
            <thead className="bg-forest text-warm-white"><tr><th className="p-4">Event</th><th className="p-4">Date</th><th className="p-4">Audience</th><th className="p-4">Status</th></tr></thead>
            <tbody>
              {filtered.map((event) => <tr key={event.slug} className="border-t border-line"><td className="p-4">{event.title}</td><td className="p-4">{event.date ?? 'Date announced soon'}</td><td className="p-4">{event.audiences.join(', ')}</td><td className="p-4">{event.status.replace('-', ' ')}</td></tr>)}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">{filtered.map((event) => <EventCard key={event.slug} event={event} />)}</div>
      )}
    </div>
  );
}
