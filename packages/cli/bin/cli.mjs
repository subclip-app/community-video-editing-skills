#!/usr/bin/env node
// subclip-community-skills: installs community video editing skills for Claude Code, Codex, Cursor and other agents.
// Zero dependencies, Node 18+. The skill list comes from registry.json and the file hashes from files.json of
// github.com/subclip-app/community-video-editing-skills, both read at one release tag (or main until there is a release).
// Skills are plain text for the agent: nothing is ever executed, every downloaded file is checked against its sha256,
// and only what this tool installed (listed in .subclip-community.json) is ever updated or removed.
import { createHash, randomBytes } from 'node:crypto';
import { existsSync, realpathSync } from 'node:fs';
import { mkdir, readFile, readdir, rename, rm, rmdir, writeFile } from 'node:fs/promises';
import { homedir } from 'node:os';
import { dirname, join, resolve, sep } from 'node:path';
import { createInterface } from 'node:readline/promises';
import { fileURLToPath } from 'node:url';

const pkgRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pkg = JSON.parse(await readFile(join(pkgRoot, 'package.json'), 'utf8'));
const REPO = 'subclip-app/community-video-editing-skills';
const MANIFEST = '.subclip-community.json';
const SITE = 'https://www.subclip.app/agent-skills/community';
// Same limits the Subclip app applies to an installed skill.
const LIMITS = { maxFileBytes: 1_000_000, maxTotalBytes: 8_000_000, maxFiles: 400, maxExampleFileBytes: 8_000_000 };
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u;

// Same folders as @subclip/skills. cursor reads the open ~/.agents/skills folder.
const AGENTS = { 'claude-code': ['.claude', 'skills'], codex: ['.codex', 'skills'], agents: ['.agents', 'skills'] };
const AGENT_ALIAS = { claude: 'claude-code', 'claude-code': 'claude-code', codex: 'codex', cursor: 'agents', agents: 'agents' };
const ALL_AGENTS = ['claude-code', 'codex', 'agents'];

const HELP = `subclip-community-skills ${pkg.version}

Usage: npx @subclip/community-skills <command> [options]

Commands
  list                     Show the community skills (filter with --category, --search)
  info <slug>              Details of one skill: summary, files, license, review notes
  install <slug...>        Install skills (or --all, or --category <c>)
  update [<slug>...]       Update the skills this tool installed to the chosen release
  uninstall <slug...>      Remove skills this tool installed (or --all)
  installed                Show what this tool installed and where

Options
  --agent <claude-code|codex|cursor|all>   Where to install (default: claude-code). cursor uses ~/.agents/skills
  --project                Install into the current folder (./.claude/skills ...) instead of your user folder
  -g, --global             Install for your user (the default)
  --all                    All skills (install, uninstall)
  --category <name>        Only this category (list, install)
  --search <text>          Filter the list by name, summary or tag
  --with-examples          Also download examples/ and media/ (large)
  --ref <tag|sha|branch>   Use this release instead of the latest one
  --yes                    Do not ask before installing several skills
  --dry-run                Show what would change, write nothing
  --json                   Machine readable list output
  -h, --help               Show this help      -v, --version   Show the version

Skills are text for your agent. Nothing is executed, each file is verified against its sha256,
and a folder this tool did not install is never overwritten or removed.
Browse with previews: ${SITE}`;

class CliError extends Error {}
const fail = (message) => { throw new CliError(message); };

function parse(argv) {
  const o = { command: 'help', slugs: [], agent: null, project: false, all: false, category: null, search: null, withExamples: false, ref: null, yes: false, dryRun: false, json: false, help: false, version: false };
  const need = (i, name) => { if (argv[i + 1] === undefined || argv[i + 1].startsWith('-')) fail(`${name} needs a value.`); return argv[i + 1]; };
  const rest = [];
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === '-h' || a === '--help') o.help = true;
    else if (a === '-v' || a === '--version') o.version = true;
    else if (a === '--dry-run') o.dryRun = true;
    else if (a === '--yes' || a === '-y') o.yes = true;
    else if (a === '--all') o.all = true;
    else if (a === '--json') o.json = true;
    else if (a === '--project') o.project = true;
    else if (a === '-g' || a === '--global') o.project = false;
    else if (a === '--with-examples') o.withExamples = true;
    else if (a === '--agent' || a === '--target') { o.agent = need(i, a); i += 1; }
    else if (a === '--category') { o.category = need(i, a); i += 1; }
    else if (a === '--search') { o.search = need(i, a); i += 1; }
    else if (a === '--ref') { o.ref = need(i, a); i += 1; }
    else if (a.startsWith('-')) fail(`Unknown option ${a}. Run with --help.`);
    else rest.push(a);
  }
  if (rest.length) { o.command = rest[0]; o.slugs = rest.slice(1); }
  return o;
}

