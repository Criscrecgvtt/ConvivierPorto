import Link from 'next/link';
import { officialContacts, officialPages } from '@/content/official';

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-forest-deep text-warm-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-12">
        <div>
          <h2 className="font-display text-4xl">Casa dos Livros</h2>
          <p className="mt-3 text-warm-white/72">Centre for Culture Studies in Portugal · University of Porto</p>
          <p className="mt-4 text-sm leading-6 text-warm-white/72">{officialContacts.address}</p>
          <p className="mt-2 text-sm text-warm-white/72">{officialContacts.telephone} · {officialContacts.email}</p>
        </div>
        <div>
          <p className="eyebrow text-muted-gold">Institutional</p>
          <div className="mt-4 grid gap-2 text-sm">
            <Link href="/about/casa-dos-livros">About Casa dos Livros</Link>
            <Link href="/collections">Collections</Link>
            <Link href="/research-tools">Research tools</Link>
            <Link href="/contact">Contacts</Link>
          </div>
        </div>
        <div>
          <p className="eyebrow text-muted-gold">Stay connected</p>
          <div className="mt-4 grid gap-2 text-sm">
            <Link href="/about/casa-dos-livros">Institution</Link>
            <Link href="/programme">Programme</Link>
            <Link href="/passport">Passport</Link>
            <Link href="/partners">Partners</Link>
            <span>PT / EN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
