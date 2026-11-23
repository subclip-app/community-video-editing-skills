# Step 3: Storyboard and script

Marketing videos are made concept-first. The order is: message, narrative arc, beats that serve the arc, then which assets and techniques bring each beat to life. Do not start from the asset inventory ("we have these screenshots, let's build a slideshow").

Save the storyboard and script in the director brief (`update_project_director_brief`). Show the creator a beat-by-beat summary and iterate until they approve before building.

## First decision: the concept

Write this at the top:

- **Message:** the one thing the video must communicate, one sentence.
- **Arc:** Problem to Solution, Reveal, Demonstration, Vibe or Comparison, plus a one-sentence shape of how it unfolds.
- **Audience:** who is watching and where (TikTok, LinkedIn, embedded on a landing page).
- **Brand voice:** confident, playful, clinical, urgent, premium.
- **Why now:** launch, feature ship, rebrand, ongoing demo.

If any row is blank the storyboard cannot land. The single sentence test: "What makes this different from a generic video of this type for any brand in the industry?" If you cannot answer it from the rows, sharpen the concept first.

## Second decision: pacing

| The creator says | Pacing | Beats | Beat length | Build |
|---|---|---|---|---|
| fast, punchy, rapid cuts, social ad | Fast | 8 to 15 | 0.7 to 1.8 s | hard cuts between short layers |
| demo, walkthrough, tour | Moderate | 4 to 6 | 3 to 5 s | one layer per beat, crossfades |
| cinematic, premium, slow, elegant | Slow | 3 to 4 | 5 to 8 s | one layer per beat, long crossfades |
| launch, announcement, story | Arc | 5 to 7 | varies | slow opener, building middle, fast peak, resolved close |

"Dark cinematic" is slow, not fast. Write the pacing choice at the top ("Pacing: Fast, 12 beats, hard cuts").

Beat count should follow the story and the narration, not the table. A social ad for a complex product may need five well-timed beats.

## Technique pick (required before writing beat copy)

For every beat name 2 to 4 techniques. A beat with one technique is a slideshow frame. Examples of techniques that work in Subclip motion layers (HTML, SVG, canvas, Lottie, deterministic Three.js, GSAP): layered panels with parallax, SVG path drawing, staggered entrances with `back.out`, counters swapped with `tl.set`, kinetic typography, canvas procedural art, CSS 3D transforms, masked reveals, typing effects, camera dolly, native 3D device layers for phone and laptop mockups.

For each beat also write a **customize** line: what makes this beat this brand's beat (real project names, brand colors, realistic data). Generic content with no concrete techniques is lazy.

## Asset audit (required, not skippable)

The point of capturing a site is to use the brand's own visuals, not to rebuild them from rectangles.

1. Look at every captured image and the logo candidates. For each, write down 5 specific assets and what is actually pictured (the content, not the filename).
2. For each beat choose USE or SKIP per candidate. SKIP needs a one-sentence reason naming which story moment found no use for it. "Does not fit" is not a reason.
3. At least one beat uses the brand's signature visual (hero illustration, hero photo or signature diagram), not just the logo.
4. If you use less than about 30 percent of the relevant assets, revisit.

Forbidden: SKIP for everything except the logo, deciding from file names, and rebuilding a diagram in CSS when the brand's own file is available.

## Shot grammar (the video-as-webpage failures)

Each beat is a SHOT, not a layout. Declare for every beat: **shot type**, **camera move**, **depth strategy**, motion magnitudes that read at video scale, and the shot's purpose (what the viewer feels or notices).

| Shot | Use for | Frame contains |
|---|---|---|
| Extreme close-up | one card, number, cursor or button | the element fills 60 to 90 percent of the frame |
| Close-up | a small UI region | subject 40 to 60 percent with depth behind |
| Medium | a section of UI | subject 60 to 80 percent, neighbors bleed in |
| Wide | the whole assembly is the point | 70 to 90 percent scale with deliberate negative space |
| Over-the-shoulder | cursor or hands in front, UI behind | foreground bottom third, UI upper two thirds |
| Dutch angle | tension, urgency | tilt 4 to 8 degrees |

