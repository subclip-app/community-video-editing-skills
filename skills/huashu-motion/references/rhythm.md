# Rhythm

A film can be correct in every frame and still be boring. Boring has a recognisable shape: one event every four or five seconds, the same move in every scene (a card grows, holds, shrinks), one shot scale throughout, every ease a soft 0.6 to 0.8 s, and music idling on a pad until a single hit at the end. Nothing is wrong, so nothing gets fixed. This file is how to design the opposite on purpose: the energy of the film over time, how dense each stretch is, and where it changes.

Rhythm is the contrast between stretches, not a fast tempo. A film that is fast everywhere is as flat as one that is slow everywhere. What reads as "cool" and "tech" is control: a hard, quick middle, a moment where everything stops, and a drop that arrives exactly on the frame you were waiting for.

## 1. Choose the route before the beat map

| Route | What carries the eye | Cuts | Fits |
| --- | --- | --- | --- |
| Continuous | one world, a camera moving through it, objects carried from shot to shot | 0 to 2 | precise and calm brands, mechanisms, a single product interface |
| Montage | the beat: every cut lands on it and every frame reads at once | many, on the beat | hype, hardware, games, sport, "look how much it does" |
| Hybrid | a continuous spine, broken open by one or two montage bursts | bursts only | most launch films that should feel tech and energetic |

"One world, few cuts" is right for interface recordings and the continuous route, and wrong for launch films. Measured on 21 launch films (October 2026), 15 cut ten or more times a minute; the music-driven ones averaged a shot every 1.8 to 3.5 s (median shot 1.2 to 2.2 s). In Subclip the hybrid route maps cleanly: HyperFrames scenes are the spine, and a run of native media items cut on the beat is the burst.

## 2. Draw the energy curve

Before the beat map, write the film's energy on a 0 to 10 scale for each stretch of a few seconds, and check its shape. The shapes that work:

- **Hook within 3 s.** A clear onset or the first cut inside three seconds: motion, a hit, an unresolved shape, a question. It does not mean a frantic open: most measured films opened well under their peak.
- **Climb in steps, not a slope.** Each section adds something you can name (the kick enters, the camera starts travelling, the cuts double). A slope you cannot hear or see is a plateau.
- **A burst near the middle.** The densest five seconds sat at about 37 percent of the length (30 to 60 percent typical): 5 to 8 cuts, about one per beat, framed by shots of 1.5 to 4 s.
- **The hero moment on the strongest musical point**, usually after the burst: the drop, the first downbeat after a build.
- **A stop, when it earns its place.** Near silence for 0.5 to 1.6 s, then picture and sound slammed in on the same frame. Cheap power, but a signature move, not a requirement.
- **Resolve.** The last stretch comes down to the mark: one idea, held, with the music ringing or buttoned.

Shapes that read as boring: a flat line at 3 to 5 with a hit at the end; a slow build that tops out in the last two seconds; the same energy in every scene. Two drops (a small one at a third, the big one at three quarters) work for films over 30 s.

## 3. Density: events per bar

Count what happens per bar (four beats). An event is anything the eye or ear registers as new: a cut, an element landing, a camera move starting or stopping, a word, a hit, an instrument entering.

| Stretch | Events per bar | Shot or move length |
| --- | --- | --- |
| hook | 2 to 4 | moves of 0.25 to 0.5 s |
| build | 2 to 4, rising | 1 to 2 beats per move |
| stop | 0 to 1 | hold 1 to 2 beats |
| peak or montage | 4 to 8 (one per beat or eighth) | half to one beat per shot |
| resolve or mark | 1 to 2 | hold at least 1.5 s on the mark |

The measured shape of one burst (115 BPM): shot lengths 1.67, 1.37, 1.10, 1.00 s, then thirteen cuts of one beat, all within 28 ms of the beat, then 1.10 and 3.04 s. Accelerate, lock to the beat, release.

The fixed rule underneath: **no stretch longer than about two bars without something new**, except a stop you planned. Read the one-tile-per-second contact sheet: identical tiles in a row outside the stop are a bug.

## 4. Contrast schedule: what changes between stretches

Change at least two of these at every section boundary, and all of them at the drop:

