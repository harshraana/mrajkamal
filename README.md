# M Rajkamal — Furniture Store

Marketing site, product catalogue and admin CMS for **M Rajkamal**, an authorised
Godrej Interio dealer in Dadar West, Mumbai, trading since 1962.

There is no cart and no checkout. Every product page has an **Inquire on WhatsApp**
button that opens a chat prefilled with the product name, price and a link back to
the page.

## Stack

- **Next.js 16** (App Router, **Cache Components**), React 19, TypeScript
- **Tailwind v4** + shadcn/ui on **Base UI** (`base-nova` — *not* Radix)
- **MongoDB** + Mongoose
- **Auth.js v5** (NextAuth) — single admin, credentials, JWT sessions
- **ImageKit** — product and site image storage
- **TinyMCE** — self-hosted (GPL), no cloud API key
- Zod validation, `sanitize-html`, Framer Motion, Swiper

## Getting started

```bash
cp .env.example .env.local     # then fill it in — see below
npm install
npm run seed                   # loads the site content into MongoDB
npm run dev
```

- Public site — http://localhost:3000
- Admin panel — http://localhost:3000/m/admin

`npm run seed -- --demo` also inserts a few sample products with reviews.

## Environment

`.env.local` is the **only** env file. Do not also create a `.env`.

> Next resolves each variable by walking `.env.local` **before** `.env`, stopping
> at the first hit. An *empty* value in `.env.local` therefore silently shadows a
> real one in `.env` — a bug that was live in this repo and left the ImageKit keys
> resolving to `""`. `src/lib/env.ts` now validates everything at boot and
> `npm run check-env` gates `predev`/`prebuild`, so a blank or malformed value
> fails loudly instead of quietly.

| Variable | Purpose |
|---|---|
| `MONGODB_URI` | Database. Local dev uses a local `mongod`. |
| `AUTH_SECRET` | Auth.js session signing. Generate with `npx auth secret`. |
| `ADMIN_EMAIL` | The single admin account. |
| `ADMIN_PASSWORD_HASH` | bcrypt hash — **the `$` must be escaped**, see below. |
| `IMAGEKIT_PUBLIC_KEY` / `IMAGEKIT_PRIVATE_KEY` / `IMAGEKIT_URL_ENDPOINT` | Image storage. |
| `NEXT_PUBLIC_SITE_URL` | Absolute origin. Load-bearing: it builds the product URL inside the WhatsApp message, plus canonicals, OG tags and the sitemap. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Digits only, full international form (e.g. `919833533076`). |

### The bcrypt hash gotcha

dotenv expands `$` as a variable reference, and a bcrypt hash is `$2b$12$…` — so
an unescaped hash is **silently eaten down to an empty string**. Quoting does not
help (quotes are stripped before expansion runs). It must be written escaped:

```bash
node -e "console.log(require('bcryptjs').hashSync('your-password',12).replaceAll('$','\\\\$'))"
# → \$2b\$12\$...    paste that into .env.local
```

The env schema rejects a malformed hash at boot, so getting this wrong tells you
so — instead of silently rejecting every correct password.

## Routes

| Route | |
|---|---|
| `/` | Home — CMS-driven, with the featured products rail |
| `/products` | Catalogue, filterable by category |
| `/products/[slug]` | Product detail: gallery, reviews, similar items, WhatsApp inquiry |
| `/about` | Store story, map, contact |
| `/m/admin` | Dashboard |
| `/m/admin/products` | Product CRUD, per-product reviews, featured toggle (max 10) |
| `/m/admin/site` | Every string and image on the public site |

## Scripts

```bash
npm run dev / build / start / lint

npm run seed                 # site content (--force to overwrite, --demo for sample products)
npm run check-env            # validate .env.local
npm run verify:data          # data-layer invariants, against a real database
npm run verify:auth          # login rate limiting
npm run verify:imagekit      # a real upload/delete round-trip
npm run imagekit:reconcile   # sweep orphaned images (--apply to actually delete)
```

## Read this before changing anything

**Consult `node_modules/next/dist/docs/` before using a Next API.** This is Next 16
and several things are not what they were: `middleware.ts` is now **`proxy.ts`**,
`revalidateTag` takes **two** arguments, `unstable_cache` is **deprecated**, and
`<Image priority>` is **deprecated** (use `loading="eager"` / `fetchPriority="high"`).

**Cache Components is on** (`cacheComponents: true`), which means:

- Reads use `'use cache'` + `cacheTag()` + `cacheLife()`. Mutations invalidate with
  **`updateTag()`** from Server Actions — it expires immediately, so the admin sees
  their own writes. Never `revalidatePath`: it discards unrelated cached data.
- **Anything reading `cookies`, `headers`, `params` or `searchParams` must sit
  inside `<Suspense>`**, or the build fails. The old escape hatches (`dynamic`,
  `revalidate`, `dynamicParams`, `fetchCache`) are *removed* when this flag is on.
- Swiper's `A11y` module **cannot be used**: it calls `new Date()` during render,
  which is non-deterministic inside a prerender and fails the build. The carousels
  register `Keyboard` and carry hand-written ARIA instead.

**Security invariants — please don't quietly undo these:**

- Rich text is sanitized on **write** *and* again on **read** (`lib/sanitize.ts`).
  SVG uploads are rejected on purpose — an SVG is a scriptable document.
- **Every Server Action calls `requireAdmin()` itself.** `proxy.ts` performs only an
  optimistic cookie check and is *not* the security boundary; a page-level guard does
  not extend to the actions defined on that page.
- Product images live in `/mrajkamal/products/<productId>/` and the ImageKit `fileId`
  is persisted — which is what makes "remove image" actually delete the file.

## Deployment

Set the environment variables, point `MONGODB_URI` at Atlas, and run `npm run build`.
Run `npm run seed` once against the production database to load the initial content.
