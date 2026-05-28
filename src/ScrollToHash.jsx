import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Restore scroll on client-side navigation:
 * - With a hash (#site-contact, etc.) → scroll that element into view.
 * - Otherwise → scroll to top (default browser full-page reload behavior).
 */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace(/^#/, '')
      if (id) {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}
