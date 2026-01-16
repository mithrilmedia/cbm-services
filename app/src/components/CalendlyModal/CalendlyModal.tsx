import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { IoClose } from 'react-icons/io5';
import styles from './CalendlyModal.module.css';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close">
          <IoClose />
        </button>
        <div className={styles.header}>
          <h2 className={styles.title}>Schedule a Call</h2>
          <p className={styles.subtitle}>Choose a time that works for you</p>
        </div>
        <div className={styles.iframeWrapper}>
          <iframe
            src="https://calendly.com/calibbq/25min?embed_domain=betheshow.media&embed_type=Inline&hide_event_type_details=1"
            title="Schedule a call with Cali BBQ Media"
            className={styles.iframe}
            frameBorder="0"
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
