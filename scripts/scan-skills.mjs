import { readdir, readFile } from 'node:fs/promises';
import { resolve, relative } from 'node:path';
import { pathToFileURL } from 'node:url';
import { scanSkillFiles } from './desktop-scan.mjs';
import { readMetadata } from './build-registry.mjs';
import { walk } from './files.mjs';
export { scanSkillFiles } from './desktop-scan.mjs';
export function applyAllowlist(findings, allowlist = []) {
  return findings.map(finding => {
    const rule = allowlist.find(a => a.code === finding.code && (a.file === undefined || a.file === finding.file));
    return rule ? { ...finding, allowlisted: true, reason: rule.reason } : finding;
  });
}
export async function scan(root = process.cwd(), log = console.log) {
  let highRisk = false;
  for (const entry of (await readdir(resolve(root,'skills'), {withFileTypes:true})).sort((a,b) => a.name.localeCompare(b.name,'en'))) {
    if (!entry.isDirectory() || entry.isSymbolicLink()) throw Error(`Expected skill folder: ${entry.name}`);
    const folder = resolve(root,'skills',entry.name); const metadata = await readMetadata(folder); const files = []; let skipped = 0;
    for (const path of await walk(folder)) {
      const bytes = await readFile(path);
      // Scan all UTF-8 text, including scripts and metadata. Skip only binary media.
      if (/\.(?:png|webp|jpe?g|mp4|mp3|wav|woff2?|ttf|otf|pdf|zip)$/i.test(path) || bytes.includes(0)) { skipped++; continue; }
      files.push({path:relative(folder,path).replaceAll('\\','/'), text:bytes.toString('utf8')});
    }
    const findings = applyAllowlist(scanSkillFiles(files,skipped),metadata.allowlist);
    log(`${entry.name}: ${findings.length} finding(s)`);
    for (const f of findings) {
      log(`  ${f.severity} ${f.code}${f.file ? ` ${f.file}:${f.line}` : ''}: ${f.message}${f.allowlisted ? ` [allowlisted: ${f.reason}]` : ''}`);
      if (f.severity === 'danger' && !f.allowlisted) highRisk = true;
    }
  }
  return highRisk;
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try { process.exitCode = await scan() ? 1 : 0; }
  catch(e) { console.error(e.message); process.exitCode = 1; }
}
