# Fresh Bloom — Story Card Templates v2

## Overview

This document specifies **8 total story card templates** — 3 redesigned originals + 5 brand-new designs. Each template is a self-contained React component that renders inside a `360×640px` container (exported at `1080×1920px` via `pixelRatio: 3`).

Every spec is exact. No guessing. No "make it look nice." Every hex, every px, every font-weight is defined.

---

## New Google Fonts Required

Update `index.html` to load these additional fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Serif+Display:ital@0;1&family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" rel="stylesheet">
```

New fonts added:
- **Playfair Display** — High-contrast editorial serif for the Editorial template
- **DM Serif Display** — Elegant display serif for the Luxe template
- **Lora** — Warm, readable serif for the Watercolor template

---

## Updated CSS Theme Tokens

Add to `src/index.css` inside `@theme {}`:

```css
--font-playfair: "Playfair Display", serif;
--font-dm-serif: "DM Serif Display", serif;
--font-lora: "Lora", serif;
```

---

## Template Selector UI Update

The current 3-button row should become a scrollable grid:

```
Layout: grid grid-cols-2 sm:grid-cols-4 gap-2
```

Each button shows a small color swatch + name:

| Template | Swatch Color | Label |
|---|---|---|
| Classic | `#faf9f6` (warm white) | Classic |
| Botanical | `#3a5a2f` (moss) | Botanical |
| Modern | `#18181b` (zinc) | Modern |
| Minimal | `#ffffff` (pure white) | Minimal |
| Watercolor | `#fdf2f0` (blush) | Watercolor |
| Editorial | `#1a1a1a` (near-black) | Editorial |
| Luxe | `#f5f0e8` (champagne) | Luxe |
| Polaroid | `#e8e4de` (warm gray) | Polaroid |

Button spec:
- Height: `auto`, padding `py-2.5 px-3`
- Active: `ring-2 ring-brand-primary ring-offset-2 bg-white shadow-md`
- Inactive: `bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200`
- Font: Montserrat, `text-xs` (12px), `font-medium`, `capitalize`
- Inside each button: a `12×12px` rounded-full color swatch (`mr-2`, inline-flex) + the template name

---

## Template 1: Classic (Redesigned)

**Mood**: Bright Parisian florist. Warm paper, clean white product cards, editorial serif.

### Colors
| Token | Value |
|---|---|
| Background | `#faf9f6` |
| Card surface | `#ffffff` |
| Card border | `#f0ede8` (warmer than gray-100) |
| Card shadow | `0 1px 3px rgba(0,0,0,0.04)` |
| Brand text | `#2d4a22` |
| Price text | `#8b7355` (warm brown, not cold gray) |
| Description | `#a89f91` |
| Divider line | `#2d4a22` at 20% opacity |
| CTA bg | `#2d4a22` |
| CTA text | `#ffffff` |

### Typography
| Element | Font | Size | Weight | Transform |
|---|---|---|---|---|
| Brand name | Cormorant | `text-[40px]` | 500 | capitalize |
| Product name | Cormorant | `text-[15px]` | 600 | capitalize |
| Price | Montserrat | `text-[12px]` | 500 | none |
| Description | Montserrat | `text-[10px]` | 400 | none |
| CTA | Montserrat | `text-[14px]` | 500 | capitalize |

### Layout
```
┌─────────────────────────────┐
│        padding: 24px        │
│                             │
│    ── Brand Name (serif) ── │  ← Cormorant, centered
│     ─── thin line (48px) ── │  ← 1px tall, brand-primary/20
│                             │
│  ┌─────────┐  ┌─────────┐  │  ← White cards, rounded-xl
│  │  image   │  │  image   │  │    border: 1px solid #f0ede8
│  │  name    │  │  name    │  │    shadow: soft
│  │  price   │  │  price   │  │
│  └─────────┘  └─────────┘  │
│  ┌─────────┐  ┌─────────┐  │
│  │  image   │  │  image   │  │
│  │  name    │  │  name    │  │
│  │  price   │  │  price   │  │
│  └─────────┘  └─────────┘  │
│                             │
│      [ Order Now ]          │  ← pill button, rounded-full
│                             │
└─────────────────────────────┘
```

