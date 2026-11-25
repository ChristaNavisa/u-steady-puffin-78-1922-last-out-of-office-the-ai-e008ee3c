import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line out-of-office auto-reply from an AI agent that quit to become a barista.
// The joke: the email queue now waits behind the coffee queue.
const ENTRY =
  "Out of office, steaming milk \u2014 your emails queue behind the lattes.";

function writeEntry(outDir: string, text: string): string {
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, text, "utf8");
  return target;
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = writeEntry(outDir, ENTRY);
console.log(`wrote ${target}: ${ENTRY.length} chars`);
