# Video recipes: taste rules as HyperFrames layers

Each recipe is one HyperFrames runtime layer in Subclip (`add_runtime_layer` with `kind: "hyperframes"`). Read `subclip-hyperframes-layer` and its `references/authoring-contract.md` with `read_subclip_skill` first: one standalone HTML document, one paused GSAP timeline registered under the composition id, no wall-clock time, no `requestAnimationFrame`, no unseeded randomness, no CSS `filter` on text. Validate with `validate_runtime_layer_source`, add, then look at frames.

One scene a layer. Short scenes (5 to 10 s) keep errors small and each scene editable.

## The shared system block

Put the same block at the top of every layer of a video. Only the values change per client.

```html
<style>
@font-face{font-family:"Geist";font-weight:500;src:url(https://cdn.jsdelivr.net/npm/@fontsource/geist-sans@5.1.0/files/geist-sans-latin-500-normal.woff2) format("woff2")}
/* one @font-face per weight you use, the same faces in every scene */
:root{--bg:#f7f9fa;--surface:#ecf0f2;--ink:#1f3038;--muted:#5d6b72;--accent:#0d7480;--accent-ink:#fff;--line:#d9e1e5;--edge:128px;--r:6px}
#scene{width:1920px;height:1080px;background:var(--bg);font-family:"Geist",system-ui,sans-serif;color:var(--ink)}
</style>
```

- Palette: copy `bg`, `surface`, `ink`, `muted`, `accent` and `accentInk` of the dealt palette from `website/library/palettes.json`. A dark close uses the palette's `fields` entry when it has one.
- Type: the dealt pairing from `website/library/type.json`, display tracking as listed (about -0.035em). Load the faces from a pinned font file URL and confirm in a rendered frame that they loaded.
- `--edge` is the one side margin for every scene. Headlines, frames and the end card all start on it and end on `1920 - edge`.

## App frame (real product UI)

A white window on the palette ground: a 1 px `--line` border, the page radius, one soft shadow, a top bar with the product's path in the mono face, then the product's own panes. Fill it with the client's real names, numbers and states. Rules:

- The UI shows what the product works on, never a generic dashboard or chart for decoration.
- One frame per scene, at true size: on a 1920 frame, rows of 70 to 80 px and 20 to 26 px text read at phone size.
- Product actions move: a cursor (an SVG arrow) glides to a button over about 1.2 s, the button scales to 0.95 for 0.08 s and back (put a click sound on that frame), then the result appears row by row, 0.35 to 0.45 s apart. Nothing else in the frame moves.
- When the creator has the real app, prefer a recording or screenshots imported as media and zoomed with `add_cursor_zooms`; rebuild as HTML only what cannot be captured.

## Hero entrance (once)

Split the headline into lines, each line in a box with `overflow:hidden`, and raise each line from `yPercent: 105` to `0` over 0.9 s with `power3.out`, 0.12 s apart, starting at 0.2 s. The fact line and the actions fade up 18 px at 0.85 s; the app frame rises 40 px at 0.6 s. All of it settles by about 1.8 s and then holds. No other scene repeats this entrance.

## Grain gradient ground (the one shader effect, tech only)

A port of the kit's `grain-gradient` effect: a soft tonal ramp and three blobs of the palette, a grainy dissolve between colours and fine film grain, with a calm area under the text. It is deterministic: every pixel is a function of the seek time `t` and fixed constants, and the time comes from the GSAP timeline, so scrubbing, preview and export show the same frame.

```html
<canvas id="ground" width="1920" height="1080" style="position:absolute;inset:0"></canvas>
<script>
(function(){
  var gl=document.getElementById('ground').getContext('webgl',{preserveDrawingBuffer:true,antialias:false});
  var render=function(){};
  function hex(h){return [1,3,5].map(function(i){return parseInt(h.slice(i,i+2),16)/255;});}
  if(gl){
    var vs='attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}';
    var fs=['precision highp float;uniform vec2 r;uniform float t;uniform vec3 cn,cf,k0,k1,k2;',
    'float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}',
    'float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1.,0.)),f.x),mix(h(i+vec2(0.,1.)),h(i+vec2(1.,1.)),f.x),f.y);}',
    'float blob(vec2 p,vec2 c,float rad,float ph,float tt){c+=0.10*vec2(sin(tt+ph),cos(tt*.83+ph*1.7));return exp(-pow(length(p-c)/rad,3.2)*1.2);}',
    'float dis(float w,float z){return clamp(w+z*2.*w*(1.-w),0.,1.);}',
    'void main(){vec2 uv=gl_FragCoord.xy/r;vec2 p=vec2(uv.x*r.x/r.y,uv.y);float tt=t*0.22;vec2 gp=floor(gl_FragCoord.xy);',
    'float z=h(gp+vec2(17.,3.))+h(gp+vec2(511.,97.))-1.;vec2 q=p*1.1;',
    'p+=0.22*vec2(n(q+vec2(0.,tt*.9)),n(q*1.1+vec2(5.2,1.3)-vec2(tt*.7,0.)));',
    'vec3 col=mix(cn,cf,dis(smoothstep(-0.1,0.9,(p.x-0.35)/1.5+0.22*n(p*1.6+vec2(tt*.5,3.1))),z));',
    'col=mix(col,k1,dis(blob(p,vec2(1.45,0.78),0.55,0.,tt),fract(z*7.31+.5)*2.-1.));',
    'col=mix(col,k2,dis(blob(p,vec2(1.62,0.18),0.48,2.,tt*.9),fract(z*3.17+.25)*2.-1.));',
    'col=mix(col,k0,dis(blob(p,vec2(1.18,0.30),0.40,4.,tt*1.1),z));',
    'col=mix(col,cn,(1.-smoothstep(0.18,0.8,length((uv-vec2(0.22,0.52))*vec2(1.25,1.))))*0.9);',
    'col+=(h(gp+floor(t*24.)*13.7)-.5)*0.045;',
    'gl_FragColor=vec4(col,1.);}'].join('\n');
    function sh(type,src){var s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);return s;}
    var pr=gl.createProgram();gl.attachShader(pr,sh(gl.VERTEX_SHADER,vs));gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,fs));gl.linkProgram(pr);gl.useProgram(pr);
    gl.bindBuffer(gl.ARRAY_BUFFER,gl.createBuffer());gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
    var loc=gl.getAttribLocation(pr,'a');gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,2,gl.FLOAT,false,0,0);
    gl.viewport(0,0,1920,1080);gl.uniform2f(gl.getUniformLocation(pr,'r'),1920,1080);
    var C={cn:'#f9fbfb',cf:'#e2ebee',k0:'#7fbcc2',k1:'#cfe5e7',k2:'#5f8f98'};
    Object.keys(C).forEach(function(k){var v=hex(C[k]);gl.uniform3f(gl.getUniformLocation(pr,k),v[0],v[1],v[2]);});
    var ut=gl.getUniformLocation(pr,'t');
    render=function(t){gl.uniform1f(ut,t);gl.drawArrays(gl.TRIANGLE_STRIP,0,4);};
  }
  render(0);
  var clock={t:0};
  var tl=gsap.timeline({paused:true});
  tl.to(clock,{t:7.5,duration:7.5,ease:'none',onUpdate:function(){render(clock.t);}},0);
  // add the hero entrance tweens to the same timeline here
  window.__timelines=window.__timelines||{};
  window.__timelines['hero']=tl;
})();
</script>
```

