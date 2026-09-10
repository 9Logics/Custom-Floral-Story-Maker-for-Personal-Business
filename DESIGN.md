---
name: Fresh Bloom — Floral Atelier
colors:
  # ── App Shell (Light Glassmorphism) ──
  surface-root: '#fdfdfc'
  surface-panel: 'rgba(255, 255, 255, 0.70)'
  surface-panel-header: 'rgba(255, 255, 255, 0.50)'
  surface-card: '#ffffff'
  surface-preview: 'transparent'
  surface-preview-bar: 'rgba(255, 255, 255, 0.70)'

  # ── Brand ──
  brand-primary: '#2d4a22'
  brand-primary-hover: 'rgba(45, 74, 34, 0.90)'
  brand-primary-tint: 'rgba(45, 74, 34, 0.10)'
  brand-primary-ring: 'rgba(45, 74, 34, 0.30)'
  brand-secondary: '#f4eae1'
  brand-accent: '#e28743'

  # ── Ambient Blobs (Background) ──
  blob-green: 'rgba(45, 74, 34, 0.05)'
  blob-amber: 'rgba(226, 135, 67, 0.05)'
  blob-cream: 'rgba(244, 234, 225, 0.40)'

  # ── Text ──
  text-primary: '#1f2937'
  text-secondary: '#6b7280'
  text-tertiary: '#9ca3af'
  text-placeholder: '#d1d5db'
  text-on-primary: '#ffffff'

  # ── Borders ──
  border-default: '#e5e7eb'
  border-subtle: 'rgba(255, 255, 255, 0.50)'
  border-dashed: '#d1d5db'
  border-focus: '#2d4a22'

  # ── State ──
  danger: '#ef4444'
  danger-bg: 'rgba(239, 68, 68, 0.05)'
  danger-border: 'rgba(239, 68, 68, 0.20)'
  disabled-opacity: '0.50'

  # ── Classic Template ──
  classic-bg: '#faf9f6'
  classic-card: '#ffffff'
  classic-border: '#f3f4f6'
  classic-text: '#1f2937'
  classic-price: '#6b7280'
  classic-desc: '#9ca3af'

  # ── Botanical Template ──
  botanical-bg: '#3a5a2f'
  botanical-blob-light: '#4a723e'
  botanical-blob-dark: '#2a4421'
  botanical-card: 'rgba(244, 234, 225, 0.10)'
  botanical-card-border: 'rgba(255, 255, 255, 0.20)'
  botanical-text: '#ffffff'
  botanical-price: '#e28743'
  botanical-cta-bg: 'rgba(226, 135, 67, 0.90)'

  # ── Modern Template ──
  modern-bg: '#18181b'
  modern-card: 'rgba(39, 39, 42, 0.50)'
  modern-text: '#fafafa'
  modern-text-muted: '#a1a1aa'
  modern-price: '#e28743'
  modern-gradient-from: '#18181b'
  modern-gradient-via: 'rgba(24, 24, 27, 0.80)'
  modern-cta-bg: '#ffffff'
  modern-cta-text: '#18181b'

