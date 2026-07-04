import { LEAD_FORM_EMBED_CODE, hasLeadEmbed } from '../config/integration'
import './LeadForm.css'

/**
 * Optional embedded Rav Messer form section (#lead-form).
 * In 'lead' mode, every CTA scrolls here.
 *
 * To activate: paste your Rav Messer iframe embed into LEAD_FORM_EMBED_CODE
 * in src/config/integration.js. Until then, a clean placeholder is shown.
 *
 * If you prefer pure 'checkout' mode, you can delete this section from
 * App.jsx — nothing else depends on it.
 */
export default function LeadForm() {
  return (
    <section id="lead-form" className="section lead-form" aria-labelledby="lead-form-title">
      <div className="container container--narrow text-center">
        <span className="eyebrow">השארת פרטים</span>
        <h2 id="lead-form-title" className="section-title">
          רוצה שנשלח לך את כל הפרטים?
        </h2>
        <p className="section-lead center-block">
          מלאי פרטים כאן ונחזור אלייך עם כל המידע על Profit Boost.
        </p>

        {hasLeadEmbed ? (
          // Rav Messer iframe embed is injected here from integration.js.
          <div
            className="lead-form__embed"
            dangerouslySetInnerHTML={{ __html: LEAD_FORM_EMBED_CODE }}
          />
        ) : (
          <div className="lead-form__placeholder">
            <p className="lead-form__placeholder-text">כאן יוטמע טופס רב מסר</p>
            <p className="lead-form__placeholder-hint">
              להטמעה: הדביקי את קוד ה-iframe של הטופס בקובץ
              <code> src/config/integration.js </code>
              (הקבוע <code>LEAD_FORM_EMBED_CODE</code>).
            </p>
            {/*
              >>> PASTE RAV MESSER FORM EMBED in src/config/integration.js
                  (constant LEAD_FORM_EMBED_CODE).
                  If it is a <script>-based embed, paste the <script> in
                  index.html and render it into a <div id="rm-form"></div> here. <<<
            */}
          </div>
        )}
      </div>
    </section>
  )
}
