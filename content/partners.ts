export type Partner = {
  name: string;
  group: string;
  status: string;
  role: string;
  journey: string;
};

export const partners: Partner[] = [
  {
    name: 'Casa dos Livros',
    group: 'Anchor institution',
    status: 'Anchor',
    role: 'Starting point for the passport, programme, research access and house exploration.',
    journey: 'First stamp, guided visit, collection discovery and newsletter signup.',
  },
  {
    name: 'FLUP cultural and student channels',
    group: 'University network',
    status: 'Active channel',
    role: 'Connects students, Erasmus audiences, researchers and teachers to the programme.',
    journey: 'Welcome packs, class visits, archive labs and quiet reading sessions.',
  },
  {
    name: 'Livraria Lello',
    group: 'Bookstores and literary places',
    status: 'Route partner',
    role: 'A high-visibility literary stop for passport discovery and book-culture storytelling.',
    journey: 'Bookshop stamp, reading prompt and invitation back to Casa dos Livros collections.',
  },
  {
    name: 'Livraria Aberta',
    group: 'Bookstores and literary places',
    status: 'Neighbourhood partner',
    role: 'Independent bookshop energy for talks, reading lists and community circulation.',
    journey: 'Book club shelf, monthly recommendation and passport QR story.',
  },
  {
    name: 'Poetria',
    group: 'Bookstores and literary places',
    status: 'Poetry partner',
    role: 'A specialist poetry node for author conversations and Portuguese literature trails.',
    journey: 'Poetry route, event postcard and podcast listening cue.',
  },
  {
    name: 'Serralves',
    group: 'Museums and cultural venues',
    status: 'Cultural route partner',
    role: 'Connects garden, architecture, contemporary art and cultural movement across Porto.',
    journey: 'Route extension, seasonal exhibition connection and family audience bridge.',
  },
  {
    name: 'Casa da Música',
    group: 'Museums and cultural venues',
    status: 'Sound partner',
    role: 'Links sound, voice, listening culture and live podcast formats.',
    journey: 'Audio story stamp, live recording route and listening-room crossover.',
  },
  {
    name: 'Museu Nacional Soares dos Reis',
    group: 'Museums and cultural venues',
    status: 'Heritage partner',
    role: 'Builds a wider material-culture route for visitors interested in collections.',
    journey: 'Museum stamp, object-reading prompt and guided visit invitation.',
  },
  {
    name: 'The Passenger Hostel',
    group: 'Hotels and hostels',
    status: 'Distribution point',
    role: 'Introduces cultural tourists and international students to the passport.',
    journey: 'Pickup desk, QR card, first-visit invitation and bilingual map.',
  },
  {
    name: 'Gallery Hostel Porto',
    group: 'Hotels and hostels',
    status: 'Distribution point',
    role: 'Connects creative travellers to art pop-ups, cinema nights and reading routes.',
    journey: 'Passport pickup, event poster and neighbourhood cultural path.',
  },
  {
    name: 'Porto i/o and creative study spaces',
    group: 'Creative community',
    status: 'Community connector',
    role: 'Reaches freelancers, designers, writers and digital culture audiences.',
    journey: 'Archive Lab, podcast night and creative workshop table.',
  },
  {
    name: 'Local cafés near Campo Alegre',
    group: 'Neighbourhood network',
    status: 'Route connector',
    role: 'Creates gentle everyday visibility for events and passport pickup reminders.',
    journey: 'Coffee-table QR cards, reading-hour reminders and walking route cues.',
  },
];