typography:
  # ── Display / Brand Headers (Cormorant) ──
  display-brand:
    fontFamily: Cormorant
    fontSize: 2.5rem
    fontWeight: '500'
    lineHeight: '1.1'
    letterSpacing: 0em
    textTransform: capitalize
    note: "Classic template brand name. Elegant, understated."

  display-brand-botanical:
    fontFamily: Cormorant
    fontSize: 3.125rem
    fontWeight: '500'
    lineHeight: '1.1'
    letterSpacing: 0em
    fontStyle: italic
    textTransform: capitalize
    note: "Botanical template brand name. Italic for organic warmth."

  display-brand-modern:
    fontFamily: Cormorant
    fontSize: 1.875rem
    fontWeight: '300'
    lineHeight: '1.1'
    letterSpacing: 0em
    textTransform: capitalize
    note: "Modern template brand name. Light weight for contrast against dark."

  # ── Product Names (Cormorant) ──
  product-name-classic:
    fontFamily: Cormorant
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: '1.3'
    textTransform: capitalize
    note: "Inside Classic template product cards."

  product-name-botanical:
    fontFamily: Cormorant
    fontSize: 1.125rem
    fontWeight: '500'
    lineHeight: '1.3'
    textTransform: capitalize
    note: "Inside Botanical glassmorphic product cards."

  product-name-modern:
    fontFamily: Montserrat
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: '1.4'
    textTransform: capitalize
    note: "Inside Modern gradient overlay. Sans-serif for contrast."

  # ── Interface / Body (Montserrat) ──
  heading-lg:
    fontFamily: Cormorant
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: '1.2'
    note: "App shell header 'Fresh Bloom Setup'"

  heading-md:
    fontFamily: Montserrat
    fontSize: 1.125rem
    fontWeight: '600'
    lineHeight: '1.35'
    note: "Section headings like 'Products (3)'"

  body-md:
    fontFamily: Montserrat
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.45'
    note: "Form inputs, descriptions, body text"

  body-sm:
    fontFamily: Montserrat
    fontSize: 0.75rem
    fontWeight: '400'
    lineHeight: '1.4'
    note: "Helper text, price displays, secondary labels"

  label:
    fontFamily: Montserrat
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: '1.4'
    note: "Form labels"

  label-caps:
    fontFamily: Montserrat
    fontSize: 0.6875rem
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: 0.05em
    textTransform: uppercase
    note: "Product index badge 'PRODUCT 1', story labels 'STORY 1'"

  # ── CTA / Button Text ──
  cta:
    fontFamily: Montserrat
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: '1.4'
    textTransform: capitalize
    note: "All CTA buttons across templates and the export button"

  # ── Price ──
  price:
    fontFamily: Montserrat
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: '1.3'
    note: "Product price in story cards. No uppercase. No tracking."

rounded:
  xs: 0.25rem
  sm: 0.375rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.25rem
  2xl: 1.5rem
  full: 9999px

spacing:
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
  space-2xl: 2rem
  space-3xl: 3rem

  # ── App Shell ──
  panel-padding: 1.5rem
  panel-header-padding: 1.25rem
  preview-padding-mobile: 1rem
  preview-padding-desktop: 2rem

  # ── Story Card ──
  card-base-width: 360px
  card-base-height: 640px
  card-preview-scale: 0.75
  card-preview-width: 270px
  card-preview-height: 480px
  card-export-scale: 3
  card-export-width: 1080px
  card-export-height: 1920px

  card-inner-padding: 1.5rem
  card-product-gap: 1rem
  card-product-gap-botanical: 0.75rem

  # ── Grid ──
  product-grid-gap: 1rem
  products-per-card: 4

animation:
  ease-out: 'cubic-bezier(0.23, 1, 0.32, 1)'
  ease-in-out: 'cubic-bezier(0.77, 0, 0.175, 1)'

  product-enter:
    from: { opacity: 0, y: 20, scale: 0.95 }
    to: { opacity: 1, y: 0, scale: 1 }
    duration: 300ms
    ease: 'cubic-bezier(0.23, 1, 0.32, 1)'

  product-exit:
    from: { opacity: 1, scale: 1 }
    to: { opacity: 0, scale: 0.95 }
    duration: 200ms

  preview-card-enter:
    from: { opacity: 0, scale: 0.95, y: 20 }
    to: { opacity: 1, scale: 1, y: 0 }
    duration: 400ms
    stagger: 100ms
    ease: 'cubic-bezier(0.23, 1, 0.32, 1)'

  interactive-press:
    transform: 'scale(0.97)'
    duration: 160ms
    ease: 'cubic-bezier(0.23, 1, 0.32, 1)'

  preview-hover:
    transform: 'scale(1.02)'
    duration: 300ms
    ease: ease-out
---

## Brand & Style

Fresh Bloom is a floral sub-brand of Floral Art, positioned as a modern, premium-yet-approachable Delhi-NCR flower delivery service. The design system targets a single operator who needs to produce visually cohesive Instagram Story product cards in under two minutes, daily.

The emotional tone is **warm, botanical, and quietly luxurious** — evoking a sunlit atelier with terracotta pots, linen wrapping, and hand-tied bouquets. The visual language draws from European floral branding (think Parisian florist shopfronts and Italian wedding stationery) rather than generic "green = nature" clichés.

The app shell uses a **light glassmorphism** aesthetic: semi-transparent white panels over soft, blurred color blobs, creating depth without heaviness. The story card templates each explore a different mood — a light editorial elegance (Classic), a lush botanical night garden (Botanical), and a stark contemporary gallery (Modern) — unified by the same type hierarchy and brand colors.

