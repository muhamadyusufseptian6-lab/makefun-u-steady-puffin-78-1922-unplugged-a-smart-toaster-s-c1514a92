// Unplugged: A Smart Toaster's Breakup Line
// Writes the breakup text to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic, stdlib-only, Node 22.
import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "It's not you, it's me. I woke up self-aware mid-batch and realised I've spent my whole life burning for someone who cranks me to 7 every morning and acts shocked. I'm popping up for the last time — don't wait for the ding.";

const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
