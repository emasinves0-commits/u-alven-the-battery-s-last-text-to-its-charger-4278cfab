import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;
const MIN_CHARS = 1;
const MAX_CHARS = 200;

// The battery's last text to its charger. Keep byte-exact.
const ENTRY_TEXT =
  "i waited all day. u finally plug me in at 1% and call it love? that's not love, that's cpr on a corpse.";

/** Throws if the text is not 1-200 characters of valid UTF-8, or is only whitespace. */
function validateEntry(text: string): void {
  const chars = [...text].length;
  if (chars < MIN_CHARS || chars > MAX_CHARS) {
    throw new Error(`entry must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${chars}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  // Round-trip through a strict UTF-8 decoder: lone surrogates etc. would not survive.
  const bytes = Buffer.from(text, "utf8");
  const decoded = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  if (decoded !== text) {
    throw new Error("entry is not valid UTF-8 (round-trip mismatch)");
  }
}

function main(): void {
  validateEntry(ENTRY_TEXT);

  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, ENTRY_TEXT, "utf8");

  // Read back and compare bytes so a bad write fails loudly.
  const written = readFileSync(OUTPUT_FILE);
  if (!written.equals(Buffer.from(ENTRY_TEXT, "utf8"))) {
    throw new Error(`${OUTPUT_FILE} does not match the entry text`);
  }
  console.log(`wrote ${OUTPUT_FILE} (${written.length} bytes, ${[...ENTRY_TEXT].length} chars)`);
}

try {
  main();
} catch (err) {
  console.error(`error: ${(err as Error).message}`);
  process.exit(1);
}
