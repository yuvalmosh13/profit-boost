import { getCtaProps } from '../lib/cta'

/**
 * The single, consistent primary CTA used across the whole page.
 * Its destination + tracking are controlled centrally in:
 *   - src/config/integration.js  (CONVERSION_MODE, RAV_MESSER_URL, ...)
 *   - src/lib/cta.js             (behavior)
 * so you never wire links per-button.
 */
export default function CTAButton({ children, className = '', ...rest }) {
  const cta = getCtaProps()
  return (
    <a className={`btn btn--primary ${className}`.trim()} {...cta} {...rest}>
      {children}
    </a>
  )
}
