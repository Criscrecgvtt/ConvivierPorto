import { siteImages } from '@/lib/assets';
import type { StaticImageData } from 'next/image';

export type EventFrequency = 'one-off' | 'weekly' | 'monthly' | 'quarterly' | 'seasonal' | 'annual';
export type EventStatus = 'confirmed' | 'proposed' | 'coming-soon' | 'registration-open' | 'full' | 'cancelled' | 'past';
export type AudienceType = 'students' | 'erasmus' | 'researchers' | 'tourists' | 'local-community' | 'families' | 'schools' | 'creative-community';
export type EventCategory =
  | 'book-club'
  | 'talk'
  | 'workshop'
  | 'guided-visit'
  | 'exhibition'
  | 'cinema'
  | 'podcast-recording'
  | 'reading'
  | 'student-event'
  | 'research-event';

export type CulturalEvent = {
  slug: string;
  title: string;
  seriesSlug?: string;
  category: EventCategory;
  frequency: EventFrequency;
  status: EventStatus;
  proposed: boolean;
  date?: string;
  endDate?: string;
  time?: string;
  duration?: string;
  location: string;
  indoorOutdoor?: 'indoor' | 'outdoor' | 'hybrid';
  language: 'PT' | 'EN' | 'PT/EN';
  audiences: AudienceType[];
  capacity?: number;
  priceLabel?: string;
  registrationUrl?: string;
  shortDescription: string;
  description: string;
  image?: StaticImageData;
  relatedCollectionSlugs?: string[];
  relatedPublicationSlug?: string;
  relatedPodcastSlug?: string;
  relatedRoom?: string;
  passportStampEligible?: boolean;
  accessibilityNotes?: string[];
  institutionalVerification: 'verified' | 'pending' | 'proposed';
};

export type ProgrammeSeries = {
  slug: string;
  title: string;
  frequency: EventFrequency;
  purpose: string;
  audience: AudienceType[];
  language: 'PT' | 'EN' | 'PT/EN';
  proposedCapacity?: number;
  status: EventStatus;
  passportStampEligible: boolean;
  readingResources?: string[];
  previousSelections?: string[];
  operationalNotes: string[];
  sourceStatus: 'CONVIVER programme' | 'Casa dos Livros' | 'In development';
  image: StaticImageData;
};