- **Shot scale**: extreme close-up to wide. Open on a detail and pull out hard; punch in 2x on a number as it lands; cut from a macro to the whole system.
- **Speed**: 0.25 s hard moves against a 2 s glide, and speed ramps inside one move.
- **Ease family**: hard ease-out (expo, power4) for tech; springs only for things that should feel physical. Soft 0.6 to 0.8 s eases everywhere make films sleepy.
- **Camera**: still, travelling, whipping.
- **Density**: one object on screen against a grid of nine.
- **Colour or ground**: a flood to the brand colour, a flip to dark.
- **Music texture**: half-time, full beat, stop, drop.

## 5. Montage bursts

A montage is a run of shots each lasting a beat or less, cut exactly on the beat, each readable at a glance. It turns "it does many things" into a feeling instead of a list.

- Build it from real material: the product's outputs, user stories, screenshots, numbers. Invented filler makes a montage look like stock footage.
- One spine through it: a shared position, colour or shape, so it reads as one move and not as noise.
- Accelerate inside it: two beats per shot, then one, then half, then stop.
- Every cut lands on the beat (within one frame at 30 fps) and every new shot enters already moving. In Subclip, cut real clips as native media items with `trim_media_item` or `update_media_item` source ranges chosen where the clip is moving.
- Keep the eye where it is and change what it sees. Three fast-cut grammars that held up: an anchor locked in place while the world behind it changes; a step cut on one framing (a label per step, 0.3 s each); a spec label slammed in with each shot.
- Give the montage its own sound: a hit or tick on each cut, and the music at full energy.

At 120 BPM a beat is 0.5 s and a bar is 2 s. Put scene starts on bar lines measured from the music's first downbeat, and the burst's cuts on beats. When the picture and the track disagree, move the picture, not the music.

## 6. Music that has rhythm

The music's energy curve is the picture's energy curve.

- **An onset within 3 s** for anything that should feel tech or energetic. Pad-only openings are for calm films.
- **Tempo is not the lever.** The cool films measured 89 to 130 BPM (median 105). Speed comes from cut density and onsets; 100 to 125 BPM is the default range.
- **The stop.** Before the drop, cut the music (end one audio item, start the next on the drop), leaving only a small sound such as a click or a riser.
- **The drop.** On the reveal frame: the music back at full level, plus one impact hit.
- **Cut hits.** In a montage, a short hit on each cut gives the picture weight.

With a fixed track you cannot rearrange the instruments; you shape energy by where you cut it, its level per section (`update_audio_item` volume), and the stop. With `generate_music`, describe the shape in the prompt (a quiet intro, a build, a break, a drop at a stated time) and then align the edit to the real output.

## 7. Write it down: the rhythm sheet

Before building, add one line per stretch to the treatment:

```
stretch     bars    energy  events/bar  moves                                    music
hook        1 to 2  7       3           close on the headline, hard pull-out     loop from bar 1
build       3       5 to 7  3           prompt typed, page falls into space      same loop, lower level
burst       4 to 5  8       4 to 6      six real clips cut on beats              loop, hit per cut
stop        6       1       0           one dot, one click                       silence
drop/peak   6 to 9  9       6           wall of names bursts out, count lands    loop back full, impact
resolve     10 to 12 4      1           logo and line, held                      ring out, fade
```

Then check the sheet before writing code: a hook within 3 s, a burst of 5 to 8 cuts in five seconds, the hero on the strongest musical point, at least two things changing at every boundary, nothing longer than two bars with nothing new.

## 8. A case: the same film, boring and not

A 30 s launch for a calm, warm personal-agent brand. The first build matched the brand's calm: 96 BPM felt piano, energy low until a single drop at 79 percent, every scene the same grammar (a card unfolds, holds, folds back), small cards on a big empty wall, gentle eases, an average shot of 10 s. It passed every check. The person who asked for it: not cool, a bit boring.

The rebuild kept the palette and the type and changed only the rhythm: a beat from bar 1 at 120 BPM; an extreme close-up on the logo's mark, pulled out hard to reveal the time; a 2x punch-in on the number as it counts; one wide world travelled left to right with the camera whipping after the product's promise; nine real user stories slamming into a 3x3 grid on eighth notes; everything sucked back into the mark, one beat of stillness, the drop. Scored 80 against 60: "the rhythm is much better". What still cost points was craft (a typeface, text over the interface), not rhythm.

## 9. Check it at normal speed

Frames show craft; rhythm only shows in motion. Watch playback where you can, with the sound, and mark every moment attention drops: that stretch needs an event, a contrast or a cut. When you cannot watch, read the contact sheet at one tile per second and say that playback still needs a human watch.
