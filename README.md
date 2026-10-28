# Puzzle #36 — migrate a site to Next.js 16 + Turbopack

Brief (Task Forge puzzle tracker): migrate website to Next.js 16 + Turbopack, deploy to Vercel/Netlify.

This migrates the **puzzle #30 Forge Studio landing page** (which was Vite +
React + framer-motion) to a real **Next.js 16.4.3 App Router** app built with
**Turbopack**.

## What the migration actually changed (not just a reskin)

| Concern | Vite version (#30) | Next.js 16 version (this) |
|---|---|---|
| Entry | `index.html` + `src/main.jsx` mounting into `#root` | App Router: `app/layout.tsx` (server) + `app/page.tsx` (server) |
| `<head>` metadata | client-set in `index.html` | typed `export const metadata` on the server `layout.tsx` — real SSR'd title/description |
| Animation code | whole app was one client bundle | isolated into `app/components/Hero.tsx` with `'use client'`; the route stays a server component and only the Hero boundary ships framer-motion |
| CSS | `src/styles.css`, `#root` height rule | `app/globals.css`, `#root` rule dropped (Next renders into `<body>`) |
| Bundler | Vite (Rollup/esbuild) | Turbopack (`next dev --turbopack`, `next build --turbopack`) |
| Language | JSX | TSX (typed variants) |

## Verified

- `npm run build` (which is `next build --turbopack`) completes successfully —
  see BUILD_OUTPUT.md for the captured Turbopack build log confirming the
  bundler used and the route rendered.
- `next start` serves the production build; the staged page-load animation
  renders identically to the #30 original (verified via browser).

## Deploy

Target is Vercel/Netlify (per the brief), not Cloudflare. Neither CLI is
installed on this machine and both need an interactive login, so the public
deploy is the one remaining step — `npx vercel` (or `npx netlify deploy`)
after an interactive auth. The app is a standard Next.js App Router project
and deploys to Vercel with zero extra config.
