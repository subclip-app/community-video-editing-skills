---
name: motion-design-principles
description: Motion design foundations for Subclip videos. Timing, easing, choreography and Disney's 12 principles of animation, applied to native media, text and element keyframes, HyperFrames and Remotion motion layers, and 3D keys, with a frame review checklist. Use when animating anything in a project, choosing durations or easing, staging several moving parts, giving motion a personality, or checking why motion looks robotic, cheap, slow or busy.
---

# Motion design principles

Think like a motion director before touching a keyframe: decide what the viewer should feel, which element leads, how long each move takes and how it eases. Then build it with Subclip's editable tools and check it in frames.

## When to apply

- Animating titles, labels, lower thirds, callouts, cards, shapes, footage moves or whole motion scenes
- Choosing a duration, an easing curve or a stagger
- Planning a multi-element entrance or a scene transition
- Giving a brand or a series one consistent motion personality
- Fixing motion that looks robotic, flat, slow, jittery or too busy

**Decision tree:**
1. Does it serve a function (guide the eye, explain, confirm)? Use the timing rules.
2. Does it express personality? Use the motion personality archetypes.
3. Does it tell a story or direct attention? Use the 12 principles and choreography.
4. Is it a scene with many elements? Use the 1/3 rules and stagger budgets.

For a strict craft review of motion that already exists, the separate `motion-polish` skill goes deeper. This skill is the foundation both rely on.

## Subclip workflow

1. **Read first.** `get_project_outline`, then `read_project_section` for the lanes you need, `list_editor_assets` for real IDs. Keep one explicit project ID on every call. Call `get_media_context` before judging footage; never judge media by its file name.
2. **Look before placing.** `get_timeline_contact_sheet` over the time range so motion lands clear of faces, subjects and captions.
3. **Answer the 8-step checklist** (below) and write the answers into `update_project_director_brief`: emotion, personality, primary property, duration, easing, hero, secondary and ambient layers, 1/3 rules.
4. **Pick the lightest tool** ([references/subclip-apply.md](references/subclip-apply.md)):
   - Footage and stills: `add_media_keyframe`. Text: `add_text_keyframe`. Shapes: `add_element_keyframe`. These have `linear`, `ease-in`, `ease-out` and `ease-in-out`; build overshoot and anticipation with extra keyframes.
   - Several parts, squash and stretch, arcs, follow-through, stagger: a motion layer with `add_runtime_layer` (HyperFrames by default, Remotion when the creator asks or the project already uses it). Validate with `validate_runtime_layer_source`, revise with `read_layer_source` and `edit_layer_source`.
   - One small CSS effect: `add_html_motion_graphic`. Device and product shots: native 3D with `set_3d_keyframe_sequence`.
   - An existing Lottie animation: `import_public_lottie_json`, then place and time it with this skill.
5. **One edit at a time.** Re-read the project after each coherent edit. Preserve creator work and revise existing layers in place.
6. **Review in frames** with [references/frame-review.md](references/frame-review.md): `view_current_frame` at each key pose, `get_timeline_contact_sheet` across a move for spacing and across the piece at 1 s for pacing.
7. **Record** what you checked with `update_project_director_brief` and `write_session_summary`. Export only when the creator asks (`export_video`).

Cost: this skill needs no AI generation. It uses 0 credits unless the creator also asks for generated media, which follows the normal quote and approval flow.

## Quick reference: 8-step checklist

Before creating any animation:

1. **Emotional target?** Joy, calm, urgency, elegance
2. **Motion personality?** Playful, Premium, Corporate, Energetic
3. **Primary property?** Position, scale, rotation, opacity
4. **Duration?** See the duration table
5. **Easing family?** Entrance decelerates, exit accelerates
6. **Hero element?** Apply staging
7. **Secondary and ambient layers?** Add richness
8. **1/3 rules?** Motion distance and simultaneous elements

## Three pillars

| Pillar | Question | Drives |
| --- | --- | --- |
| **Emotional intent** | What should the viewer feel? | Easing, timing, amplitude |
| **Visual narrative** | What is the micro-story? | Setup, action, resolution |
| **Motion craft** | How do we make it believable? | Physics, secondary motion, paths |

**Three motion layers** (flat animation means missing layers):
- **Primary:** the main action the viewer follows
- **Secondary:** supporting richness (shadows, related parts shifting)
- **Ambient:** background life (gradients, slow pulses)

Deep dive: [references/director/core-philosophy.md](references/director/core-philosophy.md)

