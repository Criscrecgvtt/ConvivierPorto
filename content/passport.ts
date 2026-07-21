import { siteImages } from '@/lib/assets';
import type { StaticImageData } from 'next/image';

export type PassportLocation = {
  slug: string;
  name: string;
  type: string;
  address?: string;
  description: string;
  stampIcon: string;
  partnerStatus: 'anchor' | 'proposed' | 'confirmed';
  rewardContribution?: string;
  image?: StaticImageData;
};

export const passportLocations: PassportLocation[] = [
  {
    slug: 'casa-dos-livros',
    name: 'Casa dos Livros',
    type: 'Anchor location',
    description: 'The starting point for the CONVIVER route through books, rooms and memory.',
    stampIcon: 'house',
    partnerStatus: 'anchor',
    rewardContribution: 'Anchor stamp and digital story.',
    image: siteImages.heroDoorway,
  },
  {
    slug: 'livraria-lello',
    name: 'Livraria Lello',
    type: 'Book culture',
    description: 'Proposed partner for a wider Porto reading route.',
    stampIcon: 'book',
    partnerStatus: 'proposed',
  },
  {
    slug: 'serralves',
    name: 'Serralves',
    type: 'Museum and gardens',
    description: 'Proposed partner subject to confirmation.',
    stampIcon: 'leaf',
    partnerStatus: 'proposed',
  },
  {
    slug: 'casa-da-musica',
    name: 'Casa da Música',
    type: 'Music and performance',
    description: 'Proposed partner connecting sound, city and cultural memory.',
    stampIcon: 'sound',
    partnerStatus: 'proposed',
  },
  {
    slug: 'museu-soares-dos-reis',
    name: 'Museu Nacional Soares dos Reis',
    type: 'Museum',
    description: 'Proposed partner for a broader cultural itinerary.',
    stampIcon: 'frame',
    partnerStatus: 'proposed',
  },
  {
    slug: 'porto-hotels-hostels',
    name: 'Selected hotels and hostels',
    type: 'Distribution points',
    description: 'Potential pickup locations for printed passports.',
    stampIcon: 'key',
    partnerStatus: 'proposed',
  },
];

export const rewardTiers = [
  { stamps: 3, reward: 'Digital badge' },
  { stamps: 5, reward: 'Bookmark' },
  { stamps: 8, reward: 'Partner discount or offer' },
  { stamps: 10, reward: 'Tote bag or T-shirt' },
  { stamps: 12, reward: 'Special guided visit' },
];
