// Makes the 4 LenoTech logo files from your big logo image (png, jpg or jpeg).
// Usage (inside the lenotech-frontend folder):
//   1) put your logo image here and name it logo-source.jpeg  (logo-source.jpg / .png also work)
//   2) npm install sharp --no-save
//   3) node make-logo.mjs
//   If your file has another name:  node make-logo.mjs "my file name.jpeg"
import sharp from 'sharp';
import fs from 'node:fs';

const candidates = ['logo-source.jpeg', 'logo-source.jpg', 'logo-source.png', 'logo-source.JPG', 'logo-source.JPEG', 'logo-source.PNG'];
const input = process.argv[2] || candidates.find((f) => fs.existsSync(f));
const out = 'public/assets';

if (!input || !fs.existsSync(input)) {
    console.error('Cannot find your logo image. Put it in this folder and name it logo-source.jpeg');
    console.error('Files in this folder:', fs.readdirSync('.').join(', '));
    process.exit(1);
}
console.log('Using:', input);
fs.mkdirSync(out, { recursive: true });

// Rounded-corner logo at a given size (corners become transparent).
const rounded = (size) => {
    const r = Math.round(size * 0.235);
    const mask = Buffer.from(`<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${r}" ry="${r}"/></svg>`);
    return sharp(input).resize(size, size).ensureAlpha().composite([{ input: mask, blend: 'dest-in' }]);
};

await rounded(192).webp({ quality: 92 }).toFile(`${out}/logo.webp`);
await rounded(192).png().toFile(`${out}/icon-192.png`);
await rounded(32).png().toFile(`${out}/favicon-32.png`);
await sharp(input).resize(180, 180).removeAlpha().png().toFile(`${out}/apple-touch-icon.png`);

console.log('Done. Created in public/assets: logo.webp, icon-192.png, favicon-32.png, apple-touch-icon.png');