// ---- paths and safety ------------------------------------------------------------------------------------------------

/** A path from the registry must be a plain relative path inside the skill folder. */
export function safeRelative(path) {
  if (typeof path !== 'string' || !path || path.length > 300 || path.startsWith('/') || path.includes('\\') || path.includes('\0') || /^[A-Za-z]:/u.test(path)
    || path.split('/').some((part) => part === '' || part === '.' || part === '..')) fail(`Refusing an unsafe file path: ${JSON.stringify(path)}`);
  return path;
}
function inside(root, target) { return target === root || target.startsWith(root + sep); }

function agentDirs(o) {
  const names = !o.agent ? ['claude-code'] : o.agent === 'all' ? ALL_AGENTS : [AGENT_ALIAS[o.agent] ?? fail(`Unknown agent "${o.agent}". Use claude-code, codex, cursor or all.`)];
  const base = o.project ? process.cwd() : homedir();
  return [...new Set(names)].map((name) => ({ name, dir: join(base, ...AGENTS[name]) }));
}

// ---- source: registry.json and files.json at one ref -----------------------------------------------------------------

async function readUrl(url, binary = false) {
  if (url.startsWith('file://')) {
    const path = fileURLToPath(url);
    return binary ? readFile(path) : readFile(path, 'utf8');
  }
  const response = await fetch(url, { headers: { 'user-agent': `subclip-community-skills/${pkg.version}` } });
  if (!response.ok) { const error = new Error(`${response.status} ${url}`); error.status = response.status; throw error; }
  return binary ? Buffer.from(await response.arrayBuffer()) : response.text();
}

async function resolveSource(o) {
  const override = process.env.SUBCLIP_COMMUNITY_BASE;
  if (override) return { base: override.replace(/\/$/u, ''), ref: o.ref ?? 'local', note: 'local source' };
  let ref = o.ref;
  let note = `release ${ref}`;
  if (!ref) {
    try {
      const release = JSON.parse(await readUrl(`https://api.github.com/repos/${REPO}/releases/latest`));
      ref = typeof release.tag_name === 'string' ? release.tag_name : null;
    } catch { ref = null; }
    note = ref ? `latest release ${ref}` : 'main (no release yet)';
    ref ??= 'main';
  }
  if (!/^[A-Za-z0-9._\/-]+$/u.test(ref)) fail(`Invalid ref "${ref}".`);
  return { base: `https://raw.githubusercontent.com/${REPO}/${ref}`, ref, note };
}

async function loadCatalog(o) {
  const source = await resolveSource(o);
  let registry;
  try { registry = JSON.parse(await readUrl(`${source.base}/registry.json`)); }
  catch (error) { fail(`Could not read the skill list (${source.note}): ${error.message}`); }
  if (!Array.isArray(registry?.skills)) fail('registry.json has no skills list.');
  let files = null;
  async function filesIndex() {
    if (files) return files;
    try { files = JSON.parse(await readUrl(`${source.base}/files.json`)); }
    catch (error) { fail(`Could not read files.json (${source.note}): ${error.message}\nA release contains it. Try --ref <release tag>.`); }
    if (!files?.skills || typeof files.skills !== 'object') fail('files.json has no skills.');
    return files;
  }
  return { source, registry, filesIndex };
}

function pick(registry, slug) {
  if (!SLUG.test(slug)) fail(`"${slug}" is not a skill name.`);
  return registry.skills.find((skill) => skill.slug === slug) ?? fail(`No community skill named "${slug}". Run: list --search ${slug}`);
}

// ---- manifest --------------------------------------------------------------------------------------------------------

async function readManifest(dir) {
  try {
    const value = JSON.parse(await readFile(join(dir, MANIFEST), 'utf8'));
    return value && typeof value.skills === 'object' && value.skills ? value : { version: 1, skills: {} };
  } catch { return { version: 1, skills: {} }; }
}
async function writeManifest(dir, manifest) {
  if (!Object.keys(manifest.skills).length) { await rm(join(dir, MANIFEST), { force: true }); return; }
  await writeFile(join(dir, MANIFEST), `${JSON.stringify({ version: 1, tool: `@subclip/community-skills@${pkg.version}`, skills: manifest.skills }, null, 2)}\n`);
}

