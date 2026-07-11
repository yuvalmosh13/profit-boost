/* =====================================================================
 *  Centralized CTA behavior. EVERY button on the page routes through
 *  here, so a single config change updates all of them at once.
 *
 *  - 'checkout' mode → open email modal, then navigate to RAV_MESSER_URL.
 *  - 'lead' mode     → scroll to the embedded Rav Messer form (#lead-form).
 *  - While a link is still a "PASTE_..." placeholder, the button stays
 *    useful by scrolling to a REAL section (#offer) instead of breaking.
 * ===================================================================== */
import { CONVERSION_MODE, RAV_MESSER_URL, isPlaceholder } from '../config/integration'
import { trackPurchaseIntent, trackLead } from './tracking'

let emailModalOpenFn = null

export function setEmailModalOpenFn(fn) {
  emailModalOpenFn = fn
}

function scrollToId(id) {
  if (typeof document === 'undefined') return
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/**
 * Returns { href, onClick } to spread onto any anchor so it behaves as the
 * one, consistent conversion action.
 */
export function getCtaProps() {
  // ---- Lead flow: send everyone to the embedded form ----
  if (CONVERSION_MODE === 'lead') {
    return {
      href: '#lead-form',
      onClick: (e) => {
        e.preventDefault()
        trackLead()
        scrollToId('lead-form')
      },
    }
  }

  // ---- Checkout flow → open email modal first ----
  const checkoutReady = !isPlaceholder(RAV_MESSER_URL)
  return {
    href: '#',
    onClick: (e) => {
      e.preventDefault()
      trackPurchaseIntent()
      if (checkoutReady && emailModalOpenFn) {
        emailModalOpenFn()
      } else {
        // Link not pasted yet → keep the button working: go to the offer.
        scrollToId('offer')
      }
    },
  }
}
