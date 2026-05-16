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
          'Longstake is a Canada-based firm offering Stakenex (when you need investment—fundraising and curated investor and partner introductions) and Stakeflow (digital product engineering, websites, mobile apps, Meta and Google Ads, social setup, and integrated B2B systems).',
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
          'Longstake connects teams that need investment and strategic partners (Stakenex) with curated introductions, and delivers digital product engineering, paid media, and integrated software (Stakeflow)—Canada-based, worldwide mandates.',
        knowsAbout: [
          'Business investment and fundraising',
          'Startup and SMB capital raising',
          'Strategic investors and angel investors',
          'Hardware prototypes',
          'Corporate partnerships',
          'Technology licensing',
          'Business acquisition',
          'Hardware startups',
          'B2B matchmaking',
          'Custom software and web development',
          'Mobile application development',
          'Meta Ads and Google Ads',
          'Social media setup for business',
          'IoT software development',
          'Embedded systems',
          'Enterprise system integration',
          'SaaS and B2B product engineering',
          'AI-enabled product features',
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
          addressCountry: 'CA',
        },
        sameAs: [],
      },
      {
        '@type': 'ProfessionalService',
        '@id': PROFESSIONAL_ID,
        name: 'Longstake',
        parentOrganization: { '@id': ORG_ID },
        description:
          'Principal-led introductions between hardware teams and strategic investors or corporate partners when mutual fit is clear; and Stakeflow delivery for digital products, paid acquisition, social presence, and integrated engineering.',
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
          addressCountry: 'CA',
        },
        serviceType: [
          'Hardware Prototype Review',
          'Business Positioning',
          'Strategic Investor Introductions',
          'Strategic Partner Matching',
          'Corporate Partnership Development',
          'Licensing Facilitation',
          'Acquisition Facilitation',
          'Web and Mobile Product Development',
          'Meta Ads and Google Ads Management',
          'Social Media Account Setup',
          'Custom Software Development',
          'Hardware–Software Integration',
          'IoT and Embedded Development',
        ],
        areaServed: {
          '@type': 'Place',
          name: 'Worldwide',
        },
        offers: {
          '@type': 'Offer',
          description:
            'Curated outreach and introductions when fit is clear; and scoped build, media, and integration for B2B and hardware-led teams.',
        },
      },
      {
        '@type': 'Service',
        name: 'Stakenex — investment, fundraising, and strategic partner introductions',
        serviceType: 'Strategic Investor and Corporate Partner Introductions',
        provider: { '@id': ORG_ID },
        areaServed: {
          '@type': 'Place',
          name: 'Worldwide',
        },
        description:
          'For startups and SMBs that need investment or strategic capital: map aligned angels, VCs, and strategics; outreach and readiness; and introductions for fundraising, partnership, licensing, or M&A when interest is mutual.',
        offers: {
          '@type': 'Offer',
          description:
            'Curated matchmaking for investor and corporate partner conversations—not passive directories.',
        },
      },
      {
        '@type': 'Service',
        name: 'Stakeflow — digital products, paid media, social, and integrated engineering',
        serviceType: 'Digital Product Engineering and Growth Services',
        provider: { '@id': ORG_ID },
        areaServed: {
          '@type': 'Place',
          name: 'Worldwide',
        },
        description:
          'Stakeflow helps teams ship websites and mobile apps, run Meta and Google Ads with sound tracking, set up Instagram and social profiles, and connect embedded, IoT, and enterprise systems—plus AI-enabled features in the product when they are the right fit.',
        offers: {
          '@type': 'Offer',
          description:
            'Coordinated build and go-to-market execution for manufacturers, industrial teams, and B2B companies.',
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
