# The Counter — Design Brief: Gap Section v9 (comparison table)

## Where we are

The Gap section has been through eight iterations today. v8 (the current state) reads as a structured comparison with three category rows (mindset / interaction / outcome), paired visual artifacts on each side, column headers, and a serif-italic row title with a line beneath each row.

The bones are right. **What v9 needs is a sharper visual articulation of the comparison-table structure, plus a new positioning line that finally names what the section is actually about.**

We've also dropped the "must fit on one screen" constraint. Clarity beats compactness here. The reader should *want* to scroll the comparison.

## The single most important change for v9

Add this positioning line. It's the sharpest articulation of the gap we've found:

> **AI literacy is what you're doing.**
> **AI fluency is what no one is teaching.**

This is the line. It needs to land prominently — probably right under the existing headline (`Literacy teaches what AI does. Fluency builds how to work with it.`) or as the lede that *sets up* the table beneath it.

It's not a subhead. It's the thesis. Treat it that way visually.

## The full copy hierarchy for the section

```
01 · The Gap                          (section eyebrow, mono caps, existing)

Literacy teaches what AI does.        (italic serif, large, existing
Fluency builds how to work with it.   headline — fluency in green)

AI literacy is what you're doing.     (NEW — second headline beneath
AI fluency is what no one is teaching. the first; serif, prominent)

Here's the difference between the two. (italic serif subhead, ink-soft)


┌─────────────────────────────────────────┐
│  AI Literacy.       │   AI Fluency.     │   (column headers, serif italic;
│  (dim)              │   (full color)    │   underlined as the table top)
├─────────────────────┴───────────────────┤

The Mindset                              (full-width row title,
─────────────────────────                serif italic, line beneath)
[ literacy artifact ]   [ fluency artifact ]


The Interaction
─────────────────────────
[ literacy artifact ]   [ fluency artifact ]


The Outcome
─────────────────────────
[ literacy artifact ]   [ fluency artifact ]


// already have this.       ▶ THE COUNTER BUILDS THIS
   it isn't enough.         (col-tag, pixel-styled)
```

## Add a small caption above (or below) each artifact

This is a key change for v9. Each row has a category title (*The Mindset*) — but inside each cell, the artifact also gets its own short headline that *describes what's happening in the picture*. The caption is the bridge between "the picture" and "the meaning." Without it, the reader has to do too much interpretation. With it, the picture and the caption together tell a complete sentence.

Treat captions as small italic serif descriptors (12–14px), set above or below the artifact. Tight. Single sentence at most.

**Suggested captions (the design AI can sharpen these):**

| Row | Literacy caption | Fluency caption |
|-----|------------------|-----------------|
| Mindset | "AI runs predefined tasks for you." | "AI helps you solve problems you're stuck on." |
| Interaction | "Pick a prompt. Take what comes back." | "Bring your mess. Shape it together. Build something." |
| Outcome | "Same work, less time." | "New work that wasn't possible before." |

These are illustrative. The real ones can be tighter or sharper. The structural ask is: **every artifact gets one short headline.** Picture + caption = one self-contained beat in the table.

---

## The fluency side needs sharpening — tell a narrative

The literacy column reads cleanly because the through-line is obvious: person is handed a tool → uses it for simple tasks → saves a little time. Each artifact reinforces "you receive, you apply, you measure."

The fluency column doesn't yet have an equally clear through-line. It needs one. The narrative we want:

> **A person hits a problem in their work → reaches for AI as a thinking partner → shapes the answer iteratively → ships something that wasn't possible before.**

Each row should be one beat of that story:

### Fluency · Mindset (REVISIT — current artifact is too abstract)

The current "cohort character with thought bubble being shaped" is conceptually right but visually too disconnected from real work. **Replace it with a moment of encountering a problem.**

