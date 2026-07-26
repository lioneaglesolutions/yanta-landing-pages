// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hire.yanta.com.au',
  output: 'static',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  image: { formats: ['avif', 'webp'] },
  redirects: {
    '/hire': '/',
    '/excavator-hire': '/',
    '/gps': '/gps-excavator-hire',
    '/poly-welding': '/poly-welder-hire',
    '/telehandler': '/telehandler-hire',
  },
});
