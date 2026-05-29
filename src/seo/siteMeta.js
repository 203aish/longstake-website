/** Base URL and default document meta (homepage / fallback). */
export const SITE_URL = 'https://longstake.ca'

/** Absolute URL for Open Graph / Twitter cards (must stay in sync with `public/og-image.png`). */
export const OG_IMAGE_URL = `${SITE_URL}/og-image.png`

const HOME_LANDING_META = {
  title: 'Longstake | Digital Product Engineering, Web & Mobile, Meta & Google Ads',
  description:
    'Longstake: digital product engineering (websites, mobile apps, B2B integrations, IoT), paid acquisition on Meta and Google, Instagram and social setup, and AI-enabled product features when they genuinely fit your build. Canada-based, worldwide clients.',
  keywords:
    'Longstake, digital product engineering, custom software development, website development company, mobile app development, Meta Ads management, Google Ads PPC, Instagram business setup, social media setup for business, B2B web development, enterprise integration, IoT development',
}

export const DEFAULT_PAGE_META = HOME_LANDING_META

export const PAGE_META = {
  home: HOME_LANDING_META,
  careers: {
    title: 'Careers | Longstake',
    description:
      'Join the Longstake team. We hire marketing and business development talent to help hardware inventors connect with strategic investors and corporate partners.',
    keywords:
      'Longstake careers, business development jobs, marketing jobs, Canada startup jobs, investor relations careers',
  },
  privacyPolicy: {
    title: 'Privacy Policy | Longstake',
    description:
      'Longstake privacy policy: how we collect, use, and protect personal information when you use longstake.ca and our services.',
    keywords: null,
  },
  companyPolicy: {
    title: 'Company Policy | Longstake',
    description:
      'Longstake company policies, standards, and guidelines governing how we work with clients and partners.',
    keywords: null,
  },
}