Most product videos should be mostly close-ups and mediums. Wide is the rare establishing shot.

Every beat needs a camera-style move: dolly in (scale 1.0 to 1.08 over the beat), dolly out (1.15 to 1.0), push (fast 1.0 to 1.05 on a key moment), parallax pan, orbit, or rack focus. A beat with only entrance animations reads as a webpage.

Refuse these by default: browser or window chrome around content (unless the chrome is the subject), sidebars and page headers or footers, a centered card with 60 to 120 px margins, "breathing" of 1 to 2 px or scale 1.01, settled holds longer than 1.5 s with no camera or composition change, hover-state demos, and tooltips explaining things. Specify sizes as frame-fill percentages, not pixels.

Motion verbs, one per animated element, picked from the concept: impact (SLAMS, PUNCHES, SHATTERS), directional (SLIDES, PUSHES, WIPES), reveals (DRAWS, FILLS, ASSEMBLES, COUNTS UP), organic (FLOATS, DRIFTS, PULSES), mechanical (TYPES ON, LOCKS IN, SNAPS).

Transitions: use a shader-style or heavy transition for hero reveals and the CTA only, at most 2 per video; a crossfade for continuous editorial pacing; a hard cut for rapid-fire lists and percussive edits. Declare the rhythm up front (for example fast, fast, SLOW, fast, shader, hold).

## Opener, closer, narration

- Opener: land a hook inside the first 1.0 to 1.5 seconds (a flash, a logo strike, a kinetic word build, a particle burst). Make it the most ambitious beat.
- Closer: make the logo entrance an event (path draw, overshoot scale), keep background motion alive, and hold only 2 to 3 seconds after the last spoken word. Never 8 to 10 seconds of silence.
- Narration start: decide here whether the voice starts over the intro, after it settles, or after a few seconds of music.
- Cut the video to the narration: 22 seconds of audio means about 24 seconds of video.

## Sound effects and music

Place sound effects here, per beat, with exact times and volumes. Subclip has no bundled sound library, so create them: `generate_music` with `modelId: "elevenlabs-sound-effects"` (one sound per prompt, 0.5 to 22 s, set `settings.duration_seconds`), or find free licensed sounds with `search_public_audio` and `import_public_asset_to_timeline`. Quote paid generation first.

Vocabulary for prompts: soft chime, click, soft click, error, glitch hits (harsh, subtle, punchy), bass impact, shimmering riser, key press, typing, notification, ping, pop, sparkle, whoosh (short, long, cinematic).

Rules:
- Less is more. Most beats need zero. One per beat is typical.
- Impact sounds peak at their start: place them exactly on the visual moment and let the tail run into the next beat. Never trim a hit mid-decay.
- Risers peak at their end: start at `climax_time - sound_length`.
- Short accents (click, chime, sparkle) go exactly on the visual punctuation.
- Under narration keep effects at 20 to 30 percent volume (`update_audio_item`).
- Never put an effect on a heavy transition that already carries its own audio-visual event.
- Music: describe the mood, when it swells and when it drops; generate with `generate_music` (instrumental) and keep it under the voice.

## Beats are independent layers

Each beat is its own layer. They do not share state, canvases or 3D scenes. If a device must "stay" across beats, each beat sets it up at the same position and rotation so it appears continuous. Heavy transitions happen between layers on the timeline, not inside one beat. For phone or laptop mockups use native 3D layers (`list_3d_models`, `add_3d_layer`, `set_3d_screen_content`, `verify_3d_layer_setup`), not hand-coded 3D.

## Research (when it helps)

Research competitors, industry visual language or company context only when the market is competitive or you know little about the company. Skip it for a straightforward brand reel or when the creator gave exact direction.
