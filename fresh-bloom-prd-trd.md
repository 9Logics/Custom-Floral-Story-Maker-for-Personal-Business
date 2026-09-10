# Fresh Bloom Story Generator — Product & Technical Requirements Document

**Product:** Fresh Bloom Story Generator — an internal tool for the "Fresh Bloom" floral sub-brand to generate downloadable Instagram Story product cards  
**Doc type:** PRD + TRD (combined)  
**Status:** Draft v1.0  
**Owner:** Anura (Floral Art / Fresh Bloom)  

---

## 1. Overview

Fresh Bloom Story Generator is a single-user, browser-based tool that lets the Fresh Bloom team create professional Instagram Story images showcasing their floral products. The operator adds products (name, price in INR, optional description, product photo), chooses a visual template, and the tool automatically arranges products into 9:16 story cards (max 4 products per card), splits overflow into multiple cards, and exports each card as a high-resolution PNG ready for Instagram upload.

The product's differentiator is **speed and visual consistency**: instead of opening Canva or Photoshop every day to lay out product photos and prices, the operator fills in a form, picks a template, and downloads polished, brand-consistent story images in under two minutes.

## 2. Problem Statement

The Fresh Bloom team currently has no fast, repeatable way to generate Instagram Story product cards. Their options are:
- **Manual design tools** (Canva, Photoshop) — slow, requires design skill, inconsistent output across team members.
- **Generic social media schedulers** — overkill for a small floral business; often subscription-based and not tailored to product showcase stories.
- **No tool at all** — posting text-only or unformatted photos, which looks unprofessional for a premium floral boutique.

There's no lightweight, purpose-built tool that takes product data as input and produces brand-consistent, export-ready Instagram Story images as output. Fresh Bloom Story Generator fills that gap.

## 3. Goals

- **G1:** Let the operator create product listing story cards by entering product name, price (INR), optional description, and uploading a product photo.
- **G2:** Automatically split an arbitrary number of products into story cards with a maximum of 4 products per card, requiring zero layout decisions from the operator.
- **G3:** Provide multiple visual template styles so the brand can vary its Instagram aesthetic (e.g., a different look each day of the week).
- **G4:** Export each story card as a high-resolution PNG (1080×1920px) suitable for direct Instagram Story upload.
- **G5:** Keep the entire workflow completable in under 2 minutes for a typical daily batch (4–8 products).
- **G6:** Ensure the tool is mobile-friendly so the operator can generate cards from a phone if needed.
- **G7:** Deploy as a static site (GitHub Pages) with zero backend, zero authentication, and zero ongoing cost.

### Non-goals (v1)
- No user accounts, login, or multi-user collaboration.
- No direct Instagram API integration or auto-posting.
- No product data persistence across sessions (the tool is stateless; products are entered fresh each session).
- No inventory management, order tracking, or e-commerce functionality.
- No video or animated story generation — static images only.
- No pricing logic, discounts, or currency conversion — prices are entered as free-text strings (always in INR).

## 4. Target User / Persona

**Primary persona:** The Fresh Bloom team member (likely the owner or a single employee) responsible for daily Instagram content. They know their product catalog, have product photos on their phone or computer, and need to turn those into story cards quickly. They are not a designer and should not need to make layout, typography, or color decisions — the templates handle that.

## 5. User Stories

| ID  | As a user, I want to...                                             | So that...                                                                 |
|-----|----------------------------------------------------------------------|----------------------------------------------------------------------------|
| U1  | Add a product with a name, price, optional description, and photo   | I can include it in a story card                                           |
| U2  | Add as many products as I need in a single session                  | I can batch-create cards for the day's offerings                           |
| U3  | Have the tool automatically split products into groups of 4         | I don't have to decide which products go on which card                     |
| U4  | See a live preview of the generated story cards as I add products   | I can verify the layout looks correct before exporting                     |
| U5  | Choose from multiple visual templates (Classic, Botanical, Modern)  | I can vary the brand's Instagram aesthetic                                 |
| U6  | Set the brand name and call-to-action text globally                 | Every card is consistently branded without re-typing                       |
| U7  | Export all generated cards as high-res PNGs with one click           | I can upload them to Instagram immediately                                 |
| U8  | Remove a product I added by mistake                                 | My cards only show the products I intend                                   |
| U9  | Use the tool on my phone                                            | I can create cards on the go from the shop floor                           |
| U10 | See a beautiful placeholder when I haven't uploaded a photo yet     | The preview still looks professional while I'm building the card           |

