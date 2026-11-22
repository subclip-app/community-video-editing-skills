// Reports adapted skills whose original repository has new commits since we last synced (skill.yml upstream.commit).
// Usage: node scripts/check-upstream.mjs [--markdown]   (GITHUB_TOKEN raises the API rate limit)
import { readFile } from 'node:fs/promises';
const registry = JSON.parse(await readFile(new URL('../registry.json', import.meta.url), 'utf8'));
const headers = { accept: 'application/vnd.github+json', ...(process.env.GITHUB_TOKEN ? { authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}) };
const markdown = process.argv.includes('--markdown');
const rows = [];
for (const skill of registry.skills) {
  const up = skill.upstream;
  if (!up?.commit) continue;
  const response = await fetch(`https://api.github.com/repos/${up.repo}/compare/${up.commit}...HEAD`, { headers });
  if (!response.ok) { rows.push({ skill, status: `could not check (HTTP ${response.status})` }); continue; }
  const compare = await response.json();
  const behind = compare.ahead_by ?? 0;
  const latest = compare.commits?.at(-1)?.commit?.committer?.date?.slice(0, 10);
  rows.push({ skill, behind, latest, url: compare.html_url, status: behind ? `${behind} new commit${behind === 1 ? '' : 's'} upstream (latest ${latest})` : 'up to date' });
}
if (markdown) {
  const stale = rows.filter(r => r.behind);
  console.log(stale.length ? ['Adapted skills whose original changed since our last sync:', '', '| Skill | Synced | Upstream | Changes |', '| --- | --- | --- | --- |', ...stale.map(r => `| ${r.skill.name} | ${r.skill.upstream.syncedAt ?? 'unknown'} | ${r.status} | [compare](${r.url}) |`), '', 'Review the changes, port what fits into the Subclip version, then update `upstream.commit` and `upstream.syncedAt` in its skill.yml.'].join('\n') : 'All adapted skills are in sync with their originals.');
} else {
  for (const r of rows) console.log(`${r.skill.slug}: synced ${r.skill.upstream.syncedAt ?? '?'}, ${r.status}${r.url && r.behind ? ` ${r.url}` : ''}`);
}
