import React from 'react'
import { Link } from 'react-router-dom'
import { FOOTER_CONTACT_ID } from './TalkToUsLink'
import { WhatsAppIcon } from './WhatsAppIcon'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '../constants/contact'
import './Footer.css'

const EMAILS = ['layla@longstake.ca']

const Footer = () => {
  return (
    <footer className="footer-site" role="contentinfo">
      <div className="container">
        <div className="footer-site-grid">
          <div className="footer-site-col footer-site-col--company">
            <h2 className="footer-site-heading">Company</h2>
            <ul className="footer-site-list">
              <li>
                <Link to="/company-policy" className="footer-site-link">
                  Company Policy
                </Link>
              </li>
              <li>
                <Link to="/careers" className="footer-site-link">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="footer-site-link">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div
            id={FOOTER_CONTACT_ID}
            className="footer-site-col footer-site-col--contact"
            tabIndex={-1}
          >
            <h2 className="footer-site-heading">Contact us</h2>
            <div className="footer-site-contact">
              <div className="footer-site-contact-row">
                <span className="footer-site-meta">Phone</span>
                <a href={PHONE_TEL} className="footer-site-contact-link">
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div className="footer-site-contact-row">
                <span className="footer-site-meta">WhatsApp</span>
                <a
                  href={WHATSAPP_URL}
                  className="footer-site-contact-link footer-site-contact-link--whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="footer-site-contact-link__icon" />
                  Message us on WhatsApp
                </a>
              </div>
              <div className="footer-site-contact-row footer-site-contact-row--stack">
                <span className="footer-site-meta">Email</span>
                <ul className="footer-site-email-list">
                  {EMAILS.map((email) => (
                    <li key={email}>
                      <a href={`mailto:${email}`} className="footer-site-contact-link">
                        {email}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="footer-site-copy">© {new Date().getFullYear()} Longstake. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
