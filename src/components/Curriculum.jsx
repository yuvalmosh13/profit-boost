import Reveal from './Reveal'
import { modules } from '../data/curriculum'
import './Curriculum.css'

/**
 * "מה תלמדי בתוך Profit Boost?" — the course curriculum as premium module
 * cards (number + title + benefit + tag). This section is the heart of the
 * page and carries the "real business course" positioning.
 * Content lives in data/curriculum.js.
 */
export default function Curriculum() {
  return (
    <section className="section section--alt" aria-labelledby="curriculum-title">
      <div className="container">
        <Reveal className="text-center">
          <span className="eyebrow">תוכן הקורס · {modules.length} שיעורים</span>
          <h2 id="curriculum-title" className="section-title">
            מה תלמדי בתוך Profit Boost?
          </h2>
          <p className="section-lead center-block">
            שבעה נושאים פרקטיים שיעשו לך סדר בכסף של העסק — כל אחד קצר וישר לעניין.
          </p>
        </Reveal>

        <Reveal className="curriculum">
          {modules.map((m) => (
            <article key={m.num} className="module">
              <div className="module__top">
                <span className="module__num" aria-hidden="true">
                  {m.num}
                </span>
                <span className="module__tag">{m.tag}</span>
              </div>
              <h3 className="module__title">{m.title}</h3>
              <p className="module__body">{m.body}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
