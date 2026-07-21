import { MetadataTable } from '@/components/editorial/MetadataTable';
import { SectionHeading } from '@/components/editorial/SectionHeading';
import { StatusBadge } from '@/components/editorial/StatusBadge';
import { officialContacts, officialPages } from '@/content/official';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Contact', 'Official Casa dos Livros contacts, address and hours.', '/contact');

export default function ContactPage() {
  return (
    <main className="pt-20">
      <section className="section-pad bg-parchment">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <StatusBadge status="Verified from official website" />
          <SectionHeading title="Contacts and opening hours." />
          <div className="mt-8">
            <MetadataTable rows={[
              ['Address', officialContacts.address],
              ['Building hours', officialContacts.buildingHours],
              ['Reading room', officialContacts.readingRoomHours],
              ['Telephone', officialContacts.telephone],
              ['Email', officialContacts.email],
              ['Official URL', officialContacts.url],
            ]} />
          </div>
          <a className="btn-secondary mt-8" href={officialPages.contacts} target="_blank" rel="noreferrer">Official contact page</a>
        </div>
      </section>
    </main>
  );
}