A small visual showing a person at their work — could be a desk, a notebook, a screen — caught in a moment of *"I wonder how I can solve this."* Maybe with a question mark thought bubble. Maybe with a small AI presence (the cohort alien) nearby, available — but the foreground is the human encountering the problem.

The caption underneath: something like *"AI helps you solve the problems you're stuck on."* — implying that fluency starts when the person brings their *real* problem to AI, not when AI hands them a use case.

This sets the foundation for the rest of the column. Mindset = "AI is something I reach for when I'm stuck, on whatever I'm working on."

### Fluency · Interaction (KEEP — existing mess→shaped→built artifact)

This already shows the "shape it together" beat. Keep it. The caption pulls it together: *"Bring your mess. Shape it together. Build something."*

### Fluency · Outcome (KEEP — existing capability log)

The capability log of 4 shipped things works as the outcome beat — *"new work that wasn't possible before."* Keep it.

The narrative reads: *I have a problem → I shape it with AI → I ship something new.*

---

## How to think about the visuals — direction, not spec

The pairs you're designing should make the headlines land *visually*. The headlines are the brief; the visuals are your interpretation of them. **You have freedom to reimagine the artifacts however you'd like** — the goal is making the parallel between the two columns hit hard. Each row should make the reader instantly feel the contrast across the page.

What's existed in earlier versions (treat as *inspiration*, not requirements):

**Literacy column — direction**

The through-line is *handed → applied → measured*. The vibe is paper-world: corporate, dated, static, slightly desaturated. Reader recognizes "yeah, that's how we do AI today."

Earlier ideas that landed:
- Mindset: a printed training handout with bullet points of AI use cases — feels like a thing handed out at a vendor lunch.
- Interaction: a Win2K-style one-shot prompt panel — a single typed prompt and a single boilerplate reply.
- Outcome: a corporate productivity memo with a red angled "−30% TIME SPENT" stamp — efficiency framing, no new work.

If you can find sharper visual metaphors for the same beats, take them.

**Fluency column — direction**

The through-line is *encounters problem → reaches for AI as thinking partner → shapes answer iteratively → ships new capability*. The vibe is pixel-world: alive, in-motion, hand-built, paper-card backgrounds with stepped pixel shadows.

Earlier ideas that landed:
- Interaction: a mess→reshape→built tool stack — handwritten Caveat fragments at top getting pulled through a "▼ RESHAPE" arrow into a custom-built pixel tool at the bottom.
- Outcome: a "team capability log" listing 4 things the team shipped (Renewal copilot, House-style PR review, Onboarding bot, Weekly digest) with week tags — *"none of these existed before."*

The fluency mindset visual is the one that needs the most rethinking. Earlier we tried a cohort character with a thought bubble being shaped — it was too abstract. The mindset beat should show *the moment fluency starts*: a person hitting a real problem in their work and reaching for AI, not handed a use case. Could be at a desk, a notebook page, a screen with a sticky note that says "I wonder how I can solve this." Use whatever metaphor makes the moment recognizable.

Across all three fluency artifacts: keep them feeling pixel/alive/specific. Don't smooth them toward the literacy side.

## An idea worth exploring — contrast lines running through the section

Optional, but worth considering: a vertical line on each side of the comparison that *embodies* the contrast. A **rigid straight red line** down the literacy column and a **fluid green squiggly line** down the fluency column. Same colors as the existing brand palette — marker red, fluency green. The line itself is the metaphor: rigid vs. fluid, predefined vs. adaptive.

The reader scrolls and the contrast is reinforced passively at every row, without saying a word.

**Three placements to consider:**

- **Outside edges** — line on the left edge of literacy, line on the right edge of fluency. Each side gets its own "spine."
- **Inside divider** — both lines running parallel where the two columns meet. The contrast happens at the seam. Most punchy because the gap is *literally* visible.
- **Single line that morphs** — one line down the center that starts straight at the top and gets progressively squiggly toward the bottom. Shows the transition. More clever; risks over-egging.

