/* =====================================================================
 *  Checkout URL builder.
 *
 *  The site ONLY collects the email and forwards the visitor to the Rav
 *  Messer / Cardcom payment page. It never subscribes anyone from the
 *  browser and never holds any Rav Messer API key.
 *
 *  IMPORTANT:
 *  Actual subscription to Rav Messer should happen only after successful
 *  payment through Rav Messer checkout / payment automation / Make webhook.
 * ===================================================================== */
import { CHECKOUT_URL, passEmailToCheckout } from '../config/integration'

/**
 * Builds the final checkout URL, optionally carrying the customer email as a
 * query parameter (?email=... or &email=... depending on the existing URL).
 * The email is always encoded with encodeURIComponent.
 *
 * @param {string} email - already-validated customer email
 * @returns {string} the URL to send the visitor to
 */
export function buildCheckoutUrl(email) {
  // If disabled, or no email, just return the plain checkout link untouched.
  if (!passEmailToCheckout || !email) return CHECKOUT_URL

  const separator = CHECKOUT_URL.includes('?') ? '&' : '?'
  return `${CHECKOUT_URL}${separator}email=${encodeURIComponent(email)}`
}
