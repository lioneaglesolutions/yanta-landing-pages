import type { APIRoute } from 'astro';
import { site } from '../content/site';
import { equipment } from '../content/corporate/equipment';
import { projects } from '../content/corporate/projects';

/**
 * One flat sitemap at the conventional /sitemap.xml.
 *
 * Replaces `@astrojs/sitemap`, which always emits a sitemap *index* plus numbered
 * child files (`sitemap-index.xml` → `sitemap-0.xml`). An index is for sites past
 * the 50,000-URL limit or splitting by section; for ~20 URLs it just meant two
 * files, a redundant hop for crawlers and two things to submit.
 *
 * Still fully automatic — nothing here is a hand-maintained list:
 *   - static routes come from globbing `src/pages/**\/*.astro`, so a new page file
 *     appears here the moment it exists. That includes the four drafted landing
 *     pages if they're ever moved out of `_drafts/`.
 *   - dynamic routes come from the same content modules the `[slug].astro` route
 *     files use for `getStaticPaths`, so adding a machine or project adds its URL.
 *
 * Trailing slashes are deliberate: they match the canonical tags `Seo.astro`
 * emits (`https://www.yanta.com.au/about/`), and a sitemap that disagrees with
 * its own canonicals is worse than no sitemap.
 */

/** Paths Astro routes but which must stay out of the sitemap. */
const EXCLUDED = new Set([
  '404',
  // Post-submission confirmation page — it carries noindex, so listing it here
  // would have the two signals contradict each other.
  'thanks',
]);

const staticRoutes = Object.keys(import.meta.glob('./**/*.astro'))
  .map((file) => file.replace(/^\.\//, '').replace(/\.astro$/, ''))
  // Astro doesn't route anything under an underscore-prefixed segment (_drafts).
  .filter((route) => !route.split('/').some((segment) => segment.startsWith('_')))
  // `[slug]` templates aren't URLs themselves; their pages come from content below.
  .filter((route) => !route.includes('['))
  // `index` is the directory root: 'index' → '', 'equipment/index' → 'equipment'.
  .map((route) => route.replace(/(^|\/)index$/, ''))
  .filter((route) => !EXCLUDED.has(route));

/** Mirrors `getStaticPaths` in the two `[slug].astro` route files. */
const dynamicRoutes = [
  ...equipment.filter((machine) => machine.slug).map((machine) => `equipment/${machine.slug}`),
  ...projects.map((project) => `projects/${project.slug}`),
];

const escapeXml = (value: string): string =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = (context) => {
  const origin = context.site ?? new URL(site.url);

  const urls = [...staticRoutes, ...dynamicRoutes]
    .map((route) => new URL(route === '' ? '/' : `/${route}/`, origin).href)
    .sort();

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${escapeXml(url)}</loc></url>`).join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
