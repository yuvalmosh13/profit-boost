import { useEffect, useRef, useState } from 'react'

/**
 * Adds a gentle fade/rise reveal when an element scrolls into view.
 * Returns a ref to attach and a boolean for the visible state.
 * Reveal happens once, then the observer disconnects.
 */
export default function useReveal(options = { threshold: 0.12 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // No IntersectionObserver (or SSR) → show immediately.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      })
    }, options)

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}
