import { useState, useCallback, createContext, useContext } from 'react'

const EmailModalContext = createContext()

export function EmailModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = useCallback(() => {
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <EmailModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </EmailModalContext.Provider>
  )
}

export function useEmailModal() {
  const context = useContext(EmailModalContext)
  if (!context) {
    throw new Error('useEmailModal must be used within EmailModalProvider')
  }
  return context
}
