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
    description: 'A pilot conversation about memory, architecture and the responsibility of cultural interpretation.',
    duration: 'Pilot in preparation',
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
    description: 'A proposed episode on reference works, language and changing systems of knowledge.',
    duration: 'Pilot in preparation',
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
    description: 'A proposed walk through rooms, thresholds and reading practices.',
    duration: 'Pilot in preparation',
    language: 'PT/EN',
    status: 'coming-soon',
    coverImage: siteImages.houseHall,
  },
  {
    slug: 'digital-humanities-make-heritage-visible',
    episodeNumber: 4,
    season: 1,
    title: 'How Digital Humanities Can Make Heritage Visible',
    description: 'A proposed episode about honest metadata, public engagement and cultural mediation.',
    duration: 'Pilot in preparation',
    language: 'EN',
    status: 'coming-soon',
    coverImage: siteImages.bookSoundMemory,
  },
];
