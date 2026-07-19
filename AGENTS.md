{/\* BEGIN:nextjs-agent-rules \*/}

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
{/\* END:nextjs-agent-rules \*/}

---

## What that rule actually caught here

The instruction above is not boilerplate. Verifying against the installed docs
overturned all of these, each of which would have been written differently from
memory:

| From training data | Reality in Next 16.2.4 |
|---|---|
| `middleware.ts` | Renamed **`proxy.ts`** (exports `proxy` + `config.matcher`) |
| `revalidateTag(tag)` | Takes **two** args; the profile is required |
| `unstable_cache` | **Deprecated** — replaced by `use cache` |
| `<Image priority>` | **Deprecated** — use `loading="eager"` / `fetchPriority="high"` |
| `params` / `searchParams` are objects | They are **Promises** |
| `export const dynamic = 'force-dynamic'` | **Removed** when `cacheComponents` is on |
| `export const runtime = 'nodejs'` | **Rejected** when `cacheComponents` is on |

Also: `images.qualities` is required from v16 (defaults to `[75]`), and a
`quality` prop that isn't in the list silently snaps to the nearest allowed value.

## Cache Components is enabled

`next.config.ts` sets `cacheComponents: true`. Consequences you cannot design around:

- **Every component that reads `cookies`, `headers`, `params` or `searchParams`
  must sit inside `<Suspense>`.** Not a style preference — the build fails
  otherwise, and the segment-config escape hatches no longer exist.
- Reads: `'use cache'` + `cacheTag()` + `cacheLife()`, wrapped in React `cache()`
  so `generateMetadata` and the page body share one query.
- Writes: **`updateTag()`** from Server Actions (immediate expiry → the admin sees
  their own writes). `revalidateTag(tag, profile)` in Route Handlers, where
  `updateTag` throws. **Never `revalidatePath`** — it discards unrelated cached data.
- `'use cache'` cannot serialize class instances, so `.lean()` + DTO mapping on
  every Mongoose read is mandatory, not stylistic (an `ObjectId` is a class).
- React `<Activity>` keeps navigated-away routes **mounted but hidden**. Swiper
  must re-`update()` in an Effect (a hidden container measures 0×0), and `<video>`
  must be paused on cleanup (`display: none` does not stop playback).
- **Swiper's `A11y` module cannot be used.** `swiper/modules/a11y.mjs:36` calls
  `new Date()` at initialiser scope, which runs during render — a non-deterministic
  call inside a prerender. Use `Keyboard` plus hand-written ARIA.

## Security invariants

Please do not quietly undo these. Each one is a bug that was live in this codebase.

- **Every Server Action calls `requireAdmin()` itself.** `src/proxy.ts` performs an
  optimistic cookie-presence check only and is *not* the security boundary. A
  page-level guard does **not** extend to the Server Actions defined on that page —
  they are POST endpoints reachable directly.
- **Rich text is sanitized on write AND on read** (`lib/sanitize.ts`). There are
  exactly two HTML fields in the system (`Product.descriptionHtml`,
  `SiteContent.about.bodyHtml`).
- **SVG uploads are rejected on purpose.** An SVG is a scriptable document; serving
  an uploaded one from your own origin is stored XSS with extra steps.
- **The upload folder is derived server-side** from a validated ObjectId. Never take
  a path from the client.
- **`runValidators: true` on every update.** Mongoose does not run schema validators
  on update by default — without it, negative prices and invalid categories are
  writable straight through the edit form.
- **ImageKit `fileId` is persisted** on every image. It is what makes "remove image"
  actually delete the file instead of orphaning it forever.

## Conventions

- UI primitives are **Base UI** (`base-nova`), *not* Radix. Add them with
  `npx shadcn@latest add …` — Radix-era snippets will not compile.
- Layout primitives: `<Container>`, `<Section>`, `<SectionHeading>`, `<SmartImage>`.
  Use them rather than retyping the class strings.
- One source of truth for product categories (`lib/constants/catalog.ts`) and
  service icons (`lib/constants/service-icons.ts`). The Mongoose enum, the Zod enum
  and the UI all read from those.
- Admin reads are deliberately **uncached** — the admin must see their own writes.
- The admin panel lives at **`/m/admin`** (folder `src/app/m/admin/`). Its base path is
  `ADMIN_BASE` in `lib/admin-paths.ts` — link and redirect through that, never a bare
  literal. The one exception is `src/proxy.ts`, whose `config.matcher` must be a static
  literal; keep it in step by hand.
- `.env.local` is the only env file. Adding a `.env` back will silently shadow it.

See `README.md` for setup and the full script list.
