# Transition picker: UI state change to transitions.dev name

Pick by the visible element first, then by the verb. Each name links to its page on transitions.dev, where the creator can watch it and read its own code. This file is an index in our own words; it does not contain the transitions.

| UI state change in the video | Transition | Why this one |
| --- | --- | --- |
| Menu or popover opens from a button | [Menu dropdown](https://transitions.dev/transitions/menu-dropdown/) | Grows from its trigger, so the viewer sees where it came from. |
| Dialog over the page, with a backdrop | [Modal open / close](https://transitions.dev/transitions/modal-open-close/) | Centred scale-in, faster and quieter close. |
| Round + button becomes the menu it opens | [Gooey plus menu](https://transitions.dev/transitions/gooey-plus-menu/) or [Dropdown menu morph](https://transitions.dev/transitions/dropdown-menu-morph/) | The trigger itself turns into the surface. |
| View switcher, segmented control, filter tabs | [Tabs sliding](https://transitions.dev/transitions/tabs-sliding/) | One pill travels; the content swaps under it. |
| List to detail, step 1 to step 2 | [Page side-by-side](https://transitions.dev/transitions/page-side-by-side/) | Short horizontal slide with a fade, same both ways. |
| Side panel or drawer slides into a region | [Panel reveal](https://transitions.dev/transitions/panel-reveal/) | Bigger surface, slower clock than a dropdown. |
| A card or container changes size | [Card resize](https://transitions.dev/transitions/card-resize/) | Tweens the box instead of swapping it. |
| FAQ, settings group, "show more" | [Accordion](https://transitions.dev/transitions/accordion/) | Height grows and shrinks, chevron flips. |
| Drag a row to a new position | [To-do reorder](https://transitions.dev/transitions/to-do-reorder/) | The dragged row lifts; rows it passes open the slot. |
| A file or card dropped with weight | [Drag drop with physics](https://transitions.dev/transitions/drag-drop-with-physics/) | When the drop itself is the story. |
| "Saved", "Copied", "Task created" | [Toast open / close](https://transitions.dev/transitions/toast-open-close/) | Rises from the edge, leaves quicker than it came. |
| Several notices in a row | [Banner stacking](https://transitions.dev/transitions/banner-stacking/) | New ones rise in, older ones push back. |
| New item count on an icon | [Notification badge](https://transitions.dev/transitions/notification-badge/) | Small dot pops onto the trigger. |
| Payment done, upload finished | [Success check](https://transitions.dev/transitions/success-check/) or [Spinner to check morph](https://transitions.dev/transitions/spinner-to-check-morph/) | Celebrates completion; the morph also covers the wait. |
| Ticking a task | [Checkbox check](https://transitions.dev/transitions/checkbox-check/) | Fill, then stroke-draw the mark. |
| Wrong PIN, invalid field | [Error state shake](https://transitions.dev/transitions/error-state-shake/) | Short shake plus a message that reverts. |
| Clearing a search box | [Input clear with dissolve](https://transitions.dev/transitions/input-clear-with-dissolve/) | The text flies out instead of vanishing. |
| Content loads into a placeholder | [Skeleton loader and reveal](https://transitions.dev/transitions/skeleton-loader-and-reveal/) | Pulse, then cross-fade to the real row or card. |
| A label is "working" | [Shimmer text](https://transitions.dev/transitions/shimmer-text/) | A highlight band sweeps the text. |
| AI status line moves through steps | [Thinking states](https://transitions.dev/transitions/thinking-states/) | Shimmers while it holds, swaps to the next step. |
| AI answer appears word by word | [Streaming text](https://transitions.dev/transitions/streaming-text/) | Words resolve one by one. |
| Agent reasoning log | [Reasoning stream](https://transitions.dev/transitions/reasoning-stream/) | Lines step up in pairs. |
| Generated image or card arrives | [Image generation placeholder](https://transitions.dev/transitions/image-generation-placeholder/) | A placeholder that resolves into the result. |
| Text in place changes ("Save" to "Saved") | [Text states swap](https://transitions.dev/transitions/text-states-swap/) | Old text out short, new text in. |
| Two icons in one slot (play and pause) | [Icon swap](https://transitions.dev/transitions/icon-swap/) | Cross-fade with a small scale. |
| Headline and subline enter | [Texts reveal](https://transitions.dev/transitions/texts-reveal/) | Staggered rise, quiet exit. |
| Dashboard number updates | [Number subtle change](https://transitions.dev/transitions/number-subtle-change/) | Changed digits only, stays calm. |
| A number should be noticed | [Number pop-in](https://transitions.dev/transitions/number-pop-in/) | Digits flip on a drum with a small bounce. |
| Points, rewards, milestones | [Spinning counter](https://transitions.dev/transitions/spinning-counter/) | The change is an event. |
| A setting switches on | [Toggle](https://transitions.dev/transitions/toggle/) | Thumb travels with a light overshoot. |
| A value snaps to a stop | [Magnetic slider](https://transitions.dev/transitions/magnetic-slider/) | Snaps on release. |
| Hover hint over an icon | [Tooltip open / close](https://transitions.dev/transitions/tooltip-open-close/) | Short intent delay in, instant out. |
| Cursor over a row of avatars or chips | [Avatar group hover](https://transitions.dev/transitions/avatar-group-hover/) | Neighbours lift with distance falloff. |
| Product card reacts to the cursor | [3D tilt](https://transitions.dev/transitions/3d-tilt/) | Tilt plus glare; use sparingly in video. |
| Like or favourite | [Like button](https://transitions.dev/transitions/like-button/) | Fill with a pop. |
| "Learn more" link hover | [Learn more hover](https://transitions.dev/transitions/learn-more-hover/) | Chevron becomes an arrow. |

## Tie-breakers

- Prefer the lighter transition when two fit: card resize over panel reveal, dropdown over modal, success check over a celebration modal.
- A screen recording already shows the real product motion: keep it. Rebuild a moment only when the recording is janky, missing or too small to read.
- Do not stack two transitions on one element at once. Sequence them: the dropdown closes, then the list filters.
- No match: offer two or three names with their links and let the creator pick.
