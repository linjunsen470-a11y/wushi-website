import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, '..', 'assets');
const MAX_WIDTH = 1920;
const QUALITY = 80;

async function getFiles(dir) {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(dirents.map((dirent) => {
    const res = path.resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  }));
  return Array.prototype.concat(...files);
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
    return;
  }

  // Skip videos if they somehow got in the list
  if (filePath.includes('videos')) return;

  try {
    const inputBuffer = await fs.readFile(filePath);
    const image = sharp(inputBuffer);
    const metadata = await image.metadata();

    let pipeline = image;

    // Resize if larger than MAX_WIDTH
    if (metadata.width > MAX_WIDTH || metadata.height > MAX_WIDTH) {
      pipeline = pipeline.resize({
        width: metadata.width > metadata.height ? MAX_WIDTH : undefined,
        height: metadata.height >= metadata.width ? MAX_WIDTH : undefined,
        fit: 'inside',
        withoutEnlargement: true
      });
    }

    // Compress based on format
    if (ext === '.png') {
        pipeline = pipeline.png({ quality: QUALITY, compressionLevel: 9, palette: true });
    } else if (ext === '.webp') {
        pipeline = pipeline.webp({ quality: QUALITY });
    } else {
        pipeline = pipeline.jpeg({ quality: QUALITY, progressive: true, mozjpeg: true });
    }

    const outputBuffer = await pipeline.toBuffer();
    
    const oldSize = inputBuffer.length;
    await fs.writeFile(filePath, outputBuffer);
    const newSize = outputBuffer.length;

    console.log(`Optimized: ${path.relative(ASSETS_DIR, filePath)}`);
    console.log(`  Size: ${(oldSize / 1024 / 1024).toFixed(2)}MB -> ${(newSize / 1024 / 1024).toFixed(2)}MB (${((1 - newSize / oldSize) * 100).toFixed(1)}% reduction)`);
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message);
  }
}

async function main() {
  console.log('Starting image optimization...');
  const files = await getFiles(ASSETS_DIR);
  for (const file of files) {
    await optimizeImage(file);
  }
  console.log('Optimization complete!');
}

main().catch(console.error);