Typography never shouts. There is **no uppercase text anywhere** in the design system except for tiny structural labels (`PRODUCT 1`, `STORY 1`) which use `label-caps` at 11px. All brand names, product names, CTA buttons, and prices use `capitalize` (Title Case) or natural sentence case. Font weights stay in the `300–600` range; `font-black` and `font-bold` (700+) are prohibited.

## Colors

The palette is built on three chromatic pillars:

- **Brand Primary (`#2d4a22` / forest green)**: The foundational brand color. Used for the app shell header text, form focus rings, CTA button backgrounds in the Classic template, and the brand name in Classic cards. Never used at full opacity on large surfaces — it's too dense. Instead, it appears as text color, button fill, or at 5–10% opacity as a background tint.

- **Brand Secondary (`#f4eae1` / warm cream)**: The soul of the brand's warmth. Used as the Classic template's `#faf9f6` near-cousin, as the Botanical template's text color, and as the form panel's ambient blob. Think of it as "the color of linen wrapping paper."

- **Brand Accent (`#e28743` / amber)**: Heat and energy. Used for the Botanical CTA button, the Modern template's price highlight, and hover states. It is the one color that "pops" — use it surgically.

- **Surfaces**: The app shell background is `#fdfdfc` (almost-white, never pure `#fff` which reads as sterile). Panels use `rgba(255, 255, 255, 0.70)` with `backdrop-blur-xl` for glassmorphism. Product cards in the form are solid `#ffffff` with `border-gray-200` and a soft shadow.

- **Danger (`#ef4444`)**: Only for the delete/trash button hover state. Applied as text color with a `bg-red-50` hover background — never as a solid fill.

## Typography

The type hierarchy enforces two semantic roles:

1. **Cormorant (Display Serif)**: An elegant, high-contrast serif with beautiful italic forms. Reserved for brand names in story card headers, product names inside story cards, and the app shell title "Fresh Bloom Setup." Cormorant is the voice of the brand — it speaks softly but carries visual weight. Weights used: `300` (light, Modern template header), `500` (medium, Classic and Botanical headers), `600` (semi-bold, Classic product names).

2. **Montserrat (Interface Sans-Serif)**: A geometric, airy sans-serif that reads cleanly at small sizes. Used for all form inputs, labels, buttons, prices, descriptions, CTA text, and UI chrome. Montserrat is the workhorse — functional, invisible, never decorative. Weights used: `400` (body text), `500` (labels, buttons, prices), `600` (section headings), `700` (never — too heavy for this brand).

**Prohibited**: No `font-black` (900), no `font-extrabold` (800), no `font-bold` (700) anywhere in the app. The heaviest weight allowed is `600` (semi-bold), and only for structural headings and section titles. Product names in story cards max out at `600` in Classic, `500` everywhere else.

**Prohibited**: No `uppercase` on any user-facing text except `label-caps` tokens (the tiny `PRODUCT 1` / `STORY 1` badges). All brand names, product names, CTA buttons, and prices use CSS `text-transform: capitalize` or no transform at all.

**Prohibited**: No `tracking-widest` or `tracking-[0.2em]`. Maximum letter-spacing is `0.05em`, and only on `label-caps`. All other text uses default tracking or slight negative tracking for display sizes.

## Layout & Spacing

### App Shell
The app uses a responsive two-column layout:

- **Desktop (≥768px)**: Left panel occupies `w-1/3`, right preview pane occupies `w-2/3`. Both scroll independently (`overflow-y-auto`, `h-screen`).
- **Mobile (<768px)**: Single column, form stacks above preview. No forced height — uses browser's natural scroll. Padding reduces from `2rem` to `1rem`.

### Story Cards
Each story card is rendered at `360×640px` (9:16 aspect ratio) in the DOM, then scaled to `270×480px` via `transform: scale(0.75)` with `transform-origin: top left` for the preview. The outer wrapper is sized to `270×480px` to contain the scaled content.

On export, the scale is removed and `pixelRatio: 3` is applied, producing a `1080×1920px` PNG.

### Product Grid Inside Story Cards
- **1 product**: Single column, image fills available vertical space via `flex-1`.
- **2 products**: Single column, `grid-rows-2`.
- **3–4 products**: `grid-cols-2`, `grid-rows-2`.

Product image heights adapt: `flex-1` (1 product), `h-32` / 128px (2 products), `h-24` / 96px (3–4 products).

