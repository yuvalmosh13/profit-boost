import { CREATIVE_LIBRARY } from './adsData'

/**
 * Read-only library of ready-to-use creative scripts (hook / script / on-screen
 * text / caption / CTA) for copy-pasting into Meta Ads Manager.
 */
export default function CreativeLibrary() {
  return (
    <section className="ads-section">
      <div className="ads-section__head">
        <div>
          <h2 className="ads-section__title">ספריית קריאייטיבים מוכנים</h2>
          <p className="ads-section__lead">סקריפטים מוכנים להעתקה — הוק, תסריט, טקסט על מסך, כיתוב ו־CTA.</p>
        </div>
      </div>

      <div className="library-grid">
        {CREATIVE_LIBRARY.map((c) => (
          <article key={c.id} className="library-card">
            <h3 className="library-card__angle">{c.angle}</h3>

            <div className="library-card__block">
              <span className="library-card__label">Hook</span>
              <p className="library-card__hook">"{c.hook}"</p>
            </div>

            <div className="library-card__block">
              <span className="library-card__label">תסריט וידאו</span>
              <p>{c.script}</p>
            </div>

            <div className="library-card__block">
              <span className="library-card__label">טקסט על מסך</span>
              <p>{c.onScreen}</p>
            </div>

            <div className="library-card__block">
              <span className="library-card__label">כיתוב (Caption)</span>
              <p>{c.caption}</p>
            </div>

            <div className="library-card__cta">
              <span className="library-card__label">CTA</span>
              <span className="library-card__cta-pill">{c.cta}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
