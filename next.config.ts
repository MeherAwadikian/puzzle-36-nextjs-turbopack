import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Turbopack is the default bundler in Next.js 16 for dev; `next build
  // --turbopack` (see package.json) opts the production build into it too.
  turbopack: {
    // Pin the workspace root to this project so Turbopack doesn't pick up a
    // stray lockfile in a parent directory (C:\Users\h) and warn about it.
    root: __dirname,
  },
}

export default nextConfig