## The 12 principles in Subclip

| Principle | Rule of thumb | How to build it |
| --- | --- | --- |
| Squash and stretch | Squash about [1.2, 0.8] on impact for 2 to 4 frames, stretch about [0.85, 1.15] in fast travel, keep the volume | Layer: `scaleX`/`scaleY` with `transformOrigin` at the contact point. Skip for Premium |
| Anticipation | A move 10 to 20 percent the other way, 100 to 200 ms, before the action | Native: one extra keyframe before the move. Layer: a short `power2.inOut` wind-up tween |
| Staging | Dim non-hero parts to 40 to 60 percent opacity, one primary action per beat | Opacity keyframes on the rest; hero enters 100 to 200 ms after supporting parts |
| Straight ahead and pose to pose | Pose to pose for planned moves, straight ahead for particles and ambient | Native keyframes are pose to pose; generative motion belongs in a layer |
| Follow-through and overlap | Children trail the parent by 50 to 150 ms and stop 100 to 200 ms later | Layer: delayed tweens with a small overshoot. Native: offset keyframes on child items |
| Slow in and slow out | Never linear for spatial movement | `ease-out` entering, `ease-in` leaving, `ease-in-out` on screen, `linear` only for rotation and progress |
| Arcs | A 10 to 20 px perpendicular offset at mid path, more for Playful | Layer: drive x and y from a curve, or tween them with different eases. Native: a mid keyframe off the straight line |
| Secondary action | 30 to 50 percent of the primary amplitude, 50 to 100 ms later, different easing | A shadow, glow or related part on its own tween or keyframes |
| Timing | Heavy 400 to 800 ms, light 100 to 250 ms, entrances 30 to 50 percent longer than exits | Use the duration table, converted to frames |
| Exaggeration | Playful 15 to 25 percent, Energetic 20 to 30, Corporate 0 to 5, Premium 0 | Overshoot keyframe or `back.out` strength |
| Solid drawing | Proportions stay consistent; shadows follow one light | Check key poses with `view_current_frame` |
| Appeal | Smooth curves, satisfying timing, one personality | The frame review checklist |

Deep dive: [references/director/disney-principles.md](references/director/disney-principles.md)

## Motion personality

Select one archetype per project and apply it consistently.

| Archetype | Duration | Easing | Overshoot | Keywords |
| --- | --- | --- | --- | --- |
| **Playful** | 150 to 300 ms | ease-out-back | 10 to 20% | fun, whimsical, bouncy, cute |
| **Premium** | 350 to 600 ms | cubic-bezier(0.4,0,0.2,1) | 0% | elegant, minimal, luxury, sophisticated |
| **Corporate** | 200 to 400 ms | cubic-bezier(0.2,0,0,1) | 0 to 3% | clean, professional, business, dashboard |
| **Energetic** | 100 to 250 ms | ease-out-expo | 15 to 30% | dynamic, energetic, bold, exciting |

**Default:** Corporate for interface-like graphics (product demos, dashboards, lower thirds), Playful for illustrations and characters.

**Brand motion identity:** define three constants and save them in the director brief.
1. **Signature easing:** one curve for 80 percent of the motion
2. **Duration palette:** three durations (quick, standard, slow)
3. **Entrance pattern:** one consistent way in

Deep dive: [references/director/motion-personality.md](references/director/motion-personality.md)

## Property selection

| Effect goal | Primary property | Secondary properties |
| --- | --- | --- |
| Entrance or exit | position | opacity, scale |
| Emphasis or attention | scale | rotation (subtle), opacity pulse |
| State change | opacity, color | scale |
| Direction or flow | position | rotation (follow path) |
| Depth or 3D feel | scale and shadow | position (parallax) |
| Loading or progress | rotation | scale, opacity pulse |
| Success | scale (pop) | color, check mark draw |
| Error or alert | position (shake) | color, rotation (wobble) |

**Simplicity threshold:** one property is direct, two is polished, three or more risks overwhelming.

Deep dive: [references/tables/property-selection.md](references/tables/property-selection.md)

## Duration table

| Element type | Duration | Frames at 30 fps | Rationale |
| --- | --- | --- | --- |
| Tooltip or micro feedback | 80 to 120 ms | 3 to 4 | Must feel instant |
| Button press or toggle | 120 to 180 ms | 4 to 5 | Responsive feedback |
| Icon transition | 150 to 250 ms | 5 to 8 | Clear state change |
| Card enter or exit | 200 to 350 ms | 6 to 11 | Spatial awareness |
| Modal or dialog | 300 to 400 ms | 9 to 12 | Focus shift |
| Page or scene transition | 400 to 600 ms | 12 to 18 | Context switch |
| Dramatic reveal | 600 to 1200 ms | 18 to 36 | Theatrical build |

