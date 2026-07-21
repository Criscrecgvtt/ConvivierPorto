type AnalyticsEvent =
  | 'hero_enter_house'
  | 'passport_start'
  | 'passport_demo_stamp'
  | 'collection_open'
  | 'book_search'
  | 'event_open'
  | 'event_add_calendar'
  | 'podcast_episode_open'
  | 'podcast_play'
  | 'visit_cta'
  | 'partner_cta';

export function trackEvent(event: AnalyticsEvent, payload?: Record<string, string | number | boolean>) {
  if (typeof window === 'undefined') return;

  if (process.env.NODE_ENV === 'development') {
    console.info('[analytics]', event, payload ?? {});
  }
}
