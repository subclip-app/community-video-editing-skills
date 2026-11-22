import { readFile, stat } from 'node:fs/promises';
import { extname } from 'node:path';
export async function checkCover(path) {
  if ((await stat(path)).size >= 300_000) throw Error('Cover must be under 300 KB');
  const b = await readFile(path); let w, h;
  const ext = extname(path).toLowerCase();
  if (ext === '.svg') {
    const s = b.toString('utf8');
    if (/<(?:script|foreignObject)\b|\bon\w+\s*=|(?:href\s*=\s*["']\s*(?:https?:|data:|javascript:))/i.test(s)) throw Error('SVG cover must be static and self-contained');
    const root = /<svg\b([^>]*)>/i.exec(s)?.[1];
    const view = /\bviewBox\s*=\s*["']\s*[-\d.]+[ ,]+[-\d.]+[ ,]+([\d.]+)[ ,]+([\d.]+)\s*["']/i.exec(root ?? '');
    const width = /\bwidth\s*=\s*["']([\d.]+)(?:px)?["']/i.exec(root ?? '');
    const height = /\bheight\s*=\s*["']([\d.]+)(?:px)?["']/i.exec(root ?? '');
    if (width && height) { w = +width[1]; h = +height[1]; }
    else if (view) { w = +view[1]; h = +view[2]; }
    if (view && Math.abs(+view[1] / +view[2] - 16 / 9) > 0.002) throw Error('SVG viewBox must be 16:9');
  } else if (ext === '.png' && b.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10])) && b.toString('ascii',12,16) === 'IHDR') {
    w = b.readUInt32BE(16); h = b.readUInt32BE(20);
  } else if (['.jpg', '.jpeg'].includes(ext) && b.readUInt16BE(0) === 0xffd8) {
    let p = 2;
    while (p + 4 <= b.length) {
      if (b[p++] !== 255) throw Error('Invalid JPEG marker');
      while (b[p] === 255) p++;
      const marker = b[p++]; if (marker === 0xda || marker === 0xd9) break;
      const length = b.readUInt16BE(p); if (length < 2 || p + length > b.length) break;
      if ([0xc0,0xc1,0xc2,0xc3,0xc5,0xc6,0xc7,0xc9,0xca,0xcb,0xcd,0xce,0xcf].includes(marker)) { h = b.readUInt16BE(p + 3); w = b.readUInt16BE(p + 5); break; }
      p += length;
    }
  } else if (ext === '.webp' && b.toString('ascii',0,4) === 'RIFF' && b.toString('ascii',8,12) === 'WEBP') {
    const kind = b.toString('ascii',12,16);
    if (kind === 'VP8X') { w = 1 + b.readUIntLE(24,3); h = 1 + b.readUIntLE(27,3); }
    if (kind === 'VP8 ' && b.subarray(23,26).equals(Buffer.from([157,1,42]))) { w = b.readUInt16LE(26) & 0x3fff; h = b.readUInt16LE(28) & 0x3fff; }
    if (kind === 'VP8L' && b[20] === 47) { const bits = b.readUInt32LE(21); w = (bits & 0x3fff) + 1; h = ((bits >>> 14) & 0x3fff) + 1; }
  }
  if (!(w > 0 && h > 0) || Math.abs(w / h - 16 / 9) > 0.002) throw Error('Cover must be a supported 16:9 SVG, PNG, JPEG or WebP image');
}
export async function checkPreview(path) {
  if (extname(path).toLowerCase() !== '.mp4' || (await stat(path)).size >= 2_000_000) throw Error('Preview must be MP4 under 2 MB');
  const b = await readFile(path); let duration, video = false, audio = false, ftyp = false;
  function boxes(start, end) {
    for (let p = start; p < end;) {
      if (p + 8 > end) throw Error('Invalid MP4 box');
      let size = b.readUInt32BE(p), header = 8; const type = b.toString('ascii',p+4,p+8);
      if (size === 1) { if (p + 16 > end) throw Error('Invalid MP4 box'); size = Number(b.readBigUInt64BE(p+8)); header = 16; }
      if (size === 0) size = end - p;
      if (size < header || p + size > end) throw Error('Invalid MP4 box length');
      const q = p + header;
      if (type === 'ftyp') ftyp = true;
      if (type === 'mvhd') {
        const version = b[q]; if (![0,1].includes(version) || size < header + (version ? 32 : 20)) throw Error('Invalid movie header');
        const scale = b.readUInt32BE(q + (version ? 20 : 12));
        duration = (version ? Number(b.readBigUInt64BE(q+24)) : b.readUInt32BE(q+16)) / scale;
      }
      if (type === 'hdlr') { const handler = b.toString('ascii', q+8, q+12); video ||= handler === 'vide'; audio ||= handler === 'soun'; }
      if (['moov','trak','mdia'].includes(type)) boxes(q, p + size);
      p += size;
    }
  }
  boxes(0, b.length);
  if (!ftyp || !video || !Number.isFinite(duration) || duration <= 0 || duration > 25 || audio) throw Error('Preview must be a silent MP4 video no longer than 25 seconds');
}
