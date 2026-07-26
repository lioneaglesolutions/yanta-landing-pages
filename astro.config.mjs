// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.yanta.com.au',
  output: 'static',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  image: { formats: ['avif', 'webp'] },
  redirects: {
    // campaign shortlinks
    '/hire': '/plant-hire',
    '/excavator-hire': '/plant-hire',
    '/gps': '/gps-excavator-hire',
    '/poly-welding': '/poly-welder-hire',
    '/telehandler': '/telehandler-hire',
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
