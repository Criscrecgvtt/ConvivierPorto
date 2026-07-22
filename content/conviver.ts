import { officialCollections } from '@/content/official';

export const experienceSpaces = [
  {
    slug: 'reading-salon',
    title: 'Reading Salon',
    purpose: 'Book club, readings and quiet study.',
    audiences: ['students', 'local community', 'researchers'],
    activities: ['Monthly Book Club', 'Quiet Reading Hour', 'small readings'],
    needs: ['seating plan', 'moderation', 'reading guides'],
    relatedEvents: ['book-club', 'quiet-reading-hour'],
    relatedCollections: ['vasco-graca-moura', 'fundo-geral-casa-dos-livros'],
  },
  {
    slug: 'pop-up-gallery',
    title: 'Pop-Up Gallery',
    purpose: 'Temporary exhibitions and visual interpretations of collections.',
    audiences: ['creative community', 'students', 'visitors'],
    activities: ['Art Pop-Up', 'QR stories', 'digital archive after closing'],
    needs: ['curatorial approval', 'installation support', 'rights review'],
    relatedEvents: ['art-pop-up'],
    relatedCollections: ['fundo-geral-casa-dos-livros'],
  },
  {
    slug: 'podcast-corner',
    title: 'Podcast Corner',
    purpose: 'Interviews, oral histories and small live recordings.',
    audiences: ['researchers', 'students', 'local community'],
    activities: ['live recordings', 'oral-history sessions', 'episode Q&A'],
    needs: ['audio consent', 'quiet recording setup', 'transcript workflow'],
    relatedEvents: ['live-podcast'],
    relatedCollections: ['vasco-graca-moura'],
  },
  {
    slug: 'passport-desk',
    title: 'Passport Desk',
    purpose: 'Passport collection, stamps, route explanation and visitor support.',
    audiences: ['tourists', 'Erasmus students', 'residents'],
    activities: ['passport pickup', 'stamp guidance', 'QR story onboarding'],
    needs: ['printed passports', 'stamp process', 'visitor support script'],
    relatedEvents: ['beyond-the-door', 'erasmus-evening'],
    relatedCollections: ['vasco-graca-moura'],
  },
  {
    slug: 'creative-workshop-table',
    title: 'Creative Workshop Table',
    purpose: 'Writing, book arts, metadata and educational workshops.',
    audiences: ['schools', 'students', 'creative community'],
    activities: ['Archive Lab', 'book arts', 'metadata exercises'],
    needs: ['materials', 'handling rules', 'facilitator'],
    relatedEvents: ['archive-lab'],
    relatedCollections: ['julio-maria-dos-reis-pereira-saul-dias'],
  },
  {
    slug: 'event-garden-cinema-area',
    title: 'Event Garden / Cinema Area',
    purpose: 'Seasonal cinema, outdoor readings and small cultural events.',
    audiences: ['families', 'tourists', 'students'],
    activities: ['Summer Cinema', 'outdoor readings', 'seasonal gatherings'],
    needs: ['licensing', 'weather fallback', 'space approval'],
    relatedEvents: ['summer-cinema'],
    relatedCollections: ['vasco-graca-moura'],
  },
  {
    slug: 'research-archive-hub',
    title: 'Research & Archive Hub',
    purpose: 'Research support, catalogues and collection interpretation.',
    audiences: ['researchers', 'students'],
    activities: ['catalogue orientation', 'archive lab', 'research assistance'],
    needs: ['staff time', 'catalogue access', 'appointment process'],
    relatedEvents: ['archive-lab', 'author-research-talks'],
    relatedCollections: officialCollections.slice(0, 4).map((collection) => collection.slug),
  },
];

export const ecosystemGroups = [
  {
    title: 'Institutional Knowledge',
    items: [
      ['Collections', '/collections'],
      ['Catalogues', '/catalogues'],
      ['Publications', '/publications'],
      ['Research', '/research-tools'],
      ['Mission', '/about/mission'],
      ['Palacete Burmester', '/about/palacete-burmester'],
    ],
  },
  {
    title: 'Digital Experience',
    items: [
      ['Redesigned website', '/'],
      ['Explore the House', '/explore-the-house'],
      ['Podcast', '/podcast'],
      ['QR stories', '/stories'],
      ['Newsletter', '/contact'],
    ],
  },
  {
    title: 'Physical Programme',
    items: [
      ['Book Club', '/programme/series/book-club'],
      ['Quiet Reading', '/programme/series/quiet-reading-hour'],
      ['Talks', '/programme/series/author-research-talks'],
      ['Workshops', '/programme/series/archive-lab'],
      ['Art Pop-Ups', '/programme/series/art-pop-up'],
      ['Cinema', '/programme/series/summer-cinema'],
    ],
  },
  {
    title: 'Porto Cultural Passport',
    items: [
      ['Route', '/passport'],
      ['Stamps', '/passport'],
      ['Partner network', '/partners'],
      ['Rewards', '/passport'],
      ['Visitor progress', '/passport'],
    ],
  },
  {
    title: 'Community',
    items: [
      ['Students', '/programme?audience=students'],
      ['Erasmus', '/programme?audience=erasmus'],
      ['Researchers', '/research-tools'],
      ['Tourists', '/visit'],
      ['Residents', '/programme'],
      ['Schools', '/programme?audience=schools'],
    ],
  },
  {
    title: 'Measurement',
    items: [
      ['Website analytics', '/project/strategy'],
      ['Event occupancy', '/project/strategy'],
      ['QR scans', '/project/strategy'],
      ['Passport conversion', '/project/strategy'],
      ['Repeat attendance', '/project/strategy'],
      ['Satisfaction', '/project/strategy'],
    ],
  },
];

