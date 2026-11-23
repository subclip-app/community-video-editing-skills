# Acting and film guide

Rules, animation principles and workflow for a short hand-painted cartoon, from the original Claude Animation Base guide by John Heibel (MIT). The original starred a mascot with its own drawing engine; here the character is yours, and the engine is the canvas kit in `canvas-brush-kit.md`. The person prompting decides what the video is about. This guide decides how it is made. If they ask for something the rules forbid (a caption, a 3D spin), do what they ask.

No design here is final. The starter character, the emotions, the props and the helpers are a starting point, not a limit. Change them, add characters, props or emotions the idea needs, and paint them with the same tools and rules so they belong with the rest.

## The three goals

- **Handmade.** It should look painted by hand, frame by frame: brush strokes, ink lines that boil, flat 2D, no lettering.
- **Alive.** Something is always moving and something is always happening. Faces act instead of snapping, and characters are big enough to feel.
- **One piece.** It is one short film, not a pile of clips. Plan it before you draw it, and link every scene to the next.

Underneath all three, the viewer has to be able to follow it. Timing (rule 4) is the rule generated animation gets wrong most often.

## The rules

### 1. The medium is solid: brush strokes, flat 2D, boil

- Paint everything with the kit's `paint` and `inkLine`. Characters get a flat `wash` color plus an ink outline. Backgrounds get soft watercolor `fill` shapes, usually with no outline or a thin one. Do not use plain canvas rectangles and ellipses straight from the context: they look like 2000s Flash.
- The linework boils. `jit` and `rnd` reseed 12 times a second, so every drawing wobbles slightly like hand-drawn animation. Do not fight it. For anything that must stay put (star positions, grass tufts) use `hash(i)`. Give each separate element its own `boilSeed(key)` or one moving element makes everything after it jitter.
- Everything is flat 2D. Never project 3D. Do not rotate a box in perspective. The character turns through drawn key views (front, three-quarter, side, back three-quarter, back) like a cartoon model sheet. Depth comes from overlap, scale and color (farther is smaller, bluer, paler).
- Light is the one exception. Pigment mixes subtractively (yellow over blue turns green), so use `glow` for anything that shines: it adds real light.
- Soft palette, no pure black or white. Use `PAL.ink` for black and `PAL.cream` or `PAL.paper` for white. Keep the character clearly readable against the background.

### 2. No text

- Show it, do not write it. No captions, titles, labels, signs, speech bubbles with words or words on screens. No typed "ZZZ".
- Reactions are painted marks, never letters: `!`, `?`, zzz, sweat, hearts, a bulb, a rain cloud.
- A sign that repeats the story is the classic failure. If the character holds a sign saying "I'm lost" the shot has failed. Show it being lost: looking left, then right, the map upside down, a sweat drop.
- If the prompt truly needs a word (a name, a shop sign that is the joke), paint it into the scene, one or two words, once.

### 3. Something happens in every scene

- Every shot needs an event: something changes between its first and last frame. The character wants something, finds something, tries, fails, reacts or gets it. "The character stands in a meadow being cute" is not a shot.
- One focal action at a time, staged with a clear silhouette and nothing competing.
- Cause, then reaction. The reaction is often the funniest part, so give it time.
- Pay it off. Whatever you set up (a door, a sandwich, a strange noise) gets resolved on screen.

### 4. Timing: model the viewer

Timing turns drawings into a story. Generated animation fails here: everything moves at one brisk speed, events pile on top of each other, and moments are over before anyone understands them.

You know what happens because you wrote the code. The viewer sees it once, at full speed, for the first time. For every moment ask what the viewer needs to understand and how long that takes.

- **Write the reads.** For each shot list in order what the viewer must understand. Each item is a read. Every read needs time to be found, time to be understood and a moment to register before the next thing starts. Small, distant, fast or subtle things take longer than big, central, obvious ones.
- **One read at a time.** When two things happen at once the viewer sees only one. Put a cause and its reaction in sequence, not on top of each other.
- **Fast actions, slow meanings.** A motion can be very quick if it is anticipated, but what it means needs held time. Anticipation tells the viewer where to look; the hold after it lets them understand. Move quickly through what does not matter, spend time on what does. That contrast is the rhythm.
- **Lead the eye.** The viewer looks at what moves, is bright, is big or is being looked at. Before an important read, get their eye to the right place (a character looks at it, the camera moves to it, it moves or lights up first) and give the eye time to arrive.
- **Let the reads set the length.** A shot is as long as its reads need. A shot with many reads cannot be short; a shot whose reads have landed should not be padded. The last shot's final read needs time to land before the video ends.

### 5. Alive

