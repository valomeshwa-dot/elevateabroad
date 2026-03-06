import { Variants } from 'framer-motion'

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

export const fadeUpSubtle: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.45, ease: 'easeOut' }
  }
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.02
    }
  }
}

export const staggerGrid: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02
    }
  }
}

export const viewport = {
  once: true,
  margin: '-40px'
}