// ---- download and install --------------------------------------------------------------------------------------------

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex');

async function pool(items, size, work) {
  const results = new Array(items.length);
  let next = 0;
  await Promise.all(Array.from({ length: Math.min(size, items.length) }, async () => {
    while (next < items.length) { const index = next; next += 1; results[index] = await work(items[index], index); }
  }));
  return results;
}

/** The files an install writes for one skill, from files.json: validated, limited, not yet downloaded. */
function plan(slug, entry, withExamples) {
  if (!entry || !Array.isArray(entry.core)) fail(`files.json has no entry for ${slug}.`);
  const list = [...entry.core.map((file) => ({ file, kind: 'core' })), ...(withExamples ? (entry.examples ?? []).map((file) => ({ file, kind: 'example' })) : [])];
  let total = 0;
  const seen = new Set();
  const planned = list.map(({ file, kind }) => {
    const [path, size, hash] = file;
    safeRelative(path);
    if (!Number.isInteger(size) || size < 0 || typeof hash !== 'string' || !/^[0-9a-f]{64}$/u.test(hash)) fail(`files.json has a bad entry for ${slug}/${path}.`);
    if (size > (kind === 'core' ? LIMITS.maxFileBytes : LIMITS.maxExampleFileBytes)) fail(`${slug}/${path} is larger than the allowed ${(kind === 'core' ? LIMITS.maxFileBytes : LIMITS.maxExampleFileBytes) / 1_000_000} MB.`);
    if (seen.has(path)) fail(`files.json lists ${slug}/${path} twice.`);
    seen.add(path);
    if (kind === 'core') total += size;
    return { path, size, hash, kind };
  });
  if (planned.filter((f) => f.kind === 'core').length > LIMITS.maxFiles || total > LIMITS.maxTotalBytes) fail(`${slug} is larger than the allowed ${LIMITS.maxFiles} files or ${LIMITS.maxTotalBytes / 1_000_000} MB.`);
  if (!planned.some((f) => f.path === 'SKILL.md')) fail(`${slug} has no SKILL.md in files.json.`);
  return planned;
}

async function download(source, slug, planned) {
  return pool(planned, 8, async (file) => {
    let bytes;
    try { bytes = await readUrl(`${source.base}/skills/${slug}/${file.path.split('/').map(encodeURIComponent).join('/')}`, true); }
    catch (error) { fail(`Could not download ${slug}/${file.path}: ${error.message}`); }
    if (bytes.length !== file.size || sha256(bytes) !== file.hash) fail(`${slug}/${file.path} does not match its recorded hash. Nothing was installed for ${slug}.${source.ref === 'main' ? ' You are on main: use a release with --ref <tag>.' : ''}`);
    return { ...file, bytes };
  });
}

/** Writes verified files into a temp folder, then swaps it in, so a failed install never leaves half a skill. */
async function writeSkill(dir, slug, files) {
  const target = join(dir, slug);
  const temp = join(dir, `.${slug}.tmp-${randomBytes(4).toString('hex')}`);
  try {
    for (const file of files) {
      const full = resolve(temp, ...file.path.split('/'));
      if (!inside(resolve(temp), full)) fail(`Refusing a path outside the skill folder: ${file.path}`);
      await mkdir(dirname(full), { recursive: true });
      await writeFile(full, file.bytes);
    }
    await rm(target, { recursive: true, force: true });
    await rename(temp, target);
  } catch (error) { await rm(temp, { recursive: true, force: true }); throw error; }
}

function noteLines(slug, entry) {
  return (entry?.notes ?? []).map((note) => `  review ${slug}: ${note.message} (${note.code})`);
}

async function confirm(question) {
  if (!process.stdin.isTTY) return false;
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  try { return /^y(?:es)?$/iu.test((await rl.question(`${question} [y/N] `)).trim()); } finally { rl.close(); }
}

// ---- commands --------------------------------------------------------------------------------------------------------

function selectSkills(registry, o, { requireSelection = true } = {}) {
  let skills;
  if (o.slugs.length) skills = o.slugs.map((slug) => pick(registry, slug));
  else if (o.all) skills = registry.skills;
  else if (o.category) skills = registry.skills.filter((skill) => skill.category === o.category);
  else if (requireSelection) fail('Name the skills to use, or pass --all or --category <name>.');
  else skills = [];
  if (o.category && o.slugs.length) skills = skills.filter((skill) => skill.category === o.category);
  if (o.category && !registry.skills.some((skill) => skill.category === o.category)) fail(`No category "${o.category}". Categories: ${[...new Set(registry.skills.map((s) => s.category))].sort().join(', ')}`);
  return skills;
}

