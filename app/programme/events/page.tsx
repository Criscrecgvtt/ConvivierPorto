import { ProgrammeFilters } from '@/components/programme/ProgrammeFilters';
import { SectionHeading } from '@/components/editorial/SectionHeading';
import { events } from '@/content/events';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Programme Events', 'Programme events with audience filters, calendar/list views and passport eligibility.', '/programme/events');

export default function ProgrammeEventsPage() {
  return (
    <main className="pt-20">
      <section className="section-pad bg-parchment">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Events" title="Upcoming, recurring and proposed programme events." />
          <div className="mt-10"><ProgrammeFilters events={events} /></div>
        </div>
      </section>
    </main>
  );
}
