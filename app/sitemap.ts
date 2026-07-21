import type { MetadataRoute } from 'next';
import { bookItems } from '@/content/books';
import { events } from '@/content/events';
import { officialCollections } from '@/content/official';
import { podcastEpisodes } from '@/content/podcast';
import { siteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/about/casa-dos-livros',
    '/about/mission',
    '/about/team',
    '/about/palacete-burmester',
    '/collections',
    '/research-tools',
    '/catalogues',
    '/programme',
    '/events',
    '/exhibitions',
    '/publications',
    '/explore',
    '/explore-the-house',
    '/stories',
    '/podcast',
    '/passport',
    '/visit',
    '/partners',
    '/contact',
  ];
  const dynamicRoutes = [
    ...officialCollections.map((item) => `/collections/${item.slug}`),
    ...bookItems.map((item) => `/collections/${item.slug}`),
    ...events.map((event) => `/events/${event.slug}`),
    ...podcastEpisodes.map((episode) => `/podcast/${episode.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));
}
