import React, { useEffect, useRef } from 'react'
import './StakenexCapabilities.css'

const PILLARS = [
  {
    title: 'Raising capital',
    body:
      'We tighten your story, stage, and ask—then map angels, strategics, and funds that actually fit. Introductions are selective; the goal is credible conversation, not pitch-deck blasts.',
  },
  {
    title: 'Partnerships & licensing',
    body:
      'When the right move is a corporate partner, channel, or licensing path, we help position the opportunity and reach decision-makers with care so your details stay in the right rooms.',
  },
  {
    title: 'M&A and strategic exits',
    body:
      'If you are exploring a sale or combination, we support buyer mapping, positioning, and warm intros when timing, valuation reality, and mutual interest line up.',
  },
  {
    title: 'North America, principal-led',
    body:
      'Most mandates centre on Canada and the United States. You work with a focused process built on discretion, prep, and respect for founder time.',
  },
]

const StakenexCapabilities = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      id="stakenex-capabilities"
      className="stakenex-capabilities section"
      ref={sectionRef}
      aria-label="Stakenex scope"
    >
      <div className="container">
        <header className="snx-cap-head">
          <p className="snx-cap-eyebrow">Scope</p>
          <h2 className="section-title snx-cap-title">What Stakenex is for</h2>
          <p className="section-subtitle snx-cap-subtitle">
            Capital, partnerships, and disciplined exits—handled as introductions and advisory, not passive listings.
          </p>
        </header>
        <div className="snx-pillars">
          {PILLARS.map((pillar) => (
            <article key={pillar.title} className="snx-pillar">
              <h3 className="snx-pillar-title">{pillar.title}</h3>
              <p className="snx-pillar-body">{pillar.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StakenexCapabilities
