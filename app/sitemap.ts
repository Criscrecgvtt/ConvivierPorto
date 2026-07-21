import type { MetadataRoute } from 'next';
import { bookItems } from '@/content/books';
import { events } from '@/content/events';
import { podcastEpisodes } from '@/content/podcast';
import { siteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/explore', '/collections', '/passport', '/podcast', '/events', '/visit', '/about', '/partners'];
  const dynamicRoutes = [
    ...bookItems.map((item) => `/collections/${item.slug}`),
    ...events.map((event) => `/events/${event.slug}`),
    ...podcastEpisodes.map((episode) => `/podcast/${episode.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));
}