**Distance scales duration:** 100 px is the base, 200 px is 1.3x, 400 px is 1.6x. Measure on the project canvas.

**Enter is longer than exit:** entrances 30 to 50 percent longer than exits. Viewers care about what appears.

**Reading time is separate:** the move can be fast, but a settled title must stay long enough to read twice.

Deep dive: [references/tables/timing-easing-tables.md](references/tables/timing-easing-tables.md)

## Easing selection

**Directional rules:**
- **Entrance:** decelerate (fast start, gentle landing), ease-out family
- **Exit:** accelerate (gentle start, fast departure), ease-in family
- **On screen:** smooth both ends, ease-in-out family
- **Looping ambient:** seamless, sine-based ease-in-out

**Industry standards:**

| Standard | Cubic bezier | Use for |
| --- | --- | --- |
| Material Design 3 | (0.2, 0, 0, 1) | Default on screen |
| MD3 emphasized | (0.05, 0.7, 0.1, 1) | Entrances, attention |
| MD3 accelerate | (0.3, 0, 1, 1) | Exits, dismissals |
| Apple HIG | (0.25, 0.1, 0.25, 1) | Standard iOS |
| Snappy UI | (0.2, 0, 0, 1) | Fast, decisive |
| Gentle float | (0.4, 0, 0.2, 1) | Ambient, background |
| Bounce settle | (0.175, 0.885, 0.32, 1.275) | Overshoot, playful |

**Material-based easing:**

| Material | Duration scale | Overshoot |
| --- | --- | --- |
| Rigid (metal, stone) | 1.2x | 0% |
| Elastic (rubber, gel) | 0.8x | 15 to 25% |
| Fluid (water, paint) | 1.5x | 5% |
| Paper (cards, sheets) | 1.0x | 3 to 5% |
| Gas (smoke, fog) | 2.0x | 0% |
| Glass (brittle) | 0.9x | 0% |

How each curve maps to native keyframes, GSAP and Remotion: [references/subclip-apply.md](references/subclip-apply.md).

## Common patterns

### Press or pop (Playful)
1. **Anticipation:** scale to 0.97 (50 ms, ease-out)
2. **Squash:** scale to [1.04, 0.96] (100 ms, ease-in)
3. **Follow-through:** overshoot to 1.02, settle to 1.0 (spring, 200 ms)
4. **Secondary:** shadow shrinks during the press, the icon shifts down 2 px

### Card entrance (Premium)
1. **Start:** 20 px below the target, opacity 0
2. **Path:** slight curve (10 px X offset at mid path)
3. **Easing:** ease-out cubic
4. **Follow-through:** shadow arrives 50 ms after the card
5. **Secondary:** content fades in 100 ms after the card lands
6. **Staging:** other cards dim to 80 percent

### Success (Playful)
Scale pop with ease-out-back, check mark draws in, a subtle particle burst, green fill. 300 to 400 ms total.

### Error shake (Corporate)
Position oscillates 2 to 3 times, plus or minus 10 to 15 px, ease-in-out, red tint, 300 to 400 ms, no overshoot.

More: [references/patterns/entrance-exit.md](references/patterns/entrance-exit.md), [references/patterns/state-feedback.md](references/patterns/state-feedback.md), [references/patterns/ambient-continuous.md](references/patterns/ambient-continuous.md), [references/patterns/multi-element.md](references/patterns/multi-element.md)

## Choreography essentials

**Coordinated entry:**
- Lead with the hero: the primary element enters first or most prominently
- Spatial consistency: all elements enter from the same direction
- Counter-motion: hero moves right, ambient moves left at 20 to 30 percent speed

**1/3 rule (distance):** no motion travels more than a third of the frame without a keyframe change.

**1/3 rule (elements):** with 3 or more elements, no more than a third are in motion at once.

**Stagger budgets:**

| Pattern | Delay | Total budget | Use case |
| --- | --- | --- | --- |
| Micro cascade | 20 to 40 ms | under 200 ms | List items, grid cells |
| Standard | 50 to 100 ms | under 400 ms | Cards, panels |
| Dramatic | 100 to 200 ms | under 600 ms | Hero sections |
| Wave | 30 to 60 ms | under 500 ms | Data visualizations |

