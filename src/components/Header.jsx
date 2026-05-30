import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { LongstakeBrandMark } from './BrandWordmark'
import { TalkToUsLink } from './TalkToUsLink'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const closeOnEscape = (e) => {
      if (e.key !== 'Escape') return
      setMobileMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = ''
      }
    }
    document.body.style.overflow = ''
    return undefined
  }, [mobileMenuOpen])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 769px)')
    const syncDrawerToViewport = () => {
      if (mq.matches) setMobileMenuOpen(false)
    }
    mq.addEventListener('change', syncDrawerToViewport)
    return () => mq.removeEventListener('change', syncDrawerToViewport)
  }, [])

  return (
    <>
      {mobileMenuOpen ? (
        <button
          type="button"
          className="nav-mobile-backdrop"
          aria-hidden
          tabIndex={-1}
          onClick={() => setMobileMenuOpen(false)}
        />
      ) : null}
      <header
        className={`header ${isScrolled ? 'scrolled' : ''}${mobileMenuOpen ? ' header--mobile-open' : ''}`}
        role="banner"
      >
        <div className="container header__inner">
          <nav className="nav" aria-label="Main navigation" id="site-primary-nav">
            <Link
              to="/"
              className="logo-link"
              aria-label="Longstake home"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="logo">
                <LongstakeBrandMark variant="header" />
              </div>
            </Link>
            <a
              href="tel:+14378780203"
              className="nav-cta-mobile"
              aria-label="Call Longstake at +1 437 878 0203"
            >
              <svg className="nav-cta-mobile__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
              </svg>
              <span className="nav-cta-mobile__num">+1 (437) 878-0203</span>
            </a>
            <button
              type="button"
              className={`nav-mobile-toggle ${mobileMenuOpen ? 'nav-mobile-toggle--open' : ''}`}
              aria-expanded={mobileMenuOpen}
              aria-controls="site-nav-drawer-links"
              onClick={() => setMobileMenuOpen((o) => !o)}
            >
              <span className="visually-hidden">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
              <span className="nav-mobile-toggle-lines" aria-hidden>
                <span />
                <span />
                <span />
              </span>
            </button>
            <ul className={`nav-links${mobileMenuOpen ? ' nav-links--drawer-open' : ''}`} id="site-nav-drawer-links">
              <li className="nav-links__item">
                <NavLink
                  to="/pricing"
                  className={({ isActive }) => `nav-link-top${isActive ? ' nav-link-top--active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </NavLink>
              </li>
              <li className="nav-links__item nav-links__item--cta">
                <TalkToUsLink aria-label="Contact Longstake" onClick={() => setMobileMenuOpen(false)} />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
