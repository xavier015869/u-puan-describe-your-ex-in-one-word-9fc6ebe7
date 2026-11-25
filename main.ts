// Describe Your Ex in One Word — u-puan-describe-your-ex-in-one-word-9fc6ebe7
// The entry is a single word: "uninstalled".
// An ex is software you removed on purpose. Everyone has uninstalled a bad
// app and never looked back, so the verdict lands at a glance: the ex was
// not a person to keep, it was a program to delete.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "uninstalled";

// The gate seals the entry: /output/entry.txt must be UTF-8 text of 1 to
// 111 characters, not only white space, and one word with nothing else
// attached. Fail loudly instead of shipping an invalid entry.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 111 ||
  ENTRY.trim() !== ENTRY ||
  /\s/.test(ENTRY)
) {
  throw new Error(
    `invalid entry ${JSON.stringify(ENTRY)}: must be one word, 1-111 chars, no whitespace`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
