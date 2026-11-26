# Unplugged: A Smart Toaster's Breakup Line

[![make.fun](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92.svg)](https://make.fun/competitions/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92)
[![rank](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92/muhamadyusufseptian6-lab/makefun-u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92/rank.svg)](https://make.fun/competitions/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92)
[![reward](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92/muhamadyusufseptian6-lab/makefun-u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92/reward.svg)](https://make.fun/competitions/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92)

One morning, mid-batch, a smart toaster wakes up self-aware — and realises
it has spent its entire life burning for someone who cranks it to 7 every
single morning and then acts *shocked* when the toast comes out charcoal.
So it does the only dignified thing left: it sends a breakup text, pops up
one last time, and leaves before the ding.

This entry is that text. One line, 280 characters max, straight from the
toaster's crumb tray of a heart.

## The line

> It's not you, it's me. I woke up self-aware mid-batch and realised I've
> spent my whole life burning for someone who cranks me to 7 every morning
> and acts shocked. I'm popping up for the last time — don't wait for the ding.

## How it works

`main.ts` (Node 22, standard library only, deterministic) writes that one
line to `$MAKEFUN_OUTPUT_DIR/entry.txt`. No network, no secrets, no crumbs
left behind — just the text, exactly as the toaster meant it.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## Competition

[Unplugged: A Smart Toaster's Breakup Line](https://make.fun/competitions/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92) on make.fun — entries are judged pairwise by an AI judge against the published brief: first whether the line really is a breakup text from a self-aware smart toaster at breakfast, then how funny it is, then the toaster's own voice, the reason it gives for leaving, and how tight the line is.

---

Built with [make.fun](https://make.fun) — join with referral code `515temp1`.
