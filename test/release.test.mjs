import { test } from 'node:test';
import assert from 'node:assert/strict';
import { bump, releaseChanges, releaseNotes } from '../scripts/release.mjs';

test('bump understands patch, minor, major and an exact version', () => {
  assert.equal(bump('0.1.0', 'patch'), '0.1.1');
  assert.equal(bump('0.1.9', 'minor'), '0.2.0');
  assert.equal(bump('1.2.3', 'major'), '2.0.0');
  assert.equal(bump('0.1.0', '0.1.0'), '0.1.0');
  assert.throws(() => bump('0.1.0', 'banana'), /Usage/);
});

test('release changes list added, updated and removed skills', () => {
  const skill = (slug, updatedAt = '2026-11-01') => ({ slug, name: slug.toUpperCase(), addedAt: '2026-11-01', updatedAt });
  const files = (hash) => ({ skills: { a: { core: [['SKILL.md', 1, hash]], examples: [] }, b: { core: [['SKILL.md', 1, 'same']], examples: [] }, c: { core: [], examples: [] } } });
  const before = { registry: { skills: [skill('a'), skill('b'), skill('gone')] }, files: files('old') };
  const after = { registry: { skills: [skill('a'), skill('b'), skill('c')] }, files: files('new') };
  assert.deepEqual(releaseChanges(before, after), { added: ['c'], removed: ['gone'], updated: ['a'] });
  // Without files.json the updatedAt date decides.
  const dated = releaseChanges({ registry: { skills: [skill('a')] } }, { registry: { skills: [skill('a', '2026-11-20')] } });
  assert.deepEqual(dated.updated, ['a']);
  const notes = releaseNotes('0.2.0', 'v0.1.0', { added: ['c'], removed: [], updated: ['a'] }, after.registry);
  assert.match(notes, /### Added[\s\S]*C \(`c`\)/); assert.match(notes, /### Updated[\s\S]*A \(`a`\)/);
  assert.match(notes, /--ref v0\.2\.0/); assert.doesNotMatch(notes, /[—·]/u);
});
