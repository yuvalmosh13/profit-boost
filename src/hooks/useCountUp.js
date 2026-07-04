import { useEffect, useRef, useState } from 'react'

/**
 * Smoothly animates a number toward `target` whenever the target changes.
 * Subtle by design (short duration, ease-out). Respects reduced-motion:
 * users who prefer reduced motion get the final value immediately.
 *
 * @param {number} target   The value to count toward.
 * @param {number} duration Animation length in ms.
 * @returns {number} The current animated value (integer).
 */
export default function useCountUp(target, duration = 550) {
  const safeTarget = Number.isFinite(target) && target > 0 ? target : 0
  const [value, setValue] = useState(safeTarget)
  const fromRef = useRef(safeTarget)
  const rafRef = useRef(null)
  const startRef = useRef(0)

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      setValue(safeTarget)
      fromRef.current = safeTarget
      return
    }

    const from = fromRef.current
    const delta = safeTarget - from
    if (delta === 0) return

    startRef.current = 0

    const tick = (now) => {
      if (!startRef.current) startRef.current = now
      const elapsed = now - startRef.current
      const t = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3)
      const current = Math.round(from + delta * eased)
      setValue(current < 0 ? 0 : current)
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        fromRef.current = safeTarget
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      fromRef.current = safeTarget
    }
  }, [safeTarget, duration])

  return value
}
