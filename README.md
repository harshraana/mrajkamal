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
- **Auth.js v5** (NextAuth) — single admin stored in the DB, credentials, JWT sessions
- **ImageKit** — product and site image storage
- **TinyMCE** — self-hosted (GPL), no cloud API key
- **Nodemailer** (SMTP) — sends the admin password-reset code
- Zod validation, `sanitize-html`, Framer Motion, Swiper

## Getting started

```bash
cp .env.example .env.local     # then fill it in — see below
npm install
npm run seed                   # site content + the initial admin account
npm run dev
```

- Public site — http://localhost:3000
- Admin panel — http://localhost:3000/m/admin

`npm run seed -- --demo` also inserts a few sample products with reviews.

### The admin account

The admin **email and password live in the database** (the `AdminUser` collection),
so the password can be changed at runtime from the dashboard — no redeploy. Create
the initial account with:

```bash
npm run seed:admin       # creates mrajkamalfurniture@gmail.com / admin@1234 if absent
```

Sign in, then **change the password immediately** from the dashboard (Account tab):
you request a 6-digit code, it's emailed to the admin address, you enter it with a
new password. There is deliberately no "forgot password" on the login page — if you
get locked out, `npm run seed:admin -- --force` resets the password back to the
temporary one.

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
| `MONGODB_URI` | Database. Local dev uses a local `mongod`; production points at Atlas. |
| `AUTH_SECRET` | Auth.js session signing. Generate with `npx auth secret`. |
| `IMAGEKIT_PUBLIC_KEY` / `IMAGEKIT_PRIVATE_KEY` / `IMAGEKIT_URL_ENDPOINT` | Image storage. |
| `NEXT_PUBLIC_SITE_URL` | Absolute origin. Load-bearing: it builds the product URL inside the WhatsApp message, plus canonicals, OG tags and the sitemap. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Digits only, full international form (e.g. `919833533076`). |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` / `SMTP_FROM` | **Optional** — sends the admin password-reset code. See below. |

The admin email and password are **not** environment variables — they live in the
database (see [The admin account](#the-admin-account) above).

### Email for the password-reset code (SMTP)

Optional: the app runs and logs in without it; only the dashboard's "Change
password" flow needs email. Without SMTP, the code is printed to the server
console in development, and the reset shows a clear error in production.

Configured for **Gmail** by default. On the Google account:

1. Enable **2-Step Verification**.
2. Create an **App password** (Google Account → Security → App passwords) — a
   16-character code.
3. Set `SMTP_USER` to the Gmail address and `SMTP_PASS` to that app password
   (not the normal account password).

Any SMTP provider works — point `SMTP_HOST`/`SMTP_PORT`/`SMTP_USER`/`SMTP_PASS`
at Brevo, SendGrid, Mailgun, etc. instead.

### Setting env vars on a hosting platform (Netlify, Vercel)

Paste values **raw** — no quotes, no backslash escaping. (Escaping is a `.env`-file
quirk; platforms inject real environment variables.) `NEXT_PUBLIC_*` are baked in
at build time, so set them before deploying and redeploy after changing them. If
`MONGODB_URI` is Atlas, allow the platform's egress IPs (or `0.0.0.0/0`) in Atlas →
Network Access, then run `npm run seed:admin` once against the production database.

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
| `/m/admin/account` | Change the admin password (via emailed OTP) |

## Scripts

```bash
npm run dev / build / start / lint

npm run seed                 # site content + admin (--force to overwrite content, --demo for sample products)
npm run seed:admin           # create/reset the admin account (--force resets the password)
npm run check-env            # validate .env.local
npm run verify:data          # data-layer invariants, against a real database
npm run verify:auth          # login rate limiting
npm run verify:admin         # DB login + OTP change-password lifecycle
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
