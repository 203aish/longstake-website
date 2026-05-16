import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const logos = [
  { input: 'public/logo.svg', output: 'public/logo.png', width: 400, height: 120 },
  { input: 'public/logo-icon.svg', output: 'public/logo-icon.png', width: 512, height: 512 },
  { input: 'public/logo-horizontal.svg', output: 'public/logo-horizontal.png', width: 360, height: 100 }
];

async function convertSVGtoPNG() {
  for (const logo of logos) {
    try {
      await sharp(logo.input)
        .resize(logo.width, logo.height, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
        .png()
        .toFile(logo.output);
      console.log(`✓ Converted ${logo.input} → ${logo.output}`);
    } catch (error) {
      console.error(`✗ Error converting ${logo.input}:`, error.message);
    }
  }
}

convertSVGtoPNG();
