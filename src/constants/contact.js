/** E.164 without + — used for tel: and wa.me links */
export const PHONE_E164 = '14378780203'

export const PHONE_DISPLAY = '+1 (437) 878-0203'

export const PHONE_TEL = `tel:+${PHONE_E164}`

/** WhatsApp Business chat link — opens Longstake on WhatsApp */
export const WHATSAPP_PREFILL =
  'Hi, I have software requirements please reach out to me. Regards'

export const WHATSAPP_URL = `https://wa.me/message/VYOSEGFHZ6B6K1?text=${encodeURIComponent(WHATSAPP_PREFILL)}`

/** Social profiles — update these to your exact handles if different. */
export const FACEBOOK_URL = 'https://www.facebook.com/longstake'
export const INSTAGRAM_URL = 'https://www.instagram.com/longstake'
export const LINKEDIN_URL = 'https://www.linkedin.com/company/longstake'

/** Where contact form + newsletter submissions are emailed. */
export const CONTACT_EMAIL = 'layla@longstake.ca'

/**
 * Web3Forms (https://web3forms.com) — free, no account; submissions are
 * emailed to the address the key is registered to (layla@longstake.ca).
 * The access key is safe to expose in client code.
 */
export const WEB3FORMS_ACCESS_KEY = '55826ccf-d351-4c53-8c50-37f5127ae4b4'

export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
