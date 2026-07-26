/** Site-wide facts — phone, email, identity. One place, everywhere. */
export const site = {
  name: 'Yanta',
  legalName: 'Yanta',
  tagline: 'PLANT HIRE · ROCKHAMPTON',
  url: import.meta.env.PUBLIC_SITE_URL ?? 'https://hire.yanta.com.au',
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
    'Plant hire, civil and construction services across Central Queensland. Family owned and operated. 30+ years’ experience.',
  footerLegal:
    '© %YEAR% Yanta. All prices exclude GST unless stated. “From” prices are a starting point for a standard job and vary with access, ground conditions and distance.',
} as const;
