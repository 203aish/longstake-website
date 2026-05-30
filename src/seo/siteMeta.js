/** Base URL and default document meta (homepage / fallback). */
export const SITE_URL = 'https://longstake.ca'

/** Absolute URL for Open Graph / Twitter cards (must stay in sync with `public/og-image.png`). */
export const OG_IMAGE_URL = `${SITE_URL}/og-image.png`

const HOME_LANDING_META = {
  title: 'Toronto Web Design, Apps & Managed Google/Meta Ads from $9.9/mo | Longstake',
  description:
    'Longstake: Toronto websites and redesigns, mobile/web apps, managed Google and Meta ads, Google review management, and Facebook/Instagram/LinkedIn setup. Monthly plans from $9.9/mo. GTA and worldwide.',
  keywords:
    'web design Toronto, website development Toronto, website redesign Toronto, how much does a website cost Toronto, mobile app development Toronto, google ads management Toronto, facebook ads management Toronto, instagram ads management Toronto, meta ads agency Toronto, social media setup Toronto, google review management Toronto, managed ads Toronto, small business website Toronto, Longstake',
}

export const DEFAULT_PAGE_META = HOME_LANDING_META

export const PAGE_META = {
  home: HOME_LANDING_META,
  pricing: {
    title: 'Pricing | Toronto Websites & Managed Google/Meta Ads from $9.9/mo | Longstake',
    description:
      'Longstake pricing for Toronto: Starter $9.9/mo (website + reviews + social links), Growth $29.9/mo (site + one ad channel), Scale $39.9/mo (both Google & Meta), Pro $59.9/mo, App $79.9/mo. Free setup on Starter–Scale.',
    keywords:
      'website pricing Toronto, how much does a website cost Toronto, managed Google Ads pricing Toronto, managed Meta Ads pricing Toronto, facebook instagram ads management cost Toronto, google review management pricing, monthly website plans Toronto, web app development cost Toronto, Longstake pricing',
  },
  careers: {
    title: 'Careers | Longstake',
    description:
      'Join the Longstake team in Toronto. We hire marketing, client success, and digital delivery talent for websites, managed ads, and review management.',
    keywords:
      'Longstake careers, marketing jobs Toronto, digital marketing jobs Toronto, web design jobs Toronto, client success jobs Toronto',
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
