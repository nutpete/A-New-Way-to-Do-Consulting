// TC pixel logo variations for The Counter.
// Every glyph is built on a strict pixel grid (5x7 or 6x8), using sage
// greens (#73956F / #7BAE7F / #95D7AE) against paper (#F6F0E1) and
// ink (#2A2E33). The "C cuts through the T" idea is expressed several
// ways: overlap with a darker shadow, C punched out of T, stacked, etc.

const SAGE = '#73956F';
const SAGE_DARK = '#5B7A58';
const SAGE_LIGHT = '#95D7AE';
const SAGE_MID = '#7BAE7F';
const PAPER = '#F6F0E1';
const INK = '#2A2E33';

// ─────────────────────────────────────────────────────────────
// Pixel grid primitive — renders a 2D array of cells.
// 0 = empty, 1 = primary, 2 = secondary (overlap/shadow), 3 = accent
// ─────────────────────────────────────────────────────────────
function PixelGrid({ grid, cell = 14, palette, gap = 0, style = {} }) {
  const rows = grid.length;
  const cols = grid[0].length;
  const w = cols * cell + (cols - 1) * gap;
  const h = rows * cell + (rows - 1) * gap;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h} style={{ shapeRendering: 'crispEdges', ...style }}>
      {grid.map((row, r) =>
        row.map((v, c) => {
          if (!v) return null;
          const color = palette[v] || palette[1];
          return (
            <rect key={`${r}-${c}`} x={c * (cell + gap)} y={r * (cell + gap)}
              width={cell} height={cell} fill={color} />
          );
        })
      )}
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// GLYPH DEFINITIONS
// ─────────────────────────────────────────────────────────────

// Classic pixel T (5 wide x 7 tall)
// ##### 
// ..#..
// ..#..
// ..#..
// ..#..
// ..#..
// ..#..
const T_5x7 = [
  [1,1,1,1,1],
  [0,0,1,0,0],
  [0,0,1,0,0],
  [0,0,1,0,0],
  [0,0,1,0,0],
  [0,0,1,0,0],
  [0,0,1,0,0],
];

// Classic pixel C (5 wide x 7 tall) — open on right
const C_5x7 = [
  [0,1,1,1,1],
  [1,1,0,0,0],
  [1,0,0,0,0],
  [1,0,0,0,0],
  [1,0,0,0,0],
  [1,1,0,0,0],
  [0,1,1,1,1],
];

// Chunkier T and C (7 wide x 9 tall) — more "arcade marquee"
const T_7x9 = [
  [1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1],
  [0,0,0,1,1,0,0],
  [0,0,0,1,1,0,0],
  [0,0,0,1,1,0,0],
  [0,0,0,1,1,0,0],
  [0,0,0,1,1,0,0],
  [0,0,0,1,1,0,0],
  [0,0,0,1,1,0,0],
];
const C_7x9 = [
  [0,1,1,1,1,1,0],
  [1,1,1,1,1,1,1],
  [1,1,0,0,0,0,0],
  [1,1,0,0,0,0,0],
  [1,1,0,0,0,0,0],
  [1,1,0,0,0,0,0],
  [1,1,0,0,0,0,0],
  [1,1,1,1,1,1,1],
  [0,1,1,1,1,1,0],
];

// ─────────────────────────────────────────────────────────────
// Utility: place a glyph into a larger canvas, merging with value rules
// Returns a new grid.
// ─────────────────────────────────────────────────────────────
function makeCanvas(w, h) {
  return Array.from({ length: h }, () => Array(w).fill(0));
}
function stamp(canvas, glyph, ox, oy, value, overlapValue) {
  for (let r = 0; r < glyph.length; r++) {
    for (let c = 0; c < glyph[0].length; c++) {
      if (!glyph[r][c]) continue;
      const y = oy + r, x = ox + c;
      if (y < 0 || y >= canvas.length || x < 0 || x >= canvas[0].length) continue;
      if (canvas[y][x] && overlapValue !== undefined) canvas[y][x] = overlapValue;
      else canvas[y][x] = value;
    }
  }
  return canvas;
}

// ─────────────────────────────────────────────────────────────
// VARIATION BUILDERS — each returns a grid
// ─────────────────────────────────────────────────────────────

