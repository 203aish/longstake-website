import React, { useEffect, useRef } from 'react'
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

const CAPABILITY_GROUPS = [
  {
    title: 'Build',
    body:
      'Websites, marketing pages, and mobile apps—the surfaces buyers and teams actually use. B2B UX, internal tools, and SaaS-style product work, with AI-enabled features only where they genuinely strengthen the product—not as filler.',
  },
  {
    title: 'Connect & integrate',
    body:
      'Embedded firmware, IoT and telemetry, edge-to-cloud paths, CRM and ERP touches, APIs, and the glue between legacy systems and new product experiences your sales and ops teams rely on.',
  },
  {
    title: 'Launch & grow',
    body:
      'Meta Ads and Google Ads: account structure, creative and copy support, conversion tracking, and landing paths so paid demand meets a credible funnel—not set-it-and-forget-it vanity spend.',
  },
  {
    title: 'Presence',
    body:
      'Instagram and social account setup, profile optimization, and positioning that matches your site and campaigns—so inbound channels tell one coherent story for technical and B2B buyers.',
  },
]

const SCENARIOS = [
  {
    title: 'You need the full go-to-market thread',
    body:
      'A new site or app, paid social and search to get qualified traffic, and social profiles that do not look like an afterthought—we structure the pieces so engineering, creative, and media stay aligned.',
  },
  {
    title: 'Software that belongs with the hardware',
    body:
      'You have a device or pilot fleet and need firmware, cloud, or customer-facing software that matches real field behaviour—while your marketing stack catches up.',
  },
  {
    title: 'Ads without a broken funnel',
    body:
      'Campaigns are live but landing pages, tracking, or handoffs to sales are shaky—we tighten the path from click to conversation so procurement and technical buyers see a serious operator.',
  },
  {
    title: 'One partner instead of five vendors',
    body:
      'Build, media, and social used to live in separate shops—we coordinate delivery so timelines, messaging, and technical reality do not drift apart mid-launch.',
  },
]

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
          <h1 className="home-hero-title">
            Build and grow your{' '}
            <span className="home-hero-title-em">digital presence</span>
          </h1>
          <p className="home-hero-lead">
            Longstake is a Canada-based firm helping ambitious teams ship integrated hardware–software
            solutions and bring them to market: websites and mobile apps, Meta and Google Ads, Instagram
            and social setup, and the embedded or enterprise integrations that sit underneath—with
            AI-enabled features when they are the right tool, not a headline.
          </p>
        </div>
      </section>

      <section className="home-section" id="history" data-home-animate>
        <div className="container home-narrow">
          <h2 className="home-section-title">Our history</h2>
          <div className="home-prose">
            <p>
              Longstake grew out of a simple observation: many strong teams—bridging hardware and
              software, or trying to launch a digital product well—were underserved by generic agencies
              and one-size-fits-all vendors. The firm developed around{' '}
              <strong>clarity, deep listening, and respect for how products actually get built</strong>,
              first in full-stack delivery for connected products and later across the full go-to-market
              thread.
            </p>
            <p>
              As client needs matured, we concentrated on what we do best: digital products, websites and
              mobile apps, paid media on Meta and Google, social setup, and the integrations
              underneath—so the same ethos of clarity and fit extends from the codebase to the channel.
            </p>
          </div>
        </div>
      </section>

      <section className="home-section home-section--alt" id="achievements" data-home-animate>
        <div className="container">
          <h2 className="home-section-title">What we’ve achieved</h2>
          <p className="home-section-intro">
            Highlights from how Longstake shows up for founders, operators, and partners—without naming
            confidential engagements.
          </p>
          <ul className="home-achievement-grid">
            <li className="home-achievement-card">
              <h3>Operator-grade delivery</h3>
              <p>
                Work spans web and mobile, Meta and Google Ads, social presence, IoT and embedded work,
                and integrations for industrial and hardware-led teams.
              </p>
            </li>
            <li className="home-achievement-card">
              <h3>Cross-border reach</h3>
              <p>
                A network that spans <strong>Canada, the United States</strong>, and international
                relationships where mandates require it.
              </p>
            </li>
            <li className="home-achievement-card">
              <h3>Build and go-to-market together</h3>
              <p>
                Recognition that <strong>product execution</strong> and <strong>demand</strong> move
                together—so engineering, creative, and media stay aligned instead of drifting apart.
              </p>
            </li>
            <li className="home-achievement-card">
              <h3>Coherent inbound</h3>
              <p>
                Websites, campaigns, and social profiles built to tell one story, so technical and B2B
                buyers meet a credible operator at every touchpoint.
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
                Longstake was founded in <strong>{COMPANY_STATS.foundedYear}</strong> in Canada, with a
                mandate to make product delivery as serious as the companies behind it.
              </p>
            ) : (
              <p>
                Longstake was established in <strong>Canada</strong> as a principal-led practice focused
                on building and launching digital products. We’re glad to share more about our timeline
                in conversation.
              </p>
            )}
            <p>
              That early focus on fit, preparation, and discretion continues to guide how we accept
              mandates and work alongside clients.
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
                Longstake has served <strong>{COMPANY_STATS.clientsServedHint}</strong> teams and
                organizations, always with a selective, high-touch model.
              </p>
            ) : (
              <p>
                We work with a <strong>limited number of active mandates</strong> at any time so
                leadership stays close to each engagement. Clients include hardware-led and B2B companies
                shipping connected products, running paid media, and modernizing their integrations.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="home-section" id="what-we-do" data-home-animate>
        <div className="container">
          <h2 className="home-section-title">Build, integrate, launch, and show up</h2>
          <p className="home-section-intro">
            Four ways we usually work with teams—scope follows your stage, whether you need a first site,
            a campaign, an app, or the full stack.
          </p>
          <div className="home-practice-grid">
            {CAPABILITY_GROUPS.map((group) => (
              <article key={group.title} className="home-practice-card">
                <h3>{group.title}</h3>
                <p>{group.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section--alt" id="typical-mandates" data-home-animate>
        <div className="container">
          <h2 className="home-section-title">Typical mandates</h2>
          <p className="home-section-intro">
            Short narratives from how teams actually engage us—not a keyword list pasted into cards.
          </p>
          <div className="home-practice-grid">
            {SCENARIOS.map((s) => (
              <article key={s.title} className="home-practice-card">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
