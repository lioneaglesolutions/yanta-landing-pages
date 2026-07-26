import type { PageContent } from '../schema';
import plantHire from './plant-hire';
import gpsExcavator from './gps-excavator';
import telehandler from './telehandler';
import polyWelder from './poly-welder';

/**
 * The PAGES registry. Adding a landing page = add a content file and list it here —
 * no template edits. Nav, sitemap and anything else that enumerates pages reads this.
 */
export const PAGES: readonly PageContent[] = [
  plantHire,
  gpsExcavator,
  telehandler,
  polyWelder,
];
