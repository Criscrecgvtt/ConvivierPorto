'use client';

import Link from 'next/link';
import { useState } from 'react';

const primary = [
  ['Explore', '/explore'],
  ['Collections', '/collections'],
  ['Passport', '/passport'],
  ['Podcast', '/podcast'],
  ['Events', '/events'],
  ['Visit', '/visit'],
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-warm-white/15 bg-forest-deep/88 text-warm-white backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8 lg:px-12" aria-label="Main navigation">
        <Link href="/" className="font-display text-2xl tracking-wide">CONVIVER</Link>
        <div className="hidden items-center gap-6 lg:flex">
          {primary.map(([label, href]) => <Link key={href} href={href} className="nav-link">{label}</Link>)}
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/partners" className="nav-link">Partners</Link>
          <span className="text-xs uppercase tracking-[0.22em] text-muted-gold">PT / EN</span>
          <Link href="/visit" className="btn-primary py-2">Plan your visit</Link>
        </div>
        <button
          type="button"
          className="border border-warm-white/30 px-3 py-2 text-sm uppercase tracking-[0.18em] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
      </nav>
      {open ? (
        <div id="mobile-nav" className="border-t border-warm-white/15 bg-forest-deep px-4 py-4 lg:hidden">
          <div className="grid gap-3">
            {[...primary, ['About', '/about'], ['Partners', '/partners']].map(([label, href]) => (
              <Link key={href} href={href} className="py-2 text-lg" onClick={() => setOpen(false)}>{label}</Link>
            ))}
            <span className="text-xs uppercase tracking-[0.22em] text-muted-gold">PT / EN</span>
          </div>
        </div>
      ) : null}
    </header>
  );
}