// V1: C overlaps T. T in sage, C in darker sage, overlap = ink.
function buildOverlap5x7() {
  const canvas = makeCanvas(9, 7);
  stamp(canvas, T_5x7, 0, 0, 1);           // T on left
  stamp(canvas, C_5x7, 4, 0, 2, 3);        // C shifted right, overlap = 3
  return canvas;
}

// V2: Chunkier 7x9 with overlap
function buildOverlap7x9() {
  const canvas = makeCanvas(12, 9);
  stamp(canvas, T_7x9, 0, 0, 1);
  stamp(canvas, C_7x9, 5, 0, 2, 3);
  return canvas;
}

// V3: C punched through T (C reads as negative space / paper color)
function buildPunched() {
  const canvas = makeCanvas(12, 9);
  stamp(canvas, T_7x9, 0, 0, 1);
  // C "cuts" — anywhere C is on, we set to 0 (punch) — but we want C to READ
  // so: T is primary, where C was, we punch BUT draw C outline in accent.
  // Simpler: T is solid; C is drawn but wherever it's on top of T, we zero
  // those pixels (carve), and render C outline in paper-accent.
  const cGlyph = C_7x9;
  const ox = 5, oy = 0;
  // Carve out the C shape from T
  for (let r = 0; r < cGlyph.length; r++) {
    for (let c = 0; c < cGlyph[0].length; c++) {
      if (cGlyph[r][c]) {
        const y = oy + r, x = ox + c;
        if (canvas[y][x] === 1) canvas[y][x] = 0;
      }
    }
  }
  // Now stamp C only on empty cells, so C has its own body on the right
  for (let r = 0; r < cGlyph.length; r++) {
    for (let c = 0; c < cGlyph[0].length; c++) {
      if (cGlyph[r][c]) {
        const y = oy + r, x = ox + c;
        if (canvas[y][x] === 0) canvas[y][x] = 2;
      }
    }
  }
  return canvas;
}

// V4: Sharp overlap, using chunkier 7x9, more offset so C rides lower portion of T
function buildOffsetLow() {
  const canvas = makeCanvas(12, 9);
  stamp(canvas, T_7x9, 0, 0, 1);
  stamp(canvas, C_7x9, 5, 0, 2, 3);
  return canvas;
}

// V_HERO: C pierces the CENTER of the T's stem.
// Bigger, purpose-built grid so the C can actually wrap around the T stem
// at the T's vertical midpoint. T is 9w x 11h with a 2-wide stem centered
// in cols 4-5. C is 9w x 9h, placed so its middle (rows 1-4 of the canvas)
// sits on T's midpoint (canvas rows 3-7). C's top+bottom bars cross the
// stem (ink-overlap), and the stem passes through the C's hollow body.
const T_HERO = [ // 9 wide x 11 tall
  [1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1],
  [0,0,0,0,1,1,0,0,0],
  [0,0,0,0,1,1,0,0,0],
  [0,0,0,0,1,1,0,0,0],
  [0,0,0,0,1,1,0,0,0],
  [0,0,0,0,1,1,0,0,0],
  [0,0,0,0,1,1,0,0,0],
  [0,0,0,0,1,1,0,0,0],
  [0,0,0,0,1,1,0,0,0],
  [0,0,0,0,1,1,0,0,0],
];
// A compact, stubby C so its two arms cross the T's stem near the T's
// vertical midpoint (not at the crossbar, not at the bottom). 9 wide x 7
// tall — when dropped onto the T at oy=3, the C's top arm is at canvas
// row 3, bottom arm at row 9 — both well inside the stem region (rows
// 2-10), straddling the midpoint row 6.
const C_HERO = [ // 9 wide x 7 tall
  [0,1,1,1,1,1,1,1,0],
  [1,1,1,1,1,1,1,1,1],
  [1,1,0,0,0,0,0,0,0],
  [1,1,0,0,0,0,0,0,0],
  [1,1,0,0,0,0,0,0,0],
  [1,1,1,1,1,1,1,1,1],
  [0,1,1,1,1,1,1,1,0],
];
function buildPierced() {
  const canvas = makeCanvas(9, 11);
  stamp(canvas, T_HERO, 0, 0, 1);        // T ink
  // C vertically centered on T's stem midpoint. T is 11 tall, C is 7.
  // Stem occupies rows 2-10 (9 rows). Centering C on stem: oy = 2 + (9-7)/2 = 3.
  // C arms land at rows 3 and 9; stem cols 4-5 get overlap pixels there.
  stamp(canvas, C_HERO, 0, 3, 2, 3);
  return canvas;
}

