import sharp from 'sharp'
import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')

/** 1200×630 Open Graph / Twitter card (raster for reliable previews). */
const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2563eb"/>
      <stop offset="100%" style="stop-color:#1d4ed8"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="1200" height="8" fill="#ffffff" opacity="0.2"/>
  <text x="72" y="200" fill="#ffffff" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="76" font-weight="700">Longstake</text>
  <text x="72" y="278" fill="#e0e7ff" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="34" font-weight="600">Hardware prototypes · Strategic investors · Corporate partners</text>
  <text x="72" y="338" fill="#bfdbfe" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="26" font-weight="500">Curated introductions for partnership, licensing, and acquisition</text>
  <text x="72" y="520" fill="#93c5fd" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="22" font-weight="500">longstake.ca</text>
</svg>`

const pngPath = join(publicDir, 'og-image.png')
const webpPath = join(publicDir, 'og-image.webp')

const input = Buffer.from(svg)

await sharp(input).resize(1200, 630, { fit: 'fill' }).png({ compressionLevel: 9 }).toFile(pngPath)
await sharp(input).resize(1200, 630, { fit: 'fill' }).webp({ quality: 90 }).toFile(webpPath)

console.log('Wrote', pngPath)
console.log('Wrote', webpPath)
