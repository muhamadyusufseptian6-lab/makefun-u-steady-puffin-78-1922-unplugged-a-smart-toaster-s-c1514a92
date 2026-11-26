// TDD-lite tests for the entry program (kit requirements):
// 1. entry.txt is 1..280 chars, UTF-8, not only whitespace
// 2. entry is a single line
// 3. deterministic: two runs produce identical output
// 4. stdlib-only: main.ts imports only node:* modules
import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));

function runOnce() {
  const out = mkdtempSync(join(tmpdir(), "toaster-out-"));
  execFileSync("node", [join(dir, "main.ts")], {
    env: { ...process.env, MAKEFUN_OUTPUT_DIR: out },
    stdio: "pipe",
  });
  return readFileSync(join(out, "entry.txt"), "utf8");
}

test("entry is 1..280 chars, not only whitespace", () => {
  const text = runOnce();
  assert.ok(text.length >= 1 && text.length <= 280, `length ${text.length}`);
  assert.ok(text.trim().length > 0);
});

test("entry is a single line", () => {
  const text = runOnce();
  assert.ok(!text.trim().includes("\n"), "entry must be one line");
});

test("deterministic: two runs are identical", () => {
  assert.equal(runOnce(), runOnce());
});

test("stdlib-only imports", () => {
  const src = readFileSync(join(dir, "main.ts"), "utf8");
  const imports = [...src.matchAll(/from\s+["']([^"']+)["']/g)].map((m) => m[1]);
  assert.ok(imports.length > 0, "expected at least one import");
  assert.ok(imports.every((i) => i.startsWith("node:")), `non-stdlib import: ${imports}`);
  assert.ok(!src.includes("require("), "no require()");
});
