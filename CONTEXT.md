# calcite

## Context

A public git repository for a web-based calculator.

## Structure

```
├── package.json                        Node dependencies
├── vite.config.ts                      Vite configuration
├── index.html                          Web entry point
└── src/
    ├── main.ts                         TypeScript source
    └── style.css                       CSS stylesheet
```

## Rules

Read README.md for build information.

## Todo

- Show built-in Numbat functions/variables?
- Add ability to upload custom currency conversion rates
- Automated method of updating ECB currency file
- Add export to script file button
- Add links to specific Numbat documentation pages in help sections

## Design Context

### Users
Publicly shared — used by the creator daily and occasionally by colleagues, friends, or anyone who finds it. Some users may be unfamiliar with Numbat. Must feel approachable without being condescending to power users. Used on desktop (focused sessions) and mobile (quick lookups on the go) equally.

### Brand Personality
**Three words:** Precise. Handmade. Mineral.

Calcite is a crystalline mineral found in limestone. The brand feels like a quality scientific field instrument or well-made notebook — functional and serious, but warm and considered. Not a cold developer tool, not a playful consumer app.

### Aesthetic Direction
- Warm linen/limestone surfaces, amber/ochre accent — strengthen this, don't dilute it
- Crystal hexagon logo establishes the mineral identity — keep consistent
- Geologica (UI) + Geist Mono (output) — a considered pairing, preserve it
- Both light and dark themes equally important
- Both desktop and mobile equally important — no compromise on either
- **Anti-references**: no cold blue/purple developer aesthetics, no neon-on-dark, no generic SaaS

### Design Principles
1. **Crafted precision** — every spacing decision, border, and label feels deliberate
2. **Warm approachability** — new users orient quickly; the interface teaches without tutorials
3. **Typography as structure** — clear hierarchy between input, output, labels, and chrome
4. **Full-fidelity on all surfaces** — mobile gets the right layout for its context, not a shrunken desktop
5. **Mineral identity** — the calcite/stone metaphor runs consistently through colour, spacing, and detail
