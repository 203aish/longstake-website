/** Base URL and default document meta (homepage / fallback). */
export const SITE_URL = 'https://longstake.ca'

/** Absolute URL for Open Graph / Twitter cards (must stay in sync with `public/og-image.png`). */
export const OG_IMAGE_URL = `${SITE_URL}/og-image.png`

/** Comma-separated keywords shared by Home meta (also mirrored in index.html). */
export const HOME_SEARCH_KEYWORDS =
  'web design Toronto, website design Toronto, website development Toronto, website redesign Toronto, web design company Toronto, web design agency Toronto, website designer Toronto, how much does a website cost Toronto, affordable website Toronto, small business website Toronto, mobile app development Toronto, web app development Toronto, app development company Toronto, google ads management Toronto, google ads agency Toronto, PPC management Toronto, facebook ads management Toronto, instagram ads management Toronto, meta ads agency Toronto, facebook ads Toronto, instagram marketing Toronto, social media setup Toronto, facebook business page setup, instagram business profile setup, linkedin business page setup, google review management Toronto, automated google review responses, online reputation management Toronto, digital marketing Toronto, managed ads Toronto, website and ads package Toronto, monthly website plans Toronto, GTA web design, Mississauga web design, Brampton web design, Markham web design, Vaughan web design, Scarborough web design, Longstake'

const HOME_LANDING_META = {
  title: 'Toronto Web Design, Apps & Managed Google/Meta Ads from $9.9/mo | Longstake',
  description:
    'Longstake: Toronto websites and redesigns, mobile/web apps, managed Google and Meta ads, Google review management, and Facebook/Instagram/LinkedIn setup. Monthly plans from $9.9/mo. GTA and worldwide.',
  keywords: HOME_SEARCH_KEYWORDS,
}

export const DEFAULT_PAGE_META = HOME_LANDING_META

export const PAGE_META = {
  home: HOME_LANDING_META,
  pricing: {
    title: 'Pricing | Toronto Websites & Managed Google/Meta Ads from $9.9/mo | Longstake',
    description:
      'Longstake pricing for Toronto: Starter $9.9/mo (website + reviews + social links), Growth $29.9/mo (site + one ad channel), Scale $39.9/mo (both Google & Meta), Pro $59.9/mo, App $79.9/mo. Free setup on Starter–Scale.',
    keywords:
      'website pricing Toronto, how much does a website cost Toronto, cheap website Toronto, affordable website plans Toronto, managed Google Ads pricing Toronto, managed Meta Ads pricing Toronto, facebook ads management cost Toronto, instagram ads management Toronto, google review management pricing Toronto, monthly website plans Toronto, web design packages Toronto, website and ads bundle Toronto, mobile app development cost Toronto, web app development pricing Toronto, digital marketing packages Toronto, Longstake pricing',
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
