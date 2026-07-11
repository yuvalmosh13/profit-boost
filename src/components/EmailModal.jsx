import { useState, useRef, useEffect } from 'react'
import { RAV_MESSER_URL } from '../config/integration'
import './EmailModal.css'

export default function EmailModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const inputRef = useRef(null)

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const validateEmail = (e) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(e)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    const trimmedEmail = email.trim()

    if (!trimmedEmail) {
      setError('נראה שהמייל לא תקין, נסי שוב')
      return
    }

    if (!validateEmail(trimmedEmail)) {
      setError('נראה שהמייל לא תקין, נסי שוב')
      return
    }

    // Save to localStorage
    localStorage.setItem('profitBoostCustomerEmail', trimmedEmail)

    // Navigate to checkout
    setIsSubmitting(true)
    const checkoutUrl = RAV_MESSER_URL + (RAV_MESSER_URL.includes('?') ? '&' : '?') + `email=${encodeURIComponent(trimmedEmail)}`
    window.location.href = checkoutUrl
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="email-modal-backdrop" onClick={handleBackdropClick} aria-hidden={!isOpen}>
      <div className="email-modal" role="dialog" aria-modal="true" aria-labelledby="email-modal-title">
        <button
          type="button"
          className="email-modal__close"
          onClick={onClose}
          aria-label="סגור"
        >
          ×
        </button>

        <div className="email-modal__content">
          <h2 id="email-modal-title" className="email-modal__title">
            רגע לפני שממשיכים לתשלום
          </h2>

          <p className="email-modal__description">
            הכניסי את כתובת המייל שאליה תרצי לקבל את הגישה לקורס Profit Boost.
          </p>

          <form onSubmit={handleSubmit} className="email-modal__form">
            <div className="email-modal__field">
              <input
                ref={inputRef}
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (error) setError('')
                }}
                placeholder="כתובת המייל שלך"
                className={`email-modal__input ${error ? 'has-error' : ''}`}
                disabled={isSubmitting}
                autoComplete="email"
                required
              />
              {error && <span className="email-modal__error">{error}</span>}
            </div>

            <button
              type="submit"
              className="btn btn--primary email-modal__submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'מעבר לתשלום...' : 'להמשך לתשלום'}
            </button>

            <p className="email-modal__hint">
              פרטי הגישה לקורס יישלחו למייל שתזיני כאן.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