- Nothing is ever still. Every emotion has an idle motion, cameras drift or push, grass sways, stars twinkle and the linework boils. A frozen frame reads as a bug.
- Faces act, they never snap. Change moods through `emotions()`, which does anticipation, a squint, a take and overshoot. Never swap eyes and mouth by hand between two frames.
- Move like a cartoon, not a machine (principles below).
- The character is big. In a medium shot the unit `u` is about 20 to 28 (the starter character is 10u wide). In a close-up 40 to 70. Tiny characters (u under 12) are for wide establishing shots only, never for the whole video.
- Everything moves on a beat. One tempo drives every idle, bounce and dance, so the whole film shares one pulse. Put hits on beats with `pulse`, even with no music. If music is used, set `BPM` to its tempo and measure it first (see the cut-to-the-beat skill for how); a requested tempo is a claim, not a measurement.

### 6. Transitions always

- Every seam gets a transition: into the first shot, between every pair of shots and out of the last. Never start on a hard frame and never just stop.
- Pick a transition that belongs to the story and do not use the same one every time: brush wipe, iris or shaped iris, whip pan with a smear, match cut (same shape or motion across the cut), cut on action (finish the move in the next shot), a camera move that carries through, a fade or push from paper or black.
- A plain cut is fine only on action or as a deliberate smash cut.
- Changes inside a shot are transitions too: emotions go through `emotions`, turns go through drawn views. Props arrive and leave on arcs, never popping in.

### 7. One piece: a vision before any code

- Storyboard first, in writing, before any scene code. If you work with a person, show it and let them react before you build.
- One world: a palette and a setting that carry through, with a color arc across the video (cold night to warm dawn as the mood lifts).
- One thread: beginning, middle, end, and the character's emotional arc follows it. Plan the emotion keys across the whole video, not per shot.
- Rhyme the ending with the opening: the same place, pose or motif, changed.
- Link scenes: motion continues across cuts, screen direction stays consistent (if the character travels right, keep travelling right), props and characters carry over.

## Animation principles

Most of these fix one problem: motion written as code is mechanical because code moves every part at once, on the same curve, by the same amount.

- **Anticipation.** Before a big move make a small move the opposite way: a crouch before a jump, a wind-up before a throw, a squint before a take.
- **Squash and stretch.** Bodies squash on impact and stretch when moving fast, keeping their volume.
- **Slow in, slow out.** Almost nothing moves at constant speed. Run progress through an easing (`ease`, `easeIn`, `easeOut`, `backOut`). A plain `lerp` over time looks mechanical.
- **Weight.** How something starts and stops says what it weighs. Heavy things take longer to get going and to stop and land with little bounce. Light things snap into motion, bounce and flutter to rest.
- **Arcs.** Living things move on arcs, not straight lines: thrown props, hops, arm swings, head turns.
- **Overlapping action and follow-through.** Do not move every part at once. The eyes lead, the body follows, arms, hats, props and tails drag behind, overshoot and settle last (`spring`, `backOut`).
- **Avoid twinning.** Both arms at the same angle, both eyes blinking together and a crowd bouncing in unison are copies. Give one arm the action and the other something smaller. Offset timings, phases and seeds between characters.
- **Exaggeration.** Push poses, takes, squash and leans further than feels natural. In a short cartoon subtle reads as nothing. If it looks like too much, pull it back.
- **Strong key poses.** Each shot's storytelling poses should read as stills, with a clear silhouette, before any motion goes between them.
- **Show the thought.** A character notices, thinks, then acts, and the eyes move first.
- **Secondary action.** Small supporting actions (a hat bobbing, an emote popping, grass stirring) add life but never compete with the main one.

## Acting vocabulary

Plan a face vocabulary for your character before you animate. The original had 31 emotions in six families. Use these as a checklist and build the ones the story needs.

| Family | Emotions |
|---|---|
| joy | happy, excited, laugh, love, proud, starstruck, playful, hopeful, relieved |
| sly | smug, cool, mischief, suspicious |
| low | sad, cry, bored, sleepy, knocked out |
| hot | angry, furious, determined, disgusted |
| alarm | scared, nervous, surprised, confused, dizzy |
| mind | neutral, thinking, idea, shy |

Each emotion is a face, a color tint and a way of moving, all locked to the beat. Eye shapes to draw: normal, look, wide, happy, closed, sleepy, wink, narrow, angry, determined, sad, teary, cry, squeeze, shine, scared, blank, spark, red, heart, x, swirl, dot, shades (a pair can be mismatched). Mouths: o, O, smile, grin, flat, wobble, cat, frown, smirk, laugh, open, wail, teeth, tongue, pout, yawn, or none for the resting face. Painted emotes by the head: exclamation, question, zzz, sweat, spark, heart, hearts, anger, steam, bulb, dots, scribble, music, swirl, stars, cloud. Tints: pale for fear, flush for anger, blue for sadness, rosy for love, green for disgust, gold for pride.

