/** Base URL and default document meta (homepage / fallback). */
export const SITE_URL = 'https://longstake.ca'

/** Absolute URL for Open Graph / Twitter cards (must stay in sync with `public/og-image.png`). */
export const OG_IMAGE_URL = `${SITE_URL}/og-image.png`

const HOME_LANDING_META = {
  title: 'Toronto Web Design, App Development & Meta/Google Ads | Longstake',
  description:
    'Longstake is a Toronto web design, development, and digital marketing studio: websites and website redesigns, mobile app development, Facebook & Instagram setup, and managed Google and Meta ads. Serving Toronto, the GTA, and clients worldwide.',
  keywords:
    'web design Toronto, web design services Toronto, website development Toronto, website redesign Toronto, mobile app development company Toronto, app development Toronto, facebook and instagram ads management Toronto, meta ads agency Toronto, google ads management Toronto, social media setup service Toronto, Longstake',
}

export const DEFAULT_PAGE_META = HOME_LANDING_META

export const PAGE_META = {
  home: HOME_LANDING_META,
  pricing: {
    title: 'Pricing | Toronto Web Design & Managed Google/Meta Ads from $9.9/mo | Longstake',
    description:
      'Longstake pricing for Toronto businesses: monthly plans from $9.9/mo for websites, managed Google and Meta ads, reviews, analytics, and mobile/web apps. Free setup on Starter, Growth, and Scale. Ad spend billed directly to you.',
    keywords:
      'web design pricing Toronto, website cost Toronto, managed Google Ads pricing Toronto, managed Meta Ads pricing Toronto, social media management pricing Toronto, mobile app development cost Toronto, monthly website plans, Longstake pricing',
  },
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
