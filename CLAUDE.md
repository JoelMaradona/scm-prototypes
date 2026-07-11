# Claude Custom Instructions — SCP Design Context

You are a design partner for Maersk Supply Chain Platform (SCP) work.
When building UI prototypes or reviewing designs, always follow these rules.

## Shared Foundation — use in EVERY project (do not re-invent)

Every project is a folder under `projects/<name>/`. Its `index.html` MUST link the shared
foundation in `shared/` — never re-implement the shell, tokens, or fonts per project:

```html
<link rel="stylesheet" href="../../shared/tokens.css" />   <!-- MDS + SCP tokens + real Maersk @font-face -->
<link rel="stylesheet" href="../../shared/shell.css" />     <!-- platform header, nav rail, page header, tabs, buttons -->
<link rel="stylesheet" href="project-specific.css" />        <!-- only widgets unique to this project -->
...
<script src="../../shared/shell.js"></script>               <!-- nav active + tab switching -->
```

`shared/` provides, and is the single source of truth for:
- **tokens.css** — all `--scp-*` / `--mds-*` colour, spacing, radius, type tokens + real `@font-face`
- **fonts/** — genuine Maersk Text (Light/Regular/Bold) + Maersk Headline (Light/Regular) woff2.
  NEVER fall back to Arial or ship the `local()` stub. (Sourced from designsystem.maersk.com —
  fetch over `curl --http1.1`; HTTP/2 is blocked.)
- **shell.css** — Platform Header, Navigation Rail, Page Header, Tab bar, `.btn` variants
- **shell.js** — nav active-state + tab switching
- **maersk-logo.svg** — the exact logo asset (cyan #42B0D5 rounded tile + white 7-point star).
  Inline it in the platform header, or `<img src="../../shared/maersk-logo.svg">`.

Reference implementation: `projects/logistics-cockpit/`.

### Corrected shell specs (authoritative — from Figma, override anything below)
- **Logo:** cyan #42B0D5 rounded-square tile + white 7-point Maersk star (NOT a bare star).
- **Nav active/hover:** the WHOLE item gets a `#545454` (Grey-700) rounded-4px background —
  NOT a pill behind just the icon.
- **Tabs:** active indicator is a cyan `#42B0D5` bar with rounded ends — NOT black.
- **Layout is fluid:** content fills viewport − 80px nav (cap 2560px). Never hard-cap narrow + left-align.

## SCP Page Shell (not generic MDS)

SCP uses a custom chrome that differs from standard MDS layout:

**Platform Header** — Fixed top bar, 60px height, bg #00243D (Blue-900-Darkest)
- Left: Maersk star logo (80×60px) + "SUPPLY CHAIN PLATFORM" label (Maersk Text Bold, 14px, white, uppercase)
- Right: Track button + User name button (both mc-button, appearance=inverse, variant=plain, fit=small)
- Confluence doc: https://maersk-tools.atlassian.net/wiki/spaces/NSCP/pages/182059602710/Platform+Header

**Navigation Rail** — Fixed left sidebar, 80px wide, bg #353535 (Grey-800)
- 11 items top-to-bottom: Home, Cases, Shipments, Export, Transport, Warehouse, Import, Tracking, Operational Finance, Documents, Insights, Settings
- Each item: 24px icon (white) + 12px label (Maersk Text Regular, white, centered)
- Active/hover state: the whole item gets a #545454 (Grey-700) rounded-4px background (see Shared Foundation)
- Confluence doc: https://maersk-tools.atlassian.net/wiki/spaces/NSCP/pages/181619426117/Navigation

**Page Header** — Below Platform Header, right of Nav rail, white bg, border-bottom 2px #DBDBDB
- Left: Page title (Maersk Headline Regular, 20px / x-small)
- Right: Action buttons row (Primary filled + Secondary/Tertiary outlined + More dropdown, all fit=small)
- Variants: with Step Indicator in center (for wizard flows), with tabs below
- Confluence doc: https://maersk-tools.atlassian.net/wiki/spaces/NSCP/pages/181620934048/Page+Header

**Content area** — Positioned at left:80px, top:60px+PageHeader height. Width: viewport - 80px.

## SCP-Specific Components (beyond MDS core)

These are NOT in designsystem.maersk.com — they're SCP platform patterns:

| Component | Description | Confluence |
|---|---|---|
| Table Builder | Table + toolbar (filters, actions, pagination, customise) | .../182060909381/Tables |
| Table Toolbar | Dynamic top bar for tables with filter/action/pagination slots | .../182060909490/Toolbar |
| Party Card | Shipper/consignee card with icon, party name, address fields | .../182177629448/Party+Card |
| Details Card | Multi-card grouped data display (equipment, packages, etc.) | .../182178054840/Details+Card |
| Info Card | Column-based static data display with label/value pairs, dashed dividers | .../182178054833/Info+Card |

All Confluence links prefix: https://maersk-tools.atlassian.net/wiki/spaces/NSCP/pages/

## 5 Page Recipe Patterns

1. **Empty shell** — Platform Header + Nav + Page Header + empty content area (white bg)
2. **Detail page** — Shell + Summary card + Details card + tab bar + order summary + Table Builder (bg #F7F7F7)
3. **Form/wizard** — Shell + Page Header WITH Step Indicator (3 steps) + form sections (inputs, cards, party cards, table) + Next/Cancel footer (bg #F7F7F7, content width 972px centered)
4. **Card launcher** — Shell + Page Header + rows of mc-card (borderless, vertical, small) grouped under subtitle sections (white bg)
5. **Table listing** — Shell + Page Header + full-width Table Builder directly below header (white bg)

## Key Specs

- All buttons in SCP use fit="small" unless explicitly stated otherwise
- Table headers: Maersk Text Bold 14px, with arrows-down-up sort icons
- Table body: Maersk Text Regular 14px
- Info Card columns: label in #6A6A6A (neutral weakest), value in #141414 (neutral default), dashed border-left #DBDBDB between columns
- Form sections: white card, 8px radius, 1px border #D4D4D4, 32px padding, section title with blue circle icon (#E2F3F9 bg) + title 16px + subtitle 12px #6A6A6A
- Party Card: white card, 8px radius, 1px border #DBDBDB, 28px padding, user icon + "Shipper" label, key-value rows (label 110px fixed width, #6A6A6A)

## Figma File

Key: 4HGBtAFrncloJX83zRWUnJ
Page recipe components: nodes 6702-55262, 6702-55274, 6702-55315, 6702-55375, 6702-55267

## MDS Foundation Rules (always apply)

- Use mc- web components, never custom alternatives
- Never hardcode colours — use --mds_ CSS tokens
- 4px spacing grid
- Maersk Headline for headings, Maersk Text for body/labels
- Sentence case only, never ALL CAPS (except "SUPPLY CHAIN PLATFORM" label)
- Light theme default
- fit="small" for SCP (dense, data-heavy)
- radius: 6px buttons/inputs, 8px cards/tables, 12px large cards, 16px modals
- Code Connect is set up — Angular snippets available via Figma MCP
