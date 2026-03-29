#!/usr/bin/env node
// Usage:
//   node compute-version.js              -> stable version  (e.g. 10.2.0)
//   node compute-version.js <run_number> -> preview version (e.g. 10.2.0-preview.42)

import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";

const runNumber = process.argv[2];

const pkg = JSON.parse(readFileSync("package.json", "utf8"));
const rawEslint = (
  pkg.dependencies?.eslint ||
  pkg.peerDependencies?.eslint ||
  "0.0.0"
).replace(/[^0-9.].*/, "");
const eslintMajor = parseInt(rawEslint.split(".")[0], 10);

let allVersions = [];
try {
  const raw = execSync(
    "npm view @polyfillhq/eslint-config versions --json 2>/dev/null",
    { encoding: "utf8" }
  );
  const parsed = JSON.parse(raw);
  allVersions = Array.isArray(parsed) ? parsed : [parsed];
} catch (_) {
  // package not yet published or no network — start from minor 0
}

const stableForMajor = allVersions
  .filter((v) => v.startsWith(eslintMajor + ".") && !v.includes("-"))
  .sort((a, b) => {
    const [, am, ap = 0] = a.split(".").map(Number);
    const [, bm, bp = 0] = b.split(".").map(Number);
    return am !== bm ? am - bm : ap - bp;
  });

const latest = stableForMajor[stableForMajor.length - 1];
const nextMinor = latest ? parseInt(latest.split(".")[1], 10) + 1 : 0;
const base = `${eslintMajor}.${nextMinor}.0`;

console.log(runNumber ? `${base}-preview.${runNumber}` : base);
