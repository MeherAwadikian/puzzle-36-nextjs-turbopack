import Hero from './components/Hero'

// The page itself is a server component (default in the App Router). The
// animated, interactive part is isolated into the Hero client component, so
// only that boundary ships framer-motion to the browser -- the rest of the
// route stays server-rendered. This is the key structural change from the
// Vite SPA, where the whole app was one client bundle.
export default function Page() {
  return <Hero />
}
