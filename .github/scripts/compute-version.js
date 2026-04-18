#!/usr/bin/env node
/// <reference types="node" />
// @ts-check
// Usage:
//   node compute-version.js              -> updates package.json version and prints major.minor (e.g. 10.2)
//   node compute-version.js -preview     -> updates package.json version and prints major.minor-preview
//   node compute-version.js preview.123  -> updates package.json version and prints major.minor-preview.123

import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const postfixArg = process.argv[2]?.trim() ?? '';

// Use pnpm list to get the resolved (installed) eslint version from the lockfile
const pnpmList = JSON.parse(
  execSync('pnpm list eslint --json --depth 0', { encoding: 'utf8' }),
);
const eslintVersion = pnpmList[0]?.dependencies?.eslint?.version ?? '0.0.0';
const [eslintMajor = '0', eslintMinor = '0'] = eslintVersion.split('.');
const base = `${eslintMajor}.${eslintMinor}`;
const version = `${base}${postfixArg}`;

const packageJsonPath = resolve(process.cwd(), 'package.json');
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
packageJson.version = version;
writeFileSync(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`, 'utf8');

console.log(version);
