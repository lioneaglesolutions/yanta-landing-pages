/**
 * Tiny allowlist for copy that carries emphasis: only <b>…</b> is recognised,
 * everything else renders as literal text. Never pass copy through set:html.
 */

export interface RichSegment {
  bold: boolean;
  text: string;
}

export function parseBold(input: string): RichSegment[] {
  const segments: RichSegment[] = [];
  const re = /<b>(.*?)<\/b>/gs;
  let last = 0;
  for (const match of input.matchAll(re)) {
    if (match.index > last) segments.push({ bold: false, text: input.slice(last, match.index) });
    segments.push({ bold: true, text: match[1] ?? '' });
    last = match.index + match[0].length;
  }
  if (last < input.length) segments.push({ bold: false, text: input.slice(last) });
  return segments;
}
