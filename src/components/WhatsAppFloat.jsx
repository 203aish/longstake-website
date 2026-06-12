import React from 'react'
import { WhatsAppIcon } from './WhatsAppIcon'
import { WHATSAPP_URL } from '../constants/contact'
import './WhatsAppFloat.css'

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      className="whatsapp-float"
      aria-label="Chat with Longstake on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="whatsapp-float__pulse" aria-hidden />
      <WhatsAppIcon className="whatsapp-float__icon" />
    </a>
  )
}
