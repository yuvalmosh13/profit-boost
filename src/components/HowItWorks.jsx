import Reveal from './Reveal'
import { steps } from '../data/steps'
import './HowItWorks.css'

/**
 * "איך זה עובד" — three calm steps. Content lives in data/steps.js.
 */
export default function HowItWorks() {
  return (
    <section className="section" aria-labelledby="how-title">
      <div className="container">
        <Reveal className="text-center">
          <span className="eyebrow">התהליך</span>
          <h2 id="how-title" className="section-title">
            איך זה עובד
          </h2>
          <p className="section-lead center-block">
            שלושה צעדים ברורים, בקצב שלך.
          </p>
        </Reveal>

        <Reveal className="grid grid--3 steps" style={{ marginTop: '32px' }}>
          {steps.map((s) => (
            <article key={s.num} className="card step">
              <span className="step__num" aria-hidden="true">
                {s.num}
              </span>
              <h3 style={{ fontSize: '1.2rem' }}>{s.title}</h3>
              <p style={{ margin: 0, color: 'var(--ink-soft)' }}>{s.body}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
