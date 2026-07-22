import { siteImages } from '@/lib/assets';
import type { StaticImageData } from 'next/image';

export type PodcastEpisode = {
  slug: string;
  episodeNumber: number;
  season: number;
  title: string;
  description: string;
  guest?: string;
  duration?: string;
  publicationDate?: string;
  language: 'PT' | 'EN' | 'PT/EN';
  audioUrl?: string;
  transcript?: string;
  status: 'published' | 'coming-soon';
  coverImage: StaticImageData;
  relatedBookSlugs?: string[];
};

export const podcastName = 'Voices of the House';

export const podcastEpisodes: PodcastEpisode[] = [
  {
    slug: 'why-does-a-house-become-an-archive',
    episodeNumber: 1,
    season: 1,
    title: 'Why Does a House Become an Archive?',
    description: 'A cinematic opening episode about why a private working library becomes a public cultural house, moving from Palacete Burmester to the first passport stamp.',
    guest: 'Marta Valente, cultural mediator',
    duration: '28 min',
    publicationDate: '2026-10-03',
    language: 'PT/EN',
    status: 'coming-soon',
    coverImage: siteImages.portraitPainting,
    relatedBookSlugs: ['domestic-memory-photographs'],
  },
  {
    slug: 'lives-hidden-inside-dictionaries',
    episodeNumber: 2,
    season: 1,
    title: 'The Lives Hidden Inside Dictionaries',
    description: 'A warm conversation with booksellers and researchers about dictionaries, marginalia and the strange intimacy of reference books.',
    guest: 'Inês Rocha, bookseller and reader',
    duration: '24 min',
    publicationDate: '2026-10-17',
    language: 'PT',
    status: 'coming-soon',
    coverImage: siteImages.collectionsShelves,
    relatedBookSlugs: ['dictionary-shelf-selection'],
  },
  {
    slug: 'palacete-burmester-architecture-memory-reading',
    episodeNumber: 3,
    season: 1,
    title: 'Palacete Burmester: Architecture, Memory and Reading',
    description: 'A guided listening walk through doors, staircases, ceilings and reading rooms, designed as an audio companion for Explore the House.',
    guest: 'João Martins, architecture researcher',
    duration: '31 min',
    publicationDate: '2026-11-07',
    language: 'PT/EN',
    status: 'coming-soon',
    coverImage: siteImages.houseHall,
  },
  {
    slug: 'digital-humanities-make-heritage-visible',
    episodeNumber: 4,
    season: 1,
    title: 'How Digital Humanities Can Make Heritage Visible',
    description: 'A practical episode about QR stories, catalogues, visitor journeys and why cultural websites should make knowledge easier to enter.',
    guest: 'Rita Nunes, digital humanities producer',
    duration: '27 min',
    publicationDate: '2026-11-21',
    language: 'EN',
    status: 'coming-soon',
    coverImage: siteImages.bookSoundMemory,
  },
  {
    slug: 'bookstores-as-cultural-gateways',
    episodeNumber: 5,
    season: 1,
    title: 'Bookstores as Cultural Gateways',
    description: 'A route episode linking Livraria Lello, independent bookshops, poetry shelves and the Casa dos Livros passport journey.',
    guest: 'Clara Azevedo, literary programmer',
    duration: '26 min',
    publicationDate: '2026-12-05',
    language: 'PT/EN',
    status: 'coming-soon',
    coverImage: siteImages.bookReadingPractice,
    relatedBookSlugs: ['dictionary-shelf-selection'],
  },
  {
    slug: 'summer-cinema-and-the-book',
    episodeNumber: 6,
    season: 1,
    title: 'Summer Cinema and the Book',
    description: 'A seasonal episode about adaptations, open-air screenings, reading before watching and turning a film night into a literary route.',
    guest: 'Miguel Faria, cinema curator',
    duration: '29 min',
    publicationDate: '2027-06-12',
    language: 'PT/EN',
    status: 'coming-soon',
    coverImage: siteImages.gardenView,
    relatedBookSlugs: ['domestic-memory-photographs'],
  },
];
