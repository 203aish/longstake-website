import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { TalkToUsLink } from './TalkToUsLink'
import './Header.css'

const COMPANY_ROUTES = ['/company-policy', '/careers', '/privacy-policy']

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)
  const companyRef = useRef(null)
  const location = useLocation()

  const companySectionActive = COMPANY_ROUTES.some((p) => location.pathname === p)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setCompanyOpen(false)
  }, [location.pathname])

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

  const navLinkClass = ({ isActive }) =>
    `nav-route${isActive ? ' nav-route--active' : ''}`

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} role="banner">
      <div className="container">
        <nav className="nav" aria-label="Main navigation">
          <Link to="/" className="logo-link">
            <div className="logo" role="button" aria-label="Go to Longstake home">
              <picture>
                <source srcSet="/logo-horizontal-dark.svg" media="(prefers-color-scheme: dark)" />
                <img src="/logo-horizontal.svg" alt="Longstake" className="logo-img" />
              </picture>
            </div>
          </Link>
          <ul className="nav-links">
            <li>
              <NavLink to="/stakenex" className={navLinkClass} end aria-label="Stakenex">
                Stakenex
              </NavLink>
            </li>
            <li>
              <NavLink to="/stakeflow" className={navLinkClass} aria-label="Stakeflow">
                Stakeflow
              </NavLink>
            </li>
            <li
              className={`nav-dropdown${companyOpen ? ' nav-dropdown--open' : ''}`}
              ref={companyRef}
            >
              <button
                type="button"
                className={`nav-dropdown-trigger${companySectionActive ? ' nav-dropdown-trigger--active' : ''}`}
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
                  >
                    Company Policy
                  </NavLink>
                </li>
                <li role="none">
                  <NavLink
                    role="menuitem"
                    to="/careers"
                    className={({ isActive }) => `nav-dropdown-link${isActive ? ' active' : ''}`}
                  >
                    Careers
                  </NavLink>
                </li>
                <li role="none">
                  <NavLink
                    role="menuitem"
                    to="/privacy-policy"
                    className={({ isActive }) => `nav-dropdown-link${isActive ? ' active' : ''}`}
                  >
                    Privacy Policy
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <TalkToUsLink aria-label="Contact Longstake" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
