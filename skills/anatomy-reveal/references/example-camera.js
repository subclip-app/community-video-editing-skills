/* Worked example for anatomy-reveal: the mirrorless camera from the reference video.
   Paste the scene block and the film block into the layer template (references/layer-template.md). */

/* ---------- scene block ---------- */
(function () {
  // A compact full-frame mirrorless camera with a 35 mm lens, in millimetres. x right, y front, z up.
  const svg = document.getElementById("stage");
  const K = RevealKit.create(svg, { width: 1920, height: 1080, radius: 105, origin: [0, 22, 44] });
  const FONT = "Helvetica Neue, Helvetica, Arial, sans-serif";
  const txt = (x, y, s, size, fill, bold) => ["text", { x, y, "font-size": size, fill, "text-anchor": "middle", "font-family": FONT, "letter-spacing": ".06em", "font-weight": bold ? 700 : 400 }, s];
  const FR = [1, 0, 0], DN = [0, 0, -1];

  // Explode assemblies: the outer part leads (smaller delay) and travels further.
  K.assembly("top", [0, 0, 1], 62, 0.05);
  K.assembly("dials", [0, 0, 1], 26, 0.15, "top");
  K.assembly("evf", [0, -1, 0.35], 22, 0.2, "top");
  K.assembly("bottom", [0, 0, -1], 120, 0);
  K.assembly("battery", [0, 0, -1], 66, 0.3);
  K.assembly("front", [0, 1, 0], 64, 0.0);
  K.assembly("grip", [0.55, 1, 0], 48, 0.0, "front");
  K.assembly("shutter", [0, 1, 0], 40, 0.25);
  K.assembly("sensor", [0, 1, 0], 22, 0.35);
  K.assembly("ibis", [0, 1, 0], 6, 0.45);
  K.assembly("back", [0, -1, 0], 58, 0.0);
  K.assembly("screen", [0, -1, 0], 34, 0.05, "back");
  K.assembly("pcb", [0, -1, 0], 26, 0.3);
  K.assembly("left", [-1, 0, 0], 46, 0.1);
  K.assembly("right", [1, 0, 0], 46, 0.1);
  K.assembly("lens", [0, 1, 0], 132, 0.0);
  K.assembly("l1", [0, 1, 0], 10, 0.4, "lens");
  K.assembly("l2", [0, 1, 0], 26, 0.3, "lens");
  K.assembly("l3", [0, 1, 0], 44, 0.2, "lens");
  K.assembly("l4", [0, 1, 0], 64, 0.1, "lens");
  K.assembly("l5", [0, 1, 0], 86, 0.0, "lens");

  // Feature groups.
  K.group("modeDial", { kind: "turn", axis: [0, 0, 1], pivot: [-40, 0, 0], channel: "dial" });
  K.group("shutterBtn", { kind: "slide", dir: [0, 0, -1], channel: "press" });
  K.group("tilt", { kind: "turn", axis: [1, 0, 0], pivot: [0, -27, 58], channel: "tilt", scale: -1 });
  K.group("zoom", { kind: "slide", dir: [0, 1, 0], channel: "zoomRing" });

  // Shell: a hollow box of six plates.
  K.box("bottom plate", [-64, -23, 0], [64, 23, 6], "graphite", { asm: "bottom" });
  for (const [i, x] of [[0, -52], [1, 52]].entries()) K.cyl("bottom screw " + i, "z", [x[1], 14, -1.2], 2.6, 1.2, "aluminium", { asm: "bottom", sides: 12 });
  K.cyl("tripod socket", "z", [0, 0, -1.4], 6, 1.4, "aluminium", { asm: "bottom", sides: 16 });
  K.box("top plate", [-64, -23, 72], [64, 23, 80], "graphite", { asm: "top" });
  K.box("front plate", [-60, 18, 6], [60, 23, 72], "graphite", { asm: "front" });
  K.box("back plate", [-60, -23, 6], [60, -18, 72], "graphite", { asm: "back" });
  K.box("left plate", [-64, -23, 6], [-60, 23, 72], "graphite", { asm: "left" });
  K.box("right plate", [60, -23, 6], [64, 23, 72], "graphite", { asm: "right" });
  K.box("left lug", [-68, -4, 60], [-64, 4, 68], "aluminium", { asm: "left" });
  K.box("right lug", [64, -4, 60], [68, 4, 68], "aluminium", { asm: "right" });
  K.box("door hinge", [-68, -14, 20], [-64, 10, 26], "graphite", { asm: "left" });

  // Grip with a rubber wrap.
  K.prism("grip", "z", K.roundRect(34, 23, 64, 40, 7, 4), 8, 70, "rubber", { asm: "grip" });
  K.cyl("af lamp", "y", [46, 40, 58], 2.4, 1.2, "signal", { asm: "grip", sides: 12 });

  // Front: mount ring, release button, name plate.
  K.cyl("body mount", "y", [0, 23, 40], 28, 3, "aluminium", { asm: "front", sides: 36 });
  K.cyl("release button", "y", [-38, 23, 26], 4, 2.5, "aluminium", { asm: "front", sides: 14 });
  K.decal("front plate", [-56, 23, 70], FR, DN, [txt(18, 7, "MIRRORLESS", 4.6, "#c9ced6")]);

  // Top: dials, shutter button, viewfinder hump, hot shoe.
  K.cyl("mode dial", "z", [-40, 0, 80], 12, 8, "aluminium", { asm: "dials", group: "modeDial", sides: 36 });
  const ticks = []; for (let i = 0; i < 12; i++) { const a = (i / 12) * Math.PI * 2; ticks.push(["line", { x1: Math.cos(a) * 7.5, y1: Math.sin(a) * 7.5, x2: Math.cos(a) * 10.5, y2: Math.sin(a) * 10.5, stroke: "#2a3140", "stroke-width": 0.7 }]); }
  K.decal("mode dial", [-40, 0, 88], [1, 0, 0], [0, 1, 0], ticks.concat([txt(0, 2, "M", 6, "#153592", true)]));
  K.cyl("shutter collar", "z", [46, 6, 80], 9, 2.5, "aluminium", { asm: "dials", sides: 28 });
  K.cyl("shutter button", "z", [46, 6, 82.5], 5.5, 4, "graphite", { asm: "dials", group: "shutterBtn", sides: 24 });
  K.cyl("command dial", "z", [26, -12, 80], 9, 6, "graphite", { asm: "dials", sides: 28 });
  K.prism("viewfinder hump", "x", [[-23, 80], [10, 80], [4, 96], [-17, 96]], -16, 16, "graphite", { asm: "top" });
  K.box("hot shoe", [-9, -12, 96], [9, 3, 98], "aluminium", { asm: "top" });
  K.box("eyecup", [-15, -31, 62], [15, -23, 94], "rubber", { asm: "evf" });
  K.decal("eyecup", [11, -31, 90], [-1, 0, 0], DN, [["rect", { x: 1, y: 1, width: 20, height: 16, rx: 3, fill: "#0b1220" }]]);

  // Back: tilting screen, buttons, screws.
  K.box("rear screen", [-42, -27, 14], [30, -23, 58], "graphite", { asm: "screen", group: "tilt" });
  K.decal("rear screen", [28, -27, 55], [-1, 0, 0], DN, [
    ["rect", { x: 0, y: 0, width: 68, height: 38, rx: 1.5, fill: "#0d1726" }],
    ["rect", { x: 4, y: 4, width: 60, height: 30, fill: "#16314f" }],
    ["circle", { cx: 34, cy: 19, r: 7, fill: "none", stroke: "#26c9d5", "stroke-width": 0.8 }],
    ["line", { x1: 4, y1: 30, x2: 64, y2: 30, stroke: "#26c9d5", "stroke-width": 0.5 }],
  ]);
  K.cyl("dpad", "y", [46, -23, 34], 9, -3, "aluminium", { asm: "back", sides: 28 });
  K.cyl("ok button", "y", [46, -26, 34], 4, -1.5, "graphite", { asm: "back", sides: 16 });
  K.cyl("menu button", "y", [40, -23, 58], 3.5, -2, "graphite", { asm: "back", sides: 14 });
  K.cyl("play button", "y", [52, -23, 58], 3.5, -2, "graphite", { asm: "back", sides: 14 });
  K.cyl("af button", "y", [46, -23, 18], 3.5, -2, "signal", { asm: "back", sides: 14 });

  // Inside: shutter, sensor, stabiliser plate, main board, battery, card slot.
  K.box("shutter unit", [-23, 12, 18], [23, 17.5, 62], "graphite", { asm: "shutter" });
  const blades = []; for (let i = 0; i < 5; i++) blades.push(["rect", { x: 2, y: 3 + i * 7.6, width: 36, height: 6.6, fill: i % 2 ? "#3a404b" : "#4a515d", stroke: "#11151c", "stroke-width": 0.3 }]);
  K.decal("shutter unit", [-20, 17.5, 60], FR, DN, blades);
  K.box("image sensor", [-19, 8, 24], [19, 12, 56], "sensor", { asm: "sensor" });
  K.decal("image sensor", [-18, 12, 52], FR, DN, [["rect", { x: 1, y: 1, width: 34, height: 23, fill: "#5a4f8f", stroke: "#26c9d5", "stroke-width": 0.5 }], ["rect", { x: 3, y: 3, width: 30, height: 19, fill: "#7a6cc0", opacity: 0.55 }]]);
  K.box("stabiliser plate", [-28, 4, 14], [28, 8, 66], "aluminium", { asm: "ibis" });
  for (const [i, p] of [[-24, 18], [24, 18], [-24, 62], [24, 62]].entries()) K.cyl("ibis coil " + i, "y", [p[0], 4, p[1]], 3, -2, "copper", { asm: "ibis", sides: 12 });
  K.box("main board", [-28, -10, 10], [56, -6, 66], "pcb", { asm: "pcb" });
  K.box("isp chip", [2, -13, 30], [24, -10, 52], "graphite", { asm: "pcb" });
  K.decal("isp chip", [22, -13, 50], [-1, 0, 0], DN, [txt(10, 10, "ISP", 5, "#9aa3b2")]);
  K.box("memory", [30, -13, 34], [44, -10, 48], "graphite", { asm: "pcb" });
  K.box("card slot", [38, -16, 12], [56, -10, 28], "aluminium", { asm: "pcb" });
  for (const [i, p] of [[-18, 22], [-12, 22], [-18, 56], [-6, 56], [50, 60]].entries()) K.cyl("capacitor " + i, "y", [p[0], -10, p[1]], 2.2, -4, "aluminium", { asm: "pcb", sides: 12 });
  K.box("battery", [-57, -16, 8], [-33, 15, 66], "cell", { asm: "battery" });
  K.decal("battery", [-34, -16, 60], [-1, 0, 0], DN, [["rect", { x: 2, y: 2, width: 20, height: 10, fill: "#e9eef7" }], txt(12, 9.5, "7.2V", 5, "#153592", true)]);

  // Lens: a stack of rings and glass along y.
  K.cyl("lens mount", "y", [0, 26, 40], 25, 4, "aluminium", { asm: "l1", sides: 36 });
  K.cyl("rear element", "y", [0, 30, 40], 22, 2, "lens", { asm: "l1", sides: 36 });
  K.cyl("rear barrel", "y", [0, 32, 40], 28, 12, "graphite", { asm: "l2", sides: 36 });
  K.cyl("focus ring", "y", [0, 44, 40], 30, 18, "rubber", { asm: "l3", sides: 48 });
  K.cyl("mid element", "y", [0, 62, 40], 24, 2, "lens", { asm: "l4", sides: 36 });
  K.cyl("front barrel", "y", [0, 64, 40], 30.5, 14, "graphite", { asm: "l4", group: "zoom", sides: 40, r1: 32 });
  K.cyl("front element", "y", [0, 78, 40], 27, 2.5, "lens", { asm: "l5", group: "zoom", sides: 40 });
  K.decal("front element", [0, 80.5, 40], FR, DN, [
    ["circle", { r: 22, fill: "none", stroke: "#3f5d7d", "stroke-width": 0.6 }],
    ["circle", { r: 14, fill: "none", stroke: "#2a4058", "stroke-width": 0.6 }],
    ["path", { d: "M-12 -12 A17 17 0 0 1 6 -16", fill: "none", stroke: "#c3d9e6", "stroke-width": 1.6, "stroke-linecap": "round", opacity: 0.8 }],
    txt(0, 25.5, "35 mm  1:1.8", 2.6, "#9aa3b2"),
  ]);

  K.anchor("body", [0, 10, 44]);
  K.anchor("modeDial", [-40, 0, 86], "dials");
  K.anchor("shutter", [46, 6, 86], "dials");
  K.anchor("screen", [-6, -27, 36], "screen");
  K.anchor("lensFront", [0, 80, 40], "l5");
  K.anchor("sensor", [0, 12, 40], "sensor");
  K.anchor("battery", [-45, 0, 37], "battery");
  K.anchor("board", [13, -13, 41], "pcb");
  K.anchor("apart", [0, 30, 40]);
  window.__K = K;
})();

