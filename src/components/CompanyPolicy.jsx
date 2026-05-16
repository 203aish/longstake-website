import React, { useEffect, useRef } from 'react'
import './CompanyPolicy.css'

const CompanyPolicy = () => {
  const sectionRef = useRef(null)

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="company-policy" className="company-policy section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Our Company</h2>
        <p className="section-subtitle">
          Building a culture that values people, flexibility, and dedication
        </p>
        
        <div className="policy-content">
          <div className="policy-card">
            <div className="policy-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4L6 14V24C6 33.941 12.059 42.823 24 44C35.941 42.823 42 33.941 42 24V14L24 4Z" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 24V32M24 16V16" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="policy-title">Fully Remote Company</h3>
            <p className="policy-description">
              We are a fully remote company, allowing our team members to work from anywhere. This flexibility enables us to attract the best talent regardless of location and provides our team with the work-life balance they need to thrive.
            </p>
          </div>

          <div className="policy-card">
            <div className="policy-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="20" stroke="var(--primary-blue)" strokeWidth="2"/>
                <path d="M24 12V24L32 28" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="policy-title">Flexible Hours</h3>
            <p className="policy-description">
              We believe in flexible working hours that accommodate different time zones and personal schedules. Our team members have the autonomy to structure their workday in a way that maximizes their productivity and well-being.
            </p>
          </div>

          <div className="policy-card">
            <div className="policy-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21C19.2091 21 21 19.2091 21 17C21 14.7909 19.2091 13 17 13C14.7909 13 13 14.7909 13 17C13 19.2091 14.7909 21 17 21Z" stroke="var(--primary-blue)" strokeWidth="2"/>
                <path d="M31 21C33.2091 21 35 19.2091 35 17C35 14.7909 33.2091 13 31 13C28.7909 13 27 14.7909 27 17C27 19.2091 28.7909 21 31 21Z" stroke="var(--primary-blue)" strokeWidth="2"/>
                <path d="M17 35C19.2091 35 21 33.2091 21 31C21 28.7909 19.2091 27 17 27C14.7909 27 13 28.7909 13 31C13 33.2091 14.7909 35 17 35Z" stroke="var(--primary-blue)" strokeWidth="2"/>
                <path d="M31 35C33.2091 35 35 33.2091 35 31C35 28.7909 33.2091 27 31 27C28.7909 27 27 28.7909 27 31C27 33.2091 28.7909 35 31 35Z" stroke="var(--primary-blue)" strokeWidth="2"/>
                <path d="M24 24L24 24" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="policy-title">Small Dedicated Team</h3>
            <p className="policy-description">
              We are a small, dedicated team that values quality over quantity. Our size allows us to maintain close relationships, foster collaboration, and ensure every team member's voice is heard and valued.
            </p>
          </div>

          <div className="policy-card highlight">
            <div className="policy-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44C35.046 44 44 35.046 44 24C44 12.954 35.046 4 24 4Z" stroke="var(--primary-blue)" strokeWidth="2"/>
                <path d="M24 16V24L30 28" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round"/>
                <path d="M18 18L30 30M30 18L18 30" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="policy-title">Our Employees Are Our First Partners</h3>
            <p className="policy-description">
              We believe that our employees are our first and most important partners. We invest in their growth, listen to their ideas, and create an environment where they can thrive. When our team succeeds, our company succeeds. This partnership-first approach extends to everything we do—from how we work together internally to how we serve our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyPolicy
