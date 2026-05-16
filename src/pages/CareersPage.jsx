import React from 'react'
import Careers from '../components/Careers'
import { usePageMeta } from '../hooks/usePageMeta'
import { PAGE_META } from '../seo/siteMeta'

const CareersPage = () => {
  usePageMeta({ ...PAGE_META.careers, path: '/careers' })
  return (
    <div className="page-wrapper">
      <Careers />
    </div>
  )
}

export default CareersPage
