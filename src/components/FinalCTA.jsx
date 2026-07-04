import CTAButton from './CTAButton'
import './FinalCTA.css'

/**
 * Final CTA. NO motion (per spec). Calm, warm, one clear action.
 */
export default function FinalCTA() {
  return (
    <section className="section final-cta" aria-labelledby="final-title">
      <div className="container container--narrow text-center">
        <h2 id="final-title" className="section-title">
          מגיע לך להבין את הכסף של העסק שלך
        </h2>
        <p className="section-lead center-block" style={{ marginBottom: '26px' }}>
          התחילי היום עם תוכנית קצרה ופרקטית — ותפסיקי לנחש כמה העסק שלך באמת
          מרוויח.
        </p>
        <CTAButton>כן, אני רוצה להבין את העסק שלי טוב יותר</CTAButton>
      </div>
    </section>
  )
}
