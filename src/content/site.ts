import { env } from '../lib/env';

/**
 * Site-wide facts — phone, email, identity. One place, everywhere.
 *
 * Values come from the validated env module rather than raw import.meta.env: a
 * blank var there (which `??` would happily pass through as an empty string)
 * would silently break canonicals, the sitemap and the form's _next URL.
 * Server-side only — never import this into a client <script>, as it pulls in zod.
 */
export const site = {
  name: 'Yanta',
  legalName: 'Yanta',
  tagline: 'PLANT HIRE · ROCKHAMPTON',
  url: env.PUBLIC_SITE_URL,
  phone: env.PUBLIC_PHONE,
  phoneDisplay: '0429 165 375',
  callName: 'Ian',
  email: 'admin@yanta.com.au',
  website: 'https://www.yanta.com.au',
  owners: 'Ian & Kate Mooring',
  address: {
    locality: 'Ridgelands',
    region: 'QLD',
    country: 'AU',
  },
  areaServed: [
    'Rockhampton', 'Gracemere', 'Yeppoon', 'Mount Morgan', 'Marlborough',
    'Gladstone', 'Emerald', 'Biloela', 'Central Queensland',
  ],
  footerBlurb:
    'Mining, industrial and construction services across Queensland and Australia. Family owned and operated. 30+ years’ experience.',
  footerCta:
    'For project opportunities, capability discussions or upcoming work packages, we welcome the opportunity to connect.',
  footerLegal:
    '© %YEAR% Yanta. All prices exclude GST unless stated. “From” prices are a starting point for a standard job and vary with access, ground conditions and distance.',
  nav: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Equipment', href: '/equipment' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;
