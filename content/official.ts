import { siteImages } from '@/lib/assets';

export const officialSourceBase = 'https://wp.letras.up.pt/casadoslivros/en';

export const officialPages = {
  presentation: `${officialSourceBase}/presentation/`,
  mission: `${officialSourceBase}/mission/`,
  collections: `${officialSourceBase}/collections/`,
  contacts: `${officialSourceBase}/contacts/`,
  building: `${officialSourceBase}/building/`,
  team: `${officialSourceBase}/team/`,
  researchTools: `${officialSourceBase}/research-tools/`,
  libraryCatalogues: `${officialSourceBase}/library-catalogues/`,
  archivalInventories: `${officialSourceBase}/archival-inventories/`,
  thematicCatalogues: `${officialSourceBase}/digital-thematic-catalogues/`,
  exhibitionCatalogues: `${officialSourceBase}/bibliographic-exhibition-catalogues/`,
  publications: `${officialSourceBase}/publications/`,
  newsletter: `${officialSourceBase}/newsletter/`,
};

export const officialInstitution = {
  name: 'Casa dos Livros',
  fullName: 'Casa dos Livros - Centro de Estudos da Cultura em Portugal da Universidade do Porto',
  parent: 'Faculdade de Letras da Universidade do Porto',
  verifiedLabel: 'Casa dos Livros',
  summary:
    'Casa dos Livros is the public-facing home of the Centro de Estudos da Cultura em Portugal da Universidade do Porto, created within the Faculdade de Letras after the Vasco Graca Moura documentary collection was entrusted to the Faculty.',
  origin:
    'The name honours Vasco Graca Moura and reinterprets the expression he used for his own place of work and creation at Eira do Catavento, in Almeirim.',
  sourceUrl: officialPages.presentation,
};

export const missionPillars = [
  {
    title: 'Research and interdisciplinary study',
    text: 'Support the study and dissemination of legacies in articulation with FLUP research units, encouraging multidisciplinary perspectives.',
  },
  {
    title: 'Access and communication',
    text: 'Promote broad access, communication and cultural value through exhibitions, courses, conversation gatherings, guided visits and related activities.',
  },
  {
    title: 'Collaboration with cultural institutions',
    text: 'Support initiatives with city and regional entities that promote Portuguese literature within the wider culture of Portugal.',
  },
  {
    title: 'Welcoming national and international audiences',
    text: 'Welcome Portuguese and international audiences interested in the collections and multiple dimensions of culture in Portugal.',
  },
];

export const officialContacts = {
  address: 'Palacete Burmester - Rua do Campo Alegre, 1055, 4150-181 Porto',
  buildingHours: 'Monday to Friday, 10:30-12:30 and 14:30-17:30. Closed on holidays.',
  readingRoomHours: 'Monday to Friday, 14:30-17:30. Closed on holidays.',
  telephone: '(+351) 226 077 191',
  email: 'casadoslivros@letras.up.pt',
  url: officialSourceBase,
  sourceUrl: officialPages.contacts,
};

export type OfficialCollection = {
  slug: string;
  name: string;
  lifespan?: string;
  role?: string;
  summary: string;
  format: string;
  processingStatus: string;
  accessStatus: string;
  catalogueStatus: string;
  sourceUrl: string;
};

