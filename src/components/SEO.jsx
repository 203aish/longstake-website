import React from 'react'
import { SITE_URL } from '../seo/siteMeta'

const ORG_ID = `${SITE_URL}/#organization`
const WEBSITE_ID = `${SITE_URL}/#website`
const PROFESSIONAL_ID = `${SITE_URL}/#professionalService`

const SEO = () => {
  const structuredDataGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: 'Longstake',
        description:
          'Longstake is a Toronto studio for websites, mobile and web apps, managed Google and Meta ads, Google review management, and Facebook/Instagram/LinkedIn setup—monthly plans from $9.9/mo.',
        publisher: { '@id': ORG_ID },
        inLanguage: ['en-CA', 'en-US'],
        copyrightHolder: { '@id': ORG_ID },
      },
      {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: 'Longstake',
        url: SITE_URL,
        logo: `${SITE_URL}/logo.svg`,
        image: `${SITE_URL}/og-image.png`,
        description:
          'Longstake is a Toronto web design and digital marketing studio—websites, apps, managed Google and Meta ads, review management, and social setup for Toronto, the GTA, and worldwide clients.',
        knowsAbout: [
          'Web design and website development',
          'Website redesign',
          'Mobile application development',
          'Web application development',
          'Google Ads management',
          'Meta Ads and Facebook advertising',
          'Instagram advertising and business setup',
          'Social media setup for business',
          'Google review management',
          'Automated review responses',
          'Small business digital marketing',
          'WhatsApp business chat integration',
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            email: 'layla@longstake.ca',
            contactType: 'Business Development',
          },
          {
            '@type': 'ContactPoint',
            telephone: '+1-437-878-0203',
            contactType: 'Customer Service',
          },
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Toronto',
          addressRegion: 'ON',
          addressCountry: 'CA',
        },
        areaServed: [
          { '@type': 'City', name: 'Toronto' },
          { '@type': 'AdministrativeArea', name: 'Greater Toronto Area' },
          { '@type': 'AdministrativeArea', name: 'Ontario' },
          { '@type': 'Country', name: 'Canada' },
          { '@type': 'Place', name: 'Worldwide' },
        ],
        sameAs: [],
      },
      {
        '@type': 'ProfessionalService',
        '@id': PROFESSIONAL_ID,
        name: 'Longstake',
        parentOrganization: { '@id': ORG_ID },
        description:
          'Toronto studio for websites, managed Google and Meta ads, Google review management, and social profile setup—one partner for site, ads, and reviews.',
        url: SITE_URL,
        logo: `${SITE_URL}/logo.svg`,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-437-878-0203',
          contactType: 'Customer Service',
          email: 'layla@longstake.ca',
          areaServed: 'Worldwide',
          availableLanguage: ['English'],
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Toronto',
          addressRegion: 'ON',
          addressCountry: 'CA',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 43.6532,
          longitude: -79.3832,
        },
        serviceType: [
          'Web Design and Website Development',
          'Website Redesign',
          'Mobile and Web Application Development',
          'Google Ads Management',
          'Meta Ads and Facebook Instagram Advertising',
          'Social Media Account Setup',
          'Google Review Management',
        ],
        areaServed: [
          { '@type': 'City', name: 'Toronto' },
          { '@type': 'AdministrativeArea', name: 'Greater Toronto Area' },
          { '@type': 'AdministrativeArea', name: 'Ontario' },
          { '@type': 'Place', name: 'Worldwide' },
        ],
        offers: {
          '@type': 'Offer',
          description:
            'Monthly plans from $9.9/mo for websites, managed ads, reviews, and apps. See https://longstake.ca/pricing',
          url: `${SITE_URL}/pricing`,
        },
      },
      {
        '@type': 'Service',
        name: 'Longstake — websites, managed ads, reviews, and apps',
        serviceType: 'Web Design and Digital Marketing',
        provider: { '@id': ORG_ID },
        areaServed: [
          { '@type': 'City', name: 'Toronto' },
          { '@type': 'AdministrativeArea', name: 'Greater Toronto Area' },
          { '@type': 'Place', name: 'Worldwide' },
        ],
        description:
          'Longstake helps Toronto-area businesses with websites, mobile and web apps, managed Google and Meta ads, automated Google review responses, and Facebook/Instagram/LinkedIn setup.',
        offers: {
          '@type': 'Offer',
          description:
            'Starter from $9.9/mo; Growth, Scale, Pro, and App plans for ads management and apps.',
          url: `${SITE_URL}/pricing`,
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataGraph) }}
    />
  )
}

export default SEO
