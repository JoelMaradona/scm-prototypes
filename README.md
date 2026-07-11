# SCP Prototypes

Interactive HTML prototypes for Supply Chain Platform demos. Built with Claude Code + Figma MCP.

## Structure

```
scm-prototypes/
├── CLAUDE.md              ← Claude Code project instructions (auto-loaded)
├── references/            ← Design system docs + project briefs
├── shared/                ← Reusable SCP shell (header, nav, tokens)
└── projects/
    ├── logistics-cockpit/ ← Danone/Evian dashboard demo
    └── [next-project]/    ← Future prototypes
```

## Running a prototype

Each project is a static site. Open its `index.html` in a browser — no server or build step needed.

## Building with Claude Code

1. Open terminal in this repo root
2. Run `claude`
3. Claude Code reads `CLAUDE.md` automatically — it knows the SCP design system
4. Tell it which project to work on and share Figma node URLs
5. It builds; you review

## Design references

- **MDS (Maersk Design System):** https://designsystem.maersk.com
- **SCP component docs:** NSCP Confluence space
- **Figma file:** `4HGBtAFrncloJX83zRWUnJ`
