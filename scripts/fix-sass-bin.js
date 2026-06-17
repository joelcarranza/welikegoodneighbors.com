#!/usr/bin/env node
// npm installs the standalone 'sass' package (a transitive orphan dep) whose bin
// overwrites the dart-embedded binary that Hugo's TOCSS-DART transformer needs.
// This postinstall script re-links node_modules/.bin/sass to the native dart-sass
// binary from the platform-specific sass-embedded package.
const fs = require('fs');
const path = require('path');

const platform = process.platform; // 'darwin', 'linux', 'win32'
const arch = process.arch;         // 'arm64', 'x64'

const pkgName = `sass-embedded-${platform}-${arch}`;
const root = path.join(__dirname, '..');
const nativeBin = path.join(root, 'node_modules', pkgName, 'dart-sass', 'sass');

if (!fs.existsSync(nativeBin)) {
  console.log(`fix-sass-bin: no native binary found at ${nativeBin}, skipping`);
  process.exit(0);
}

const binLink = path.join(root, 'node_modules', '.bin', 'sass');

try { fs.unlinkSync(binLink); } catch (_) {}
fs.symlinkSync(nativeBin, binLink);
console.log(`fix-sass-bin: linked node_modules/.bin/sass -> ${nativeBin}`);
