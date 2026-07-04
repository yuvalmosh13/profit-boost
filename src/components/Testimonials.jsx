import Reveal from './Reveal'
import { reviews, chips } from '../data/testimonials'
import './Testimonials.css'

const platformLabel = { whatsapp: 'WhatsApp', instagram: 'Instagram' }

/**
 * Social proof — built from REAL student messages (data/testimonials.js).
 * A clean grid of chat-style review cards + slim highlight chips + a
 * Before/After transformation. Authentic, no identifying details.
 */
export default function Testimonials() {
  return (
    <section className="section section--alt" aria-labelledby="proof-title">
      <div className="container">
        <Reveal className="text-center">
          <span className="eyebrow">המלצות אמיתיות מתלמידות ובעלות עסקים</span>
          <h2 id="proof-title" className="section-title">
            מה בעלות עסקים אומרות אחרי שהן עושות סדר במספרים
          </h2>
          <p className="section-lead center-block">
            הודעות אמיתיות שקיבלנו — פרטים מזהים הוסרו מטעמי פרטיות.
          </p>
        </Reveal>

        {/* Slim highlight chips */}
        <Reveal className="quote-strip">
          {chips.map((q) => (
            <span className="quote-chip" key={q}>
              „{q}”
            </span>
          ))}
        </Reveal>

        {/* Review cards */}
        <Reveal className="reviews">
          {reviews.map((r, i) => (
            <figure className={`review review--${r.platform}`} key={i}>
              <div className="review__head">
                <span className="review__avatar" aria-hidden="true" />
                <span className="review__platform">{platformLabel[r.platform]}</span>
                <span className="review__badge" aria-hidden="true">✓</span>
              </div>
              <blockquote className="review__body">
                <p className="review__text">{r.text}</p>
                {r.time && <span className="review__time">{r.time}</span>}
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
