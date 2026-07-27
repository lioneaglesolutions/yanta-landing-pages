// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.yanta.com.au',
  output: 'static',
  // No sitemap integration: it always emits an index plus numbered child files,
  // which is overkill for ~20 URLs. src/pages/sitemap.xml.ts builds one flat
  // sitemap at the conventional path instead, and handles the /thanks exclusion.
  integrations: [],
  vite: { plugins: [tailwindcss()] },
  image: { formats: ['avif', 'webp'] },
  redirects: {
    // Campaign shortlinks. The ad landing pages they used to point at are drafted
    // (src/pages/_drafts), so these go to the nearest live page instead of 404ing.
    // Restore the original targets when those pages are published again.
    '/hire': '/equipment',
    '/excavator-hire': '/equipment',
    '/gps': '/equipment',
    '/telehandler': '/equipment',
    '/poly-welding': '/services',
    // old Wix URLs → new structure
    '/copy-of-recent-projects': '/projects',
    '/cracowgoldmine': '/projects/cracow-tailings-dam',
    '/cracow-gold-mine1': '/projects/cracow-pit-dewatering',
    '/cracow-gold-mine2': '/projects/cracow-tailings-lift',
    '/cracow-gold-mine3': '/projects/cracow-bioremediation-pits',
    '/highintensitygrinding': '/projects/cracow-hig-mill',
    '/tsf4cell1cell2raise': '/projects/talison-bgm-liner',
    '/tsf4cell1cell2raise-1': '/projects/talison-hdpe-pipeline',
    '/tsf4cell1cell2raise1265mrl': '/projects/talison-bgm-liner-1265mrl',
    '/tecnoduebushranger630': '/equipment/bushranger-630',
    '/kubotaposi-track': '/equipment/kubota-posi-track',
    '/excavator-25t': '/equipment/excavator-25t',
    '/zw180loader': '/equipment/zw180-loader',
    '/dpu6555': '/equipment/dpu6555',
  },
});