## 6. Functional Requirements

### 6.1 Product management
- **FR1:** User can add a product with: name (text, required), price (text, required, INR assumed), description (text, optional), and image (file upload, optional).
- **FR2:** User can remove any product; removal is immediate (no confirmation required in v1, since data is ephemeral and the session is short-lived).
- **FR3:** There is no hard limit on the number of products. The tool must handle at least 20 products (5 story cards) without performance degradation.
- **FR4:** Each product is assigned a unique ID (UUID v4) on creation.
- **FR5:** Empty state is shown when zero products exist, with instructional text ("No products added — Add a product to generate a story card").

### 6.2 Product image handling
- **FR6:** Product images are uploaded from the device filesystem via a file input (`<input type="file" accept="image/*">`).
- **FR7:** Uploaded images are read as base64 data URLs via `FileReader.readAsDataURL()` and stored in component state — they are **not** uploaded to any server.
- **FR8:** When no image is uploaded, a branded placeholder image (`/placeholder.jpg`) is displayed in both the form thumbnail and the story card template.

### 6.3 Story card generation (auto-chunking)
- **FR9:** Products are automatically split into groups ("pages") of **maximum 4 products per card**.
- **FR10:** The chunking algorithm is simple sequential slicing: products 1–4 go on card 1, products 5–8 on card 2, etc. No re-ordering or optimization is applied.
- **FR11:** Each chunk is rendered as an independent story card preview in the right pane.
- **FR12:** The number of generated cards is displayed to the user ("N story cards generated").

### 6.4 Template system
- **FR13:** Three visual templates are available in v1:
  - **Classic** — Light cream background, serif typography (Playfair Display), minimal borders, rounded product cards, forest-green brand header, pill-shaped CTA button.
  - **Botanical** — Dark forest-green background with blurred organic blob shapes, glassmorphic translucent product cards, serif brand header, amber CTA button.
  - **Modern** — Dark zinc/charcoal background, stark uppercase sans-serif typography, grayscale product images with screen blend mode, gradient overlay with product info, full-width white CTA bar.
- **FR14:** Template selection is global — all story cards in a session use the same template.
- **FR15:** Switching templates re-renders all previews immediately; there is no "apply" step.

### 6.5 Global settings
- **FR16:** User can set the **brand name** (text input, default: "Fresh Bloom"). This value is rendered in the header area of every story card template.
- **FR17:** User can set the **call-to-action text** (text input, default: "Order Now"). This value is rendered in the footer/CTA area of every story card template.

### 6.6 Story card layout and dimensions
- **FR18:** Each story card is rendered at a base size of **360×640px** (9:16 aspect ratio) in the DOM.
- **FR19:** The preview container applies a CSS `transform: scale(0.75)` with `transform-origin: top left`, displaying the card at **270×360px** on screen while maintaining the full 360×640px internal layout for export fidelity.
- **FR20:** Each template adapts its internal grid layout based on product count:
  - 1 product: single column, image fills most of the vertical space.
  - 2 products: single column, 2 rows.
  - 3–4 products: 2 columns, 2 rows.

