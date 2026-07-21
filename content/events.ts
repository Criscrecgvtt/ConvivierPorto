import { siteImages } from '@/lib/assets';
import type { StaticImageData } from 'next/image';

export type CulturalEvent = {
  slug: string;
  title: string;
  category: string;
  date: string;
  endDate?: string;
  time: string;
  location: string;
  language: string;
  capacity?: number;
  bookingStatus: 'open' | 'full' | 'coming-soon';
  shortDescription: string;
  description: string;
  image: StaticImageData;
  relatedBookSlugs?: string[];
  relatedPodcastSlug?: string;
};

export const events: CulturalEvent[] = [
  {
    slug: 'guided-visit-beyond-the-door',
    title: 'Guided Visit: Beyond the Door',
    category: 'Guided Visit',
    date: '2026-10-10',
    time: 'Time pending confirmation',
    location: 'Casa dos Livros',
    language: 'PT/EN',
    capacity: 20,
    bookingStatus: 'coming-soon',
    shortDescription: 'A proposed guided visit through thresholds, reading rooms and archival traces.',
    description: 'This pilot visit is proposed as a slow introduction to the house and its collections. Date, time and booking details require institutional confirmation.',
    image: siteImages.heroDoorway,
  },
  {
    slug: 'reading-objects-historical-sources',
    title: 'Workshop: Reading Objects as Historical Sources',
    category: 'Workshop',
    date: '2026-11-07',
    time: 'Time pending confirmation',
    location: 'Casa dos Livros',
    language: 'PT',
    capacity: 16,
    bookingStatus: 'coming-soon',
    shortDescription: 'A proposed workshop on material culture and careful interpretation.',
    description: 'Participants would explore how objects, furniture, images and books can be read without inventing unsupported stories.',
    image: siteImages.carvedChair,
    relatedBookSlugs: ['carved-chair-study'],
  },
  {
    slug: 'live-podcast-dictionaries',
    title: 'Live Podcast Recording: The Lives Hidden Inside Dictionaries',
    category: 'Podcast Recording',
    date: '2026-11-21',
    time: 'Time pending confirmation',
    location: 'Casa dos Livros',
    language: 'PT/EN',
    capacity: 35,
    bookingStatus: 'coming-soon',
    shortDescription: 'A proposed public recording for the Voices of the House pilot season.',
    description: 'A pilot format for connecting scholarship, audio and public conversation around reference collections.',
    image: siteImages.collectionsShelves,
    relatedPodcastSlug: 'lives-hidden-inside-dictionaries',
  },
  {
    slug: 'erasmus-evening-casa-dos-livros',
    title: 'Erasmus Evening at Casa dos Livros',
    category: 'Student Event',
    date: '2026-12-05',
    time: 'Time pending confirmation',
    location: 'Casa dos Livros',
    language: 'EN',
    capacity: 40,
    bookingStatus: 'coming-soon',
    shortDescription: 'A proposed evening for international students discovering Porto through culture.',
    description: 'A proposed gathering linking Casa dos Livros, the Porto Cultural Passport and student cultural participation.',
    image: siteImages.readingRoom,
  },
];