// V5: Tight overlap — C eats into T's stem
function buildTight() {
  const canvas = makeCanvas(10, 9);
  stamp(canvas, T_7x9, 0, 0, 1);
  stamp(canvas, C_7x9, 3, 0, 2, 3);
  return canvas;
}

// V6: Monochrome ink, single color, no overlap shading
function buildMono() {
  const canvas = makeCanvas(12, 9);
  stamp(canvas, T_7x9, 0, 0, 1);
  stamp(canvas, C_7x9, 5, 0, 1); // everything ink — no overlap distinction
  return canvas;
}

// ─────────────────────────────────────────────────────────────
// Wordmark helpers — "THE COUNTER" in pixel below
// ─────────────────────────────────────────────────────────────
const PIXEL_FONT = {
  T: [[1,1,1],[0,1,0],[0,1,0],[0,1,0],[0,1,0]],
  H: [[1,0,1],[1,0,1],[1,1,1],[1,0,1],[1,0,1]],
  E: [[1,1,1],[1,0,0],[1,1,0],[1,0,0],[1,1,1]],
  C: [[1,1,1],[1,0,0],[1,0,0],[1,0,0],[1,1,1]],
  O: [[1,1,1],[1,0,1],[1,0,1],[1,0,1],[1,1,1]],
  U: [[1,0,1],[1,0,1],[1,0,1],[1,0,1],[1,1,1]],
  N: [[1,0,1],[1,1,1],[1,1,1],[1,1,1],[1,0,1]],
  R: [[1,1,0],[1,0,1],[1,1,0],[1,0,1],[1,0,1]],
  ' ': [[0],[0],[0],[0],[0]],
};

function Wordmark({ text, cell = 4, color = INK, gap = 0, spaceGap = 2 }) {
  // Build combined grid
  const rows = 5;
  let cols = 0;
  for (const ch of text) {
    if (ch === ' ') cols += spaceGap;
    else cols += PIXEL_FONT[ch][0].length + 1;
  }
  cols -= 1;
  const grid = Array.from({ length: rows }, () => Array(cols).fill(0));
  let x = 0;
  for (const ch of text) {
    if (ch === ' ') { x += spaceGap; continue; }
    const g = PIXEL_FONT[ch];
    for (let r = 0; r < g.length; r++)
      for (let c = 0; c < g[0].length; c++)
        if (g[r][c]) grid[r][x + c] = 1;
    x += g[0].length + 1;
  }
  return <PixelGrid grid={grid} cell={cell} gap={gap} palette={{ 1: color }} />;
}

// ─────────────────────────────────────────────────────────────
// LOGO COMPOSITIONS — each variation as a component
// ─────────────────────────────────────────────────────────────

// V1 — Sage overlap, with ink overlap pixel
function LogoV1({ cell = 14, showWordmark = true }) {
  const palette = { 1: SAGE, 2: SAGE_DARK, 3: INK };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
      <PixelGrid grid={buildOverlap5x7()} cell={cell} palette={palette} />
      {showWordmark && <Wordmark text="THE COUNTER" cell={Math.max(2, cell * 0.22)} color={INK} />}
    </div>
  );
}

// V2 — Chunky 7x9 overlap, light-sage overlap (soft, lifts on paper)
function LogoV2({ cell = 10, showWordmark = true }) {
  const palette = { 1: SAGE, 2: SAGE_DARK, 3: SAGE_LIGHT };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <PixelGrid grid={buildOverlap7x9()} cell={cell} palette={palette} />
      {showWordmark && <Wordmark text="THE COUNTER" cell={Math.max(2, cell * 0.3)} color={INK} />}
    </div>
  );
}

// V3 — Ink T, sage C, ink overlap (highest contrast)
function LogoV3({ cell = 10, showWordmark = true }) {
  const palette = { 1: INK, 2: SAGE_MID, 3: INK };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <PixelGrid grid={buildOverlap7x9()} cell={cell} palette={palette} />
      {showWordmark && <Wordmark text="THE COUNTER" cell={Math.max(2, cell * 0.3)} color={INK} />}
    </div>
  );
}

// V4 — Punched: C carves through T, C is sage
function LogoV4({ cell = 10, showWordmark = true }) {
  const palette = { 1: INK, 2: SAGE };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <PixelGrid grid={buildPunched()} cell={cell} palette={palette} />
      {showWordmark && <Wordmark text="THE COUNTER" cell={Math.max(2, cell * 0.3)} color={INK} />}
    </div>
  );
}

