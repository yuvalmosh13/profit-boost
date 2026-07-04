import Reveal from './Reveal'
import './Problem.css'

// Pain points — broad, sharp, with icons. `main: true` gets highlighted.
const pains = [
  { icon: '💸', text: 'כסף נכנס — אבל לא ברור כמה באמת נשאר בסוף החודש.', main: true },
  { icon: '🙈', text: 'פוחדת להעלות מחירים, גם כשמגיע לך יותר.' },
  { icon: '💅', text: 'לא בטוחה כמה לגבות על קישוטים והשלמות.' },
  { icon: '📈', text: 'רוצה להגדיל הכנסות — אבל לא יודעת מאיפה להתחיל.' },
  { icon: '🧾', text: 'עוסק פטור / זעיר / מורשה? לא באמת ברור מה ההבדל.' },
  { icon: '⏳', text: 'עובדת המון, אבל העסק לא מרגיש שמתקדם כלכלית.' },
]

/**
 * Problem / Recognition — reflects the reader's financial reality back with
 * empathy. No shame, no "what you're losing" framing.
 */
export default function Problem() {
  return (
    <section className="section" aria-labelledby="problem-title">
      <div className="container">
        <Reveal className="text-center">
          <span className="eyebrow">מוכר לך?</span>
          <h2 id="problem-title" className="section-title">
            את עובדת המון — אבל הכסף לא תמיד מסתדר
          </h2>
          <p className="section-lead center-block">
            את מעולה במקצוע שלך. אבל כשזה מגיע למספרים של העסק, משהו מרגיש עמום.
          </p>
        </Reveal>

        <Reveal className="pain-grid">
          {pains.map((p) => (
            <div
              className={`pain-card ${p.main ? 'pain-card--main' : ''}`}
              key={p.text}
            >
              <span className="pain-card__icon" aria-hidden="true">
                {p.icon}
              </span>
              <p className="pain-card__text">{p.text}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="container--narrow center-block" style={{ marginTop: '32px' }}>
          <div className="statement">
            <p className="statement__text">
              <span className="statement__accent">הכנסה היא לא רווח.</span> ואם את
              לא מודדת את זה — את לא באמת יודעת מה העסק שלך עושה.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
