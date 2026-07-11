import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Reframe from './components/Reframe'
import Calculator from './components/Calculator'
import Curriculum from './components/Curriculum'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Offer from './components/Offer'
import LeadForm from './components/LeadForm'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import StickyCTA from './components/StickyCTA'
import EmailModal from './components/EmailModal'
import CTAButton from './components/CTAButton'
import { CONVERSION_MODE, hasLeadEmbed } from './config/integration'
import { setEmailModalOpenFn } from './lib/cta'

export default function App() {
  const [emailModalOpen, setEmailModalOpen] = useState(false)
  const showLeadForm = CONVERSION_MODE === 'lead' || hasLeadEmbed

  useEffect(() => {
    setEmailModalOpenFn(() => setEmailModalOpen(true))
  }, [])

  return (
    <>
      <main>
        <Hero />
        <Problem />
        <Reframe />
        <Curriculum />

        {/* About Yuval Section */}
        <section id="about-yuval" className="section about-yuval">
          <div className="container">
            <div className="about-yuval__grid">
              <div className="about-yuval__visual">
                <div className="about-yuval__badge">מי עומדת מאחורי הקורס?</div>
                <div className="about-yuval__portrait">
                  <div className="about-yuval__name">Yuval Mosh</div>
                  <div className="about-yuval__role">מניקוריסטית · מדריכה · בעלת עסק</div>
                  <div className="about-yuval__logo">Profit Boost</div>
                </div>
              </div>

              <div className="about-yuval__content">
                <span className="eyebrow">מי אני?</span>
                <h2 className="about-yuval__headline">נעים מאוד, אני יובל</h2>

                <p>
                  אני יובל מוש, מניקוריסטית, מדריכה ובעלת עסק שחיה את התחום הזה ביום־יום.
                </p>

                <p>
                  אני יודעת כמה קל להיות עסוקה, לקבל לקוחות, לקנות חומרים, להעלות סטוריז,
                  לעבוד בלי הפסקה — ועדיין לא באמת להבין כמה כסף נשאר בסוף.
                </p>

                <p>
                  בדיוק בגלל זה יצרתי את Profit Boost. רציתי לקחת נושא שמרגיש להרבה בעלות
                  עסקים מסובך, מלחיץ ולא נעים — ולהפוך אותו למשהו פשוט, ברור ופרקטי.
                </p>

                <p>
                  המטרה שלי היא לא שתהיי רואת חשבון. המטרה שלי היא שתביני את העסק שלך טוב
                  יותר, תדעי לתמחר נכון יותר, ותדברי על כסף מול לקוחות עם הרבה יותר ביטחון.
                </p>

                <ul className="about-yuval__bullets">
                  <li>מניקוריסטית ומדריכה בתחום הציפורניים</li>
                  <li>מלווה בעלות עסקים בתחום היופי</li>
                  <li>יוצרת כלים פרקטיים לניהול ותמחור בעסק</li>
                </ul>

                <blockquote className="about-yuval__quote">
                  "המטרה שלי היא שתפסיקי לנחש — ותתחילי להבין מה באמת קורה בכסף של העסק שלך."
                </blockquote>

                <CTAButton className="about-yuval__cta">
                  אני רוצה לעשות סדר בכסף של העסק שלי
                </CTAButton>
              </div>
            </div>
          </div>
        </section>

        <Calculator />
        <HowItWorks />
        <Testimonials />
        <Offer />
        {showLeadForm && <LeadForm />}
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
      <EmailModal isOpen={emailModalOpen} onClose={() => setEmailModalOpen(false)} />
    </>
  )
}
