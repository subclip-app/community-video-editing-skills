import { readFile, writeFile, readdir } from 'node:fs/promises';
import { resolve, relative, basename } from 'node:path';
import { pathToFileURL } from 'node:url';
import { parseYaml } from './yaml.mjs';
import { walk, localFile } from './files.mjs';
import { checkCover, checkPreview } from './media.mjs';
import { readSkillFrontmatter } from './desktop-scan.mjs';
export const licenses = ['MIT','Apache-2.0','BSD-2-Clause','BSD-3-Clause','ISC','AGPL-3.0','GPL-3.0','MPL-2.0','CC-BY-4.0','CC0-1.0','Unlicense'];
export const categories = ['explainers','slides','motion','3d','pixel-art','animation','captions','audio','promos','templates','workflow'];
export const flagCodes = ['prompt-injection','exfiltration','remote-code','api-key','html-injection','hidden-text','missing-frontmatter','scripts','external-provider','files-skipped'];
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
function assert(ok, message) { if (!ok) throw Error(message); }
function object(value, label) { assert(value && typeof value === 'object' && !Array.isArray(value), `${label} must be a mapping`); }
function keys(value, allowed, label) { object(value, label); for (const key of Object.keys(value)) assert(allowed.includes(key), `Unknown ${label} field: ${key}`); }
function text(value, label, max = 300) { assert(typeof value === 'string' && value.trim() && value.length <= max && !/[\r\n\u0000-\u001f]/.test(value), `Invalid ${label}`); }
export function validateMetadata(m, slug) {
  keys(m, ['slug','name','summary','category','tags','cover','preview','adaptedBySubclip','license','upstream','addedAt','allowlist'], 'skill.yml');
  assert(slugPattern.test(m.slug) && m.slug === slug, 'slug must be kebab-case and equal its folder name');
  text(m.name, 'name', 100); text(m.summary, 'summary', 160);
  assert(categories.includes(m.category), 'Unknown category');
  assert(Array.isArray(m.tags) && m.tags.every(t => typeof t === 'string' && slugPattern.test(t)) && new Set(m.tags).size === m.tags.length, 'tags must be unique kebab-case strings');
  assert(typeof m.adaptedBySubclip === 'boolean', 'adaptedBySubclip must be boolean');
  assert(licenses.includes(m.license), 'License is not on the allowed list');
  assert(typeof m.addedAt === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(m.addedAt) && new Date(`${m.addedAt}T00:00:00Z`).toISOString().slice(0,10) === m.addedAt, 'addedAt must be a real YYYY-MM-DD date');
  if (m.upstream !== null) {
    keys(m.upstream, ['repo','url','author','license'], 'upstream');
    assert(/^[\w.-]+\/[\w.-]+$/.test(m.upstream.repo), 'upstream.repo must be owner/repo');
    text(m.upstream.author, 'upstream.author');
    assert(licenses.includes(m.upstream.license), 'Upstream license must allow changes and commercial use');
    assert(!m.upstream.url || m.upstream.url === `https://github.com/${m.upstream.repo}`, 'upstream.url must match its GitHub repository');
  }
  assert(!m.adaptedBySubclip || m.upstream !== null, 'Adapted skills need upstream credit');
  if (m.allowlist !== undefined) {
    assert(Array.isArray(m.allowlist), 'allowlist must be a list');
    for (const item of m.allowlist) {
      keys(item, ['code','file','reason'], 'allowlist'); assert(flagCodes.includes(item.code), 'Unknown allowlist code'); text(item.reason, 'allowlist reason');
      if (item.file !== undefined) assert(typeof item.file === 'string' && !item.file.startsWith('/') && !item.file.split('/').includes('..'), 'allowlist.file must be relative');
    }
  }
  return m;
}
export async function readMetadata(folder) { return validateMetadata(parseYaml(await readFile(resolve(folder, 'skill.yml'), 'utf8')), basename(folder)); }
function cell(s) { return s.replaceAll('&', '&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('|','&#124;').replaceAll('[','&#91;').replaceAll(']','&#93;'); }
export async function build(root = process.cwd(), check = false) {
  const skills = [];
  const entries = await readdir(resolve(root, 'skills'), { withFileTypes: true });
  for (const entry of entries.sort((a,b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)) {
    assert(entry.isDirectory() && !entry.isSymbolicLink(), `Expected skill folder: ${entry.name}`);
    const folder = resolve(root, 'skills', entry.name); const m = await readMetadata(folder);
    const files = await walk(folder);
    await localFile(folder, 'SKILL.md'); await localFile(folder, 'README.md');
    const license = await readFile(await localFile(folder, 'LICENSE'), 'utf8'); assert(license.trim(), 'LICENSE must not be empty');
    const cover = await localFile(folder, m.cover); await checkCover(cover);
    if (m.preview !== undefined) await checkPreview(await localFile(folder, m.preview));
    const names = [];
    for (const file of files.filter(f => basename(f) === 'SKILL.md')) {
      const front = readSkillFrontmatter(await readFile(file, 'utf8'));
      assert(front.hasFrontmatter && slugPattern.test(front.name) && front.description, `SKILL.md needs name and description: ${file}`);
      assert(!names.includes(front.name), `Duplicate skill name: ${front.name}`); names.push(front.name);
    }
    for (const file of files.filter(f => /\.(md|yml|yaml|txt|svg)$/i.test(f))) assert(!/[\u2014\u00b7]/u.test(await readFile(file,'utf8')), `Text contains an em dash or middle dot: ${relative(root,file)}`);
    const upstream = m.upstream === null ? null : { repo: m.upstream.repo, url: `https://github.com/${m.upstream.repo}`, author: m.upstream.author, license: m.upstream.license };
    skills.push({ slug:m.slug, name:m.name, summary:m.summary, category:m.category, tags:m.tags, path:`skills/${m.slug}`, skills:names.sort(), cover:`skills/${m.slug}/${m.cover}`, ...(m.preview ? {preview:`skills/${m.slug}/${m.preview}`} : {}), adaptedBySubclip:m.adaptedBySubclip, license:m.license, upstream, addedAt:m.addedAt });
  }
  const registry = JSON.stringify({version:1, repository:'subclip-app/community-video-editing-skills', skills}, null, 2) + '\n';
  const readmePath = resolve(root, 'README.md'); const readme = await readFile(readmePath,'utf8');
  assert((readme.match(/<!-- skills:start -->/g) ?? []).length === 1 && (readme.match(/<!-- skills:end -->/g) ?? []).length === 1 && readme.indexOf('<!-- skills:start -->') < readme.indexOf('<!-- skills:end -->'), 'README needs one ordered pair of skills markers');
  const table = ['| Cover | Skill | Summary | Credit |','| --- | --- | --- | --- |', ...skills.map(s => `| <img src="${s.cover}" alt="${cell(s.name).replaceAll('"','&quot;')} cover" width="240"> | [${cell(s.name)}](${s.path}) | ${cell(s.summary)} | ${s.upstream ? `Adapted from [${cell(s.upstream.repo)}](${s.upstream.url}) by ${cell(s.upstream.author)}` : 'Written for Subclip'} |`)].join('\n');
  const nextReadme = readme.replace(/<!-- skills:start -->[\s\S]*?<!-- skills:end -->/, `<!-- skills:start -->\n\n${table}\n\n<!-- skills:end -->`);
  for (const [file, next] of [[resolve(root,'registry.json'),registry],[readmePath,nextReadme]]) {
    const current = await readFile(file,'utf8').catch(e => { if (e.code === 'ENOENT') return null; throw e; });
    if (current !== next) { assert(!check, `${basename(file)} is stale. Run npm run build.`); await writeFile(file,next); }
  }
  return skills;
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try { assert(process.argv.slice(2).every(a => a === '--check'), 'Usage: node scripts/build-registry.mjs [--check]'); const skills = await build(process.cwd(),process.argv.includes('--check')); console.log(`Validated ${skills.length} skill(s). Registry and README ${process.argv.includes('--check') ? 'are current' : 'built'}.`); }
  catch(e) { console.error(e.message); process.exitCode = 1; }
}
