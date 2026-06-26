import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { LongstakeBrandMark } from './BrandWordmark'
import { PHONE_TEL } from '../constants/contact'
import './Header.css'

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About Us' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.width = ''
      return undefined
    }

    const scrollY = window.scrollY
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.left = '0'
    document.body.style.right = '0'
    document.body.style.width = '100%'

    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.width = ''
      window.scrollTo(0, scrollY)
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      {mobileMenuOpen ? (
        <button
          type="button"
          className="hdr-backdrop"
          aria-hidden
          tabIndex={-1}
          onClick={() => setMobileMenuOpen(false)}
        />
      ) : null}
      <header className={`hdr${isScrolled ? ' hdr--scrolled' : ''}${mobileMenuOpen ? ' hdr--open' : ''}`} role="banner">
        <div className="container hdr__inner">
          <Link to="/" className="hdr__logo" aria-label="Longstake home">
            <LongstakeBrandMark variant="header" />
          </Link>

          <nav className="hdr__nav" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) => `hdr__link${isActive ? ' hdr__link--active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hdr__actions">
            <Link to="/contact" className="btn btn--grad hdr__cta">
              Book a Call
            </Link>
            <a href={PHONE_TEL} className="btn btn--grad hdr__cta-mobile">
              Talk to us
            </a>
            <button
              type="button"
              className={`hdr__burger${mobileMenuOpen ? ' hdr__burger--open' : ''}`}
              aria-expanded={mobileMenuOpen}
              aria-controls="hdr-drawer"
              onClick={() => setMobileMenuOpen((o) => !o)}
            >
              <span className="visually-hidden">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
              <span aria-hidden>
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>

        <div className={`hdr__drawer${mobileMenuOpen ? ' hdr__drawer--open' : ''}`} id="hdr-drawer">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => `hdr__drawer-link${isActive ? ' hdr__drawer-link--active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <a href={PHONE_TEL} className="btn btn--grad btn--block" onClick={() => setMobileMenuOpen(false)}>
            Talk to us
          </a>
        </div>
      </header>
    </>
  )
}

export default Header