/* ---------- film block ---------- */
(function () {
  const K = window.__K;
  const DUR = 30;
  // Keys: drift, whip, hold. Each key's ease is the ease INTO that key.
  const KEYS = [
    { t: 0, yaw: 160, pitch: 28, roll: -26, zoom: 0.78, focus: "body", panX: 0, panY: 0, apart: 0, hl: 0, dial: 0, press: 0, tilt: 0, zoomRing: 0 },
    { t: 0.8, yaw: 110, pitch: 24, roll: -16, zoom: 0.84, ease: "si" },
    { t: 1.6, yaw: 0, pitch: 18, roll: -4, zoom: 0.96, ease: "lin" },
    { t: 2.2, yaw: -32, pitch: 16, roll: 0, zoom: 1.0, ease: "so" },
    { t: 2.5, yaw: -36, pitch: 17, zoom: 1.02, focus: "body", ease: "lin" },
    { t: 2.85, yaw: -24, pitch: 52, roll: -4, zoom: 2.5, focus: "modeDial", dial: 0, ease: "whip" },
    { t: 4.3, yaw: -12, pitch: 56, roll: -6, zoom: 2.7, focus: "modeDial", dial: 90, ease: "lin" },
    { t: 4.65, yaw: 34, pitch: 30, roll: 4, zoom: 2.7, focus: "shutter", press: 0, ease: "whip" },
    { t: 5.2, yaw: 30, pitch: 31, roll: 4, zoom: 2.8, press: 1.6, ease: "io" },
    { t: 5.7, yaw: 26, pitch: 32, roll: 3, zoom: 2.85, focus: "shutter", press: 0, ease: "io" },
    { t: 6.05, yaw: 152, pitch: 14, roll: -2, zoom: 1.6, focus: "screen", tilt: 0, ease: "whip" },
    { t: 7.1, yaw: 146, pitch: 16, roll: -2, zoom: 1.65, tilt: 70, ease: "io" },
    { t: 8.1, yaw: 140, pitch: 16, roll: -1, zoom: 1.7, focus: "screen", tilt: 0, ease: "io" },
    { t: 8.45, yaw: -18, pitch: 8, roll: 2, zoom: 1.9, focus: "lensFront", zoomRing: 0, ease: "whip" },
    { t: 9.3, yaw: -24, pitch: 10, roll: 2, zoom: 1.85, zoomRing: 14, ease: "io" },
    { t: 10.0, yaw: -28, pitch: 11, roll: 1, zoom: 1.8, focus: "lensFront", zoomRing: 0, ease: "io" },
    { t: 10.8, yaw: -40, pitch: 22, roll: 0, zoom: 1.0, focus: "body", ease: "io" },
    { t: 11.0, apart: 0, ease: "lin" },
    { t: 11.9, yaw: -46, pitch: 24, roll: -2, zoom: 0.6, focus: "apart", apart: 1, ease: "o" },
    { t: 13.6, yaw: -54, pitch: 24, roll: -2, zoom: 0.58, hl: 0, ease: "lin" },
    { t: 14.1, hl: 1, ease: "io" },
    { t: 17.0, yaw: -44, pitch: 28, zoom: 0.62, hl: 1, ease: "lin" },
    { t: 17.3, hl: 0.15, ease: "io" },
    { t: 17.7, hl: 1, ease: "io" },
    { t: 20.4, yaw: -36, pitch: 22, zoom: 0.6, hl: 1, ease: "lin" },
    { t: 20.7, hl: 0.15, ease: "io" },
    { t: 21.1, hl: 1, ease: "io" },
    { t: 23.8, yaw: -28, pitch: 26, zoom: 0.6, hl: 1, ease: "lin" },
    { t: 24.3, hl: 0, ease: "io" },
    { t: 24.6, yaw: -30, pitch: 26, zoom: 0.6, apart: 1, ease: "lin" },
    { t: 26.2, yaw: -26, pitch: 12, roll: 0, zoom: 1.0, focus: "body", apart: 0, ease: "io" },
    { t: 30, yaw: -30, pitch: 10, roll: 0, zoom: 1.1, ease: "o" },
  ];
  const LABELS = [
    { t: 0, hint: "Mirrorless camera", readout: "128 x 98 x 117 mm" },
    { t: 2.7, hint: "Mode dial", readout: "turns in 30 degree steps" },
    { t: 4.5, hint: "Shutter button", readout: "half press to focus" },
    { t: 5.9, hint: "Rear screen", readout: "tilts up to 70 degrees" },
    { t: 8.3, hint: "35 mm lens", readout: "f/1.8  zoom ring" },
    { t: 10.95, hint: "Taken apart", readout: "{parts} parts  {assemblies} assemblies" },
    { t: 13.9, hint: "Image sensor", readout: "36 x 24 mm", hl: "sensor", callouts: [{ anchor: "sensor", text: "Image sensor", sub: "36 x 24 mm full frame", dx: 330, dy: -250 }] },
    { t: 17.5, hint: "Battery", readout: "7.2 V  2280 mAh", hl: "battery", callouts: [{ anchor: "battery", text: "Battery", sub: "7.2 V  2280 mAh", dx: -300, dy: -230 }] },
    { t: 20.9, hint: "Main board", readout: "image chip and memory", hl: "pcb", callouts: [{ anchor: "board", text: "Main board", sub: "image chip and memory", dx: 300, dy: 220 }] },
    { t: 24.3, hint: "Back together", readout: "{parts} parts" },
    { t: 26.4, hint: "Mirrorless camera", readout: "{parts} parts  {assemblies} assemblies" },
  ];
  const DEF = { yaw: 0, pitch: 0, roll: 0, zoom: 1, panX: 0, panY: 0, apart: 0, hl: 0, dial: 0, press: 0, tilt: 0, zoomRing: 0 };
  const at = RevealKit.timeline(KEYS, LABELS, DEF);
  const counts = { parts: K.parts.length, assemblies: Object.keys(K.asms).length };
  const fill = (s) => String(s || "").replace(/\{(\w+)\}/g, (_, k) => counts[k]);
  const hint = document.getElementById("hint"); const readout = document.getElementById("readout");
  function renderAt(t) {
    const s = at(Math.max(0, Math.min(DUR, t)));
    K.render(s);
    const h = fill(s.label.hint); const r = fill(s.label.readout);
    if (hint.textContent !== h) hint.textContent = h;
    if (readout.textContent !== r) readout.textContent = r;
  }
  window.__renderAt = renderAt;
  window.addEventListener("hf-seek", (e) => renderAt(e.detail.time));
  const clock = { t: 0 };
  const tl = gsap.timeline({ paused: true });
  tl.to(clock, { t: DUR, duration: DUR, ease: "none", onUpdate: () => renderAt(clock.t) });
  window.__timelines = window.__timelines || {};
  window.__timelines["reveal"] = tl;
  renderAt(0);
})();
