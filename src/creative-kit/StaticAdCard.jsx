import CopyButton from './CopyButton'

/** A static ad concept card. */
export default function StaticAdCard({ ad }) {
  return (
    <article className="ck-static">
      <div className="ck-static__head">
        <h3 className="ck-static__title">{ad.title}</h3>
        <CopyButton text={`${ad.title}\n${ad.subtitle}`} label="העתקת טקסט" />
      </div>
      <p className="ck-static__subtitle">{ad.subtitle}</p>

      <div className="ck-static__row">
        <span className="ck-static__label">רעיון ויזואלי</span>
        <p>{ad.visual}</p>
      </div>

      <div className="ck-static__foot">
        <span className="ck-tag ck-tag--prio">{ad.cta}</span>
        <span className="ck-tag">{ad.format}</span>
      </div>
    </article>
  )
}
