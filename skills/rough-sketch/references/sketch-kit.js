/* Rough sketch kit for Subclip HyperFrames layers. Needs the inlined Rough.js (global `rough`) and GSAP 3.15.0. */
(function () {
  const NS = 'http://www.w3.org/2000/svg';
  const PRESETS = {
    pencil: { stroke: '#2b2b2b', strokeWidth: 2, roughness: 1.6, bowing: 1.2, hachureGap: 7, fillWeight: 1 },
    marker: { stroke: '#1f2a44', strokeWidth: 4.5, roughness: 1.1, bowing: 0.8, hachureGap: 11, fillWeight: 3, disableMultiStroke: true },
    chalk: { stroke: '#f4f1e8', strokeWidth: 3.5, roughness: 2.4, bowing: 1.6, hachureGap: 9, fillWeight: 2 },
    blueprint: { stroke: '#e8f1ff', strokeWidth: 2, roughness: 0.6, bowing: 0.3, hachureGap: 6, fillWeight: 1, hachureAngle: -45 },
  };

  function makeKit(svg, timeline, preset) {
    const gen = rough.generator();
    const base = Object.assign({}, PRESETS[preset] || PRESETS.marker);
    const kit = { gen, svg, tl: timeline, preset: base, PRESETS };

    // Rough.js 4.6.6 still calls Math.random() for the dots fill even with a seed.
    // Swap in a seeded generator while a shape is built so every render matches.
    function seeded(seed, build) {
      let x = (seed * 2654435761) >>> 0;
      const real = Math.random;
      Math.random = () => { x = (x + 0x6d2b79f5) >>> 0; let t = x; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
      try { return build(); } finally { Math.random = real; }
    }
    kit.seeded = seeded;

    function group(name) {
      const g = document.createElementNS(NS, 'g');
      if (name) g.setAttribute('data-name', name);
      svg.appendChild(g);
      return g;
    }

    // Turn one Rough drawable into separate <path> strokes.
    function strokesOf(drawable, into) {
      const infos = gen.toPaths(drawable);
      const sets = drawable.sets.map((s) => s.type);
      // DOM order keeps Rough.js order (fill behind outline); the returned list puts the outline first in time.
      const order = infos.map((info, i) => ({ info, kind: sets[i] }));
      const out = [];
      for (const { info, kind } of order) {
        const solid = kind === 'fillPath';
        const parts = solid ? [info.d] : info.d.split(/(?=M)/).filter((p) => p.trim());
        for (const d of parts) {
          const p = document.createElementNS(NS, 'path');
          p.setAttribute('d', d);
          p.setAttribute('stroke', solid ? 'none' : info.stroke);
          p.setAttribute('stroke-width', info.strokeWidth);
          p.setAttribute('fill', solid ? info.fill : 'none');
          p.setAttribute('stroke-linecap', 'round');
          p.setAttribute('stroke-linejoin', 'round');
          into.appendChild(p);
          out.push({ el: p, solid, outline: kind === 'path', len: solid ? 0 : p.getTotalLength() });
        }
      }
      return out.filter((s) => s.outline).concat(out.filter((s) => !s.outline));
    }

    // Reveal strokes one after another inside [at, at + dur]. Solid fills fade in at the end.
    function reveal(strokes, at, dur) {
      const lines = strokes.filter((s) => !s.solid);
      const total = lines.reduce((a, s) => a + s.len, 0) || 1;
      let t = at;
      for (const s of strokes) {
        if (s.solid) {
          s.el.style.opacity = '0';
          timeline.fromTo(s.el, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: 'none' }, at + dur - 0.25);
          continue;
        }
        const L = s.len + 2;
        const d = dur * s.len / total;
        s.el.style.strokeDasharray = L + ' ' + L;
        s.el.style.opacity = '0'; // hidden until its turn, so round caps leave no dots
        timeline.set(s.el, { opacity: 1 }, t);
        timeline.fromTo(s.el, { strokeDashoffset: L }, { strokeDashoffset: 0, duration: Math.max(d, 0.001), ease: 'none' }, t);
        t += d;
      }
      return at + dur;
    }

    // draw('rectangle', [x, y, w, h], {seed, ...}, at, dur, parent)
    kit.draw = function (shape, args, opts, at, dur, parent) {
      const o = Object.assign({}, base, opts || {});
      if (!o.seed) throw new Error('Every Rough shape needs a fixed seed above 0');
      const drawable = seeded(o.seed, () => gen[shape].apply(gen, args.concat([o])));
      const strokes = strokesOf(drawable, parent || group(o.name));
      reveal(strokes, at, dur);
      return strokes;
    };

    kit.arrow = function (x1, y1, x2, y2, opts, at, dur, parent) {
      const g = parent || group('arrow');
      const o = Object.assign({}, opts);
      const bend = o.bend || 0;
      const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
      const nx = -(y2 - y1), ny = x2 - x1, nl = Math.hypot(nx, ny) || 1;
      const cx = mx + (nx / nl) * bend, cy = my + (ny / nl) * bend;
      if (!o.seed) throw new Error('Every Rough shape needs a fixed seed above 0');
      const shaft = seeded(o.seed, () => (bend ? gen.curve([[x1, y1], [cx, cy], [x2, y2]], Object.assign({}, base, o)) : gen.line(x1, y1, x2, y2, Object.assign({}, base, o))));
      const a = Math.atan2(y2 - (bend ? cy : y1), x2 - (bend ? cx : x1));
      const head = o.head || 26;
      const h1 = gen.line(x2, y2, x2 - head * Math.cos(a - 0.45), y2 - head * Math.sin(a - 0.45), Object.assign({}, base, o, { seed: o.seed + 1 }));
      const h2 = gen.line(x2, y2, x2 - head * Math.cos(a + 0.45), y2 - head * Math.sin(a + 0.45), Object.assign({}, base, o, { seed: o.seed + 2 }));
      reveal(strokesOf(shaft, g), at, dur * 0.8);
      reveal(strokesOf(h1, g).concat(strokesOf(h2, g)), at + dur * 0.8, dur * 0.2);
      return g;
    };

    // A loose hand circle that overshoots its start, like a marker callout.
    kit.circle = function (cx, cy, rx, ry, opts, at, dur, parent) {
      const o = Object.assign({}, base, { roughness: 0.6 }, opts);
      let s = o.seed >>> 0;
      const rnd = () => { s = (s + 0x6d2b79f5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
      const pts = [];
      const turns = 1.12, n = 28, start = -2.2;
      for (let i = 0; i <= n; i++) {
        const k = i / n, ang = start + k * turns * Math.PI * 2;
        const wob = 1 + (rnd() - 0.5) * 0.06 + k * 0.05;
        pts.push([cx + Math.cos(ang) * rx * wob, cy + Math.sin(ang) * ry * wob]);
      }
      if (!o.seed) throw new Error('Every Rough shape needs a fixed seed above 0');
      const strokes = strokesOf(seeded(o.seed, () => gen.curve(pts, o)), parent || group('circle'));
      reveal(strokes.slice(0, 1), at, dur);
      strokes.slice(1).forEach((st) => st.el.remove());
      return strokes;
    };

    // Handwritten text written left to right with a clip reveal (no filters on text).
    kit.write = function (el, at, dur) {
      timeline.fromTo(el, { clipPath: 'inset(-20% 100% -20% -2%)' }, { clipPath: 'inset(-20% -2% -20% -2%)', duration: dur, ease: 'none' }, at);
    };

    return kit;
  }

  window.RoughSketchKit = { makeKit, PRESETS };
})();
