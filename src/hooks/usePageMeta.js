import { useEffect } from 'react'
import { OG_IMAGE_URL, SITE_URL } from '../seo/siteMeta'

function setOrCreateMeta(selector, attr, attrVal, content) {
  let el = document.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, attrVal)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/**
 * Updates document title, meta description, optional keywords, canonical, and primary Open Graph / Twitter tags.
 * Helps JS-aware crawlers (Google, many AI indexers) see correct per-route signals in an SPA.
 *
 * @param {object} opts
 * @param {string|null} [opts.keywords] — Comma-separated keywords; pass `null` to remove the tag (e.g. legal pages).
 */
export function usePageMeta({ title, description, path, keywords }) {
  useEffect(() => {
    document.title = title

    setOrCreateMeta('meta[name="title"]', 'name', 'title', title)
    setOrCreateMeta('meta[name="description"]', 'name', 'description', description)

    const kwExisting = document.querySelector('meta[name="keywords"]')
    if (typeof keywords === 'string' && keywords.trim() !== '') {
      setOrCreateMeta('meta[name="keywords"]', 'name', 'keywords', keywords.trim())
    } else if (keywords === null) {
      if (kwExisting) kwExisting.remove()
    }

    const canonicalHref = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
    let link = document.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', canonicalHref)

    setOrCreateMeta('meta[property="og:title"]', 'property', 'og:title', title)
    setOrCreateMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setOrCreateMeta('meta[property="og:url"]', 'property', 'og:url', canonicalHref)
    setOrCreateMeta('meta[property="og:image"]', 'property', 'og:image', OG_IMAGE_URL)

    setOrCreateMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    setOrCreateMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    setOrCreateMeta('meta[name="twitter:image"]', 'name', 'twitter:image', OG_IMAGE_URL)
  }, [title, description, path, keywords])
}
