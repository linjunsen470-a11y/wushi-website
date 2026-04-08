import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { Readable } from 'node:stream';
import path from 'node:path';

const VIDEO_DIR = path.join(process.cwd(), 'assets', 'videos');
const ALLOWED_FILES = new Set([
  'lion-dance-bank-opening-red-carpet.mp4',
  'lion-dance-banquet-fire-stage-closeup.mp4',
  'lion-dance-haier-launch-jong-stage.mp4',
  'lion-dance-museum-opening-jong-stage.mp4',
  'led-lion-dance-night-red-blue.mp4',
  'lion-dance-wedding-banquet-jong-stage.mp4',
]);

function streamFromFile(filePath: string, start: number, end: number) {
  const nodeStream = createReadStream(filePath, { start, end });
  return Readable.toWeb(nodeStream) as ReadableStream;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const file = searchParams.get('file');

  if (!file || !ALLOWED_FILES.has(file)) {
    return new Response('Video not found', { status: 404 });
  }

  const filePath = path.join(VIDEO_DIR, file);
  const fileStats = await stat(filePath);
  const fileSize = fileStats.size;
  const range = request.headers.get('range');

  if (!range) {
    return new Response(streamFromFile(filePath, 0, fileSize - 1), {
      status: 200,
      headers: {
        'Content-Type': 'video/mp4',
        'Content-Length': fileSize.toString(),
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  }

  const [startValue, endValue] = range.replace('bytes=', '').split('-');
  const start = Number.parseInt(startValue, 10);
  const end = endValue ? Number.parseInt(endValue, 10) : fileSize - 1;
  const chunkSize = end - start + 1;

  return new Response(streamFromFile(filePath, start, end), {
    status: 206,
    headers: {
      'Content-Type': 'video/mp4',
      'Content-Length': chunkSize.toString(),
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}

