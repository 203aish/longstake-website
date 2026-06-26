import React from 'react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useReveal } from '../hooks/useReveal'
import { PAGE_META } from '../seo/siteMeta'
import { StatsBand, CtaBanner } from '../components/Sections'
import {
  IconTarget, IconEye, IconBolt, IconCheckShield, IconStar, IconHandshake,
  IconRocket, IconClock, IconUsers,
} from '../components/icons'
import './AboutPage.css'

const VALUES = [
  { icon: IconBolt, title: 'Innovation', body: 'We embrace new ideas and technology to keep your business ahead of the curve.' },
  { icon: IconCheckShield, title: 'Integrity', body: 'We do what’s right — clear scope, honest advice, and no surprises.' },
  { icon: IconStar, title: 'Excellence', body: 'We hold ourselves to the highest quality in everything we deliver.' },
  { icon: IconHandshake, title: 'Partnership', body: 'We treat your goals as our own and grow when you grow.' },
]

const ABOUT_STATS = [
  { icon: IconRocket, value: '500+', label: 'Projects Completed' },
  { icon: IconStar, value: '95%', label: 'Client Satisfaction' },
  { icon: IconClock, value: '10+', label: 'Years Experience' },
  { icon: IconUsers, value: '20+', label: 'Team Members' },
]

const AboutPage = () => {
  usePageMeta({ ...PAGE_META.about, path: '/about' })
  useReveal([])

  return (
    <div className="about page-accent--pink">
      <section className="section about-hero hero-glow">
        <div className="container about-hero__inner">
          <div className="about-hero__copy" data-reveal>
            <span className="eyebrow">About us</span>
            <h1 className="h-display about-hero__title">
              We’re Passionate About <span className="text-grad">Helping Businesses Grow</span>
            </h1>
            <p className="lead">
              Longstake is a team of strategists, designers, and developers who love turning ideas into
              measurable results. We started with a simple belief: growing online shouldn’t be
              complicated or require juggling a dozen vendors.
            </p>
            <p className="about-hero__p">
              Today we’re one partner for websites, apps, managed Google &amp; Meta ads, and reputation —
              helping Toronto &amp; GTA businesses (and clients worldwide) grow with clarity and care.
            </p>
          </div>
          <div className="about-hero__media" data-reveal aria-hidden>
            <div className="about-hero__photo">
              <span className="icon-chip about-hero__photo-icon"><IconUsers /></span>
              <p>Built by a small, senior team — so you always work with the people doing the work.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-mv-section">
        <div className="container about-mv">
          <article className="card about-mv__card" data-reveal>
            <span className="icon-chip" aria-hidden><IconTarget /></span>
            <h3>Our Mission</h3>
            <p>To empower businesses with technology and strategy that drive real, lasting growth — without the complexity or overwhelm.</p>
          </article>
          <article className="card about-mv__card" data-reveal>
            <span className="icon-chip" aria-hidden><IconEye /></span>
            <h3>Our Vision</h3>
            <p>To be the most trusted growth partner for small and mid-sized businesses, known for clarity, results, and genuine care.</p>
          </article>
        </div>
      </section>

      <StatsBand items={ABOUT_STATS} />

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Our values</span>
            <h2 className="h-section">What We Stand For</h2>
            <p className="lead">The principles that guide how we work with every client, every day.</p>
          </div>
          <div className="about-values">
            {VALUES.map((v) => {
              const Icon = v.icon
              return (
                <article className="card about-value" key={v.title} data-reveal>
                  <span className="icon-chip" aria-hidden><Icon /></span>
                  <h3 className="about-value__title">{v.title}</h3>
                  <p className="about-value__body">{v.body}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Let’s build something great together"
        text="Whether you’re starting fresh or scaling up, we’d love to hear what you’re working on."
        buttonLabel="Get in Touch"
      />
    </div>
  )
}

export default AboutPage