export const programmeSeries: ProgrammeSeries[] = [
  {
    slug: 'book-club',
    title: 'Monthly Book Club',
    frequency: 'monthly',
    purpose: 'Build a recurring community around books connected with Portuguese culture and Casa dos Livros collections.',
    audience: ['students', 'local-community', 'researchers'],
    language: 'PT/EN',
    proposedCapacity: 22,
    status: 'registration-open',
    passportStampEligible: true,
    readingResources: ['Reading guide', 'Collection note', 'Optional podcast recap'],
    previousSelections: ['Selection pending institutional approval'],
    operationalNotes: ['Moderator required', 'Reading list requires collection review', 'Notify-me flow only; no registration stored yet'],
    sourceStatus: 'CONVIVER programme',
    image: siteImages.collectionsShelves,
  },
  {
    slug: 'quiet-reading-hour',
    title: 'Quiet Reading Hour',
    frequency: 'weekly',
    purpose: 'Offer a low-cost, gentle way for students and visitors to use the space and discover Casa dos Livros.',
    audience: ['students', 'erasmus', 'local-community'],
    language: 'PT/EN',
    proposedCapacity: 18,
    status: 'registration-open',
    passportStampEligible: true,
    operationalNotes: ['Seating plan pending', 'Noise policy needed', 'Themed reading tables optional'],
    sourceStatus: 'CONVIVER programme',
    image: siteImages.readingRoom,
  },
  {
    slug: 'author-research-talks',
    title: 'Author and Research Talks',
    frequency: 'monthly',
    purpose: 'Connect collections, publications, researchers and recordings through public talks.',
    audience: ['researchers', 'students', 'local-community'],
    language: 'PT/EN',
    proposedCapacity: 35,
    status: 'registration-open',
    passportStampEligible: true,
    operationalNotes: ['Speaker approval required', 'Recording consent required', 'Transcript workflow recommended'],
    sourceStatus: 'CONVIVER programme',
    image: siteImages.portraitPainting,
  },
  {
    slug: 'archive-lab',
    title: 'Archive and Collection Lab',
    frequency: 'quarterly',
    purpose: 'Teach how archives, metadata and cultural collections work through small Digital Humanities workshops.',
    audience: ['researchers', 'students', 'schools'],
    language: 'PT/EN',
    proposedCapacity: 14,
    status: 'registration-open',
    passportStampEligible: true,
    operationalNotes: ['Small-group format', 'Handling rules required', 'Research staff support needed'],
    sourceStatus: 'CONVIVER programme',
    image: siteImages.bookReadingPractice,
  },
  {
    slug: 'beyond-the-door',
    title: 'Guided Visit - Beyond the Door',
    frequency: 'monthly',
    purpose: 'Connect rooms, architecture, collections, the passport and Explore the House.',
    audience: ['tourists', 'students', 'erasmus', 'local-community'],
    language: 'PT/EN',
    proposedCapacity: 20,
    status: 'registration-open',
    passportStampEligible: true,
    operationalNotes: ['Route approval required', 'Accessibility route notes required'],
    sourceStatus: 'CONVIVER programme',
    image: siteImages.heroDoorway,
  },
  {
    slug: 'erasmus-evening',
    title: 'Erasmus Cultural Evening',
    frequency: 'seasonal',
    purpose: 'Introduce international students to Casa dos Livros through a bilingual visit, activity and passport onboarding.',
    audience: ['erasmus', 'students'],
    language: 'EN',
    proposedCapacity: 40,
    status: 'registration-open',
    passportStampEligible: true,
    operationalNotes: ['Coordinate with university welcome channels', 'Passport onboarding desk needed'],
    sourceStatus: 'CONVIVER programme',
    image: siteImages.readingRoom,
  },
  {
    slug: 'art-pop-up',
    title: 'Art Pop-Up',
    frequency: 'seasonal',
    purpose: 'Host temporary exhibitions by student or partner artists connected to archives, books or Portuguese culture.',
    audience: ['creative-community', 'students', 'local-community'],
    language: 'PT/EN',
    proposedCapacity: 45,
    status: 'registration-open',
    passportStampEligible: true,
    operationalNotes: ['Curatorial approval required', 'Installation plan required', 'QR story archive after closing'],
    sourceStatus: 'CONVIVER programme',
    image: siteImages.ornateCeiling,
  },
  {
    slug: 'summer-cinema',
    title: 'Summer Cinema',
    frequency: 'seasonal',
    purpose: 'Create a literature-to-film programme with discussion and a passport stamp.',
    audience: ['students', 'tourists', 'local-community', 'families'],
    language: 'PT/EN',
    proposedCapacity: 60,
    status: 'coming-soon',
    passportStampEligible: true,
    operationalNotes: ['Subject to licensing', 'Space approval required', 'Weather and indoor fallback required'],
    sourceStatus: 'CONVIVER programme',
    image: siteImages.gardenView,
  },
  {
    slug: 'live-podcast',
    title: 'Podcast Live Recording',
    frequency: 'quarterly',
    purpose: 'Connect episodes to books, collections, audience questions and transcripts.',
    audience: ['students', 'researchers', 'local-community'],
    language: 'PT/EN',
    proposedCapacity: 35,
    status: 'registration-open',
    passportStampEligible: true,
    operationalNotes: ['Audio consent required', 'Transcript publication workflow required'],
    sourceStatus: 'CONVIVER programme',
    image: siteImages.bookSoundMemory,
  },
];

