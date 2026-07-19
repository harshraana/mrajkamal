# M Rajkamal — Copilot Instructions

**Read [`AGENTS.md`](../AGENTS.md) at the repository root.** It is the single source
of truth for how to work in this codebase, and it lives next to the code it
describes.

This file used to carry its own 250-line copy of the architecture. That copy went
stale the moment the app was rewritten: it described a MongoDB admin CMS, an
`/api/*` surface and a set of routes that no longer existed, and it pointed at a
`.agents/skills/next-best-practices/SKILL.md` that was never in the repository. Two
documents describing one architecture will always drift — and the stale one is
worse than none, because it tells you false things confidently.

Start with `AGENTS.md`, then `README.md`.

## The one rule to internalise

This is **Next.js 16**, and it is not the Next.js in your training data.
`middleware.ts` is now `proxy.ts`. `revalidateTag` takes two arguments.
`unstable_cache` and `<Image priority>` are deprecated. `params` and `searchParams`
are Promises. And with **Cache Components** enabled, any component reading
`cookies`, `headers`, `params` or `searchParams` **must** sit inside `<Suspense>`,
or the build fails.

Read `node_modules/next/dist/docs/` before writing the API. Every time.
