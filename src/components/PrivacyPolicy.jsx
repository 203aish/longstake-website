import React, { useEffect, useRef } from 'react'
import './PrivacyPolicy.css'

const PrivacyPolicy = () => {
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
    <section id="privacy-policy" className="privacy-policy section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Privacy Policy</h2>
        <p className="section-subtitle">
          Last updated: January 1, 2026
        </p>

        <div className="privacy-content">
          <div className="privacy-section">
            <h3 className="privacy-heading">1. Introduction</h3>
            <p>
              Longstake ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains our practices regarding information collection and use for our static informational website.
            </p>
          </div>

          <div className="privacy-section">
            <h3 className="privacy-heading">2. Website Information Collection</h3>
            <p>
              <strong>Our website is a static informational site.</strong> We do not collect, store, or process any personal information through this website. The website does not include:
            </p>
            <ul>
              <li>Contact forms or data submission forms</li>
              <li>User accounts or registration systems</li>
              <li>Cookies or tracking technologies</li>
              <li>Analytics or data collection tools</li>
            </ul>
            <p>
              You can browse our website anonymously without providing any personal information.
            </p>
          </div>

          <div className="privacy-section">
            <h3 className="privacy-heading">3. Information You Provide Directly</h3>
            <p>
              If you choose to contact us directly via email or phone (using the contact information provided on our website), we will receive and may store:
            </p>
            <ul>
              <li>Information you include in your email communications</li>
              <li>Information shared during phone conversations</li>
              <li>Any business information you voluntarily provide</li>
            </ul>
            <p>
              This information is used solely to respond to your inquiries and provide our services. We do not collect this information automatically through the website.
            </p>
          </div>

          <div className="privacy-section">
            <h3 className="privacy-heading">4. How We Use Information</h3>
            <p>If you contact us directly, we use the information you provide to:</p>
            <ul>
              <li>Respond to your inquiries</li>
              <li>Provide information about our services</li>
              <li>Facilitate connections with potential strategic partners and acquirers (with your consent)</li>
              <li>Communicate about our services</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h3 className="privacy-heading">5. Information Sharing and Disclosure</h3>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share information you provide only:
            </p>
            <ul>
              <li>With your explicit consent</li>
              <li>To facilitate connections with potential partners or acquirers (as part of our service, with your consent)</li>
              <li>To comply with legal requirements</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h3 className="privacy-heading">6. Data Security</h3>
            <p>
              Since our website does not collect or store data, there is no data security risk from website usage. Any information you share with us directly via email or phone is handled with appropriate confidentiality measures.
            </p>
          </div>

          <div className="privacy-section">
            <h3 className="privacy-heading">7. Confidentiality</h3>
            <p>
              We maintain strict confidentiality regarding all client information and business details shared with us directly. Your information is handled with the utmost care and is only shared with potential partners or acquirers with your explicit consent and as part of our service delivery.
            </p>
          </div>

          <div className="privacy-section">
            <h3 className="privacy-heading">8. Cookies and Tracking</h3>
            <p>
              Our website does not use cookies, tracking technologies, or analytics tools. Your browsing activity on our website is not tracked or monitored.
            </p>
          </div>

          <div className="privacy-section">
            <h3 className="privacy-heading">9. Third-Party Links</h3>
            <p>
              Our website contains links to third-party websites (such as government data sources). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies when visiting these sites.
            </p>
          </div>

          <div className="privacy-section">
            <h3 className="privacy-heading">10. Your Rights</h3>
            <p>If you have shared information with us directly, you have the right to:</p>
            <ul>
              <li>Request access to information we have about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Withdraw consent for information sharing at any time</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h3 className="privacy-heading">11. Changes to This Privacy Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </div>

          <div className="privacy-section">
            <h3 className="privacy-heading">12. Contact Us</h3>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
            </p>
            <p>
              <strong>Email: <a href="mailto:layla@longstake.ca" className="privacy-email">layla@longstake.ca</a></strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicy
