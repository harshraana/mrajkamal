# M Rajkamal – Copilot Instructions

> Every prompt goes through the `next-best-practices` skill before execution.
> Read `.agents/skills/next-best-practices/SKILL.md` and all referenced sub-documents before generating any Next.js code.

---

## Project Overview

**M Rajkamal** is a premium furniture store located in Dadar West, Mumbai. This is a Next.js 16 (App Router) marketing/catalogue website for the store, which is an authorised Godrej Interio dealer. The site displays furniture collections, product details, customer testimonials, and includes an admin CMS for managing products and home page content.

**Stack:**

- Next.js `16.2.4` (App Router, React Server Components)
- React `19.2.4`
- TypeScript (strict)
- MongoDB + Mongoose (products, home content)
- NextAuth v5 (single admin credentials)
- ImageKit (admin image uploads)
- `next/font/google` — Playfair Display + Inter
- `next/image` for all images
- `next/script` for all third-party scripts
- Legacy jQuery/Bootstrap/Swiper theme scripts loaded via `next/script` with `afterInteractive` strategy
- Google Places API for customer reviews (server-side only)

---

## Routes

### Public routes (`src/app/(public)/`)

| Route              | File                                      | Purpose                                      |
| ------------------ | ----------------------------------------- | -------------------------------------------- |
| `/`                | `(public)/(home)/page.tsx`                | Landing page (CMS hero, categories, featured products) |
| `/products`        | `(public)/products/page.tsx`              | Product catalogue (`?category=` filter)      |
| `/products/[slug]` | `(public)/products/[slug]/page.tsx`       | Product detail (dynamic slug)                |
| `/about`           | `(public)/about/page.tsx`                 | Store information                            |
| `/api/reviews`     | `src/app/api/reviews/route.ts`            | Google Business reviews JSON                 |
| `/api/products`    | `src/app/api/products/route.ts`           | Public products API (secondary to RSC fetch) |
| `/api/home-content`| `src/app/api/home-content/route.ts`       | Public home content API (secondary to RSC)   |

Route group `(public)` has no URL impact. Shared chrome (Header, Footer, Scripts) lives in `(public)/layout.tsx`.

### Admin routes (`src/app/admin/`)

| Route                         | Purpose                          |
| ----------------------------- | -------------------------------- |
| `/admin/login`                | Admin sign-in                    |
| `/admin`                      | Dashboard (product stats)        |
| `/admin/products`             | Product list                     |
| `/admin/products/new`         | Create product                   |
| `/admin/products/[id]/edit`   | Edit product                     |
| `/admin/home`                 | Home page CMS                    |
| `/api/admin/upload`           | ImageKit upload (used by admin)  |
| `/api/auth/[...nextauth]`     | NextAuth handlers                |

Admin mutations use **Server Actions** in `src/app/actions/` — not REST admin API routes.

---

## Component Architecture

```
src/
├── app/
│   ├── layout.tsx                    # Root: fonts, global metadata
│   ├── (public)/
│   │   ├── layout.tsx                # Header, Footer, Scripts, MiscControls
│   │   ├── (home)/page.tsx           # Server: fetches home content + featured products
│   │   ├── products/page.tsx         # Server: fetches products
│   │   ├── products/[slug]/page.tsx  # Server: fetches product by slug
│   │   └── about/page.tsx
│   ├── admin/                        # Admin panel (auth-protected)
│   ├── actions/                      # Server Actions (products, home, auth)
│   └── api/                          # Route handlers
├── components/
│   ├── pages/home/HomePage.tsx       # Client leaf: useScriptReinit + CMS props
│   ├── pages/products/ProductsPage.tsx
│   ├── pages/products/ProductDetail.tsx
│   ├── pages/about/AboutPage.tsx
│   ├── admin/                        # ProductForm, HomeContentForm, ImageUploader
│   └── miscControls/MiscControls.tsx # Minimal mobile toolbar + category filter
├── lib/
│   ├── db.ts                         # Mongoose connection cache
│   ├── products.ts                   # getProducts, getProductBySlug
│   ├── home-content.ts               # getHomeContent, defaults
│   └── models/                       # Product, HomeContent
└── types/                            # DTOs, NextAuth augmentation
```

---

## RSC Boundaries

### Rules

- **Server Components (default):** Page wrappers, layouts, data fetching, header, footer, admin RSC pages.
- **Client Components (`'use client'`):** Components using hooks, event handlers, browser APIs, or `useScriptReinit`. Push `'use client'` to **leaf nodes**.
- **Never** make a page-level component `'use client'` unless absolutely necessary. Server page fetches data → passes serializable props to client leaf.
- **Never** make a component `async` if it has `'use client'`.
- **Never** put `onClick` or other event handlers in Server Components — extract a small client component (e.g. `DeactivateProductButton`).

### Current Client Components (justified)

- `HomePage`, `ProductsPage`, `AboutPage` — `useScriptReinit` for legacy jQuery re-init
- `ProductDetail` — `useScriptReinit` + image thumbnail state
- `MiscControls` — mobile toolbar + filter offcanvas
- `TestimonialsSection` — fetches reviews, manages slider state
- Admin forms: `ProductForm`, `HomeContentForm`, `ImageUploader`, `DeactivateProductButton`

---

## Data Patterns

### Public pages — Server-first

```
(public)/(home)/page.tsx (server)
  → getHomeContent() + getProducts({ featured: true })
  → <HomePage homeContent={...} featuredProducts={...} />

(public)/products/page.tsx (server)
  → getProducts({ category })
  → <ProductsPage initialProducts={...} />

(public)/products/[slug]/page.tsx (server)
  → getProductBySlug(slug)
  → <ProductDetail product={...} />
```

Do **not** add client `fetch()` for data a Server Component can fetch directly.

### Admin mutations — Server Actions

```
ProductForm / HomeContentForm (client)
  → createProduct / updateProduct / updateHomeContent (server actions)
  → MongoDB + revalidatePath
```

Image uploads use `/api/admin/upload` (ImageKit) from `ImageUploader` client component.

### Reviews API Flow

```
TestimonialsSection (client)
  → fetch('/api/reviews')
  → fetchGoogleReviews() in src/lib/google-reviews.ts
  → Google Places API (or fallback JSON)
```

### Environment Variables

| Variable                      | Scope  | Purpose               |
| ----------------------------- | ------ | --------------------- |
| `MONGODB_URI`                 | Server | MongoDB connection    |
| `AUTH_SECRET`                 | Server | NextAuth JWT          |
| `ADMIN_EMAIL`                 | Server | Admin login           |
| `ADMIN_PASSWORD_HASH`         | Server | bcrypt admin password |
| `IMAGEKIT_PRIVATE_KEY`        | Server | Image uploads         |
| `NEXT_PUBLIC_TINYMCE_API_KEY` | Client | Rich text editor      |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Client | WhatsApp CTA          |
| `NEXT_PUBLIC_SITE_URL`        | Client | Product sharing URLs  |
| `GOOGLE_PLACES_API_KEY`       | Server | Reviews (optional)    |
| `GOOGLE_PLACE_ID`             | Server | Reviews (optional)      |

> **Security:** Never expose secrets with `NEXT_PUBLIC_*` prefix.

See [`.env.example`](.env.example) for the full list.

---

## API Route Handler Rules

All API routes live under `src/app/api/`. Pattern:

```ts
export async function GET(request: Request) {
  try {
    return Response.json({ success: true, data });
  } catch {
    return Response.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
```

- Dynamic routes: `params` is a `Promise` — always `await params`.
- Public product APIs delegate to `src/lib/products.ts` helpers.

---

## Metadata Rules

- Every `page.tsx` exports `metadata` or `generateMetadata`.
- Dynamic product pages: `generateMetadata` with `await params` and DB lookup by slug.
- Root layout: `{ default: 'M Rajkamal', template: '%s | M Rajkamal' }`.
- Viewport exported separately as `viewport`.

---

## Image Rules

- Always use `next/image` with descriptive `alt`.
- Remote images: `remotePatterns` in `next.config.ts` (`ik.imagekit.io`, `lh3.googleusercontent.com`).
- LCP images: `priority` + `sizes="100vw"`.

---

## Script Rules

- Legacy scripts in `src/components/scripts/Scripts.tsx` via `next/script`, strategy `afterInteractive`.
- `useScriptReinit` re-dispatches `window` `load` event after client navigation for Swiper/jQuery.

---

## Error Handling

- `src/app/error.tsx`, `global-error.tsx`, `not-found.tsx` at app root.
- Never wrap `redirect()` or `notFound()` in `try/catch`.
- Admin login: catch `AuthError` in `adminSignIn`, redirect with `?error=CredentialsSignin`.

---

## Navigation Rules

- Use `next/link` for internal routes.
- Never use `href="javascript:void(0);"` or `href="index.html"`.
- Product URLs: `/products/[slug]` (slug, not MongoDB `_id`).

---

## Skill Reference

| Topic              | Skill File                                               |
| ------------------ | -------------------------------------------------------- |
| File conventions   | `.agents/skills/next-best-practices/file-conventions.md` |
| RSC boundaries     | `.agents/skills/next-best-practices/rsc-boundaries.md`   |
| Async patterns     | `.agents/skills/next-best-practices/async-patterns.md`   |
| Data patterns      | `.agents/skills/next-best-practices/data-patterns.md`    |
| Route handlers     | `.agents/skills/next-best-practices/route-handlers.md`   |
| Metadata           | `.agents/skills/next-best-practices/metadata.md`         |
| Error handling     | `.agents/skills/next-best-practices/error-handling.md`   |

---

## What NOT to Do

- ❌ Never add `'use client'` to avoid a TypeScript error — fix the boundary instead.
- ❌ Never create a Route Handler for data a Server Component can fetch directly.
- ❌ Never expose secrets via `NEXT_PUBLIC_*`.
- ❌ Never use bare `<img>` or internal `<a href>`.
- ❌ Never put event handlers in Server Components.
- ❌ Never export `metadata` from `'use client'` files.
- ❌ Never duplicate admin mutation logic in REST routes — use Server Actions.
