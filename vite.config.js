import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Hostinger (LiteSpeed) often serves real 404s for /careers etc. even when .htaccess exists.
 * Copying the built index.html into one folder per BrowserRouter path gives a physical file so
 * /careers (→ /careers/) resolves without relying on mod_rewrite.
 * Keep in sync with src/App.jsx routes (except "/" and hash-only targets).
 */
const SPA_ROUTE_SEGMENTS = [
  'pricing',
  'careers',
  'privacy-policy',
  'company-policy',
  'contact',
]

function spaStaticHtmlCopies() {
  return {
    name: 'spa-static-html-copies',
    closeBundle() {
      const dist = join(process.cwd(), 'dist')
      const indexHtml = join(dist, 'index.html')
      for (const segment of SPA_ROUTE_SEGMENTS) {
        const dir = join(dist, segment)
        mkdirSync(dir, { recursive: true })
        copyFileSync(indexHtml, join(dir, 'index.html'))
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), spaStaticHtmlCopies()],
})
