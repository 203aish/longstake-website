import React from 'react'
import CompanyPolicy from '../components/CompanyPolicy'
import { usePageMeta } from '../hooks/usePageMeta'
import { PAGE_META } from '../seo/siteMeta'

const CompanyPolicyPage = () => {
  usePageMeta({ ...PAGE_META.companyPolicy, path: '/company-policy' })
  return (
    <div className="page-wrapper">
      <CompanyPolicy />
    </div>
  )
}

export default CompanyPolicyPage
