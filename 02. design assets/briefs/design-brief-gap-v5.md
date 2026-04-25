# The Counter — Design Brief: Gap Section v5

## What's working in v4

- The continuous bullet checklist on each side
- The L-shape layout (bullets left, screens right, last screen wrapping below)
- The visual contrast between Win2K (literacy) and pixel arcade (fluency)
- One-screen target almost achieved
- Eyebrows + titles + bullets are doing their narrative job

## What still isn't landing

The screens. **They look different but they don't show what's actually different about the relationship to AI.**

Showing "Write me a status update → here's a status update" on the literacy side and a multi-turn chat on the fluency side doesn't carry the contrast we need. They're both screens. They both still require reading. And they don't visualize the *shift in capability* — only the surface artifact.

The reader walks away with: "OK, fluency is just literacy with more steps." That's not the message.

## The actual contrast we need to visualize

This is the line a buyer needs to feel without reading the bullets:

> Literacy = handed a structured tool. Predefined prompts, predefined outputs.
>
> Fluency = coming to AI with the mess you actually have, and AI helps you get to where you're going.

Three-word version: **predefined vs. shaped.**

A buyer's gut should read it as: *"oh — on the left, I'm receiving something AI hands me. On the right, I'm doing something with AI that I couldn't do alone."*

## What v5 needs to do

1. **Cut from 3 screens per side to ONE iconic visual per side.** Three screens are eating real estate and not buying meaning per square inch.

2. **Keep the "recognizability" tax paid.** This is non-negotiable. A leader has to see the literacy artifact and instantly think *"yeah, that's what we do today."* Don't drift into pure abstraction (no vending machine metaphors, no clean-room illustration). It has to look like a real moment of someone doing AI work today.

3. **Make the fluency side visualize the SHIFT, not just a different screen.** It can't just be another chat window. It has to communicate the act of *bringing the mess and shaping it*. The reader should look at it and see motion / iteration / transformation, not a static UI.

4. **Both sides should be the same physical size on the page.** Roughly square or slightly portrait. ~280–340px per side max. They need to fit beside the bullet column.

5. **Section must fit on one viewport** at desktop. The bullets + headers + this single visual per side, all stacked correctly, should fit in roughly 80–90% of viewport height.

## Specific direction for each side

### LITERACY artifact — instantly recognizable

Pick ONE of these (or invent something equally recognizable):

- **Workshop slide handout.** A real-feeling printed page titled something like *"AI@Work: Module 2 — 5 Use Cases"* with bulleted use cases (Summarize, Draft email, Brainstorm, Answer FAQs, Edit copy). Looks like the trifold from a vendor lunch-and-learn. Static. Slightly tilted, slightly faded, slightly Win2K-styled. Stamped or footnoted with something corporate-feeling like *"Module 2 of 6 · Q3 rollout"*.

- **A "templates" panel.** Like the recognizable left sidebar of an enterprise AI tool — a list of pre-built prompts the user picks from. *"Status update", "Meeting summary", "Draft response"*. Visually closed. The user picks one of the buttons. That's the whole interaction. Reads as: "this is the menu. Pick something. AI does it."

- **A single one-shot interaction frozen in amber.** A prompt box with a single typed-in prompt at the top, AI's reply below it, and nothing else. No follow-up. No reshape. Done. Reads as: "this is the entire transaction." Could be styled as a screenshot stuck to a corkboard with masking tape — emphasizes that this is *the artifact people produce today.*

The signal across all three options: **closed, predefined, transactional.** A leader sees it and goes "yes, that's the workshop deck / the tool I rolled out / what my team actually does."

### FLUENCY artifact — visualizes the shift

This is the harder side. The visual needs to communicate the act of *shaping*. Pick ONE:

- **A sketchpad / canvas mid-iteration.** A page (or pixel-art canvas) showing a problem the person started with — a messy scribble, a fragmented question, a thought cloud — with arrows / crossed-out attempts / refinements visible. The bottom-right corner shows a "finished" thing emerging from the mess. The journey from chaos → something built is visible in one frame. Could read as a hand-drawn whiteboard, a designer's sketchpad, or a pixel-art workbench. The IMPORTANT thing: **the input mess is visible** alongside the refined output. Both are in the same frame.

- **A "build log" mini-diagram.** Pixel art showing: someone's raw question on the left, two or three iteration arrows in the middle showing reshape/refine, a custom-built tool emerging on the right. Like a four-step transformation strip. Reads as: "I started here, I worked with AI through these turns, I ended up with this thing I built." Reframes AI as a tool the person *uses to make tools.*

- **Same person, different relationship.** A side-by-side or two-frame illustration: in the first frame, a pixel-art person *receives* something from AI (looks passive). In the second frame, the same person is *shaping* something with AI (active, hands-on, iterative). The transition between frames carries the message. Could be very small — even something pamphlet-sized. The reader reads the body language.

The signal: **active, shaped, transformative.** The reader sees motion or transformation in the frame itself — not just a different UI.

## What both sides must share

- Same physical scale (don't make fluency dominant just because it's the "good" side)
- Same emotional intensity (literacy can be quiet/dated/static; fluency can be alive/pixelated/in-motion — but neither should feel small or thrown away)
- Both anchored to the existing brand language: paper-world for literacy, pixel-world for fluency
- Both must work without requiring the reader to read text inside them. If there's text inside the artifact, it should be glanceable, not parseable.

## Layout

- Bullets stay continuous (left of each column)
- ONE visual per side, sitting to the right of the bullets
- Visual height roughly matches bullet column height — no more L-shape wrap-below needed (we've cut from 3 → 1)
- Section header (eyebrow + headline) compact, two lines max
- Total section: should fit ~80% of a 1080-tall viewport at desktop

## Reference

- Current implementation: `02. design assets/Gap Section.html` (v4 — the one with 3 screens per side)
- Pixel kit elements you can reuse: `02. design assets/Pixel Accent Kit.html`
- Brand palette + paper/pixel grammar: site `index.html`, hero through journey

## Deliverable

A v5 of `Gap Section.html`, paste-ready, where:
- Each column has ONE iconic visual artifact, immediately recognizable
- The literacy artifact reads as "this is what we do today" — corporate, dated, static
- The fluency artifact visualizes the *act of shaping* — mess → built thing in one frame
- Total section fits one viewport
- Bullets continue to do the narrative work; visuals carry the *feel*
