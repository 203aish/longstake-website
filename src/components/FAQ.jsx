import React, { useState, useEffect, useRef } from 'react'
import './FAQ.css'

const FAQ = () => {
  const sectionRef = useRef(null)
  const [openIndex, setOpenIndex] = useState(null)

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

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      question: 'I need investment for my business—can Stakenex help?',
      answer:
        'Yes, when you are past idea stage and can explain traction, product, and what you are raising for. We focus on fundraising readiness and selective introductions to angels, strategics, and funds—not mass outreach or passive listings.',
    },
    {
      question: 'Who is Stakenex for?',
      answer: 'Founders and leadership teams at startups and SMBs who want curated investor matchmaking—whether you are raising from angels or strategics, pursuing corporate collaboration and licensing, or exploring M&A. We are strongest when you can articulate traction, product, and what you want next.'
    },
    {
      question: 'How to find the right investors for my startup?',
      answer: 'Start by tightening narrative, stage, and use of funds. We help with investor outreach and readiness consulting, map who actually fits your sector and round, then pursue introductions selectively rather than mass-blasting pitch decks.'
    },
    {
      question: 'How to get strategic partners for my business?',
      answer: 'We focus on strategic partnership consulting: identifying companies whose roadmap or channel fits yours, positioning a credible story, and engaging confidentially. You step in when mutual interest warrants deeper commercial or technical discussion.'
    },
    {
      question: 'Preparing a pitch deck for venture capital?',
      answer: 'Materials should support a live conversation: problem, solution, market, traction, team, and ask. We help align decks and supporting notes with how angels, VCs, and corporate venture arms evaluate early-stage B2B and SaaS opportunities.'
    },
    {
      question: 'How to get acquired as a tech startup?',
      answer: 'Acquisition conversations usually follow clear fit on product, customers, and timing. We support startup acquisition and exit advisory by identifying likely buyers and strategics, positioning your business responsibly, and arranging intros when alignment is real.'
    },
    {
      question: 'How do introductions work?',
      answer: 'After we understand your company and goals, we identify aligned parties, reach out confidentially, and arrange an introduction when mutual interest is clear. You are not expected to cold-contact a directory on your own.'
    },
    {
      question: 'Do you work with companies outside the USA and Canada?',
      answer: 'Yes. We emphasize connecting with angel investors in the USA and Canada and North American strategics where relevant, but we work with founders globally when the mandate fits our network and process.'
    },
    {
      question: 'Is the process confidential?',
      answer: 'Yes. Materials and conversations are handled confidentially, and outreach is targeted so your story is shared only with relevant parties.'
    },
    {
      question: 'How do fees work?',
      answer:
        'Use the “Talk to us” link in the site header to jump to the footer contact details, or reach us by phone or email there. We tailor fees and scope to your stage and goals after an initial conversation.',
    },
    {
      question: 'What makes Stakenex different from a listing or marketplace?',
      answer: 'We actively find and introduce aligned investors and partners based on a substantive read of your business. The value is curated matchmaking and introductions, not passive browsing on a platform.'
    }
  ]

  return (
    <section id="faq" className="faq section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Investor matchmaking, fundraising, strategic partners, M&amp;A, and venture capital readiness—practical answers for startups and SMBs.
        </p>
        <div className="faq-content">
          {faqs.map((faq, index) => (
            <div key={faq.question} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span className="faq-question-text">{faq.question}</span>
                <span className="faq-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 4V16M4 10H16" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round" className={openIndex === index ? 'rotated' : ''} />
                  </svg>
                </span>
              </button>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
