/** Site-wide facts — phone, email, identity. One place, everywhere. */
export const site = {
  name: 'Yanta',
  legalName: 'Yanta',
  tagline: 'PLANT HIRE · ROCKHAMPTON',
  url: import.meta.env.PUBLIC_SITE_URL ?? 'https://www.yanta.com.au',
  phone: import.meta.env.PUBLIC_PHONE ?? '+61429165375',
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
    { label: 'Plant Hire', href: '/plant-hire' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;
