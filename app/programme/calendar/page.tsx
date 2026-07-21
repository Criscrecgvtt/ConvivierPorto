import { ProgrammeFilters } from '@/components/programme/ProgrammeFilters';
import { SectionHeading } from '@/components/editorial/SectionHeading';
import { events } from '@/content/events';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Programme Calendar', 'Accessible calendar/list view of proposed and upcoming Casa dos Livros programme events.', '/programme/calendar');

export default function ProgrammeCalendarPage() {
  return (
    <main className="pt-20">
      <section className="section-pad bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Calendar" title="Calendar-ready programme overview." />
          <div className="mt-10"><ProgrammeFilters events={events} /></div>
        </div>
      </section>
    </main>
  );
}
