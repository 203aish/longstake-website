import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import SEO from './components/SEO'
import Header from './components/Header'
import Footer from './components/Footer'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import ScrollToHash from './ScrollToHash'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PricingPage from './pages/PricingPage'
import CareersPage from './pages/CareersPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import CompanyPolicyPage from './pages/CompanyPolicyPage'
import './App.css'

function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="App">
        <SEO />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/contact/" element={<ContactPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/pricing/" element={<PricingPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/careers/" element={<CareersPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/privacy-policy/" element={<PrivacyPolicyPage />} />
            <Route path="/company-policy" element={<CompanyPolicyPage />} />
            <Route path="/company-policy/" element={<CompanyPolicyPage />} />
            <Route path="/stakenex" element={<Navigate to="/" replace />} />
            <Route path="/stakeflow" element={<Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  )
}

export default App
