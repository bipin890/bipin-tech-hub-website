const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Ensure directories
const publicDir = path.join(__dirname, '..', 'public');
const imagesDir = path.join(publicDir, 'images');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });

/**
 * Minimal pure Node PNG generator using uncompressed/zlib compressed raw RGBA data
 */
function createPng(width, height, getPixelRgba) {
  // RGBA buffer: 1 filter byte per row + 4 bytes per pixel
  const rowBytes = 1 + width * 4;
  const rawData = Buffer.alloc(rowBytes * height);

  for (let y = 0; y < height; y++) {
    const rowStart = y * rowBytes;
    rawData[rowStart] = 0; // Filter type 0 (None)
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = getPixelRgba(x, y, width, height);
      const pixelStart = rowStart + 1 + x * 4;
      rawData[pixelStart] = r;
      rawData[pixelStart + 1] = g;
      rawData[pixelStart + 2] = b;
      rawData[pixelStart + 3] = a;
    }
  }

  const compressedData = zlib.deflateSync(rawData);

  // PNG Header
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // bit depth
  ihdrData[9] = 6; // color type RGBA
  ihdrData[10] = 0; // compression
  ihdrData[11] = 0; // filter
  ihdrData[12] = 0; // interlace
  const ihdrChunk = createChunk('IHDR', ihdrData);

  // IDAT chunk
  const idatChunk = createChunk('IDAT', compressedData);

  // IEND chunk
  const iendChunk = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function crc32(buf) {
  let table = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) c = 0xedb88320 ^ (c >>> 1);
      else c = c >>> 1;
    }
    table[n] = c;
  }
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = table[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function createChunk(type, data) {
  const len = data.length;
  const chunk = Buffer.alloc(12 + len);
  chunk.writeUInt32BE(len, 0);
  chunk.write(type, 4, 4, 'ascii');
  data.copy(chunk, 8);
  const crcInput = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = crc32(crcInput);
  chunk.writeUInt32BE(crc, 8 + len);
  return chunk;
}

// 1. Create Minimal geometric 'B' Favicon (Blue and White)
function bLogoPixel(x, y, w, h) {
  const normX = x / w;
  const normY = y / h;
  const cx = 0.5, cy = 0.5;
  const dist = Math.sqrt((normX - cx) ** 2 + (normY - cy) ** 2);

  // Rounded squircle background
  const rx = Math.abs(normX - 0.5);
  const ry = Math.abs(normY - 0.5);
  const inCard = rx < 0.44 && ry < 0.44 && (rx < 0.35 || ry < 0.35 || (rx - 0.35)**2 + (ry - 0.35)**2 < 0.09**2);

  if (!inCard) {
    return [0, 0, 0, 0]; // Transparent outside
  }

  // Deep royal blue background: #0f4c81 (15, 76, 129) to #1d4ed8 (29, 78, 216)
  const bgR = Math.round(15 + normY * 14);
  const bgG = Math.round(76 + normY * 10);
  const bgB = Math.round(129 + normY * 87);

  // Geometric 'B' shape
  // Vertical stem: x in [0.24, 0.38], y in [0.22, 0.78]
  const isStem = normX >= 0.24 && normX <= 0.38 && normY >= 0.22 && normY <= 0.78;

  // Top Loop of B
  const topLoopOuter = normX >= 0.32 && normX <= 0.70 && normY >= 0.22 && normY <= 0.51;
  const topLoopInner = normX >= 0.42 && normX <= 0.58 && normY >= 0.31 && normY <= 0.42;
  const isTopLoop = topLoopOuter && !topLoopInner;

  // Bottom Loop of B (slightly wider)
  const botLoopOuter = normX >= 0.32 && normX <= 0.76 && normY >= 0.48 && normY <= 0.78;
  const botLoopInner = normX >= 0.42 && normX <= 0.62 && normY >= 0.57 && normY <= 0.69;
  const isBotLoop = botLoopOuter && !botLoopInner;

  if (isStem || isTopLoop || isBotLoop) {
    return [255, 255, 255, 255]; // Crisp white 'B'
  }

  // Accent cyan dot / tech accent at bottom right
  const isAccentDot = Math.sqrt((normX - 0.8)**2 + (normY - 0.24)**2) < 0.05;
  if (isAccentDot) {
    return [56, 189, 248, 255]; // Sky blue #38bdf8
  }

  return [bgR, bgG, bgB, 255];
}

console.log("Generating favicons and icons...");

const iconPng = createPng(192, 192, bLogoPixel);
fs.writeFileSync(path.join(publicDir, 'icon.png'), iconPng);
fs.writeFileSync(path.join(publicDir, 'apple-icon.png'), iconPng);
fs.writeFileSync(path.join(publicDir, 'favicon.png'), createPng(48, 48, bLogoPixel));
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), createPng(32, 32, bLogoPixel));

// 2. Create Placeholder QR codes for eSewa and ConnectIPS
function qrPixel(x, y, w, h, brand) {
  // Border padding
  const pad = 0.08;
  const normX = x / w;
  const normY = y / h;

  if (normX < pad || normX > 1 - pad || normY < pad || normY > 1 - pad) {
    return [255, 255, 255, 255];
  }

  // QR grid representation
  const gridCount = 25;
  const gx = Math.floor((normX - pad) / (1 - 2 * pad) * gridCount);
  const gy = Math.floor((normY - pad) / (1 - 2 * pad) * gridCount);

  // Position detection patterns in 3 corners
  const isCornerTL = gx < 7 && gy < 7;
  const isCornerTR = gx >= gridCount - 7 && gy < 7;
  const isCornerBL = gx < 7 && gy >= gridCount - 7;

  if (isCornerTL || isCornerTR || isCornerBL) {
    const lx = isCornerTL ? gx : isCornerTR ? gx - (gridCount - 7) : gx;
    const ly = isCornerTL ? gy : isCornerTR ? gy : gy - (gridCount - 7);
    const isRing = (lx === 0 || lx === 6 || ly === 0 || ly === 6);
    const isCenter = (lx >= 2 && lx <= 4 && ly >= 2 && ly <= 4);
    if (isRing || isCenter) {
      return brand === 'esewa' ? [96, 187, 70, 255] : [29, 78, 216, 255]; // eSewa green (#60bb46) or ConnectIPS blue
    }
    return [255, 255, 255, 255];
  }

  // Center logo badge
  if (gx >= 9 && gx <= 15 && gy >= 9 && gy <= 15) {
    if (brand === 'esewa') {
      return [96, 187, 70, 255]; // green badge
    } else {
      return [29, 78, 216, 255]; // blue badge
    }
  }

  // Deterministic pseudo-random pattern based on coordinates
  const val = (Math.sin(gx * 12.9898 + gy * 78.233) * 43758.5453) % 1;
  if (Math.abs(val) > 0.45) {
    return [24, 24, 27, 255]; // Dark slate QR module
  }
  return [255, 255, 255, 255];
}

console.log("Generating eSewa and ConnectIPS QR placeholder assets...");
const esewaQr = createPng(300, 300, (x, y, w, h) => qrPixel(x, y, w, h, 'esewa'));
fs.writeFileSync(path.join(imagesDir, 'esewa-qr.png'), esewaQr);

const connectipsQr = createPng(300, 300, (x, y, w, h) => qrPixel(x, y, w, h, 'connectips'));
fs.writeFileSync(path.join(imagesDir, 'connectips-qr.png'), connectipsQr);

console.log("Assets successfully generated!");