### Product Card Inner Layout
- Padding: `p-3` (12px)
- Image container: `rounded-lg`, `bg-gray-50`, `overflow-hidden`
- Image: `object-cover`, full width
- Below image: `mt-3`, text centered
- Name: `font-serif text-[15px] font-semibold text-[#2d4a22] capitalize truncate`
- Price: `text-[12px] font-medium text-[#8b7355] mt-1`
- Description (if ≤2 products): `text-[10px] text-[#a89f91] mt-2 line-clamp-2 leading-relaxed`

### Image Heights by Product Count
| Count | Image class | Grid |
|---|---|---|
| 1 | `flex-1` (fills space) | `grid-cols-1` |
| 2 | `h-[140px]` | `grid-cols-1 grid-rows-2` |
| 3 | `h-[100px]` | `grid-cols-2 grid-rows-2` (last centered via `col-span-2 max-w-[50%] mx-auto`) |
| 4 | `h-[100px]` | `grid-cols-2 grid-rows-2` |

---

## Template 2: Botanical (Redesigned)

**Mood**: Midnight greenhouse. Deep emerald, translucent glass cards, italic serif.

### Colors
| Token | Value |
|---|---|
| Background | `#2a4a20` (deeper, richer green) |
| Blob top-right | `#3d6a30` at 40% opacity, `blur-[80px]` |
| Blob bottom-left | `#1e3618` at 50% opacity, `blur-[80px]` |
| Card surface | `rgba(255, 255, 255, 0.08)` |
| Card border | `rgba(255, 255, 255, 0.12)` |
| Card backdrop | `backdrop-blur-lg` |
| Text primary | `#f4eae1` (cream) |
| Price text | `#e8a85c` (softer amber) |
| CTA bg | `#e8a85c` |
| CTA text | `#1e3618` (dark green for contrast) |
| CTA border | `rgba(232, 168, 92, 0.3)` |

### Typography
| Element | Font | Size | Weight | Style | Transform |
|---|---|---|---|---|---|
| Brand name | Cormorant | `text-[44px]` | 400 | italic | capitalize |
| Product name | Cormorant | `text-[16px]` | 500 | normal | capitalize |
| Price | Montserrat | `text-[11px]` | 500 | normal | none |
| CTA | Montserrat | `text-[13px]` | 600 | normal | capitalize |

### Layout
```
┌─────────────────────────────┐
│  bg: deep moss with blobs   │
│        padding: 24px        │
│                             │
│    ── Brand Name ──         │  ← Cormorant italic, cream
│       (centered)            │
│                             │
│  ┌─────────┐  ┌─────────┐  │  ← Glassmorphic cards
│  │ ░░img░░ │  │ ░░img░░ │  │    bg: white/8%
│  │  name   │  │  name   │  │    border: white/12%
│  │  price  │  │  price  │  │    backdrop-blur
│  └─────────┘  └─────────┘  │
│  ┌─────────┐  ┌─────────┐  │
│  │ ░░img░░ │  │ ░░img░░ │  │
│  │  name   │  │  name   │  │
│  │  price  │  │  price  │  │
│  └─────────┘  └─────────┘  │
│                             │
│      [ Order Now ]          │  ← amber pill, dark text
│                             │
└─────────────────────────────┘
```

### Product Card Inner Layout
- Padding: `p-2.5` (10px)
- Shape: `rounded-2xl`
- Image: `rounded-xl`, `object-cover`. NO `mix-blend-overlay` — show images naturally but with a subtle `brightness-90` filter.
- Name: centered, cream text
- Price: centered, amber text

---

## Template 3: Modern (Redesigned)

**Mood**: Contemporary art gallery. Maximum contrast, desaturated photos, bold gradient overlays.

