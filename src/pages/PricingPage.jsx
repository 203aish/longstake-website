import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { useReveal } from '../hooks/useReveal'
import { useRegion } from '../hooks/useRegion'
import { PAGE_META } from '../seo/siteMeta'
import { CtaBanner } from '../components/Sections'
import { IconCheckShield, IconBolt, IconClock, IconTrendUp } from '../components/icons'
import './PricingPage.css'

/** Plan copy (region-independent). Prices live in REGIONS below. */
const PLANS = [
  {
    name: 'Essential',
    blurb: 'Perfect for startups and small businesses.',
    features: ['Up to 5 pages', 'Basic SEO', 'Contact form', 'Email support'],
    cta: 'Get Started',
  },
  {
    name: 'Core',
    blurb: 'Ideal for growing businesses.',
    features: ['Up to 15 pages', 'Advanced SEO', 'Blog setup', 'Speed optimization', 'Priority support'],
    cta: 'Get Started',
  },
  {
    name: 'Plus',
    featured: true,
    blurb: 'Best for established businesses.',
    features: ['Up to 30 pages', 'Custom integrations', 'Analytics dashboard', 'Marketing automation', 'Priority support (24/7)'],
    cta: 'Get Started',
  },
  {
    name: 'Prime',
    blurb: 'A complete solution for scaling teams.',
    features: ['Unlimited pages', 'Dedicated team', 'Custom features', 'SLA & reporting'],
    cta: 'Get Started',
  },
]

/** Per-region pricing. `monthly` and `annual` are the headline figures. */
const REGIONS = {
  CA: {
    label: 'Canada',
    flag: '🇨🇦',
    currency: 'CAD',
    taxNote: 'Prices in CAD — plus applicable HST',
    prices: {
      Essential: { monthly: 9.99, annual: 99 },
      Core: { monthly: 19.99, annual: 199 },
      Plus: { monthly: 29.99, annual: 299 },
      Prime: { monthly: 49.99, annual: 499 },
    },
  },
  US: {
    label: 'United States',
    flag: '🇺🇸',
    currency: 'USD',
    taxNote: 'Prices in USD',
    prices: {
      Essential: { monthly: 14.99, annual: 149 },
      Core: { monthly: 29.99, annual: 299 },
      Plus: { monthly: 39.99, annual: 399 },
      Prime: { monthly: 69.99, annual: 699 },
    },
  },
}

const GUARANTEES = [
  { icon: IconCheckShield, title: 'Dedicated team', text: 'Personal Touch' },
  { icon: IconBolt, title: 'No Setup Fees', text: 'Get started for less' },
  { icon: IconClock, title: '24/7 Support', text: 'We’re always here' },
  { icon: IconTrendUp, title: 'Results Driven', text: 'Built to grow you' },
]

const money = (n) => `$${n.toFixed(2)}`

const PRICING_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Longstake — websites, managed ads, and app development',
      serviceType: 'Web Design, App Development, Google Ads Management, Meta Ads Management, Review Management',
      provider: { '@type': 'Organization', name: 'Longstake', url: 'https://longstake.ca' },
      areaServed: [
        { '@type': 'City', name: 'Toronto' },
        { '@type': 'Place', name: 'Greater Toronto Area' },
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'United States' },
      ],
      url: 'https://longstake.ca/pricing',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Longstake plans',
        itemListElement: PLANS.map((plan) => ({
          '@type': 'Offer',
          name: `${plan.name} plan`,
          description: plan.blurb,
          price: REGIONS.CA.prices[plan.name].monthly,
          priceCurrency: 'CAD',
          category: 'Subscription',
          url: 'https://longstake.ca/pricing',
        })),
      },
    },
  ],
}

const PricingPage = () => {
  usePageMeta({ ...PAGE_META.pricing, path: '/pricing' })
  useReveal([])
  const [annual, setAnnual] = useState(false)
  const [region] = useRegion()

  const r = REGIONS[region] || REGIONS.CA

  return (
    <div className="pricing page-accent--amber">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRICING_STRUCTURED_DATA) }}
      />

      <section className="section pricing-hero hero-glow">
        <div className="container pricing-hero__inner" data-reveal>
          <span className="eyebrow">Pricing plans</span>
          <h1 className="h-display pricing-hero__title">
            Simple Pricing. <span className="text-grad">Powerful Results.</span>
          </h1>
          <p className="lead pricing-hero__lead">
            Choose the perfect plan that fits your needs and scales with your business.
          </p>

          <div className="pricing-controls">
            <div className="pricing-toggle" role="group" aria-label="Billing period">
              <button
                type="button"
                className={`pricing-toggle__opt${!annual ? ' is-active' : ''}`}
                onClick={() => setAnnual(false)}
              >
                Monthly
              </button>
              <button
                type="button"
                className={`pricing-toggle__opt${annual ? ' is-active' : ''}`}
                onClick={() => setAnnual(true)}
              >
                Annual <span className="pricing-toggle__save">2 months free</span>
              </button>
            </div>
          </div>

          <p className="pricing-tax-note">{r.taxNote}</p>
        </div>
      </section>

      <section className="pricing-cards-section">
        <div className="container">
          <div className="pricing-grid">
            {PLANS.map((plan) => {
              const price = r.prices[plan.name]
              const perMonth = annual ? price.annual / 12 : price.monthly
              return (
                <article
                  key={plan.name}
                  className={`card pricing-card${plan.featured ? ' pricing-card--featured' : ''}`}
                  data-reveal
                >
                  {plan.featured ? <span className="pricing-card__badge">Most Popular</span> : null}
                  <h2 className="pricing-card__name">{plan.name}</h2>
                  <p className="pricing-card__blurb">{plan.blurb}</p>
                  <div className="pricing-card__price">
                    <span className="pricing-card__amount">{money(perMonth)}</span>
                    <span className="pricing-card__per">/mo</span>
                  </div>
                  <p className="pricing-card__sub">
                    {annual
                      ? `billed annually at ${money(price.annual)} ${r.currency}`
                      : `${r.currency} · billed monthly`}
                  </p>
                  <Link
                    to="/contact"
                    className={`btn ${plan.featured ? 'btn--grad' : 'btn--ghost'} btn--block pricing-card__cta`}
                  >
                    {plan.cta}
                  </Link>
                  <ul className="pricing-card__features">
                    {plan.features.map((f) => (
                      <li key={f}>
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden><path d="m5 12 5 5L20 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>

          <p className="pricing-note">
            {region === 'CA'
              ? 'Prices shown in CAD, plus applicable HST.'
              : 'Prices shown in USD.'}{' '}
            Need something different?{' '}
            <Link to="/contact" className="pricing-note__link">Let’s talk</Link>.
          </p>

          <div className="pricing-guarantees">
            {GUARANTEES.map((g) => {
              const Icon = g.icon
              return (
                <div className="pricing-guarantee" key={g.title} data-reveal>
                  <span className="icon-chip" aria-hidden><Icon /></span>
                  <div>
                    <strong>{g.title}</strong>
                    <span>{g.text}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Still have questions?"
        text="Book a free consultation and we’ll help you choose the plan that fits your goals and budget."
        buttonLabel="Book a Free Consultation"
      />
    </div>
  )
}

export default PricingPage
