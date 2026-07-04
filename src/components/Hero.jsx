import CTAButton from './CTAButton'
import HeroMockup from './HeroMockup'
import Logo from './Logo'
import './Hero.css'

// Trust badges — edit copy here.
const badges = [
  '⚡ גישה מיידית',
  '📊 כולל אקסל מוכן',
  '🎬 שיעורים קצרים ופרקטיים',
  '🙌 מתאים גם למי ששונאת מספרים',
  '💅 נבנה במיוחד לבעלות עסקים בתחום היופי',
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
          <p className="hero__lead">
            Profit Boost היא תוכנית דיגיטלית קצרה ופרקטית שתעזור לך להבין את
            המספרים של העסק, לתמחר נכון, להעלות מחירים בביטחון, לדעת מה לגבות על
            קישוטים והשלמות — ולעשות סדר בכסף בלי להסתבך.
          </p>

          <div className="hero__cta">
            <CTAButton>אני רוצה להתחיל את Profit Boost</CTAButton>
            <a href="#calculator" className="hero__secondary">
              נסי קודם את המחשבון ↓
            </a>
          </div>

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
