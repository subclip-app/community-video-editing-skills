# Starting recipes

Nine effects written as shot lists you can build with [engine.md](engine.md). The explosion numbers come from reading the original effect; the others are start values taken from its description. Treat all numbers as starting points and tune them by looking at real frames. Sizes are the effect's own pixel canvas; `S` is a size multiplier, `RAD` is the fireball radius.

## 1. Explosion (one-shot, 300 by 240, about 5.4 s)

Ramp: fire (8 steps). Origin near the floor, centered.

- t 0: white flash disc, radius about 1.05 `RAD`, 0.06 s, plus a strong white light for 0.08 s and a warm wide light (radius 3.4 `RAD`, 0.7 s).
- t 0 to 0.34: two shock rings on a flattened floor plane. Ring A grows 0.45 to 2.7 `RAD` in 0.34 s, 3 px thick, light-yellow step. Ring B grows 0.3 to 1.6 `RAD` in 0.22 s, 1.8 px, orange step.
- Fire puffs: about 28 balls from the center, speed 40 to 210, life 0.55 to 1.15 s, size 0.22 to 0.46 `RAD`. Each cools down the ramp as it rises; about 45 percent turn to smoke when they die.
- Smoke: a few dark soot discs first (life 0.9 to 1.5 s), then big slow translucent ones (life 1.8 to 2.8 s) rising into a column, lit on the cap.
- Sparks: about 80, speed 140 to 380, life 0.18 to 0.6, speed-stretched streaks, gravity, bounce on the floor. Embers: about 40, life 1.2 to 2.6, rising and cooling.
- Debris: a handful of tumbling rocks with a lit side, a shaded side and a dark outline. Burning chunks that land and keep burning briefly.
- Floor scorch: a flat ellipse, white-hot cooling through the ramp to soot over about 3 s.
- Ends empty at the full duration.

## 2. Frost nova (one-shot, 288 by 192, about 3.4 s)

Ramp: ice. Phases: frost spirals inward into a spinning snowflake (0 to 0.7 s); a wave blooms three rings of ice crystals around the caster (0.7 to 1.3 s, back rows dimmer); crystals hold with glints and a cold pool of light on the floor; snow drifts and frost creeps outward on the floor (1.3 to 2.5 s); the ice melts back into the floor and fades (2.5 to 3.4 s). Faceted crystals: a lit ridge on one side, a darker ramp step on the other.

## 3. Coin pickup (loop, 56 by 56, 1.6 s)

Ramp: gold. A thick coin turning on its edge: draw the face as an ellipse whose width follows `abs(cos(angle))`, show a reeded rim as it goes edge-on, a flash sweeping across the face once per turn, bobbing about 2 px over a soft shadow that narrows as the coin goes edge-on. Warm glow 20 px that swells when the face catches the light. Five small twinkles, staggered, each 0.35 s.

## 4. Confetti (one-shot, 200 by 140, about 3.4 s)

Candy ramp. Two party poppers bang one after another: a burst of paper bits and curly streamers, they stall at the top, then tumble and flutter down, flipping (a bit's width follows `abs(cos(flip))`), and settle on the floor. Vary size, speed, delay and flip rate per bit. Seed everything.

## 5. Pixel dissolve (full-frame transition, about 2.2 s)

Ramp: neon. A grid of 20 px cells, some whole, some split in quarters or sixteenths. Each block winks in at its own time read from a clumpy noise field so blocks gather in patches (small ones scatter first, big ones fill in), drawn with a 1 px white outline that fills black and cools, with a few glints. Hold the full cover, then blocks wink out in a different order and the last small ones sparkle away. Use as a transition over the cut point: the cut happens while everything is covered.

## 6. Rain and weather (loop, 3 s or more)

Rain: 60 to 120 streaks, each a function of `(t / LOOP + i / count) % 1`, falling at a fixed angle, 3 to 6 px long, two ramp steps, splashes of 2 to 3 px rings at the floor with a dither fade. Add a cold wide light and a dark vignette. Snow: slower, drifting with a sine sway per flake and a cross shape when big. Fog: a few huge translucent discs drifting at different speeds, lit on top.

## 7. Hit impact (one-shot, 96 by 72, 0.4 to 0.8 s)

Ramp: gold or fire. A 1 to 2 frame white star glint at the hit point (8 rays), a flash disc, a ring that expands 4 to 24 px in 0.2 s, 10 to 20 sparks with stretch, a few dust puffs along the floor. Pair with hit-stop and 2 to 3 px camera shake on the footage (see techniques.md).

## 8. Level up or reward (one-shot, 200 by 160, about 2 s)

Ramp: holy or gold. A rising beam from the floor, rings of light ascending, motes streaming up, a pixel-text banner scaling in with a 1 px outline, stars twinkling around it, settle and fade. Text is drawn as pixels from a small bitmap font, not a smooth font.

## 9. CRT off or glitch wipe (full-frame transition, 0.5 to 1 s)

CRT off: the frame squashes vertically to a bright line (ease in), the line shrinks to a dot with a glow, the dot fades. Glitch wipe: horizontal bands displace by seeded offsets, a few bands invert or swap channels for 1 to 2 frames, hard cut under the noise.
