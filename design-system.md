# Willfolio — Design System

> **Version 1.0 · March 2026 · williamtsikata.com**
> Visual language, tokens, and component guidelines for all Willfolio products.

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Color](#2-color)
3. [Typography](#3-typography)
4. [Spacing](#4-spacing)
5. [Border Radius](#5-border-radius)
6. [Components](#6-components)
7. [Iconography](#7-iconography)
8. [Motion](#8-motion)
9. [Full CSS Token Reference](#9-full-css-token-reference)
10. [Do's & Don'ts](#10-dos--donts)
11. [Accessibility](#11-accessibility)

---

## 1. Introduction

This document is the single source of truth for the visual language of Willfolio and all products built on its platform. It defines the colours, typography, spacing, radius, component patterns, and usage guidelines that ensure consistency across web, iOS, and Android surfaces.

The design system is extracted directly from [williamtsikata.com](https://williamtsikata.com) and extended into a full token-based system suitable for React Native, SwiftUI, Jetpack Compose, and CSS/web environments.

### 1.1 Design Principles

- **Warm & Human** — Dark backgrounds with cream and amber tones feel approachable, not sterile.
- **Editorial** — Serif display type paired with a geometric sans creates a publishing-house feel.
- **Restrained** — One accent colour, generous whitespace, and minimal decoration.
- **Accessible** — All text/background pairs meet WCAG AA contrast at minimum.

---

## 2. Color

All colours are defined as design tokens so they can be consumed by any platform. The palette is a warm dark theme anchored by a single amber-gold accent.

### 2.1 Core Palette

| Swatch | Token Name   | Hex Value | Usage                                   |
| ------ | ------------ | --------- | --------------------------------------- |
| 🟫     | `Background` | `#2A2725` | Page background, root surface           |
| ⬛     | `Surface`    | `#1E1C1A` | Card backgrounds, panels                |
| 🟤     | `Elevated`   | `#302D2A` | Inputs, hover states, tooltips          |
| ▪️     | `Border`     | `#3D3A37` | Dividers, table rules, subtle outlines  |
| 🟡     | `Amber Gold` | `#F4CF8F` | Primary CTA, highlights, key icon fills |
| 🔆     | `Cream`      | `#F1EBE2` | Primary text on dark surfaces           |
| 🔘     | `Stone`      | `#C9C4BC` | Secondary text, subtitles               |
| 🩶     | `Ash`        | `#8A857D` | Muted labels, metadata, captions        |

### 2.2 Semantic Tokens

Semantic tokens map raw palette colours to UI roles. **Always use semantic tokens in component code — never raw hex values.**

| Semantic Token           | Value                              |
| ------------------------ | ---------------------------------- |
| `--color-bg`             | `#2A2725` (Background)             |
| `--color-surface`        | `#1E1C1A` (Surface)                |
| `--color-elevated`       | `#302D2A` (Elevated)               |
| `--color-border`         | `#3D3A37` (Border)                 |
| `--color-border-subtle`  | `rgba(241, 235, 226, 0.10)`        |
| `--color-border-strong`  | `rgba(241, 235, 226, 0.18)`        |
| `--color-accent`         | `#F4CF8F` (Amber Gold)             |
| `--color-accent-fg`      | `#2A2725` (dark text on accent bg) |
| `--color-text-primary`   | `#F1EBE2` (Cream)                  |
| `--color-text-secondary` | `#C9C4BC` (Stone)                  |
| `--color-text-muted`     | `#8A857D` (Ash)                    |

### 2.3 Opacity Variants

Use opacity variants for overlays, ghost states, and tinted fills. Never alter the base hex — apply alpha instead.

| Variant        | Usage                                    |
| -------------- | ---------------------------------------- |
| `accent / 15%` | Tinted badge background (e.g. ASO tags)  |
| `accent / 30%` | Badge border on tinted badge             |
| `cream / 05%`  | Secondary button fill (ghost buttons)    |
| `cream / 10%`  | Default border (`--color-border-subtle`) |
| `cream / 18%`  | Stronger border on hover / focus         |

---

## 3. Typography

Two typefaces define the system. **Crimson Pro** (serif) carries editorial weight for headings and display. **DM Sans** (geometric sans) provides clean, neutral readability for body copy, UI labels, and data.

### 3.1 Typefaces

| Role               | Typeface                                      |
| ------------------ | --------------------------------------------- |
| Display / Headings | **Crimson Pro** — Google Fonts (open license) |
| Body / UI / Labels | **DM Sans** — Google Fonts (open license)     |
| Code / Monospaced  | JetBrains Mono (recommended) or Courier New   |

**Import (CSS):**

```css
@import url("https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=DM+Sans:wght@400;500;700&display=swap");
```

### 3.2 Type Scale

| Step     | Size              | Weight | Font        | Line Height | Usage                         |
| -------- | ----------------- | ------ | ----------- | ----------- | ----------------------------- |
| Display  | `96px / 6rem`     | 600    | Crimson Pro | 1.05        | Hero headlines                |
| H1       | `48px / 3rem`     | 600    | Crimson Pro | 1.10        | Page titles                   |
| H2       | `32px / 2rem`     | 600    | Crimson Pro | 1.20        | Section headings              |
| H3       | `24px / 1.5rem`   | 600    | Crimson Pro | 1.30        | Sub-sections                  |
| Body L   | `18px / 1.125rem` | 400    | DM Sans     | 1.70        | Lead paragraphs               |
| Body     | `16px / 1rem`     | 400    | DM Sans     | 1.65        | Standard body text            |
| Body S   | `14px / 0.875rem` | 400    | DM Sans     | 1.60        | Secondary copy                |
| Label    | `14px / 0.875rem` | 500    | DM Sans     | 1.40        | Buttons, nav items            |
| Caption  | `12px / 0.75rem`  | 400    | DM Sans     | 1.40        | Metadata, timestamps          |
| Overline | `10px / 0.625rem` | 700    | DM Sans     | 1.20        | Eyebrow text, category labels |

### 3.3 Letter Spacing

| Step     | Tracking             |
| -------- | -------------------- |
| Display  | `-0.025em` (tight)   |
| H1       | `-0.015em`           |
| H2 / H3  | `0em` (default)      |
| Body     | `0em` (default)      |
| Overline | `+0.12em` (expanded) |

---

## 4. Spacing

The spacing scale is built on a **4 px base unit**. All layout measurements must use values from this scale. Avoid arbitrary pixel values in component code.

### 4.1 Base Scale

| Token        | px     | rem       | Common Usage                              |
| ------------ | ------ | --------- | ----------------------------------------- |
| `--space-1`  | `4px`  | `0.25rem` | Micro gaps, icon padding                  |
| `--space-2`  | `8px`  | `0.5rem`  | Icon-to-label gap, tag inner padding      |
| `--space-3`  | `12px` | `0.75rem` | Compact component gap                     |
| `--space-4`  | `16px` | `1rem`    | Default component padding                 |
| `--space-6`  | `24px` | `1.5rem`  | Card internal spacing, section gap        |
| `--space-8`  | `32px` | `2rem`    | CTA button horizontal padding, column gap |
| `--space-12` | `48px` | `3rem`    | Section vertical spacing                  |
| `--space-16` | `64px` | `4rem`    | Large section breaks                      |
| `--space-24` | `96px` | `6rem`    | Page-level vertical rhythm                |

---

## 5. Border Radius

| Token           | Value    | Usage                                   |
| --------------- | -------- | --------------------------------------- |
| `--radius-xs`   | `4px`    | Small badges, code chips                |
| `--radius-sm`   | `6px`    | Tags, inner UI elements                 |
| `--radius-md`   | `10px`   | App icons, avatar circles, action menus |
| `--radius-lg`   | `16px`   | Cards, modals, sheets, large panels     |
| `--radius-xl`   | `24px`   | Large feature cards, hero containers    |
| `--radius-pill` | `9999px` | All buttons (primary, secondary, ghost) |

---

## 6. Components

Each component entry describes its anatomy, variants, states, and CSS token usage. All components must be implemented using the tokens defined in sections 2–5.

---

### 6.1 Buttons

All button shapes use `--radius-pill` (full pill). Three variants are defined.

| Variant       | Background                   | Text Color               | Font Weight | When to Use                    |
| ------------- | ---------------------------- | ------------------------ | ----------- | ------------------------------ |
| **Primary**   | `--color-accent` (`#F4CF8F`) | `--color-accent-fg`      | 700         | One per screen — main CTA only |
| **Secondary** | `cream / 5% alpha` + border  | `--color-text-secondary` | 500         | Parallel actions to primary    |
| **Ghost**     | `transparent`                | `--color-text-secondary` | 400         | Tertiary, destructive cancel   |

#### Anatomy

```
┌─────────────────────────────────┐
│   [Label text]  [→ optional]    │  ← pill shape (border-radius: 9999px)
└─────────────────────────────────┘
```

- **Padding (default):** `12px` top/bottom · `28px` left/right
- **Padding (small):** `8px` top/bottom · `18px` left/right
- **Font:** DM Sans · `15px` default / `13px` small
- **Icon gap (optional trailing arrow):** `8px`
- **Transition:** `all 150ms var(--ease-default)`

#### States

| State    | Visual Change                                |
| -------- | -------------------------------------------- |
| Default  | As defined above                             |
| Hover    | Lighten background slightly; cursor: pointer |
| Active   | `scale(0.98)` transform                      |
| Disabled | `opacity: 0.4`; cursor: not-allowed          |
| Focus    | `box-shadow: 0 0 0 2px var(--color-accent)`  |

---

### 6.2 Tags & Badges

All tags use `--radius-pill` (`9999px`).

| Variant     | Fill           | Border                  | Text Color               | Usage                          |
| ----------- | -------------- | ----------------------- | ------------------------ | ------------------------------ |
| **Accent**  | `accent / 15%` | `accent / 30%`          | `--color-accent`         | Featured labels, new features  |
| **Neutral** | `cream / 6%`   | `--color-border-subtle` | `--color-text-secondary` | Platform tags, categories      |
| **Muted**   | `transparent`  | `--color-border-subtle` | `--color-text-muted`     | Tertiary info, inactive states |

#### Anatomy

- **Padding:** `4px` top/bottom · `12px` left/right
- **Font:** DM Sans · `12px` · weight `500` · sentence case

---

### 6.3 Cards

Cards are the primary container for grouped content — app listings, feature blocks, pricing tiers, and more.

```
┌─────────────────────────────────────┐  ← border-radius: 16px (--radius-lg)
│                                     │  ← border: 0.5px solid cream/10%
│  [App Icon]  [Title]                │  ← background: --color-surface
│              [Subtitle]             │
│                                     │
│  [Content area]                     │
│                                     │
└─────────────────────────────────────┘
```

| Property             | Value                                               |
| -------------------- | --------------------------------------------------- |
| Background           | `--color-surface` (`#1E1C1A`)                       |
| Border               | `0.5px solid rgba(241, 235, 226, 0.10)`             |
| Border radius        | `--radius-lg` (`16px`)                              |
| Default padding      | `--space-4` (`16px`) all sides                      |
| Large card padding   | `--space-6` (`24px`) all sides                      |
| App icon inside card | `44×44px` · `--radius-md` (10px) · amber fill       |
| Elevation            | None — depth is created by layering surface colours |

---

### 6.4 Form Inputs

| Property      | Value                                           |
| ------------- | ----------------------------------------------- |
| Background    | `--color-elevated` / cream 6%                   |
| Border        | `0.5px solid --color-border-strong` (cream/18%) |
| Border radius | `--radius-md` (`12px`)                          |
| Padding       | `10px` top/bottom · `14px` left/right           |
| Font          | DM Sans · `14px` · `--color-text-secondary`     |
| Placeholder   | `--color-text-muted`                            |
| Focus ring    | `2px solid --color-accent`, offset `2px`        |
| Transition    | `border-color 150ms var(--ease-default)`        |

---

### 6.5 Navigation Bar

The top navigation uses circular app icon thumbnails with labels underneath.

| Property           | Value                                   |
| ------------------ | --------------------------------------- |
| Background         | Transparent (inherits page bg)          |
| Position           | Fixed · top right                       |
| Icon size          | `40×40px`                               |
| Icon border radius | `50%` (circle)                          |
| Icon border        | `1px solid --color-border-subtle`       |
| Label font         | DM Sans · `11px` · `--color-text-muted` |
| Label position     | Below icon · `4px` gap                  |
| Active state       | Border opacity increased                |

---

## 7. Iconography

Icons should be sourced from **Lucide** (open-source, MIT licensed) or custom SVGs consistent with the Lucide style. Do not mix icon libraries.

| Property              | Value                                             |
| --------------------- | ------------------------------------------------- |
| Preferred library     | [Lucide](https://lucide.dev)                      |
| Default size          | `16×16px` (inline) · `24×24px` (standalone)       |
| Colour (default)      | `--color-text-secondary`                          |
| Colour (active / CTA) | `--color-accent`                                  |
| Stroke width          | `1.5px` (Lucide default)                          |
| Decorative app icons  | `44×44px` · `border-radius: 10px` (`--radius-md`) |

---

## 8. Motion

Motion should feel **warm and deliberate** — never flashy. Favour easing over linear transitions.

### 8.1 Duration Tokens

| Token                | Value   | Usage                                |
| -------------------- | ------- | ------------------------------------ |
| `--duration-fast`    | `100ms` | Button hover, icon swap              |
| `--duration-default` | `150ms` | Tag, badge, card hover               |
| `--duration-enter`   | `250ms` | Modal open, page transitions         |
| `--duration-exit`    | `180ms` | Closing animations (slightly faster) |

### 8.2 Easing Tokens

| Token            | Value                               | Usage                           |
| ---------------- | ----------------------------------- | ------------------------------- |
| `--ease-default` | `cubic-bezier(0.4, 0, 0.2, 1)`      | All standard transitions        |
| `--ease-spring`  | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Confirmatory micro-interactions |

> Use `--ease-spring` for reward moments (e.g. prayer checked off, streak milestone). Use `--ease-default` for everything else.

### 8.3 Reduced Motion

Always respect the user's motion preference:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 9. Full CSS Token Reference

Copy the following into your global CSS or design tool token file. All tokens are declared on `:root` so they cascade to all child components.

```css
:root {
  /* ── Colors ───────────────────────────── */
  --color-bg: #2a2725;
  --color-surface: #1e1c1a;
  --color-elevated: #302d2a;
  --color-border: #3d3a37;
  --color-border-subtle: rgba(241, 235, 226, 0.1);
  --color-border-strong: rgba(241, 235, 226, 0.18);
  --color-accent: #f4cf8f;
  --color-accent-fg: #2a2725;
  --color-text-primary: #f1ebe2;
  --color-text-secondary: #c9c4bc;
  --color-text-muted: #8a857d;

  /* ── Typography ───────────────────────── */
  --font-display: "Crimson Pro", Georgia, serif;
  --font-body: "DM Sans", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", "Courier New", monospace;

  /* ── Spacing ──────────────────────────── */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;

  /* ── Border Radius ────────────────────── */
  --radius-xs: 4px;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-pill: 9999px;

  /* ── Motion ───────────────────────────── */
  --duration-fast: 100ms;
  --duration-default: 150ms;
  --duration-enter: 250ms;
  --duration-exit: 180ms;
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

## 10. Do's & Don'ts

### ✅ Do

- Use **Crimson Pro** for all headings and display text
- Keep **primary buttons to one per screen**
- Use `--color-accent` for single focal highlights only
- Maintain a **3-tier text hierarchy**: primary → secondary → muted
- Use `border-subtle` (cream/10%) for all card borders
- Source icons from **Lucide exclusively**
- Use `--ease-spring` for reward/confirmation moments only
- Reference **semantic tokens** in all component code
- Maintain **44×44px minimum** touch targets on mobile
- Always pair colour changes with **text or icon cues** (don't rely on colour alone)

### ❌ Don't

- Mix serif and sans within a single heading
- Use multiple primary (amber) buttons on the same view
- Apply amber gold to body text or large background fills
- Use only one text colour throughout a screen
- Use solid, high-contrast borders on dark cards
- Mix Lucide with Material Icons or FontAwesome
- Animate every interaction with spring easing
- Hardcode hex values directly in component styles
- Use `box-shadow` or `drop-shadow` for depth — layer background colours instead
- Ignore `prefers-reduced-motion`

---

## 11. Accessibility

All UI must meet **WCAG 2.1 AA** at minimum. The warm dark palette is naturally high-contrast — preserve this by always using the correct text-colour token per background.

### 11.1 Contrast Ratios

| Text Color           | Background           | Ratio   | Level                   |
| -------------------- | -------------------- | ------- | ----------------------- |
| Cream `#F1EBE2`      | Background `#2A2725` | ~12.5:1 | ✅ AAA                  |
| Stone `#C9C4BC`      | Background `#2A2725` | ~7.8:1  | ✅ AA                   |
| Amber Gold `#F4CF8F` | Background `#2A2725` | ~9.1:1  | ✅ AA                   |
| Dark `#2A2725`       | Amber Gold `#F4CF8F` | ~9.1:1  | ✅ AA                   |
| Ash `#8A857D`        | Background `#2A2725` | ~4.5:1  | ✅ AA (large text only) |

> **Note:** Ash on dark background only passes at 18px+ or bold 14px+. Do not use `--color-text-muted` for small body text.

### 11.2 Interaction Guidelines

- All interactive elements must have a **visible focus indicator** (2px accent ring)
- Touch targets must be at least **44×44px** on mobile
- Do not rely on colour alone to convey state — **pair with icon or text**
- Respect `prefers-reduced-motion` — disable spring animations when set
- All images and icons must have meaningful **`alt` text** or `aria-label`
- Use semantic HTML elements (`<button>`, `<nav>`, `<main>`, etc.) before reaching for ARIA

---

_Willfolio Design System · v1.0 · [williamtsikata.com](https://williamtsikata.com) · March 2026_
