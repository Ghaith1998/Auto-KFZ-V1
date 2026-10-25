---
name: High-Performance Automotive Engineering System
colors:
  surface: '#0e1419'
  surface-dim: '#0e1419'
  surface-bright: '#343a3f'
  surface-container-lowest: '#090f13'
  surface-container-low: '#161c21'
  surface-container: '#1a2025'
  surface-container-high: '#252b30'
  surface-container-highest: '#2f353a'
  on-surface: '#dde3e9'
  on-surface-variant: '#e7bdb9'
  inverse-surface: '#dde3e9'
  inverse-on-surface: '#2b3136'
  outline: '#ad8884'
  outline-variant: '#5d3f3d'
  surface-tint: '#ffb3ad'
  primary: '#ffb3ad'
  on-primary: '#68000a'
  primary-container: '#e51e2b'
  on-primary-container: '#fffdff'
  inverse-primary: '#c0001b'
  secondary: '#c6c6ca'
  on-secondary: '#2f3034'
  secondary-container: '#4a4b4f'
  on-secondary-container: '#bbbbbf'
  tertiary: '#3de273'
  on-tertiary: '#003915'
  tertiary-container: '#00873c'
  on-tertiary-container: '#f8fff4'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad7'
  primary-fixed-dim: '#ffb3ad'
  on-primary-fixed: '#410004'
  on-primary-fixed-variant: '#930012'
  secondary-fixed: '#e2e2e6'
  secondary-fixed-dim: '#c6c6ca'
  on-secondary-fixed: '#1a1c1f'
  on-secondary-fixed-variant: '#45474a'
  tertiary-fixed: '#66ff8e'
  tertiary-fixed-dim: '#3de273'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005322'
  background: '#0e1419'
  on-background: '#dde3e9'
  surface-variant: '#2f353a'
typography:
  headline-xl:
    fontFamily: Chivo
    fontSize: 48px
    fontWeight: '900'
    lineHeight: 56px
  headline-xl-mobile:
    fontFamily: Chivo
    fontSize: 32px
    fontWeight: '900'
    lineHeight: 40px
  headline-lg:
    fontFamily: Chivo
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
  headline-lg-mobile:
    fontFamily: Chivo
    fontSize: 26px
    fontWeight: '800'
    lineHeight: 32px
  headline-md:
    fontFamily: Chivo
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-sm:
    fontFamily: Chivo
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 26px
  title-lg:
    fontFamily: Chivo
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  title-md:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Space Grotesk
    fontSize: 13px
    fontWeight: '700'
    lineHeight: 18px
  label-md:
    fontFamily: Space Grotesk
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes a high-performance, precision-engineered digital presence for an authentic Viennese automotive parts specialist. Drawing directly from modern automotive fascia and technical workshop displays, the visual identity pairs absolute utilitarian confidence with motorsport-inspired energy.

The aesthetic blends **Modern Industrial Precision** and **Dark-Mode Automotive Cockpit**. It reflects German/Austrian mechanical rigor: deep obsidian and carbon surfaces, high-legibility crisp white typography, razor-sharp technical indicators, and high-octane racing red accents. The emotional response is one of uncompromising trust, instant mechanical competence, and prompt logistical delivery ("Qualität, auf die Sie sich verlassen können").

## Colors

The palette is engineered around dark-mode mechanics, ensuring parts diagrams, spec sheets, and component photography achieve high visual punch without fatigue.

- **Primary (`#E51E2B`)**: Pure racing red used for primary calls-to-action, active component highlights, badges, warning indicators, and performance dividers.
- **Secondary (`#121417`)**: Deep asphalt/carbon tone acting as elevated surfaces, card plates, and header panels.
- **Tertiary (`#25D366`)**: Direct-line messaging green reserved exclusively for the instant Austrian WhatsApp mechanic helpline and verified status indicators.
- **Neutral (`#9AA0A6`)**: Cool technical metallic gray for subheaders, parameter dimensions, OEM part codes, and subtle structural borders.
- **Background Base**: Solid pitch black (`#090A0C`) with layered carbon tiers (`#181A1F` to `#22262C`).

## Typography

The pairing marries the aggressive, condensed authority of **Chivo** for titles and display metrics with the geometric mechanical precision of **Space Grotesk** for product codes, part names, and UI elements.

