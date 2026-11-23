# Stage 3: fix playbook

When the creator reports a problem: name the failure, apply the fix, rewrite only the affected sections and say what to re-batch. Never re-roll an unchanged prompt.

## The master rule

If something keeps breaking between cuts, stop describing it better inside every shot and give it its own lock. Position, orientation, facing, speed, where a character stands, how fast the edit moves: anything that must survive several cuts is promoted out of the segment descriptions into a named hard rule in absolutes ("the object never moves or turns"). Adding more careful description inside each of sixteen segments does not work. This is the single highest-value lesson of the workflow.

## Failure catalogue

| Symptom | Cause | Fix |
|---|---|---|
| Object drifts or rotates between cuts | No dedicated rule; it is re-described per shot | Its own geometry lock in capitals with every drift mode negated |
| Still drifts after a lock | Lock anchored to screen coordinates, which move with the camera | Re-anchor to a world landmark (floor joint, distance from another object, a doorway alignment) and add "the anchor is a place on the floor, not a place in the frame" |
| Object re-centers itself shot to shot | The model is correcting composition | "Do not re-center it, do not re-frame around it, do not correct its position to match a previous shot" |
| A duplicate of the hero object appears | Never stated that only one exists | A definition clause at the top of the lock: there is only ever one of this object |
| Object teleports | It legitimately moves but the move was never shown | A second anchor plus a visible on-screen transit; an unshown move is worse than drift |
| Object changes between before and after | Two assets designed separately | Identical material paragraph in both image prompts, plus a lock that both are the same material |
| Transformation looks fake | The model was asked to morph | Hide it: A before the cover, B after, never both in frame; tell the change with light; "no glow effects, no magic" |
| Product shot looks cheap | Product on the floor, camera below it | Put it on a table or bench with the camera slightly above looking down; state "never shot from below" |
| Product shots all look the same | No variety rule | Product variety lock plus a distinct distance and downward angle in each lens lock |
| A product action shot breaks | A tool entering frame is high difficulty | Downgrade to a passive macro from a new angle; the shot count stays the same |
| Nothing feels like it changes | One lighting state across the film | Named light states by dominant sources, tagged per segment |
| Light states ignored | Lighting written as prose decoration | Tag every segment with its state like a lens lock; bind transitions to a frame |
| The middle drags | Time spent on setup and travel | Start segments on the action; delete the run-up entirely |
| No tension | Edit and subject move at the same rate | Edit acceleration lock with named exceptions |
| The acceleration rule eats the big beats | Rule applied without exceptions | Name the two or three long segments inside the rule |
| Machine feels light | No weight cues | Camera vibration caused by mass (not handheld shake), deep floor rumble, visible inertia |
| Machine keeps speeding up | No global speed rule | Speed lock plus a restatement in the positive locks |
| The threat reads late | The hero object starts far from the threat | Move it close; state that the threat is legible in frame one |
| Characters drift | Cinematic light baked into the sheet | Regenerate the sheet with flat ambient light; keep anchors short and repeat them verbatim |
| A character holds a prop absent from the sheet | The video prompt introduced it | Acceptable, but flag it as the thing to watch; props drift more than faces |
| A reference line contradicts its image | Written from the plan, not from what generated | Rewrite every reference line to describe what is in the image |
| A prop returns in the wrong color | Never stated | A one-line lock naming the right state and the wrong one |
| Body mechanics look wrong | Action written as intent | Direct it as mechanics ("one knee bending forward into a shallow lunge, never a deep squat") |
| The scene looks like a render | Empty background | "The background stays alive in every wide and medium shot": people working plus people crossing the depth |
| The logo comes out mangled | Redrawn too often | Two placements at most, both named, plus "the logo appears nowhere else"; in Subclip use the real file as a native overlay |
| A version got worse after improvements | Complexity budget spent | Revert to the last clean version and ship it |

## How the iteration usually goes

- v1, baseline: describe the whole film in plain English, nothing clever. The concept usually works at once and three or four specific things break. Diagnose them as named problems, not as "not good enough".
- v2, targeted fixes: apply the catalogue fix for each named problem. Reliably much better, and reliably still has the continuity problem, because v2 fixes usually land inside segments.
- v3, promote to locks: the thing that kept breaking gets its own rule. Setup is deleted rather than compressed, the edit acceleration is made explicit, the product block is expanded. This is normally the winner.
- v4 and v5, the trap: more emotion, more elaborate shots, more camera variety. Each change is an improvement alone, but together they make the film worse (more emotion means more consistency to hold, more complex shots mean more physics, more variety means more instructions).

Every prompt has a complexity budget. When a version is clean, stop and ship; an extra brilliant idea is one more thing for the model to get wrong. If a change made things worse, revert instead of fixing forward.

## Batching

Several generations per version, never one. Identical prompts diverge hard: one nails the camera and breaks the product, another nails the transformation and breaks the characters. Generate four, compare side by side, keep what works. About ten generations for a 30 second film is normal, of which only three or four are real prompt changes. If one in four is clean, keep it and stop. Quote the batch before spending (`estimate_ai_generation`).

## When renumbering segments

Deleting or adding a segment shifts every ID after it. Lens locks, light state ranges, lock restatements and cross references all name segments by ID, so rewrite them together, and tell the creator if a voiceover or edit notes refer to shot numbers.
