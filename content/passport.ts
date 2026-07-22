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
    description: 'A landmark literary stop that connects visitors to Porto book culture.',
    stampIcon: 'book',
    partnerStatus: 'confirmed',
  },
  {
    slug: 'serralves',
    name: 'Serralves',
    type: 'Museum and gardens',
    description: 'A museum and garden stop for visitors following architecture, art and landscape.',
    stampIcon: 'leaf',
    partnerStatus: 'confirmed',
  },
  {
    slug: 'casa-da-musica',
    name: 'Casa da Música',
    type: 'Music and performance',
    description: 'A sound and performance stop linked to listening, voice and live podcast moments.',
    stampIcon: 'sound',
    partnerStatus: 'confirmed',
  },
  {
    slug: 'museu-soares-dos-reis',
    name: 'Museu Nacional Soares dos Reis',
    type: 'Museum',
    description: 'A heritage stop for collection-minded visitors moving across the city.',
    stampIcon: 'frame',
    partnerStatus: 'confirmed',
  },
  {
    slug: 'porto-hotels-hostels',
    name: 'Selected hotels and hostels',
    type: 'Distribution points',
    description: 'Pickup locations for printed passports and cultural route cards.',
    stampIcon: 'key',
    partnerStatus: 'confirmed',
  },
];

export const rewardTiers = [
  { stamps: 3, reward: 'Digital badge' },
  { stamps: 5, reward: 'Bookmark' },
  { stamps: 8, reward: 'Partner discount or offer' },
  { stamps: 10, reward: 'Tote bag or T-shirt' },
  { stamps: 12, reward: 'Special guided visit' },
];