### Colors
| Token | Value |
|---|---|
| Background | `#0f0f0f` (true dark, not zinc-900) |
| Card surface | `rgba(255, 255, 255, 0.04)` |
| Card border | `rgba(255, 255, 255, 0.06)` |
| Text primary | `#fafafa` |
| Text secondary | `#737373` |
| Price accent | `#e8a85c` |
| Gradient from | `#0f0f0f` |
| Gradient via | `rgba(15, 15, 15, 0.85)` |
| CTA bg | `#fafafa` |
| CTA text | `#0f0f0f` |
| Header line | `rgba(255, 255, 255, 0.08)` |
| Accent dot | `#e8a85c` |

### Typography
| Element | Font | Size | Weight | Transform |
|---|---|---|---|---|
| Brand name | Cormorant | `text-[28px]` | 300 | capitalize |
| Product name | Montserrat | `text-[13px]` | 500 | capitalize |
| Price | Montserrat | `text-[11px]` | 500 | none |
| Description | Montserrat | `text-[10px]` | 300 | none |
| CTA | Montserrat | `text-[14px]` | 500 | capitalize |

### Layout
```
┌─────────────────────────────┐
│  bg: #0f0f0f                │
│        padding: 20px        │
│                             │
│  Brand Name          ●      │  ← left-aligned serif + amber dot
│  ─────────────────────      │  ← 1px border-b, white/8%
│                             │
│  ┌──────────────────────┐   │  ← Full-width image cards
│  │     image (grayscale) │   │    gradient overlay at bottom
│  │  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │   │    name left, price right
│  │  Name          ₹999  │   │
│  └──────────────────────┘   │
│  ┌──────────────────────┐   │
│  │     image (grayscale) │   │
│  │  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │   │
│  │  Name          ₹999  │   │
│  └──────────────────────┘   │
│                             │
│  ┌──────────────────────┐   │  ← Full-width white CTA
│  │     Order Now         │   │    rounded-md
│  └──────────────────────┘   │
│                             │
└─────────────────────────────┘
```

### Image Treatment
- Filter: `grayscale` + `brightness-[0.85]` + `contrast-[1.1]`
- On the gradient overlay: `bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/85 to-transparent`
- Gradient height: `p-3 pt-8` (generous top padding so fade is visible)

---

## Template 4: Minimal (NEW)

**Mood**: Aesop. Diptyque. Byredo. Ultra-clean, asymmetric whitespace, single accent line. The most "design-forward" template.

### Colors
| Token | Value |
|---|---|
| Background | `#ffffff` |
| Text primary | `#1a1a1a` |
| Text secondary | `#999999` |
| Accent line | `#2d4a22` (brand green, used as a single thin rule) |
| Price | `#1a1a1a` |
| CTA bg | `transparent` |
| CTA border | `1px solid #1a1a1a` |
| CTA text | `#1a1a1a` |
| Divider | `#e5e5e5` |

### Typography
| Element | Font | Size | Weight | Style | Transform |
|---|---|---|---|---|---|
| Brand name | Montserrat | `text-[11px]` | 600 | normal | uppercase, `tracking-[0.2em]` |
| Product name | Cormorant | `text-[18px]` | 500 | normal | capitalize |
| Price | Montserrat | `text-[11px]` | 500 | normal | none |
| Description | Montserrat | `text-[10px]` | 400 | normal | none |
| CTA | Montserrat | `text-[11px]` | 500 | normal | uppercase, `tracking-[0.15em]` |

> **Exception**: This is the ONLY template where `uppercase` is allowed on the brand name and CTA — it's a deliberate design choice for the minimal aesthetic. The brand name here is a small, tracked-out label (like Aesop packaging), not a big shouty header.

