import { num, safeDiv, fmt, rowStatus } from './calc'

/**
 * A performance card for one creative angle. Spend / purchases / notes are
 * editable and stored per-creative; CPA and status are derived safely.
 */
export default function CreativeCard({ angle, data, onChange }) {
  const spend = data?.spend ?? ''
  const purchases = data?.purchases ?? ''
  const notes = data?.notes ?? ''

  const cpa = safeDiv(num(spend), num(purchases))
  const status = rowStatus({ spend, purchases, clicks: 0, impressions: 0 })

  return (
    <div className="creative-card">
      <div className="creative-card__top">
        <span className="creative-card__name">{angle.name}</span>
        <span className={`ads-badge ads-badge--${status.tone}`}>{status.label}</span>
      </div>

      <p className="creative-card__hook">"{angle.hook}"</p>
      <p className="creative-card__format">{angle.format}</p>

      <div className="creative-card__grid">
        <label className="creative-card__field">
          <span>הוצאה (₪)</span>
          <input
            type="number"
            inputMode="decimal"
            min="0"
            value={spend}
            onChange={(e) => onChange(angle.id, 'spend', e.target.value)}
            placeholder="0"
          />
        </label>
        <label className="creative-card__field">
          <span>רכישות</span>
          <input
            type="number"
            inputMode="numeric"
            min="0"
            value={purchases}
            onChange={(e) => onChange(angle.id, 'purchases', e.target.value)}
            placeholder="0"
          />
        </label>
        <div className="creative-card__field creative-card__field--readonly">
          <span>CPA</span>
          <strong>{fmt.money2(cpa)}</strong>
        </div>
      </div>

      <label className="creative-card__field">
        <span>הערות</span>
        <input
          type="text"
          value={notes}
          onChange={(e) => onChange(angle.id, 'notes', e.target.value)}
          placeholder="מה עובד / מה לשנות"
        />
      </label>
    </div>
  )
}
