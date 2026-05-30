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
      'Website + ads management (Google or Meta)',
      'Review management + analytics',
      'Ads management for you',
    ],
  },
  {
    name: 'Scale',
    monthly: '$39.9',
    setup: 'Free setup',
    summary: 'Both ad channels and advanced analytics.',
    featured: true,
    features: [
      'Website + ads management (Google + Meta)',
      'Reviews + advanced analytics',
      'Ads management for you',
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
      'Ads management (Google + Meta) + reviews',
      'Priority support',
      'Full scope agreed in writing before work begins',
    ],
  },
]

const priceValue = (monthly) => parseFloat(String(monthly).replace(/[^0-9.]/g, ''))

const PRICING_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Longstake — websites, managed ads, and app development',
      serviceType: 'Digital Product Engineering and Growth Services',
      provider: { '@type': 'Organization', name: 'Longstake', url: 'https://longstake.ca' },
      areaServed: { '@type': 'Place', name: 'Worldwide' },
      url: 'https://longstake.ca/pricing',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Longstake plans',
        itemListElement: PLANS.map((plan) => ({
          '@type': 'Offer',
          name: `${plan.name} plan`,
          description: plan.summary,
          price: priceValue(plan.monthly),
          priceCurrency: 'CAD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: priceValue(plan.monthly),
            priceCurrency: 'CAD',
            unitText: 'MONTH',
            billingIncrement: 1,
          },
          category: 'Subscription',
          url: 'https://longstake.ca/pricing',
        })),
      },
    },
  ],
}

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
  const [demoPhone, setDemoPhone] = useState('')
  const [demoSubmitted, setDemoSubmitted] = useState(false)

  const handleDemoSubmit = (e) => {
    e.preventDefault()
    if (demoPhone.trim().length < 7) return
    setDemoSubmitted(true)
  }

  return (
    <div className="pricing-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRICING_STRUCTURED_DATA) }}
      />
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
                  Buy Now
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

      <section className="pricing-demo">
        <div className="container pricing-demo-inner">
          <span className="pricing-demo-icon" aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="17" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
          </span>
          <h2 className="pricing-demo-title">Let us help you schedule a free demo.</h2>

          {demoSubmitted ? (
            <p className="pricing-demo-thanks" role="status">
              Thanks—we’ll call to set up your demo shortly.
            </p>
          ) : (
            <form className="pricing-demo-form" onSubmit={handleDemoSubmit}>
              <input
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                className="pricing-demo-input"
                placeholder="Enter your phone number"
                value={demoPhone}
                onChange={(e) => setDemoPhone(e.target.value)}
                aria-label="Phone number for a free demo"
              />
              <button type="submit" className="pricing-demo-submit">
                Schedule a Demo
                <span aria-hidden className="pricing-demo-submit-arrow">→</span>
              </button>
            </form>
          )}

          <p className="pricing-demo-sub">Not sure which plan is right for you?</p>
          <a href="tel:+14378780203" className="pricing-demo-call">
            <svg className="pricing-demo-call-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
            </svg>
            Call Now
          </a>
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
