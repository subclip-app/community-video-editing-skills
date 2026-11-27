# Scene kit

The reference video was built with this kit. It is one standalone HyperFrames document per scene: the template below, a `SCENE` object with the data, and the kit script that turns the data into DOM and one paused GSAP timeline. Pass the finished document to `validate_runtime_layer_source`, then to `add_runtime_layer` (kind `hyperframes`, x 50, y 50, width 100, height 100, the scene start and duration). Fonts are Inter and JetBrains Mono (SIL Open Font License) from the pinned fontsource files; ligatures are off so `=>` and `===` read as typed.

The layer runtime does not allow `<link>`, `innerHTML`, or the words parent, top or opener before a dot in scripts; the kit avoids all three.

## SCENE fields

| Field | Meaning |
| --- | --- |
| `title`, `titleIn` | scene title; `titleIn: false` shows it from the first frame (use it for every scene after a cut) |
| `duration` | seconds; equals the layer duration |
| `nodes[]` | `id`, `label`, `sub` (file path), `kind` (core, runtime, dep, ext, user, note, accent), `x`, `y`, `w`, optional `h` |
| `edges[]` | `id`, `points` (orthogonal polyline), optional `label` with `lx`, `ly`, `dashed`, `arrow: false`, `color` |
| `panel` | side panel box `x`, `y`, `w`, `h`, `at` |
| `code`, `excerpts[]`, `lh` | code panel box; each excerpt has `id`, `file`, `from` (first line number) and real `lines` (at most 20) |
| `legend` | `x`, `y`, `at`, `items` as `[kind, label]` pairs with truthful labels |
| `steps[]` | `at` plus any of `enter`, `connect`, `focus` (list or null), `trace`, `parallel`, `traceDelay`, `panel` ({title, path, text}, backticks mark code), `code` ({excerpt, line, span}, `line: null` shows the excerpt without a highlight), `fn` (custom tweens) |
| `css`, `extra` | scene-specific CSS and extra DOM (for example the closing loop) |

The kinds map to the palette in `diagram-types.md` (core = backend green, runtime = cloud amber, dep = messagebus orange, ext = external slate, user = database violet renamed, accent = Subclip blue).

