import { readdir, lstat, realpath } from 'node:fs/promises';
import { resolve, relative, sep } from 'node:path';
export async function walk(root) {
  const files = [];
  for (const entry of (await readdir(root, { withFileTypes: true })).sort((a, b) => a.name.localeCompare(b.name, 'en'))) {
    const path = resolve(root, entry.name);
    if (entry.isSymbolicLink()) throw Error(`Symlinks are not allowed: ${path}`);
    if (entry.isDirectory()) files.push(...await walk(path));
    else if (entry.isFile()) files.push(path);
    else throw Error(`Unsupported file: ${path}`);
  }
  return files;
}
export async function localFile(root, path) {
  if (typeof path !== 'string' || !path || path.includes('\\') || path.startsWith('/') || path.split('/').some(p => p === '..' || p === '.')) throw Error(`Invalid relative path: ${path}`);
  const canonicalRoot = await realpath(root);
  const full = resolve(canonicalRoot, path); const actual = await realpath(full);
  if (relative(canonicalRoot, actual).startsWith(`..${sep}`) || actual !== full || !(await lstat(full)).isFile()) throw Error(`Expected a regular local file: ${path}`);
  return full;
}
