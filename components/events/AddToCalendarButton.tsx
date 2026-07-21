'use client';

import type { CulturalEvent } from '@/content/events';
import { trackEvent } from '@/lib/analytics';

export function AddToCalendarButton({ event }: { event: CulturalEvent }) {
  function downloadIcs() {
    const date = event.date.replaceAll('-', '');
    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//CONVIVER//Casa dos Livros//EN',
      'BEGIN:VEVENT',
      `UID:${event.slug}@conviver`,
      `DTSTAMP:${date}T090000Z`,
      `DTSTART;VALUE=DATE:${date}`,
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.shortDescription} Booking details pending confirmation.`,
      `LOCATION:${event.location}`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');
    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `${event.slug}.ics`;
    anchor.click();
    URL.revokeObjectURL(url);
    trackEvent('event_add_calendar', { slug: event.slug });
  }

  return <button className="btn-secondary" onClick={downloadIcs}>Add to calendar</button>;
}
