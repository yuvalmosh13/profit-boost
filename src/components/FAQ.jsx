import { useState } from 'react'
import { faqItems } from '../data/faq'
import './FAQ.css'

/**
 * Accessible accordion. NO motion (per spec).
 * - All items closed by default.
 * - Multiple items may be open at the same time.
 * - Each trigger is a real <button> with aria-expanded / aria-controls.
 */
export default function FAQ() {
  // Set of open indexes — allows multiple open at once.
  const [open, setOpen] = useState(() => new Set())

  const toggle = (i) => {
    setOpen((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  return (
    <section className="section section--alt" aria-labelledby="faq-title">
      <div className="container container--narrow">
        <div className="text-center">
          <span className="eyebrow">שאלות ותשובות</span>
          <h2 id="faq-title" className="section-title">
            כל מה שרצית לשאול
          </h2>
        </div>

        <div className="faq" style={{ marginTop: '28px' }}>
          {faqItems.map((item, i) => {
            const isOpen = open.has(i)
            const panelId = `faq-panel-${i}`
            const btnId = `faq-button-${i}`
            return (
              <div className="faq__item" key={i}>
                <h3 className="faq__heading">
                  <button
                    id={btnId}
                    type="button"
                    className="faq__trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(i)}
                  >
                    <span>{item.q}</span>
                    <span className="faq__icon" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className="faq__panel"
                  >
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
