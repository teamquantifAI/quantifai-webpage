---
name: QuantifAI
colors:
  surface: '#fff8f2'
  surface-dim: '#e3d9c8'
  surface-bright: '#fff8f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fef2e1'
  surface-container: '#f8ecdc'
  surface-container-high: '#f2e7d6'
  surface-container-highest: '#ece1d1'
  on-surface: '#201b11'
  on-surface-variant: '#4e4637'
  inverse-surface: '#363025'
  inverse-on-surface: '#fbefde'
  outline: '#807665'
  outline-variant: '#d4c5ab'
  surface-tint: '#795900'
  primary: '#5c4300'
  on-primary: '#ffffff'
  primary-container: '#ffbf00'
  on-primary-container: '#6d5000'
  inverse-primary: '#ecc165'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#d7dff9'
  on-secondary-container: '#5a6278'
  tertiary: '#42474a'
  on-tertiary: '#ffffff'
  tertiary-container: '#5a5f62'
  on-tertiary-container: '#d5d9dc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdfa0'
  primary-fixed-dim: '#ecc165'
  on-primary-fixed: '#261a00'
  on-primary-fixed-variant: '#5c4300'
  secondary-fixed: '#dae2fc'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3e465b'
  tertiary-fixed: '#dfe3e6'
  tertiary-fixed-dim: '#c3c7ca'
  on-tertiary-fixed: '#171c1f'
  on-tertiary-fixed-variant: '#42474a'
  background: '#fdfbf7'
  on-background: '#201b11'
  surface-variant: '#ece1d1'
  error-soft: '#ffdad6'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 56px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  title-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  xs: 4px
  base: 8px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 16px
---

## Brand & Style
QuantifAI embodies a "Scientific Modern" aesthetic—blending the high-trust reliability of fintech with the technical transparency of developer tools. The brand personality is authoritative yet approachable, emphasizing "rigorous transparency" over "black-box magic."

The visual style is a hybrid of **Modern Corporate** and **Glassmorphism**. It utilizes a warm, sophisticated palette (Ambers and Slates) to distance itself from the cold blues typical of AI, creating a "Human-in-the-loop" emotional response. The UI features crisp typography, subtle depth through translucent layers, and high-energy "amber-glow" accents to highlight successful outcomes and primary actions.

## Colors
The color system is built on a foundation of warm neutrals and "Intellectual Amber." 

- **Primary Amber (#795900 / #ffbf00):** Used for critical paths, trust indicators, and brand presence. The container variant (#ffbf00) serves as the high-visibility call-to-action color.
- **Warm Neutrals:** Backgrounds use a cream-tinted white (#fdfbf7) rather than pure white to reduce eye strain and feel more "editorial."
- **Functional Slates:** Secondary and tertiary tones are desaturated blues and greys, used for labels and metadata to ensure they don't compete with data visualizations.
- **Success/Error:** Errors use soft reds (#ffdad6), while success is often represented by the primary amber or standard green checkmarks.

## Typography
The system uses a three-font hierarchy to distinguish between intent:
1.  **Hanken Grotesk (Headlines):** High-impact, contemporary geometric sans used for brand and section headings.
2.  **Inter (Body):** A highly legible neutral sans for all descriptive text and interface elements.
3.  **JetBrains Mono (Technical):** Used for labels, tags, and data points to emphasize the technical, "under-the-hood" nature of the product.

Hierarchy is further established through tight line-heights on display text and generous line-heights on body copy to facilitate long-form reading.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for marketing and dashboard content, maxing out at `1536px` (2xl). 

- **Grid:** 12-column structure on desktop with 24px gutters.
- **Rhythm:** An 8px base unit drives all spacing. 
- **Margins:** Desktop views use 64px horizontal margins, scaling down to 16px on mobile.
- **Reflow:** Sections transition from multi-column grids (e.g., 12-span or 7/5 split) to single-stack layouts at the `1024px` (lg) breakpoint. 
- **Vertical Spacing:** Significant 64px (xl) padding between sections creates clear topical breathing room.

## Elevation & Depth
The system uses **Glassmorphism** and **Tonal Layering** to create hierarchy:

- **Surface Layers:** The base background is the warmest (#fdfbf7). Cards and containers use pure white (#ffffff) or slightly darker containers (#f8ecdb) to sit "above" the base.
- **Glass Effects:** Floating elements (like headers or feature highlight cards) use `backdrop-blur: 12px` with 80% white opacity and a very thin 10% primary-tinted border.
- **Shadows:** Shadows are sparse and intentional. The "Amber Glow" (`0 4px 14px 0 rgba(255, 191, 0, 0.39)`) is used exclusively for primary action buttons and "Verified" status cards. Standard elevation uses a very soft, diffused `0 4px 20px rgba(0, 0, 0, 0.05)`.
- **Outlines:** Low-contrast borders (`outline-variant`) at 30-50% opacity define most structural boundaries without adding visual weight.

## Shapes
The shape language is "Professional Soft."
- **Standard Corners:** Most cards and inputs use a 0.5rem (8px) radius.
- **High-Impact:** Buttons and specific status chips use a "Full" pill-shaped radius (9999px) to provide a friendly, interactive contrast to the more rigid grid.
- **Icons:** Material Symbols (Outlined) are used throughout, set to a 400 weight for a clean, technical look that mirrors the typography.

## Components
- **Buttons:** 
  - *Primary:* Pill-shaped, Primary Container background, bold text, with the "Amber Glow" shadow.
  - *Secondary:* 8px rounded, outlined with `outline-variant`, using Inter Bold.
- **Cards:** White background, 8px radius, subtle 1px border. Feature cards often include a top-right "Tag" for categorization.
- **Chips/Badges:** Pill-shaped, small JetBrains Mono text (uppercase), using 10% opacity primary or secondary colors for the background.
- **Inputs:** 8px radius, soft cream background (#fef2e1), uppercase bold labels in JetBrains Mono.
- **Status Indicators:** Use a pulse animation for "Live" or "Beta" states.
- **Data Visualizations:** Vertical bars or progress indicators should use varying opacities of the Primary Amber to show weights and signal strength.