Use whichever placement (or none) makes the comparison stronger. If the section is already busy with column headers, row titles, captions, and paired visuals, this can be skipped. If it would make the parallel land harder, take it. Subtle is better than loud — the squiggle should feel hand-drawn (light marker stroke, slight imperfection), not a CSS sine wave.

## The thing that matters most

The reader's eye should sweep down each row and *feel* the gap. Same row, two cells, opposite vibes. The headlines are the words that translate the feeling into language. The visuals are what makes the feeling possible.

If a layout choice or artifact rethink helps the parallel hit harder, take it. The brief is the headlines and the through-lines. Everything else is yours to shape.

### Literacy column (paper-world, all desaturated/dated)

1. **Mindset:** *"AI @ Work — Module 2: 5 Ways to Use AI"* — a Times-serif-titled corporate training handout with 5 bullet points (Summarize long documents / Draft routine emails / Brainstorm ideas faster / Answer FAQs / Edit copy & grammar). Footer: *"Q3 rollout · 480 trained · v2.1"*. A tilted "Certified" stamp in the corner. Reads as: a thing distributed at a vendor lunch-and-learn.

2. **Interaction:** A small Win2K-style "Ask AI v1.0.4" panel with one prompt (*"Write me a status update."*) and a generic boilerplate response (*"Here is a status update for your project: this week the team made progress on key deliverables…"*) followed by a "Type a message" field and a Send button. Reads as: one-shot, transactional.

3. **Outcome:** A printed corporate memo titled *"Q3 Productivity Update — Memo · 14 Oct · CFO office"* with line items showing time-saved metrics (*Avg task time −30%, Email drafting −42%, Meeting recap −55%, Roles eliminated: 0, New work delivered: —*) and a red angled *"−30% TIME SPENT"* stamp. The "Roles eliminated: 0" and "New work delivered: —" lines are deliberate — they're the silent confession.

### Fluency column (pixel-world, all alive)

1. **Mindset:** A pixel-art cohort character (sage green palette, antennae, eyes — same vocabulary as the SUIT alien) with arms reaching up into a thought bubble above. Inside the bubble: handwritten Caveat fragments in marker red (`??`, struck-through `renewals dashboard?`, struck-through `just list everyone`) plus a pixel-styled `▶ TOOL` tag in the corner showing what's emerging. Caption beneath: *"// not a vending machine. a thinking partner."* Reads as: actively shaping thoughts into something specific.

2. **Interaction:** A three-zone pixel artifact — top is handwritten mess (Caveat in marker red, two crossed-out attempts, one kept question in bold ink: *"which accounts will churn this Q?"*); middle is a pixel `▼ RESHAPE` arrow on dark background with green stepped shadow; bottom is a pixel-styled `counter.app/renewals` mini-tool showing *Renewals at risk* with three rows (Acme Co. ±$94k, Northwind ±$22k, Globex on track) and a footer *"▶ BUILT BY MAYA · v0.4"*. Reads as: mess in, shaped out, something built.

3. **Outcome:** A team capability log titled *"▶ SHIPPED · WK 3 → 6"* with *"+4 new"* in the header, followed by 4 rows showing pixel dot icons + names + week tags: *Renewal copilot (wk 3) / House-style PR review (wk 4) / Onboarding bot (wk 5) / Weekly team digest (wk 6)*. Footer: *"// none of these existed before"*. Reads as: capability that wasn't possible before now exists.

## The structural problem to solve

The current v8 layout has the right pieces but the visual hierarchy is flat. v9 needs to make the comparison structure *feel* like a deliberately designed table — not a list of paired thumbnails. Specifically:

1. **Column headers should anchor the page.** "AI Literacy" / "AI Fluency" should feel like they own their columns from the moment the section enters view. Maybe they sit at the top of the comparison area as sticky labels, or as a clear "header row" with strong differentiation between them (literacy = paper feel, fluency = pixel feel — applied to the headers themselves, not just the artifacts).

