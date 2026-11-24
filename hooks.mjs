// hooks.mjs - يعمل تلقائياً أثناء بناء الـAPK (من package.json):
//  before: ينسخ الخطوط الجميلة داخل التطبيق (بدون إنترنت عند التشغيل)
//  after : يولّد أيقونة التطبيق من logo.png
// كل خطوة محمية: إذا فشلت يكمل البناء بلا خطوط/أيقونة مخصصة ولا ينهار.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const FONT_PKGS = [
  ['cairo', 'Cairo'], ['tajawal', 'Tajawal'], ['almarai', 'Almarai'], ['ibm-plex-sans-arabic', 'IBM Plex Sans Arabic'],
  ['amiri', 'Amiri'], ['reem-kufi', 'Reem Kufi'], ['lalezar', 'Lalezar'], ['aref-ruqaa', 'Aref Ruqaa'],
  ['playfair-display', 'Playfair Display'], ['montserrat', 'Montserrat'], ['dancing-script', 'Dancing Script'], ['noto-sans-arabic', 'Noto Sans Arabic'],
];
const WEIGHTS = [400, 600, 700, 800];
const RANGES = {
  arabic: 'U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC',
  latin: 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD',
};

export function buildFonts({ root = '.', www = 'www' } = {}) {
  const outDir = path.join(www, 'fonts');
  fs.mkdirSync(outDir, { recursive: true });
  let css = '/* generated at build */\n';
  let count = 0;
  for (const [pkg, family] of FONT_PKGS) {
    const dir = path.join(root, 'node_modules', '@fontsource', pkg, 'files');
    if (!fs.existsSync(dir)) { console.log(`[fonts] skip ${pkg} (not installed)`); continue; }
    for (const file of fs.readdirSync(dir)) {
      const m = /^(.+)-(arabic|latin)-(\d+)-normal\.woff2$/.exec(file);
      if (!m || !WEIGHTS.includes(Number(m[3]))) continue;
      fs.copyFileSync(path.join(dir, file), path.join(outDir, file));
      css += `@font-face{font-family:"${family}";font-style:normal;font-weight:${m[3]};font-display:swap;src:url("${file}") format("woff2");unicode-range:${RANGES[m[2]]};}\n`;
      count++;
    }
  }
  fs.writeFileSync(path.join(outDir, 'fonts.css'), css);
  console.log(`[fonts] ${count} files`);
  return count;
}

const DENSITIES = { mdpi: [48, 108], hdpi: [72, 162], xhdpi: [96, 216], xxhdpi: [144, 324], xxxhdpi: [192, 432] };
export function buildIcons({ logo = 'logo.png', res = 'android/app/src/main/res' } = {}) {
  if (!fs.existsSync(logo) || !fs.existsSync(res)) { console.log('[icons] skip'); return 0; }
  let n = 0;
  for (const [d, [legacy, adaptive]] of Object.entries(DENSITIES)) {
    const dir = path.join(res, `mipmap-${d}`);
    fs.mkdirSync(dir, { recursive: true });
    const run = (args) => execFileSync('convert', args);
    run([logo, '-resize', `${legacy}x${legacy}`, path.join(dir, 'ic_launcher.png')]);
    run([logo, '-resize', `${legacy}x${legacy}`, path.join(dir, 'ic_launcher_round.png')]);
    const inner = Math.round(adaptive * 0.62);
    run([logo, '-resize', `${inner}x${inner}`, '-background', 'none', '-gravity', 'center', '-extent', `${adaptive}x${adaptive}`, path.join(dir, 'ic_launcher_foreground.png')]);
    n += 3;
  }
  const values = path.join(res, 'values');
  fs.mkdirSync(values, { recursive: true });
  fs.writeFileSync(path.join(values, 'ic_launcher_background.xml'), '<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="ic_launcher_background">#FFFFFF</color>\n</resources>\n');
  console.log(`[icons] ${n} files`);
  return n;
}

const step = process.argv[2];
if (step === 'before' || step === 'after') {
  try { if (step === 'before') buildFonts(); else buildIcons(); } catch (e) { console.log(`[${step}] skipped: ${e.message}`); }
}
