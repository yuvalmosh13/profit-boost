import './Logo.css'

/**
 * Profit Boost wordmark — rendered as crisp, transparent inline SVG/CSS.
 * (The owner approved this drawn version; we render it directly so there's no
 *  404/flash from trying to load an image file.)
 *
 * ── If you ever want to use a real image instead ─────────────────────────
 *   Save it as  public/logo.png  and replace this component body with:
 *     return <img src="/logo.png" alt="Profit Boost" className={`logo-img ${className}`} />
 * ────────────────────────────────────────────────────────────────────────
 *
 * @param {string} variant  '' (default, dark ink) | 'light' (for dark footer)
 * @param {string} size     '' (default) | 'sm'
 */
export default function Logo({ variant = '', size = '', className = '' }) {
  return (
    <span
      dir="ltr"
      className={`logo ${variant ? `logo--${variant}` : ''} ${size ? `logo--${size}` : ''} ${className}`.trim()}
      aria-label="Profit Boost"
      role="img"
    >
      <span className="logo__row">
        <span className="logo__profit">PROFIT</span>
        <svg className="logo__spark" viewBox="0 0 96 58" aria-hidden="true">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="30" y1="50" x2="30" y2="41" />
            <line x1="42" y1="50" x2="42" y2="35" />
            <line x1="54" y1="50" x2="54" y2="28" />
            <line x1="66" y1="50" x2="66" y2="21" />
            <path d="M2 30 L22 30 C 44 30, 60 24, 88 6" />
            <path d="M75 4 L90 5 L84 18" />
          </g>
        </svg>
      </span>
      <span className="logo__boost">BOOST</span>
    </span>
  )
}