**Critical:** total stagger stays under 500 ms.

Deep dive: [references/director/choreography.md](references/director/choreography.md), [references/director/narrative-structure.md](references/director/narrative-structure.md)

## Emotion to motion

| Emotion | Character | Path | Easing | Duration |
| --- | --- | --- | --- | --- |
| Joy | Bouncy, arcs | Curved, upward | ease-out-back | 200 to 400 ms |
| Calm | Smooth, flowing | Gentle curves | sine ease-in-out | 500 to 1000 ms |
| Urgency | Sharp, fast | Straight lines | ease-out | 100 to 200 ms |
| Sadness | Slow, downward | Drooping curves | cubic ease-in-out | 600 to 1200 ms |
| Surprise | Sudden, expanding | Radial outward | ease-out-expo | 150 to 300 ms |
| Elegance | Slow, controlled | Long arcs | (0.4,0,0.2,1) | 400 to 700 ms |
| Playfulness | Bouncy, irregular | Arcs, squiggly | ease-out-back | 200 to 350 ms |

**Path as language:** angular is tense, curved is friendly, spiral is whimsical, diagonal is purposeful, vertical is growth or weight, horizontal is progress.

Deep dive: [references/director/emotion-mapping.md](references/director/emotion-mapping.md), [references/director/decision-framework.md](references/director/decision-framework.md), [references/director/context-adaptation.md](references/director/context-adaptation.md)

## Weight classification

| Weight | Examples | Duration | Overshoot | Easing |
| --- | --- | --- | --- | --- |
| Heavy | Full-screen panels, overlays | 300 to 500 ms | 0% | Gentle, high damping |
| Medium | Cards, panels | 200 to 350 ms | 3 to 5% | Moderate |
| Light | Badges, icons, labels | 80 to 200 ms | 5 to 15% | Responsive |

## Quality rules

### Critical: never break
1. **Never linear for spatial movement.** Linear only for rotation and progress bars.
2. **Never opacity-only** for important changes. Combine with position or scale.
3. **Never exceed a third of the frame** without an intermediate keyframe.
4. **Always three motion layers:** primary, secondary, ambient.

### High: strongly follow
1. Match duration to element type.
2. Use directional easing (ease-out in, ease-in out).
3. Apply the principles, especially anticipation and follow-through.
4. Keep one personality across the piece.

Full checklist: [references/tables/quality-checklist.md](references/tables/quality-checklist.md). Frame review: [references/frame-review.md](references/frame-review.md).

## Troubleshooting

| Problem | Likely cause | Fix |
| --- | --- | --- |
| Looks robotic | Linear easing or no arcs | Add easing curves and arc paths |
| Feels too slow | Duration too long for the element | Check the duration table, use ease-out |
| Feels cheap or flat | Missing secondary and ambient | Add shadow motion and background life |
| Too distracting | Too many elements moving | Apply the 1/3 rule, reduce amplitude |
| No personality | Generic easing everywhere | Apply one archetype consistently |

Deep dive: [references/tables/troubleshooting.md](references/tables/troubleshooting.md)

## Reference

[examples/motion-principles-reference.mp4](examples/motion-principles-reference.mp4) is a 25.7 s test made with this skill in Subclip: six principles side by side, each "Without" on the left and "With" on the right, in three HyperFrames layers with a CC0 music bed. [examples/one-second-contact-sheet.jpg](examples/one-second-contact-sheet.jpg) shows one frame per second.

| Time | Principle | Without | With |
| --- | --- | --- | --- |
| 0 to 1.6 s | Title | | |
| 1.6 to 5.4 s | Slow in and slow out | Linear move, evenly spaced ghost dots | power3.inOut, ghost dots bunched at both ends |
| 5.4 to 9.1 s | Squash and stretch | Rigid ball bouncing | Stretch in the fall, squash on each contact, scaled by height |
| 9.1 to 12.9 s | Anticipation | Block jumps to the target | Lean back 40 px, then launch and settle |
| 12.9 to 16.6 s | Arcs | Straight path | Curved path with the trail drawn |
| 16.6 to 20.4 s | Follow-through and overlap | Card moves as one piece | Inner parts lag, overshoot and settle after the card stops |
| 20.4 to 24.1 s | Staging | Every tile wobbles | Others dim to 28 percent, the hero tile pops |
| 24.1 to 25.7 s | End card | | |

Adapted for Subclip from https://github.com/LottieFiles/motion-design-skill by LottieFiles, MIT
