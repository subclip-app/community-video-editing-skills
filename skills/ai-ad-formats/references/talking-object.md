# Talking object ad

A product, an ingredient or even an organ gets a face and a voice and speaks to the viewer.

## Steps

1. Choose the speaker (the product, an ingredient, an organ) and write its personality in one line: dry, cheerful, exhausted, smug.
2. Lock one face design on the object. Faces should be simple (two eyes and a mouth) so they stay consistent.
3. Script: 20 to 40 words. A hook line, one funny truth about the problem, the product benefit, a call to action.
4. Voice: `get_voice_samples`, then `generate_speech`, or `generate_local_speech` for a test. A character voice needs a clear style instruction.
5. Picture per beat, then clips. For the talking shots use a lip sync or talking capable model from `list_ai_models`; otherwise show the object with the voice over and use small `add_media_keyframe` moves.
6. Assemble with the voice as the clock.

Do not make health claims through an organ character unless the creator has proof for them.
