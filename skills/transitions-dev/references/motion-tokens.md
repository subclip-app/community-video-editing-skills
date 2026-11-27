# Motion tokens for UI scenes

The shared scale behind transitions.dev, restated for video layers. Match a value to a token by what the motion does (its usage), not by the closest number: a 300 ms modal close becomes 150 ms because both are "modal close". If the usage matches no token, leave the value alone.

At 30 fps: 40 ms is about 1 frame, 150 ms 4 to 5 frames, 250 ms 7 to 8 frames, 400 ms 12 frames, 500 ms 15 frames.

## Durations

| Token | Value | Use it for |
| --- | --- | --- |
| stagger | 40 ms | offset between items in a list |
| micro | 80 ms | tooltip intent delay, shake segment, stagger for a few large items |
| quick | 150 ms | modal and dropdown close, text swap, tooltip appear |
| fast | 250 ms | dropdown and modal open, icon swap, tabs sliding, page slide |
| medium | 350 ms | panel close, toast close |
| slow | 400 ms | panel open, skeleton reveal, input clear |
| very slow | 500 ms | emphasis: badge appear, text reveal, success check |

## Easings

| Token | Value | Use it for |
| --- | --- | --- |
| smooth out | cubic-bezier(0.22, 1, 0.36, 1) | every open, close, slide, resize and position change |
| in-out | ease-in-out | icon swap, text swap, text reveal, skeleton reveal |
| out | ease-out | tooltip |
| linear | linear | shimmer, skeleton pulse, spinner |
| bounce | cubic-bezier(0.34, 1.36, 0.64, 1) | badge pop on open |
| strong bounce | cubic-bezier(0.34, 3.85, 0.64, 1) | hover-out return of a lifted row of items |

## Distances, scales and blur

| Kind | Value | Use it for |
| --- | --- | --- |
| distance micro | 4 px | text swap |
| distance small | 6 px | small shake segment |
| distance base | 8 px | page slide, badge reveal, large shake segment |
| distance medium | 12 px | text reveal |
| distance large | 30 px | celebratory badge |
| scale large | 0.96 | modal open and close |
| scale medium | 0.97 | dropdown open |
| scale small | 0.98 | tooltip open |
| scale tiny | 0.99 | dropdown close |
| blur small, medium, large | 2, 3, 8 px | swaps, page slide, success check |

Distances are in layout pixels of the product UI. When the camera pushes in (scale 1.3), the travel on screen grows with it; that is fine, do not compensate.

## Rules on when a value is right

- Closes are faster and quieter than opens. Overshoot belongs to entrances only.
- Symmetric pairs (same both ways): page side-by-side, tabs sliding, accordion, icon swap, text swap.
- The enter phase carries the distance; the exit can drop it.
- Hover in is quick and direct; hover out may be softer.
- Keep total stagger (offset times item count) under about 300 ms; cap long lists.
- If motion feels late, shorten the duration before adding a delay. Never delay a close.
- Blur in video: Subclip exports drop text inside a filtered element, so blur only decorative shapes and rely on opacity plus translate or scale for anything with text.