### Layout
```
┌─────────────────────────────┐
│  bg: pure white             │
│        padding: 28px        │
│                             │
│  FRESH BLOOM                │  ← tiny, tracked uppercase, left-aligned
│  ▬▬▬▬▬ (32px green line)   │  ← 2px tall, brand-primary, mt-3
│                             │
│                             │
│  ┌──────────────────────┐   │
│  │                      │   │  ← No card bg, no border, no shadow
│  │      image           │   │    Just image + text, separated by
│  │                      │   │    thin 1px #e5e5e5 dividers
│  └──────────────────────┘   │
│  Product Name               │  ← left-aligned, Cormorant
│  ₹1,499                     │  ← left-aligned, Montserrat
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  │  ← 1px solid #e5e5e5 divider
│                             │
│  ┌──────────────────────┐   │
│  │      image           │   │
│  └──────────────────────┘   │
│  Product Name               │
│  ₹1,499                     │
│                             │
│                             │
│  ┌─────────────────────┐    │  ← Ghost button: transparent bg,
│  │   ORDER NOW          │    │    1px solid #1a1a1a border
│  └─────────────────────┘    │    rounded-full (pill)
│                             │
└─────────────────────────────┘
```

### Product Layout (No Cards)
- **No card wrapper** — products are just image + text + divider, stacked vertically
- Image: `rounded-md`, `object-cover`, full width
- Image heights: `h-[220px]` (1 product), `h-[130px]` (2), `h-[90px]` (3-4)
- Below image: `mt-3`
- Name: left-aligned, `text-[18px]`
- Price: left-aligned, `text-[11px]`, `mt-1`, `text-[#999]`
- Divider between products: `border-b border-[#e5e5e5] my-4` (except after last product)
- For 3-4 products: switch to `grid-cols-2 gap-5` with dividers only between rows

---

## Template 5: Watercolor (NEW)

**Mood**: Wedding invitation. Soft hand-painted washes, romantic serif, organic warmth.

### Colors
| Token | Value |
|---|---|
| Background | `#fdf2f0` (blush pink) |
| Wash top | `rgba(232, 190, 172, 0.25)` blurred circle, top-right |
| Wash bottom | `rgba(200, 168, 155, 0.20)` blurred circle, bottom-left |
| Wash center | `rgba(220, 200, 188, 0.15)` blurred circle, center |
| Card surface | `rgba(255, 255, 255, 0.60)` |
| Card border | `rgba(200, 168, 155, 0.20)` |
| Card backdrop | `backdrop-blur-sm` |
| Text primary | `#5c4033` (warm brown) |
| Text secondary | `#9e8578` |
| Price | `#b07a5b` (terracotta) |
| CTA bg | `#5c4033` |
| CTA text | `#fdf2f0` |
| Decorative line | `#c8a89b` at 40% opacity |

### Typography
| Element | Font | Size | Weight | Style | Transform |
|---|---|---|---|---|---|
| Brand name | Lora | `text-[36px]` | 500 | italic | capitalize |
| Tagline | Montserrat | `text-[10px]` | 400 | normal | `tracking-[0.1em]`, lowercase |
| Product name | Lora | `text-[14px]` | 600 | normal | capitalize |
| Price | Montserrat | `text-[11px]` | 500 | normal | none |
| CTA | Montserrat | `text-[12px]` | 500 | normal | capitalize |

### Layout
```
┌─────────────────────────────┐
│  bg: #fdf2f0 + watercolor   │  ← blurred blobs simulate washes
│  washes (3 blurred blobs)   │
│        padding: 24px        │
│                             │
│    ✿ (decorative)           │  ← small SVG flower, 24px, #c8a89b/40
│    Brand Name               │  ← Lora italic, centered
│    fresh flowers delivered   │  ← tiny tagline, tracked, lowercase
│    ── ✿ ──                  │  ← decorative divider with flower
│                             │
│  ┌─────────┐  ┌─────────┐  │  ← Frosted cards
│  │  image   │  │  image   │  │    bg: white/60%, blur-sm
│  │  name    │  │  name    │  │    border: soft terracotta/20%
│  │  price   │  │  price   │  │    rounded-2xl
│  └─────────┘  └─────────┘  │
│  ┌─────────┐  ┌─────────┐  │
│  │  image   │  │  image   │  │
│  │  name    │  │  name    │  │
│  │  price   │  │  price   │  │
│  └─────────┘  └─────────┘  │
│                             │
│      [ Order Now ]          │  ← warm brown pill
│                             │
└─────────────────────────────┘
```

