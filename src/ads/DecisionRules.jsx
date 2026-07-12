import { DECISION_RULES } from './adsData'

/** "מה עושים עם הנתונים?" — a quick decision guide. */
export default function DecisionRules() {
  return (
    <section className="ads-section">
      <div className="ads-section__head">
        <div>
          <h2 className="ads-section__title">מה עושים עם הנתונים?</h2>
          <p className="ads-section__lead">מדריך החלטה מהיר לפי המספרים.</p>
        </div>
      </div>

      <ul className="rules-list">
        {DECISION_RULES.map((r, i) => (
          <li key={i} className={`rule-item rule-item--${r.tone}`}>
            <span className="rule-item__if">{r.rule}</span>
            <span className="rule-item__arrow" aria-hidden="true">←</span>
            <span className="rule-item__then">{r.action}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
