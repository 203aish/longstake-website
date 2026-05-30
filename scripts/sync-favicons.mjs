/**
 * Copy favicon assets from /assets (source of truth) into /public for deployment.
 * Run after updating files in assets/: npm run sync:favicons
 */
import pngToIco from 'png-to-ico'
import { copyFileSync, mkdirSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const assets = join(root, 'assets')
const pub = join(root, 'public')
const iconsDir = join(pub, 'icons')

mkdirSync(iconsDir, { recursive: true })

const copies = [
  ['favicon.svg', 'favicon.svg'],
  ['favicon-dark.svg', 'favicon-dark.svg'],
  ['favicon-16.png', 'favicon-16x16.png'],
  ['favicon-32.png', 'favicon-32x32.png'],
  ['favicon-48.png', 'favicon-48x48.png'],
  ['apple-touch-icon.png', 'apple-touch-icon.png'],
  ['icon-192.png', 'icons/icon-192.png'],
  ['icon-512.png', 'icons/icon-512.png'],
  ['maskable-512.png', 'icons/maskable-512.png'],
  ['site.webmanifest', 'site.webmanifest'],
  ['app-icon-blue.svg', 'logo.svg'],
]

for (const [from, to] of copies) {
  const src = join(assets, from)
  const dest = join(pub, to)
  copyFileSync(src, dest)
  console.log('Copied', from, '→', to)
}

const icoPath = join(pub, 'favicon.ico')
const icoBuffer = await pngToIco([
  join(pub, 'favicon-16x16.png'),
  join(pub, 'favicon-32x32.png'),
  join(pub, 'favicon-48x48.png'),
])
writeFileSync(icoPath, icoBuffer)
console.log('Wrote favicon.ico')
