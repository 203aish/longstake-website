import React, { useEffect, useRef } from 'react'
import './CallToAction.css'

const CallToAction = () => {
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
    <section className="cta section" ref={sectionRef}>
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-headline">From funding to strategic expansion—let Stakenex help connect your startup with investors and partners when the fit is right.</h2>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
