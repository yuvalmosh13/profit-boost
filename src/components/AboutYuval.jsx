import { useState } from 'react'
import Reveal from './Reveal'
import './AboutYuval.css'

const credentials = [
  'מניקוריסטית ומדריכה מהשטח',
  'בעלת מותג ומוצרי ציפורניים',
  'בעלת רקע אקדמי במנהל עסקים וראיית חשבון',
  'מלווה נשים בתחום היופי בניהול, תמחור והתפתחות עסקית',
]

export default function AboutYuval() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <section className="section about-yuval">
      <div className="container">
        <Reveal>
          <span className="eyebrow">מי עומדת מאחורי Profit Boost?</span>
        </Reveal>

        <div className="about-yuval__grid">
          {/* Text side */}
          <Reveal className="about-yuval__text">
            <p className="about-yuval__intro">
              אני יובל מוש, מניקוריסטית, מדריכה ובעלת עסק בתחום הציפורניים.
            </p>

            <p>
              לצד הניסיון שלי מהשטח, למדתי תואר במנהל עסקים וראיית חשבון — והחיבור בין עולם היופי לעולם המספרים הוא בדיוק מה שהוביל אותי ליצור את Profit Boost.
            </p>

            <p>
              אחרי שנים שבהן ליוויתי נשים בתחום, מכרתי מוצרים, יצרתי הדרכות ודיברתי עם בעלות עסקים מהשטח — ראיתי שוב ושוב את אותה בעיה:
            </p>

            <p className="about-yuval__highlight">
              נשים מוכשרות, עם לקוחות, עבודה ויומן מלא — אבל בלי מספיק סדר בכסף של העסק.
            </p>

            <p>
              Profit Boost נולד כדי להפוך את הנושא הזה לפשוט, ברור ולא מאיים. לא קורס פיננסי כבד, אלא תוכנית קצרה ופרקטית שתעזור לך להבין את המספרים, לתמחר נכון, להעלות מחירים בביטחון ולקבל החלטות עסקיות חכמות יותר.
            </p>

            <div className="about-yuval__signature">— יובל מוש</div>
          </Reveal>

          {/* Credentials side */}
          <Reveal className="about-yuval__credentials">
            <div className="about-yuval__photo">
              <div className={`about-yuval__photo-placeholder ${imageLoaded ? 'loaded' : ''}`}>
                {!imageFailed && (
                  <img
                    src="/yuval.jpg"
                    alt="יובל מוש"
                    className="about-yuval__photo-img"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageFailed(true)}
                  />
                )}
                {imageFailed && (
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="100" fill="var(--accent-soft)" />
                    <circle cx="100" cy="70" r="30" fill="var(--primary)" opacity="0.2" />
                    <ellipse cx="100" cy="140" rx="45" ry="50" fill="var(--primary)" opacity="0.15" />
                  </svg>
                )}
              </div>
            </div>

            <ul className="about-yuval__creds-list">
              {credentials.map((cred, i) => (
                <li key={i} className="about-yuval__cred-item">
                  <span className="about-yuval__cred-icon">✓</span>
                  <span>{cred}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
