import { siteImages } from '@/lib/assets';

export const rooms = [
  {
    slug: 'entrance',
    title: 'The Entrance',
    description: 'A threshold where architecture slows the visitor before the archive begins.',
    associatedObjects: ['Carved Chair Study'],
    fact: 'Information pending confirmation by Casa dos Livros.',
    image: siteImages.heroDoorway,
  },
  {
    slug: 'reading-rooms',
    title: 'The Reading Rooms',
    description: 'Places for close attention, annotation, listening and public interpretation.',
    associatedObjects: ['Dictionary Shelf Selection', 'Listening Archive Materials'],
    fact: 'Collection details to be confirmed by Casa dos Livros.',
    image: siteImages.readingRoom,
  },
  {
    slug: 'collections',
    title: 'The Collections',
    description: 'Books, reference works and objects arranged as a living cultural memory.',
    associatedObjects: ['Dictionary Shelf Selection'],
    fact: 'Metadata pending verification.',
    image: siteImages.collectionsShelves,
  },
  {
    slug: 'keepers-of-memory',
    title: 'Keepers of Memory',
    description: 'Portraits, photographs and traces that frame the house as remembered space.',
    associatedObjects: ['Domestic Memory Photographs'],
    fact: 'Interpretive text pending institutional review.',
    image: siteImages.portraitPainting,
  },
  {
    slug: 'garden',
    title: 'The Garden',
    description: 'A final breath of light, greenery and conversation beyond the rooms.',
    associatedObjects: ['Passport route reflection'],
    fact: 'Visitor information pending confirmation.',
    image: siteImages.gardenView,
  },
];
