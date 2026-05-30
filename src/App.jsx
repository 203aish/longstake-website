import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import SEO from './components/SEO'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToHash from './ScrollToHash'
import HomePage from './pages/HomePage'
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
            <Route path="/stakenex" element={<Navigate to="/" replace />} />
            <Route path="/stakenex/" element={<Navigate to="/" replace />} />
            <Route path="/stakeflow" element={<Navigate to="/" replace />} />
            <Route path="/stakeflow/" element={<Navigate to="/" replace />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/pricing/" element={<PricingPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/careers/" element={<CareersPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/privacy-policy/" element={<PrivacyPolicyPage />} />
            <Route path="/contact" element={<Navigate to="/#site-contact" replace />} />
            <Route path="/contact/" element={<Navigate to="/#site-contact" replace />} />
            <Route path="/company-policy" element={<CompanyPolicyPage />} />
            <Route path="/company-policy/" element={<CompanyPolicyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