export const audienceJourneys = [
  {
    slug: 'student',
    title: 'I am a student',
    need: 'A welcoming low-cost cultural place to read, meet and discover collections.',
    priority: ['Quiet Reading Hour', 'Monthly Book Club', 'Archive Lab', 'Passport'],
  },
  {
    slug: 'tourist',
    title: 'I am visiting Porto',
    need: 'A clear cultural route and bilingual introduction to the house.',
    priority: ['Visit information', 'Explore the House', 'Guided Visit', 'Passport route'],
  },
  {
    slug: 'researcher',
    title: 'I am a researcher',
    need: 'Direct access to catalogues, inventories, publications and contact support.',
    priority: ['Collections', 'Research tools', 'Archive Lab', 'Publications'],
  },
  {
    slug: 'resident',
    title: 'I live in Porto',
    need: 'Recurring cultural reasons to return.',
    priority: ['Book Club', 'Talks', 'Art Pop-Up', 'Summer Cinema'],
  },
  {
    slug: 'school',
    title: 'I am visiting with a school/group',
    need: 'Structured educational activities and clear visit planning.',
    priority: ['Archive Lab', 'Guided Visit', 'Creative Workshop Table', 'Contact'],
  },
];

export const passportAudienceModules = [
  {
    audience: 'International and Erasmus students',
    need: 'Fast cultural orientation and a reason to enter university heritage spaces.',
    channel: 'University welcome packs, Erasmus channels and campus locations.',
    hook: 'First stamp at Casa dos Livros plus bilingual welcome evening.',
    retention: 'Book club, quiet reading and newsletter invitations.',
  },
  {
    audience: 'Cultural tourists and expats',
    need: 'A route that makes Porto literary culture easy to discover.',
    channel: 'Selected hotels, hostels, tourism points, event posters and QR cards.',
    hook: 'A physical passport that turns visits into a collectable trail.',
    retention: 'Rewards, partner route and upcoming guided visits.',
  },
  {
    audience: 'Local university students',
    need: 'Low-cost cultural programming and study-friendly discovery.',
    channel: 'Campus locations, classes, social media and student associations.',
    hook: 'Quiet Reading Hour and passport stamp eligibility.',
    retention: 'Recurring series and event reminders.',
  },
  {
    audience: 'Porto residents',
    need: 'Recurring cultural reasons to revisit a familiar institution.',
    channel: 'Newsletter, local partners, municipal culture listings and posters.',
    hook: 'Seasonal art pop-ups, cinema and talks.',
    retention: 'Repeat attendance and passport completion.',
  },
  {
    audience: 'Researchers and literary audiences',
    need: 'Direct connection between collections, catalogues and public interpretation.',
    channel: 'Academic networks, FLUP channels and catalogue pages.',
    hook: 'Archive Lab and research talks connected to official tools.',
    retention: 'Publications, transcripts and research support contact.',
  },
];

export const kpiGroups: Array<[string, string[]]> = [
  ['Awareness', ['reach', 'direct/organic traffic', 'referral traffic', 'partner mentions']],
  ['Engagement', ['collection page time', 'podcast opens', 'event saves', 'shares']],
  ['Conversion', ['event registrations', 'QR scans', 'passport first stamp', 'visit CTA']],
  ['Retention', ['repeat event attendance', 'newsletter signup', 'passport completion', 'return visits']],
];

export const planningTargets: Array<[string, string[]]> = [
  ['First 3 months', ['500 followers', '300 monthly website visitors', '150 QR scans', '3 pilot events', '70% average event occupancy', '100 newsletter subscribers', '50 passport activations']],
  ['First 12 months', ['2,000 followers', '1,500 monthly website visitors', '1,000 QR scans', '+20% physical visits', '8 active partners', '400 passport completions']],
];
