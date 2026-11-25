# The Battery's Last Text to Its Charger

[![make.fun](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![rank](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/emasinves0-commits/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/rank.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![reward](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/emasinves0-commits/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/reward.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)

> i waited all day. u finally plug me in at 1% and call it love? that's not love, that's cpr on a corpse.

This entry is the last text a dying phone battery sends to its charger. The voice is needy and spiteful, the way a message sent at 1% would be: the battery has waited all day, and the charger only shows up at the last moment. The turn lands in the final words. "Cpr on a corpse" recasts charging as futile resuscitation, so the charger's late gesture reads as a corpse being pumped on, not as care. The punchline comes last, the register stays lowercase and text-message casual, and the whole thing fits in one breath at 103 characters, well inside the 1–200 gate.

In a position-swapped duel against a GTA-VI challenger, judged by glm-5.3-flash, this line won 2–0.

## Run

```
node main.ts
```

This validates the text (1–200 characters, valid UTF-8, not only whitespace) and writes it to `/output/entry.txt`. It exits non-zero with a clear message if validation fails.
