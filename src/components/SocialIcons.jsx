import React from 'react'

export function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13.5 8.5V6.75c0-.69.56-1.25 1.25-1.25H16V3h-2.25A3.75 3.75 0 0 0 10 6.75V8.5H7.5V11H10v10h3.5V11h2.75l.25-2.5H13.5Z" />
    </svg>
  )
}

export function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  )
}

export function LinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18.5H5.67V10h2.67v8.5ZM7 8.77a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm11.5 9.73h-2.67v-4.15c0-.99-.02-2.26-1.38-2.26-1.38 0-1.59 1.08-1.59 2.19v4.22h-2.67V10h2.56v1.17h.04c.36-.68 1.22-1.39 2.51-1.39 2.69 0 3.18 1.77 3.18 4.07v4.65Z" />
    </svg>
  )
}
