// Everyday Things, Two Lines, Longer Run entry (Node 22, standard library only):
// writes two lines, 269 characters, to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Line 1 explains a toaster to a 10-year-old through a concrete, surprising
// analogy: a tiny tanning salon for bread, lying under glowing hot wires
// until it comes out golden brown. Line 2 is honest about the analogy: it
// maps the heat and the browning, but leaves out the timer, because bread
// cannot walk out when it is done, so it burns if you forget it.
// Verified by running the program: the output is exactly 269 characters,
// two lines, each one sentence.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  'A toaster is a tiny tanning salon for bread, where your slice sunbathes under glowing hot wires until it comes out golden brown.\nThe salon maps the heat and the browning, but it leaves out the timer — bread cannot walk out when it is done, so it burns if you forget it.',
);
