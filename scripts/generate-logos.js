const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '../src/assets/logo.svg');
const svg = fs.readFileSync(svgPath);

// Generate 192x192 PNG
sharp(svg)
  .resize(192, 192)
  .png()
  .toFile(path.join(__dirname, '../public/logo192.png'));

// Generate 512x512 PNG
sharp(svg)
  .resize(512, 512)
  .png()
  .toFile(path.join(__dirname, '../public/logo512.png'));
