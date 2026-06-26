/** Base URL and default document meta (homepage / fallback). */
export const SITE_URL = 'https://longstake.ca'

/** Absolute URL for Open Graph / Twitter cards (must stay in sync with `public/og-image.png`). */
export const OG_IMAGE_URL = `${SITE_URL}/og-image.png`

/** Comma-separated keywords shared by Home meta (also mirrored in index.html). */
export const HOME_SEARCH_KEYWORDS =
  'web design Toronto, website design Toronto, website development Toronto, website redesign Toronto, web design company Toronto, web design agency Toronto, website designer Toronto, how much does a website cost Toronto, affordable website Toronto, small business website Toronto, mobile app development Toronto, web app development Toronto, app development company Toronto, google ads management Toronto, google ads agency Toronto, PPC management Toronto, facebook ads management Toronto, instagram ads management Toronto, meta ads agency Toronto, facebook ads Toronto, instagram marketing Toronto, social media setup Toronto, facebook business page setup, instagram business profile setup, linkedin business page setup, google review management Toronto, automated google review responses, online reputation management Toronto, digital marketing Toronto, managed ads Toronto, website and ads package Toronto, monthly website plans Toronto, GTA web design, Mississauga web design, Brampton web design, Markham web design, Vaughan web design, Scarborough web design, Longstake'

const HOME_LANDING_META = {
  title: 'Toronto Web Design, Apps & Managed Google/Meta Ads from $9.99/mo | Longstake',
  description:
    'Longstake: Toronto websites and redesigns, mobile/web apps, managed Google and Meta ads, Google review management, and Facebook/Instagram/LinkedIn setup. Monthly plans from $9.99/mo. GTA and worldwide.',
  keywords: HOME_SEARCH_KEYWORDS,
}

export const DEFAULT_PAGE_META = HOME_LANDING_META

export const PAGE_META = {
  home: HOME_LANDING_META,
  pricing: {
    title: 'Pricing | Toronto Websites & Managed Google/Meta Ads from $9.99/mo | Longstake',
    description:
      'Longstake pricing for Toronto: Silver $9.99/mo (website + reviews + social links), Gold $39.99/mo (dynamic site + managed Google & Meta ads + advanced analytics), Platinum $99.99/mo (mobile or web app + full growth support). Free setup on Silver and Gold.',
    keywords:
      'website pricing Toronto, how much does a website cost Toronto, cheap website Toronto, affordable website plans Toronto, managed Google Ads pricing Toronto, managed Meta Ads pricing Toronto, facebook ads management cost Toronto, instagram ads management Toronto, google review management pricing Toronto, monthly website plans Toronto, web design packages Toronto, website and ads bundle Toronto, mobile app development cost Toronto, web app development pricing Toronto, digital marketing packages Toronto, Longstake pricing',
  },
  services: {
    title: 'Services | Web Design, Apps & Managed Ads in Toronto | Longstake',
    description:
      'Longstake services: web design & development, mobile/web apps, managed Google & Meta ads, branding & design, SEO and review management, and conversion optimization for Toronto, the GTA, and worldwide.',
    keywords:
      'web design services Toronto, web development Toronto, digital marketing services Toronto, google ads management Toronto, meta ads agency Toronto, branding design Toronto, SEO services Toronto, conversion optimization Toronto, Longstake services',
  },
  about: {
    title: 'About Us | Longstake — Toronto Growth Studio',
    description:
      'Longstake is a Toronto/Scarborough team of strategists, designers, and developers helping small and mid-sized businesses grow online with websites, apps, managed ads, and reputation management.',
    keywords:
      'about Longstake, Toronto web design team, digital marketing agency Toronto, GTA growth studio, Longstake team',
  },
  contact: {
    title: 'Contact Us | Longstake — Book a Free Consultation',
    description:
      'Get in touch with Longstake. Book a free consultation for web design, apps, managed Google & Meta ads, and review management in Toronto, the GTA, and worldwide. We reply within one business day.',
    keywords:
      'contact Longstake, book a consultation Toronto, web design quote Toronto, hire web designer Toronto, digital marketing contact Toronto',
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
