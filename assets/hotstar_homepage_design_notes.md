# Hotstar Home Page Design Notes

## 1. Layout Structure

- **Overall Layout:**  
  - Full viewport width, soft dark theme background (#111425 observed, set as `--bg-canvas`).
  - Uses vertical scroll; sticky/fixed top navigation bar.
  - Main structure:  
    - Top App Bar/Nav (horizontal, left-aligned logo, right-aligned icons),
    - Main Hero Banner (carousel/media spotlight with info overlay + CTAs),
    - Horizontal tabs/category filters (overflow-scrollable pills),
    - Rows of horizontally-scrollable carousels/tiles (“Latest Releases”, etc.).

- **Main Content Padding:**  
  - Left/right: ~40px outer on large screens, ~16–20px on inner elements.
  - Top: Nav bar height + ~24px (main content offset).
  - Section vertical spacing: 32px–40px between key content blocks.

---

## 2. Navigation

- **Header / App Bar:**
  - Background: solid deep black (`--nav-bg: #111425`)
  - Height: ~64px
  - Elements (from left to right):
    - Hamburger menu icon (left-aligned, 32x32px).
    - Hotstar logo (next to hamburger, height ≈ 40px).
    - Space/gap.
    - Possible nav tabs/categories (Sports, TV, Movies, etc; not fully visible here).
    - Profile/user icon, notifications icon (rightmost, 32x32px).
  - All icons are white (`--icon-default: #fff`), interactive with hover state.

---

## 3. Hero/Spotlight Banner (Main Carousel)

- **Image:** Full-width, min 450px height, responsive/fills container, covers backdrop with overlay gradient (black 70–90% opacity at bottom).
- **Overlay Content:**
  - Top: Category pill (e.g., “HIGHLIGHTS | QUALIFIER 1”, small, all-caps, weight 600, pill with yellow/orange background `#FFA726` for accent, white text).
  - Title: Large, “PBKS vs RCB”, left aligned, white “PBKS”, yellow “vs”, white “RCB”, font size: 2.5–3rem, bold/semibold.
  - Subheader/Meta: “RCB won by 4 wickets, enter final”, smaller, weight 400–500, #b0adbc color.
  - Date & Time row (optional): “28th May, 2025 | 7:00pm · Cricket Final”, font size: 1rem, muted white.
  - Short description: 1–2 lines, font size: 1rem, #b0b0b9.
  - Primary CTA button: “Watch Now”, blue gradient bg (#2463eb–#0948b3, hover deepens), bold white text, slightly rounded (radius: 8px), size: 48px height, 2rem min width.
  - Secondary row: Small inline thumbnails for “next in carousel”, horizontal, circular/square images, shadowed, 36x36px.

- **Spacing:**
  - All overlay content padded left (~48px), bottom (~64px), max width constraint ~600px for text blocks.
  - Element margin (vertical): 8–16px between text/button.

---

## 4. Tabs / Category Filters

- **Tabs:** Horizontally scrollable, immediately under hero.  
  - Each: pill-shaped, soft dark background (#1A1C20), white text, semibold.
  - Active tab has accent blue bottom border or background (`#2463eb` to `#0948b3` gradient), font weight 700, wider padding (left/right: 28px, height: 42px).
  - Gaps between tabs: 8–16px.

---

## 5. Carousels / Content Rows

- **Each Section (“Latest Releases”, etc.):**
  - Section Title: Left-aligned, font size 1.5–2rem, bold, white/title color.
  - Carousel: horizontal flex row, snap-scrollable on hover/touch, overflow-x.
    - Tile/card: poster image (3:4 or 16:9 ratio, raised/shadow, slight radius 12px), bottom label overlay with title (bold, white), optional meta badge.
    - Card width: 192–220px; card margin-right: 16–20px.
    - Section padding-top: 32px; title margin-bottom: 16px.

---

## 6. Colors

```
:root {
  --bg-canvas: #111425;
  --nav-bg: #111425;
  --hero-overlay-gradient: linear-gradient(180deg, rgba(17,20,37,0) 50%, rgba(17,20,37,0.9) 100%);
  --text-primary: #ffffff;
  --text-secondary: #b0adbc;
  --text-meta: #b0b0b9;
  --accent-primary: #2463eb;
  --accent-gradient: linear-gradient(90deg,#2463eb,#0948b3);
  --button-bg: linear-gradient(90deg,#2463eb,#0948b3);
  --button-text: #fff;
  --tab-bg: #1A1C20;
  --tab-active-bg: #2463eb;
  --highlight-pill-bg: #FFA726;
  --badge-bg: #FFA726;
  --icon-default: #fff;
}
```

---

## 7. Typography

- **Font Family:** "Helvetica Neue", Arial, sans-serif
- **Hero Title:** 2.5–3rem, 700, all-caps or capitalize, white/yellow accent.
- **Subheadline/Meta:** 1.125–1.25rem, 400–500, #b0adbc.
- **Section Titles:** 1.5–2rem, 600–700, white.
- **Body:** 1rem, 400, white/secondary.
- **Category Tabs:** 1rem, 600 (active: 700), white.
- **Button:** 1.125rem, 700, uppercase, white.
- **Badges/pills:** 0.85rem, 600, white/accent bg, slightly letter-spaced.

---

## 8. Spacing & Sizing

- **Nav/App Bar:** 64px height, 40px horizontal padding.
- **Main Container:** 0 40px (desktop), 0 16–24px (mobile).
- **Carousel Card:** 192–220px width, 12px border-radius, 16px gap.
- **Section Spacing:** 32px–40px vertical separation.
- **Button:** 48px height, min-width 120px, 2rem padding sides, 8px radius.
- **Tabs:** 42px height, 28px horizontal padding, 16px gap.

---

## 9. Images & Visuals

- **Hero:** Full-bleed, covers complete area.
- **Tiles:** Poster images, 3:4 or 16:9 ratio, with shadow.
- **Carousel “peek”:** Partial next-card available at row end.
- **Icons:** SVG or font icons, 32x32px.

---

## 10. Interactive Effects

- **Buttons:** Subtle box-shadow on hover, bg gradient intensifies, transitions (0.2s ease).
- **Tabs:** Active state blue underline or solid bg, smooth transitions.
- **Cards:** Elevate on hover (0.5rem shadow), cursor pointer.
- **Nav icons:** Opacity or bg highlight on hover/focus.

---

## 11. Responsiveness

- **>= 1200px:** Max content width 1400px centered, 40px side paddings, larger font sizes (as above).
- **< 1200px:** Container padding reduces to 24px.
- **< 900px:** Stack nav items/tiles, carousel scroll becomes draggable, content shrinks.
- **< 600px:** Tab row becomes scrollable, padding drops to 12px, hero overlay text shrinks (~2rem title), cards shrink to 140px width.

---

## 12. Component Hierarchy (Outline)

- `.app-header`
  - `.nav-menu-icon` (SVG)
  - `.logo`
  - `.nav-tabs` (optional categories)
  - `.profile-icon` / `.notif-icon`
- `.hero-banner`
  - `.hero-background-image` (with overlay)
  - `.overlay-content`
    - `.category-pill`
    - `.hero-title`
    - `.hero-meta`
    - `.hero-date-time`
    - `.hero-description`
    - `.cta-row`
      - `.primary-cta-button`
      - `.carousel-indicator-thumbnails`
- `.category-tabs-row` (tab pills)
- `.content-section`
  - `.section-title`
  - `.carousel-row`
    - `.carousel-card` (repeat)

---

## 13. Additional Notes

- All corners: 8–12px radius (rounded but not pill-shaped except pills).
- Focus indicators: subtle blue for accessibility (2px outline).
- No visible borders except cards (shadowed).
- Pill elements padded extra (tab/category).
- All body text left-aligned, labels/title never truncate on desktop.
- Use CSS grid/flex for row layouts.

---

## 14. Suggested CSS layout primitives

- Use Flexbox for:
  - Top bar/header
  - Row carousels
  - Tab strips
- Use Grid for:
  - Section containers (optional; for multi-row expansion)
- Use absolute/fixed positioning for:
  - Hero overlay over image

---

> **This technical brief is meticulously extracted from the Hotstar Home Page image and is suitable for precise UI engineering and validation.**
