import type { Metadata } from 'next'
import './globals.css'

// In the Vite version this metadata lived in index.html's <head>. In the
// Next.js App Router it's a typed `metadata` export on the root layout, which
// is a server component — so the <title>/description are rendered on the
// server for real SEO/social-preview value instead of being client-set.
export const metadata: Metadata = {
  title: 'Forge Studio — page-load animation (Next.js 16 + Turbopack)',
  description:
    'Interfaces that feel considered, not just decorated. Migrated from Vite + React to the Next.js 16 App Router, built with Turbopack.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
