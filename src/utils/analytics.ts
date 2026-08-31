export const analyticsEvents = [
  'lead_click_diagnostic',
  'lead_start_diagnostic',
  'lead_submit_diagnostic',
  'lead_start_devis',
  'lead_submit_devis',
  'lead_start_contact',
  'lead_submit_contact',
  'lead_click_whatsapp',
  'lead_click_email',
  'lead_click_phone',
  'stripe_payment_link_click',
] as const;

export type AnalyticsEvent = (typeof analyticsEvents)[number];

export interface AnalyticsProperties {
  form?: 'diagnostic' | 'devis' | 'contact';
  location?: string;
  page_type?: 'home' | 'article' | 'guide' | 'pricing' | 'portfolio' | 'form' | 'service' | 'other';
  page_path?: string;
  cta?: 'diagnostic' | 'whatsapp' | 'email' | 'phone' | 'stripe';
  cta_variant?: string;
  offer?: 'serenite' | 'visibilite';
}

type Umami = {
  track: (event: string, properties?: Record<string, string>) => void;
};

declare global {
  interface Window {
    umami?: Umami;
    nicodevAnalytics?: {
      track: (event: AnalyticsEvent, properties?: AnalyticsProperties, onceKey?: string) => boolean;
    };
  }
}

const allowedEvents = new Set<string>(analyticsEvents);
const sentOnceKeys = new Set<string>();
const allowedPropertyKeys = new Set<keyof AnalyticsProperties>([
  'form',
  'location',
  'page_type',
  'page_path',
  'cta',
  'cta_variant',
  'offer',
]);

function cleanValue(key: keyof AnalyticsProperties, value: string): string | undefined {
  const cleaned = value.trim().slice(0, 80);
  if (!cleaned) return undefined;
  if (key === 'page_path') {
    // Never forward query strings or hashes: they can contain prospect data.
    return cleaned.startsWith('/') ? cleaned.split(/[?#]/, 1)[0] : undefined;
  }
  return /^[a-z0-9_\-/]+$/i.test(cleaned) ? cleaned : undefined;
}

function sanitize(properties: AnalyticsProperties): Record<string, string> | undefined {
  const safe: Record<string, string> = {};
  for (const [rawKey, rawValue] of Object.entries(properties)) {
    const key = rawKey as keyof AnalyticsProperties;
    if (!allowedPropertyKeys.has(key) || typeof rawValue !== 'string') continue;
    const value = cleanValue(key, rawValue);
    if (value) safe[key] = value;
  }
  return Object.keys(safe).length ? safe : undefined;
}

function inferPageType(pathname: string): AnalyticsProperties['page_type'] {
  if (pathname === '/') return 'home';
  if (pathname === '/tarifs/' || pathname === '/tarifs') return 'pricing';
  if (pathname === '/portfolio/' || pathname === '/portfolio') return 'portfolio';
  if (/^\/(diagnostic-gratuit|devis|contact)\/?$/.test(pathname)) return 'form';
  if (pathname.startsWith('/blog/')) {
    return pathname.includes('guide-') || pathname.includes('installer-') ? 'guide' : 'article';
  }
  if (/^\/(creation-site|site-internet|referencement|webdesigner)/.test(pathname)) return 'service';
  return 'other';
}

export function track(
  event: AnalyticsEvent,
  properties: AnalyticsProperties = {},
  onceKey?: string,
): boolean {
  if (typeof window === 'undefined' || !allowedEvents.has(event)) return false;
  if (onceKey && sentOnceKeys.has(onceKey)) return false;

  try {
    if (!window.umami || typeof window.umami.track !== 'function') return false;
    window.umami.track(event, sanitize(properties));
    if (onceKey) sentOnceKeys.add(onceKey);
    return true;
  } catch {
    // Analytics must never block a form submission or navigation.
    return false;
  }
}

function initClickTracking(): void {
  if (document.documentElement.dataset.analyticsBound === 'true') return;
  document.documentElement.dataset.analyticsBound = 'true';

  document.addEventListener('click', (event) => {
    const link =
      event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a') : null;
    if (!link) return;

    let analyticsEvent = link.dataset.analyticsEvent as AnalyticsEvent | undefined;
    let cta = link.dataset.analyticsCta as AnalyticsProperties['cta'] | undefined;
    const href = link.getAttribute('href') ?? '';

    // Email and phone links can be generated at runtime, so classify them centrally.
    if (!analyticsEvent && href.startsWith('mailto:')) {
      analyticsEvent = 'lead_click_email';
      cta = 'email';
    } else if (!analyticsEvent && href.startsWith('tel:')) {
      analyticsEvent = 'lead_click_phone';
      cta = 'phone';
    }
    if (!analyticsEvent || !allowedEvents.has(analyticsEvent)) return;

    track(analyticsEvent, {
      location: link.dataset.analyticsLocation || 'content',
      page_type: inferPageType(window.location.pathname),
      page_path: window.location.pathname,
      cta,
      cta_variant: link.dataset.analyticsVariant,
      offer: link.dataset.analyticsOffer as AnalyticsProperties['offer'] | undefined,
    });
  });
}

export function initAnalytics(): void {
  if (typeof window === 'undefined') return;
  window.nicodevAnalytics = { track };
  initClickTracking();
}