## Template

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<style>
  @font-face{font-family:"Inter";font-weight:400;font-display:block;src:url(https://cdn.jsdelivr.net/npm/@fontsource/inter@5.1.0/files/inter-latin-400-normal.woff2) format("woff2")}
  @font-face{font-family:"Inter";font-weight:600;font-display:block;src:url(https://cdn.jsdelivr.net/npm/@fontsource/inter@5.1.0/files/inter-latin-600-normal.woff2) format("woff2")}
  @font-face{font-family:"Inter";font-weight:700;font-display:block;src:url(https://cdn.jsdelivr.net/npm/@fontsource/inter@5.1.0/files/inter-latin-700-normal.woff2) format("woff2")}
  @font-face{font-family:"JetBrains Mono";font-weight:400;font-display:block;src:url(https://cdn.jsdelivr.net/npm/@fontsource/jetbrains-mono@5.1.0/files/jetbrains-mono-latin-400-normal.woff2) format("woff2")}
  @font-face{font-family:"JetBrains Mono";font-weight:600;font-display:block;src:url(https://cdn.jsdelivr.net/npm/@fontsource/jetbrains-mono@5.1.0/files/jetbrains-mono-latin-600-normal.woff2) format("woff2")}
  @font-face{font-family:"JetBrains Mono";font-weight:700;font-display:block;src:url(https://cdn.jsdelivr.net/npm/@fontsource/jetbrains-mono@5.1.0/files/jetbrains-mono-latin-700-normal.woff2) format("woff2")}
    html, body { margin: 0; width: 100%; height: 100%; overflow: hidden; background: #ffffff; }
  #scene { font-variant-ligatures: none; font-feature-settings: 'liga' 0, 'calt' 0; position: relative; width: 1920px; height: 1080px; overflow: clip; background: #ffffff; font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif; color: #111827; }
  #scene .grid { position: absolute; inset: 0; background-image: radial-gradient(#e2e7ec 1.6px, transparent 1.6px); background-size: 32px 32px; opacity: 0.9; }
  .title { position: absolute; left: 96px; top: 72px; font-weight: 700; font-size: 54px; letter-spacing: -0.02em; color: #0f172a; }
  .edges { position: absolute; left: 0; top: 0; }
  .nodes { position: absolute; inset: 0; }
  .nwrap { position: absolute; }
  .card { position: absolute; inset: 0; border: 2.5px solid; border-radius: 12px; box-sizing: border-box; padding: 18px 22px 0 30px; overflow: hidden; }
  .card.note { border-style: dashed; padding: 14px 18px 0 18px; }
  .nbar { position: absolute; left: 0; top: 0; bottom: 0; width: 8px; }
  .nlabel { font-weight: 600; font-size: 29px; line-height: 1.15; white-space: nowrap; }
  .card.note .nlabel { font-family: 'JetBrains Mono', Menlo, monospace; font-weight: 600; font-size: 20px; }
  .nsub { margin-top: 8px; font-family: 'JetBrains Mono', Menlo, monospace; font-weight: 600; font-size: 19px; white-space: nowrap; }
  .elabel { position: absolute; transform: translate(-50%, -50%); background: #ffffff; padding: 3px 10px; border-radius: 6px; font-family: 'JetBrains Mono', Menlo, monospace; font-size: 19px; font-weight: 600; color: #475569; white-space: nowrap; }
  .token { position: absolute; left: -11px; top: -11px; width: 22px; height: 22px; border-radius: 50%; background: #153592; box-shadow: 0 0 0 6px rgba(38, 201, 213, 0.35); }
  .panel { position: absolute; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 16px; box-shadow: 0 18px 40px rgba(15, 23, 42, 0.07); overflow: hidden; }
  .pstep { position: absolute; left: 34px; right: 34px; top: 34px; }
  .ptitle { font-weight: 700; font-size: 34px; color: #0f172a; line-height: 1.15; }
  .ppath { margin-top: 10px; font-family: 'JetBrains Mono', Menlo, monospace; font-size: 20px; font-weight: 600; color: #059669; }
  .ptext { margin-top: 18px; font-size: 25px; line-height: 1.45; color: #475569; }
  .ptext code { font-family: 'JetBrains Mono', Menlo, monospace; font-size: 21px; color: #153592; }
  .code { position: absolute; background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 18px 40px rgba(15, 23, 42, 0.07); }
  .cbody { position: absolute; left: 0; right: 0; top: 72px; }
  .hl { position: absolute; left: 0; right: 0; top: 0; height: 34px; background: rgba(38, 201, 213, 0.18); border-left: 5px solid #153592; opacity: 0; }
  .excerpt { position: absolute; inset: 0; }
  .chead { height: 56px; line-height: 56px; padding: 0 24px; border-bottom: 1px solid #e2e8f0; font-family: 'JetBrains Mono', Menlo, monospace; font-size: 19px; font-weight: 600; color: #334155; background: #ffffff; }
  .clines { position: absolute; top: 72px; left: 0; right: 0; }
  .cl { height: 34px; line-height: 34px; white-space: pre; font-family: 'JetBrains Mono', Menlo, monospace; font-size: 18.5px; }
  .cn { display: inline-block; width: 54px; text-align: right; padding-right: 18px; color: #94a3b8; }
  .ct { color: #0f172a; }
  .legend { position: absolute; display: flex; flex-direction: column; gap: 10px; font-size: 20px; color: #475569; }
  .li { display: flex; align-items: center; gap: 10px; }
  .sw { width: 22px; height: 16px; border: 2.5px solid; border-radius: 4px; }
  .chip { position: absolute; border-radius: 14px; border: 2.5px solid #153592; background: #eef2ff; font-family: 'JetBrains Mono', Menlo, monospace; font-weight: 700; font-size: 30px; color: #153592; display: flex; align-items: center; justify-content: center; box-sizing: border-box; }
  .src { position: absolute; font-family: 'JetBrains Mono', Menlo, monospace; font-size: 20px; color: #64748b; }
</style>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
</head>
<body>
<div id="scene" data-composition-id="scene" data-start="0" data-duration="__DUR__" data-width="1920" data-height="1080"><div class="grid"></div></div>
<script>
__SCENE__
__KIT__
</script>
</body>
</html>
```

`__DUR__` is the scene duration, `__SCENE__` the scene data, `__KIT__` the kit below.

## Kit

```js
// Archify story kit for one HyperFrames scene. SCENE is defined before this script.
(function () {
  const KIND = {
    core: { s: '#059669', f: '#ecfdf5', t: '#065f46' },
    runtime: { s: '#d97706', f: '#fffbeb', t: '#92400e' },
    dep: { s: '#ea580c', f: '#fff7ed', t: '#9a3412' },
    ext: { s: '#64748b', f: '#f8fafc', t: '#334155' },
    user: { s: '#7c3aed', f: '#f5f3ff', t: '#5b21b6' },
    note: { s: '#cbd5e1', f: '#ffffff', t: '#334155' },
    accent: { s: '#153592', f: '#eef2ff', t: '#153592' }
  };
  const S = SCENE;
  const root = document.getElementById('scene');
  const NS = 'http://www.w3.org/2000/svg';
  // Text with `code` spans, built without innerHTML.
  const el = (tag, cls, host, text) => {
    const e = document.createElement(tag); if (cls) e.className = cls;
    if (text !== undefined) String(text).split('`').forEach((part, i) => { if (!part) return; if (i % 2) { const c = document.createElement('code'); c.textContent = part; e.appendChild(c); } else e.appendChild(document.createTextNode(part)); });
    (host || root).appendChild(e); return e;
  };
  const sv = (tag, attrs, host) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); host.appendChild(e); return e; };
  const plen = (pts) => { let L = 0; for (let i = 1; i < pts.length; i++) L += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); return L; };

  if (S.css) { const st = document.createElement('style'); st.textContent = S.css; document.head.appendChild(st); }
  const title = el('div', 'title', root, S.title);
  const svg = sv('svg', { width: 1920, height: 1080, viewBox: '0 0 1920 1080', class: 'edges' }, root);
  const nodeLayer = el('div', 'nodes');
  const N = {}, E = {};

  for (const n of S.nodes) {
    const k = KIND[n.kind] || KIND.core;
    const wrap = el('div', 'nwrap', nodeLayer);
    wrap.style.cssText = `left:${n.x}px;top:${n.y}px;width:${n.w}px;height:${n.h || 104}px`;
    const card = el('div', 'card ' + (n.kind === 'note' ? 'note' : ''), wrap);
    card.style.cssText = `border-color:${k.s};background:${k.f}`;
    el('div', 'nlabel', card, n.label).style.color = n.kind === 'note' ? '#111827' : '#111827';
    if (n.sub) el('div', 'nsub', card, n.sub).style.color = k.t;
    if (n.bar !== false && n.kind !== 'note') { const b = el('div', 'nbar', card); b.style.background = k.s; }
    N[n.id] = { wrap, card, n };
  }

  for (const e of S.edges) {
    const g = sv('g', { class: 'edge' }, svg);
    const d = 'M' + e.points.map((p) => p.join(' ')).join(' L');
    const L = plen(e.points);
    const base = sv('path', { d, fill: 'none', stroke: e.color || '#64748b', 'stroke-width': e.w || 2.5, 'stroke-dasharray': e.dashed ? '9 7' : `${L} ${L}`, 'stroke-dashoffset': e.dashed ? 0 : L, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, g);
    const glow = sv('path', { d, fill: 'none', stroke: '#153592', 'stroke-width': 4.5, 'stroke-dasharray': `${L} ${L}`, 'stroke-dashoffset': L, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', opacity: 0 }, g);
    let head = null;
    if (e.arrow !== false) {
      const a = e.points[e.points.length - 1], b = e.points[e.points.length - 2];
      const ang = Math.atan2(a[1] - b[1], a[0] - b[0]) * 180 / Math.PI;
      head = sv('path', { d: 'M0 0 L-13 -7 L-13 7 Z', fill: e.color || '#64748b', transform: `translate(${a[0]} ${a[1]}) rotate(${ang})` }, g);
    }
    let label = null;
    if (e.label) { label = el('div', 'elabel', nodeLayer, e.label); label.style.cssText = `left:${e.lx}px;top:${e.ly}px`; }
    E[e.id] = { g, base, glow, head, label, L, e };
  }

  const panel = el('div', 'panel');
  if (!S.panel) panel.style.display = 'none';
  if (S.panel) panel.style.cssText = `left:${S.panel.x}px;top:${S.panel.y}px;width:${S.panel.w}px;height:${S.panel.h}px`;
  const code = el('div', 'code');
  if (S.code) code.style.cssText = `left:${S.code.x}px;top:${S.code.y}px;width:${S.code.w}px;height:${S.code.h}px`; else code.style.display = 'none';
  const codeBody = el('div', 'cbody', code);
  const hl = el('div', 'hl', codeBody);
  const LH = S.lh || 34;
  const excerpts = {};
  for (const x of (S.excerpts || [])) {
    const box = el('div', 'excerpt', code);
    el('div', 'chead', box, x.file);
    const lines = el('div', 'clines', box);
    x.lines.forEach((ln, i) => {
      const row = el('div', 'cl', lines);
      el('span', 'cn', row, String(x.from + i));
      const t = el('span', 'ct', row); t.textContent = ln;
    });
    excerpts[x.id] = { box, x };
  }
  if (S.legend) {
    const lg = el('div', 'legend'); lg.style.cssText = `left:${S.legend.x}px;top:${S.legend.y}px`;
    for (const [kind, text] of S.legend.items) { const it = el('div', 'li', lg); const sw = el('span', 'sw', it); sw.style.cssText = `border-color:${KIND[kind].s};background:${KIND[kind].f}`; el('span', '', it, text); }
    S.legend.el = lg;
  }
  if (S.extra) S.extra(el, sv, svg, N, E, KIND);

  const tl = gsap.timeline({ paused: true });
  tl.to({}, { duration: S.duration }, 0);
  if (S.titleIn !== false) tl.fromTo(title, { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0.1);
  if (S.legend) tl.fromTo(S.legend.el, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 }, S.legend.at || 1);
  if (S.panel) tl.fromTo(panel, { autoAlpha: 0, x: 24 }, { autoAlpha: 1, x: 0, duration: 0.55, ease: 'power3.out' }, S.panel.at || 0.8);
  if (S.code) tl.fromTo(code, { autoAlpha: 0, x: 24 }, { autoAlpha: 1, x: 0, duration: 0.55, ease: 'power3.out' }, S.code.at || 0.8);

  const allIds = () => [...Object.keys(N).map((id) => N[id].wrap), ...Object.keys(E).map((id) => E[id].g), ...Object.keys(E).filter((id) => E[id].label).map((id) => E[id].label)];
  let curPanel = null, curExcerpt = null;
  for (const st of S.steps) {
    const t = st.at;
    (st.enter || []).forEach((id, i) => tl.fromTo(N[id].card, { autoAlpha: 0, y: 18, scale: 0.96 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, ease: 'power3.out' }, t + i * 0.3));
    (st.connect || []).forEach((id, i) => {
      const x = E[id], tc = t + (st.enter ? 0.5 : 0) + i * 0.35;
      if (x.e.dashed) tl.fromTo(x.base, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.45 }, tc);
      else tl.fromTo(x.base, { attr: { 'stroke-dashoffset': x.L } }, { attr: { 'stroke-dashoffset': 0 }, duration: 0.55, ease: 'power2.inOut' }, tc);
      if (x.head) tl.fromTo(x.head, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.2 }, tc + 0.45);
      if (x.label) tl.fromTo(x.label, { autoAlpha: 0, y: 6 }, { autoAlpha: 1, y: 0, duration: 0.35, ease: 'power2.out' }, tc + 0.35);
    });
    if (st.focus !== undefined) {
      const keep = new Set();
      (st.focus || []).forEach((id) => { if (N[id]) keep.add(N[id].wrap); if (E[id]) { keep.add(E[id].g); if (E[id].label) keep.add(E[id].label); } });
      allIds().forEach((node) => tl.to(node, { opacity: st.focus === null || keep.has(node) ? 1 : 0.22, duration: 0.45, ease: 'power2.inOut' }, t));
    }
    const runTrace = (ids, t0, parallel) => {
      let tt = t0;
      ids.forEach((id) => {
        const x = E[id]; const dur = Math.max(0.45, x.L / 620);
        const tok = el('div', 'token', nodeLayer);
        const pts = x.e.points; const segs = [];
        for (let i = 1; i < pts.length; i++) segs.push(Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
        const start = parallel ? t0 : tt;
        tl.set(tok, { x: pts[0][0], y: pts[0][1], autoAlpha: 0 }, 0);
        tl.to(tok, { autoAlpha: 1, duration: 0.12 }, start);
        let ts = start;
        for (let i = 1; i < pts.length; i++) { const d = dur * segs[i - 1] / x.L; tl.to(tok, { x: pts[i][0], y: pts[i][1], duration: d, ease: 'none' }, ts); ts += d; }
        tl.to(tok, { autoAlpha: 0, duration: 0.2 }, ts);
        tl.fromTo(x.glow, { attr: { 'stroke-dashoffset': x.L }, opacity: 1 }, { attr: { 'stroke-dashoffset': 0 }, duration: dur, ease: 'none' }, start);
        tl.to(x.glow, { opacity: 0, duration: 0.6 }, ts + 0.25);
        if (!parallel) tt = ts;
      });
    };
    if (st.trace) runTrace(st.trace, t + (st.traceDelay || 0), false);
    if (st.parallel) runTrace(st.parallel, t + (st.traceDelay || 0), true);
    if (st.panel) {
      const box = el('div', 'pstep', panel);
      el('div', 'ptitle', box, st.panel.title);
      if (st.panel.path) el('div', 'ppath', box, st.panel.path);
      el('div', 'ptext', box, st.panel.text);
      if (curPanel) tl.to(curPanel, { autoAlpha: 0, y: -8, duration: 0.25, ease: 'power2.in' }, t);
      tl.fromTo(box, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: 'power3.out' }, t + (curPanel ? 0.22 : 0));
      curPanel = box;
    }
    if (st.code) {
      const xe = excerpts[st.code.excerpt];
      if (curExcerpt !== xe) {
        if (curExcerpt) tl.to(curExcerpt.box, { autoAlpha: 0, duration: 0.25 }, t);
        tl.fromTo(xe.box, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.35 }, t + (curExcerpt ? 0.2 : 0));
        curExcerpt = xe;
      }
      const idx = st.code.line - xe.x.from;
      if (st.code.line != null) tl.to(hl, { y: idx * LH, autoAlpha: 1, height: (st.code.span || 1) * LH, duration: 0.4, ease: 'power3.inOut' }, t + 0.1);
    }
    if (st.fn) st.fn(tl, t, N, E);
  }
  window.__timelines = window.__timelines || {};
  window.__timelines['scene'] = tl;
})();
```

## Example scene data (scene 1 of the Koa reference)

```js
// Scene 1: architecture view. What Koa is made of. Source: koajs/koa lib/*.js at 98a19bc.
const SCENE = {
  title: 'What Koa is made of',
  duration: 14,
  titleIn: false,
  nodes: [
    { id: 'client', label: 'Client', sub: 'HTTP request', kind: 'ext', x: 96, y: 236, w: 250 },
    { id: 'server', label: 'http.Server', sub: 'node:http', kind: 'runtime', x: 456, y: 236, w: 270 },
    { id: 'app', label: 'Application', sub: 'lib/application.js', kind: 'core', x: 846, y: 236, w: 330 },
    { id: 'mw', label: 'Middleware stack', sub: 'koa-compose', kind: 'dep', x: 456, y: 466, w: 300 },
    { id: 'ctx', label: 'Context', sub: 'lib/context.js', kind: 'core', x: 846, y: 466, w: 330 },
    { id: 'req', label: 'Request', sub: 'lib/request.js', kind: 'core', x: 700, y: 696, w: 280 },
    { id: 'res', label: 'Response', sub: 'lib/response.js', kind: 'core', x: 1030, y: 696, w: 280 }
  ],
  edges: [
    { id: 'e1', points: [[346, 288], [452, 288]], label: 'request', lx: 399, ly: 256 },
    { id: 'e2', points: [[726, 288], [842, 288]], label: 'callback()', lx: 784, ly: 256 },
    { id: 'e3', points: [[930, 340], [930, 400], [606, 400], [606, 462]], label: 'compose()', lx: 760, ly: 400 },
    { id: 'e4', points: [[1080, 340], [1080, 462]], label: 'createContext()', lx: 1080, ly: 404 },
    { id: 'e5', points: [[960, 570], [960, 630], [840, 630], [840, 692]], label: 'delegates', lx: 840, ly: 662 },
    { id: 'e6', points: [[1110, 570], [1110, 630], [1170, 630], [1170, 692]], label: 'delegates', lx: 1170, ly: 662 }
  ],
  panel: { x: 1390, y: 236, w: 434, h: 380, at: 0.6 },
  legend: { x: 1414, y: 650, at: 1.6, items: [['core', 'Koa core file'], ['runtime', 'Node built-in'], ['dep', 'Dependency'], ['ext', 'Outside Koa']] },
  steps: [
    { at: 0.0, enter: ['client', 'server', 'app'], connect: ['e1', 'e2'],
      panel: { title: 'Four files', path: 'koajs/koa  lib/', text: 'application, context, request and response. 2,072 lines between them.' } },
    { at: 2.6, trace: ['e1', 'e2'] },
    { at: 4.6, enter: ['mw'], connect: ['e3'], focus: ['app', 'mw', 'e3'],
      panel: { title: 'Application', path: 'lib/application.js', text: '`listen()` starts an `http.Server` with `this.callback()`. `use(fn)` pushes fn onto `this.middleware`.' } },
    { at: 7.8, focus: null, enter: ['ctx', 'req', 'res'], connect: ['e4', 'e5', 'e6'],
      panel: { title: 'Context', path: 'lib/context.js', text: 'Each request gets a fresh `ctx` with `ctx.request` and `ctx.response`. ctx delegates to both.' } },
    { at: 10.9, trace: ['e2', 'e4'] },
    { at: 12.2, parallel: ['e5', 'e6'] }
  ]
};
```

## Checks for each scene

- `view_frame` at 0, just after each `at`, and at the end. The title is visible at 0; nothing touches the caption zone; no text is clipped by its card or panel (widen the card rather than shrinking type below 16 px).
- Seek backward and forward: GSAP `fromTo` keeps the start states stable while seeking.
- Keep each excerpt's longest line under about 64 characters at 16 px in a 734 px panel.