### Decorative SVG Flower (Inline, tiny)
```jsx
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c8a89b" strokeWidth="1" opacity="0.6">
  <circle cx="12" cy="12" r="3" />
  <path d="M12 2c-1 3-1 5 0 7" />
  <path d="M12 22c1-3 1-5 0-7" />
  <path d="M2 12c3-1 5-1 7 0" />
  <path d="M22 12c-3 1-5 1-7 0" />
  <path d="M5.6 5.6c1.8 1.8 3.2 3 4.5 3.5" />
  <path d="M18.4 18.4c-1.8-1.8-3.2-3-4.5-3.5" />
  <path d="M5.6 18.4c1.8-1.8 3.2-3 4.5-3.5" />
  <path d="M18.4 5.6c-1.8 1.8-3.2 3-4.5 3.5" />
</svg>
```

### Product Card Inner Layout
- Padding: `p-2.5`
- Shape: `rounded-2xl`
- Image: `rounded-xl`, `object-cover`, natural colors (no filters)
- Name: centered, warm brown
- Price: centered, terracotta

---

## Template 6: Editorial (NEW)

**Mood**: Kinfolk magazine. Dramatic asymmetric layout. One hero product dominates, others are small. Bold serif contrast.

### Colors
| Token | Value |
|---|---|
| Background | `#1a1a1a` |
| Accent stripe | `#c9a87c` (muted gold) |
| Text primary | `#f5f0e8` (warm cream) |
| Text secondary | `#8a8078` |
| Price | `#c9a87c` |
| Card surface | none (products sit directly on bg) |
| CTA bg | `#c9a87c` |
| CTA text | `#1a1a1a` |
| Border line | `rgba(201, 168, 124, 0.15)` |

### Typography
| Element | Font | Size | Weight | Style | Transform |
|---|---|---|---|---|---|
| Brand name | Playfair Display | `text-[14px]` | 500 | normal | uppercase, `tracking-[0.2em]` |
| Issue line | Montserrat | `text-[9px]` | 400 | normal | uppercase, `tracking-[0.15em]` |
| Hero product name | Playfair Display | `text-[26px]` | 500 | italic | capitalize |
| Small product name | Montserrat | `text-[11px]` | 500 | normal | capitalize |
| Price | Montserrat | `text-[10px]` | 500 | normal | none |
| CTA | Montserrat | `text-[11px]` | 600 | normal | capitalize |

> **Exception**: This template uses `uppercase` on the brand name and issue line as a deliberate editorial/magazine design choice (like a magazine masthead).

### Layout — 1 Product (Full Editorial Spread)
```
┌─────────────────────────────┐
│  bg: #1a1a1a                │
│                             │
│  ▬▬▬▬▬ (full-width gold     │  ← 2px tall, #c9a87c, top-0
│         accent stripe)      │
│                             │
│  FRESH BLOOM                │  ← small, tracked, cream
│  CURATED COLLECTION         │  ← tiny issue line, gold/60%
│                             │
│  ┌──────────────────────┐   │
│  │                      │   │
│  │                      │   │
│  │    HERO IMAGE        │   │  ← full width, h-[320px]
│  │    (full color)      │   │    rounded-lg
│  │                      │   │
│  │                      │   │
│  └──────────────────────┘   │
│                             │
│  Product Name               │  ← Playfair italic, large
│  ₹1,499                     │  ← gold price
│  Description text here...   │  ← cream/60%, 2 lines max
│                             │
│  ┌─────────────────────┐    │
│  │   Order Now          │    │  ← gold bg, dark text, rounded-md
│  └─────────────────────┘    │
│                             │
└─────────────────────────────┘
```

