/* =====================================================================
 *  Profit Boost — Rav Messer / Rav Page integration config
 *  ---------------------------------------------------------------------
 *  ★ THIS IS THE ONLY FILE YOU NEED TO EDIT TO GO LIVE. ★
 *  Everything a non-developer must replace lives here, clearly marked
 *  with  >>> PASTE ... HERE <<<  markers.
 * ===================================================================== */

/* ---------------------------------------------------------------------
 * 1) CONVERSION MODE — how EVERY button on the page behaves.
 *
 *    'checkout' → buttons send the visitor to your Rav Messer checkout
 *                 link (RAV_MESSER_URL below). Use this for direct sale.
 *
 *    'lead'     → buttons scroll to the Rav Messer form embedded on the
 *                 page (the "השארת פרטים" section). Use this to collect
 *                 leads first.
 *
 *    Change ONE word here to switch the whole page between the two flows.
 * ------------------------------------------------------------------- */
export const CONVERSION_MODE = 'checkout' // 'checkout' | 'lead'

/* ---------------------------------------------------------------------
 * 2) RAV MESSER LINKS
 * ------------------------------------------------------------------- */

// >>> PASTE RAV MESSER URL HERE <<<
// The SINGLE link every CTA on the page points to — checkout / payment page /
// signup form from Rav Messer. Change it here once and all buttons update.
export const RAV_MESSER_URL =
  'https://secure.cardcom.solutions/EA/EA5/EbjOxqDDkmWShpZHPpPyQ/PaymentSP'

// CHECKOUT_URL is the canonical name used across the code for the payment page.
// It points to RAV_MESSER_URL above — paste your Rav Messer checkout link there.
export const CHECKOUT_URL = RAV_MESSER_URL

// When true, the email the visitor types in the modal is appended to the
// checkout URL as ?email=... (or &email=...) so the Rav Messer / Cardcom
// payment page can pre-fill / receive it. If the payment page does NOT support
// this, set to false — the link still works, it just won't carry the email.
export const passEmailToCheckout = true

// >>> PASTE RAV MESSER FORM URL HERE <<<
// (Direct URL to the form — used as a fallback in 'lead' mode.)
export const LEAD_FORM_URL = 'PASTE_RAV_MESSER_FORM_URL_HERE'

// >>> PASTE RAV MESSER FORM EMBED CODE HERE <<<
// Paste the full iframe embed you copy from Rav Messer, e.g.:
//   '<iframe src="https://... " width="100%" height="600" frameborder="0"></iframe>'
// Leave it as an empty string ('') to keep showing the clean placeholder box.
// NOTE: iframe embeds work as-is. If Rav Messer gives you a <script>-based
// embed, paste that <script> into index.html instead (see the marked block
// there) and leave a target <div> in the placeholder.
export const LEAD_FORM_EMBED_CODE = ''

// >>> PASTE THANK YOU / SUCCESS PAGE URL HERE <<<
// The success page hosted with this site is:  <your-domain>/thank-you.html
// Set the redirect to it INSIDE Rav Messer (see README). Kept here for reference.
export const THANK_YOU_URL = 'PASTE_THANK_YOU_PAGE_URL_HERE'

// Links used on the Thank-You page buttons.
// >>> PASTE MAIN SITE URL HERE <<<   (e.g. your Yuval Mosh homepage)
export const MAIN_SITE_URL = 'https://yuvalmosh.co.il'
// >>> PASTE INSTAGRAM URL HERE <<<
export const INSTAGRAM_URL = 'https://www.instagram.com/yuvalmosh_nails'

/* ---------------------------------------------------------------------
 * 3) TRACKING IDs (optional — leave '' to disable that tracker)
 *    The base pixel snippets go in index.html; these IDs drive the
 *    event helpers in src/lib/tracking.js.
 * ------------------------------------------------------------------- */

// >>> PASTE META (FACEBOOK) PIXEL ID HERE <<<  e.g. '1234567890'
export const META_PIXEL_ID = 'PASTE_META_PIXEL_ID_HERE'

// >>> PASTE GOOGLE ANALYTICS ID HERE <<<  e.g. 'G-XXXXXXXXXX'
export const GA_ID = 'PASTE_GA_ID_HERE'

// >>> PASTE RAV MESSER TRACKING / REMARKETING PIXEL ID HERE <<<
export const RAV_MESSER_PIXEL_ID = 'PASTE_RAV_MESSER_PIXEL_ID_HERE'

/* ---------------------------------------------------------------------
 * 4) PRICING (display only — does NOT charge anything)
 *    Actual charging happens on the Rav Messer checkout page.
 * ------------------------------------------------------------------- */
export const PRICE_LAUNCH = 97 // מחיר נוכחי
export const PRICE_FULL = 147 // מחיר מקורי / עוגן
export const CURRENCY = '₪'

/* ---------------------------------------------------------------------
 * Helpers — you normally do NOT need to touch anything below.
 * ------------------------------------------------------------------- */
const PLACEHOLDER_PREFIX = 'PASTE_'
export const isPlaceholder = (v) =>
  !v || (typeof v === 'string' && v.startsWith(PLACEHOLDER_PREFIX))
export const hasRavMesserUrl = !isPlaceholder(RAV_MESSER_URL)
export const hasLeadEmbed = LEAD_FORM_EMBED_CODE.trim().length > 0
