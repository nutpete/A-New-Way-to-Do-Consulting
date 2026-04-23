# A New Way to Do Consulting

Working repository for **The Counter** — an AI fluency studio. This project contains the founding documents, design assets, and web prototypes that express The Counter's perspective and brand.

## What's here

- `the-counter-test.html` — main site prototype (hero, POV, journey, objections, etc.)
- `the-counter-perspective-2.html` — editorial essay / perspective page, v2
- `01. founding documents/` — foundational writing: *Foundations*, *Training Manual*, *Agency Blueprint*, case-study critique, and agency model framework
- `02. design assets/` — brand and design assets
- `99. arrive game/` — companion experience
- `00. archive/` — prior drafts and superseded material
- `00. screenshots/` — reference captures
- `drew's sorting folder/` — Drew's working area
- `vercel.json` — Vercel deploy config (serves the repo root as a static site)

## Local preview

Open the HTML files directly in a browser, or serve the folder statically:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000/the-counter-test.html
```

## Deployment

The repo deploys on Vercel as a static site. `vercel.json` sets `outputDirectory` to `.`, so HTML files at the repo root are served as-is.

## About The Counter

The Counter is a response to a specific moment: the meaning of work is being rewritten, and most people are watching it happen to them instead of shaping what it becomes. We don't teach people to *use* AI — we build the fluency that lets their existing expertise meet new capability, and produce tools as evidence of that shift.

See `01. founding documents/The Counter — Foundations.md` for the full philosophy.

## Branches

- `main` — stable
- `fred-working` — active working branch
