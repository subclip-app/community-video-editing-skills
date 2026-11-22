// A small, strict YAML subset: block maps/lists, scalars, and flow maps/lists.
// No tags, anchors, aliases, duplicate keys, tabs, or multiline scalars.
export function parseYaml(source) {
  const lines = source.split(/\r?\n/).map((s, i) => ({ s, n: i + 1 }))
    .filter(({ s }) => s.trim() && !s.trimStart().startsWith('#'));
  let at = 0;
  function split(s, delimiter) {
    let quote = '', depth = 0, start = 0; const parts = [];
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      if (quote) { if (c === quote && s[i - 1] !== '\\') quote = ''; }
      else if (c === '"' || c === "'") quote = c;
      else if ('[{'.includes(c)) depth++;
      else if (']}'.includes(c)) depth--;
      else if (c === delimiter && depth === 0) { parts.push(s.slice(start, i).trim()); start = i + 1; }
    }
    if (quote || depth) throw Error('Unclosed YAML flow value');
    return [...parts, s.slice(start).trim()];
  }
  function pair(s) {
    const m = /^([A-Za-z][\w-]*):(?:\s+|$)(.*)$/.exec(s);
    if (!m) throw Error(`Expected YAML key: value, got ${s}`);
    return [m[1], m[2]];
  }
  function scalar(s) {
    s = s.trim();
    if (s.startsWith('"')) return JSON.parse(s);
    if (s.startsWith("'")) { if (!s.endsWith("'")) throw Error('Unclosed quote'); return s.slice(1, -1).replace(/''/g, "'"); }
    if (s.startsWith('[') && s.endsWith(']')) return s.slice(1, -1).trim() ? split(s.slice(1, -1), ',').map(scalar) : [];
    if (s.startsWith('{') && s.endsWith('}')) {
      const out = {}; if (!s.slice(1, -1).trim()) return out;
      for (const item of split(s.slice(1, -1), ',')) { const [k, v] = pair(item); put(out, k, scalar(v)); } return out;
    }
    s = s.replace(/\s+#.*$/, '').trim();
    if (s === 'true') return true; if (s === 'false') return false;
    if (s === 'null' || s === '~') return null;
    if (/^-?\d+(?:\.\d+)?$/.test(s)) return Number(s);
    if (!s || /^[!&*|>\[\]{}]/.test(s)) throw Error(`Unsupported YAML value: ${s}`);
    return s;
  }
  function put(out, k, v) { if (Object.hasOwn(out, k) || ['__proto__', 'constructor', 'prototype'].includes(k)) throw Error(`Duplicate or unsafe YAML key: ${k}`); out[k] = v; }
  function indent(row) { if (/\t/.test(row.s)) throw Error(`YAML tabs at line ${row.n}`); return row.s.length - row.s.trimStart().length; }
  function block(level) {
    const list = lines[at].s.trimStart().startsWith('- '); const out = list ? [] : {};
    while (at < lines.length && indent(lines[at]) === level) {
      const text = lines[at++].s.trim();
      if (list) {
        if (!text.startsWith('- ')) throw Error('Mixed YAML list and map');
        const rest = text.slice(2);
        if (/^[\w-]+:\s/.test(rest)) {
          const item = {}; const [k, v] = pair(rest); put(item, k, scalar(v));
          if (at < lines.length && indent(lines[at]) > level) { const tail = block(indent(lines[at])); for (const [k, v] of Object.entries(tail)) put(item, k, v); }
          out.push(item);
        } else out.push(scalar(rest));
      } else {
        const [k, v] = pair(text);
        put(out, k, v ? scalar(v) : at < lines.length && indent(lines[at]) > level ? block(indent(lines[at])) : null);
      }
      if (at < lines.length && indent(lines[at]) > level) throw Error(`Unexpected indentation at line ${lines[at].n}`);
    }
    return out;
  }
  if (!lines.length) throw Error('Empty YAML');
  if (indent(lines[0]) !== 0) throw Error('Root YAML must start at column 1');
  const result = block(0); if (at !== lines.length) throw Error('Invalid YAML indentation'); return result;
}
