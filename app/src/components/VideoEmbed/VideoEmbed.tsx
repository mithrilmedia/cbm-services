import { useState } from 'react';
import styles from './VideoEmbed.module.css';

interface VideoEmbedProps {
  videoId: string;
  title?: string;
}

export function VideoEmbed({ videoId, title = 'Video' }: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className={styles.videoWrapper}>
      {!isPlaying ? (
        <button 
          className={styles.thumbnail}
          onClick={handlePlay}
          aria-label={`Play ${title}`}
        >
          <img 
            src={thumbnailUrl} 
            alt={title}
            loading="lazy"
            className={styles.thumbnailImage}
          />
          <div className={styles.playButton}>
            <svg 
              width="68" 
              height="48" 
              viewBox="0 0 68 48" 
              className={styles.playIcon}
            >
              <path 
                d="M66.52 7.74c-.78-2.93-3.07-5.24-5.99-6.03C55.24.5 34 .5 34 .5s-21.24 0-26.53 1.21c-2.92.79-5.21 3.1-5.99 6.03C.27 13.05.27 24 .27 24s0 10.95 1.21 16.26c.78 2.93 3.07 5.24 5.99 6.03C12.76 47.5 34 47.5 34 47.5s21.24 0 26.53-1.21c2.92-.79 5.21-3.1 5.99-6.03C67.73 34.95 67.73 24 67.73 24s0-10.95-1.21-16.26z"
                fill="#000"
              />
              <path d="M27 34l18-10-18-10v20z" fill="#fff"/>
            </svg>
          </div>
        </button>
      ) : (
        <iframe
          src={embedUrl}
          title={title}
          className={styles.iframe}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}
