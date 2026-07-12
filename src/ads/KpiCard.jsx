/**
 * A single KPI summary tile.
 * @param {string} label  - metric name (Hebrew)
 * @param {string} value  - already-formatted value (may be "—")
 * @param {string} [hint] - small caption under the value
 * @param {string} [tone] - 'gold' | 'good' | 'bad' | 'neutral' accent
 */
export default function KpiCard({ label, value, hint, tone = 'neutral' }) {
  return (
    <div className={`kpi-card kpi-card--${tone}`}>
      <span className="kpi-card__label">{label}</span>
      <span className="kpi-card__value">{value}</span>
      {hint && <span className="kpi-card__hint">{hint}</span>}
    </div>
  )
}
