# The Counter — Design Brief: Pixel Language Pass

## Context

The Counter's website currently has two distinct visual worlds: a **paper/sketch** aesthetic (cream backgrounds, grid textures, sticky notes, handwritten annotations, masking tape, torn paper edges) and a **pixel/arcade** aesthetic (space backdrop, pixel-art aliens, neon green trails, 8-bit characters). The paper world covers the top half of the site. The pixel world kicks in at the "How It Works" journey section. Right now, the transition between them is abrupt — you scroll from warm, hand-drawn paper directly into deep space with pixel aliens.

The goal of this pass is to **unify the design language** by seeding pixel elements throughout the paper sections so the transition into the journey feels earned, not jarring. The pixel aesthetic should gradually appear as a visual accent system — borders, shadows, icons, badges — that builds in density as you scroll deeper into the page.

There's also a deeper strategic reason: **pixel = fluency**. The site argues that AI literacy (what most companies invest in) is fundamentally different from AI fluency (what The Counter builds). The design language itself should make this argument visually. Literacy should *look* boring, flat, corporate. Fluency should *look* alive, energetic, pixelated. When a buyer scrolls through the literacy side and it feels gray and lifeless, then hits the fluency side and it has pixel energy — the design is doing the selling before they read a word.

---

## Site Structure (current)

The page now flows in this order:

1. **Hero** — headline, sticky notes, logo bar
2. **The Gap** (formerly POV) — "This gap exists because..." headline + AI Literacy vs AI Fluency comparison table
3. **Objection Handler** — SUIT alien: "Our company has AI tools!" / "That's not a problem."
4. **What The Counter Is** — "Your fast track to AI fluency" + receipt
5. **How It Works / Journey** — the treasure map with pixel aliens (space theme)
6. **What You Get** — four outcome cards
7. **Case Studies** — three tabbed case folders with prototype screen carousels
8. **Who We Are** — founder bios + POV book card
9. **CTA** — "Start a conversation"

---

## The Big Design Challenge: AI Literacy vs AI Fluency Section (#2)

This is the most important section to get right. It sits right after the hero and needs to make the buyer *feel* the gap before the rest of the site explains how The Counter closes it.

### Current State
Two side-by-side columns with bullet point lists. The literacy column is desaturated and dimmed. The fluency column has a green accent border. It's functional but it doesn't *visualize* the difference — it only *lists* it.

### What It Needs

**Literacy side** — should look and feel deliberately boring, corporate, static:
- Visual mockups of what AI literacy programs actually look like: a generic slide deck with bullet points, a plain prompt-and-response chat window, maybe a stock-looking "AI Workshop" badge or certificate
- Flat, desaturated color palette — grays, muted tones
- Smooth, corporate borders (rounded corners, subtle shadows)
- Standard sans-serif typography
- The overall impression should be: "this is what you already have"

