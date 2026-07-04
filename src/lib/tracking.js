/* =====================================================================
 *  Tracking event helpers.
 *  The BASE pixel snippets (Meta / GA) are pasted in index.html /
 *  thank-you.html. These helpers fire *events* and safely do nothing if a
 *  tracker isn't installed OR its ID is still a "PASTE_..." placeholder.
 * ===================================================================== */
import {
  META_PIXEL_ID,
  GA_ID,
  PRICE_LAUNCH,
  CURRENCY,
  isPlaceholder,
} from '../config/integration'

const hasMeta = () =>
  typeof window !== 'undefined' && !!window.fbq && !isPlaceholder(META_PIXEL_ID)
const hasGA = () =>
  typeof window !== 'undefined' && !!window.gtag && !isPlaceholder(GA_ID)

// ILS → GA uses ISO currency; CURRENCY symbol is only for display elsewhere.
const CURRENCY_CODE = 'ILS'

/**
 * Fired when a visitor clicks a primary "buy" CTA (intent to purchase).
 * The REAL "Purchase" conversion fires on the Thank-You page (firePurchase).
 */
export function trackPurchaseIntent() {
  if (hasMeta()) window.fbq('track', 'InitiateCheckout')
  if (hasGA()) window.gtag('event', 'begin_checkout')
}

/** Fired when a visitor engages the lead form (lead mode). */
export function trackLead() {
  if (hasMeta()) window.fbq('track', 'Lead')
  if (hasGA()) window.gtag('event', 'generate_lead')
}

/**
 * Fires the real Purchase conversion. Call once on the Thank-You page.
 * No-ops safely if pixels aren't installed / IDs are placeholders.
 */
export function firePurchase(value = PRICE_LAUNCH) {
  if (hasMeta()) {
    window.fbq('track', 'Purchase', {
      value,
      currency: CURRENCY_CODE,
      content_name: 'Profit Boost',
    })
  }
  if (hasGA()) {
    window.gtag('event', 'purchase', {
      currency: CURRENCY_CODE,
      value,
      items: [{ item_name: 'Profit Boost', price: value, quantity: 1 }],
    })
  }
}

// CURRENCY is imported for potential display-side use; keep reference.
void CURRENCY
