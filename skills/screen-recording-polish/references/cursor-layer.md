# Cursor layer pattern

From the reference video: a 1500 by 904 capture card on a white frame, the cursor inside the same camera group, and one paused GSAP timeline. Times in seconds.

## Tip helper

The cursor is a 134 px box whose arrow tip sits at 23% across and 13% down. Convert a target in card pixels to the box position once, up front:

```js
const CX = 210, CY = 88, S = 134, TIPX = 0.23 * S, TIPY = 0.13 * S;
const tip = (x, y) => ({ x: CX + x - TIPX, y: CY + y - TIPY });
const P = { rectTool: tip(625, 40), share: tip(1405, 35) };
```

Read target positions from the capture: a capture of 2880 by 1736 shown at 1500 px wide scales every coordinate by 1500 / 2880.

## Moves

```js
const tap = (tl, t) => {
  tl.to(cursor, { scale: 0.84, duration: 0.1, ease: 'power2.in', transformOrigin: '23% 13%' }, t);
  tl.to(cursor, { scale: 1, duration: 0.22, ease: 'power2.out', transformOrigin: '23% 13%' }, t + 0.1);
};
// entry: straight up from below the frame
tl.fromTo(cursor, { x: P.rectTool.x, y: 1262 }, { x: P.rectTool.x, y: P.rectTool.y, duration: 0.9, ease: 'power3.out', immediateRender: false }, 0.5);
tap(tl, 2.9);                                   // the click selects the tool
tl.to('#toolHighlight', { opacity: 1, duration: 0.08 }, 2.9);
// drift aside while a label types, then exit off the right edge
tl.to(cursor, { x: 2140, y: 400, duration: 0.6, ease: 'power2.in' }, 18.4);
```

## Beat table of the reference

| Time | Beat | Caused by |
| --- | --- | --- |
| 0.5 | cursor rises from below | entry |
| 2.9 | rectangle tool lights up | click |
| 5.0 to 6.5 | box drawn while the cursor drags; welcome screen clears | press and drag |
| 7.2 | label types, cursor drifts aside | click |
| 10.8 | Share presses, "Live link copied" toast lands | click |
| 11.1 to 14.4 | camera pulls back, LIVE rises behind the window and sinks again | the spoken word "live" (the embed) |
| 18.4 | cursor leaves off the right edge | exit |

Shapes drawn by a drag are set from a progress value in `onUpdate`, so seeking to any time draws the same partial shape.