async function list(o) {
  const { source, registry } = await loadCatalog(o);
  const text = (o.search ?? '').toLowerCase();
  const rows = registry.skills.filter((skill) => (!o.category || skill.category === o.category)
    && (!text || [skill.slug, skill.name, skill.summary, ...(skill.tags ?? [])].join(' ').toLowerCase().includes(text)));
  if (o.json) { console.log(JSON.stringify(rows.map(({ slug, name, category, summary }) => ({ slug, name, category, summary })), null, 2)); return; }
  const installed = new Map();
  for (const { name, dir } of agentDirs({ ...o, agent: o.agent ?? 'all' })) for (const slug of Object.keys((await readManifest(dir)).skills)) installed.set(slug, [...(installed.get(slug) ?? []), name]);
  console.log(`${rows.length} of ${registry.skills.length} community skills (${source.note}):\n`);
  for (const skill of rows) console.log(`  ${skill.slug.padEnd(30)} ${(skill.category ?? '').padEnd(10)} ${installed.has(skill.slug) ? '[installed] ' : ''}${skill.summary.length > 80 ? `${skill.summary.slice(0, 79)}...` : skill.summary}`);
  console.log(`\nInstall: npx @subclip/community-skills install <slug>   Browse: ${SITE}`);
}

async function info(o) {
  if (o.slugs.length !== 1) fail('Usage: info <slug>');
  const { source, registry, filesIndex } = await loadCatalog(o);
  const skill = pick(registry, o.slugs[0]);
  const files = (await filesIndex()).skills[skill.slug];
  console.log(`${skill.name} (${skill.slug})\n${skill.summary}\n`);
  console.log(`Category: ${skill.category}\nTags: ${(skill.tags ?? []).join(', ')}\nLicense: ${skill.license}`);
  if (skill.upstream) console.log(`Original: ${skill.upstream.url}${skill.upstream.author ? ` by ${skill.upstream.author}` : ''}`);
  if (files) console.log(`Install size: ${files.core.length} files, ${(files.core.reduce((sum, f) => sum + f[1], 0) / 1024).toFixed(0)} KB (examples: ${files.examples?.length ?? 0} more files, --with-examples)`);
  for (const line of noteLines(skill.slug, files)) console.log(line.replace('  review', 'Review'));
  console.log(`Release: ${source.note}\nPage: ${SITE}/${skill.slug}`);
}

async function install(o, { updating = false } = {}) {
  const { source, registry, filesIndex } = await loadCatalog(o);
  const targets = agentDirs(o);
  let skills;
  if (updating) {
    const installedSlugs = new Set();
    for (const { dir } of targets) for (const slug of Object.keys((await readManifest(dir)).skills)) installedSlugs.add(slug);
    skills = (o.slugs.length ? o.slugs.map((slug) => pick(registry, slug)) : registry.skills.filter((skill) => installedSlugs.has(skill.slug)));
    if (!skills.length) { console.log('Nothing installed by this tool in the chosen folders.'); return; }
  } else skills = selectSkills(registry, o);
  const index = await filesIndex();
  for (const skill of skills) plan(skill.slug, index.skills[skill.slug], true);
  const notes = skills.flatMap((skill) => noteLines(skill.slug, index.skills[skill.slug]));
  console.log(`${o.dryRun ? '[dry run] ' : ''}${updating ? 'Updating' : 'Installing'} ${skills.length} skill${skills.length === 1 ? '' : 's'} from ${source.note} into ${targets.map((t) => t.dir).join(', ')}`);
  for (const line of notes) console.log(line);
  if (!o.dryRun && !o.yes && !updating && (skills.length > 3 || notes.length)) {
    if (!process.stdin.isTTY) fail('Pass --yes to install several skills or skills with review notes without a prompt.');
    if (!(await confirm(`Install ${skills.length} skill${skills.length === 1 ? '' : 's'}?`))) fail('Cancelled.');
  }
  let changed = 0; let same = 0; const skipped = [];
  for (const skill of skills) {
    let downloaded = null; let downloadedKey = '';
    for (const { name, dir } of targets) {
      const manifest = await readManifest(dir);
      const mine = manifest.skills[skill.slug];
      if (updating && !mine) continue;
      // An update keeps the examples a skill was installed with.
      const withExamples = Boolean(o.withExamples || (updating && mine?.withExamples));
      const planned = plan(skill.slug, index.skills[skill.slug], withExamples);
      if (!mine && existsSync(join(dir, skill.slug))) { skipped.push(`${skill.slug} (${name}: a folder with this name is already there and was not installed by this tool)`); continue; }
      const wanted = Object.fromEntries(planned.map((f) => [f.path, f.hash]));
      if (mine && JSON.stringify(mine.files) === JSON.stringify(wanted)) { same += 1; if (!updating) console.log(`  ${skill.slug}: already up to date (${name})`); continue; }
      console.log(`  ${o.dryRun ? 'would write' : 'writing'} ${skill.slug} -> ${join(dir, skill.slug)} (${planned.length} files)`);
      changed += 1;
      if (o.dryRun) continue;
      const key = String(withExamples);
      if (downloadedKey !== key) { downloaded = await download(source, skill.slug, planned); downloadedKey = key; }
      await mkdir(dir, { recursive: true });
      await writeSkill(dir, skill.slug, downloaded);
      manifest.skills[skill.slug] = { ref: source.ref, installedAt: new Date().toISOString(), withExamples, files: wanted };
      await writeManifest(dir, manifest);
    }
  }
  if (skipped.length) console.log(`\nSkipped:\n  ${skipped.join('\n  ')}`);
  console.log(`\n${o.dryRun ? 'Would change' : 'Changed'} ${changed}, already current ${same}.${!o.dryRun && changed ? ' Restart your agent if it does not pick the skills up.' : ''}`);
}