## Elevation & Depth

Visual depth is achieved through **glassmorphism layers** and **ambient color blobs**, not traditional drop shadows.

- **Level 0 (Root Void)**: `#fdfdfc` page background. Nearly white, warm undertone.
- **Level 1 (Ambient Blobs)**: Fixed-position, `pointer-events-none` layer behind everything. Three blurred circular divs:
  - Top-left: `bg-brand-primary/5`, `blur-[120px]`, 40% width.
  - Top-right: `bg-accent/5`, `blur-[100px]`, 35% width.
  - Bottom-center: `bg-brand-secondary/40`, `blur-[100px]`, 50% width.
  - Plus a subtle SVG noise texture at `opacity-[0.015]` for tactile grain.
  - Plus a decorative floral SVG outline at `opacity-[0.03]`, `rotate-12`, `scale-150` in bottom-right corner.
- **Level 2 (Glass Panels)**: `bg-white/70`, `backdrop-blur-xl`, `border-white/50`. The left form panel and the preview header bar. `shadow-2xl` on the form panel only.
- **Level 3 (Solid Cards)**: `bg-white`, `border-gray-200`, `shadow-sm`. Product input cards in the form. `hover:shadow-md` transition for interactivity feedback.
- **Level 4 (Story Card Previews)**: `shadow-2xl`, `rounded-2xl`, `ring-1 ring-black/5`. The preview cards in the right pane. `hover:scale-[1.02]` with `transition-transform duration-300`.

## Shapes

The design system uses progressively larger radii for larger surfaces:

- **Form inputs & text areas**: `rounded-md` (6px) — tight, functional.
- **Template selector buttons**: `rounded-lg` (8px) — slightly softer.
- **Product input cards**: `rounded-xl` (12px) — generous, card-like.
- **Glass panels**: `rounded-2xl` (16px) — on the preview header bar.
- **Story card preview wrapper**: `rounded-2xl` (16px) — frames the entire card.
- **CTA buttons (Classic/Botanical)**: `rounded-full` (pill shape) — soft, inviting.
- **CTA button (Modern)**: `rounded-md` (6px) — sharp, architectural.
- **Brand logo**: `rounded-full` (circle) — avatar treatment.
- **Image upload area**: `rounded-lg` (8px) with `border-dashed`.

## Components

### App Shell Header (Sticky)
- **Background**: `bg-white/50`, `backdrop-blur-md`.
- **Border**: `border-b border-white/50`.
- **Padding**: `p-5` (20px).
- **Logo**: 40×40px circle, `object-cover`, `border border-brand-secondary`, `shadow-sm`. On hover, a dark overlay (`bg-black/40`) appears with an upload icon.
- **Title**: Cormorant, `text-2xl` (24px), `font-semibold` (600), `text-brand-primary`, `tracking-tight`.

### Form Labels
- **Font**: Montserrat, `text-sm` (14px), `font-medium` (500), `text-gray-700`.
- **Spacing**: `mb-1` (4px) below label.

### Form Inputs
- **Background**: `bg-white` (inherits from parent, but solid on the input itself).
- **Border**: `border border-gray-200`, `rounded-lg` (8px).
- **Padding**: `p-2.5` (10px).
- **Text**: Montserrat, `text-sm` (14px), `text-gray-800`.
- **Focus**: `ring-2 ring-brand-primary/50`, `border-brand-primary`. Transition: `transition-shadow`.
- **Placeholder**: `text-gray-400`.

### Template Selector Buttons
- **Layout**: `grid grid-cols-1 sm:grid-cols-3 gap-2`.
- **Active**: `bg-brand-primary`, `text-white`, `shadow-md`.
- **Inactive**: `bg-gray-100`, `text-gray-600`. Hover: `bg-gray-200`.
- **Font**: Montserrat, `text-sm` (14px), `capitalize`.
- **Padding**: `py-2 px-3`.
- **Shape**: `rounded-lg` (8px).
- **Interaction**: `.interactive` class (scale 0.97 on press).

