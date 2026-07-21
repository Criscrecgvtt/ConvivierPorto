import type { StaticImageData } from 'next/image';
import burmesterImage from '../images/edited/book-house-memory-pretty.png';
import gardenImage from '../images/edited/book-reading-practice-pretty.png';
import echoesImage from '../images/edited/book-sound-memory-pretty.png';

export type Book = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: StaticImageData | string;
  metadata: string[];
  story: string;
  quotes: string[];
  relatedAuthors: string[];
  timeline: string[];
  relatedPlaces: string[];
};

export const sections = [
  { id: 'entrance', title: 'Entrance', blurb: 'A threshold of hush and stone.' },
  { id: 'house', title: 'The House', blurb: 'The building opens like memory itself.' },
  { id: 'rooms', title: 'The Rooms', blurb: 'Each chamber holds a different cadence.' },
  { id: 'collections', title: 'The Collections', blurb: 'Objects gather into a living archive.' },
  { id: 'digital', title: 'Digital Humanities', blurb: 'Stories made tangible through care and code.' },
  { id: 'podcast', title: 'Podcast', blurb: 'Voices from the rooms and beyond.' },
  { id: 'events', title: 'Events', blurb: 'Gatherings shaped by reading and listening.' },
  { id: 'visit', title: 'Visit', blurb: 'A quiet invitation to arrive.' },
];

export const roomCards = [
  {
    title: 'The Lantern Hall',
    description: 'A warm vestibule where the house first exhales its story.',
  },
  {
    title: 'The Reading Cabinet',
    description: 'Shelves breathe in low light, offering fragments of private worlds.',
  },
  {
    title: 'The Portrait Gallery',
    description: 'Each face recalls the rhythm of time, paper and memory.',
  },
];

export const books: Book[] = [
  {
    id: 'burmester',
    title: 'Burmester in the Margins',
    subtitle: 'A quiet reconstruction of domestic life',
    category: 'House memory',
    image: burmesterImage,
    metadata: ['1910s', 'Private archive', 'Paper and photograph'],
    story:
      'This book unspools the intimate rhythms of a household from fragments, letters and annotations left across the house.',
    quotes: ['“The house remembers by breathing.”', '“Paper is a kind of weather.”'],
    relatedAuthors: ['Maria Tavares', 'Eduardo Ramos'],
    timeline: ['1898 – First records of the estate', '1912 – New rooms arranged for reading'],
    relatedPlaces: ['Palacete Burmester', 'Porto', 'The garden courtyard'],
  },
  {
    id: 'garden',
    title: 'The Garden of Marginal Notes',
    subtitle: 'Annotations in motion',
    category: 'Reading practice',
    image: gardenImage,
    metadata: ['Annotated copy', 'Urban memory', 'Field notes'],
    story:
      'A journey through the traces left by readers who treated books as places of dwelling rather than ownership.',
    quotes: ['“To read is to linger.”', '“A margin is a second room.”'],
    relatedAuthors: ['Inês Vale', 'Lourenço Seixas'],
    timeline: ['1934 – Shared reading circles', '1983 – Collections reassembled'],
    relatedPlaces: ['The courtyard', 'The library shelf', 'The old study'],
  },
  {
    id: 'echoes',
    title: 'Echoes of the Study',
    subtitle: 'Listening to the archive',
    category: 'Sound and memory',
    image: echoesImage,
    metadata: ['Audio fragments', 'Oral history', 'Interviews'],
    story:
      'A layered portrait of the house through voices, pauses and intimate recollections gathered over time.',
    quotes: ['“The silence has texture.”', '“Every room hums with its own memory.”'],
    relatedAuthors: ['Ana Lobo', 'Tomás Ferreira'],
    timeline: ['2009 – Oral histories gathered', '2024 – Digital reconstruction begins'],
    relatedPlaces: ['Study window', 'The hallway', 'The garden path'],
  },
];
