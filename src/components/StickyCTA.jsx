import { useEffect, useState } from 'react'
import { getCtaProps } from '../lib/cta'
import { PRICE_LAUNCH, CURRENCY } from '../config/integration'
import './StickyCTA.css'

/**
 * Sticky CTA bar. Uses the SAME central conversion action as every other CTA.
 * - Appears only AFTER the hero scrolls out of view.
 * - Hides while the offer section (its own purchase card + CTA) is on screen,
 *   so it never sits on top of the main offer.
 * - Compact bottom bar on mobile; a subtler centered pill on desktop.
 * Layout: "אני רוצה להתחיל" (right) · price (left) · "גישה מיידית".
 */
export default function StickyCTA() {
  const [heroPassed, setHeroPassed] = useState(false)
  const [offerVisible, setOfferVisible] = useState(false)
  const cta = getCtaProps()

  useEffect(() => {
    const observers = []
    const observe = (id, cb, opts) => {
      const el = document.getElementById(id)
      if (!el || typeof IntersectionObserver === 'undefined') {
        if (id === 'hero') setHeroPassed(true)
        return
      }
      const o = new IntersectionObserver(([entry]) => cb(entry), opts)
      o.observe(el)
      observers.push(o)
    }

    observe('hero', (e) => setHeroPassed(!e.isIntersecting), { threshold: 0 })
    observe('offer', (e) => setOfferVisible(e.isIntersecting), { threshold: 0.2 })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const show = heroPassed && !offerVisible

  return (
    <div className={`sticky-cta ${show ? 'is-visible' : ''}`} aria-hidden={!show}>
      <div className="sticky-cta__inner">
        <a
          {...cta}
          className="btn btn--primary sticky-cta__btn"
          tabIndex={show ? 0 : -1}
        >
          אני רוצה להתחיל
        </a>
        <div className="sticky-cta__price-block">
          <span className="sticky-cta__price">
            {PRICE_LAUNCH} {CURRENCY}
          </span>
          <span className="sticky-cta__hint">גישה מיידית</span>
        </div>
      </div>
    </div>
  )
}
