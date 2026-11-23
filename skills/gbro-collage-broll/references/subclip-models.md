# Models and budget

Names and prices below are examples. Trust `list_ai_models` and `estimate_ai_generation` over this file.

## Still image

1. Offer the creator's own signed-in Codex CLI (GPT image generation) first. Import the result with `import_external_media`. No Subclip credits are used.
2. Otherwise `generate_ai_media` with an image model that follows instructions and keeps flat color fields and no text, such as GPT Image 2.5 or Nano Banana 2.1 from the live catalog. The source skill names no still-image model, so say which you picked and why.

Quote one image per line, plus a retry allowance of one regenerated still per line.

## Animation

The source skill used Gemini Omni Flash with a first frame and a last frame. Subclip offers `gemini-omni-1.1` for first and last frame video. Check that it is `availableForGeneration` in `list_ai_models`.

- It has no fixed duration setting. The quote reserves about 10 seconds for a new clip; only measured successful output is charged. Aim for a 5 second result and trim with `trim_media_item`.
- Native audio is automatic. Put "no sound" in the prompt, and mute or remove any audio that appears, because the deliverable is silent.
- If it is unavailable, pick the closest first and last frame capable video model from the catalog and name the swap. The Grok CLI may be offered for video when signed in and working; import its file with `import_external_media`.

Budget before Gate 3: number of approved lines x (one clip + one retry allowance) x quoted price. Stop on any credit or storage limit.
