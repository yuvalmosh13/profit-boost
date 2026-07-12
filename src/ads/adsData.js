/* =====================================================================
 *  Static content for the ads dashboard: creative angles, ready-to-use
 *  scripts, decision rules and the funnel checklist. Editable copy only.
 * ===================================================================== */

// Creative angles — used by the Creative performance cards.
export const CREATIVE_ANGLES = [
  { id: 'c1', name: 'היומן מלא אבל כמה נשאר?', hook: 'היומן מלא, אבל כמה באמת נשאר לך?', format: 'Reel 15–20 שניות · דיבור למצלמה' },
  { id: 'c2', name: 'לא נעים לך להעלות מחיר?', hook: 'את יודעת שאת צריכה להעלות מחיר, אבל לא נעים לך?', format: 'Reel · טקסט על מסך + דיבור' },
  { id: 'c3', name: 'קישוטים והשלמות — את גובה על זה?', hook: 'את עדיין עושה קישוטים והשלמות בלי לגבות כמו שצריך?', format: 'Reel · לפני/אחרי בעבודה' },
  { id: 'c4', name: 'כמה שווה העלאה של 20 ₪?', hook: 'כמה יכולה להוסיף לך העלאה של 20 ₪?', format: 'Reel · הדגמת המחשבון' },
  { id: 'c5', name: 'המלצות אמיתיות', hook: 'רק אתמול הבנתי מה זה ניהול עסק נכון', format: 'Story / Reel · צילומי מסך של הודעות' },
  { id: 'c6', name: 'Profit Boost חוזר ב־97 ₪', hook: 'Profit Boost חוזר ב־97 ₪', format: 'Reel / Feed · הצעה ישירה' },
]

// Full ready-to-use creative scripts — used by the Creative library.
export const CREATIVE_LIBRARY = [
  {
    id: 'a1',
    angle: 'זווית 1 — היומן מלא אבל כמה נשאר?',
    hook: 'היומן מלא, אבל כמה באמת נשאר לך?',
    script:
      'אם את מניקוריסטית או בעלת עסק בתחום היופי, ויש לך לקוחות, כסף נכנס, אבל בסוף החודש את לא באמת יודעת כמה נשאר לך — Profit Boost נבנה בדיוק בשבילך.',
    onScreen: 'היומן מלא · אבל כמה נשאר בסוף החודש?',
    caption:
      'עובדת המון אבל לא בטוחה כמה באמת נשאר? Profit Boost עושה לך סדר בכסף של העסק — קצר, פרקטי, ב־97 ₪.',
    cta: 'לעשות סדר בכסף של העסק',
  },
  {
    id: 'a2',
    angle: 'זווית 2 — לא נעים לך להעלות מחיר?',
    hook: 'את יודעת שאת צריכה להעלות מחיר, אבל לא נעים לך?',
    script:
      'הרבה בעלות עסק לא מעלות מחיר לא כי הן לא מקצועיות, אלא כי לא נעים להן. בקורס תלמדי איך להבין מתי להעלות, בכמה, ואיך לדבר על זה בביטחון.',
    onScreen: 'להעלות מחיר · בלי אשמה',
    caption: 'מגיע לך לגבות נכון. תלמדי מתי, בכמה ואיך לדבר על מחיר בביטחון. Profit Boost · 97 ₪.',
    cta: 'לתמחר בביטחון',
  },
  {
    id: 'a3',
    angle: 'זווית 3 — קישוטים והשלמות',
    hook: 'את עדיין עושה קישוטים והשלמות בלי לגבות כמו שצריך?',
    script:
      'הדברים הקטנים הם בדיוק המקומות שבהם הרבה מניקוריסטיות מפסידות כסף בלי לשים לב. Profit Boost יעזור לך לחשוב על זה עסקית.',
    onScreen: 'קישוטים · השלמות · כמה זה באמת שווה?',
    caption: 'הדברים הקטנים אוכלים לך את הרווח. תלמדי לתמחר קישוטים והשלמות נכון. Profit Boost · 97 ₪.',
    cta: 'להפסיק להפסיד כסף',
  },
  {
    id: 'a4',
    angle: 'זווית 4 — כמה שווה העלאה של 20 ₪?',
    hook: 'כמה יכולה להוסיף לך העלאה של 20 ₪?',
    script:
      'הכניסי מחיר טיפול, לקוחות ביום וימי עבודה — ותראי איך שינוי קטן במחיר יכול להשפיע על ההכנסות.',
    onScreen: '+20 ₪ לטיפול = ? בחודש',
    caption: 'שינוי קטן במחיר, הבדל גדול בהכנסה. תעשי את החשבון ב־Profit Boost · 97 ₪.',
    cta: 'לחשב כמה את מפסידה',
  },
  {
    id: 'a5',
    angle: 'זווית 5 — המלצות אמיתיות',
    hook: 'רק אתמול הבנתי מה זה ניהול עסק נכון',
    script:
      'נשים שכבר רכשו התחילו להבין טוב יותר את המספרים, התמחור וההתנהלות של העסק שלהן.',
    onScreen: 'מה בעלות עסקים אומרות',
    caption: 'המלצות אמיתיות מבעלות עסקים שכבר עשו סדר במספרים. Profit Boost · 97 ₪.',
    cta: 'להצטרף אליהן',
  },
  {
    id: 'a6',
    angle: 'זווית 6 — Profit Boost חוזר ב־97 ₪',
    hook: 'Profit Boost חוזר ב־97 ₪',
    script:
      'מיני קורס דיגיטלי קצר ופרקטי לבעלות עסקים בתחום היופי שרוצות להבין את הכסף של העסק, לתמחר נכון ולדבר על מחיר בביטחון.',
    onScreen: 'Profit Boost · חוזר · 97 ₪',
    caption: 'חזר במחיר השקה — 97 ₪. מיני קורס פרקטי לכסף של העסק שלך. גישה מיידית.',
    cta: 'רוצה להתחיל',
  },
]

