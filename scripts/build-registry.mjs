import { readFile, writeFile, readdir, stat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { resolve, relative, basename } from 'node:path';
import { pathToFileURL } from 'node:url';
import { parseYaml } from './yaml.mjs';
import { walk, localFile } from './files.mjs';
import { checkCover, checkPreview } from './media.mjs';
import { readSkillFrontmatter, scanSkillFiles } from './desktop-scan.mjs';
export const licenses = ['MIT','Apache-2.0','BSD-2-Clause','BSD-3-Clause','ISC','AGPL-3.0','GPL-3.0','MPL-2.0','CC-BY-4.0','CC0-1.0','Unlicense'];
export const notStated = 'Not stated';
export const categories = ['explainers','slides','motion','3d','pixel-art','animation','captions','audio','promos','templates','workflow','broll','clipping'];
export const flagCodes = ['prompt-injection','exfiltration','remote-code','api-key','html-injection','hidden-text','missing-frontmatter','scripts','external-provider','files-skipped'];
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
function assert(ok, message) { if (!ok) throw Error(message); }
function object(value, label) { assert(value && typeof value === 'object' && !Array.isArray(value), `${label} must be a mapping`); }
function keys(value, allowed, label) { object(value, label); for (const key of Object.keys(value)) assert(allowed.includes(key), `Unknown ${label} field: ${key}`); }
function text(value, label, max = 300) { assert(typeof value === 'string' && value.trim() && value.length <= max && !/[\r\n\u0000-\u001f]/.test(value), `Invalid ${label}`); }
export function validateMetadata(m, slug) {
  keys(m, ['slug','name','seoTitle','preinstalled','summary','category','tags','cover','preview','adaptedBySubclip','license','upstream','addedAt','updatedAt','allowlist','examples','examplesCredit','examplesKind','sourceVideo'], 'skill.yml');
  const external = m.upstream && typeof m.upstream === 'object' && m.upstream.repo === undefined;
  assert(slugPattern.test(m.slug) && m.slug === slug, 'slug must be kebab-case and equal its folder name');
  text(m.name, 'name', 100); text(m.summary, 'summary', 160); assert(m.preinstalled === undefined || typeof m.preinstalled === 'boolean', 'preinstalled must be true or false'); assert(m.seoTitle === undefined || (typeof m.seoTitle === 'string' && m.seoTitle.length >= 20 && m.seoTitle.length <= 120 && !/[\u2014\u00b7\u2026]/u.test(m.seoTitle)), 'Invalid seoTitle (20 to 120 characters, no em dash, middle dot or ellipsis)');
  assert(categories.includes(m.category), 'Unknown category');
  assert(Array.isArray(m.tags) && m.tags.every(t => typeof t === 'string' && slugPattern.test(t)) && new Set(m.tags).size === m.tags.length, 'tags must be unique kebab-case strings');
  assert(typeof m.adaptedBySubclip === 'boolean', 'adaptedBySubclip must be boolean');
  assert(licenses.includes(m.license) || (external && m.license === notStated && m.upstream.license === notStated), 'License is not on the allowed list');
  assert(typeof m.addedAt === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(m.addedAt) && new Date(`${m.addedAt}T00:00:00Z`).toISOString().slice(0,10) === m.addedAt, 'addedAt must be a real YYYY-MM-DD date');
  assert(m.updatedAt === undefined || (typeof m.updatedAt === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(m.updatedAt) && new Date(`${m.updatedAt}T00:00:00Z`).toISOString().slice(0,10) === m.updatedAt && m.updatedAt >= m.addedAt), 'updatedAt must be a real YYYY-MM-DD date, not before addedAt');
  if (m.upstream !== null) {
    keys(m.upstream, ['repo','url','author','license','commit','syncedAt','note'], 'upstream');
    assert(m.upstream.commit === undefined || /^[0-9a-f]{40}$/.test(m.upstream.commit), 'upstream.commit must be a full 40-character commit SHA');
    assert(m.upstream.syncedAt === undefined || /^\d{4}-\d{2}-\d{2}$/.test(m.upstream.syncedAt), 'upstream.syncedAt must be YYYY-MM-DD');
    text(m.upstream.author, 'upstream.author');
    if (m.upstream.note !== undefined) text(m.upstream.note, 'upstream.note', 400);
    if (external) {
      // Non-GitHub source (for example a creator's guides). Credit only; the license is stated as "Not stated".
      assert(typeof m.upstream.url === 'string' && /^https:\/\/[^\s]+$/.test(m.upstream.url) && m.upstream.url.length <= 300, 'upstream.url must be an https link when upstream.repo is absent');
      assert(m.license === notStated, 'Skills without an upstream repo must have license "Not stated"');
      assert(m.upstream.license === notStated, 'Upstream without a repo must have license "Not stated"');
      assert(m.upstream.commit === undefined && m.upstream.syncedAt === undefined, 'upstream without a repo cannot record commit or syncedAt');
    } else {
      assert(/^[\w.-]+\/[\w.-]+$/.test(m.upstream.repo), 'upstream.repo must be owner/repo');
      assert(licenses.includes(m.upstream.license), 'Upstream license must allow changes and commercial use');
      assert(!m.upstream.url || m.upstream.url === `https://github.com/${m.upstream.repo}`, 'upstream.url must match its GitHub repository');
    }
  }
  assert(!m.adaptedBySubclip || m.upstream !== null, 'Adapted skills need upstream credit');
  if (m.examples !== undefined) {
    assert(Array.isArray(m.examples) && m.examples.length >= 1 && m.examples.length <= 100, 'examples must list 1 to 100 files');
    const seen = new Set();
    for (const item of m.examples) {
      keys(item, ['file','caption'], 'examples item'); text(item.file, 'examples file', 200);
      assert(/^examples\/[A-Za-z0-9_.-]+\.(?:jpe?g|png|webp|gif|mp4)$/i.test(item.file) && !seen.has(item.file), 'examples files live in examples/, are images or mp4 and are unique');
      seen.add(item.file); if (item.caption !== undefined) text(item.caption, 'examples caption', 140);
    }
    text(m.examplesCredit, 'examplesCredit', 300);
    assert(m.examplesKind === undefined || ['original','test'].includes(m.examplesKind), 'examplesKind must be original or test');
  } else assert(m.examplesCredit === undefined && m.examplesKind === undefined, 'examplesCredit needs examples');
  if (m.sourceVideo !== undefined) {
    keys(m.sourceVideo, ['youtube','title','channel','license'], 'sourceVideo');
    assert(/^[A-Za-z0-9_-]{11}$/.test(m.sourceVideo.youtube), 'sourceVideo.youtube must be an 11-character YouTube id');
    text(m.sourceVideo.title, 'sourceVideo.title', 200); text(m.sourceVideo.channel, 'sourceVideo.channel', 100); text(m.sourceVideo.license, 'sourceVideo.license', 60);
    assert(m.examples !== undefined, 'sourceVideo needs examples');
  }
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
const CATEGORY_LABELS = { explainers: 'Explainers', slides: 'Slides', motion: 'Motion graphics', '3d': '3D', 'pixel-art': 'Pixel art', animation: 'Animation', captions: 'Captions', audio: 'Audio and music', promos: 'Promos', templates: 'Templates', workflow: 'Workflows', broll: 'B-roll', clipping: 'Clipping' };
function attr(s) { return s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;'); }
/** The "Examples" section of a skill README, generated from skill.yml so GitHub shows the same references and examples as subclip.app. */
export function examplesBlock(m) {
  const items = m.examples ?? [];
  if (!items.length) return null;
  const out = ['<!-- examples:start -->', '', '## Examples', ''];
  if (m.sourceVideo) out.push(`<p align="center"><sub>Source video: <a href="https://www.youtube.com/watch?v=${attr(m.sourceVideo.youtube)}">${attr(m.sourceVideo.title)}</a>, ${attr(m.sourceVideo.channel)}, ${attr(m.sourceVideo.license)}</sub></p>`, '');
  // GitHub strips video tags from READMEs, so every clip is a looping GIF (hosted on the CDN) that links to the MP4.
  // Only the first EXAMPLE_GIF_LIMIT clips get a GIF; the rest are listed as links.
  let gifs = 0; const links = [];
  for (const item of items) {
    const src = item.file.split('/').map(encodeURIComponent).join('/');
    const caption = item.caption ? `<br><sub>${attr(item.caption)}</sub>` : '';
    if (!/\.mp4$/i.test(item.file)) { out.push(`<p align="center"><img src="${src}" alt="${attr(item.caption ?? m.name)}" width="720">${caption}</p>`, ''); continue; }
    const name = item.file.replace(/^examples\//, '').replace(/\.mp4$/i, '');
    if (gifs < EXAMPLE_GIF_LIMIT) {
      gifs += 1;
      out.push(`<p align="center"><a href="${src}"><img src="${README_PREVIEW_BASE}/${attr(m.slug)}/${encodeURIComponent(name)}.gif" alt="${attr(item.caption ?? m.name)}" width="480"></a><br><sub>${item.caption ? `${attr(item.caption)} ` : ''}<a href="${src}">Play with sound</a></sub></p>`, '');
    } else links.push(`<li><a href="${src}">${attr(item.caption ?? name)}</a></li>`);
  }
  if (links.length) out.push('<details><summary>More example videos</summary>', '', `<ul>${links.join('')}</ul>`, '', '</details>', '');
  if (m.examplesCredit) out.push(`<p align="center"><sub>${attr(m.examplesCredit)}</sub></p>`, '');
  out.push('<!-- examples:end -->');
  return out.join('\n');
}

/** Per-skill file list for the npx installer (packages/cli): path, size and sha256 of every file it may download, plus the scan notes.
 *  Lives in files.json, NOT in registry.json, so the website and the app keep reading the same small registry.
 *  core = what an install writes (SKILL.md, references, other text); examples = examples/ and media/ (--with-examples).
 *  Never installed: README.md, skill.yml, cover.* and preview.mp4 (they exist for the directory, not for the agent). */
const NOT_INSTALLED = /^(?:README\.md|skill\.yml|cover\.[A-Za-z0-9]+|preview\.mp4)$/u;
const BINARY = /\.(?:png|webp|jpe?g|gif|mp4|mp3|wav|woff2?|ttf|otf|pdf|zip)$/iu;
export async function skillFileIndex(folder, metadata) {
  const core = []; const examples = []; const scanned = []; let skipped = 0;
  for (const path of await walk(folder)) {
    const rel = relative(folder, path).replaceAll('\\', '/');
    if (NOT_INSTALLED.test(rel)) continue;
    const bytes = await readFile(path);
    const entry = [rel, bytes.length, createHash('sha256').update(bytes).digest('hex')];
    if (/^(?:examples|media)\//u.test(rel)) { examples.push(entry); continue; }
    core.push(entry);
    if (BINARY.test(rel) || bytes.includes(0)) skipped++; else scanned.push({ path: rel, text: bytes.toString('utf8') });
  }
  const allow = metadata.allowlist ?? [];
  const warnings = scanSkillFiles(scanned, skipped)
    .filter(f => f.severity !== 'info' && !allow.some(a => a.code === f.code && (a.file === undefined || a.file === f.file)))
    .map(f => ({ code: f.code, severity: f.severity, message: f.message }));
  const unique = [...new Map(warnings.map(w => [`${w.code}:${w.message}`, w])).values()];
  return { core, examples, ...(unique.length ? { notes: unique } : {}) };
}
const CLI_BLOCK = /<!-- cli:start -->[\s\S]*?<!-- cli:end -->/u;
/** One generated install line right under the README title, so the terminal install is visible on GitHub and on the skill page. */
function withCli(readme, slug) {
  const block = `<!-- cli:start -->\n> Install from your terminal: \`npx @subclip/community-skills install ${slug}\`\n<!-- cli:end -->`;
  if (CLI_BLOCK.test(readme)) return readme.replace(CLI_BLOCK, () => block);
  const heading = /^# .+$/mu.exec(readme);
  if (!heading) return readme;
  const at = heading.index + heading[0].length;
  return `${readme.slice(0, at)}\n\n${block}${readme.slice(at)}`;
}
function withExamples(readme, block) {
  if (block === null) return readme;
  if (/<!-- examples:start -->[\s\S]*?<!-- examples:end -->/.test(readme)) return readme.replace(/<!-- examples:start -->[\s\S]*?<!-- examples:end -->/, () => block);
  const at = readme.search(/^##\s+(?:credits?|sources?|source and licen[sc]e|license|acknowledg)/im);
  return at === -1 ? `${readme.replace(/\s*$/, '')}\n\n${block}\n` : `${readme.slice(0, at)}${block}\n\n${readme.slice(at)}`;
}
/** Looping preview GIFs for the README (GitHub cannot play repo MP4s inline). Made from each skill's preview.mp4 and hosted on the public CDN (see subclip-web scripts/publish-community-readme-previews.mjs). */
export const EXAMPLE_GIF_LIMIT = 12;
export const README_PREVIEW_BASE = 'https://subclipweb.subclip.app/agent-skills/community-readme';
const SITE_SKILL = 'https://www.subclip.app/agent-skills/community';
/** README catalog: a jump bar, then one section per category with a 2-column grid of looping previews, name, summary, credit and links. */
export function catalog(skills) {
  // README order: Promos, Motion graphics and Animation first, then the rest, then B-roll last.
  const first = ['promos', 'motion', 'animation'], last = ['broll'];
  const order = [...first, ...Object.keys(CATEGORY_LABELS).filter(c => !first.includes(c) && !last.includes(c)), ...last];
  const groups = [...new Set(skills.map(s => s.category))].sort((a, b) => (order.indexOf(a) + 1 || 99) - (order.indexOf(b) + 1 || 99) || a.localeCompare(b));
  const anchor = g => (CATEGORY_LABELS[g] ?? g).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const cellHtml = s => [
    `<td width="50%" valign="top">`,
    `<a href="${attr(s.path)}"><img src="${s.preview ? `${README_PREVIEW_BASE}/${attr(s.slug)}.gif` : attr(s.cover)}" alt="${attr(s.name)} preview" width="100%"></a><br>`,
    `<h4><a href="${attr(s.path)}">${attr(s.name)}</a></h4>`,
    `<sub>${attr(s.summary)}</sub><br>`,
    `<sub>${s.upstream ? `Adapted from <a href="${attr(s.upstream.url)}">${attr(s.upstream.repo ?? s.upstream.url.replace(/^https:\/\//, ''))}</a>` : 'Written for Subclip'} &nbsp;|&nbsp; ${attr(s.license)} &nbsp;|&nbsp; <a href="${SITE_SKILL}/${attr(s.slug)}">View on subclip.app</a></sub>`,
    `</td>`,
  ].join('\n');
  const out = [
    `<p align="center"><b>${skills.length} skills</b> in ${groups.length} categories</p>`,
    '',
    `<p align="center">${groups.map(g => `<a href="#${anchor(g)}">${CATEGORY_LABELS[g] ?? g}</a>`).join(' &nbsp;|&nbsp; ')}</p>`,
  ];
  for (const group of groups) {
    const items = skills.filter(s => s.category === group).sort((a, b) => (b.addedAt).localeCompare(a.addedAt) || a.name.localeCompare(b.name));
    out.push('', `### ${CATEGORY_LABELS[group] ?? group}`, '', '<table>');
    for (let i = 0; i < items.length; i += 2) {
      const row = items.slice(i, i + 2).map(cellHtml);
      while (row.length < 2) row.push('<td width="50%"></td>');
      out.push('<tr>', ...row, '</tr>');
    }
    out.push('</table>');
  }
  return out.join('\n');
}
/** install-yourself.yml: skills listed but not adapted because of their license. Preview = GitHub's social card. */
export async function readInstallYourself(root) {
  const raw = await readFile(resolve(root, 'install-yourself.yml'), 'utf8').catch(e => { if (e.code === 'ENOENT') return null; throw e; });
  if (raw === null) return null;
  const list = parseYaml(raw);
  assert(Array.isArray(list), 'install-yourself.yml must be a list');
  return Promise.all(list.map(async (item, i) => {
    keys(item, ['slug','name','repo','category','what','why','preview','video','gallery','galleryCredit','mirror','examples','references'], `install-yourself.yml item ${i + 1}`);
    assert(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.slug ?? ''), `install-yourself.yml item ${i + 1} needs a kebab-case slug`);
    assert(item.category === undefined || CATEGORY_LABELS[item.category], `Unknown install-yourself category: ${item.category}`);
    const gallery = item.gallery ?? []; assert(Array.isArray(gallery) && gallery.every(u => typeof u === 'string' && u.startsWith('https://')), 'install-yourself gallery must list https URLs');
    text(item.name, 'install-yourself name', 80); text(item.what, 'install-yourself what', 300); text(item.why, 'install-yourself why', 400);
    assert(/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(item.repo), `Invalid install-yourself repo: ${item.repo}`);
    for (const v of [item.name, item.what, item.why]) assert(!/[—·]/u.test(v), 'install-yourself.yml contains an em dash or middle dot');
    const references = [];
    if (item.references !== undefined) {
      assert(Array.isArray(item.references) && item.references.length <= 30, 'install-yourself references must list up to 30 groups');
      for (const group of item.references) {
        keys(group, ['group','links'], 'install-yourself references group'); text(group.group, 'install-yourself references group', 80);
        assert(Array.isArray(group.links) && group.links.length >= 1 && group.links.length <= 120, 'install-yourself references links must list 1 to 120 links');
        for (const link of group.links) {
          keys(link, ['label','url'], 'install-yourself references link'); text(link.label, 'install-yourself reference label', 120);
          assert(typeof link.url === 'string' && link.url.startsWith('https://'), 'install-yourself reference urls must be https');
          assert(!/[\u2014\u00b7]/u.test(link.label + group.group), 'install-yourself reference contains an em dash or middle dot');
        }
        references.push({ group: group.group, links: group.links.map(l => ({ label: l.label, url: l.url })) });
      }
    }
    let video;
    if (item.video !== undefined) {
      const prefix = `install-yourself/${item.slug}/`;
      assert(typeof item.video === 'string' && item.video.startsWith(prefix), `Install-yourself video must be under ${prefix}`);
      const file = await localFile(root, item.video);
      await checkPreview(file);
      video = item.video.split('/').filter(Boolean).join('/');
    }
    const examples = [];
    if (item.examples !== undefined) {
      assert(Array.isArray(item.examples) && item.examples.length >= 1 && item.examples.length <= 12, 'install-yourself examples must list 1 to 12 files');
      const prefix = `install-yourself/${item.slug}/examples/`;
      for (const ex of item.examples) {
        keys(ex, ['file','caption'], 'install-yourself examples item'); text(ex.file, 'install-yourself example file', 200); text(ex.caption, 'install-yourself example caption', 140);
        assert(ex.file.startsWith(prefix) && /^[A-Za-z0-9_.\/-]+\.(?:jpe?g|png|webp|gif|mp4)$/i.test(ex.file) && !ex.file.includes('..'), `install-yourself examples live under ${prefix}`);
        assert(!/[\u2014\u00b7]/u.test(ex.caption), 'install-yourself example caption contains an em dash or middle dot');
        const size = (await stat(await localFile(root, ex.file))).size; const isVideo = /\.mp4$/i.test(ex.file);
        assert(size > 0 && size <= (isVideo ? 8_000_000 : 600_000), `Example too large: ${ex.file}`);
        examples.push({ path: ex.file, kind: isVideo ? 'video' : 'image', caption: ex.caption });
      }
    }
    return { slug: item.slug, name: item.name, repo: item.repo, url: `https://github.com/${item.repo}`, category: item.category ?? 'workflow', ...(item.mirror ? { mirror: item.mirror } : {}), ...(examples.length ? { examples } : {}), ...(references.length ? { references } : {}), what: item.what, why: item.why, preview: item.preview ?? `https://opengraph.githubassets.com/1/${item.repo}`, ...(video ? { video } : {}), gallery, ...(item.galleryCredit ? { galleryCredit: item.galleryCredit } : {}) };
  }));
}
export function installYourselfMarkdown(items) {
  const rows = items.map(i => {
    const video = i.video ? `<br><a href="${i.video.split('/').map(encodeURIComponent).join('/')}">Watch the silent preview</a>` : '';
    return `| [<img src="${attr(i.preview)}" alt="${attr(i.repo)} on GitHub" width="240">](${i.url})${video} | **[${cell(i.name)}](${i.url})**<br>${cell(i.repo)}${i.mirror ? `<br>Backup fork: [${cell(i.mirror)}](https://github.com/${i.mirror})` : ''} | ${cell(i.what)} | ${cell(i.why)} |`;
  });
  return ['# Install it yourself', '', 'These projects are not adapted or copied into this repository because their licenses do not grant the permissions needed. Installing an original does not change its license. Check its terms before using its material.', '', 'This file is generated from `install-yourself.yml` by `npm run build`.', '', '| Preview | Skill | What it does | Why it is not adapted |', '| --- | --- | --- | --- |', ...rows, '', '## How to install it yourself in Subclip', '', 'Open the **Skills** window, choose **Add skill**, and paste the original GitHub link above (click a preview to open it). The app scans it and your own agent reviews it before you confirm installation. Follow the original author\'s license and attribution terms, including any limits on commercial use.', ''].join('\n');
}
/** options.files: also write (or, with check, verify) files.json. Off by default: a skill commit never touches it, only a release does (scripts/release.mjs). */
export async function build(root = process.cwd(), check = false, options = {}) {
  const skills = []; const readmeWrites = []; const fileIndex = {};
  const entries = await readdir(resolve(root, 'skills'), { withFileTypes: true });
  for (const entry of entries.sort((a,b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)) {
    assert(entry.isDirectory() && !entry.isSymbolicLink(), `Expected skill folder: ${entry.name}`);
    const folder = resolve(root, 'skills', entry.name); const m = await readMetadata(folder);
    const files = await walk(folder);
    await localFile(folder, 'SKILL.md'); await localFile(folder, 'README.md');
    const license = await readFile(await localFile(folder, 'LICENSE'), 'utf8'); assert(license.trim(), 'LICENSE must not be empty');
    const cover = await localFile(folder, m.cover); await checkCover(cover);
    if (m.preview !== undefined) await checkPreview(await localFile(folder, m.preview));
    const examples = [];
    for (const item of m.examples ?? []) {
      const file = await localFile(folder, item.file); const size = (await stat(file)).size; const video = /\.mp4$/i.test(item.file);
      assert(size > 0 && size <= (video ? 8_000_000 : 600_000), `Example too large (images 600 KB, videos 8 MB): ${item.file}`);
      examples.push({ path: `skills/${m.slug}/${item.file}`, kind: video ? 'video' : 'image', ...(item.caption ? { caption: item.caption } : {}) });
    }
    { const file = resolve(folder, 'README.md'); const current = await readFile(file, 'utf8'); readmeWrites.push([file, withCli(withExamples(current, examplesBlock(m)), m.slug)]); }
    const names = [];
    for (const file of files.filter(f => basename(f) === 'SKILL.md')) {
      const front = readSkillFrontmatter(await readFile(file, 'utf8'));
      assert(front.hasFrontmatter && slugPattern.test(front.name) && front.description, `SKILL.md needs name and description: ${file}`);
      assert(!names.includes(front.name), `Duplicate skill name: ${front.name}`); names.push(front.name);
    }
    for (const file of files.filter(f => /\.(md|yml|yaml|txt|svg)$/i.test(f))) assert(!/[\u2014\u00b7]/u.test(await readFile(file,'utf8')), `Text contains an em dash or middle dot: ${relative(root,file)}`);
    const upstream = m.upstream === null ? null : { ...(m.upstream.repo ? { repo: m.upstream.repo } : {}), url: m.upstream.repo ? `https://github.com/${m.upstream.repo}` : m.upstream.url, author: m.upstream.author, license: m.upstream.license, ...(m.upstream.commit ? { commit: m.upstream.commit } : {}), ...(m.upstream.syncedAt ? { syncedAt: m.upstream.syncedAt } : {}), ...(m.upstream.note ? { note: m.upstream.note } : {}) };
    if (options.files) fileIndex[m.slug] = await skillFileIndex(folder, m);
    skills.push({ slug:m.slug, name:m.name, ...(m.seoTitle ? { seoTitle: m.seoTitle } : {}), ...(m.preinstalled ? { preinstalled: true } : {}), summary:m.summary, category:m.category, tags:m.tags, path:`skills/${m.slug}`, skills:names.sort(), cover:`skills/${m.slug}/${m.cover}`, ...(m.preview ? {preview:`skills/${m.slug}/${m.preview}`} : {}), adaptedBySubclip:m.adaptedBySubclip, license:m.license, upstream, addedAt:m.addedAt, updatedAt:m.updatedAt ?? m.addedAt, ...(examples.length ? { examples, examplesCredit: m.examplesCredit, examplesKind: m.examplesKind ?? 'original', ...(m.sourceVideo ? { sourceVideo: m.sourceVideo } : {}) } : {}) });
  }
  const installYourself = await readInstallYourself(root);
  const registry = JSON.stringify({version:1, repository:'subclip-app/community-video-editing-skills', skills, ...(installYourself ? { installYourself } : {})}, null, 2) + '\n';
  const filesJson = JSON.stringify({ version: 1, repository: 'subclip-app/community-video-editing-skills', skills: fileIndex }) + '\n';
  const readmePath = resolve(root, 'README.md'); const readme = await readFile(readmePath,'utf8');
  assert((readme.match(/<!-- skills:start -->/g) ?? []).length === 1 && (readme.match(/<!-- skills:end -->/g) ?? []).length === 1 && readme.indexOf('<!-- skills:start -->') < readme.indexOf('<!-- skills:end -->'), 'README needs one ordered pair of skills markers');
  const table = catalog(skills);
  const nextReadme = readme.replace(/<!-- skills:start -->[\s\S]*?<!-- skills:end -->/, `<!-- skills:start -->\n\n${table}\n\n<!-- skills:end -->`);
  for (const [file, next] of [[resolve(root,'registry.json'),registry],...(options.files ? [[resolve(root,'files.json'),filesJson]] : []),[readmePath,nextReadme], ...readmeWrites, ...(installYourself ? [[resolve(root,'INSTALL_YOURSELF.md'),installYourselfMarkdown(installYourself)]] : [])]) {
    const current = await readFile(file,'utf8').catch(e => { if (e.code === 'ENOENT') return null; throw e; });
    if (current !== next) { assert(!check, `${basename(file)} is stale. Run npm run build.`); await writeFile(file,next); }
  }
  return skills;
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try { assert(process.argv.slice(2).every(a => a === '--check' || a === '--files'), 'Usage: node scripts/build-registry.mjs [--check] [--files]'); const skills = await build(process.cwd(),process.argv.includes('--check'),{ files: process.argv.includes('--files') }); console.log(`Validated ${skills.length} skill(s). Registry and README ${process.argv.includes('--check') ? 'are current' : 'built'}.`); }
  catch(e) { console.error(e.message); process.exitCode = 1; }
}
