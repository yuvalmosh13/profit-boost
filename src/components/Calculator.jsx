import { useState } from 'react'
import Reveal from './Reveal'
import CTAButton from './CTAButton'
import useCountUp from '../hooks/useCountUp'
import { PRICE_LAUNCH, CURRENCY } from '../config/integration'
import './Calculator.css'

// Soft reference used only to fill the confidence bar (decorative).
const BAR_REFERENCE = 5000

// Defaults (per spec).
const DEFAULTS = {
  price: 150,
  clientsPerDay: 5,
  daysPerMonth: 22,
  increase: 20,
}

const INCREASE_OPTIONS = [10, 20, 30, 50]

/**
 * Parses a raw input value into a non-negative number, falling back to the
 * provided default when the field is empty or invalid. This guarantees the
 * calculator never produces NaN or negative results.
 */
function toNumber(raw, fallback) {
  if (raw === '' || raw === null || raw === undefined) return fallback
  const n = Number(raw)
  if (!Number.isFinite(n) || n < 0) return fallback
  return n
}

function formatILS(value) {
  const safe = Number.isFinite(value) && value > 0 ? value : 0
  return safe.toLocaleString('he-IL')
}

export default function Calculator() {
  // Store raw string values so empty fields are possible; fall back on read.
  const [price, setPrice] = useState(String(DEFAULTS.price))
  const [clientsPerDay, setClientsPerDay] = useState(String(DEFAULTS.clientsPerDay))
  const [daysPerMonth, setDaysPerMonth] = useState(String(DEFAULTS.daysPerMonth))
  const [increase, setIncrease] = useState(DEFAULTS.increase)

  // Resolve values (empty → default), clamped to >= 0.
  const clients = toNumber(clientsPerDay, DEFAULTS.clientsPerDay)
  const days = toNumber(daysPerMonth, DEFAULTS.daysPerMonth)

  // Formula (never shown on screen):
  //   additionalMonthly = increase × clientsPerDay × daysPerMonth
  //   additionalYearly  = additionalMonthly × 12
  const additionalMonthly = Math.max(0, increase * clients * days)
  const additionalYearly = additionalMonthly * 12

  const animatedMonthly = useCountUp(additionalMonthly)
  const animatedYearly = useCountUp(additionalYearly)

  // Decorative confidence bar (0–100%) — grows with the monthly result.
  const barPct = Math.min(100, Math.round((additionalMonthly / BAR_REFERENCE) * 100))

  return (
    <section id="calculator" className="section" aria-labelledby="calc-title">
      <div className="container container--mid">
        <Reveal className="text-center">
          <span className="eyebrow">מחשבון קטן</span>
          <h2 id="calc-title" className="section-title">
            כמה את יכולה להוסיף בערך — לפי הנתונים שלך
          </h2>
          <p className="section-lead center-block">
            ממלאים כמה פרטים בסיסיים על העסק, והמספרים למטה מתעדכנים לבד תוך כדי
            הקלדה.
          </p>
          <p className="section-lead center-block" style={{ fontWeight: 600, color: 'var(--ink)' }}>
            זה רק חלק קטן ממה שתביני בקורס — כי לפעמים שינוי קטן במחיר יכול לשנות
            משמעותית את הרווח, אבל תמחור נכון הוא רק ההתחלה.
          </p>
        </Reveal>

        <Reveal className="calc">
          <div className="calc__inputs">
            <label className="calc__field">
              <span className="calc__label">מחיר טיפול ממוצע</span>
              <div className="calc__input-wrap">
                <input
                  type="number"
                  inputMode="numeric"
                  min="0"
                  step="1"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder={String(DEFAULTS.price)}
                  aria-label="מחיר טיפול ממוצע בשקלים"
                />
                <span className="calc__unit">₪</span>
              </div>
            </label>

            <label className="calc__field">
              <span className="calc__label">כמה לקוחות בערך ביום</span>
              <div className="calc__input-wrap">
                <input
                  type="number"
                  inputMode="numeric"
                  min="0"
                  step="1"
                  value={clientsPerDay}
                  onChange={(e) => setClientsPerDay(e.target.value)}
                  placeholder={String(DEFAULTS.clientsPerDay)}
                  aria-label="כמה לקוחות בערך ביום"
                />
              </div>
            </label>

            <label className="calc__field">
              <span className="calc__label">כמה ימים את עובדת בחודש</span>
              <div className="calc__input-wrap">
                <input
                  type="number"
                  inputMode="numeric"
                  min="0"
                  step="1"
                  value={daysPerMonth}
                  onChange={(e) => setDaysPerMonth(e.target.value)}
                  placeholder={String(DEFAULTS.daysPerMonth)}
                  aria-label="כמה ימים את עובדת בחודש"
                />
              </div>
            </label>
          </div>

          <div className="calc__increase">
            <span className="calc__label">בכמה להעלות את המחיר?</span>
            <div className="calc__chips" role="group" aria-label="בחירת גובה ההעלאה">
              {INCREASE_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  className={`calc__chip ${increase === opt ? 'is-active' : ''}`}
                  aria-pressed={increase === opt}
                  onClick={() => setIncrease(opt)}
                >
                  {opt} ₪
                </button>
              ))}
            </div>
          </div>

          <div className="calc__result" aria-live="polite">
            <div className="calc__result-primary">
              <span className="calc__result-label">
                רק העלאה של {increase} ₪ יכולה להוסיף לך כ־
              </span>
              <span className="calc__monthly">
                {formatILS(animatedMonthly)} ₪
                <span className="calc__per"> בחודש</span>
              </span>
            </div>

            <div
              className="calc__bar"
              role="presentation"
              aria-hidden="true"
            >
              <span className="calc__bar-fill" style={{ width: `${barPct}%` }} />
            </div>

            <div className="calc__result-secondary">
              <span className="calc__yearly-label">בשנה זה בערך</span>
              <span className="calc__yearly">{formatILS(animatedYearly)} ₪</span>
            </div>

            <p className="calc__result-support">
              וזה עוד לפני שבדקת קישוטים, השלמות ורווח נטו.
            </p>
          </div>

          <p className="calc__disclaimer">
            המספרים הם הערכה בלבד לפי הנתונים שהזנת, ונועדו לתת תחושה של סדר גודל.
            זו לא הבטחה ולא תוצאה מובטחת.
          </p>
        </Reveal>

        <Reveal className="calc__cta">
          <CTAButton>אני רוצה להבין את המספרים של העסק שלי</CTAButton>
          <p className="calc__price-line">
            וכל זה נמצא בתוך Profit Boost — ב־{PRICE_LAUNCH} {CURRENCY} בלבד.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
