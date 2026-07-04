import Logo from './Logo'
import './Footer.css'

/**
 * Minimal footer. The trailing spacer leaves room for the mobile sticky bar
 * so the footer content is never hidden behind it.
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <div className="footer__logo">
          <Logo variant="light" size="sm" />
        </div>
        <p className="footer__copy">
          © 2026 Profit Boost · כל הזכויות שמורות
        </p>
      </div>
    </footer>
  )
}
