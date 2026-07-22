'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const groups = [
  {
    label: 'Discover',
    href: '/about',
    items: [
      ['About Casa dos Livros', '/about/casa-dos-livros'],
      ['Mission', '/about/mission'],
      ['Palacete Burmester', '/about/palacete-burmester'],
      ['Team', '/about/team'],
    ],
  },
  {
    label: 'Collections',
    href: '/collections',
    items: [
      ['All collections', '/collections'],
      ['Research tools', '/research-tools'],
      ['Library catalogues', '/catalogues'],
    ],
  },
  {
    label: 'Programme',
    href: '/programme',
    items: [
      ['Upcoming events', '/events'],
      ['Exhibitions', '/exhibitions'],
      ['Publications', '/publications'],
    ],
  },
  {
    label: 'CONVIVER',
    href: '/explore',
    items: [
      ['Explore the House', '/explore-the-house'],
      ['Stories', '/stories'],
      ['Podcast', '/podcast'],
      ['Experience spaces', '/conviver/spaces'],
      ['Ecosystem', '/conviver/ecosystem'],
      ['Digital experiences', '/explore'],
    ],
  },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const transparentAtTop = pathname === '/' && !scrolled && !open;

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 56);
    updateScrolled();
    window.addEventListener('scroll', updateScrolled, { passive: true });
    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-warm-white transition-all duration-300 ${
        transparentAtTop
          ? 'border-b border-warm-white/18 bg-transparent'
          : 'border-b border-warm-white/12 bg-forest-deep/94 shadow-soft backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8 lg:px-12" aria-label="Main navigation">
        <Link href="/" className="leading-tight">
          <span className="block font-display text-2xl tracking-wide drop-shadow-sm">Casa dos Livros</span>
          <span className="block text-[0.62rem] uppercase tracking-[0.2em] text-muted-gold">CONVIVER experience layer</span>
        </Link>
        <div className="hidden items-center gap-5 lg:flex">
          {groups.map((group) => (
            <div key={group.label} className="group relative">
              <Link href={group.href} className="nav-link">{group.label}</Link>
              <div className="invisible absolute left-0 top-full w-72 border border-warm-white/15 bg-forest-deep p-3 opacity-0 shadow-soft transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                {group.items.map(([label, href]) => (
                  <Link key={href} href={href} className="block px-3 py-2 text-sm text-warm-white/82 hover:bg-warm-white/10 hover:text-warm-white">{label}</Link>
                ))}
              </div>
            </div>
          ))}
          <Link href="/passport" className="nav-link">Passport</Link>
          <Link href="/visit" className="nav-link">Visit</Link>
          <span className="text-xs uppercase tracking-[0.22em] text-muted-gold">PT / EN</span>
          <Link href="/visit" className="btn-primary py-2">Plan your visit</Link>
        </div>
        <button
          type="button"
          className="border border-warm-white/30 bg-forest-deep/80 px-3 py-2 text-sm uppercase tracking-[0.18em] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
      </nav>
      {open ? (
        <div id="mobile-nav" className="border-t border-warm-white/15 bg-forest-deep px-4 py-4 lg:hidden">
          <div className="grid gap-3">
            {groups.map((group) => (
              <div key={group.label} className="border-b border-warm-white/10 pb-2">
                <Link href={group.href} className="block py-2 text-lg" onClick={() => setOpen(false)}>{group.label}</Link>
                {group.items.map(([label, href]) => (
                  <Link key={href} href={href} className="block py-1 pl-4 text-sm text-warm-white/75" onClick={() => setOpen(false)}>{label}</Link>
                ))}
              </div>
            ))}
            <Link href="/passport" className="py-2 text-lg" onClick={() => setOpen(false)}>Passport</Link>
            <Link href="/conviver/ecosystem" className="py-2 text-lg" onClick={() => setOpen(false)}>Ecosystem</Link>
            <Link href="/visit" className="py-2 text-lg" onClick={() => setOpen(false)}>Visit</Link>
            <Link href="/contact" className="py-2 text-lg" onClick={() => setOpen(false)}>Contact</Link>
            <span className="text-xs uppercase tracking-[0.22em] text-muted-gold">PT / EN</span>
          </div>
        </div>
      ) : null}
    </header>
  );
}
