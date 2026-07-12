import { CHECKLIST_ITEMS } from './adsData'

/**
 * Funnel tracking checklist. Checked state is owned by the parent and
 * persisted in localStorage.
 * @param {Object} checked - map of itemId -> boolean
 * @param {Function} onToggle - (itemId) => void
 */
export default function FunnelChecklist({ checked, onToggle }) {
  const doneCount = CHECKLIST_ITEMS.filter((it) => checked[it.id]).length

  return (
    <section className="ads-section">
      <div className="ads-section__head">
        <div>
          <h2 className="ads-section__title">צ'קליסט מעקב פאנל</h2>
          <p className="ads-section__lead">
            {doneCount}/{CHECKLIST_ITEMS.length} הושלמו
          </p>
        </div>
      </div>

      <ul className="checklist">
        {CHECKLIST_ITEMS.map((it) => (
          <li key={it.id}>
            <label className={`checklist__item ${checked[it.id] ? 'is-done' : ''}`}>
              <input
                type="checkbox"
                checked={!!checked[it.id]}
                onChange={() => onToggle(it.id)}
              />
              <span className="checklist__box" aria-hidden="true" />
              <span className="checklist__label">{it.label}</span>
            </label>
          </li>
        ))}
      </ul>
    </section>
  )
}