// V5 — Tight overlap sage-on-sage
function LogoV5({ cell = 10, showWordmark = true }) {
  const palette = { 1: SAGE_MID, 2: SAGE_DARK, 3: INK };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <PixelGrid grid={buildTight()} cell={cell} palette={palette} />
      {showWordmark && <Wordmark text="THE COUNTER" cell={Math.max(2, cell * 0.3)} color={INK} />}
    </div>
  );
}

// V6 — Monochrome sage (single color, no overlap distinction)
function LogoV6({ cell = 10, showWordmark = true }) {
  const palette = { 1: SAGE };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <PixelGrid grid={buildMono()} cell={cell} palette={palette} />
      {showWordmark && <Wordmark text="THE COUNTER" cell={Math.max(2, cell * 0.3)} color={INK} />}
    </div>
  );
}

// V7 — Arcade chip: logo on ink panel with subtle scanlines
function LogoV7({ cell = 10 }) {
  const palette = { 1: SAGE_LIGHT, 2: SAGE, 3: PAPER };
  return (
    <div style={{
      background: INK, padding: '30px 32px 24px',
      position: 'relative', overflow: 'hidden',
      boxShadow: '4px 4px 0 ' + SAGE_DARK,
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'repeating-linear-gradient(to bottom, rgba(255,255,255,0.03) 0 1px, transparent 1px 3px)',
        pointerEvents: 'none',
      }}/>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, position: 'relative' }}>
        <PixelGrid grid={buildOverlap7x9()} cell={cell} palette={palette} />
        <Wordmark text="THE COUNTER" cell={Math.max(2, cell * 0.3)} color={SAGE_LIGHT} />
      </div>
    </div>
  );
}

// V8 — Stacked: T above, C shifted, arranged vertically for square lockup
function buildStacked() {
  const canvas = makeCanvas(9, 13);
  stamp(canvas, T_5x7, 0, 0, 1);
  stamp(canvas, C_5x7, 4, 6, 2, 3);
  return canvas;
}
function LogoV8({ cell = 14 }) {
  const palette = { 1: SAGE, 2: SAGE_DARK, 3: INK };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
      <PixelGrid grid={buildStacked()} cell={cell} palette={palette} />
      <Wordmark text="THE COUNTER" cell={Math.max(2, cell * 0.22)} color={INK} />
    </div>
  );
}

// V9 — Favicon-style: just the mark, square crop on sage background
function LogoV9({ cell = 12 }) {
  const palette = { 1: PAPER, 2: INK, 3: SAGE_DARK };
  return (
    <div style={{
      background: SAGE, padding: 24,
      width: 'fit-content',
    }}>
      <PixelGrid grid={buildOverlap7x9()} cell={cell} palette={palette} />
    </div>
  );
}

// V10 — Inline lockup: mark beside wordmark horizontally (for nav)
function LogoV10({ cell = 8 }) {
  const palette = { 1: SAGE, 2: SAGE_DARK, 3: INK };
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <PixelGrid grid={buildOverlap7x9()} cell={cell} palette={palette} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Wordmark text="THE COUNTER" cell={3} color={INK} />
        <div style={{
          fontFamily: '"JetBrains Mono", monospace', fontSize: 9,
          letterSpacing: '0.2em', color: '#8A8F94',
        }}>AI FLUENCY STUDIO</div>
      </div>
    </div>
  );
}

// V_HERO — ink T + sage C piercing the center, ink-at-overlap.
function LogoHero({ cell = 16, showWordmark = true, wordmarkColor = INK }) {
  const palette = { 1: INK, 2: SAGE, 3: INK };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
      <PixelGrid grid={buildPierced()} cell={cell} palette={palette} />
      {showWordmark && <Wordmark text="THE COUNTER" cell={Math.max(2, cell * 0.22)} color={wordmarkColor} />}
    </div>
  );
}

Object.assign(window, {
  LogoHero, buildPierced,
  LogoV1, LogoV2, LogoV3, LogoV4, LogoV5, LogoV6, LogoV7, LogoV8, LogoV9, LogoV10,
  PixelGrid, Wordmark, SAGE, SAGE_DARK, SAGE_LIGHT, SAGE_MID, PAPER, INK,
});
