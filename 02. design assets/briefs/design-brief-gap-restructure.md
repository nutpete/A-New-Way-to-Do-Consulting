# The Counter — Design Brief: Gap Section Restructure

## Context

The Gap section is the second beat of the site (right after the hero). It sets up the foundational argument: **AI literacy ≠ AI fluency.** The current implementation pairs a Windows 2000–styled column on the left (literacy = boring, dated, what teams already have) with a pixel-arcade column on the right (fluency = alive, what teams need). Visually the contrast is great. But two things aren't working yet:

1. **The headline takes four lines and consumes too much real estate.** "This gap exists because learning what AI can do is not the same as knowing how to work with it." The reader hasn't even arrived at the comparison and they've already spent a screen.

2. **The visual mockups carry contrast, but the explicit narrative is missing.** Earlier the section had a bullet checklist on each side that said in plain language *what literacy does* vs *what fluency does*. The new design replaced that articulation with three full-size mockup vignettes per side. The eye gets the vibe, but the brain doesn't get the receipt of differences.

The whole message should fit, ideally, in **roughly one screen** so the buyer reads the gap in one beat and moves on.

---

## The Goal

Find the blend. Keep the visual contrast (Win2K vs pixel-arcade) but **bring back the bullet checklist** as the primary narrative driver. The mockups become *supporting* rather than primary — smaller, partial, decorative.

A reader skimming should be able to:
1. Read the section headline in one or two lines
2. Scan a 4–6 item bullet list on each side and instantly understand the difference
3. Glance at the small visuals to feel it without having to study them

---

## What Needs to Happen

### 1. Tighten the headline

Reduce from four lines to **one or two** at most. Suggested directions (pick one or write better):

- *"Learning AI isn't the same as working with it."*
- *"Literacy teaches what AI does. Fluency builds how to work with it."*
- *"A literacy gap, mistaken for a fluency one."*
- *"What most companies invest in is not what their teams actually need."*

The current "this gap exists because…" framing is fine in spirit but the construction makes it bulky.

### 2. Restore the side-by-side checklist as the primary narrative

Two visible columns. Each has:
- A column eyebrow (like *"What happens today"* / *"What your teams need"* — these already exist)
- A column title (*"AI Literacy."* / *"AI Fluency."*)
- A short sub-line (one sentence each, like the current ones)
- **A 5–6 item checklist** — the spine of the section

Suggested checklist content (lifted from the previous version, minor touchups):

**Literacy column** (desaturated, dim, smaller):
- ✓ Knows what AI can do
- ✓ Uses AI for simple tasks
- ✓ Accepts what AI gives back
- ✓ Applies generic use cases
- ✓ Speeds up existing work
- ✓ Reduces costs

**Fluency column** (full color, alive):
- ✓ Knows how to work with AI
- ✓ Uses AI on real problems
- ✓ Shapes what AI produces
- ✓ Builds context-specific solutions
- ✓ Expands what teams can take on
- ✓ Reduces costs *and* unlocks growth

The checks themselves can carry visual weight — Caveat-style hand checks on the literacy side (faded, dutiful), green/pixel-style ticks on the fluency side.

### 3. Demote the mockups to supporting visuals — and inline them with the checklist

Currently each side has 3 large mockup vignettes (literacy: PowerPoint deck + stock photo + Ask AI chat. Fluency: iterative chat + custom tool dashboard + before/after pill). These are doing too much, and stacking them below the column buries them. Two key shifts:

**A. Smaller and inline, not stacked below.** Each side gets **3 small screens that run *inline* with the checklist**, sitting *beside* (or interleaved with) the bullets — not below. The column reads as a continuous flow of *bullet → small screen → bullet → small screen → bullet*. The small screens are evidence the eye glances at while reading the bullets, not a separate row to scroll past.

**B. The screens must demonstrate the actual difference in *how you use AI*, not generic UI shells.**

Generic onboarding mockups, plain "Counter App" interfaces, stock workshop photos, and abstract dashboards don't say anything — they could be from any product. **Drop those.** What works is screens that show *the actual interaction pattern* on each side. Two columns of contrasted AI usage:

