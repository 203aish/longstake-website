import React from 'react'
import { Link, useLocation } from 'react-router-dom'

/** Fragment id on the footer "Contact us" block (header control scrolls here). */
export const FOOTER_CONTACT_ID = 'site-contact'

/**
 * Header “Talk to us” — scrolls to footer `#site-contact` on the current route.
 */
export function TalkToUsLink({ className = '', children = 'Talk to us', ...rest }) {
  const { pathname } = useLocation()
  return (
    <Link
      to={{ pathname, hash: FOOTER_CONTACT_ID }}
      className={['btn-primary', 'header-talk-btn', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </Link>
  )
}
