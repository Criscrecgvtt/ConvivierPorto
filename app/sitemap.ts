import type { MetadataRoute } from 'next';
import { bookItems } from '@/content/books';
import { events } from '@/content/events';
import { programmeSeries } from '@/content/events';
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
    '/programme/events',
    '/programme/calendar',
    '/programme/exhibitions',
    '/events',
    '/exhibitions',
    '/publications',
    '/explore',
    '/explore-the-house',
    '/stories',
    '/podcast',
    '/passport',
    '/conviver/spaces',
    '/conviver/ecosystem',
    '/project/strategy',
    '/visit',
    '/partners',
    '/contact',
  ];
  const dynamicRoutes = [
    ...officialCollections.map((item) => `/collections/${item.slug}`),
    ...bookItems.map((item) => `/collections/${item.slug}`),
    ...events.map((event) => `/events/${event.slug}`),
    ...events.map((event) => `/programme/events/${event.slug}`),
    ...programmeSeries.map((series) => `/programme/series/${series.slug}`),
    ...podcastEpisodes.map((episode) => `/podcast/${episode.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));
}
