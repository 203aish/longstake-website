import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { LongstakeBrandMark, StakenexBrandMark, StakeflowBrandMark } from './BrandWordmark'
import { TalkToUsLink } from './TalkToUsLink'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const companyRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setCompanyOpen(false)
    setMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!mobileMenuOpen) setCompanyOpen(false)
  }, [mobileMenuOpen])

  useEffect(() => {
    const closeOnEscape = (e) => {
      if (e.key !== 'Escape') return
      setMobileMenuOpen(false)
      setCompanyOpen(false)
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

  useEffect(() => {
    if (!companyOpen) return undefined
    const onDown = (e) => {
      if (companyRef.current && !companyRef.current.contains(e.target)) {
        setCompanyOpen(false)
      }
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [companyOpen])

  const navWordmarkLinkClass = ({ isActive }) =>
    `nav-route nav-route--wordmark${isActive ? ' nav-route--active' : ''}`

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
                to="/stakenex"
                className={navWordmarkLinkClass}
                end
                aria-label="Stakenex"
                onClick={() => setMobileMenuOpen(false)}
              >
                <StakenexBrandMark />
              </NavLink>
            </li>
            <li className="nav-links__item">
              <NavLink
                to="/stakeflow"
                className={navWordmarkLinkClass}
                aria-label="Stakeflow"
                onClick={() => setMobileMenuOpen(false)}
              >
                <StakeflowBrandMark />
              </NavLink>
            </li>
            <li
              className={`nav-links__item nav-dropdown${companyOpen ? ' nav-dropdown--open' : ''}`}
              ref={companyRef}
            >
              <button
                type="button"
                className="nav-dropdown-trigger"
                aria-expanded={companyOpen}
                aria-haspopup="true"
                aria-controls="company-submenu"
                id="company-menu-button"
                onClick={() => setCompanyOpen((o) => !o)}
              >
                Company
                <span className="nav-dropdown-chevron" aria-hidden />
              </button>
              <ul className="nav-dropdown-menu" id="company-submenu" role="menu" aria-labelledby="company-menu-button">
                <li role="none">
                  <NavLink
                    role="menuitem"
                    to="/company-policy"
                    className={({ isActive }) => `nav-dropdown-link${isActive ? ' active' : ''}`}
                    onClick={() => {
                      setCompanyOpen(false)
                      setMobileMenuOpen(false)
                    }}
                  >
                    Company Policy
                  </NavLink>
                </li>
                <li role="none">
                  <NavLink
                    role="menuitem"
                    to="/careers"
                    className={({ isActive }) => `nav-dropdown-link${isActive ? ' active' : ''}`}
                    onClick={() => {
                      setCompanyOpen(false)
                      setMobileMenuOpen(false)
                    }}
                  >
                    Careers
                  </NavLink>
                </li>
                <li role="none">
                  <NavLink
                    role="menuitem"
                    to="/privacy-policy"
                    className={({ isActive }) => `nav-dropdown-link${isActive ? ' active' : ''}`}
                    onClick={() => {
                      setCompanyOpen(false)
                      setMobileMenuOpen(false)
                    }}
                  >
                    Privacy Policy
                  </NavLink>
                </li>
              </ul>
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