- **Display & Section Titles**: Set in Chivo uppercase where appropriate (e.g., `AUTOTEILE`, `BREMSSATTEL`), mirroring German industrial equipment tags.
- **Technical Specifications**: Space Grotesk provides structured clarity when displaying motor compatibility, kW ratings, and OEM reference numbers.
- **Letter Spacing**: Use an expanded tracking of `0.06em` on all small uppercase labels (`label-md`, `label-lg`) and badges to echo automotive instrument clusters.

## Layout & Spacing

A structured 12-column grid system anchors the design, referencing machine assembly diagrams and automotive dashboard telemetry.

- **Desktop (1024px+)**: 12-column fluid grid, 48px margins, 24px gutters. Product listings, parts filters, and workshop diagnostics span modular multiples (3, 4, 6, or 12 columns).
- **Tablet (768px - 1023px)**: 8-column layout with 24px margins and 16px gutters.
- **Mobile (< 768px)**: 4-column layout with 16px margins and 12px gutters. Catalog rows stack into clean, high-density vertical cards with quick action buttons for call and direct WhatsApp ordering.
- **Rhythm**: Component margins and section intervals strictly adhere to 8px geometric increments (`0.5rem`, `1rem`, `1.5rem`, `2.5rem`), ensuring clear separation between complex technical data points.

## Elevation & Depth

Visual hierarchy is maintained through metallic surface-layering and directional red light accents rather than muddy drop shadows.

- **Base Canvas**: Solid obsidian `#090A0C`.
- **Card and Tray Elevation**: Surface color `#121417` surrounded by a hairline technical border (`1px solid rgba(255, 255, 255, 0.08)`).
- **Interactive State Elevation**: Subtle red perimeter glow (`0 0 20px -5px rgba(229, 30, 43, 0.35)`) and micro-shifts along the Z-axis, evoking backlit LED dashboard switches.
- **Separator Lines**: Dynamic chamfered dividing lines (`linear-gradient(90deg, #E51E2B 0%, rgba(229, 30, 43, 0.2) 60%, transparent 100%)`) that reflect the graphic lines seen in the storefront livery.

## Shapes

The design uses a **Soft / Industrial Precision** geometry (`roundedness: 1`). Radii stay tight (`4px` to `8px`) to preserve a machined, forged-metal aesthetic reminiscent of vehicle chassis components and ECU casings. Completely pill-shaped elements are strictly banned except for live status pills and numerical count chips.

## Components

### Buttons
- **Primary Action (Direct Buy / Reserve)**: Solid Racing Red (`#E51E2B`) background, bold white Chivo text, `4px` corner radius, subtle bottom highlight. Hover triggers a subtle forward translation and bright red perimeter wash.
- **Direct Helpline (WhatsApp / Phone)**: Deep slate container `#16191E` with emerald accent `#25D366` for direct WhatsApp communication.
- **Secondary / Spec Sheets**: High-contrast outline button with `1px solid rgba(255, 255, 255, 0.2)` over a transparent base; hover fills to `#1F2329`.

### Trust Badges & Guarantee Seals
- **Pillars of Service**: Dedicated lockups for `GEPRÜFTE QUALITÄT` (shield icon), `FAIRE PREISE` (thumbs-up/scale), and `SCHNELLE LIEFERUNG` (rapid courier van). Outlined with high-density red glow borders, sharp typographic hierarchy, and verified stamp indicators.

### Component Cards
- **Product Tiles (e.g., Drosselklappe, Bremssattel, Anlasser)**: Dark matte backdrop (`#121417`), razor-thin border (`#262A33`), photo container with dramatic studio lighting on clean isolated car parts. Red angled slash accent at the top left or divider node. Clear display of OEM part code and availability status.

### Input Fields & Search (Vehicle Matcher)
- **HSN/TSN / License Plate Search**: Heavy, tactile input fields featuring `1px solid #333842`, charcoal fill `#0D0E11`, and focus state activating a sharp `#E51E2B` outline with an accompanying inner light ring.

### Checkboxes & Segmented Selectors
- Squared containers (`4px` radius) with mechanical red checkmarks and solid `#1F232A` background states. Segmented vehicle filter bars (Diesel, Benzin, Elektro, Hybrid) use crisp sliding indicator tabs with bold white text.