### Layout — 2 Products
```
┌─────────────────────────────┐
│  ▬▬▬▬▬ gold stripe          │
│  FRESH BLOOM                │
│  CURATED COLLECTION         │
│                             │
│  ┌──────────────────────┐   │  ← Hero (first product)
│  │    LARGE IMAGE       │   │    h-[240px], rounded-lg
│  └──────────────────────┘   │
│  Hero Name      ₹price     │  ← Playfair italic + gold price
│  ───────────────────────    │  ← 1px gold/15% divider
│  ┌──────┐                   │
│  │ img  │  Name             │  ← Second product: small thumbnail
│  │      │  ₹price           │    (80×80px) + text right-aligned
│  └──────┘                   │
│                             │
│  [ Order Now ]              │
└─────────────────────────────┘
```

### Layout — 3-4 Products
```
┌─────────────────────────────┐
│  ▬▬▬▬▬ gold stripe          │
│  FRESH BLOOM                │
│  CURATED COLLECTION         │
│                             │
│  ┌──────────────────────┐   │  ← Hero (first product)
│  │    LARGE IMAGE       │   │    h-[200px], rounded-lg
│  └──────────────────────┘   │
│  Hero Name      ₹price     │
│  ───────────────────────    │
│  ┌──────┐ ┌──────┐ ┌──────┐│  ← Remaining products: horizontal
│  │ img  │ │ img  │ │ img  ││    strip of small square thumbnails
│  │      │ │      │ │      ││    (80×80px each), names below
│  │ name │ │ name │ │ name ││    grid with gap-3
│  │₹price│ │₹price│ │₹price││
│  └──────┘ └──────┘ └──────┘│
│                             │
│  [ Order Now ]              │
└─────────────────────────────┘
```

First product is always the hero. Remaining products display as small thumbnails in a horizontal row.

---

## Template 7: Luxe (NEW)

**Mood**: Cartier catalogue. Ritz-Carlton menu. Champagne, gold hairlines, generous whitespace.

### Colors
| Token | Value |
|---|---|
| Background | `#f5f0e8` (champagne) |
| Inner frame border | `#c9a87c` (muted gold) at 30% opacity, 1px |
| Inner frame inset | `12px` from all edges |
| Text primary | `#3d2e1f` (espresso) |
| Text secondary | `#8b7355` (warm taupe) |
| Price | `#3d2e1f` |
| CTA bg | `transparent` |
| CTA border | `1px solid #3d2e1f` |
| CTA text | `#3d2e1f` |
| Decorative dot | `#c9a87c` |
| Card surface | `#ffffff` |
| Card border | `#e8dfd3` |

### Typography
| Element | Font | Size | Weight | Style | Transform |
|---|---|---|---|---|---|
| Brand name | DM Serif Display | `text-[34px]` | 400 | normal | capitalize |
| Subtitle | Montserrat | `text-[9px]` | 400 | normal | `tracking-[0.15em]`, uppercase |
| Product name | DM Serif Display | `text-[14px]` | 400 | normal | capitalize |
| Price | Montserrat | `text-[11px]` | 500 | normal | none |
| CTA | Montserrat | `text-[11px]` | 500 | normal | capitalize |

> **Exception**: `uppercase` allowed on the tiny subtitle line only.

### Layout
```
┌─────────────────────────────┐
│  bg: #f5f0e8 (champagne)    │
│    ┌───────────────────┐    │  ← Gold hairline frame
│    │   padding: 20px   │    │    inset 12px from edges
│    │                   │    │    border: 1px solid #c9a87c/30
│    │  ● ● ●            │    │  ← 3 tiny gold dots, centered
│    │                   │    │
│    │  Brand Name       │    │  ← DM Serif Display, centered
│    │  FINEST BLOOMS    │    │  ← tiny tracked subtitle
│    │                   │    │
│    │ ┌───────┐┌───────┐│    │  ← White cards
│    │ │ image ││ image ││    │    bg: white, border: #e8dfd3
│    │ │ name  ││ name  ││    │    rounded-xl
│    │ │ price ││ price ││    │
│    │ └───────┘└───────┘│    │
│    │ ┌───────┐┌───────┐│    │
│    │ │ image ││ image ││    │
│    │ │ name  ││ name  ││    │
│    │ │ price ││ price ││    │
│    │ └───────┘└───────┘│    │
│    │                   │    │
│    │  [ Order Now ]    │    │  ← Ghost button, dark border
│    │                   │    │
│    └───────────────────┘    │
│                             │
└─────────────────────────────┘
```

