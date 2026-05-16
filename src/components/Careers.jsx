import React, { useEffect, useRef } from 'react'
import './Careers.css'

const Careers = () => {
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
    <section id="careers" className="careers section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Join Our Team</h2>
        <p className="section-subtitle">
          We’re looking for marketing and business development professionals who can help hardware teams connect with
          strategic investors and corporate partners.
        </p>

        <div className="careers-content">
          <div className="job-opening">
            <div className="job-header">
              <h3 className="job-title">Marketing &amp; Business Development</h3>
              <span className="job-count">2 Positions Available</span>
            </div>
            
            <div className="job-details">
              <div className="job-detail-item">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 1L3 5V9C3 13.53 6.61 17.74 10 19C13.39 17.74 17 13.53 17 9V5L10 1Z" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Fully Remote</span>
              </div>
              <div className="job-detail-item">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="8" stroke="var(--primary-blue)" strokeWidth="2"/>
                  <path d="M10 6V10L13 12" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>Flexible Hours</span>
              </div>
            </div>

            <div className="job-description">
              <h4 className="job-section-title">About the Role</h4>
              <p>
                We are seeking experienced marketing and business development professionals to join our team. You will support positioning, outreach, and partner conversations for inventors and hardware teams with working prototypes. This role suits someone who thrives in a remote, flexible environment and cares about selective, confidential introductions—not volume spam.
              </p>

              <h4 className="job-section-title">Key Responsibilities</h4>
              <ul className="job-requirements">
                <li>Develop and execute email marketing campaigns</li>
                <li>Utilize AI tools to optimize marketing strategies and campaigns</li>
                <li>Knowledge of various communication channels</li>
                <li>Create compelling marketing content and materials</li>
                <li>Analyze marketing performance and provide insights</li>
                <li>Collaborate with team members on strategic initiatives</li>
              </ul>

              <h4 className="job-section-title">Required Experience</h4>
              <ul className="job-requirements">
                <li>Minimum 5 years of professional marketing experience</li>
                <li>MBA degree or equivalent advanced education</li>
                <li>Hands-on experience in email marketing</li>
                <li>Proficiency with AI tools for marketing automation and optimization</li>
                <li>Knowledge of various communication channels</li>
                <li>Strong customer communication and relationship-building skills</li>
                <li>Highly professional demeanor and excellent written communication</li>
                <li>Ability to work independently in a remote environment</li>
                <li>Experience in B2B marketing preferred</li>
              </ul>

              <h4 className="job-section-title">What We Offer</h4>
              <ul className="job-benefits">
                <li>Fully remote work environment</li>
                <li>Flexible working hours</li>
                <li>Small, dedicated team culture</li>
                <li>Opportunity to work with innovative businesses</li>
                <li>Professional growth and development opportunities</li>
                <li>Partnership-first approach—your success is our success</li>
              </ul>
            </div>

            <div className="job-cta">
              <p className="apply-text">Interested in joining our team?</p>
              <p className="apply-note">
                Use <strong>Talk to us</strong> in the site header to get in touch. Contact details and team emails are
                also in the footer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Careers