### 6.7 Export
- **FR21:** A single "Export All Cards" button triggers sequential export of all rendered story cards.
- **FR22:** Export uses `html2canvas` to rasterize each `.story-card-export` DOM element to a `<canvas>`, then converts to a PNG data URL and triggers a browser download.
- **FR23:** Export scale is **3×** (360px × 3 = **1080px** width, 640px × 3 = **1920px** height), matching Instagram Story's recommended resolution.
- **FR24:** Before export, the preview pane is scrolled to `(0, 0)` and the CSS `transform: scale(0.75)` is removed in the cloned DOM (via `html2canvas`'s `onclone` callback) so the captured image is at full 360×640px base size × 3 scale = 1080×1920px.
- **FR25:** Export files are named `fresh-bloom-story-{N}.png` where N is the 1-indexed card number.
- **FR26:** The export button is disabled when zero products exist.

### 6.8 Responsive / mobile layout
- **FR27:** On desktop (≥768px / `md` breakpoint), the app renders as a two-column layout: left 1/3 is the form panel, right 2/3 is the preview pane. Both columns scroll independently.
- **FR28:** On mobile (<768px), the layout stacks vertically: form panel on top, preview pane below, using the browser's natural scroll.
- **FR29:** The "Export All Cards" button expands to full width on small viewports for easy tap targets.
- **FR30:** Template selector buttons stack vertically on small viewports and display as a 3-column grid on wider screens.

## 7. Non-Functional Requirements

- **NFR1 (Performance):** The app must remain responsive with at least 20 products (5 story cards) rendered simultaneously, including live preview updates on every keystroke.
- **NFR2 (Privacy):** No data leaves the browser. Images are processed client-side as base64 data URLs. No analytics, tracking, or telemetry.
- **NFR3 (Export quality):** Exported PNGs must be exactly 1080×1920px at 72 DPI minimum, suitable for direct Instagram Story upload without visible pixelation.
- **NFR4 (Responsiveness):** The UI must be fully usable on a mobile viewport (360px wide) as well as desktop widths (1440px+).
- **NFR5 (No authentication):** Zero login, zero accounts. The tool is accessed via a URL and works immediately.
- **NFR6 (Stateless):** The tool does not persist data across sessions. Each page load starts fresh. This is a deliberate simplicity constraint, not a limitation to fix in v1.
- **NFR7 (Deployability):** The tool must build to a static `dist/` folder deployable to GitHub Pages with no server-side runtime.
- **NFR8 (Accessibility baseline):** Interactive elements (buttons, file inputs, text inputs) must have visible focus states and be keyboard-operable.

## 8. Edge Cases & Constraints

- **EC1:** A product with no image uploaded must render the branded placeholder (`/placeholder.jpg`) in both the form thumbnail and the story card — never a broken image icon or empty space.
- **EC2:** A product with no name must show "Product Name" as fallback text in the story card. A product with no price must show "Price" as fallback.
- **EC3:** Exporting while the preview pane is scrolled to a non-zero position must not produce cropped or blank images — the pane is scrolled to (0,0) before capture.
- **EC4:** The CSS `transform: scale(0.75)` on the card preview must be removed in the cloned DOM during export so `html2canvas` captures the full 360×640px layout, not the visually-scaled 270×480px version.
- **EC5:** Adding a product and immediately exporting (before the image finishes loading via FileReader) should still export cleanly — the placeholder image will appear in place of the not-yet-loaded photo.
- **EC6:** Removing all products should disable the export button and show the empty state in the preview.
- **EC7:** Template switching with products already entered must re-render all cards instantly — no stale previews from the previous template.
- **EC8:** On mobile, the story card previews must not cause horizontal overflow of the page itself.

## 9. Success Metrics (qualitative, v1)

Since this is an internal tool for a small team, success is defined qualitatively:
- The operator can go from "I have 6 product photos on my phone" to "6 products across 2 story cards downloaded" in under 2 minutes.
- The exported images look professional enough that a customer viewing the Instagram Story perceives them as designed (not auto-generated).
- The operator never needs to open Canva or Photoshop for routine daily product stories.

## 10. Future Roadmap (out of scope for v1, listed for context)

- **More templates** — additional design languages (e.g., pastel/watercolor, dark luxury, seasonal/festive), potentially one per day of the week for variety.
- **Template customization** — let the user tweak colors, fonts, or logo within a template without editing code.
- **Logo upload** — replace the hardcoded `/logo.jpg` with a user-uploadable brand logo.
- **Drag-and-drop reordering** — let the user reorder products to control which ones appear on which card.
- **Product data persistence** — save the product catalog to `localStorage` so frequently-listed products can be re-used across sessions.
- **Batch image upload** — drag-and-drop multiple images at once, auto-creating one product entry per image.
- **Direct Instagram sharing** — integrate with Instagram's Content Publishing API (requires Meta Business account).
- **WhatsApp catalog export** — export cards formatted for WhatsApp Business catalog.
- **QR code on card** — embed a scannable QR code linking to the ordering page.
- **Main brand website** — a separate public-facing website for Fresh Bloom (different project, different repo).

---

# Technical Requirements Document (TRD)

## 11. Architecture Summary

Fresh Bloom Story Generator is a **React single-page application** built with Vite, styled with Tailwind CSS v4, and deployed as a static site. There is no backend, no database, and no API. All logic runs client-side in the browser.

```
┌──────────────────────────────────────────────────────────┐
│                    index.html                             │
│  Google Fonts (Inter, Playfair Display)                   │
│  <div id="root">                                         │
└──────────────┬───────────────────────────────────────────┘
               │
               ▼
┌──────────────────────────────────────────────────────────┐
│                     App.jsx                               │
│  ┌─────────────────┐    ┌──────────────────────────────┐ │
│  │   CardForm.jsx   │    │      Preview Pane            │ │
│  │  (Left Panel)    │    │  ┌────────────────────────┐  │ │
│  │  - Brand name    │    │  │  CardPreview.jsx × N   │  │ │
│  │  - CTA text      │    │  │  (9:16 wrapper)        │  │ │
│  │  - Template      │    │  │  ┌──────────────────┐  │  │ │
│  │  - Product list  │    │  │  │  Template.jsx    │  │  │ │
│  │    (add/remove)  │    │  │  │  (Classic |      │  │  │ │
│  │  - Image upload  │    │  │  │   Botanical |    │  │  │ │
│  └─────────────────┘    │  │  │   Modern)        │  │  │ │
│                          │  │  └──────────────────┘  │  │ │
│  ┌─────────────────┐    │  └────────────────────────┘  │ │
│  │ Background.jsx   │    │                              │ │
│  │ (SVG + blobs)    │    │  [Export All Cards] button   │ │
│  └─────────────────┘    └──────────────────────────────┘ │
│                                                           │
│  Chunking logic: products[] → productPages[][] (max 4)   │
│  Export logic: html2canvas → PNG download                 │
└──────────────────────────────────────────────────────────┘
```

## 12. Tech Stack

| Layer           | Choice                                      | Notes                                                                                       |
|-----------------|----------------------------------------------|---------------------------------------------------------------------------------------------|
| Framework       | React 19                                     | Functional components with hooks (`useState`)                                               |
| Build tool      | Vite 8                                       | Fast HMR in dev, static build for production                                                |
| Styling         | Tailwind CSS v4 + `@tailwindcss/vite`        | Design tokens defined via `@theme {}` in `index.css`; no `tailwind.config.js` needed        |
| Animation       | Framer Motion 13                             | `AnimatePresence` for product list enter/exit; `motion.div` for card preview entrance        |
| Icons           | Lucide React + inline SVGs                   | Lucide for form UI icons; custom inline SVGs for decorative floral elements                  |
| Image export    | html2canvas 1.4                              | Rasterizes DOM elements to `<canvas>` for PNG download                                      |
| IDs             | uuid v4                                      | Used instead of `crypto.randomUUID()` for non-HTTPS compatibility                           |
| Fonts           | Google Fonts (Inter, Playfair Display)       | Loaded via `<link>` in `index.html`; requires network access to `fonts.googleapis.com`      |
| Deployment      | GitHub Pages (planned)                       | `npm run build` → deploy `dist/` folder                                                     |

## 13. Data Model

All state is ephemeral (React `useState`). No persistence layer.

```ts
// Core entity
type Product = {
  id: string;                  // UUID v4, generated on add
  name: string;                // Product name, free text
  price: string;               // Price as display string, e.g. "₹1,499"
  description: string;         // Optional short description
  image: string;               // Base64 data URL from FileReader, or "" if none
};

// App-level state
type AppState = {
  products: Product[];         // Ordered list of all products
  brandName: string;           // Default: "Fresh Bloom"
  ctaText: string;             // Default: "Order Now"
  template: 'classic' | 'botanical' | 'modern';  // Default: "classic"
};

// Derived (not stored, computed on render)
type ProductPage = Product[];  // Max 4 products per page
// productPages: ProductPage[] = chunkProducts(products, 4)
```

Design notes:
- **No persistence** — all state lives in React `useState` and is lost on page refresh. This is intentional for v1; the tool is designed for quick, session-based use.
- **Images as data URLs** — product images are read into memory as base64 strings. This avoids any need for a file server but means large images consume browser memory. Acceptable for the expected scale (4–20 images per session).
- **Price as free text** — no parsing, validation, or formatting is applied. The user types `₹1,499` or `₹999` and it renders exactly as typed. Currency is assumed to be INR.

## 14. Component Architecture

```
src/
├── main.jsx                          # ReactDOM.createRoot entry point
├── index.css                         # Tailwind import + @theme design tokens
├── App.jsx                           # Root component, all state, chunking, export
├── components/
│   ├── Background.jsx                # Fixed decorative background (SVG blobs, noise)
│   ├── CardForm.jsx                  # Left panel: settings + product CRUD
│   ├── CardPreview.jsx               # 9:16 wrapper with CSS scale transform
│   └── templates/
│       ├── ClassicTemplate.jsx       # Light/elegant template
│       ├── BotanicalTemplate.jsx     # Green/organic template
│       └── ModernTemplate.jsx        # Dark/contrast template
└── (no other directories)
```

### Component responsibilities

| Component            | Responsibility                                                                                              |
|----------------------|-------------------------------------------------------------------------------------------------------------|
| `App.jsx`            | Holds all state (`products`, `brandName`, `ctaText`, `template`). Contains `chunkProducts()` and `exportCards()` logic. Renders `Background`, `CardForm`, and the preview pane with `CardPreview` instances. |
| `Background.jsx`     | Purely decorative. Renders a fixed, pointer-events-disabled layer with soft blurred color blobs, a subtle floral SVG, and an SVG noise texture. No props, no state. |
| `CardForm.jsx`       | Receives all state + setters as props. Renders: sticky header with logo, brand name / CTA / template inputs, and an animated product list with add/remove/upload functionality. Uses Framer Motion `AnimatePresence` for product card enter/exit animations. |
| `CardPreview.jsx`    | Receives `products` (a single chunk of ≤4), `brandName`, `ctaText`, `template`. Renders a 270×480px outer wrapper containing a 360×640px inner `div.story-card-export` scaled to 0.75 via CSS transform. Selects and renders the appropriate template component. |
| `ClassicTemplate`    | Receives `products`, `brandName`, `ctaText`. Renders a light cream layout with serif headers, rounded white product cards, and a pill-shaped green CTA. |
| `BotanicalTemplate`  | Same props. Renders a dark green layout with ambient blurred blobs, glassmorphic product cards, and an amber CTA. |
| `ModernTemplate`     | Same props. Renders a zinc-dark layout with grayscale screen-blended images, gradient overlays, and a full-width white CTA bar. |

## 15. Core Algorithms

### 15.1 Product chunking

```js
const chunkProducts = (arr, size = 4) => {
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
};
// Input:  [P1, P2, P3, P4, P5, P6]
// Output: [[P1, P2, P3, P4], [P5, P6]]
```

### 15.2 Image upload (FileReader)

```js
const handleImageUpload = (productId, event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (upload) => {
      updateProduct(productId, 'image', upload.target.result);
      // upload.target.result is a base64 data URL string
    };
    reader.readAsDataURL(file);
  }
};
```

### 15.3 Export pipeline

```
1. Scroll window and preview pane to (0, 0)
2. Select all elements with class `.story-card-export`
3. For each element:
   a. Call html2canvas(element, {
        scale: 3,          // 360 × 3 = 1080px output
        useCORS: true,
        backgroundColor: null,
        onclone: (doc) => {
          // Remove CSS scale(0.75) in cloned DOM
          // so html2canvas captures at full 360×640 base size
          doc.querySelectorAll('.story-card-export')
             .forEach(el => el.style.transform = 'none');
        }
      })
   b. Convert canvas to PNG data URL (quality 1.0)
   c. Create a temporary <a> element with download attribute
   d. Trigger click to download `fresh-bloom-story-{N}.png`
```

### 15.4 Template grid layout selection

```js
// All three templates use the same logic:
const gridClass = count === 1 ? 'grid-cols-1' :
                  count === 2 ? 'grid-cols-1' :
                  /* 3 or 4 */  'grid-cols-2';

// Row behavior:
// 1 product  → 1 col, image expands to fill (flex-1)
// 2 products → 1 col, 2 rows (grid-rows-2)
// 3-4 items  → 2 cols, 2 rows (grid-rows-2)
```

## 16. Design Tokens

Defined in `src/index.css` under `@theme {}` for Tailwind CSS v4:

| Token                       | Value                                  | Usage                                          |
|-----------------------------|----------------------------------------|-------------------------------------------------|
| `--color-brand-primary`     | `#2d4a22`                              | Forest green — headers, borders, CTA buttons   |
| `--color-brand-secondary`   | `#f4eae1`                              | Warm cream — Classic template background       |
| `--color-brand-accent`      | `#e28743`                              | Amber — Botanical CTA, Modern price highlight  |
| `--font-serif`              | `"Playfair Display", serif`            | Brand name headers, product names               |
| `--font-sans`               | `"Inter", sans-serif`                  | Body text, UI labels, form inputs               |
| `--ease-out`                | `cubic-bezier(0.23, 1, 0.32, 1)`      | Smooth deceleration for all transitions         |
| `--ease-in-out`             | `cubic-bezier(0.77, 0, 0.175, 1)`     | Symmetric easing (available, sparingly used)    |

### Animation tokens (Framer Motion)

| Animation              | Values                                                | Usage                          |
|------------------------|-------------------------------------------------------|--------------------------------|
| Product card enter     | `opacity: 0→1, y: 20→0, scale: 0.95→1` over 300ms   | CardForm product list          |
| Product card exit      | `opacity: 1→0, scale: 1→0.95` over 200ms             | CardForm product removal       |
| Preview card enter     | `opacity: 0→1, scale: 0.95→1, y: 20→0` over 400ms   | Preview pane, staggered 100ms  |
| Interactive press      | `transform: scale(0.97)` over 160ms                   | All `.interactive` elements    |

### Template-specific palettes

| Template    | Background    | Text          | Card surface           | CTA                        |
|-------------|---------------|---------------|------------------------|-----------------------------|
| Classic     | `#faf9f6`     | `gray-800`    | `white` + shadow       | `brand-primary` pill        |
| Botanical   | `#3a5a2f`     | `cream/white` | `cream/10` + blur      | `#e28743` pill              |
| Modern      | `zinc-900`    | `white`       | `zinc-800/50`          | `white` full-width bar      |

## 17. Static Assets

| File                  | Location        | Purpose                                                         |
|-----------------------|-----------------|-----------------------------------------------------------------|
| `logo.jpg`            | `public/`       | Fresh Bloom brand logo (line-art tulip), displayed in form header |
| `placeholder.jpg`     | `public/`       | Premium peony photography, used as fallback when no product image is uploaded |
| `favicon.svg`         | `public/`       | Browser tab icon                                                 |

## 18. Validation & Error Handling Requirements

- **TR1:** Product creation allows empty name/price fields — they render as placeholder text ("Product Name", "Price") in the story card rather than blocking creation. This is a deliberate UX choice: the operator can add products in any order and fill in details incrementally.
- **TR2:** Image upload accepts any file matching `image/*` MIME type. No file size validation in v1 — large images may slow the browser but will not crash it.
- **TR3:** `html2canvas` export failures (e.g., CORS issues with external images) must not crash the UI. The `useCORS: true` option is set, and images are base64 data URLs (no cross-origin requests).
- **TR4:** The export button must be disabled (`disabled` attribute + `opacity-50` + `cursor-not-allowed`) when `products.length === 0`.
- **TR5:** `uuid` is used instead of `crypto.randomUUID()` because the latter requires a Secure Context (HTTPS or localhost) — using `uuid` ensures the app works when accessed over LAN or non-HTTPS during development.

## 19. Build & Deployment

```bash
# Development
npm run dev           # Vite dev server with HMR (typically localhost:5173)

# Production build
npm run build         # Outputs to dist/ — static HTML + CSS + JS bundle

# Preview production build locally
npm run preview       # Serves dist/ folder locally

# Deploy to GitHub Pages
# Push dist/ contents to gh-pages branch, or configure GitHub Actions
```

Build output (~v1 current):
- `dist/index.html` — ~0.8 KB
- `dist/assets/index-*.css` — ~32 KB (gzipped ~6.3 KB)
- `dist/assets/index-*.js` — ~567 KB (gzipped ~162 KB, dominated by Framer Motion + React)

> **Bundle size note:** The JS bundle exceeds 500 KB due to Framer Motion (~130 KB) and React (~45 KB). For v1 this is acceptable. Future optimization could lazy-load Framer Motion or replace it with CSS transitions for simpler animations.

## 20. Testing / Acceptance Criteria

| Requirement   | Acceptance test                                                                                   |
|---------------|---------------------------------------------------------------------------------------------------|
| FR1, FR4      | Adding a product creates a new card in the form with a unique UUID; the product count increments  |
| FR2           | Clicking the trash icon on a product removes it from the list and from all previews immediately   |
| FR5           | With zero products, the form shows the empty state and the export button is disabled              |
| FR8           | A product with no uploaded image shows `placeholder.jpg` in both the form thumbnail and the story card |
| FR9, FR10     | Adding 5 products produces exactly 2 story cards (4 + 1)                                          |
| FR9, FR10     | Adding 8 products produces exactly 2 story cards (4 + 4)                                          |
| FR9, FR10     | Adding 9 products produces exactly 3 story cards (4 + 4 + 1)                                      |
| FR13, FR15    | Switching template from Classic to Botanical re-renders all story cards in the Botanical style     |
| FR16, FR17    | Changing brand name or CTA text updates all visible story cards immediately                        |
| FR21–FR25     | Exporting with 2 story cards downloads exactly 2 PNG files named `fresh-bloom-story-1.png` and `fresh-bloom-story-2.png` |
| FR23          | Exported PNG dimensions are exactly 1080×1920 pixels                                               |
| FR27–FR28     | At 375px viewport width, the form stacks above the preview pane with no horizontal overflow        |
| FR29          | At 375px viewport width, the Export button is full-width and easily tappable                       |
| NFR3          | Opening an exported PNG in an image editor confirms 1080×1920px resolution                         |
| EC1           | A product with no image never shows a broken `<img>` icon in any template                          |
| EC3           | Exporting while scrolled midway through the preview pane still produces complete, uncropped images |
| EC4           | Exported images are at full resolution (not scaled down by the 0.75 preview transform)            |

## 21. Glossary

- **Story card**: A single 9:16 image (1080×1920px) containing up to 4 products, the brand name, and a call-to-action — designed to be uploaded as an Instagram Story.
- **Template**: A visual design language applied to story cards. Each template defines its own colors, typography, layout, and visual effects while accepting the same data (products, brand name, CTA).
- **Chunking**: The automatic process of splitting an arbitrary list of products into groups of maximum 4, each group rendered as one story card.
- **CTA (Call to Action)**: The text displayed on the button/bar at the bottom of each story card (e.g., "Order Now", "Order Here"). The user plans to overlay an Instagram link sticker on top of this area.
- **Export**: The process of converting a rendered story card (DOM element) into a downloadable PNG image using `html2canvas`.
- **INR**: Indian Rupee (₹). All prices in the tool are assumed to be in INR and entered as free-text strings.
