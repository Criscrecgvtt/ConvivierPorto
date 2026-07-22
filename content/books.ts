import { siteImages } from '@/lib/assets';
import type { StaticImageData } from 'next/image';

export type BookItem = {
  slug: string;
  title: string;
  author?: string;
  publicationYear?: number;
  dateLabel?: string;
  language?: string;
  collection?: string;
  callNumber?: string;
  materialType?: 'book' | 'dictionary' | 'manuscript' | 'photograph' | 'object';
  shortDescription: string;
  whyItMatters?: string;
  provenance?: string;
  rights?: string;
  metadataStatus: 'verified' | 'pending';
  relatedRoom?: string;
  tags: string[];
  image: StaticImageData;
};

// Replace these pending entries with verified institutional catalogue records when available.
export const bookItems: BookItem[] = [
  {
    slug: 'dictionary-shelf-selection',
    title: 'Dictionary Shelf Selection',
    materialType: 'dictionary',
    shortDescription: 'A selection of reference works preserved within Casa dos Livros.',
    whyItMatters: 'Reference collections reveal how language, knowledge and classification change over time.',
    metadataStatus: 'pending',
    relatedRoom: 'The Collections',
    tags: ['language', 'reference', 'lexicography'],
    image: siteImages.bookReadingPractice,
  },
  {
    slug: 'domestic-memory-photographs',
    title: 'Domestic Memory Photographs',
    materialType: 'photograph',
    shortDescription: 'Photographic traces connected to the house and its remembered interiors.',
    whyItMatters: 'Images of rooms and family traces help visitors understand heritage as lived experience.',
    metadataStatus: 'pending',
    relatedRoom: 'Keepers of Memory',
    tags: ['memory', 'photography', 'archive'],
    image: siteImages.bookHouseMemory,
  },
  {
    slug: 'listening-archive-materials',
    title: 'Listening Archive Materials',
    materialType: 'object',
    shortDescription: 'Audio and transcription materials for oral-history interpretation.',
    whyItMatters: 'Sound can make archival silence legible without pretending every detail is already known.',
    metadataStatus: 'pending',
    relatedRoom: 'The Reading Rooms',
    tags: ['sound', 'oral history', 'digital humanities'],
    image: siteImages.bookSoundMemory,
  },
  {
    slug: 'carved-chair-study',
    title: 'Carved Chair Study',
    materialType: 'object',
    shortDescription: 'A material heritage object used to interpret craft, care and domestic ceremony.',
    metadataStatus: 'pending',
    relatedRoom: 'The Entrance',
    tags: ['furniture', 'material culture', 'house'],
    image: siteImages.carvedChair,
  },
];