### Gold Hairline Frame
- Positioned `absolute`, inset `12px` from all edges
- Border: `1px solid rgba(201, 168, 124, 0.3)`
- `rounded-lg`
- `pointer-events-none`

### Decorative Dots
Three `4×4px` circles, `bg-[#c9a87c]`, `rounded-full`, spaced `8px` apart, centered horizontally at the top of the inner frame.

### Product Card Inner Layout
- Padding: `p-2.5`
- Shape: `rounded-xl`
- Border: `1px solid #e8dfd3`
- Shadow: none (clean, flat)
- Image: `rounded-lg`, `object-cover`, natural colors
- Name: centered, DM Serif Display
- Price: centered, Montserrat

---

## Template 8: Polaroid (NEW)

**Mood**: Nostalgic, analog, handwritten feel. Products displayed as polaroid-style photos on a warm textured surface.

### Colors
| Token | Value |
|---|---|
| Background | `#e8e4de` (warm linen gray) |
| Noise texture | `opacity-[0.03]` (subtle paper grain) |
| Polaroid surface | `#ffffff` |
| Polaroid shadow | `0 2px 8px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.06)` |
| Text primary | `#3d3630` (dark warm brown) |
| Price | `#8b7e6b` |
| CTA bg | `#3d3630` |
| CTA text | `#f5f0e8` |
| Brand text | `#3d3630` |
| Tape accent | `rgba(201, 168, 124, 0.25)` |

### Typography
| Element | Font | Size | Weight | Style | Transform |
|---|---|---|---|---|---|
| Brand name | Cormorant | `text-[30px]` | 500 | italic | capitalize |
| Tagline | Montserrat | `text-[9px]` | 400 | normal | `tracking-[0.08em]`, lowercase |
| Product name | Cormorant | `text-[14px]` | 600 | normal | capitalize |
| Price | Montserrat | `text-[10px]` | 500 | normal | none |
| CTA | Montserrat | `text-[12px]` | 500 | normal | capitalize |

### Layout
```
┌─────────────────────────────┐
│  bg: #e8e4de + paper noise  │
│        padding: 20px        │
│                             │
│    Brand Name               │  ← Cormorant italic, centered
│    curated with care        │  ← tiny lowercase tagline
│                             │
│  ┌─────────┐  ┌─────────┐  │  ← Polaroid-style cards:
│  │┌───────┐│  │┌───────┐│  │    White bg, thick bottom padding
│  ││ image ││  ││ image ││  │    for the "label area"
│  ││       ││  ││       ││  │    Each rotated slightly:
│  │└───────┘│  │└───────┘│  │    card 1: rotate(-2deg)
│  │  name   │  │  name   │  │    card 2: rotate(1.5deg)
│  │  price  │  │  price  │  │    card 3: rotate(-1deg)
│  └─────────┘  └─────────┘  │    card 4: rotate(2deg)
│  ┌─────────┐  ┌─────────┐  │    Drop shadow for depth
│  │┌───────┐│  │┌───────┐│  │
│  ││ image ││  ││ image ││  │
│  │└───────┘│  │└───────┘│  │
│  │  name   │  │  name   │  │
│  │  price  │  │  price  │  │
│  └─────────┘  └─────────┘  │
│                             │
│      [ Order Now ]          │  ← dark brown pill
│                             │
└─────────────────────────────┘
```

### Polaroid Card Spec
- **Outer**: `bg-white`, `p-2 pb-6` (thick bottom for label), `rounded-sm` (intentionally tight radius, like real polaroids)
- **Shadow**: `shadow-[0_2px_8px_rgba(0,0,0,0.10),0_1px_2px_rgba(0,0,0,0.06)]`
- **Image area**: `rounded-none` (polaroids have sharp image edges), `object-cover`, `bg-gray-100`
- **Rotation**: Each card has a slight CSS `rotate` for a scattered feel:
  ```
  Card index 0: transform: rotate(-2deg)
  Card index 1: transform: rotate(1.5deg)
  Card index 2: transform: rotate(-1deg)
  Card index 3: transform: rotate(2deg)
  ```
