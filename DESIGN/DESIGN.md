---
name: Neo-Kyoto Learning
colors:
  surface: '#0d1323'
  surface-dim: '#0d1323'
  surface-bright: '#33394a'
  surface-container-lowest: '#080e1d'
  surface-container-low: '#151b2c'
  surface-container: '#191f30'
  surface-container-high: '#24293b'
  surface-container-highest: '#2f3446'
  on-surface: '#dde2f9'
  on-surface-variant: '#c7c4d8'
  inverse-surface: '#dde2f9'
  inverse-on-surface: '#2a3041'
  outline: '#918fa1'
  outline-variant: '#464555'
  surface-tint: '#c3c0ff'
  primary: '#c3c0ff'
  on-primary: '#1d00a5'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#4d44e3'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#fbabff'
  on-tertiary: '#580065'
  tertiary-container: '#a500bd'
  on-tertiary-container: '#ffcafe'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#ffd6fd'
  tertiary-fixed-dim: '#fbabff'
  on-tertiary-fixed: '#36003e'
  on-tertiary-fixed-variant: '#7c008e'
  background: '#0d1323'
  on-background: '#dde2f9'
  surface-variant: '#2f3446'
  surface-elevated: '#172133'
  text-primary: '#F8FAFC'
  text-secondary: '#CBD5E1'
  glow-purple: '#A855F7'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
This design system captures a "Neo-Tokyo" aesthetic—a fusion of traditional Japanese discipline with a high-tech, futuristic interface. The brand personality is scholarly yet immersive, transforming the often-intimidating process of learning Kanji and Kana into a sleek, gamified experience.

The visual style is **Glassmorphism** meets **Cyberpunk Minimalism**. It utilizes deep, ink-like backgrounds to ground the user, while vibrant neon accents and translucent surfaces provide a sense of depth and modernism. The emotional response should be one of "focused energy"—minimizing distractions through dark surfaces while highlighting critical learning paths with luminous gradients and crisp typography.

## Colors
The palette is anchored by the deep indigo of a midnight sky (#0B1121), which serves as the primary canvas. The primary brand color is a digital Indigo (#4F46E5), used for critical actions and brand recognition.

Accents are strictly neon: **Cyan** for progress and "correct" states, **Magenta** for highlights and visual interest, and a **Vibrant Purple** for navigational elements and rewards. Gradients should transition from Primary Indigo to Magenta or Cyan to simulate a subtle glow. Surfaces are not flat; they utilize a secondary dark shade (#172133) to distinguish between background and interactive layers.

## Typography
The system relies on **Inter** for its exceptional legibility and neutral, high-tech character. Headlines are set with tight tracking and heavy weights to create a "poster-like" authoritative feel for Kanji characters and lesson titles.

For technical data—such as stroke counts, Romaji pronunciation, or UI metadata—**JetBrains Mono** is used to reinforce the futuristic, systematic nature of the platform. Mobile headings should aggressively downscale to ensure that complex Kanji remain the focal point without being crowded by UI text.

## Layout & Spacing
The layout follows a **Fluid Grid** model with high internal padding to simulate a clean, spacious environment. A 12-column system is used for desktop, collapsing to 4 columns for mobile. 

Spacing is based on an 8px rhythm. Larger sections (lessons, profile stats) should be separated by 64px+ to prevent visual noise. Interactive elements like flashcards or character grids should use a generous 24px gutter to ensure focus on individual glyphs.

## Elevation & Depth
Elevation is achieved through **Glassmorphism** and **Luminous Tones**. 
- **Tier 1 (Base):** Deep Indigo (#0B1121).
- **Tier 2 (Cards):** Elevated Indigo (#172133) with a 1px border at 10% opacity white to catch the "light."
- **Tier 3 (Floating UI):** Semi-transparent surfaces with a 20px backdrop blur. 

Instead of traditional black shadows, use a **Subtle Glow**: a very soft, low-opacity drop shadow tinted with the primary Indigo or Magenta, particularly for "Active" states or "Correct" answers.

## Shapes
Shapes are "Soft-Modern." The standard radius is 0.5rem (8px), providing a friendly balance to the cold, dark color palette. Larger containers like learning modules or profile headers should use the `rounded-xl` (1.5rem) setting to create a more approachable, "app-like" feel. Buttons for primary actions should be pill-shaped to stand out from the rectangular grid of Kanji tiles.

## Components

**Buttons**
Primary buttons feature a linear gradient (Primary Indigo to Vibrant Purple) with a white text label. Secondary buttons use a "Ghost" style with a 1px border and no fill, until hovered, where they gain a subtle backdrop blur.

**Learning Cards**
Flashcards must utilize the glassmorphism effect: a semi-transparent surface, backdrop blur, and a crisp white border at low opacity. The Kanji character should be centered, utilizing the `headline-xl` type style.

**Progress Indicators**
Gradients should represent progress—moving from Magenta (start) to Cyan (complete). Use thin, 4px rounded bars to maintain the clean aesthetic.

**Input Fields**
Fields are dark (#172133) with no fill, defined by a bottom border that glows Cyan when focused. Labels should use the `label-caps` typography style.

**Chips / Tags**
Small, pill-shaped badges used for JLPT levels (e.g., N5, N1). These should have a subtle background tint of the accent colors with high-contrast text.