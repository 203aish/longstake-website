import React, { useState } from 'react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useReveal } from '../hooks/useReveal'
import { PAGE_META } from '../seo/siteMeta'
import { IconMail, IconPhone, IconPin, IconClock } from '../components/icons'
import {
  PHONE_DISPLAY, PHONE_TEL, WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT,
} from '../constants/contact'
import './ContactPage.css'

const SERVICES = [
  'Web Development',
  'Digital Marketing / Ads',
  'Branding & Design',
  'SEO & Reviews',
  'App Development',
  'Not sure yet',
]

const FAQS = [
  {
    q: 'How long does it take to get a response?',
    a: 'We reply to every inquiry within one business day — usually much sooner. For urgent needs, call or WhatsApp us directly.',
  },
  {
    q: 'Do you offer a free consultation?',
    a: 'Yes. Your first consultation is free. We’ll learn about your business and recommend the right approach with no obligation.',
  },
  {
    q: 'Can you sign an NDA for my project?',
    a: 'Absolutely. We’re happy to sign an NDA before discussing any sensitive details about your business or product.',
  },
  {
    q: 'Do you work with businesses outside Toronto?',
    a: 'Yes. We’re based in the Toronto/GTA area and work with clients across Canada and worldwide, fully remotely.',
  },
]

const ContactPage = () => {
  usePageMeta({ ...PAGE_META.contact, path: '/contact' })
  useReveal([])
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const sent = status === 'sent'

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    if (data.botcheck) return // honeypot tripped — silently ignore bots

    setStatus('sending')
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New website enquiry — ${data.firstName || ''} ${data.lastName || ''}`.trim(),
          from_name: `${data.firstName || ''} ${data.lastName || ''}`.trim() || 'Website visitor',
          ...data,
        }),
      })
      const json = await res.json()
      setStatus(json.success ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="contact page-accent--teal">
      <section className="section contact-hero hero-glow">
        <div className="container contact-hero__inner" data-reveal>
          <span className="eyebrow">Contact us</span>
          <h1 className="h-display contact-hero__title">
            Let’s Build Something <span className="text-grad">Amazing Together</span>
          </h1>
          <p className="lead contact-hero__lead">
            Tell us about your project and goals. We’ll get back to you within one business day with a
            clear, no-pressure plan.
          </p>
        </div>
      </section>

      <section className="contact-main-section">
        <div className="container contact-main">
          <aside className="contact-info" data-reveal>
            <h2 className="contact-info__title">Get in touch</h2>
            <p className="contact-info__sub">
              Prefer to reach out directly? Here’s how to find us.
            </p>
            <ul className="contact-info__list">
              <li>
                <span className="icon-chip" aria-hidden><IconMail /></span>
                <div>
                  <span className="contact-info__label">Email</span>
                  <a href="mailto:layla@longstake.ca" className="contact-info__value">layla@longstake.ca</a>
                </div>
              </li>
              <li>
                <span className="icon-chip" aria-hidden><IconPhone /></span>
                <div>
                  <span className="contact-info__label">Phone</span>
                  <a href={PHONE_TEL} className="contact-info__value">{PHONE_DISPLAY}</a>
                </div>
              </li>
              <li>
                <span className="icon-chip" aria-hidden><IconPin /></span>
                <div>
                  <span className="contact-info__label">Location</span>
                  <span className="contact-info__value">Scarborough, Toronto, ON — serving the GTA &amp; worldwide</span>
                </div>
              </li>
              <li>
                <span className="icon-chip" aria-hidden><IconClock /></span>
                <div>
                  <span className="contact-info__label">Office Hours</span>
                  <span className="contact-info__value">Mon–Fri, 24/7</span>
                </div>
              </li>
            </ul>
          </aside>

          <div className="contact-form-card card" data-reveal>
            {sent ? (
              <div className="contact-form__thanks" role="status">
                <span className="icon-chip" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden><path d="m5 12 5 5L20 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <h3>Thanks — we got it!</h3>
                <p>We’ll be in touch within one business day. For anything urgent, call or WhatsApp us.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="contact-form__honey" aria-hidden />
                <div className="contact-form__row">
                  <label className="contact-field">
                    <span>First name</span>
                    <input type="text" name="firstName" autoComplete="given-name" required />
                  </label>
                  <label className="contact-field">
                    <span>Last name</span>
                    <input type="text" name="lastName" autoComplete="family-name" required />
                  </label>
                </div>
                <div className="contact-form__row">
                  <label className="contact-field">
                    <span>Email</span>
                    <input type="email" name="email" autoComplete="email" required />
                  </label>
                  <label className="contact-field">
                    <span>Phone</span>
                    <input type="tel" name="phone" inputMode="tel" autoComplete="tel" />
                  </label>
                </div>
                <label className="contact-field">
                  <span>Service you’re interested in</span>
                  <select name="service" defaultValue="">
                    <option value="" disabled>Select a service</option>
                    {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </label>
                <label className="contact-field">
                  <span>Message</span>
                  <textarea name="message" rows={5} placeholder="Tell us a bit about your project…" required />
                </label>
                <button
                  type="submit"
                  className="btn btn--grad btn--block contact-form__submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                  {status !== 'sending' ? (
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  ) : null}
                </button>
                {status === 'error' ? (
                  <p className="contact-form__error" role="alert">
                    Something went wrong. Please try again, or email us at{' '}
                    <a href="mailto:layla@longstake.ca">layla@longstake.ca</a>.
                  </p>
                ) : null}
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Quick answers</span>
            <h2 className="h-section">Frequently Asked Questions</h2>
          </div>
          <div className="contact-faqs">
            {FAQS.map((f) => (
              <details className="contact-faq" key={f.q} data-reveal>
                <summary>
                  {f.q}
                  <span className="contact-faq__chev" aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none"><path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
