# Drafted campaign landing pages

These four ad landing pages are complete but **not built or published**. Astro ignores
any directory under `src/pages/` whose name starts with `_`, so they generate no routes,
appear in no sitemap, and are unreachable.

- `plant-hire.astro` — general excavator / plant hire
- `gps-excavator-hire.astro` — Trimble Earthworks 14T
- `telehandler-hire.astro` — 7T telehandler
- `poly-welder-hire.astro` — Bushranger 630

Their copy still lives in `src/content/pages/*.ts` and is still Zod-validated at build,
so it can't silently rot while drafted.

## To publish again

1. `git mv src/pages/_drafts/<page>.astro src/pages/`
2. Re-add the campaign shortlink redirects in `astro.config.mjs` (`/hire`, `/gps`,
   `/telehandler`, `/poly-welding`, `/excavator-hire`) and regenerate `vercel.json`.
3. Restore the "Plant Hire" nav entry in `src/content/site.ts` if you want it in the
   main nav — for ad traffic you usually don't, since the nav leaks clicks away from
   the form.
4. Restore the `href` values on the matching units in `src/content/corporate/fleet.ts`.

## Note on import paths

These files sit one directory deeper than `src/pages/`, so their imports use `../../`.
When you move one back up to `src/pages/`, change its two imports back to `../`.