**Fluency side** — should look alive, energetic, pixelated:
- Visual mockups of what fluency produces: an iterative conversation with AI where someone is building something (back-and-forth, not one prompt), a custom-built tool/prototype UI (browser chrome, sidebar, cards — like the case study screens already on the site)
- Pixel-style borders (stepped box-shadows, square corners, no border-radius)
- The green accent color (#73956F / #95D7AE / #52E08D from brand palette) used boldly
- Press Start 2P or pixel-influenced typography for labels/accents
- Small pixel art elements — maybe a tiny version of a cohort alien peeking in, or pixel sparkles
- The overall impression should be: "this is what's possible — and it looks *different*"

The two sides should sit next to each other so the visual contrast does the arguing. A buyer should be able to glance at this section without reading a word and understand that these are two fundamentally different things.

### Annotations
Keep the handwritten margin notes (Caveat font):
- Left/literacy: "teaches what AI can do"
- Right/fluency: "develops the instinct to *think and work with* AI"

---

## Pixel Accent System — Elements to Design

The following elements across the site should receive pixel-style treatment to seed the arcade aesthetic before the journey section. The idea is not to make the whole site look 8-bit — it's to replace smooth, rounded design details with crisp, stepped, pixel-influenced ones.

### What "pixelated" means in practice
- **Borders:** Instead of `border-radius` and smooth `box-shadow`, use stepped box-shadow stacking (e.g., `4px 0 0`, `0 4px 0`, `4px 4px 0` in the accent color to create a stepped pixel shadow)
- **Shapes:** Squares and rectangles instead of circles (no `border-radius: 50%`)
- **Typography accents:** Press Start 2P for small labels, badges, arrows — not for body copy
- **Color:** The green fluency colors (`#52E08D`, `#AFF1CB`) and the marker red (`#B76B6B`) are the pixel accent palette

### Specific elements

| Element | Location | Current | Pixel Treatment |
|---------|----------|---------|-----------------|
| Logo tick mark | Nav | Dark circle with "+" | Dark square with "+" |
| Nav CTA button | Nav (sticky) | Doesn't exist yet visually styled | Dark square button with stepped green shadow |
| "Book a time" button | Hero | Smooth shadow, rounded | Stepped pixel shadow, square corners, Press Start 2P arrow |
| Section label dashes | Before every section number | 1px thin line | 3px thick bar |
| Fluency column border | Gap section | Smooth green shadow | Stepped pixel shadow in green |
| "Counter Approved" stamp | Objection handler | Round wax seal with radial gradient | Flat square with stepped shadow, pixel-style |
| Receipt | What The Counter Is | Smooth drop shadow | Stepped pixel shadow, solid border |
| Founder profile pics | About section | Circles with serif initials | Squares with pixel font initials, green stepped shadow |
| Case study tabs | Bringing It to Life | Rounded top corners | Square corners, pixel accent on active tab |
| Outcome card borders | What You Get | (check current) | Consider pixel-stepped accent |

### What NOT to pixelate
- Body copy typography (keep Space Grotesk)
- Headlines (keep Instrument Serif)
- The paper background texture and grid
- Handwritten annotations (keep Caveat)
- The journey section pixel art (already done)
- The sticky notes and index card in the hero

---

## Design Transition Strategy

The pixel density should **increase as you scroll**:

1. **Hero:** Almost no pixel elements — just the logo tick square and the button shadow. This section still feels handcrafted/paper.
2. **The Gap:** Pixel elements appear on the fluency side of the comparison. The literacy side stays deliberately non-pixel. This is where the design language starts to split.
3. **Objection Handler:** The SUIT alien is already pixel art. The stamp is now pixel-styled. This section bridges the two worlds.
4. **What The Counter Is:** Receipt has pixel border. Starting to feel like both worlds coexist.
5. **Journey:** Full pixel/space mode. This should now feel like a natural arrival, not a jarring shift.
6. **What You Get → Cases → About:** Mix of paper and pixel. The book card is paper-world. The founder pics are pixel-accented. The case study tabs have pixel accents.

---

## Brand Colors for Reference

- `#1E1F38` — deep navy (dark backgrounds, ink replacement)
- `#4A405C` — muted purple (secondary dark)
- `#52E08D` — vibrant green (fluency/highlight, pixel accents)
- `#AFF1CB` — light mint (softer highlight)
- `#8E7A82` — dusty mauve (neutral/muted)
- `#B76B6B` — dusty rose (marker/accent, existing)

---

## Deliverables Needed

1. **AI Literacy vs AI Fluency visual mockups** — the imagery/illustrations for each side of the comparison. This is the highest priority. The literacy side should include 2-3 small visual vignettes of boring corporate AI (slide decks, generic prompts, workshop photos). The fluency side should include 2-3 visual vignettes of real building (iterative AI conversations, custom tool UIs, before/after transformations).

2. **Pixel accent kit** — a small system of pixel-styled borders, shadows, and decorative elements that can be applied as CSS across the site. Essentially: what does a "pixelated button," "pixelated card border," "pixelated badge," and "pixelated profile pic" look like in this brand?

3. **Transition guidance** — how the pixel density ramps up from hero to journey. Where exactly do pixel elements first appear? How much pixel energy is in each section?
