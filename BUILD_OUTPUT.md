# Turbopack build output (captured)

Proof that `npm run build` (`next build --turbopack`) completes with Turbopack
as the bundler. Note the `▲ Next.js 16.4.3 (Turbopack)` banner.

```
> puzzle-36-nextjs-turbopack@0.0.0 build
> next build --turbopack

▲ Next.js 16.4.3 (Turbopack)
✓ Running next.config.ts took 54ms

  Creating an optimized production build ...
✓ Compiled successfully in 1011ms
  Running TypeScript ...
  Finished TypeScript in 1531ms ...
  Collecting page data using 4 workers ...
  Generating static pages using 4 workers (0/3) ...
✓ Generating static pages using 4 workers (3/3) in 1637ms
  Finalizing page optimization ...

Route (app)
┌ ○ /
└ ○ /_not-found

○  (Static)  prerendered as static content
```

Both routes prerender as static content. The `/` route's hero text and the
server-component `<title>` are present in the raw HTML from `next start`
(confirmed via curl), proving the server/client split works — only the Hero
boundary ships framer-motion to the browser.

(The initial build also emitted a warning about a stray `pnpm-lock.yaml` in
`C:\Users\h`; fixed by pinning `turbopack.root: __dirname` in
`next.config.ts`.)
