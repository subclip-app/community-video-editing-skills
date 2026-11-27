/* Anatomy Reveal kit for Subclip HyperFrames layers. MIT.
   Method after annnguyentt/anatomy-reveal-skill (MIT, Ann Nguyen) and wheresryan22/anatomy (MIT, Ryan):
   convex parts in real millimetres, four-tone shading by facing, painter's order from separating planes,
   staggered explode assemblies, one keyed timeline (drift, whip, hold). Compact rewrite for Subclip. */
(function () {
  "use strict";
  const V = {
    add: (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]],
    sub: (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]],
    mul: (a, s) => [a[0] * s, a[1] * s, a[2] * s],
    dot: (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2],
    cross: (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]],
    unit: (a) => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; },
  };
  const rotAxis = (axis, deg) => {
    const [x, y, z] = V.unit(axis); const a = (deg * Math.PI) / 180; const c = Math.cos(a); const s = Math.sin(a); const t = 1 - c;
    return [t * x * x + c, t * x * y - s * z, t * x * z + s * y, t * x * y + s * z, t * y * y + c, t * y * z - s * x, t * x * z - s * y, t * y * z + s * x, t * z * z + c];
  };
  const mat3 = (a, b) => { const o = new Array(9); for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) o[r * 3 + c] = a[r * 3] * b[c] + a[r * 3 + 1] * b[3 + c] + a[r * 3 + 2] * b[6 + c]; return o; };
  const app = (M, p) => [M[0] * p[0] + M[1] * p[1] + M[2] * p[2], M[3] * p[0] + M[4] * p[1] + M[5] * p[2], M[6] * p[0] + M[7] * p[1] + M[8] * p[2]];
  // Object frame: x right, y front (faces the viewer at yaw 0), z up. View frame: X right, Y up, Z toward the viewer.
  const BASE = [1, 0, 0, 0, 0, 1, 0, 1, 0];
  function orient(yaw, pitch, roll) {
    let M = mat3(rotAxis([0, 1, 0], -yaw), BASE);
    M = mat3(rotAxis([1, 0, 0], pitch), M);
    return mat3(rotAxis([0, 0, 1], roll), M);
  }
  const hex = (h) => { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
  const css = (c) => "rgb(" + c.map((x) => Math.round(x)).join(",") + ")";
  const lerpC = (a, b, e) => [a[0] + (b[0] - a[0]) * e, a[1] + (b[1] - a[1]) * e, a[2] + (b[2] - a[2]) * e];
  // Four tones per material, dark to light, then the outline ink.
  const MATERIALS = {
    aluminium: ["#8d939c", "#b4b9c1", "#d3d7dd", "#eef0f3", "#2a3140"],
    graphite: ["#24272d", "#33373f", "#464b55", "#5d636e", "#0d1016"],
    rubber: ["#1c1d21", "#28292e", "#35373d", "#45474e", "#08090b"],
    porcelain: ["#c9ccd2", "#dfe2e7", "#eef0f3", "#fbfcfd", "#4a5160"],
    glass: ["#4e6b7f", "#6f8ea3", "#93b1c4", "#c3d9e6", "#1d3445"],
    lens: ["#101a26", "#1b2a3b", "#2a4058", "#3f5d7d", "#05080d"],
    pcb: ["#1c5a3f", "#24704f", "#2f8a62", "#3fa877", "#0c2a1d"],
    copper: ["#8a4d2c", "#ad6640", "#c98257", "#e3a47b", "#3b1d0e"],
    brass: ["#8f7434", "#b39248", "#d0b263", "#ead18a", "#3d2f10"],
    signal: ["#9e2620", "#c4372e", "#de5146", "#f07a6f", "#4a0f0b"],
    accent: ["#0f7f8a", "#18a3ae", "#26c9d5", "#7fe3ea", "#0a3f52"],
    navy: ["#0c1f5c", "#122a78", "#153592", "#3a59b4", "#060f30"],
    sensor: ["#3a2f5c", "#4c3f78", "#6253a0", "#8a7cc6", "#17102e"],
    cell: ["#2b4b8f", "#3a60ad", "#4f78c7", "#7a9be0", "#10224a"],
  };
  const LIGHT = V.unit([-0.42, 0.74, 0.52]);
  const INK_HL = hex("#0a3f52");
  const NS = "http://www.w3.org/2000/svg";
  // SVG nodes from data: ["tag", {attrs}, "text" | [children]]. Layers may not assign markup strings.
  function el(tag, attrs, text) {
    const e = document.createElementNS(NS, tag);
    for (const key in attrs) e.setAttribute(key, attrs[key]);
    if (text != null) e.textContent = text;
    return e;
  }
  function build(node) {
    const kids = node[2];
    const e = el(node[0], node[1] || {}, typeof kids === "string" ? kids : null);
    if (Array.isArray(kids)) for (const c of kids) e.appendChild(build(c));
    return e;
  }
  const EASE = {
    lin: (x) => x,
    io: (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2),
    i: (x) => x * x * x,
    o: (x) => 1 - Math.pow(1 - x, 3),
    whip: (x) => (x < 0.5 ? 16 * Math.pow(x, 5) : 1 - Math.pow(-2 * x + 2, 5) / 2),
    so: (x) => 1 - Math.pow(1 - x, 2),
    si: (x) => x * x,
  };

  function hull2(pts) {
    const p = pts.map((q) => q.slice()).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    const cr = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
    const lo = []; for (const q of p) { while (lo.length >= 2 && cr(lo[lo.length - 2], lo[lo.length - 1], q) <= 0) lo.pop(); lo.push(q); }
    const up = []; for (let i = p.length - 1; i >= 0; i--) { const q = p[i]; while (up.length >= 2 && cr(up[up.length - 2], up[up.length - 1], q) <= 0) up.pop(); up.push(q); }
    return lo.slice(0, -1).concat(up.slice(0, -1));
  }

  function create(svg, opts) {
    const W = opts.width || 1920; const H = opts.height || 1080;
    const radius = opts.radius || 200;
    const origin = opts.origin || [0, 0, 0];
    const stroke = opts.stroke || 1.3;
    const parts = []; const asms = {}; const groups = {}; const anchors = {}; const decals = [];
    const mats = Object.assign({}, MATERIALS, opts.materials || {});
    const matRgb = {}; for (const k in mats) matRgb[k] = mats[k].map(hex);

    // A convex solid from a convex 2D outline extruded along one axis.
    // axis "z": outline in (x, y), from z=a0 to z=a1; axis "x": outline in (y, z); axis "y": outline in (x, z).
    function prism(name, axis, outline, a0, a1, mat, o) {
      const pts = hull2(outline);
      const lift = (q, a) => (axis === "z" ? [q[0], q[1], a] : axis === "x" ? [a, q[0], q[1]] : [q[0], a, q[1]]);
      const verts = pts.map((q) => lift(q, a0)).concat(pts.map((q) => lift(q, a1)));
      const n = pts.length; const faces = [];
      const lower = []; const upper = []; for (let i = 0; i < n; i++) { lower.push(n - 1 - i); upper.push(n + i); }
      faces.push(lower, upper);
      for (let i = 0; i < n; i++) { const j = (i + 1) % n; faces.push([i, j, n + j, n + i]); }
      return solid(name, verts, faces, mat, o);
    }
    function solid(name, verts, faces, mat, o) {
      o = o || {};
      const c = verts.reduce((s, v) => V.add(s, v), [0, 0, 0]).map((x) => x / verts.length);
      const F = faces.map((f) => {
        let n = V.unit(V.cross(V.sub(verts[f[1]], verts[f[0]]), V.sub(verts[f[2]], verts[f[0]])));
        if (V.dot(n, V.sub(verts[f[0]], c)) < 0) { n = V.mul(n, -1); f = f.slice().reverse(); }
        return { idx: f, n };
      });
      const p = { name, verts, faces: F, mat, asm: o.asm || null, group: o.group || null, tone: o.tone || null, tags: o.tags || [], c };
      if (!matRgb[mat]) throw new Error("Unknown material " + mat);
      parts.push(p); return p;
    }
    function box(name, a, b, mat, o) {
      return prism(name, "z", [[a[0], a[1]], [b[0], a[1]], [b[0], b[1]], [a[0], b[1]]], a[2], b[2], mat, o);
    }
    function roundRect(x0, y0, x1, y1, r, steps) {
      steps = steps || 4; const out = [];
      const cor = (cx, cy, a0) => { for (let j = 0; j <= steps; j++) { const a = a0 + (j / steps) * (Math.PI / 2); out.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]); } };
      cor(x1 - r, y1 - r, 0); cor(x0 + r, y1 - r, Math.PI / 2); cor(x0 + r, y0 + r, Math.PI); cor(x1 - r, y0 + r, 1.5 * Math.PI);
      return out;
    }
    function circle(cx, cy, r, sides) { const out = []; for (let i = 0; i < sides; i++) { const a = (i / sides) * Math.PI * 2; out.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]); } return out; }
    // A cylinder (or a cone frustum when r1 is given) along an axis, from base centre c over length len.
    function cyl(name, axis, c, r, len, mat, o) {
      o = o || {}; const sides = o.sides || 28; const r1 = o.r1 != null ? o.r1 : r;
      const ax = axis === "x" ? 0 : axis === "y" ? 1 : 2;
      const u = ax === 0 ? 1 : 0; const v = ax === 2 ? 1 : 2;
      const ring = (rad, d) => { const out = []; for (let i = 0; i < sides; i++) { const a = (i / sides) * Math.PI * 2 + (o.phase || 0); const p = c.slice(); p[u] += rad * Math.cos(a); p[v] += rad * Math.sin(a); p[ax] += d; out.push(p); } return out; };
      const verts = ring(r, 0).concat(ring(r1, len));
      const n = sides; const faces = []; const b = []; const t = [];
      for (let i = 0; i < n; i++) { b.push(i); t.push(n + i); }
      faces.push(b, t);
      for (let i = 0; i < n; i++) { const j = (i + 1) % n; faces.push([i, j, n + j, n + i]); }
      const p = solid(name, verts, faces, mat, o); p.round = true; return p;
    }
    function assembly(name, dir, travel, delay, host) { asms[name] = { name, dir: V.unit(dir), travel, delay: delay || 0, host: host || null }; }
    // Feature groups: kind "turn" rotates about axis through pivot by channel value (degrees x scale);
    // kind "slide" moves along dir by channel value (mm x scale).
    function group(name, spec) { groups[name] = Object.assign({ kind: "turn", scale: 1 }, spec); }
    function anchor(name, p, asm) { anchors[name] = { p, asm: asm || null }; }
    // Markings: SVG nodes drawn on a face plane, as [tag, attrs, children or text] lists.
    // o is the drawing origin, u its right and v its down (1 drawing unit = 1 mm), seen from outside.
    function decal(part, o, u, v, nodes) { decals.push({ part, o, u, v, nodes }); }

    function explodeValues(apart, stretch) {
      stretch = stretch == null ? 0.55 : stretch; const out = {};
      for (const k in asms) { const a = asms[k]; const t = Math.max(0, Math.min(1, (apart - a.delay * stretch) / (1 - stretch))); out[k] = a.travel * t * t * (3 - 2 * t); }
      return out;
    }
    function asmOffset(name, ev) {
      let off = [0, 0, 0]; let a = name ? asms[name] : null;
      while (a) { off = V.add(off, V.mul(a.dir, ev[a.name] || 0)); a = a.host ? asms[a.host] : null; }
      return off;
    }
    function featureXf(gname, feat) {
      const g = gname ? groups[gname] : null; if (!g) return null;
      const val = (feat[g.channel] || 0) * g.scale;
      if (g.kind === "slide") return { R: null, t: V.mul(V.unit(g.dir), val) };
      return { R: rotAxis(g.axis, val), pivot: g.pivot };
    }
    const xfPoint = (xf, p) => (!xf ? p : xf.R ? V.add(app(xf.R, V.sub(p, xf.pivot)), xf.pivot) : V.add(p, xf.t));
    const xfNormal = (xf, n) => (!xf || !xf.R ? n : app(xf.R, n));

    const base = (Math.min(W, H) * 0.5) / radius;
    const FONT = opts.font || "Helvetica Neue, Helvetica, Arial, sans-serif";

    function render(s) {
      const M = orient(s.yaw || 0, s.pitch || 0, s.roll || 0);
      const ev = explodeValues(s.apart || 0);
      const feat = s.features || {};
      const k = base * (s.zoom || 1);
      const local = (p, asm, gname) => V.add(xfPoint(featureXf(gname, feat), p), asmOffset(asm, ev));
      const view = (p) => app(M, V.sub(p, origin));
      const fa = anchors[s.focus && s.focus.a] || anchors.body || { p: origin }; const fb = anchors[s.focus && s.focus.b] || fa;
      const e = s.focus ? s.focus.e || 0 : 0;
      const fpa = view(local(fa.p, fa.asm)); const fpb = view(local(fb.p, fb.asm));
      const F = [fpa[0] + (fpb[0] - fpa[0]) * e, fpa[1] + (fpb[1] - fpa[1]) * e];
      const sx = (P) => W / 2 + (P[0] - F[0]) * k + (s.panX || 0);
      const sy = (P) => H / 2 - (P[1] - F[1]) * k + (s.panY || 0);
      const hl = s.hl || 0; const hlSet = new Set(s.hlTarget ? [].concat(s.hlTarget) : []);
      const isHl = (p) => hlSet.has(p.name) || hlSet.has(p.asm) || p.tags.some((t) => hlSet.has(t));
      // Transform every part into view space.
      const P = parts.map((p, i) => {
        const xf = featureXf(p.group, feat); const off = asmOffset(p.asm, ev);
        const vv = p.verts.map((q) => view(V.add(xfPoint(xf, q), off)));
        const fs = p.faces.map((f) => { const n = app(M, xfNormal(xf, f.n)); return { idx: f.idx, n, d: V.dot(n, vv[f.idx[0]]) }; });
        let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9, z = 0;
        const scr = vv.map((q) => { const a = sx(q); const b = sy(q); if (a < x0) x0 = a; if (a > x1) x1 = a; if (b < y0) y0 = b; if (b > y1) y1 = b; z += q[2]; return [a, b]; });
        return { i, p, xf, vv, fs, scr, bb: [x0, y0, x1, y1], z: z / vv.length };
      });
      // Painter's order from separating planes, depth as the fallback.
      const n = P.length; const succ = Array.from({ length: n }, () => []); const indeg = new Array(n).fill(0);
      const EPS = 0.05;
      const sep = (A, B) => {
        for (const f of A.fs) {
          if (Math.abs(f.n[2]) < 1e-4) continue;
          let out = true; for (const q of B.vv) if (V.dot(f.n, q) - f.d < -EPS) { out = false; break; }
          if (out) return f.n[2] > 0 ? 1 : -1; // 1: B in front of A
        }
        return 0;
      };
      for (let a = 0; a < n; a++) for (let b = a + 1; b < n; b++) {
        const A = P[a]; const B = P[b];
        if (A.bb[2] < B.bb[0] || B.bb[2] < A.bb[0] || A.bb[3] < B.bb[1] || B.bb[3] < A.bb[1]) continue;
        let r = sep(A, B); if (!r) { const r2 = sep(B, A); r = -r2; }
        if (!r) r = B.z >= A.z ? 1 : -1;
        if (r > 0) { succ[a].push(b); indeg[b]++; } else { succ[b].push(a); indeg[a]++; }
      }
      const order = []; const done = new Array(n).fill(false);
      for (let step = 0; step < n; step++) {
        let pick = -1;
        for (let i = 0; i < n; i++) if (!done[i] && indeg[i] === 0 && (pick < 0 || P[i].z < P[pick].z)) pick = i;
        if (pick < 0) for (let i = 0; i < n; i++) if (!done[i] && (pick < 0 || indeg[i] < indeg[pick] || (indeg[i] === indeg[pick] && P[i].z < P[pick].z))) pick = i;
        done[pick] = true; order.push(pick); for (const j of succ[pick]) indeg[j]--;
      }
      // Draw: one group per part, back to front.
      const frag = document.createDocumentFragment();
      const accent = matRgb.accent;
      for (const i of order) {
        const A = P[i]; const p = A.p; const ramp = matRgb[p.mat]; const lit = isHl(p);
        const amt = lit ? hl : 0; const dim = !lit && hlSet.size ? hl : 0;
        const g = el("g", { opacity: (1 - 0.72 * dim).toFixed(3) });
        const lineCol = amt ? css(lerpC(ramp[4], INK_HL, amt)) : css(ramp[4]);
        for (const f of A.fs) {
          if (f.n[2] <= 1e-6) continue;
          const d = V.dot(f.n, LIGHT); const tone = d > 0.55 ? 3 : d > 0.15 ? 2 : d > -0.25 ? 1 : 0;
          let col = ramp[tone]; if (amt) col = lerpC(col, accent[tone], amt);
          let pts = ""; for (const j of f.idx) pts += A.scr[j][0].toFixed(1) + "," + A.scr[j][1].toFixed(1) + " ";
          const seam = p.round && f !== A.fs[0] && f !== A.fs[1];
          g.appendChild(el("polygon", { points: pts, fill: css(col), stroke: seam ? css(col) : lineCol, "stroke-width": seam ? 0.6 : stroke, "stroke-linejoin": "round" }));
        }
        if (p.round) { const d = silhouette(A); if (d) g.appendChild(el("path", { d, fill: "none", stroke: lineCol, "stroke-width": stroke, "stroke-linecap": "round" })); }
        for (const dc of decals) if (dc.part === p.name) { const m = decalMatrix(dc, A, sx, sy, view, local); if (m) g.appendChild(build(["g", { transform: m }, dc.nodes])); }
        if (g.firstChild) frag.appendChild(g);
      }
      // Callouts: a dot on the anchor, a leader and a label.
      for (const c of s.callouts || []) {
        const an = anchors[c.anchor]; if (!an || !(c.alpha > 0)) continue;
        const q = view(local(an.p, an.asm)); const x = sx(q); const y = sy(q);
        const lx = c.x != null ? c.x : x + (c.dx || 220); const ly = c.y != null ? c.y : y + (c.dy || -120);
        const right = lx >= x; const tx = lx + (right ? 54 : -54); const anchorSide = right ? "start" : "end";
        const kids = [
          ["circle", { cx: x.toFixed(1), cy: y.toFixed(1), r: 7, fill: "#26c9d5", stroke: "#153592", "stroke-width": 3 }],
          ["polyline", { points: x.toFixed(1) + "," + y.toFixed(1) + " " + lx.toFixed(1) + "," + ly.toFixed(1) + " " + (lx + (right ? 40 : -40)).toFixed(1) + "," + ly.toFixed(1), fill: "none", stroke: "#153592", "stroke-width": 3 }],
          ["text", { x: tx.toFixed(1), y: (ly + 13).toFixed(1), "font-size": 40, "font-weight": 700, fill: "#153592", "text-anchor": anchorSide, "font-family": FONT }, c.text],
        ];
        if (c.sub) kids.push(["text", { x: tx.toFixed(1), y: (ly + 58).toFixed(1), "font-size": 28, fill: "#4a5568", "text-anchor": anchorSide, "font-family": FONT }, c.sub]);
        frag.appendChild(build(["g", { opacity: c.alpha.toFixed(3) }, kids]));
      }
      svg.replaceChildren(frag);
    }
    // Round parts draw no side seams, so outline their silhouette edges.
    function silhouette(A) {
      const front = A.fs.map((f) => f.n[2] > 1e-6); let d = "";
      const edges = new Map();
      A.fs.forEach((f, fi) => { const L = f.idx.length; for (let j = 0; j < L; j++) { const a = f.idx[j]; const b = f.idx[(j + 1) % L]; const key = a < b ? a + "_" + b : b + "_" + a; const e = edges.get(key); if (e) e.push(fi); else edges.set(key, [fi]); } });
      for (const [key, fl] of edges) {
        if (fl.length !== 2 || front[fl[0]] === front[fl[1]]) continue;
        const [a, b] = key.split("_").map(Number);
        d += "M" + A.scr[a][0].toFixed(1) + " " + A.scr[a][1].toFixed(1) + "L" + A.scr[b][0].toFixed(1) + " " + A.scr[b][1].toFixed(1);
      }
      return d;
    }
    function decalMatrix(dc, A, sx, sy, view, local) {
      const pt = (q) => { const v = view(local(q, A.p.asm, A.p.group)); return [sx(v), sy(v)]; };
      const o = pt(dc.o); const u = pt(V.add(dc.o, dc.u)); const v = pt(V.add(dc.o, dc.v));
      const a = u[0] - o[0]; const b = u[1] - o[1]; const c = v[0] - o[0]; const d = v[1] - o[1];
      if (a * d - b * c <= 0.02) return null; // seen from behind or edge on
      return "matrix(" + [a, b, c, d, o[0], o[1]].map((x) => x.toFixed(4)).join(" ") + ")";
    }
    return { prism, box, cyl, solid, roundRect, circle, assembly, group, anchor, decal, render, explodeValues, parts, anchors, asms, groups, materials: mats };
  }

  // The film as a pure function of time: keys per channel, each key eased in by its own ease.
  function timeline(KEYS, LABELS, defaults) {
    const CH = Object.keys(defaults);
    const track = (name) => {
      const list = KEYS.filter((k) => k[name] !== undefined).map((k) => ({ t: k.t, v: k[name], ease: k.ease || "io" }));
      if (!list.length || list[0].t > 0) list.unshift({ t: 0, v: list.length ? list[0].v : defaults[name], ease: "lin" });
      return list;
    };
    const sample = (list, t) => {
      if (t <= list[0].t) return { a: list[0].v, b: list[0].v, e: 0 };
      for (let i = 1; i < list.length; i++) if (t <= list[i].t) { const x = (t - list[i - 1].t) / (list[i].t - list[i - 1].t || 1); return { a: list[i - 1].v, b: list[i].v, e: EASE[list[i].ease](x) }; }
      const last = list[list.length - 1].v; return { a: last, b: last, e: 0 };
    };
    const TR = {}; for (const c of CH) TR[c] = track(c);
    const FOCUS = KEYS.filter((k) => k.focus !== undefined).map((k) => ({ t: k.t, v: k.focus, ease: k.ease || "io" }));
    const mix = (a, b, e) => a + (b - a) * e;
    return function at(t) {
      const s = { features: {} };
      for (const c of CH) {
        const { a, b, e } = sample(TR[c], t);
        const v = c === "zoom" ? Math.exp(mix(Math.log(a), Math.log(b), e)) : mix(a, b, e);
        if (c in { yaw: 1, pitch: 1, roll: 1, zoom: 1, panX: 1, panY: 1, apart: 1, hl: 1 }) s[c] = v; else s.features[c] = v;
      }
      const f = FOCUS.length ? sample(FOCUS, t) : { a: "body", b: "body", e: 0 }; s.focus = f;
      let label = LABELS[0] || {}; let next = null;
      for (let i = 0; i < LABELS.length; i++) if (t >= LABELS[i].t) { label = LABELS[i]; next = LABELS[i + 1] || null; }
      s.label = label; s.hlTarget = label.hl || null;
      const fadeIn = Math.min(1, Math.max(0, (t - label.t - (label.calloutDelay || 0.15)) / 0.3));
      const fadeOut = next ? Math.min(1, Math.max(0, (next.t - t) / 0.2)) : 1;
      s.callouts = (label.callouts || []).map((c) => Object.assign({}, c, { alpha: Math.min(fadeIn, fadeOut) }));
      return s;
    };
  }
  window.RevealKit = { create, timeline, build, EASE, MATERIALS, V };
})();