export const officialCollections: OfficialCollection[] = [
  {
    slug: 'vasco-graca-moura',
    name: 'Vasco Graca Moura',
    lifespan: '1942-2014',
    role: 'Writer, translator and cultural figure',
    summary: 'Foundational documentary legacy of books, journals, manuscripts, documentation in multiple supports and objects.',
    format: 'Library, archive and objects',
    processingStatus: 'Partly catalogued; technical treatment continues',
    accessStatus: 'Consult official catalogue and access conditions',
    catalogueStatus: 'Library catalogue available',
    sourceUrl: officialPages.collections,
  },
  {
    slug: 'eugenio-de-andrade',
    name: 'Eugenio de Andrade',
    lifespan: '1923-2005',
    role: 'Poet',
    summary: 'Collection deposited by Camara Municipal do Porto under a loan agreement.',
    format: 'Library and documentary collection',
    processingStatus: 'Technical treatment in progress',
    accessStatus: 'Consult official catalogue and access conditions',
    catalogueStatus: 'Library catalogue available',
    sourceUrl: officialPages.collections,
  },
  {
    slug: 'julio-maria-dos-reis-pereira-saul-dias',
    name: 'Julio Maria dos Reis Pereira / Saul Dias',
    lifespan: '1902-1983',
    role: 'Poet and painter',
    summary: 'Collection associated with the poet and painter, brother of Jose Regio and linked to presenca.',
    format: 'Manuscripts, archive and library materials',
    processingStatus: 'Official inventory/catalogue tools available for parts of the collection',
    accessStatus: 'Some archival consultation is conditioned and requires authorisation',
    catalogueStatus: 'Library catalogue and archive inventory available',
    sourceUrl: officialPages.collections,
  },
  ...[
    'Ana Luisa Amaral',
    'Albano Martins',
    'Herberto Helder',
    'Manuel Antonio Pina',
    'Maria Virginia Monteiro',
    'Oscar Lopes',
    'Antonio Cortesao',
    'Humberto Baquero Moreno',
    'Francisco Laranjo',
    'Paulo Tunhas',
    'Fundo Geral | Casa dos Livros',
  ].map((name) => ({
    slug: name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
    name,
    summary: 'Official collection listed by Casa dos Livros. Detailed description should be synchronised from the institutional catalogue workflow.',
    format: 'Bibliographic and/or documentary collection',
    processingStatus: 'Collection profile in development',
    accessStatus: 'Consult Casa dos Livros for current access conditions',
    catalogueStatus: 'See official catalogue and research tools',
    sourceUrl: officialPages.collections,
  })),
];

export const researchTools = [
  {
    title: 'Library catalogues',
    description: 'Catalogues for the bibliographic collections preserved at Casa dos Livros.',
    href: officialPages.libraryCatalogues,
    status: 'Research access',
  },
  {
    title: 'Archival inventories',
    description: 'Inventories for archival fonds that completed technical treatment. Consultation may be conditioned and require authorisation.',
    href: officialPages.archivalInventories,
    status: 'Research access',
  },
  {
    title: 'Digital thematic catalogues',
    description: 'Digital study catalogues for specific themes inside the collections.',
    href: officialPages.thematicCatalogues,
    status: 'Research access',
  },
  {
    title: 'Bibliographic exhibition catalogues',
    description: 'Digital guides and catalogues preserving the memory of temporary bibliographic exhibitions.',
    href: officialPages.exhibitionCatalogues,
    status: 'Research access',
  },
];

export const officialPublication = {
  title: 'A Espessura do dia: novos poemas inéditos e novas traduções de Vasco Graça Moura',
  details:
    'Moura, Vasco Graça · Porto: Universidade do Porto, Faculdade de Letras, Casa dos Livros; Modo de Ler, 2025 · 90 p. · Coleção da Casa, 3.',
  isbn: '978-989-9193-53-6',
  price: '12,50 euros; 25,00 euros special numbered and signed edition',
  availability: 'In stock',
  purchase:
    'Available through the FLUP Publications Unit via upub@letras.up.pt or in person at Casa dos Livros.',
  sourceUrl: officialPages.publications,
  image: siteImages.collectionsShelves,
};

export const buildingHistory = {
  title: 'Palacete Burmester',
  summary:
    'The Palacete Burmester stands in the Campo Alegre area, connected to the former Quinta Grande, acquired in 1802 by Jean Pierre Salabert and later divided into several properties.',
  note:
    'Its history links Quinta do Salabert, Casa Andresen and neighbouring Campo Alegre estates before the building was restored as a literary and academic house.',
  sourceUrl: officialPages.building,
};

export const officialTeam = [
  { name: 'Professor Mário Jorge Barroca, PhD', role: 'Professor responsável' },
  { name: 'Filipa Manuela Pereira Gomes', role: 'Equipa Técnica' },
  { name: 'Patrícia Alexandra Lopes Alves', role: 'Equipa Técnica' },
  { name: 'Pedro Nuno Costa Sampaio', role: 'Equipa Técnica' },
];
