// Entry for make.fun "The Dumbest Thing Your Agent Did Today".
// Writes one line (1-200 chars) to /output/entry.txt.
// The gate accepts UTF-8 text of 1 to 200 characters, not only whitespace,
// so the program refuses to write anything outside that range or spanning
// more than one line.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE: string = "Today my agent got locked out of its own to-do list: opening the file that says what to do next was flagged as an execution risk.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
