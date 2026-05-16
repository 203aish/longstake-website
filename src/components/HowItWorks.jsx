import React, { useEffect, useRef } from 'react'
import './HowItWorks.css'

const STEPS = [
  {
    index: '01',
    title: 'Clarify the mandate',
    body:
      'We align on your story, stage, and what you need from capital or partners—so positioning is credible and outreach stays specific, not generic.',
  },
  {
    index: '02',
    title: 'Map the right counterparties',
    body:
      'Together we identify angels, strategics, and buyers whose thesis fits yours—whether for a round, a partnership, or a path toward exit later on.',
  },
  {
    index: '03',
    title: 'Curated introductions',
    body:
      'When fit is mutual, we make targeted intros and help the conversation land—without leaving you to cold-contact endless lists on your own.',
  },
]

const HowItWorks = () => {
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
    <section id="how-it-works" className="how-it-works section" ref={sectionRef}>
      <div className="container">
        <header className="hiw-head">
          <p className="hiw-eyebrow">Process</p>
          <h2 className="section-title hiw-title">How it works</h2>
          <p className="section-subtitle hiw-subtitle">
            Advisory and introductions built around fit and discretion—not passive directories or keyword lists.
          </p>
        </header>
        <div className="hiw-steps">
          {STEPS.map((step) => (
            <article key={step.index} className="hiw-step">
              <p className="hiw-step-index" aria-hidden>
                {step.index}
              </p>
              <h3 className="hiw-step-title">{step.title}</h3>
              <p className="hiw-step-body">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
