'use client';

import { useEffect } from 'react';

export default function VideoAutoplay() {
  useEffect(() => {
    const videos = document.querySelectorAll('video');
    videos.forEach((video) => {
      video.muted = true;
      video.play().catch(() => {});
    });
  }, []);

  return null;
}
