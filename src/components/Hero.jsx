import React, { useEffect, useRef } from 'react'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [])

  return (
    <section className="hero" ref={heroRef} aria-label="Hero section">
      <div className="container">
        <div className="hero-content">
          <p className="hero-badge">Investor matchmaking platform</p>
          <h1 className="hero-headline">
            Where startups meet capital and partnerships
          </h1>
          <p className="hero-subtext">
            If you need investment for your business—or clearer paths to capital—Stakenex is a
            startup investor network and venture partnership practice. We offer strategic partnership
            consulting, investor outreach and readiness, and connections to angel investors in the
            USA and Canada—so you can find strategic partners and explore acquisitions when timing
            fits.
          </p>
          <p className="hero-connection">
            From funding to strategic expansion, we connect startups with investors and help navigate corporate collaboration, licensing, and M&amp;A for growing teams and SMBs.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
