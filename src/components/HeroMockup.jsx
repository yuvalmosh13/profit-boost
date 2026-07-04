import './HeroMockup.css'

/**
 * Premium product mockup for the hero — built entirely with CSS + inline SVG
 * so it needs NO image assets and survives export to static HTML / a landing
 * builder. It signals "real business tool", not "cheap mini-course":
 *   - laptop with a profit dashboard (KPI + animated rising bars + mini table)
 *   - phone showing a course-lesson preview
 *   - floating Excel-sheet card
 *   - floating value chips
 *
 * Replace with real product screenshots later if you prefer (see README).
 */
export default function HeroMockup() {
  return (
    <div
      className="mockup"
      role="img"
      aria-label="תצוגה של לוח הרווח, קובץ האקסל ותצוגת שיעור מתוך Profit Boost"
    >
      {/* ---- Laptop ---- */}
      <div className="mockup__laptop">
        <div className="mockup__screen">
          <div className="mockup__chrome" aria-hidden="true">
            <span /><span /><span />
          </div>
          <div className="mockup__dash">
            <div className="mockup__dash-head">
              <span className="mockup__dash-title">Profit Boost · לוח רווח</span>
              <span className="mockup__dot" />
            </div>

            <div className="mockup__kpi">
              <span className="mockup__kpi-label">רווח נטו החודש</span>
              <span className="mockup__kpi-value">
                ₪ 8,240 <span className="mockup__kpi-trend">▲ מגמת עלייה</span>
              </span>
            </div>

            {/* animated rising profit graph */}
            <svg
              className="mockup__chart"
              viewBox="0 0 260 90"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {[30, 42, 38, 58, 66, 80].map((h, i) => (
                <rect
                  key={i}
                  x={8 + i * 42}
                  y={90 - h}
                  width="26"
                  height={h}
                  rx="4"
                  className={`mockup__bar ${i === 5 ? 'mockup__bar--peak' : ''}`}
                  style={{ animationDelay: `${i * 0.09}s` }}
                />
              ))}
            </svg>

            {/* mini table */}
            <div className="mockup__grid" aria-hidden="true">
              <div className="mockup__row mockup__row--head">
                <span>טיפול</span><span>מחיר</span><span>רווח</span>
              </div>
              <div className="mockup__row"><span>לק ג'ל</span><span>180</span><span>112</span></div>
              <div className="mockup__row"><span>מניקור</span><span>120</span><span>74</span></div>
            </div>
          </div>
        </div>
        <div className="mockup__base" />
      </div>

      {/* ---- Phone: course lesson preview ---- */}
      <div className="mockup__phone" aria-hidden="true">
        <div className="mockup__phone-screen">
          <div className="mockup__lesson-thumb">
            <span className="mockup__play">▶</span>
          </div>
          <span className="mockup__lesson-tag">שיעור 3</span>
          <span className="mockup__lesson-title">איך לתמחר נכון</span>
          <div className="mockup__lesson-bar"><span /></div>
        </div>
      </div>

      {/* ---- Floating Excel-sheet card ---- */}
      <div className="mockup__excel" aria-hidden="true">
        <span className="mockup__excel-tag">📊 אקסל ניהול עסק</span>
        <div className="mockup__excel-grid">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className={i % 4 === 0 ? 'is-head' : ''} />
          ))}
        </div>
      </div>

      {/* ---- Floating chips ---- */}
      <span className="mockup__chip mockup__chip--access" aria-hidden="true">
        ⚡ גישה מיידית
      </span>
    </div>
  )
}
