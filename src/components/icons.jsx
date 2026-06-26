import React from 'react'

/** Shared 24x24 line icons (stroke = currentColor). */
const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.9,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const IconStrategy = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></svg>
)
export const IconCode = (p) => (
  <svg {...base} {...p}><path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 6l-2 12" /></svg>
)
export const IconMegaphone = (p) => (
  <svg {...base} {...p}><path d="M3 11v2a1 1 0 0 0 1 1h3l5 4V6L7 10H4a1 1 0 0 0-1 1Z" /><path d="M16 8a4 4 0 0 1 0 8" /></svg>
)
export const IconPalette = (p) => (
  <svg {...base} {...p}><path d="M12 3a9 9 0 1 0 0 18 2.5 2.5 0 0 0 2-4 2 2 0 0 1 1.6-3.2H18a3 3 0 0 0 3-3A9 9 0 0 0 12 3Z" /><circle cx="7.5" cy="11" r="1" /><circle cx="12" cy="7.5" r="1" /><circle cx="16.5" cy="11" r="1" /></svg>
)
export const IconSearch = (p) => (
  <svg {...base} {...p}><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
)
export const IconTrendUp = (p) => (
  <svg {...base} {...p}><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></svg>
)
export const IconRocket = (p) => (
  <svg {...base} {...p}><path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2a2.83 2.83 0 0 0-3-3Z" /><path d="M14 8a6 6 0 0 1 6-6 6 6 0 0 1-6 6Z" /><path d="M9 13a14 14 0 0 1 5-9 6 6 0 0 1 2 2 14 14 0 0 1-9 5l-1-1Z" /></svg>
)
export const IconCheckShield = (p) => (
  <svg {...base} {...p}><path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3Z" /><path d="m9 12 2 2 4-4" /></svg>
)
export const IconStar = (p) => (
  <svg {...base} {...p}><path d="m12 3 2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5L12 3Z" /></svg>
)
export const IconUsers = (p) => (
  <svg {...base} {...p}><circle cx="9" cy="8" r="3.2" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0" /><path d="M16 5.5a3 3 0 0 1 0 5.8M21 19a5.4 5.4 0 0 0-3.5-5" /></svg>
)
export const IconClock = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
)
export const IconBolt = (p) => (
  <svg {...base} {...p}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" /></svg>
)
export const IconMail = (p) => (
  <svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
)
export const IconPhone = (p) => (
  <svg {...base} {...p}><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .6 3.6 1 1 0 0 1-.25 1l-2.2 2.2Z" /></svg>
)
export const IconPin = (p) => (
  <svg {...base} {...p}><path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11Z" /><circle cx="12" cy="10" r="2.6" /></svg>
)
export const IconHandshake = (p) => (
  <svg {...base} {...p}><path d="m11 17 2 2a1.4 1.4 0 0 0 2-2" /><path d="m13 19 1.5 1.5a1.4 1.4 0 0 0 2-2L18 17" /><path d="M3 12l3-3 5 3 3-3 7 4" /><path d="M3 7h3l3 3" /></svg>
)
export const IconHeart = (p) => (
  <svg {...base} {...p}><path d="M12 20s-7-4.3-7-9.5A4 4 0 0 1 12 7a4 4 0 0 1 7 3.5C19 15.7 12 20 12 20Z" /></svg>
)
export const IconEye = (p) => (
  <svg {...base} {...p}><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
)
export const IconTarget = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" /></svg>
)
