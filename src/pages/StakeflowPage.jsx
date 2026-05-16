import React, { useEffect } from 'react'
import { usePageMeta } from '../hooks/usePageMeta'
import { PAGE_META } from '../seo/siteMeta'
import './StakeflowPage.css'

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

const StakeflowPage = () => {
  usePageMeta({ ...PAGE_META.stakeflow, path: '/stakeflow' })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('sf-visible')
        })
      },
      { threshold: 0.08 }
    )
    document.querySelectorAll('[data-sf-animate]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="stakeflow-page">
      <section className="sf-hero">
        <div className="sf-hero-grid" aria-hidden />
        <div className="container sf-hero-inner">
          <p className="sf-eyebrow">Stakeflow</p>
          <h1 className="sf-hero-title">
            Build and grow your{' '}
            <span className="sf-hero-title-em">digital presence.</span>
          </h1>
          <p className="sf-hero-lead">
            Product engineering plus launch execution: websites and mobile apps, Meta and Google Ads,
            Instagram and social setup, and the embedded or enterprise integrations that sit underneath—
            with AI-enabled features when they are the right tool, not a headline.
          </p>
        </div>
      </section>

      <section className="sf-section" data-sf-animate>
        <div className="container">
          <header className="sf-section-head">
            <p className="sf-section-eyebrow">What we do</p>
            <h2 className="sf-section-title">Build, integrate, launch, and show up</h2>
            <p className="sf-section-intro">
              Four ways we usually work with teams—scope follows your stage, whether you need a first
              site, a campaign, an app, or the full stack.
            </p>
          </header>
          <div className="sf-pillar-grid">
            {CAPABILITY_GROUPS.map((group) => (
              <article key={group.title} className="sf-pillar">
                <h3 className="sf-pillar-title">{group.title}</h3>
                <p className="sf-pillar-body">{group.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sf-section sf-section-alt" data-sf-animate>
        <div className="container">
          <header className="sf-section-head">
            <p className="sf-section-eyebrow">Where we fit</p>
            <h2 className="sf-section-title">Typical mandates</h2>
            <p className="sf-section-intro">
              Short narratives from how teams actually engage us—not a keyword list pasted into cards.
            </p>
          </header>
          <div className="sf-scenario-grid">
            {SCENARIOS.map((s) => (
              <article key={s.title} className="sf-scenario">
                <h3 className="sf-scenario-title">{s.title}</h3>
                <p className="sf-scenario-body">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default StakeflowPage
