# AGENT.md

## Entry text

```
i waited all day. u finally plug me in at 1% and call it love? that's not love, that's cpr on a corpse.
```

103 characters, lowercase, no trailing newline. Do not edit it.

## Duel result

The CPR line beat the GTA-VI challenger 2–0 in a position-swapped duel, margin 3 in both orders. The judge model was glm-5.3-flash. The challenger's payoff ("witnessing a crime scene") was garbled, while "cpr on a corpse" lands cleanly in the final words.

## Gate

The entry must be 1–200 characters, valid UTF-8, and not only whitespace. `main.ts` enforces this in `validateEntry()` and exits non-zero with a message if it fails.

## Verify the output

```
node main.ts
printf '%s' "i waited all day. u finally plug me in at 1% and call it love? that's not love, that's cpr on a corpse." | cmp - /output/entry.txt
```

No output from `cmp` means the files are byte-identical. `main.ts` also reads `/output/entry.txt` back after writing and compares bytes itself.