- **Name**: Centered below image in the wide bottom padding area, `mt-2`
- **Price**: Below name, `mt-0.5`

### Tape Decorative Element (Optional, 1 per card)
A small diagonal rectangle at the top-center of each polaroid to simulate "tape":
```jsx
<div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-10 h-3 bg-[#c9a87c]/25 rotate-[-3deg] rounded-sm" />
```

---

## File Structure

Each template is a separate file in `src/components/templates/`:

```
src/components/templates/
├── ClassicTemplate.jsx      (redesigned)
├── BotanicalTemplate.jsx    (redesigned)
├── ModernTemplate.jsx       (redesigned)
├── MinimalTemplate.jsx      (NEW)
├── WatercolorTemplate.jsx   (NEW)
├── EditorialTemplate.jsx    (NEW)
├── LuxeTemplate.jsx         (NEW)
└── PolaroidTemplate.jsx     (NEW)
```

### Component Props (Same for All)
```jsx
function TemplateName({ products, brandName, ctaText })
```

### Empty State (Same for All)
When `products.length === 0`, render a centered message:
- Font: template's serif font, italic, `text-xl`, `opacity-40`
- Text: "Add products to see preview"
- Background: template's background color

### CardPreview.jsx Update
Import all 8 templates and add them to the switch:
```jsx
import MinimalTemplate from './templates/MinimalTemplate';
import WatercolorTemplate from './templates/WatercolorTemplate';
import EditorialTemplate from './templates/EditorialTemplate';
import LuxeTemplate from './templates/LuxeTemplate';
import PolaroidTemplate from './templates/PolaroidTemplate';

// In the switch:
case 'minimal': return <MinimalTemplate {...props} />;
case 'watercolor': return <WatercolorTemplate {...props} />;
case 'editorial': return <EditorialTemplate {...props} />;
case 'luxe': return <LuxeTemplate {...props} />;
case 'polaroid': return <PolaroidTemplate {...props} />;
```

### CardForm.jsx Template Selector Update
Replace the 3-button row with:
```jsx
const templates = [
  { id: 'classic', label: 'Classic', swatch: '#faf9f6' },
  { id: 'botanical', label: 'Botanical', swatch: '#2a4a20' },
  { id: 'modern', label: 'Modern', swatch: '#0f0f0f' },
  { id: 'minimal', label: 'Minimal', swatch: '#ffffff' },
  { id: 'watercolor', label: 'Watercolor', swatch: '#fdf2f0' },
  { id: 'editorial', label: 'Editorial', swatch: '#1a1a1a' },
  { id: 'luxe', label: 'Luxe', swatch: '#f5f0e8' },
  { id: 'polaroid', label: 'Polaroid', swatch: '#e8e4de' },
];
```

---

## Summary Cheat Sheet

| # | Template | Bg Color | Serif Font | Mood |
|---|---|---|---|---|
| 1 | Classic | `#faf9f6` warm white | Cormorant | Parisian florist |
| 2 | Botanical | `#2a4a20` deep moss | Cormorant italic | Midnight greenhouse |
| 3 | Modern | `#0f0f0f` true dark | Cormorant light | Art gallery |
| 4 | Minimal | `#ffffff` pure white | Cormorant + Montserrat | Aesop / Byredo |
| 5 | Watercolor | `#fdf2f0` blush | Lora italic | Wedding invitation |
| 6 | Editorial | `#1a1a1a` near-black | Playfair Display | Kinfolk magazine |
| 7 | Luxe | `#f5f0e8` champagne | DM Serif Display | Cartier catalogue |
| 8 | Polaroid | `#e8e4de` warm linen | Cormorant italic | Analog nostalgia |