// Decision guide — "מה עושים עם הנתונים?"
export const DECISION_RULES = [
  { rule: 'CTR נמוך מ־0.7%', action: 'הבעיה כנראה בקריאייטיב', tone: 'warn' },
  { rule: 'הרבה קליקים ואין רכישות', action: 'לבדוק דף נחיתה / הצעה / מחיר', tone: 'warn' },
  { rule: 'יש רכישות אבל CPA גבוה', action: 'לבדוק קהל, קריאייטיב או הצעה', tone: 'warn' },
  { rule: 'CPA עד 40 ₪', action: 'להמשיך לבדוק', tone: 'good' },
  { rule: 'CPA עד 60 ₪', action: 'גבולי — לבדוק אם יש Upsell / המשך מכירה', tone: 'neutral' },
  { rule: 'CPA מעל 97 ₪', action: 'לא רווחי בלי מוצר המשך', tone: 'bad' },
]

// Funnel tracking checklist items (persisted in localStorage).
export const CHECKLIST_ITEMS = [
  { id: 'k1', label: 'פיקסל מותקן' },
  { id: 'k2', label: 'אירוע ViewContent עובד' },
  { id: 'k3', label: 'אירוע InitiateCheckout עובד' },
  { id: 'k4', label: 'אירוע Purchase עובד' },
  { id: 'k5', label: 'CHECKOUT_URL תקין' },
  { id: 'k6', label: 'דף תודה תקין' },
  { id: 'k7', label: 'מייל גישה לקורס נשלח' },
  { id: 'k8', label: 'כל CTA פותח את מודל המייל' },
  { id: 'k9', label: 'אין אזכור ל־67 ₪' },
]

// A fresh, empty daily row.
export function emptyRow(id) {
  return {
    id,
    date: '',
    campaign: '',
    adset: '',
    creative: '',
    spend: '',
    impressions: '',
    clicks: '',
    landingViews: '',
    initiateCheckout: '',
    purchases: '',
    notes: '',
  }
}
