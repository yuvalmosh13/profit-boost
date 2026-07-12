import { useState } from 'react'

/** Small "copy to clipboard" button with success feedback. */
export default function CopyButton({ text, label = 'העתקה' }) {
  const [done, setDone] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      // Fallback for browsers without the async clipboard API.
      const ta = document.createElement('textarea')
      ta.value = text
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      try { document.execCommand('copy') } catch { /* ignore */ }
      document.body.removeChild(ta)
    }
    setDone(true)
    setTimeout(() => setDone(false), 1500)
  }

  return (
    <button type="button" className={`ck-copy ${done ? 'is-done' : ''}`} onClick={copy}>
      {done ? 'הועתק ✓' : label}
    </button>
  )
}
