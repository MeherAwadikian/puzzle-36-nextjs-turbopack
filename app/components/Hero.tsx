'use client'

// Migrated from the Vite build's src/App.jsx (puzzle #30). Same staged
// page-load sequence via one root variant orchestrating nested
// delayChildren/staggerChildren groups. The only migration-relevant change is
// the "use client" directive at the top: framer-motion uses hooks/effects, so
// this must be a Client Component in the App Router. The ?slow debug param
// from #30 is dropped since it relied on reading location.search at module
// eval time, which doesn't fit the server/client split cleanly.
import { motion } from 'framer-motion'

const page = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
}

const fadeDown = {
  hidden: { opacity: 0, y: -16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
} as const

const navGroup = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const navItem = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
} as const

const heroGroup = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const heroLine = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
} as const

const ctaPop = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 260, damping: 18 },
  },
} as const

const bgFade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.1 } },
} as const

export default function Hero() {
  return (
    <motion.div className="page" variants={page} initial="hidden" animate="show">
      <motion.div className="bg-glow" variants={bgFade} />

      <motion.header className="logo-row" variants={fadeDown}>
        <span className="logo-mark">◆</span>
        <span className="logo-text">Forge Studio</span>
      </motion.header>

      <motion.nav className="nav" variants={navGroup}>
        {['Work', 'Process', 'Pricing', 'Contact'].map((label) => (
          <motion.a key={label} href="#" variants={navItem} className="nav-link">
            {label}
          </motion.a>
        ))}
      </motion.nav>

      <motion.main className="hero" variants={heroGroup}>
        <motion.p className="hero-eyebrow" variants={heroLine}>
          Now booking Q1 slots
        </motion.p>
        <motion.h1 className="hero-title" variants={heroLine}>
          Interfaces that feel considered,
          <br />
          not just decorated.
        </motion.h1>
        <motion.p className="hero-sub" variants={heroLine}>
          We design and build product sites with the kind of motion that
          explains hierarchy instead of just showing off.
        </motion.p>
        <motion.div variants={heroLine}>
          <motion.a
            href="#"
            className="cta"
            variants={ctaPop}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Start a project →
          </motion.a>
        </motion.div>
      </motion.main>
    </motion.div>
  )
}
