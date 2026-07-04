import { useState } from 'react'
import Reveal from './Reveal'
import CTAButton from './CTAButton'
import './AboutYuval.css'

const trustPoints = [
  'מניקוריסטית ומדריכה בתחום הציפורניים',
  'מלווה בעלות עסקים בתחום היופי',
  'יצרה כלים פרקטיים לניהול ותמחור בעסק',
]

export default function AboutYuval() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <section className="section about-yuval">
      <div className="container">
        <Reveal>
          <span className="eyebrow">מי עומדת מאחורי הקורס?</span>
        </Reveal>

        <div className="about-yuval__grid">
          {/* Image / visual side */}
          <Reveal className="about-yuval__visual">
            <div className={`about-yuval__portrait ${imageLoaded ? 'loaded' : ''}`}>
              {!imageFailed && (
                <img
                  src="/yuval.jpg"
                  alt="יובל מוש"
                  className="about-yuval__portrait-img"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageFailed(true)}
                />
              )}
              {imageFailed && (
                <div className="about-yuval__placeholder">
                  <div className="about-yuval__placeholder-content">
                    <div className="about-yuval__placeholder-name">Yuval Mosh</div>
                    <div className="about-yuval__placeholder-title">מניקוריסטית · מדריכה · בעלת עסק</div>
                    <div className="about-yuval__placeholder-logo">Profit Boost</div>
                  </div>
                </div>
              )}
            </div>
          </Reveal>

          {/* Text side */}
          <Reveal className="about-yuval__text">
            <h2 className="about-yuval__headline">נעים מאוד, אני יובל</h2>

            <p className="about-yuval__intro">
              אני יובל מוש, מניקוריסטית, מדריכה ובעלת עסק שחיה את התחום הזה ביום־יום.
            </p>

            <p className="about-yuval__body">
              אני יודעת כמה קל להיות עסוקה, לקבל לקוחות, לקנות חומרים, להעלות סטוריז, לעבוד בלי הפסקה — ועדיין לא באמת להבין כמה כסף נשאר בסוף.
            </p>

            <p className="about-yuval__body">
              בדיוק בגלל זה יצרתי את Profit Boost.
            </p>

            <p className="about-yuval__body">
              רציתי לקחת נושא שמרגיש להרבה בעלות עסקים מסובך, מלחיץ ולא נעים — ולהפוך אותו למשהו פשוט, ברור ופרקטי.
            </p>

            <p className="about-yuval__body">
              המטרה שלי היא לא שתהיי רואת חשבון. המטרה שלי היא שתביני את העסק שלך טוב יותר, תדעי לתמחר נכון יותר, ותדברי על כסף מול לקוחות עם הרבה יותר ביטחון.
            </p>

            <ul className="about-yuval__trust-list">
              {trustPoints.map((point, i) => (
                <li key={i} className="about-yuval__trust-item">
                  <span className="about-yuval__trust-check">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <blockquote className="about-yuval__quote">
              "המטרה שלי היא שתפסיקי לנחש — ותתחילי להבין מה באמת קורה בכסף של העסק שלך."
            </blockquote>

            <CTAButton className="about-yuval__cta">
              אני רוצה לעשות סדר בכסף של העסק שלי
            </CTAButton>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