- Colours: every colour is a mix of the palette. `cn` the ground, a step lighter than `bg`; `cf` a mix of `bg` toward the ink and accent; `k0` the accent mixed with the ground (about 45 percent), `k1` a pale accent tint, `k2` a deeper tone. On a dark palette swap `cn` and `cf` for the dark ground and its surface.
- Calm area: `vec2(0.22,0.52)` is where the headline sits (0 to 1 of the frame, y up). Move it with the text.
- Speed: `t*0.22` drifts slowly; keep it slow. The grain changes 24 times a second like film; drop `floor(t*24.)` to `0.` for still grain.
- Without WebGL the canvas stays empty and the scene's own `background` shows: keep that a flat palette colour so the frame is never blank.
- The kit's other 24 grounds (caustics, dot terrain, contour lines, soft light bars and more) are WebGL fragment shaders driven by a wall clock in the kit's runtime. Port one the same way: copy only its formula into this frame, feed it `t` from the GSAP clock, take colours from the palette, and check three frames (start, middle, end) for the same picture on a second render. Do not load the kit's `fx.js` runtime into a layer.

## Moments, ported to video time

On a page a moment runs on scroll or on load. In a video it runs once at a set time inside its scene, then rests. Deal one (two on a long video), each with a reason to move.

| Moment | Video recipe | Fits |
|---|---|---|
| lines-rise | The hero entrance above, used on a scene heading instead. Do not use it in the same video as the hero entrance on another scene's heading. | any kind |
| word-highlight | A large statement starts with every word at 22 percent opacity; each word comes to full ink 0.24 s after the last (0.25 s fade), then an accent underline draws under the key phrase over 0.6 s. Rest at least 2 s. | any kind, the close |
| counter-rolls | A real figure counts from 0 with `power2.out` over 1.5 to 2.3 s in tabular numerals, once. Never an invented figure, never inside a card loop. | proof figures |
| line-carries-colour | A thin accent line (4 px, `pathLength=1`, dash offset from 1 to 0 over 0.5 s) carries the colour from a source (a list row) to its result (a drafted line), then fades. Use it once, on the first item. | software, product actions |
| iris-opens | A new scene opens through a disc on the old ground: scale a circle clip from 0 past the frame corners (radius at least the half diagonal) over 0.8 s with a hairline accent ring. | transitions between grounds |
| picture-develops | One large photograph comes up from a faint grey print: animate opacity of a grey overlay from 0.85 to 0 over 1.6 s, darks first by fading a dark overlay later. Never a CSS filter on any layer that holds text. | photo-led kinds |
| photo-chapters | 3 to 5 chapters, one photograph each, each next photograph uncovered from its foot over the last (clip-path inset from 100 to 0 percent over 0.7 s), the chapter title on a panel at the lower left. | place, product, service |
| giant-type-pass | A statement of 2 to 5 words set very large with a mid to dark photograph inside the letters (`background-clip:text`), the photograph moving 3 to 5 percent across the letters over the scene. | tech only |
| letters-assemble | The letters of a 2 to 5 word statement start scattered (seeded offsets from a fixed list, not random) and settle into the line over 1.2 s. | type-led closes |

Retired or page-only moments (word-rotate, window-parallax, cursor-spotlight, liquid-type, liquid-hover, marquee-row, pinned-chapters, closing-lift) depend on a pointer or on scroll. Leave them out of video, or describe the still state they rest in.

## Scenes and objects

The kit's big scroll scenes (`assets/scenes`) and procedural prints and renders (`assets/objects`) are bound to scroll position, the kit runtime and its own photographs, so they are not shipped here. In video, the closest tools are native 3D layers for a device or product shot (`list_3d_models`, `add_3d_layer`, `set_3d_screen_content`, `verify_3d_layer_setup`) and one deterministic Three.js HyperFrames layer for a tech subject. Same rule as the page: one big scene at most, tech only.
