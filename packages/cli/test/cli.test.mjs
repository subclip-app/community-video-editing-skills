import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, mkdtempSync, mkdirSync, readdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const cli = resolve(import.meta.dirname, '..', 'bin', 'cli.mjs');
const sha = (text) => createHash('sha256').update(text).digest('hex');

/** A tiny local "repository": registry.json, files.json and skills/<slug>/... exactly like the real one, no network. */
function fixture(extra = {}) {
  const root = mkdtempSync(join(tmpdir(), 'community-cli-fixture-'));
  const files = {
    alpha: { 'SKILL.md': '---\nname: alpha\ndescription: Alpha skill\n---\n\nUse alpha.\n', 'references/one.md': 'Reference one\n', 'LICENSE': 'MIT\n' },
    beta: { 'SKILL.md': '---\nname: beta\ndescription: Beta skill\n---\n\nUse beta.\n', 'LICENSE': 'MIT\n' },
    gamma: { 'SKILL.md': '---\nname: gamma\ndescription: Gamma skill\n---\n\nUse gamma.\n', 'LICENSE': 'MIT\n' },
    delta: { 'SKILL.md': '---\nname: delta\ndescription: Delta skill\n---\n\nUse delta.\n', 'LICENSE': 'MIT\n' },
    ...extra.files,
  };
  const examples = { alpha: { 'examples/demo.txt': 'big demo media\n' } };
  const registry = { version: 1, repository: 'x/y', skills: Object.keys(files).map((slug) => ({ slug, name: slug.toUpperCase(), summary: `${slug} summary`, category: slug === 'alpha' ? 'promos' : 'motion', tags: [`tag-${slug}`], license: 'MIT', upstream: null })) };
  const index = { version: 1, skills: {} };
  for (const [slug, tree] of Object.entries(files)) {
    index.skills[slug] = { core: [], examples: [] };
    for (const [path, text] of Object.entries(tree)) { write(root, slug, path, text); index.skills[slug].core.push([path, Buffer.byteLength(text), sha(text)]); }
    for (const [path, text] of Object.entries(examples[slug] ?? {})) { write(root, slug, path, text); index.skills[slug].examples.push([path, Buffer.byteLength(text), sha(text)]); }
  }
  if (extra.notes) index.skills.beta.notes = extra.notes;
  writeFileSync(join(root, 'registry.json'), JSON.stringify(registry));
  writeFileSync(join(root, 'files.json'), JSON.stringify(index));
  return { root, index, registry, files, examples };
}
function write(root, slug, path, text) { const full = join(root, 'skills', slug, path); mkdirSync(dirname(full), { recursive: true }); writeFileSync(full, text); }

function run(fx, home, args, options = {}) {
  const result = spawnSync(process.execPath, [cli, ...args], { encoding: 'utf8', cwd: options.cwd ?? home, env: { ...process.env, HOME: home, USERPROFILE: home, SUBCLIP_COMMUNITY_BASE: pathToFileURL(fx.root).href } });
  return { code: result.status, out: result.stdout, err: result.stderr, all: `${result.stdout}${result.stderr}` };
}
function setup(t, extra) {
  const fx = fixture(extra); const home = mkdtempSync(join(tmpdir(), 'community-cli-home-'));
  t.after(() => { rmSync(fx.root, { recursive: true, force: true }); rmSync(home, { recursive: true, force: true }); });
  return { fx, home, skills: join(home, '.claude', 'skills') };
}

test('list shows every skill and filters by category and search', (t) => {
  const { fx, home } = setup(t);
  const all = run(fx, home, ['list']);
  assert.equal(all.code, 0);
  for (const slug of ['alpha', 'beta', 'gamma', 'delta']) assert.match(all.out, new RegExp(slug));
  const promos = run(fx, home, ['list', '--category', 'promos']);
  assert.match(promos.out, /alpha/); assert.doesNotMatch(promos.out, /beta/);
  const found = run(fx, home, ['list', '--search', 'tag-gamma']);
  assert.match(found.out, /gamma/); assert.doesNotMatch(found.out, /alpha/);
  assert.equal(JSON.parse(run(fx, home, ['list', '--json']).out).length, 4);
});