2. **Row category titles need to feel like *axes of comparison*, not just labels.** *"The Mindset"* should read as a question being answered by the two cells beneath it. The italic serif treatment is good but might benefit from: (a) a small italic descriptor below each title (e.g., *"The Mindset — what AI is to you"*), or (b) a stronger visual divider (full ink line, slight margin), or (c) anchoring on the left with a row number (*01 · The Mindset*).

3. **Vertical spacing between rows should be deliberate.** The reader should land on each row as its own beat — not scroll continuously past them. Generous space between rows (60-80px), tight space within a row.

4. **Make the bottom punchlines a closing footer row.** *"// already have this. it isn't enough."* and *"▶ THE COUNTER BUILDS THIS"* should sit in their own footer-row of the table — same column structure, treated like a final summary line. Maybe bordered top with a 2px ink line.

5. **Keep the artifacts visually distinct but consistently sized within each row.** Right now the literacy memo, handout, and one-shot are slightly different sizes. They should all live in the same width "cell" so the table feels rigorous.

## What to add or refine in copy

These are the moments where text earns its keep. Everything else should be visual.

- **Section eyebrow:** `01 · The Gap` (existing, keep)
- **Headline 1:** `Literacy teaches what AI does. Fluency builds how to work with it.` (existing, keep — italic serif, fluency in green)
- **Headline 2 (NEW, prominent):** `AI literacy is what you're doing. AI fluency is what no one is teaching.` (this is the thesis line — it should feel weighty)
- **Subhead:** `Here's the difference between the two.` (existing, keep)
- **Column headers:** `AI Literacy.` (dim) / `AI Fluency.` (full color, italic em on Fluency)
- **Row titles:** `The Mindset` / `The Interaction` / `The Outcome` (serif italic, full-width with line beneath)
- **Optional row sub-labels:** A tiny italic descriptor under each title that names the question being answered. E.g.:
  - *The Mindset* · *what AI is to you*
  - *The Interaction* · *how AI shows up in your work*
  - *The Outcome* · *what changes for the team*
- **Footer punchlines (per column):** `// already have this. it isn't enough.` / `▶ THE COUNTER BUILDS THIS`

## Brand & visual constraints

- **Paper world for literacy** — saturation dropped, slight tilts, drop shadows that look physical, Times New Roman / Tahoma / corporate serif palette, Win2K blue accents.
- **Pixel world for fluency** — Press Start 2P labels, stepped pixel shadows in fluency green, square corners, paper-card backgrounds with ink borders, Caveat for handwritten mess.
- **The contrast is the message.** Don't smooth them out toward each other. Keep them feeling like genuinely different worlds.
- **No screens that look like generic SaaS UI.** The literacy interaction (Win2K Ask AI) is the one exception — it's recognizable enough as a *dated* interaction pattern that it earns its place.

## Reference

- Current implementation: `index.html` (the live v8 — search `class="gap-section"`)
- Pixel kit grammar: `02. design assets/Pixel Accent Kit.html`
- All previous brief iterations: `design-brief-gap-restructure.md`, `design-brief-gap-v5.md`

## Deliverable

A v9 of `Gap Section.html`, paste-ready, where:
- The new *"AI literacy is what you're doing. AI fluency is what no one is teaching."* line is the thesis anchor
- Each artifact has a small italic-serif caption that translates picture → meaning
- The comparison reads as a deliberate, designed table — column headers, row category titles, vertical scrolling that feels like flipping through a comparison
- The fluency through-line lands as a narrative: encounter a problem → reach for AI → shape it together → ship something new
- The contrast between paper-world (literacy) and pixel-world (fluency) is preserved at every level — header, row title, artifact, footer
- Visual choices and artifact metaphors are yours to shape. Take what's there as inspiration, swap or refine anything that helps the parallel hit harder
