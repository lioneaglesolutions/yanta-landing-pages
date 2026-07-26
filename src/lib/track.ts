/**
 * The single conversion helper. Components call conv(), never the platforms directly.
 * Safe when a tag isn't installed — every call is guarded.
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

const ADS_ID = import.meta.env.PUBLIC_GOOGLE_ADS_ID;
const LEAD_LABEL = import.meta.env.PUBLIC_GOOGLE_ADS_LEAD_LABEL;
const CALL_LABEL = import.meta.env.PUBLIC_GOOGLE_ADS_CALL_LABEL;

export function conv(kind: 'lead' | 'call', extra?: Record<string, unknown>): void {
  // Meta: Lead / Contact
  try {
    window.fbq?.('track', kind === 'call' ? 'Contact' : 'Lead', extra ?? {});
  } catch {
    /* tag not installed */
  }

  // Google Ads conversion + GA4 event
  try {
    if (window.gtag) {
      const label = kind === 'call' ? CALL_LABEL : LEAD_LABEL;
      if (ADS_ID && label) {
        window.gtag('event', 'conversion', { send_to: `${ADS_ID}/${label}` });
      }
      window.gtag('event', kind === 'call' ? 'phone_call_click' : 'generate_lead', extra ?? {});
    }
  } catch {
    /* tag not installed */
  }
}
