import CTAButton from './CTAButton'
import HeroMockup from './HeroMockup'
import Logo from './Logo'
import { PRICE_LAUNCH, PRICE_FULL, CURRENCY } from '../config/integration'
import './Hero.css'

// Trust badges — the 3 strongest only, to keep the hero focused.
const badges = [
  '⚡ גישה מיידית',
  '📊 כולל אקסל מוכן',
  '🙌 מתאים גם למי ששונאת מספרים',
]

/**
 * Hero section. `id="hero"` is used by the sticky CTA bar (appears only
 * after the hero scrolls out of view).
 */
export default function Hero() {
  return (
    <header id="hero" className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <div className="hero__logo">
            <Logo />
          </div>
          <h1 className="hero__title">
            העסק שלך מכניס כסף.
            <br />
            הגיע הזמן להבין כמה באמת נשאר.
          </h1>
          <p className="hero__subhead">
            תוכנית קצרה ופרקטית למניקוריסטיות ובעלות עסק ביופי — לתמחר נכון ולדעת
            כמה באמת נשאר.
          </p>

          <div className="hero__cta">
            <CTAButton>אני רוצה להתחיל את Profit Boost</CTAButton>
          </div>

          <p className="hero__price">
            גישה מיידית לכל הקורס — {PRICE_LAUNCH} {CURRENCY} בלבד{' '}
            <span className="hero__price-anchor">(במקום {PRICE_FULL} {CURRENCY})</span>
          </p>

          <ul className="hero__badges">
            {badges.map((b) => (
              <li key={b} className="hero__badge">
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <HeroMockup />
        </div>
      </div>
    </header>
  )
}