test('install writes the skill files, not the examples, and records a manifest', (t) => {
  const { fx, home, skills } = setup(t);
  const result = run(fx, home, ['install', 'alpha']);
  assert.equal(result.code, 0, result.all);
  assert.equal(readFileSync(join(skills, 'alpha', 'SKILL.md'), 'utf8'), fx.files.alpha['SKILL.md']);
  assert.ok(existsSync(join(skills, 'alpha', 'references', 'one.md')));
  assert.ok(!existsSync(join(skills, 'alpha', 'examples')));
  const manifest = JSON.parse(readFileSync(join(skills, '.subclip-community.json'), 'utf8'));
  assert.deepEqual(Object.keys(manifest.skills.alpha.files).sort(), ['LICENSE', 'SKILL.md', 'references/one.md']);
  assert.match(run(fx, home, ['installed']).out, /alpha/);
  assert.match(run(fx, home, ['install', 'alpha']).out, /already up to date/);
});

test('--with-examples also downloads examples', (t) => {
  const { fx, home, skills } = setup(t);
  assert.equal(run(fx, home, ['install', 'alpha', '--with-examples']).code, 0);
  assert.equal(readFileSync(join(skills, 'alpha', 'examples', 'demo.txt'), 'utf8'), 'big demo media\n');
});

test('--dry-run writes nothing', (t) => {
  const { fx, home, skills } = setup(t);
  const result = run(fx, home, ['install', 'alpha', 'beta', '--dry-run']);
  assert.equal(result.code, 0); assert.match(result.out, /would write/);
  assert.ok(!existsSync(skills));
});

test('installing several skills without --yes is refused when there is no terminal', (t) => {
  const { fx, home, skills } = setup(t);
  const refused = run(fx, home, ['install', '--all']);
  assert.notEqual(refused.code, 0); assert.match(refused.err, /--yes/); assert.ok(!existsSync(join(skills, 'alpha')));
  assert.equal(run(fx, home, ['install', '--all', '--yes']).code, 0);
  for (const slug of ['alpha', 'beta', 'gamma', 'delta']) assert.ok(existsSync(join(skills, slug, 'SKILL.md')));
});

test('review notes are shown before install', (t) => {
  const { fx, home } = setup(t, { notes: [{ code: 'external-provider', severity: 'warning', message: 'Uses outside AI services.' }] });
  const result = run(fx, home, ['install', 'beta', '--yes']);
  assert.match(result.out, /review beta: Uses outside AI services/);
  assert.match(run(fx, home, ['info', 'beta']).out, /Review beta: Uses outside AI services/);
});

test('a file whose hash does not match is refused and nothing is installed', (t) => {
  const { fx, home, skills } = setup(t);
  writeFileSync(join(fx.root, 'skills', 'beta', 'SKILL.md'), 'tampered after the release\n');
  const result = run(fx, home, ['install', 'beta']);
  assert.notEqual(result.code, 0); assert.match(result.err, /does not match its recorded hash/);
  assert.ok(!existsSync(join(skills, 'beta')));
  assert.deepEqual(readdirSafe(skills).filter((name) => name.startsWith('.beta.tmp')), []);
});

test('path traversal and absolute paths in files.json are refused', (t) => {
  for (const bad of ['../evil.txt', '/etc/passwd', 'a/../../evil.txt', 'a\\b.txt', 'C:/x.txt', './x.txt', 'a//b.txt']) {
    const { fx, home, skills } = setup(t);
    const index = JSON.parse(readFileSync(join(fx.root, 'files.json'), 'utf8'));
    index.skills.beta.core.push([bad, 1, sha('x')]);
    writeFileSync(join(fx.root, 'files.json'), JSON.stringify(index));
    const result = run(fx, home, ['install', 'beta']);
    assert.notEqual(result.code, 0, bad); assert.match(result.err, /unsafe file path/, bad);
    assert.ok(!existsSync(join(skills, 'beta')), bad);
    assert.ok(!existsSync(join(home, 'evil.txt')) && !existsSync(join(skills, 'evil.txt')));
  }
});

