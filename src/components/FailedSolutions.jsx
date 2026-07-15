import Reveal from './Reveal'
import './FailedSolutions.css'

/**
 * "The solutions that failed" — surfaces what the visitor has already tried
 * (and why it didn't work) right before the solution, strengthening the need
 * for Profit Boost's mechanism. Placed between the Pain and Reframe sections.
 */
const failed = [
  {
    tried: 'לנחש לבד לפי תחושה',
    why: 'ובסוף החודש עדיין לא ברור כמה באמת נשאר.',
  },
  {
    tried: 'לשאול בקבוצות פייסבוק',
    why: 'ולקבל 40 תשובות סותרות בלי לדעת מה נכון לך.',
  },
  {
    tried: 'רו״ח יקר',
    why: 'שמסביר לך על מיסים — לא איך לתמחר טיפול.',
  },
  {
    tried: 'קורסים ארוכים ותיאורטיים',
    why: 'שנתקעים באמצע ולא מתורגמים לעסק שלך.',
  },
]

export default function FailedSolutions() {
  return (
    <section className="section" aria-labelledby="failed-title">
      <div className="container container--mid text-center">
        <Reveal>
          <span className="eyebrow">למה זה עדיין לא הסתדר</span>
          <h2 id="failed-title" className="section-title">
            כבר ניסית הכול — וזה עדיין לא הסתדר
          </h2>
        </Reveal>

        <Reveal className="failed-grid">
          {failed.map((f) => (
            <div className="failed-card" key={f.tried}>
              <span className="failed-card__x" aria-hidden="true">✕</span>
              <div>
                <p className="failed-card__tried">{f.tried}</p>
                <p className="failed-card__why">{f.why}</p>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal>
          <p className="failed-close">
            מה שחסר זה מסלול קצר ופרקטי שמדבר בשפה שלך — וזה בדיוק Profit Boost.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
