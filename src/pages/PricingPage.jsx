import React, { useEffect, useRef, useState } from 'react'
import { usePageMeta } from '../hooks/usePageMeta'
import { PAGE_META } from '../seo/siteMeta'
import './PricingPage.css'

const PLANS = [
  {
    name: 'Starter',
    monthly: '$9.9',
    monthlyNote: '+ HST',
    setup: 'Free setup',
    summary: 'A static site that quietly does the basics.',
    features: [
      'Unlimited-page static website',
      'Automated Google review responses + monthly report',
      'Social links (Facebook, Instagram, LinkedIn)',
      'WhatsApp chat + click-to-call from the site',
    ],
  },
  {
    name: 'Growth',
    monthly: '$29.9',
    setup: 'Free setup',
    summary: 'A dynamic site with one ad channel managed.',
    features: [
      'Website + 1 ad channel (Google or Meta)',
      'Review management + basic analytics',
      'Ad spend billed directly to you (min. $300/mo recommended)',
    ],
  },
  {
    name: 'Scale',
    monthly: '$39.9',
    setup: 'Free setup',
    summary: 'Both ad channels and advanced analytics.',
    featured: true,
    features: [
      'Website + both ad channels (Google + Meta)',
      'Reviews + advanced analytics',
      'Ad spend billed directly to you (min. $500/mo recommended)',
    ],
  },
  {
    name: 'Pro',
    monthly: '$59.9',
    setup: '$99 setup',
    summary: 'Everything in Scale, with priority service.',
    features: [
      'Everything in Scale',
      '48-hour support SLA',
      'Dedicated account manager',
    ],
  },
  {
    name: 'App',
    monthly: '$79.9',
    setup: '$199 setup',
    summary: 'A mobile or web app with full growth support.',
    features: [
      'Mobile or web app',
      'Both ad channels managed + reviews',
      'Priority support',
      'Full scope agreed in writing before work begins',
    ],
  },
]

function PhoneGatePopup({ onClose, onSubmit }) {
  const inputRef = useRef(null)
  const [phone, setPhone] = useState('')

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (phone.trim().length < 7) {
      inputRef.current?.focus()
      return
    }
    onSubmit(phone.trim())
  }

  return (
    <div
      className="pricing-modal-overlay"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="pricing-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pricing-modal-title"
      >
        <button
          type="button"
          className="pricing-modal-close"
          aria-label="Close"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 id="pricing-modal-title" className="pricing-modal-title">
          Enter Phone for Pricing
        </h2>
        <form className="pricing-modal-form" onSubmit={handleSubmit}>
          <label className="pricing-modal-label" htmlFor="pricing-phone">
            Phone Number
          </label>
          <input
            ref={inputRef}
            id="pricing-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className="pricing-modal-input"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button type="submit" className="pricing-modal-submit">
            Get Started
          </button>
        </form>
      </div>
    </div>
  )
}

const PricingPage = () => {
  usePageMeta({ ...PAGE_META.pricing, path: '/pricing' })
  const [showGate, setShowGate] = useState(true)
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="pricing-page">
      <section className="pricing-hero section">
        <div className="container">
          <p className="pricing-eyebrow">Pricing</p>
          <h1 className="pricing-title">Find a plan that’s right for you</h1>
          {submitted ? (
            <p className="pricing-thanks" role="status">
              Thanks—we’ll reach out shortly. Browse the plans below in the meantime.
            </p>
          ) : null}
        </div>
      </section>

      <section className="pricing-section">
        <div className="container">
          <div className="pricing-grid">
            {PLANS.map((plan) => (
              <article
                key={plan.name}
                className={`pricing-card${plan.featured ? ' pricing-card--featured' : ''}`}
              >
                {plan.featured ? <span className="pricing-card-badge">Most popular</span> : null}
                <h2 className="pricing-card-name">{plan.name}</h2>
                <p className="pricing-card-price">
                  <span className="pricing-card-amount">{plan.monthly}</span>
                  <span className="pricing-card-per">/mo</span>
                  {plan.monthlyNote ? (
                    <span className="pricing-card-note"> {plan.monthlyNote}</span>
                  ) : null}
                </p>
                <p className="pricing-card-setup">{plan.setup}</p>
                <p className="pricing-card-summary">{plan.summary}</p>
                <ul className="pricing-card-features">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="pricing-card-cta"
                  onClick={() => setShowGate(true)}
                >
                  Get {plan.name}
                </button>
              </article>
            ))}
          </div>
          <p className="pricing-footnote">
            Prices are in CAD and exclude applicable taxes. Ad spend (Google / Meta) is paid directly by
            the client. App plan scope is confirmed in writing before work begins.
          </p>
        </div>
      </section>

      {showGate ? (
        <PhoneGatePopup
          onClose={() => setShowGate(false)}
          onSubmit={() => {
            setShowGate(false)
            setSubmitted(true)
          }}
        />
      ) : null}
    </div>
  )
}

export default PricingPage
