import { useState, useEffect } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';
import styles from './SocialVideoEmbed.module.css';

interface SocialVideoEmbedProps {
  src: string;
  title: string;
  poster: string;
}

export function SocialVideoEmbed({ src, title, poster }: SocialVideoEmbedProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    
    if (isModalOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [isModalOpen]);

  return (
    <>
      <button 
        className={styles.thumbnailButton}
        onClick={openModal}
        aria-label={`Play video: ${title}`}
      >
        <img 
          src={poster} 
          alt={title} 
          className={styles.thumbnail}
          loading="lazy"
        />
        <div className={styles.playOverlay}>
          <div className={styles.playButton}>
            <FaPlay className={styles.playIcon} />
          </div>
        </div>
      </button>

      {isModalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <button 
            className={styles.closeButton}
            onClick={closeModal}
            aria-label="Close video"
          >
            <FaTimes />
          </button>
          <div 
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              className={styles.modalVideo}
              src={src}
              autoPlay
              controls
              playsInline
            />
          </div>
        </div>
      )}
    </>
  );
}
