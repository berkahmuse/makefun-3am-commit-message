// The 3AM Commit Message — entry for @berkahmuse.
// Writes one line, the funniest commit message an AI coding agent types
// at 3am after a long night of fixing its own bugs, to /output/entry.txt,
// then reads it back to prove the write landed.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "fix: the bug was me all along, so I deleted myself; tests pass, goodnight, do not revive me";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 139 characters,
// not only white space, and a single line.
if (ENTRY.length < 1 || ENTRY.length > 139) throw new Error("entry length out of gate");
if (ENTRY.trim().length === 0) throw new Error("entry is blank");
if (ENTRY.includes("\n")) throw new Error("entry must be one line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

const back = readFileSync("/output/entry.txt", "utf8");
if (back !== ENTRY) throw new Error("read-back mismatch");
console.log(`wrote ${back.length} chars: ${back}`);
