# SCP Design System Reference — Claude Session Handover
**For: Joel's UX Design Team (LL Functional Platform)**
**Last updated from Figma: July 2026**
**Figma file: 4HGBtAFrncloJX83zRWUnJ**

---

## How to use this document

Paste this into the first message of any new Claude chat when working on SCP prototypes or UI design. It gives Claude the full SCP page shell structure, component patterns, and design tokens that are NOT in the generic MDS (Maersk Design System) skill.

If Claude has the MDS org skill loaded, this document supplements it with SCP-specific patterns. If not, this document + the MDS website (https://designsystem.maersk.com) are the two references Claude needs.

---

## 1. SCP Page Shell Architecture

SCP does NOT use the standard MDS Top Bar / Side Bar layout. It has a custom 3-part shell:

### Platform Header (fixed, top, full-width)
- **Height:** 60px
- **Background:** #00243D (Primary/Blue-900-Darkest)
- **Left zone:** Maersk star logo (80×60px container, logo 31×32px) → "SUPPLY CHAIN PLATFORM" text (Maersk Text Bold, 14px, white, uppercase, 28px left padding)
- **Right zone:** Track button + User name button (e.g. "John Doe"), both `mc-button appearance="inverse" variant="plain" fit="small"`, 28px right padding, 8px gap
- **Confluence:** https://maersk-tools.atlassian.net/wiki/spaces/NSCP/pages/182059602710/Platform+Header

### Navigation Rail (fixed, left, below Platform Header)
- **Width:** 80px
- **Background:** #353535 (Functional/Grey-800)
- **Height:** viewport minus 60px (full remaining height)
- **Top padding:** 16px
- **Item gap:** 12px
- **Items (top to bottom):**
  1. Home (layout-2x2 icon)
  2. Cases (clipboard-check)
  3. Shipments (container-stacked-alt)
  4. Export (container-up)
  5. Transport (route-network)
  6. Warehouse (warehouse)
  7. Import (container-down)
  8. Tracking (route)
  9. Operational Finance (dollar-circle) — 2-line label
  10. Documents (file)
  11. Insights (chart-bars-vertical)
  12. Settings (cog)
- **Each item:** 80px wide, 4px padding, icon 24px white in 28px pill container (rounded-full, transparent bg), label 12px Maersk Text Regular, white, centered, 2px gap between icon and label
- **Active state:** icon pill bg white at ~20% opacity
- **Confluence:** https://maersk-tools.atlassian.net/wiki/spaces/NSCP/pages/181619426117/Navigation

### Page Header (fixed, below Platform Header, right of Nav)
- **Position:** left 80px, top 60px, width calc(100% - 80px)
- **Padding:** 12px vertical, 0 horizontal
- **Border-bottom:** 2px solid #DBDBDB
- **Background:** white
- **Left zone:** Page title — Maersk Headline Regular, 20px (x-small token), #141414, 28px left padding
- **Right zone:** Action buttons — Primary (filled) + Secondary/Tertiary (outlined) + More (outlined with chevron-down), all `fit="small"`, 8px gap, 28px right padding
- **Variants:**
  - Default: title left, buttons right
  - With Step Indicator: title left (fixed 236px), step indicator centered (3-step horizontal, small fit), buttons right
  - With tabs: mc-tab-bar below the header row
- **Confluence:** https://maersk-tools.atlassian.net/wiki/spaces/NSCP/pages/181620934048/Page+Header

### Content Area
- **Position:** left 80px, top 60px + Page Header height (typically 56px)
- **Width:** viewport - 80px (1520px at 1600px viewport)
- **Background:** white (#FFFFFF) for shell/listing pages, #F7F7F7 (neutral weakest) for detail/form pages
- **Grid template:** max-width 2560px, min-width 1025px

---

## 2. SCP-Specific Components (NOT in generic MDS)

These components are documented in the NSCP Confluence space, not designsystem.maersk.com:

### Table Builder
- Full table component: toolbar + header row + body rows
- **Toolbar:** 60px height, left side = Filters button (plain), right side = Action buttons (plain) + Customise table + Pagination ("1-50 of 300" outlined) + prev/next icon buttons
- **Header cells:** bg #F7F7F7, Maersk Text Bold 14px #141414, arrows-down-up sort icon 20px, 12px horizontal padding, 6px vertical, dashed right border #D4D4D4
- **Body cells:** bg white, Maersk Text Regular 14px #141414, same padding, dashed right border #E2E2E2, solid bottom border #D4D4D4
- **Outer border:** 1px solid #D4D4D4
- Confluence: https://maersk-tools.atlassian.net/wiki/spaces/NSCP/pages/182060909381/Tables
- Toolbar doc: https://maersk-tools.atlassian.net/wiki/spaces/NSCP/pages/182060909490/Toolbar

### Party Card
- Displays shipper/consignee/notify party info
- **Container:** white bg, 1px border #DBDBDB, 8px radius, 28px padding
- **Header row:** 24px icon (user) + party type label (16px Maersk Text Regular, black) + overflow menu button (ellipsis-vertical, outlined small)
- **Data rows:** 20px gap between header and first row, 12px gap between rows
  - Label: 110px fixed width, 14px Maersk Text Regular, #6A6A6A
  - Value: flex-1, 14px Maersk Text Regular, #141414
  - Address values can be multi-line, secondary lines in #4C4C4C
- Confluence: https://maersk-tools.atlassian.net/wiki/spaces/NSCP/pages/182177629448/Party+Card

### Details Card
- Multi-section grouped data card (equipment, packages, weight, volume)
- Uses icon + label + value pattern in horizontal grid
- Confluence: https://maersk-tools.atlassian.net/wiki/spaces/NSCP/pages/182178054840/Details+Card

### Info Card
- Column-based static data display
- **Container:** white bg, 1px border #D4D4D4, 8px radius, 20px padding
- **Columns:** flex equal width, dashed left border #DBDBDB between columns, 24px horizontal padding per column
- **Each column:** Label (14px, #6A6A6A, 20px height, truncated) + Value (16px, #141414)
- Confluence: https://maersk-tools.atlassian.net/wiki/spaces/NSCP/pages/182178054833/Info+Card

### Form Section
- White card container for form groups
- **Container:** white bg, 1px border #D4D4D4, 8px radius, 32px padding, 32px gap between elements
- **Section header:** 32px blue circle icon (#E2F3F9 bg, 16px radius) + title (16px Maersk Text Regular, #141414) + subtitle (12px, #6A6A6A) + action buttons right
- **Input rows:** 3-column flex layout, 32px gap, mc-input fit="small"

---

## 3. Five Page Recipe Patterns

### Recipe 1: Empty Shell
- Platform Header + Navigation + Page Header (default variant) + empty white content area
- Figma node: 6702-55262

### Recipe 2: Detail / Dashboard Page
- Shell + content bg #F7F7F7
- Content: Summary card + Details card + mc-tab-bar + Order summary (icon grid: packages/quantity/weight/volume) + Table Builder
- Figma node: 6702-55274

### Recipe 3: Form / Wizard Page
- Shell + Page Header WITH Step Indicator (3 horizontal steps, small fit)
- Content: bg #F7F7F7, centered column 972px wide, 273px horizontal padding, 24px gap
- Sections: Form sections (inputs) + Info Card + Details Card + Party Cards (2-up flex) + Form section (table) + Next/Cancel footer buttons (medium fit)
- Figma node: 6702-55315

### Recipe 4: Card Launcher / Home
- Shell + Page Header (default) + white content bg
- Content: 28px padding, 64px gap between rows
- Each row: subtitle (16px, #6A6A6A) + flex-wrap card grid (28px gap)
- Cards: mc-card variant="borderless" orientation="vertical" fit="small"
- Figma node: 6702-55375

### Recipe 5: Table Listing
- Shell + Page Header (default) + white content bg
- Content: 12px gap below header, full-width Table Builder (1464px)
- Figma node: 6702-55267

---

## 4. Cockpit-Specific Colour System

For the Logistics Cockpit dashboard (Danone/Evian), these semantic colours apply ON TOP of MDS tokens:

| Colour | Text hex | Background hex | Meaning |
|---|---|---|---|
| Red | #A32D2D | #FCEBEB | Delayed / D&D risk / high congestion |
| Amber | #854F0B | #FAEEDA | Cut-off risk / medium congestion / at risk |
| Green | #3B6D11 | #EAF3DE | On time / completed / recommendation |
| Blue | #185FA5 | #E6F1FB | Links / operations tags |
| Purple | #534AB7 | #EEEDFE | Collaboration tags |
| Teal | #0F6E56 | #E1F5EE | Support / secondary collaboration |

---

## 5. MDS Foundation Rules (always apply)

1. Use `mc-` web components from @maersk-global/mds-components-core — never build custom alternatives
2. Never hardcode colours — always use `--mds_` CSS variable tokens
3. 4px spacing grid for ALL padding, margin, gap
4. Maersk Headline for headings, Maersk Text for body/labels/captions
5. Sentence case only — NEVER ALL CAPS (exception: "SUPPLY CHAIN PLATFORM" in Platform Header)
6. Light theme is default
7. SCP uses fit="small" throughout (dense, data-heavy logistics tool)
8. Corner radius: 6px (radius-md) for buttons/inputs, 8px (radius-lg) for cards/tables/notifications, 12px (radius-xl) for containing cards, 16px (radius-2xl) for modals/dialogs
9. Outer components must have larger radius than nested components
10. Use mc-icon only — never third-party icon libraries
11. Code Connect is set up in Figma (Angular snippets) — use Figma MCP get_design_context to pull exact component specs
12. All page header buttons use appearance="neutral" variant="outlined" fit="small" except the primary which uses appearance="primary" variant="filled"
13. Platform header buttons use appearance="inverse" variant="plain" fit="small"

---

## 6. Figma Access

- **File key:** 4HGBtAFrncloJX83zRWUnJ
- **Page recipe nodes:** 6702-55262, 6702-55274, 6702-55315, 6702-55375, 6702-55267
- **Landing page (Cockpit):** 6686-68396
- Use `Figma:get_design_context` with fileKey and nodeId to pull exact specs
- Code Connect returns Angular mc- component snippets — these are the source of truth for component API usage

---

## 7. Key Design Tokens Quick Reference

```
Shell:
  Platform Header bg:    #00243D
  Nav Rail bg:           #353535
  Page Header border:    #DBDBDB (2px solid bottom)

Backgrounds:
  Default content:       #FFFFFF (--mds_brand_appearance_neutral_default_background-color)
  Detail/form content:   #F7F7F7 (--mds_brand_appearance_neutral_weakest_background-color)
  Table header:          #F7F7F7
  Form section icon:     #E2F3F9 (--mds_brand_appearance_secondary_weak_background-color)

Text:
  Primary:               #141414 (--mds_brand_appearance_neutral_default_text-color)
  Secondary:             #4C4C4C (--mds_brand_appearance_neutral_weak_text-color)
  Tertiary/labels:       #6A6A6A (--mds_brand_appearance_neutral_weakest_text-color)

Borders:
  Default:               #D4D4D4 (--mds_brand_appearance_neutral_default_border-color)
  Weak:                  #E2E2E2 (--mds_brand_appearance_neutral_weak_border-color)
  Header divider:        #DBDBDB

Typography:
  Page title:            Maersk Headline Regular, 20px/24px
  Section title:         Maersk Text Regular, 16px/24px
  Body/table:            Maersk Text Regular, 14px/20px
  Caption/subtitle:      Maersk Text Regular, 12px/16px
  Table header:          Maersk Text Bold, 14px/20px
  Nav label:             Maersk Text Regular, 12px/16px, white
  Platform label:        Maersk Text Bold, 14px/20px, white, uppercase
```

---

*Generated from Figma file 4HGBtAFrncloJX83zRWUnJ via Claude + Figma MCP, July 2026.*
*Part of Joel's AI Design Practice documentation for the LL Functional Platform team.*
