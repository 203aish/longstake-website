import React from 'react'
import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { useReveal } from '../hooks/useReveal'
import { PAGE_META } from '../seo/siteMeta'
import { StatsBand, CtaBanner } from '../components/Sections'
import {
  IconStrategy, IconCode, IconMegaphone, IconPalette, IconSearch, IconTrendUp,
} from '../components/icons'
import './ServicesPage.css'

const SERVICES = [
  {
    icon: IconStrategy,
    title: 'Digital Strategy',
    body: 'We map a clear, data-driven roadmap aligned to your goals — so every dollar and decision moves you toward measurable growth.',
    points: ['Market & competitor research', 'Growth roadmap', 'KPI tracking'],
  },
  {
    icon: IconCode,
    title: 'Web Development',
    body: 'Fast, secure, conversion-focused websites and apps — built responsive on every device and easy for you to update.',
    points: ['Custom websites & apps', 'Mobile-first builds', 'Speed & SEO ready'],
  },
  {
    icon: IconMegaphone,
    title: 'Digital Marketing',
    body: 'Managed Google & Meta ad campaigns that put your business in front of the right people and maximize return on ad spend.',
    points: ['Google & Meta ads', 'Landing pages', 'Conversion tracking'],
  },
  {
    icon: IconPalette,
    title: 'Branding & Design',
    body: 'A cohesive brand identity and creative that builds trust, stands out, and turns first-time visitors into loyal customers.',
    points: ['Logo & identity', 'Creative assets', 'Brand guidelines'],
  },
  {
    icon: IconSearch,
    title: 'SEO & Reviews',
    body: 'Improve your search visibility and reputation with on-page SEO and automated Google review management.',
    points: ['On-page SEO', 'Review responses', 'Monthly reporting'],
  },
  {
    icon: IconTrendUp,
    title: 'Conversion Optimization',
    body: 'We optimize your site and funnels with proven CRO strategies that turn more of your existing traffic into revenue.',
    points: ['Funnel analysis', 'A/B testing', 'UX improvements'],
  },
]

const ServicesPage = () => {
  usePageMeta({ ...PAGE_META.services, path: '/services' })
  useReveal([])

  return (
    <div className="services page-accent--teal">
      <section className="section services-hero hero-glow">
        <div className="container services-hero__inner" data-reveal>
          <span className="eyebrow">Our services</span>
          <h1 className="h-display services-hero__title">
            Powerful Solutions to Drive Your <span className="text-grad">Business Forward</span>
          </h1>
          <p className="lead services-hero__lead">
            We combine strategy, creativity, and technology to build solutions that drive measurable
            growth — one partner for your site, ads, and reputation.
          </p>
          <div className="services-hero__actions">
            <Link to="/contact" className="btn btn--grad">Book a Free Consultation</Link>
            <Link to="/pricing" className="btn btn--ghost">View Pricing</Link>
          </div>
        </div>
      </section>

      <section className="section services-grid-section">
        <div className="container">
          <div className="services-grid">
            {SERVICES.map((s) => {
              const Icon = s.icon
              return (
                <article className="card service-card" key={s.title} data-reveal>
                  <span className="icon-chip" aria-hidden><Icon /></span>
                  <h3 className="service-card__title">{s.title}</h3>
                  <p className="service-card__body">{s.body}</p>
                  <ul className="service-card__points">
                    {s.points.map((p) => (
                      <li key={p}>
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden><path d="m5 12 5 5L20 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="service-card__link">
                    Learn More
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <StatsBand />

      <CtaBanner
        title="Not sure which service you need?"
        text="Tell us about your business and we’ll recommend the right mix — no pressure, no jargon."
        buttonLabel="Talk to an Expert"
      />
    </div>
  )
}

export default ServicesPage
