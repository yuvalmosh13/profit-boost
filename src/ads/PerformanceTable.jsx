import { deriveRow, rowStatus, fmt } from './calc'

/**
 * Editable daily performance table. Manual columns are inputs; revenue / CPA /
 * ROAS / CTR / status are computed live and read-only. All parent-owned state.
 */
export default function PerformanceTable({ rows, onChange, onAdd, onDelete, onReset, onExport }) {
  return (
    <section className="ads-section">
      <div className="ads-section__head">
        <div>
          <h2 className="ads-section__title">טבלת ביצועים יומית</h2>
          <p className="ads-section__lead">
            מזינים שורה לכל יום / אדסט / קריאייטיב. העמודות המחושבות מתעדכנות לבד.
          </p>
        </div>
        <div className="ads-actions">
          <button type="button" className="ads-btn ads-btn--primary" onClick={onAdd}>
            + הוספת שורה
          </button>
          <button type="button" className="ads-btn" onClick={onExport}>
            ייצוא CSV
          </button>
          <button type="button" className="ads-btn ads-btn--danger" onClick={onReset}>
            איפוס נתונים
          </button>
        </div>
      </div>

      <div className="ads-table-wrap">
        <table className="ads-table">
          <thead>
            <tr>
              <th>תאריך</th>
              <th>קמפיין</th>
              <th>אדסט</th>
              <th>קריאייטיב</th>
              <th>הוצאה</th>
              <th>חשיפות</th>
              <th>קליקים</th>
              <th>צפיות בדף</th>
              <th>Init. Checkout</th>
              <th>רכישות</th>
              <th className="ads-table__calc">הכנסות</th>
              <th className="ads-table__calc">CPA</th>
              <th className="ads-table__calc">ROAS</th>
              <th className="ads-table__calc">CTR</th>
              <th>סטטוס</th>
              <th>הערות</th>
              <th aria-label="מחיקה"></th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr>
                <td colSpan={17} className="ads-table__empty">
                  אין עדיין נתונים — לחצי על "הוספת שורה" כדי להתחיל.
                </td>
              </tr>
            )}
            {rows.map((row) => {
              const d = deriveRow(row)
              const status = rowStatus(row)
              const t = (field) => (e) => onChange(row.id, field, e.target.value)
              return (
                <tr key={row.id}>
                  <td><input type="date" value={row.date} onChange={t('date')} /></td>
                  <td><input type="text" value={row.campaign} onChange={t('campaign')} placeholder="קמפיין" /></td>
                  <td><input type="text" value={row.adset} onChange={t('adset')} placeholder="אדסט" /></td>
                  <td><input type="text" value={row.creative} onChange={t('creative')} placeholder="קריאייטיב" /></td>
                  <td><input type="number" inputMode="decimal" min="0" value={row.spend} onChange={t('spend')} placeholder="0" /></td>
                  <td><input type="number" inputMode="numeric" min="0" value={row.impressions} onChange={t('impressions')} placeholder="0" /></td>
                  <td><input type="number" inputMode="numeric" min="0" value={row.clicks} onChange={t('clicks')} placeholder="0" /></td>
                  <td><input type="number" inputMode="numeric" min="0" value={row.landingViews} onChange={t('landingViews')} placeholder="0" /></td>
                  <td><input type="number" inputMode="numeric" min="0" value={row.initiateCheckout} onChange={t('initiateCheckout')} placeholder="0" /></td>
                  <td><input type="number" inputMode="numeric" min="0" value={row.purchases} onChange={t('purchases')} placeholder="0" /></td>
                  <td className="ads-table__calc">{fmt.money(d.revenue)}</td>
                  <td className="ads-table__calc">{fmt.money2(d.cpa)}</td>
                  <td className="ads-table__calc">{fmt.ratio(d.roas)}</td>
                  <td className="ads-table__calc">{fmt.pct(d.ctr)}</td>
                  <td>
                    <span className={`ads-badge ads-badge--${status.tone}`}>{status.label}</span>
                  </td>
                  <td><input type="text" value={row.notes} onChange={t('notes')} placeholder="הערות" /></td>
                  <td>
                    <button
                      type="button"
                      className="ads-row-del"
                      onClick={() => onDelete(row.id)}
                      aria-label="מחיקת שורה"
                      title="מחיקת שורה"
                    >
                      ×
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}
