import { useState } from 'react'
import CopyButton from './CopyButton'
import { AUDIENCE_LABEL, PRIORITY_LABEL } from './creativeKitData'

/** One copyable text block: label, text, and a copy button. */
function Field({ label, text, multiline }) {
  return (
    <div className="ck-field">
      <div className="ck-field__head">
        <span className="ck-field__label">{label}</span>
        <CopyButton text={text} />
      </div>
      <p className={`ck-field__text ${multiline ? 'ck-field__text--multi' : ''}`}>{text}</p>
    </div>
  )
}

/** Expandable detailed card for a single video creative. */
export default function VideoCreativeCard({ c }) {
  const [open, setOpen] = useState(false)

  return (
    <article className={`ck-video ${open ? 'is-open' : ''}`}>
      <button type="button" className="ck-video__header" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span className="ck-video__name">{c.name}</span>
        <span className="ck-video__meta">
          <span className={`ck-tag ck-tag--${c.audience}`}>{AUDIENCE_LABEL[c.audience]}</span>
          <span className="ck-tag ck-tag--prio">{PRIORITY_LABEL(c.priority)}</span>
          <span className="ck-tag">{c.format}</span>
          <span className="ck-video__chevron" aria-hidden="true">{open ? '−' : '+'}</span>
        </span>
      </button>

      <p className="ck-video__hook-preview">"{c.hook}"</p>

      {open && (
        <div className="ck-video__body">
          <Field label="Hook (שנייה ראשונה)" text={c.hook} />
          <Field label="טקסט על המסך" text={c.onScreen} />
          <Field label="תסריט וידאו (15–30 שניות)" text={c.script} multiline />

          <div className="ck-field">
            <span className="ck-field__label">סטוריבורד</span>
            <ul className="ck-storyboard">
              {c.storyboard.map((s, i) => (
                <li key={i}>
                  <span className="ck-storyboard__time">{s.time}</span>
                  <span className="ck-storyboard__see">{s.see}</span>
                </li>
              ))}
            </ul>
          </div>

          <Field label="Caption קצר" text={c.captionShort} multiline />
          <Field label="Caption ארוך" text={c.captionLong} multiline />
          <Field label="CTA" text={c.cta} />

          <div className="ck-field">
            <span className="ck-field__label">פורמט מומלץ</span>
            <p className="ck-field__text">{c.format}</p>
          </div>

          <div className="ck-field">
            <span className="ck-field__label">הערות צילום</span>
            <p className="ck-field__text ck-field__text--multi">{c.shootingNotes}</p>
          </div>

          <div className="ck-field">
            <span className="ck-field__label">נכסים לצילום / העלאה</span>
            <ul className="ck-assets">
              {c.assets.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </article>
  )
}
