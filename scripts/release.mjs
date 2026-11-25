#!/usr/bin/env node
// Prepares a release of the community skills AND of the npx installer (@subclip/community-skills). It does NOT publish:
// it prints the git and gh commands to run. A release is a git tag vX.Y.Z whose registry.json and files.json are the
// source `npx @subclip/community-skills` installs from (the installer reads the latest release tag), so one tag pins
// exactly which skill files users get, and `--ref vX.Y.Z` can pin an older state.
//
//   node scripts/release.mjs [patch|minor|major|X.Y.Z] [--dry-run]
//
// Steps: (1) check registry.json and the READMEs are current, (2) regenerate files.json (hashes of every installable file),
// (3) bump packages/cli/package.json, (4) write the release notes (skills added, updated, removed since the previous tag),
// (5) print the commands. Nothing is committed, tagged, released or published by this script.
import { execFileSync } from 'node:child_process';
import { readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from './build-registry.mjs';

const REPO = 'subclip-app/community-video-editing-skills';

export function bump(version, kind) {
  if (/^\d+\.\d+\.\d+$/u.test(kind)) return kind;
  const [major, minor, patch] = version.split('.').map(Number);
  if (kind === 'major') return `${major + 1}.0.0`;
  if (kind === 'minor') return `${major}.${minor + 1}.0`;
  if (kind === 'patch') return `${major}.${minor}.${patch + 1}`;
  throw new Error('Usage: node scripts/release.mjs [patch|minor|major|X.Y.Z] [--dry-run]');
}

/** Skills added, removed and updated between two registry/files.json pairs. A skill counts as updated when its files changed
 *  (when both files.json are known) or its updatedAt date changed. */
export function releaseChanges(before, after) {
  const oldSkills = new Map((before.registry?.skills ?? []).map((skill) => [skill.slug, skill]));
  const newSkills = new Map(after.registry.skills.map((skill) => [skill.slug, skill]));
  const fingerprint = (files, slug) => JSON.stringify(files?.skills?.[slug]?.core ?? null) + JSON.stringify(files?.skills?.[slug]?.examples ?? null);
  const added = [...newSkills.keys()].filter((slug) => !oldSkills.has(slug)).sort();
  const removed = [...oldSkills.keys()].filter((slug) => !newSkills.has(slug)).sort();
  const updated = [...newSkills.keys()].filter((slug) => {
    const old = oldSkills.get(slug);
    if (!old) return false;
    if (before.files?.skills?.[slug] && after.files?.skills?.[slug]) return fingerprint(before.files, slug) !== fingerprint(after.files, slug);
    return (old.updatedAt ?? old.addedAt) !== (newSkills.get(slug).updatedAt ?? newSkills.get(slug).addedAt);
  }).sort();
  return { added, removed, updated };
}

export function releaseNotes(version, previousTag, changes, registry) {
  const name = (slug) => registry.skills.find((skill) => skill.slug === slug)?.name ?? slug;
  const lines = [`## Community skills ${version}`, '', previousTag ? `Changes since ${previousTag}.` : 'First release.', ''];
  const section = (title, slugs) => { if (slugs.length) lines.push(`### ${title}`, '', ...slugs.map((slug) => `- ${name(slug)} (\`${slug}\`)`), ''); };
  section('Added', changes.added); section('Updated', changes.updated); section('Removed', changes.removed);
  if (!changes.added.length && !changes.updated.length && !changes.removed.length) lines.push('No skill changes.', '');
  lines.push('### Install', '', '```sh', 'npx @subclip/community-skills install --all', '```', '', `Pin this release: \`npx @subclip/community-skills install --all --ref ${version.startsWith('v') ? version : `v${version}`}\``);
  return `${lines.join('\n')}\n`;
}

const git = (root, ...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
function show(root, tag, file) { try { return JSON.parse(git(root, 'show', `${tag}:${file}`)); } catch { return null; } }

export async function prepare(root, kind, dryRun) {
  await build(root, true); // registry.json, READMEs and the skill pages must be current before anything is released
  const pkgPath = resolve(root, 'packages/cli/package.json');
  const pkg = JSON.parse(await readFile(pkgPath, 'utf8'));
  const version = bump(pkg.version, kind);
  if (!dryRun) await build(root, false, { files: true });
  const registry = JSON.parse(await readFile(resolve(root, 'registry.json'), 'utf8'));
  const files = await readFile(resolve(root, 'files.json'), 'utf8').then(JSON.parse).catch(() => null);
  let previousTag = null;
  try { previousTag = git(root, 'describe', '--tags', '--abbrev=0', '--match', 'v*'); } catch { previousTag = null; }
  const before = previousTag ? { registry: show(root, previousTag, 'registry.json'), files: show(root, previousTag, 'files.json') } : {};
  const changes = releaseChanges(before, { registry, files });
  const notes = releaseNotes(version, previousTag, changes, registry);
  if (!dryRun) await writeFile(pkgPath, `${JSON.stringify({ ...pkg, version }, null, 2)}\n`);
  return { version, previousTag, changes, notes };
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    const args = process.argv.slice(2);
    const dryRun = args.includes('--dry-run');
    const kind = args.find((a) => !a.startsWith('--')) ?? 'patch';
    const { version, previousTag, changes, notes } = await prepare(process.cwd(), kind, dryRun);
    const notesFile = resolve(tmpdir(), `subclip-community-release-v${version}.md`);
    if (!dryRun) await writeFile(notesFile, notes);
    console.log(`${dryRun ? '[dry run] ' : ''}Release v${version} (previous: ${previousTag ?? 'none'}): ${changes.added.length} added, ${changes.updated.length} updated, ${changes.removed.length} removed.\n`);
    console.log(notes);
    console.log(`${dryRun ? 'Nothing was written. ' : `Release notes: ${notesFile}\n`}Run these yourself, in order (this script runs none of them):\n`);
    console.log(`  git add files.json packages/cli/package.json && git commit -m "Release v${version}"`);
    console.log(`  git tag v${version} && git push origin main --follow-tags`);
    console.log(`  gh release create v${version} --repo ${REPO} --title "v${version}" --notes-file ${notesFile}`);
    console.log('  cd packages/cli && npm pack            # then publish from your home folder, see packages/cli/README.md');
    console.log('  cd ~ && npm publish <path-to>/subclip-community-skills-' + version + '.tgz --access public\n');
    console.log('After the tag exists, `npx @subclip/community-skills` installs from it.');
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
