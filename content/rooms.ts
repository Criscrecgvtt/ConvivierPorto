import { siteImages } from '@/lib/assets';

export const rooms = [
  {
    slug: 'entrance',
    title: 'The Entrance',
    description: 'A threshold where architecture slows the visitor before the archive begins.',
    associatedObjects: ['Carved Chair Study'],
    fact: 'The entrance frames the visitor experience as a passage from city noise into reading time.',
    image: siteImages.heroDoorway,
  },
  {
    slug: 'reading-rooms',
    title: 'The Reading Rooms',
    description: 'Places for close attention, annotation, listening and public interpretation.',
    associatedObjects: ['Dictionary Shelf Selection', 'Listening Archive Materials'],
    fact: 'Reading rooms connect quiet study, public interpretation and access to catalogues.',
    image: siteImages.readingRoom,
  },
  {
    slug: 'collections',
    title: 'The Collections',
    description: 'Books, reference works and objects arranged as a living cultural memory.',
    associatedObjects: ['Dictionary Shelf Selection'],
    fact: 'The collections combine books, archives, photographs and objects in a living research environment.',
    image: siteImages.collectionsShelves,
  },
  {
    slug: 'keepers-of-memory',
    title: 'Keepers of Memory',
    description: 'Portraits, photographs and traces that frame the house as remembered space.',
    associatedObjects: ['Domestic Memory Photographs'],
    fact: 'Portraits, manuscripts and photographs help turn biography into spatial memory.',
    image: siteImages.portraitPainting,
  },
  {
    slug: 'garden',
    title: 'The Garden',
    description: 'A final breath of light, greenery and conversation beyond the rooms.',
    associatedObjects: ['Passport route reflection'],
    fact: 'The garden gives the route a softer ending and a natural place for conversation.',
    image: siteImages.gardenView,
  },
];
