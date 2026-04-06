import { readFileSync } from 'fs';
import { join } from 'path';
import VideoAutoplay from './video-autoplay';

function getFramerHTML() {
  const filePath = join(process.cwd(), 'app', 'framer-body.html');
  return readFileSync(filePath, 'utf-8');
}

export default function HomePage() {
  const html = getFramerHTML();
  return (
    <>
      <VideoAutoplay />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
