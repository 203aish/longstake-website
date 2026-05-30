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
    title: 'Websites',
    body:
      'Static and dynamic sites—the pages customers actually land on. Unlimited-page builds, WhatsApp chat, click-to-call, and social links so your site works as a front door, not a brochure.',
  },
  {
    title: 'Apps',
    body:
      'Mobile and web apps when you need more than a site—scoped and agreed in writing before work begins, with the same team that handles your ads and reviews when you want one partner.',
  },
  {
    title: 'Ads management',
    body:
      'Google Ads and Meta (Facebook & Instagram): account structure, creative and copy support, conversion tracking, and landing paths—management on one channel or both, with ad spend billed directly to you.',
  },
  {
    title: 'Reviews & social',
    body:
      'Automated Google review responses, review management, monthly reporting, and social profile setup on Facebook, Instagram, and LinkedIn—aligned with your site and campaigns.',
  },
]

const SCENARIOS = [
  {
    title: 'You need a site that does the basics well',
    body:
      'A professional web presence with reviews handled, social links in place, and easy ways to call or message you—without juggling five vendors for setup.',
  },
  {
    title: 'You want a site plus managed ads',
    body:
      'A new or upgraded website with Google or Meta ads managed for you—tracking, landing pages, and review management tied together instead of living in separate tools.',
  },
  {
    title: 'You need both ad channels and analytics',
    body:
      'Google and Meta running together, reviews monitored, and analytics that show what is working—so you can see demand and reputation in one place.',
  },
  {
    title: 'You need an app with full growth support',
    body:
      'A mobile or web app plus ads management, reviews, and priority support—one coordinated practice instead of a dev shop and a separate media agency.',
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
            Longstake helps Toronto-area businesses build and grow online: websites and mobile apps,
            managed Google and Meta ads, automated Google review responses, and social setup on Facebook,
            Instagram, and LinkedIn—simple monthly plans from $9.9/mo.
          </p>
        </div>
      </section>

      <section className="home-section" id="history" data-home-animate>
        <div className="container home-narrow">
          <h2 className="home-section-title">Our history</h2>
          <div className="home-prose">
            <p>
              Longstake grew out of a simple observation: many small and mid-sized businesses needed a
              credible website, managed ads, and review handling—not a bloated agency pitch or a stack of
              disconnected freelancers. The firm developed around{' '}
              <strong>clear scope, practical delivery, and one partner for the full thread</strong>.
            </p>
            <p>
              Today that means websites and apps, ads management on Google and Meta, review responses and
              reporting, and social profiles that match your site—so what you offer online lines up with
              what you run in ads and on Google.
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
              <h3>Websites &amp; apps</h3>
              <p>
                Static and dynamic sites, plus mobile and web apps—built to support calls, WhatsApp, and
                social links from day one.
              </p>
            </li>
            <li className="home-achievement-card">
              <h3>Managed Google &amp; Meta ads</h3>
              <p>
                Ads management on one channel or both, with tracking and landing paths so paid traffic
                meets a site that can convert.
              </p>
            </li>
            <li className="home-achievement-card">
              <h3>Reviews &amp; reporting</h3>
              <p>
                Automated Google review responses, review management, and monthly reports so reputation
                is not an afterthought.
              </p>
            </li>
            <li className="home-achievement-card">
              <h3>Social presence</h3>
              <p>
                Facebook, Instagram, and LinkedIn setup and links that match your brand—aligned with your
                site and campaigns.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="home-section" id="customers" data-home-animate>
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
                We work with a <strong>limited number of active clients</strong> at any time so delivery
                stays hands-on. Typical engagements: new or upgraded websites, managed Google and Meta
                ads, review handling, and app builds when the scope calls for it.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="home-section" id="what-we-do" data-home-animate>
        <div className="container">
          <h2 className="home-section-title">What we offer</h2>
          <p className="home-section-intro">
            The same four pillars behind our plans—whether you need a starter site or the full stack with
            apps and both ad channels.
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
            How teams usually start with us—aligned with our Starter through App plans on the pricing page.
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
