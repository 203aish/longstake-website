import React from 'react'
import { Link } from 'react-router-dom'
import { IconRocket, IconStar, IconClock, IconUsers } from './icons'
import './Sections.css'

const DEFAULT_STATS = [
  { icon: IconRocket, value: '500+', label: 'Projects Completed' },
  { icon: IconStar, value: '95%', label: 'Client Satisfaction' },
  { icon: IconClock, value: '10+', label: 'Years Experience' },
  { icon: IconUsers, value: '24/7', label: 'Support Available' },
]

export function StatsBand({ items = DEFAULT_STATS }) {
  return (
    <section className="section stats-band-section">
      <div className="container">
        <div className="stats-band">
          {items.map((s) => {
            const Icon = s.icon
            return (
              <div className="stat-card" key={s.label} data-reveal>
                <span className="stat-card__icon icon-chip" aria-hidden>
                  <Icon />
                </span>
                <div className="stat-card__value">{s.value}</div>
                <div className="stat-card__label">{s.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function CtaBanner({
  title = 'Ready to Grow Your Business?',
  text = 'Book a free consultation and let’s map out a plan that fits your goals and budget.',
  buttonLabel = 'Book a Free Consultation',
  to = '/contact',
}) {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-banner" data-reveal>
          <h2 className="cta-banner__title">{title}</h2>
          <p className="cta-banner__text">{text}</p>
          <Link to={to} className="btn btn--grad cta-banner__btn">{buttonLabel}</Link>
        </div>
      </div>
    </section>
  )
}
