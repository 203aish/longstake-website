import React from 'react'
import './BrandWordmark.css'

/**
 * Trim only a slice of blank space above the glyphs (baseline y=82, font-size 76).
 * Keep enough headroom for tall ascenders (e.g. “flow” ► f).
 */
const WORDMARK_VIEWBOX = '0 8 480 102'

/**
 * Text wordmarks: Geist 700, slate iron vs brand blue per brand guide.
 * Segments are `{ text, tone: 'iron' | 'blue' }` (only "stake" uses blue).
 */
export function BrandWordmark({ parts, variant = 'header', className = '' }) {
  const svgClass = ['brand-wordmark', `brand-wordmark--${variant}`, className].filter(Boolean).join(' ')

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={WORDMARK_VIEWBOX}
      preserveAspectRatio="xMidYMid meet"
      className={svgClass}
      aria-hidden
      focusable="false"
    >
      <text x="0" y="82" className="brand-wordmark__wm">
        {parts.map((p) => (
          <tspan key={p.text} className={p.tone === 'blue' ? 'brand-wordmark__blue' : 'brand-wordmark__iron'}>
            {p.text}
          </tspan>
        ))}
      </text>
    </svg>
  )
}

const LONGSTAKE_PARTS = [
  { text: 'long', tone: 'iron' },
  { text: 'stake', tone: 'blue' },
]

const STAKENEX_PARTS = [
  { text: 'stake', tone: 'blue' },
  { text: 'nex', tone: 'iron' },
]

const STAKEFLOW_PARTS = [
  { text: 'stake', tone: 'blue' },
  { text: 'flow', tone: 'iron' },
]

export function LongstakeBrandMark({ variant = 'header', className = '' }) {
  return <BrandWordmark parts={LONGSTAKE_PARTS} variant={variant} className={className} />
}

export function StakenexBrandMark({ variant = 'nav', className = '' }) {
  return <BrandWordmark parts={STAKENEX_PARTS} variant={variant} className={className} />
}

export function StakeflowBrandMark({ variant = 'nav', className = '' }) {
  return <BrandWordmark parts={STAKEFLOW_PARTS} variant={variant} className={className} />
}