**Literacy side mini-screens** — flat, one-shot, generic input/output:
- *e.g.* a chat window with a single prompt: *"Write me a status update"* → AI returns a boilerplate status update. Done. No follow-up.
- *e.g.* a chat with: *"Summarize this email thread"* → AI returns a generic summary. No shaping.
- *e.g.* a deck slide titled *"5 Ways to Use AI"* with a generic bulleted list.

The visual signal: AI gives back what you'd expect. The user took what AI offered.

**Fluency side mini-screens** — iterative, shaped, multi-turn:
- *e.g.* a chat showing a sequence: user prompts, AI replies, user pushes back ("make it sharper" / "focus on the renewal risk, not the timeline" / "skip the intro, lead with the ask"), AI re-shapes, user iterates again. Show the *back-and-forth* as a visible scroll of messages.
- *e.g.* a custom prototype the team built (not a generic dashboard — something specific, like the "renewals at risk" tool from the existing fluency mockup, but smaller).
- *e.g.* a before/after: the original raw AI output on the left, the shaped/refined version on the right after iteration.

The visual signal: AI's output is being *worked with*, not *taken*. The user is shaping what comes back through the way they talk to it.

The point isn't to mock UI — it's to show *what thinking and working with AI looks like*. Skim the fluency screens and you should see: conversation, iteration, output that's been pushed on.

### 4. Layout direction

A workable structure where small screens are inline with the bullets, not stacked below:

```
[ section eyebrow + tightened headline — 1–2 lines max ]

────────────────────────────┬────────────────────────────
LITERACY                    │  FLUENCY
(dim eyebrow)               │  (pixel eyebrow)
H3                          │  H3 (italic green)
short sub-line              │  short sub-line

✓ Knows what AI can do      │  ✓ Knows how to work with AI
✓ Uses AI for simple tasks  │  ✓ Uses AI on real problems
                            │
[ small screen — one-shot   │  [ small screen — iterative
  prompt → generic output ] │    chat with shaping ]
                            │
✓ Accepts what AI gives     │  ✓ Shapes what AI produces
✓ Applies generic use cases │  ✓ Builds context-specific
                            │     solutions
                            │
[ small screen — slide deck │  [ small screen — custom-built
  "5 Ways to Use AI" ]      │    prototype, partial view ]
                            │
✓ Speeds up existing work   │  ✓ Expands what teams can
                            │     take on
✓ Reduces costs             │  ✓ Reduces costs *and* unlocks
                            │     growth
                            │
[ small screen — generic    │  [ small screen — before/after
  status-update output ]    │    showing shaped output ]

(footnote tag)              │  (footnote tag)
```

The screens are interspersed *between* groups of 1–2 bullets so the reader naturally encounters them in the rhythm of reading the column. They never break out into their own row — they live alongside the narrative.

### 5. Constraints (don't break)

- **Brand world stays paper.** The Gap section is still in the paper half of the site. The pixel arcade vibe on the right stays, but it's seasoning, not the main course.
- **The Win2K vs pixel-arcade contrast principle stays.** Literacy still feels dated/desaturated, fluency still feels alive. The reduction is in *size*, not in *style*.
- **Press Start 2P** stays for fluency-side accents (eyebrow, badges). Caveat for hand-check marks. Instrument Serif for column titles. Space Grotesk for body.
- **One-screen target.** ~720–880px tall on desktop, end-to-end. If the visuals don't fit, they shrink further or drop one — the checklist always wins the real estate argument.

---

## References

- Current implementation: `02. design assets/Gap Section.html` — the version that has the big mockups
- Previous bullet-list version content (canonical): aifluency.studio (live site has the older copy still rendering)
- Pixel Accent Kit: `02. design assets/Pixel Accent Kit.html` (use elements from here for any pixel accents on the fluency side)

---

## Deliverable

A v2 of `Gap Section.html` (paste-ready) where:
- The headline fits in 1–2 lines
- The checklist is the primary narrative on both sides
- 2–3 small visuals per side support the columns rather than dominating them
- The whole section reads in roughly one screen
- The visual contrast (literacy boring, fluency alive) still does the heavy lifting
