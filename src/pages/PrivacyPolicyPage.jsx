import React from 'react'
import PrivacyPolicy from '../components/PrivacyPolicy'
import { usePageMeta } from '../hooks/usePageMeta'
import { PAGE_META } from '../seo/siteMeta'

const PrivacyPolicyPage = () => {
  usePageMeta({ ...PAGE_META.privacyPolicy, path: '/privacy-policy' })
  return (
    <div className="page-wrapper">
      <PrivacyPolicy />
    </div>
  )
}

export default PrivacyPolicyPage
