/**
 * Attribution capture: on first load read utm_* / gclid / fbclid, persist to
 * sessionStorage, and expose the combined string for the hidden `source` field —
 * so the lead email says which ad produced which lead.
 */

const KEY = 'yanta_source';

export function captureAttribution(): void {
  try {
    if (sessionStorage.getItem(KEY)) return;
    const p = new URLSearchParams(location.search);
    const parts = [
      p.get('utm_source'),
      p.get('utm_medium'),
      p.get('utm_campaign'),
      p.get('utm_term'),
      p.get('utm_content'),
      p.get('gclid') ? `gclid:${p.get('gclid')}` : '',
      p.get('fbclid') ? 'fb-click' : '',
    ].filter(Boolean);
    if (parts.length > 0) sessionStorage.setItem(KEY, parts.join(' | '));
  } catch {
    /* storage unavailable — fall through to 'direct' */
  }
}

export function getSource(): string {
  try {
    return sessionStorage.getItem(KEY) ?? 'direct';
  } catch {
    return 'direct';
  }
}
