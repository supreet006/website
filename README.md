# NOIR ATELIER — Clothing Brand Website

A polished, editorial-style e-commerce front-end for a fictional quiet-luxury
clothing label, built with **Next.js 16**, **React 19** and **Tailwind CSS 4**.

## ✨ What's inside

**Home page** (`/`) — a full editorial landing experience:

- Full-viewport hero with staggered entrance animation and a glassmorphism
  featured-product chip (quick add)
- Infinite marquee ticker
- Numbered, hairline-ruled sections in classic fashion-editorial style:
  Collections (staggered grid) → New Arrivals → Our Craft (image collage,
  values, stats) → The Winter Edit (full-bleed dark campaign banner) →
  Testimonials → Newsletter

**Shop** (`/shop`) — filterable catalogue:

- Category pills (All / Women / Men / Accessories)
- Sorting (Featured, Newest, price low→high / high→low)
- Sticky filter bar, live piece count

**Shopping bag** — fully working client-side cart:

- Slide-over drawer with quantity steppers, remove, subtotal
- Free-shipping progress meter ($150 threshold)
- Persisted to `localStorage` (SSR-safe via `useSyncExternalStore`)
- Animated bag badge in the navbar

## 🎨 Design system

| Token   | Value     | Use                          |
| ------- | --------- | ---------------------------- |
| `ink`   | `#171410` | text, dark sections          |
| `paper` | `#f7f4ed` | page background              |
| `sand`  | `#ece5d7` | image placeholders, bands    |
| `clay`  | `#a44a24` | accent (eyebrows, CTAs, tags)|
| `line`  | `#ddd4c3` | hairline rules and borders   |

- **Display type:** Cormorant Garamond (serif, italic accents)
- **Body type:** Jost (geometric sans)
- **Motion:** scroll reveals (IntersectionObserver), hover zooms, marquee,
  entrance choreography — all respecting `prefers-reduced-motion`

## 🚀 Getting started

```bash
npm install
npm run dev     # development → http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
```

## 🗂 Structure

```
app/
  layout.tsx        fonts, metadata, cart provider, chrome
  page.tsx          home — composed from section components
  shop/page.tsx     shop-all page (metadata + grid)
  globals.css       design tokens + motion utilities
  icon.svg          favicon monogram
components/
  navbar.tsx        scroll-aware bar, announcement strip, mobile menu
  cart-context.tsx  localStorage-backed cart store
  cart-drawer.tsx   slide-over bag
  product-card.tsx  hover-zoom card with quick add
  home/             hero, collections, new-arrivals, craft, spotlight, …
  reveal.tsx        IntersectionObserver fade-up wrapper
  marquee.tsx       infinite ticker
  icons.tsx         inline SVG icon set
lib/products.ts     product catalogue + categories + pricing
```

Product photography is served from Unsplash (verified remote patterns in
`next.config.ts`). Checkout is intentionally not connected — this is a
front-end showcase.