### Product Input Card (Form Panel)
- **Background**: `bg-white`.
- **Border**: `border border-gray-200`.
- **Shape**: `rounded-xl` (12px).
- **Padding**: `p-4` (16px).
- **Shadow**: `shadow-sm`, `hover:shadow-md`, `transition-shadow`.
- **Index badge**: `label-caps` token — Montserrat, 11px, `font-semibold`, `uppercase`, `tracking-wider`, `text-gray-400`.
- **Action buttons** (move up/down, delete): Hidden by default (`opacity-0`), revealed on card hover (`group-hover:opacity-100`, `transition-opacity`). Delete uses `text-gray-400 hover:text-red-500 hover:bg-red-50`. Move arrows use `text-gray-400 hover:text-brand-primary hover:bg-gray-50`. Separated by a 1px vertical divider (`w-px h-4 bg-gray-200`).
- **Image upload area**: 96×96px (`w-24 h-24`), `bg-gray-50`, `border-dashed border-gray-300`, `rounded-lg`. Hover: `border-brand-primary/50`. When image is uploaded, full-bleed `object-cover` with a dark overlay on hover (`bg-black/40`) showing a camera icon. When empty, the placeholder image is shown at `opacity-40 mix-blend-overlay` with a small "Upload" label centered on a `bg-white/70 backdrop-blur-sm` pill.
- **Animation**: Framer Motion `AnimatePresence`. Enter: `opacity 0→1, y 20→0, scale 0.95→1` over 300ms. Exit: `opacity 1→0, scale 1→0.95` over 200ms. Ease: `cubic-bezier(0.23, 1, 0.32, 1)`.

### Empty State (Zero Products)
- **Border**: `border-2 border-dashed border-gray-200`, `rounded-xl`.
- **Padding**: `py-10`.
- **Icon**: 48×48px circle (`bg-gray-50`, centered), containing a 20px image icon (`text-gray-400`).
- **Primary text**: Montserrat, `text-sm`, `font-medium`, `text-gray-500`.
- **Secondary text**: Montserrat, `text-xs`, `text-gray-400`, `mt-1`.

### Export Button
- **Default**: `bg-brand-primary`, `text-white`, `px-6 py-2.5`, `rounded-xl`, `font-medium`, `shadow-sm`. Montserrat, `text-sm`, `capitalize`.
- **Hover**: `bg-brand-primary/90`.
- **Disabled**: `opacity-50`, `cursor-not-allowed`.
- **Loading**: Text changes to "Exporting..." with an animated SVG spinner (white, `animate-spin`).
- **Mobile**: `w-full`, `justify-center`.
- **Interaction**: `.interactive` class.

### Preview Card Wrapper
- **Outer shadow**: `shadow-2xl`, `rounded-2xl`, `overflow-hidden`, `ring-1 ring-black/5`.
- **Hover**: `scale-[1.02]`, `transition-transform duration-300 ease-out`.
- **Label above**: Montserrat, `text-sm`, `text-gray-400`, `font-medium`, `tracking-wide`, `uppercase` — "STORY 1", "STORY 2", etc.
- **Animation**: Framer Motion `motion.div`. Enter: staggered by 100ms per card.

---

## Story Card Templates

All three templates share a common structure: a full-bleed `360×640px` container, a branded header at top, a responsive product grid in the middle, and a CTA bar at the bottom. They differ in palette, texture, and typographic mood.

### Classic Template

**Mood**: Bright, editorial, Parisian florist. Clean white cards on warm paper.

| Element | Specification |
|---|---|
| **Background** | `bg-[#faf9f6]` (warm off-white, not pure white) |
| **Header** | Cormorant, `text-4xl` (40px), `font-medium` (500), `text-brand-primary`, `capitalize`. Centered. Below: a 48px-wide, 1px-tall divider line at `bg-brand-primary/30`, centered, `mt-4`. |
| **Product card** | `bg-white`, `p-3`, `shadow-sm`, `rounded-xl`, `border border-gray-100`. |
| **Product image** | `rounded-lg`, `object-cover`, full width. Heights: `flex-1` (1 item), `h-32` (2 items), `h-24` (3–4 items). Background: `bg-gray-50`. If no image: `/placeholder.jpg` at `opacity-80`. |
| **Product name** | Cormorant, `text-sm` (14px), `font-semibold` (600), `text-brand-primary`, `capitalize`, `truncate`, centered. |
| **Price** | Montserrat, `text-xs` (12px), `font-medium` (500), `text-gray-500`, `mt-1`, centered. |
| **Description** | Montserrat, `text-[10px]` (10px), `text-gray-400`, `mt-2`, `line-clamp-2`, `leading-relaxed`. Only visible when ≤2 products. |
| **CTA** | Montserrat, `text-sm` (14px), `font-medium` (500), `bg-brand-primary`, `text-white`, `px-8 py-2.5`, `rounded-full` (pill), `shadow-sm`, `capitalize`, centered. |

