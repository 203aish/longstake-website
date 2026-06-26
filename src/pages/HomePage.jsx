import React from 'react'
import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { useReveal } from '../hooks/useReveal'
import { PAGE_META } from '../seo/siteMeta'
import { StatsBand, CtaBanner } from '../components/Sections'
import {
  IconStrategy,
  IconCode,
  IconMegaphone,
  IconPalette,
  IconStar,
  IconTrendUp,
  IconSearch,
  IconCheckShield,
  IconBolt,
} from '../components/icons'
import './HomePage.css'

const APP_ICONS = [
  { icon: IconTrendUp, color: 'var(--violet)' },
  { icon: IconCode, color: 'var(--teal)' },
  { icon: IconMegaphone, color: 'var(--amber)' },
  { icon: IconSearch, color: 'var(--pink)' },
  { icon: IconCheckShield, color: 'var(--green)' },
  { icon: IconBolt, color: 'var(--blue-accent)' },
  { icon: IconStar, color: 'var(--rose)' },
]

const SCREEN_CARDS = [
  {
    icon: IconCode,
    label: 'Website',
    value: 'Live & fast',
    color: 'var(--teal)',
    pos: 1,
  },
  {
    icon: IconMegaphone,
    label: 'Google & Meta Ads',
    value: '+182% leads',
    color: 'var(--amber)',
    pos: 2,
  },
  {
    icon: IconStar,
    label: 'Reviews',
    value: '4.9★ rating',
    color: 'var(--green)',
    pos: 3,
  },
]

const SOLUTIONS = [
  {
    icon: IconStrategy,
    title: 'Digital Strategy',
    body: 'Data-driven strategies that align with your business goals and unlock measurable, lasting growth.',
  },
  {
    icon: IconCode,
    title: 'Web Development',
    body: 'High-performance websites and apps built for speed, security, and conversions on every device.',
  },
  {
    icon: IconMegaphone,
    title: 'Digital Marketing',
    body: 'Managed Google & Meta ad campaigns that generate leads and maximize your return on ad spend.',
  },
  {
    icon: IconPalette,
    title: 'Branding & Design',
    body: 'A strong brand identity with creative designs that connect, engage, and inspire your audience.',
  },
]

const HomePage = () => {
  usePageMeta({ ...PAGE_META.home, path: '/' })
  useReveal([])

  return (
    <div className="home page-accent--violet">
      {/* HERO */}
      <section className="section home-hero hero-glow">
        <div className="container home-hero__inner">
          <div className="home-hero__copy" data-reveal>
            <span className="eyebrow">Digital solutions that drive real growth</span>
            <h1 className="h-display home-hero__title">
              Build Long-Term Growth Without <span className="text-grad">Complexity.</span>
            </h1>
            <p className="lead home-hero__lead">
              We help businesses scale with strategy, technology, and design — delivering measurable
              results without the overwhelm. One partner for your website, ads, and reputation.
            </p>
            <div className="home-hero__actions">
              <Link to="/contact" className="btn btn--grad">Book a Free Consultation</Link>
              <Link to="/services" className="btn btn--ghost">Explore Our Services</Link>
            </div>
            <div className="home-hero__rating">
              <span className="home-hero__stars" aria-hidden>
                <IconStar /><IconStar /><IconStar /><IconStar /><IconStar />
              </span>
              <span>Rated 4.9/5 by growing businesses</span>
            </div>
          </div>

          {/* Laptop dashboard + floating app icons */}
          <div className="home-hero__visual" data-reveal aria-hidden>
            <div className="hero-stage">
              <div className="laptop">
                <div className="laptop__screen">
                  <div className="screen-inner">
                    {SCREEN_CARDS.map((item) => {
                      const Icon = item.icon
                      return (
                        <div
                          className={`screen-card screen-card--${item.pos}`}
                          key={item.label}
                          style={{ '--card-accent': item.color }}
                        >
                          <span className="screen-card__icon"><Icon /></span>
                          <div>
                            <strong>{item.value}</strong>
                            <small>{item.label}</small>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className="laptop__base" />
              </div>

              {APP_ICONS.map((a, i) => {
                const Icon = a.icon
                return (
                  <span
                    className={`app-tile app-tile--${i + 1}`}
                    key={i}
                    style={{ '--tile': a.color }}
                  >
                    <Icon />
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <StatsBand />

      {/* SOLUTIONS */}
      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Our solutions</span>
            <h2 className="h-section">Solutions Designed to Accelerate Your Growth</h2>
            <p className="lead">
              From strategy to execution, we provide everything your business needs to grow online and
              outpace the competition.
            </p>
          </div>
          <div className="home-solutions">
            {SOLUTIONS.map((s) => {
              const Icon = s.icon
              return (
                <article className="card home-solution" key={s.title} data-reveal>
                  <span className="icon-chip" aria-hidden><Icon /></span>
                  <h3 className="home-solution__title">{s.title}</h3>
                  <p className="home-solution__body">{s.body}</p>
                  <Link to="/services" className="home-solution__link">
                    Learn More
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                </article>
              )
            })}
          </div>
          <div className="home-solutions__cta">
            <Link to="/services" className="btn btn--ghost">View All Solutions</Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}

export default HomePage
