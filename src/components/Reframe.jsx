import Reveal from './Reveal'
import './Reframe.css'

/**
 * Reframe — "this is not just another theory course". Positions Profit Boost
 * as a broad, practical program. The actual topic list lives in the Curriculum
 * section below, so no topic chips are duplicated here.
 */
export default function Reframe() {
  return (
    <section className="section section--alt" aria-labelledby="reframe-title">
      <div className="container container--narrow text-center">
        <Reveal>
          <span className="eyebrow">מה זה בעצם</span>
          <h2 id="reframe-title" className="section-title">
            לא עוד קורס תיאורטי — תוכנית פרקטית לכסף של העסק שלך
          </h2>
          <p className="section-lead center-block">
            Profit Boost היא תוכנית דיגיטלית קצרה ופרקטית שתעזור לך להבין כמה
            העסק שלך באמת מרוויח, לתמחר נכון, להעלות מחירים בביטחון, לדעת מה לגבות
            על קישוטים והשלמות, להבין את ההבדלים בין סוגי העוסקים — ולנהל את הכסף
            בעסק בצורה הרבה יותר ברורה.
          </p>
        </Reveal>

        <Reveal className="mechanism">
          <span className="mechanism__label">השיטה</span>
          <p className="mechanism__text">
            7 שיעורים קצרים + אקסל מוכן לניהול העסק. במקום רו״ח יקר או קורס
            פיננסי ארוך — מסלול קצר ופרקטי שמתאים גם למי ששונאת מספרים, ואפשר
            ליישם כבר השבוע.
          </p>
          <div className="mechanism__pills">
            <span className="mechanism__pill">7 שיעורים קצרים</span>
            <span className="mechanism__pill">אקסל מוכן</span>
            <span className="mechanism__pill">יישום כבר השבוע</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