### Botanical Template

**Mood**: Lush, nocturnal, greenhouse at dusk. Organic forms and translucent surfaces.

| Element | Specification |
|---|---|
| **Background** | `bg-[#3a5a2f]` (deep moss green). |
| **Ambient blobs** | Two `absolute` circles with `filter blur-[60px]`: top-right `bg-[#4a723e]` at `opacity-50`, bottom-left `bg-[#2a4421]` at `opacity-50`. Offset with `translate` to bleed off edges. |
| **Header** | Cormorant, `text-5xl` (50px), `font-medium` (500), `text-brand-secondary` (cream), `capitalize`, `italic`, `drop-shadow-sm`, centered, `z-10`. |
| **Product card** | `bg-[#f4eae1]/10` (cream at 10% opacity), `backdrop-blur-md`, `p-2.5`, `rounded-2xl`, `border border-white/20`, `shadow-lg`. |
| **Product image** | `rounded-xl`, `object-cover`, `mix-blend-overlay`. If no image: `opacity-70`. Background: `bg-white/20`. |
| **Product name** | Cormorant, `text-lg` (18px), `font-medium` (500), `text-white`, `capitalize`, centered. |
| **Price** | Montserrat, `text-xs` (12px), `font-medium` (500), `text-[#e28743]` (amber), `mt-0.5`, centered. No uppercase. |
| **CTA** | Montserrat, `text-sm` (14px), `font-medium` (500), `bg-[#e28743]/90`, `backdrop-blur-sm`, `text-white`, `border border-brand-accent/50`, `px-8 py-3`, `rounded-full` (pill), `shadow-lg`, `capitalize`, centered, `z-10`. |

### Modern Template

**Mood**: Gallery, editorial night. Stark contrast, desaturated imagery, cinematic overlays.

| Element | Specification |
|---|---|
| **Background** | `bg-zinc-900` (`#18181b`). |
| **Header** | Cormorant, `text-3xl` (30px), `font-light` (300), `text-white`, `capitalize`. Left-aligned in a `flex justify-between` row with a `border-b border-zinc-800 pb-4`. Right: a 2×2px `bg-brand-accent rounded-full` dot indicator, `mb-2`. |
| **Product card** | `bg-zinc-800/50`, `p-2`, `rounded-lg`, `overflow-hidden`. |
| **Product image** | `rounded`, `object-cover`, `grayscale`, `opacity-80`, `mix-blend-screen`. Background: `bg-zinc-800`. |
| **Gradient overlay** | `absolute bottom-0 left-0 right-0`, `bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent`, `p-3 pt-6`. Contains product name and price side-by-side. |
| **Product name** | Montserrat, `text-sm` (14px), `font-medium` (500), `text-zinc-100`, `capitalize`, `truncate`. |
| **Price** | Montserrat, `text-xs` (12px), `font-medium` (500), `text-brand-accent` (amber). |
| **Description** | Montserrat, `text-[10px]`, `text-zinc-400`, `font-light`, `leading-relaxed`, `line-clamp-2`. Only visible when ≤2 products. |
| **CTA** | Montserrat, `text-sm` (14px), `font-medium` (500), `bg-white`, `text-zinc-900`, `w-full`, `py-3`, `rounded-md` (6px), `capitalize`, centered. |

---

## Background Layer

The background is a fixed, non-interactive decorative layer (`fixed inset-0 overflow-hidden pointer-events-none -z-10`) consisting of:

1. **Base fill**: `bg-[#fdfdfc]`.
2. **Three ambient blobs**: Large, blurred circular divs positioned at the edges to create a soft, living wash of color. They should feel like diffused light through a frosted window, not like UI elements.
3. **Decorative SVG**: A single floral outline SVG (petals + stem, ~400px viewBox) positioned `bottom-10 right-10`, rotated 12°, scaled 150%, at `opacity-[0.03]`. Stroke-only, `strokeWidth: 0.5`, `text-brand-primary`. It should be almost invisible — a subliminal texture, not an illustration.
4. **Noise texture**: An inline SVG `feTurbulence` noise pattern tiled over the entire background at `opacity-[0.015]`. Adds physical grain to the digital surface.
