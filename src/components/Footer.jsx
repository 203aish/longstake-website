import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LongstakeBrandMark } from './BrandWordmark'
import { WhatsAppIcon } from './WhatsAppIcon'
import { FacebookIcon, InstagramIcon, LinkedInIcon } from './SocialIcons'
import {
  PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL, FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL,
  WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT,
} from '../constants/contact'
import './Footer.css'

const SERVICE_LINKS = [
  { label: 'Web Development', to: '/services' },
  { label: 'Digital Marketing', to: '/services' },
  { label: 'Managed Ads', to: '/services' },
  { label: 'Branding & Design', to: '/services' },
  { label: 'Review Management', to: '/services' },
]

const COMPANY_LINKS = [
  { label: 'About Us', to: '/about' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]

const RESOURCE_LINKS = [
  { label: 'Company Policy', to: '/company-policy' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
]

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!email.includes('@')) return

    try {
      await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'New newsletter subscriber',
          from_name: 'Longstake newsletter',
          email,
        }),
      })
    } catch {
      /* still show success; non-critical */
    }

    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="ft" role="contentinfo" id="site-contact">
      <div className="container">
        <div className="ft-news">
          <div className="ft-news__copy">
            <h2 className="ft-news__title">Stay Updated with Insights</h2>
            <p className="ft-news__sub">
              Get the latest insights and updates straight to your inbox.
            </p>
          </div>
          {subscribed ? (
            <p className="ft-news__thanks" role="status">
              Thanks for subscribing — you’re on the list.
            </p>
          ) : (
            <form className="ft-news__form" onSubmit={handleSubscribe}>
              <input
                type="email"
                className="ft-news__input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address for newsletter"
              />
              <button type="submit" className="btn btn--grad ft-news__btn">
                <span>Subscribe</span>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          )}
        </div>

        <div className="ft-grid">
          <div className="ft-brand">
            <Link to="/" className="ft-brand__logo" aria-label="Longstake home">
              <LongstakeBrandMark variant="header" />
            </Link>
            <p className="ft-brand__desc">
              Helping Toronto &amp; GTA businesses grow online — websites, apps, managed Google &amp; Meta
              ads, and review management. Simple monthly plans.
            </p>
            <div className="ft-contact">
              <a href={PHONE_TEL} className="ft-contact__link">{PHONE_DISPLAY}</a>
              <a href="mailto:layla@longstake.ca" className="ft-contact__link">layla@longstake.ca</a>
            </div>
            <div className="ft-social">
              <a
                href={WHATSAPP_URL}
                className="ft-social__btn ft-social__btn--whatsapp"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="ft-social__icon" />
              </a>
              <a
                href={FACEBOOK_URL}
                className="ft-social__btn ft-social__btn--facebook"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon className="ft-social__icon" />
              </a>
              <a
                href={INSTAGRAM_URL}
                className="ft-social__btn ft-social__btn--instagram"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="ft-social__icon" />
              </a>
              <a
                href={LINKEDIN_URL}
                className="ft-social__btn ft-social__btn--linkedin"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="ft-social__icon" />
              </a>
            </div>
          </div>

          <div className="ft-col">
            <h3 className="ft-col__title">Services</h3>
            <ul>
              {SERVICE_LINKS.map((l) => (
                <li key={l.label}><Link to={l.to} className="ft-col__link">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="ft-col">
            <h3 className="ft-col__title">Company</h3>
            <ul>
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}><Link to={l.to} className="ft-col__link">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="ft-col">
            <h3 className="ft-col__title">Resources</h3>
            <ul>
              {RESOURCE_LINKS.map((l) => (
                <li key={l.label}><Link to={l.to} className="ft-col__link">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="ft-bottom">
          <p>© {new Date().getFullYear()} Longstake Ltd. All rights reserved.</p>
          <div className="ft-bottom__links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/company-policy">Company Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
