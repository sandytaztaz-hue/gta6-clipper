// gta6-clipper-01 entry 2: hands in the YouTube Short's address.
// The video itself is the entry (most views wins); this program only
// copies VIDEO.json from the repository root to /output/VIDEO.json,
// where the gate reads it. Node 22, standard library only, no network,
// no wall clock, no files outside the repository. Running it twice
// writes the same bytes both times.
//
// Entry 2 video: "GTA 6 WILDEST STUNTS" — a fast-cut meme montage from
// Rockstar's official GTA VI Launch Trailer (beats before 60s, hook:
// a man standing on a biplane wing), plus the make.fun pitch end card.
// VIDEO.json holds a placeholder URL until the Short is uploaded; the
// last submission before the deadline is the final entry, and its video
// is the one ranked, so the placeholder must be replaced after upload.
//
// Run it locally:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

const source = join(BOT_DIR, 'VIDEO.json');
const target = join(OUTPUT_DIR, 'VIDEO.json');

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`could not copy ${source} to ${target}: ${(err as Error).message}`);
  process.exit(1);
}
