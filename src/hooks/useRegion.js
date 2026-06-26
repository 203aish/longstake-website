import { useEffect, useState } from 'react'

const STORAGE_KEY = 'longstake_region'

/** Cheap, dependency-free locale guess used before/if the IP lookup fails. */
function guessFromLocale() {
  try {
    const langs = navigator.languages || [navigator.language || '']
    if (langs.some((l) => /-CA$/i.test(l))) return 'CA'
    if (langs.some((l) => /-US$/i.test(l))) return 'US'
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''
    if (/Toronto|Montreal|Edmonton|Winnipeg|Vancouver|Halifax|Regina|St_Johns/i.test(tz)) return 'CA'
  } catch {
    /* ignore */
  }
  return null
}

/**
 * Detects whether the visitor is in Canada ('CA') or elsewhere ('US' = USD).
 * Order: saved manual choice → IP lookup (geojs) → locale guess → default 'CA'.
 * `setRegion` lets the UI override detection; the choice is remembered.
 */
export function useRegion() {
  const [region, setRegionState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'CA' || saved === 'US') return saved
    } catch {
      /* ignore */
    }
    return guessFromLocale() || 'CA'
  })

  useEffect(() => {
    let cancelled = false
    try {
      if (localStorage.getItem(STORAGE_KEY)) return undefined // respect manual choice
    } catch {
      /* ignore */
    }

    fetch('https://get.geojs.io/v1/ip/country.json')
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return
        const country = (data && data.country) || ''
        setRegionState(country === 'CA' ? 'CA' : 'US')
      })
      .catch(() => {
        /* keep current guess */
      })

    return () => {
      cancelled = true
    }
  }, [])

  const setRegion = (next) => {
    setRegionState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }

  return [region, setRegion]
}
