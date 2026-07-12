import { useState, useEffect } from 'react'

/**
 * Persist a piece of state in localStorage (no backend). SSR/parse safe.
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    if (typeof window === 'undefined') return initialValue
    try {
      const raw = window.localStorage.getItem(key)
      return raw != null ? JSON.parse(raw) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      /* ignore quota / private-mode errors */
    }
  }, [key, value])

  return [value, setValue]
}