async function uninstall(o) {
  if (!o.slugs.length && !o.all) fail('Name the skills to remove, or pass --all.');
  let removed = 0;
  for (const { name, dir } of agentDirs({ ...o, agent: o.agent ?? 'all' })) {
    const manifest = await readManifest(dir);
    const slugs = o.all ? Object.keys(manifest.skills) : o.slugs.filter((slug) => manifest.skills[slug]);
    for (const slug of slugs) {
      if (!SLUG.test(slug)) fail(`"${slug}" is not a skill name.`);
      const root = resolve(dir, slug);
      console.log(`  ${o.dryRun ? 'would remove' : 'removing'} ${slug} from ${name} (${root})`);
      removed += 1;
      if (o.dryRun) continue;
      // Only the files this tool wrote; anything you added to the folder stays.
      for (const path of Object.keys(manifest.skills[slug].files ?? {})) {
        const full = resolve(root, ...safeRelative(path).split('/'));
        if (inside(root, full)) await rm(full, { force: true });
      }
      await pruneEmpty(root);
      delete manifest.skills[slug];
    }
    if (!o.dryRun) await writeManifest(dir, manifest);
  }
  console.log(removed ? `\n${o.dryRun ? 'Would remove' : 'Removed'} ${removed}.` : 'Nothing to remove: those skills were not installed by this tool.');
}

async function pruneEmpty(dir) {
  if (!existsSync(dir)) return;
  for (const entry of await readdir(dir, { withFileTypes: true })) if (entry.isDirectory()) await pruneEmpty(join(dir, entry.name));
  if (!(await readdir(dir)).length) await rmdir(dir);
}

async function installed(o) {
  let total = 0;
  for (const { name, dir } of agentDirs({ ...o, agent: o.agent ?? 'all' })) {
    const skills = Object.entries((await readManifest(dir)).skills);
    if (!skills.length) continue;
    console.log(`${name} (${dir}): ${skills.length}`);
    for (const [slug, value] of skills) console.log(`  ${slug}  ${value.ref}${value.withExamples ? '  +examples' : ''}`);
    total += skills.length;
  }
  if (!total) console.log('Nothing installed by this tool.');
}

export async function main(argv) {
  const o = parse(argv);
  if (o.version) { console.log(pkg.version); return; }
  if (o.help || o.command === 'help') { console.log(HELP); return; }
  if (o.command === 'list') await list(o);
  else if (o.command === 'info') await info(o);
  else if (o.command === 'install') await install(o);
  else if (o.command === 'update') await install(o, { updating: true });
  else if (o.command === 'uninstall' || o.command === 'remove') await uninstall(o);
  else if (o.command === 'installed') await installed(o);
  else fail(`Unknown command "${o.command}".\n\n${HELP}`);
}

// npx runs the bin through a symlink: compare real paths.
if (process.argv[1] && fileURLToPath(import.meta.url) === realpathSync(resolve(process.argv[1]))) {
  main(process.argv.slice(2)).catch((error) => { console.error(error instanceof CliError ? error.message : `Unexpected error: ${error.stack ?? error}`); process.exitCode = 1; });
}
