/**
 * Analytics utility — thin wrapper around window.gtag (Google Analytics GA4).
 *
 * Setup: add your GA4 Measurement ID to index.html where indicated, or swap
 * the gtag calls below for any other provider (Plausible, PostHog, etc.).
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

export function trackPageView(path: string): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "page_view", { page_path: path });
  }
}
