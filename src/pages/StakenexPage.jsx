import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { PAGE_META } from '../seo/siteMeta'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import StakenexCapabilities from '../components/StakenexCapabilities'
import WhyLongstake from '../components/WhyLongstake'
import FAQ from '../components/FAQ'

const StakenexPage = () => {
  const location = useLocation()
  usePageMeta({ ...PAGE_META.stakenex, path: '/stakenex' })

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1))
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [location])

  return (
    <>
      <Hero />
      <HowItWorks />
      <StakenexCapabilities />
      <WhyLongstake />
      <FAQ />
    </>
  )
}

export default StakenexPage
