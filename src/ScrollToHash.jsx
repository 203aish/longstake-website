import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to `document.getElementById` when the route includes a hash (e.g. #site-contact). */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace(/^#/, '')
    if (!id) return
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [pathname, hash])

  return null
}