test('unknown skill names and bad names are rejected', (t) => {
  const { fx, home } = setup(t);
  assert.match(run(fx, home, ['install', 'nope']).err, /No community skill named "nope"/);
  assert.match(run(fx, home, ['install', '../etc']).err, /not a skill name/);
});

test('a folder this tool did not install is never overwritten or removed', (t) => {
  const { fx, home, skills } = setup(t);
  mkdirSync(join(skills, 'beta'), { recursive: true }); writeFileSync(join(skills, 'beta', 'mine.txt'), 'my own skill\n');
  const result = run(fx, home, ['install', 'beta']);
  assert.match(result.out, /already there and was not installed by this tool/);
  assert.equal(readFileSync(join(skills, 'beta', 'mine.txt'), 'utf8'), 'my own skill\n');
  assert.match(run(fx, home, ['uninstall', 'beta']).out, /not installed by this tool/);
  assert.ok(existsSync(join(skills, 'beta', 'mine.txt')));
});

test('update picks up a new release and keeps untouched skills', (t) => {
  const { fx, home, skills } = setup(t);
  assert.equal(run(fx, home, ['install', 'alpha', 'gamma', '--with-examples']).code, 0);
  const changed = '---\nname: alpha\ndescription: Alpha skill v2\n---\n\nUse alpha better.\n';
  write(fx.root, 'alpha', 'SKILL.md', changed);
  const index = JSON.parse(readFileSync(join(fx.root, 'files.json'), 'utf8'));
  index.skills.alpha.core[0] = ['SKILL.md', Buffer.byteLength(changed), sha(changed)];
  writeFileSync(join(fx.root, 'files.json'), JSON.stringify(index));
  const result = run(fx, home, ['update']);
  assert.equal(result.code, 0, result.all); assert.match(result.out, /Changed 1, already current 1/);
  assert.equal(readFileSync(join(skills, 'alpha', 'SKILL.md'), 'utf8'), changed);
  assert.ok(existsSync(join(skills, 'alpha', 'examples', 'demo.txt')), 'update keeps the examples it was installed with');
});

test('uninstall removes only the installed files and keeps what you added', (t) => {
  const { fx, home, skills } = setup(t);
  run(fx, home, ['install', 'alpha', 'beta', '--yes']);
  writeFileSync(join(skills, 'alpha', 'my-notes.md'), 'keep me\n');
  const result = run(fx, home, ['uninstall', 'alpha']);
  assert.equal(result.code, 0, result.all);
  assert.ok(!existsSync(join(skills, 'alpha', 'SKILL.md')) && !existsSync(join(skills, 'alpha', 'references')));
  assert.equal(readFileSync(join(skills, 'alpha', 'my-notes.md'), 'utf8'), 'keep me\n');
  assert.ok(existsSync(join(skills, 'beta', 'SKILL.md')));
  assert.equal(run(fx, home, ['uninstall', '--all']).code, 0);
  assert.ok(!existsSync(join(skills, 'beta')) && !existsSync(join(skills, '.subclip-community.json')));
});

test('--agent all and --project choose the right folders', (t) => {
  const { fx, home } = setup(t);
  assert.equal(run(fx, home, ['install', 'gamma', '--agent', 'all']).code, 0);
  for (const dir of ['.claude', '.codex', '.agents']) assert.ok(existsSync(join(home, dir, 'skills', 'gamma', 'SKILL.md')), dir);
  const project = mkdtempSync(join(tmpdir(), 'community-cli-project-')); t.after(() => rmSync(project, { recursive: true, force: true }));
  assert.equal(run(fx, home, ['install', 'delta', '--project', '--agent', 'cursor'], { cwd: project }).code, 0);
  assert.ok(existsSync(join(project, '.agents', 'skills', 'delta', 'SKILL.md')));
  assert.ok(!existsSync(join(home, '.agents', 'skills', 'delta')));
  assert.match(run(fx, home, ['install', 'delta', '--agent', 'vim']).err, /Unknown agent/);
});

function readdirSafe(dir) { try { return readdirSync(dir); } catch { return []; } }
