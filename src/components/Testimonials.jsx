import Reveal from './Reveal'
import { reviews } from '../data/testimonials'
import './Testimonials.css'

/**
 * Social proof — built from REAL student messages (data/testimonials.js).
 * Clean quote cards + a Before/After transformation. Authentic, no
 * identifying details.
 */
export default function Testimonials() {
  return (
    <section className="section section--alt" aria-labelledby="proof-title">
      <div className="container">
        <Reveal className="text-center">
          <h2 id="proof-title" className="section-title">
            מה בעלות עסקים אומרות אחרי שהן עושות סדר במספרים
          </h2>
          <p className="section-lead center-block">
            הודעות אמיתיות מתלמידות ובעלות עסקים שהתחילו להבין טוב יותר את הכסף, התמחור וההתנהלות של העסק שלהן.
          </p>
        </Reveal>

        {/* Review cards */}
        <Reveal className="reviews">
          {reviews.map((r, i) => (
            <figure className="review" key={i}>
              <blockquote className="review__body">
                <p className="review__text">{r.text}</p>
              </blockquote>
            </figure>
          ))}
        </Reveal>

        {/* Before / After transformation */}
        <Reveal className="case">
          <p className="case__title">מה משתנה בפועל</p>
          <div className="case__grid">
            <div className="case__col case__col--before">
              <span className="case__badge">לפני</span>
              <p>עובדת הרבה, לא יודעת כמה נשאר.</p>
            </div>
            <div className="case__arrow" aria-hidden="true">←</div>
            <div className="case__col case__col--after">
              <span className="case__badge case__badge--after">אחרי</span>
              <p>יודעת לתמחר, לנהל אקסל ולהבין רווח אמיתי.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
