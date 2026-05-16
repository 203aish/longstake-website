import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { PAGE_META } from '../seo/siteMeta'
import './HomePage.css'

/** Replace with verified figures when you publish them (optional). */
const COMPANY_STATS = {
  /** e.g. '2019' — leave null if you prefer not to show a year yet */
  foundedYear: null,
  /** e.g. '40+' or '100+' — leave null to show narrative-only copy */
  clientsServedHint: null,
}

const HomePage = () => {
  const heroRef = useRef(null)
  usePageMeta({ ...PAGE_META.home, path: '/' })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('home-fade-in')
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('[data-home-animate]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="home-page">
      <section className="home-hero section" ref={heroRef}>
        <div className="container">
          <h1 className="home-hero-title">Capital, partnerships, and product engineering—under one roof</h1>
          <p className="home-hero-lead">
            Longstake is a Canada-based firm helping ambitious teams connect with strategic investors and partners, and
            ship integrated hardware–software solutions. Our work spans two focused practices:{' '}
            <strong>Stakenex</strong> and <strong>Stakeflow</strong>.
          </p>
          <div className="home-hero-actions">
            <Link to="/stakenex" className="btn-primary btn-large home-link-btn">
              Explore Stakenex
            </Link>
            <Link to="/stakeflow" className="btn-secondary btn-large home-link-btn">
              Explore Stakeflow
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section" id="history" data-home-animate>
        <div className="container home-narrow">
          <h2 className="home-section-title">Our history</h2>
          <div className="home-prose">
            <p>
              Longstake grew out of a simple observation: many strong teams—whether raising capital, pursuing a
              strategic partnership, or bridging hardware and software—were underserved by generic directories and
              one-size-fits-all agencies. The firm developed around <strong>curated introductions</strong>, deep
              listening, and respect for confidentiality, first in the world of strategic investors and corporate
              partners, and later in full-stack delivery for connected products.
            </p>
            <p>
              As client needs matured, we organized our offerings into two brands. <strong>Stakenex</strong> carries
              forward investor matchmaking, fundraising readiness, and M&amp;A-oriented conversations.{' '}
              <strong>Stakeflow</strong> concentrates on digital products, websites and mobile apps, paid media on Meta
              and Google, social setup, and the integrations underneath—so the same ethos of clarity and fit extends
              from the term sheet to the channel and the codebase.
            </p>
          </div>
        </div>
      </section>

      <section className="home-section home-section--alt" id="achievements" data-home-animate>
        <div className="container">
          <h2 className="home-section-title">What we’ve achieved</h2>
          <p className="home-section-intro">
            Highlights from how Longstake shows up for founders, operators, and partners—without naming confidential
            engagements.
          </p>
          <ul className="home-achievement-grid">
            <li className="home-achievement-card">
              <h3>Strategic introductions</h3>
              <p>
                Repeated success facilitating conversations between founders and aligned investors, acquirers, and
                corporate partners—not mass outreach.
              </p>
            </li>
            <li className="home-achievement-card">
              <h3>Cross-border reach</h3>
              <p>
                A network that spans <strong>Canada, the United States</strong>, and international relationships where
                mandates require it.
              </p>
            </li>
            <li className="home-achievement-card">
              <h3>Dual depth</h3>
              <p>
                Recognition that <strong>capital</strong> and <strong>product execution</strong> often move together;
                Stakenex and Stakeflow are designed to reinforce each other.
              </p>
            </li>
            <li className="home-achievement-card">
              <h3>Operator-grade delivery</h3>
              <p>
                Stakeflow work spans web and mobile, Meta and Google Ads, social presence, IoT and embedded work, and
                integrations for industrial and hardware-led teams.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="home-section" id="when-we-started" data-home-animate>
        <div className="container home-narrow">
          <h2 className="home-section-title">When we started</h2>
          <div className="home-prose">
            {COMPANY_STATS.foundedYear ? (
              <p>
                Longstake was founded in <strong>{COMPANY_STATS.foundedYear}</strong> in Canada, with a mandate to make
                strategic matchmaking as serious as the products and companies behind it.
              </p>
            ) : (
              <p>
                Longstake was established in <strong>Canada</strong> as a principal-led practice before organizing
                today’s Stakenex and Stakeflow lines. We’re glad to share more about our timeline in conversation.
              </p>
            )}
            <p>
              That early focus on fit, preparation, and discretion continues to guide how we accept mandates and work
              alongside clients.
            </p>
          </div>
        </div>
      </section>

      <section className="home-section home-section--alt" id="customers" data-home-animate>
        <div className="container home-narrow">
          <h2 className="home-section-title">Customers &amp; engagements</h2>
          <div className="home-prose">
            {COMPANY_STATS.clientsServedHint ? (
              <p>
                Longstake has served <strong>{COMPANY_STATS.clientsServedHint}</strong> teams and organizations across
                Stakenex and Stakeflow, always with a selective, high-touch model.
              </p>
            ) : (
              <p>
                We work with a <strong>limited number of active mandates</strong> at any time so leadership stays close
                to each engagement. Clients include founders and leadership teams raising or partnering, and
                hardware-led or B2B companies shipping connected products and integrations.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="home-section" id="practices" data-home-animate>
        <div className="container">
          <h2 className="home-section-title">Stakenex &amp; Stakeflow at a glance</h2>
          <p className="home-section-intro">
            Two practices, one standard for clarity and fit—whether you need capital and partners or build, media, and
            engineering.
          </p>
          <div className="home-practice-grid">
            <article className="home-practice-card">
              <h3>Stakenex</h3>
              <p className="home-practice-tag">Investment, fundraising &amp; strategic partnerships</p>
              <p>
                For teams that need investment or clearer capital paths: startup investor network, M&amp;A and
                acquisition advisory for startups and SMBs, fundraising support, and introductions to angels and
                strategics in the <strong>USA and Canada</strong>—plus partnership and licensing conversations when
                those are the right next step.
              </p>
              <Link to="/stakenex" className="home-practice-link">
                Visit Stakenex →
              </Link>
            </article>
            <article className="home-practice-card">
              <h3>Stakeflow</h3>
              <p className="home-practice-tag">Digital products, ads, social &amp; integrated engineering</p>
              <p>
                Websites and mobile apps, Meta and Google Ads, Instagram and social setup, plus IoT, embedded, enterprise
                integration, and B2B UX—built for teams that need build and go-to-market in one coordinated practice
                (including AI-enabled product features when they are the right fit).
              </p>
              <Link to="/stakeflow" className="home-practice-link">
                Visit Stakeflow →
              </Link>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