export const events: CulturalEvent[] = [
  {
    slug: 'guided-visit-beyond-the-door',
    title: 'Guided Visit: Beyond the Door',
    seriesSlug: 'beyond-the-door',
    category: 'guided-visit',
    frequency: 'monthly',
    status: 'coming-soon',
    proposed: true,
    date: '2026-10-10',
    time: '10:30',
    duration: '75 min',
    location: 'Casa dos Livros',
    indoorOutdoor: 'indoor',
    language: 'PT/EN',
    audiences: ['tourists', 'students', 'erasmus', 'local-community'],
    capacity: 20,
    priceLabel: 'Pending institutional confirmation',
    shortDescription: 'A guided visit through thresholds, reading rooms and archival traces.',
    description: 'This visit connects rooms, collections and the passport route, giving newcomers a clear first experience of Casa dos Livros.',
    image: siteImages.heroDoorway,
    relatedCollectionSlugs: ['vasco-graca-moura'],
    relatedPodcastSlug: 'palacete-burmester-architecture-memory-reading',
    relatedRoom: 'The Entrance',
    passportStampEligible: true,
    accessibilityNotes: ['Accessible route details pending institutional confirmation'],
    institutionalVerification: 'proposed',
  },
  {
    slug: 'monthly-book-club-pilot',
    title: 'Monthly Book Club: Pilot Session',
    seriesSlug: 'book-club',
    category: 'book-club',
    frequency: 'monthly',
    status: 'registration-open',
    proposed: true,
    location: 'Casa dos Livros',
    indoorOutdoor: 'indoor',
    language: 'PT/EN',
    audiences: ['students', 'local-community'],
    capacity: 22,
    priceLabel: 'Proposed free or low-cost format',
    shortDescription: 'A recurring reading community connected to Casa dos Livros collections.',
    description: 'The book club includes a reading guide, moderated conversation and optional podcast recap, with selections that move between Portuguese literature, archives and bookshops.',
    image: siteImages.collectionsShelves,
    relatedCollectionSlugs: ['vasco-graca-moura', 'fundo-geral-casa-dos-livros'],
    relatedPodcastSlug: 'lives-hidden-inside-dictionaries',
    passportStampEligible: true,
    accessibilityNotes: ['Quiet seating and readable guide format recommended'],
    institutionalVerification: 'proposed',
  },
  {
    slug: 'archive-lab-metadata-workshop',
    title: 'Archive Lab: Reading Metadata',
    seriesSlug: 'archive-lab',
    category: 'workshop',
    frequency: 'quarterly',
    status: 'registration-open',
    proposed: true,
    location: 'Casa dos Livros',
    indoorOutdoor: 'indoor',
    language: 'PT/EN',
    audiences: ['researchers', 'students', 'schools'],
    capacity: 14,
    priceLabel: 'Pending institutional confirmation',
    shortDescription: 'A workshop on archives, catalogues and Digital Humanities interpretation.',
    description: 'Participants learn how archival description, metadata and catalogue access shape cultural memory.',
    image: siteImages.bookReadingPractice,
    relatedCollectionSlugs: ['julio-maria-dos-reis-pereira-saul-dias', 'herberto-helder'],
    relatedPodcastSlug: 'digital-humanities-make-heritage-visible',
    passportStampEligible: true,
    accessibilityNotes: ['Small-group workshop; handling rules required'],
    institutionalVerification: 'proposed',
  },
  {
    slug: 'art-pop-up-opening',
    title: 'Art Pop-Up Opening',
    seriesSlug: 'art-pop-up',
    category: 'exhibition',
    frequency: 'seasonal',
    status: 'registration-open',
    proposed: true,
    location: 'Casa dos Livros',
    indoorOutdoor: 'indoor',
    language: 'PT/EN',
    audiences: ['creative-community', 'students', 'local-community'],
    capacity: 45,
    priceLabel: 'Pending institutional confirmation',
    shortDescription: 'A temporary exhibition format connected to books, archives and QR stories.',
    description: 'A seasonal pop-up invites artists and students to interpret collections through installations, printed guides and a digital archive after closing.',
    image: siteImages.ornateCeiling,
    relatedCollectionSlugs: ['fundo-geral-casa-dos-livros'],
    passportStampEligible: true,
    institutionalVerification: 'proposed',
  },
  {
    slug: 'summer-cinema-literature-film',
    title: 'Summer Cinema: Literature to Film',
    seriesSlug: 'summer-cinema',
    category: 'cinema',
    frequency: 'seasonal',
    status: 'registration-open',
    proposed: true,
    location: 'Casa dos Livros or approved outdoor institutional space',
    indoorOutdoor: 'hybrid',
    language: 'PT/EN',
    audiences: ['students', 'tourists', 'local-community', 'families'],
    capacity: 60,
    priceLabel: 'Subject to institutional approval',
    shortDescription: 'A seasonal cinema programme connecting literature, adaptation and outdoor discussion.',
    description: 'A literature-to-film programme with discussion and passport eligibility, built around licensing, captions, weather planning and a warm indoor fallback.',
    image: siteImages.gardenView,
    relatedCollectionSlugs: ['vasco-graca-moura'],
    passportStampEligible: true,
    accessibilityNotes: ['Captions and weather fallback required'],
    institutionalVerification: 'proposed',
  },
  {
    slug: 'live-podcast-dictionaries',
    title: 'Live Podcast Recording: The Lives Hidden Inside Dictionaries',
    seriesSlug: 'live-podcast',
    category: 'podcast-recording',
    frequency: 'quarterly',
    status: 'coming-soon',
    proposed: true,
    date: '2026-11-21',
    time: '18:30',
    location: 'Casa dos Livros',
    indoorOutdoor: 'indoor',
    language: 'PT/EN',
    audiences: ['students', 'researchers', 'local-community'],
    capacity: 35,
    priceLabel: 'Pending institutional confirmation',
    shortDescription: 'A public recording for the Voices of the House season.',
    description: 'A pilot format for connecting scholarship, audio and public conversation around reference collections.',
    image: siteImages.collectionsShelves,
    relatedCollectionSlugs: ['fundo-geral-casa-dos-livros'],
    relatedPodcastSlug: 'lives-hidden-inside-dictionaries',
    passportStampEligible: true,
    institutionalVerification: 'proposed',
  },
  {
    slug: 'erasmus-evening-casa-dos-livros',
    title: 'Erasmus Evening at Casa dos Livros',
    seriesSlug: 'erasmus-evening',
    category: 'student-event',
    frequency: 'seasonal',
    status: 'coming-soon',
    proposed: true,
    date: '2026-12-05',
    time: '18:00',
    location: 'Casa dos Livros',
    indoorOutdoor: 'indoor',
    language: 'EN',
    audiences: ['erasmus', 'students'],
    capacity: 40,
    priceLabel: 'Proposed free or low-cost format',
    shortDescription: 'An evening for international students discovering Porto through culture.',
    description: 'A gathering linking Casa dos Livros, the Porto Cultural Passport and student cultural participation.',
    image: siteImages.readingRoom,
    relatedCollectionSlugs: ['vasco-graca-moura'],
    passportStampEligible: true,
    institutionalVerification: 'proposed',
  },
];
