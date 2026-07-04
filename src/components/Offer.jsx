import CTAButton from './CTAButton'
import { includedItems, bonusItems, reasons } from '../data/offer'
import { PRICE_LAUNCH, PRICE_FULL, CURRENCY } from '../config/integration'
import './Offer.css'

/**
 * Offer / pricing. NO motion here (per spec). No countdown timers.
 * Premium two-column pricing card: value stack on one side, price + CTA on
 * the other. Prices come from src/config/integration.js. The CTA routes
 * through the same central conversion action (CTAButton → src/lib/cta.js).
 */
export default function Offer() {
  return (
    <section id="offer" className="section offer" aria-labelledby="offer-title">
      <div className="container">
        <div className="text-center">
          <span className="eyebrow">ההצעה</span>
          <h2 id="offer-title" className="section-title">
            כל הקורס — במקום אחד, במחיר נגיש
          </h2>
          <p className="section-lead center-block">
            לא עוד קורס יקר ומנופח. תוכנית עבודה אמיתית לעסק שלך.
          </p>
        </div>

        <div className="offer-card">
          <div className="offer-card__cols">
            {/* Value stack */}
            <div className="offer-card__stack">
              <p className="offer-card__stack-title">מה כלול:</p>
              <ul className="offer-card__list">
                {includedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="offer-card__bonuses">
                <p className="offer-card__stack-title">בונוסים:</p>
                <ul className="offer-card__list offer-card__list--bonus">
                  {bonusItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Price panel */}
            <aside className="offer-card__panel">
              <span className="offer-card__badge">מחיר השקה</span>
              <span className="offer-card__full">
                במקום {PRICE_FULL} {CURRENCY}
              </span>
              <span className="offer-card__amount">
                {PRICE_LAUNCH} {CURRENCY}
              </span>

              <CTAButton className="btn--block">
                אני רוצה לעשות סדר בכסף של העסק שלי
              </CTAButton>
              <p className="offer-card__microcopy">
                גישה מיידית · תשלום מאובטח · מתאים גם למי ששונאת מספרים
              </p>

              <p className="offer-card__value">
                במחיר של פחות מטיפול אחד — כלים שיעזרו לך להבין את העסק, לתמחר
                נכון יותר ולקבל החלטות בביטחון.
              </p>
            </aside>
          </div>

          {/* No-brainer line */}
          <p className="offer-card__nobrainer">
            אם אפילו שיעור אחד יעזור לך לגבות נכון יותר על קישוטים, השלמות או
            העלאת מחיר — הקורס יכול להחזיר את עצמו מהר מאוד.
          </p>

          {/* Reasons */}
          <ul className="offer-card__reasons">
            {reasons.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
