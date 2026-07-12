import {
  VIDEO_CREATIVES,
  STATIC_ADS,
  SHOOT_FIRST,
  AUDIENCE_SPLIT,
  AUDIENCE_LABEL,
  PRIORITY_LABEL,
} from './creativeKitData'
import VideoCreativeCard from './VideoCreativeCard'
import StaticAdCard from './StaticAdCard'
import './CreativeKit.css'

export default function CreativeKit() {
  return (
    <div className="ck" dir="rtl">
      <div className="ck-container">
        {/* Header */}
        <header className="ck-header">
          <h1 className="ck-header__title">Creative Kit — Profit Boost</h1>
          <p className="ck-header__subtitle">חבילת קריאייטיבים מוכנה לקמפיין ממומן במטה</p>
          <p className="ck-header__note">
            מסמך עבודה פנימי · מוצר: Profit Boost · מחיר: 97 ₪ · קהל: מניקוריסטיות ובעלות עסקים
            בתחום היופי בישראל
          </p>
        </header>

        {/* Overview table */}
        <section className="ck-section">
          <h2 className="ck-section__title">טבלת קריאייטיבים — מבט על</h2>
          <div className="ck-table-wrap">
            <table className="ck-table">
              <thead>
                <tr>
                  <th>שם הקריאייטיב</th>
                  <th>Hook</th>
                  <th>פורמט מומלץ</th>
                  <th>מתאים ל</th>
                  <th>נכסים שצריך להכין</th>
                  <th>עדיפות לצילום</th>
                </tr>
              </thead>
              <tbody>
                {VIDEO_CREATIVES.map((c) => (
                  <tr key={c.id}>
                    <td className="ck-table__name">{c.name}</td>
                    <td>"{c.hook}"</td>
                    <td>{c.format}</td>
                    <td>
                      <span className={`ck-tag ck-tag--${c.audience}`}>{AUDIENCE_LABEL[c.audience]}</span>
                    </td>
                    <td>{c.assets.join(' · ')}</td>
                    <td>
                      <span className="ck-tag ck-tag--prio">{PRIORITY_LABEL(c.priority)}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed video creative cards */}
        <section className="ck-section">
          <h2 className="ck-section__title">כרטיסי קריאייטיב מפורטים</h2>
          <p className="ck-section__lead">לחצי על כרטיס כדי לפתוח את כל הפרטים. ליד כל טקסט יש כפתור העתקה.</p>
          <div className="ck-video-list">
            {VIDEO_CREATIVES.map((c) => (
              <VideoCreativeCard key={c.id} c={c} />
            ))}
          </div>
        </section>

        {/* Static ads */}
        <section className="ck-section">
          <h2 className="ck-section__title">מודעות סטטיות (6)</h2>
          <div className="ck-static-grid">
            {STATIC_ADS.map((ad) => (
              <StaticAdCard key={ad.id} ad={ad} />
            ))}
          </div>
        </section>

        {/* What to shoot first */}
        <section className="ck-section">
          <h2 className="ck-section__title">מה לצלם קודם?</h2>
          <ol className="ck-priority">
            {SHOOT_FIRST.map((item, i) => (
              <li key={i}>
                <span className="ck-priority__num">{i + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Cold vs retargeting */}
        <section className="ck-section">
          <h2 className="ck-section__title">קהל קר מול ריטרגטינג</h2>
          <div className="ck-audience">
            <div className="ck-audience__col">
              <h3 className="ck-audience__title ck-audience__title--cold">קהל קר</h3>
              <ul>
                {AUDIENCE_SPLIT.cold.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>
            <div className="ck-audience__col">
              <h3 className="ck-audience__title ck-audience__title--rt">ריטרגטינג</h3>
              <ul>
                {AUDIENCE_SPLIT.retargeting.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
