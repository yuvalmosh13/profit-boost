import { useEffect } from 'react'
import Logo from './Logo'
import { firePurchase } from '../lib/tracking'
import {
  MAIN_SITE_URL,
  INSTAGRAM_URL,
  PRICE_LAUNCH,
  isPlaceholder,
} from '../config/integration'
import './ThankYou.css'

const steps = [
  'בדקי את תיבת המייל שלך',
  'אם לא מצאת — בדקי גם ספאם / קידומי מכירות',
  'שמרי את הקישור לקורס',
  'התחילי מהשיעור הראשון',
  'הורידי את האקסל המצורף והתחילי למלא את הנתונים שלך',
]

// Real link if set, otherwise a safe fallback to the site root (never "#").
const safeHref = (url) => (isPlaceholder(url) ? '/' : url)
const isExternal = (url) => !isPlaceholder(url)

export default function ThankYou() {
  // Fire the real Purchase conversion once (no-ops without pixel IDs).
  useEffect(() => {
    firePurchase(PRICE_LAUNCH)
  }, [])

  return (
    <main className="ty">
      <div className="container container--narrow ty__inner">
        <div className="ty__logo">
          <Logo />
        </div>

        <div className="ty__check" aria-hidden="true">✓</div>

        <h1 className="ty__title">ההרשמה ל־Profit Boost הושלמה בהצלחה</h1>
        <p className="ty__sub">
          תכף תקבלי למייל את כל הפרטים לגישה לקורס, לאקסל ולחומרים המצורפים.
        </p>

        <section className="ty__card" aria-labelledby="ty-steps-title">
          <h2 id="ty-steps-title" className="ty__card-title">
            הצעדים הבאים
          </h2>
          <ol className="ty__steps">
            {steps.map((s, i) => (
              <li key={i} className="ty__step">
                <span className="ty__step-num" aria-hidden="true">{i + 1}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        </section>

        <p className="ty__support">
          אם לא קיבלת מייל תוך כמה דקות, אפשר לפנות אלינו באינסטגרם או במייל.
        </p>

        <div className="ty__cta">
          <a
            className="btn btn--primary"
            href={safeHref(MAIN_SITE_URL)}
            {...(isExternal(MAIN_SITE_URL)
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            חזרה לאתר Yuval Mosh
          </a>
          <a
            className="btn ty__btn-ghost"
            href={safeHref(INSTAGRAM_URL)}
            {...(isExternal(INSTAGRAM_URL)
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            לעקוב באינסטגרם
          </a>
        </div>
      </div>
    </main>
  )
}