Turn through key views, not rotation. Dances and moves worth having: bounce, hop, arms up, sway, a drawn spin through the key views once a bar, wave, walk, run, idle, stomp, shimmy.

## Workflow

### 1. Storyboard

Write it before any scene code and save it with `update_project_director_brief`:

```
Logline: one sentence. The character wants ___, but ___, so ___.
World: setting, a small palette, light, how the color changes across the video.
Motif: the thing that recurs and pays off.
Character arc: the emotion keys across the whole video.
Shots:
  A  start-end  [transition in: ___]  what is seen, the EVENT, the reaction, the camera
     reads:  start-end  the first thing the viewer must understand
             start-end  the next one (where is the viewer's eye when it starts?)
  B  start-end  [transition: ___]  ...
  [transition out: ___]
```

The reads are the timing sheet. Give each a start and an end, make sure each has time to land and no two important reads overlap. If a shot's reads do not fit its length, lengthen the shot or cut a read.

Check the storyboard: an event in every shot, every read has time, a transition at every seam, no text anywhere, the ending rhymes with the opening.

### 2. Build

One shot, one layer, in order. Within a shot, block the key poses first and check them as stills, then add the motion between them.

### 3. Look at it (review loop)

You cannot see motion by reading code. In Subclip, check each layer with `seek_timeline` and `view_current_frame`:

- Contact sheet idea: `get_timeline_contact_sheet` across the range for the shape of the whole piece, or `view_current_frame` at the first, middle and last moment of each shot.
- Strip idea: for every key motion (a turn, a take, a jump, a throw, a transition) look at a frame every 0.04 to 0.08 s across it.
- Detail idea: for faces and contacts, check the frame at the editor's zoom (zoom the preview) since the editor has no frame crop tool.

Check:

- **Read:** is the event of each shot clear from a still? Is the character big enough and separate from the background?
- **Timing:** read it like a viewer. At each frame ask where the eye is and whether they understand yet. Count frames per read at your frame rate (24 frames is one second at 24 fps). A read that flashes by in a few frames or shares its frames with another will be missed. After each important moment there must be time to take it in.
- **Motion:** does every move have anticipation and follow-through? Any pops or snaps between frames? Do parts move at different times? Anything at constant speed or mirrored left and right? Are poses pushed far enough?
- **Boil:** still things should match between frames that share a boil drawing. Anything still that changes every frame needs its own `boilSeed`.
- **Contacts:** feet touch the ground, held things touch the hand tips, thrown things leave from the hand.
- **Transitions:** check the first and last 0.5 s of every shot and every seam.
- **Rules:** any text? any 3D? any dead stretch? muddy glows? pure black or white?

Budget: at least one look per shot, a strip for every key motion and transition, and a detail look for every face that carries the story. Fix, then look again.

## Common failures

These make a cartoon look generated. Check the storyboard and frames against them:

- signs, captions, labels or speech bubbles with words
- the character standing still and smiling while nothing happens
- everything at one brisk speed, events stacked with no holds
- moments that are over before the viewer understands them
- a tiny character in a big empty landscape for the whole video
- faces that snap from one expression to another
- mechanical motion: linear moves, every part at once, both arms or several characters in sync
- timid poses and takes that barely read
- jittery linework: still things re-boiling every frame because something moving before them shifted the random stream (`boilSeed`)
- hard cuts everywhere, or a video that just starts and stops
- 3D rotation, perspective boxes or projected turns
- plain canvas shapes, gradients or digital glows mixed into the paint (use `paint`, `inkLine`, `glow`)
- muddy green-grey glows from painting yellow over blue
- props floating near a hand instead of touching it
- every shot a different world with nothing linking them

## Worked example: timing an ending

This shows rule 4 on one shot of one video. The reads, numbers and ending are specific to that story; read it for the reasoning. It is the last shot of the original demo ("The fallen star"), from the throw on, in video time:

| Time | Read | Why it is timed this way |
|---|---|---|
| 6.95 to 7.1 | wind-up and throw | fast motion; it reads because the wind-up anticipates it |
| 7.1 to 7.9 | the star flies home | long enough for the eye to follow it from the character to the top of the frame; the camera eases back to give it sky |
| 7.9 to 8.35 | it arrives: a flare, a sparkle, the sky twinkles | the payoff; the character only watches, so nothing competes |
| 8.35 to 8.95 | the character falls in love | the reaction starts only after the viewer has seen the cause |
| 8.95 to 9.4 | the character waves goodbye | a new action, on its own |
| 9.4 to 9.8 | the star twinkles back | the answer to the wave |
| 9.8 to 11.0 | iris to the character, hold, shut | the last read gets time to land before the video ends |

The first version packed all of this into about 1.3 s and nobody could tell what had happened. It is one idea, not a template: do not reuse its story, night sky, hills, star or shot structure.
