'use client';

import { useEffect } from 'react';
import LightboxControls from '@/components/gallery/lightbox/lightboxControls';
import styles from '@/components/gallery/lightbox/lightbox.module.scss';

type LightboxProps = {
  imageUrl: string;
  title?: string;
  location?: string;
  counter?: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function Lightbox({
  imageUrl,
  title,
  location,
  counter,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onNext, onPrev, onClose]);

  return (
    <div className={styles.lightbox} onClick={onClose}>
      <div
        className={styles.lightbox__content}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.lightbox__close}
          onClick={onClose}
          aria-label="Close lightbox"
        >
          &#10005;
        </button>

        <LightboxControls
          onClose={onClose}
          onPrev={onPrev}
          onNext={onNext}
        />

        <div className={styles.lightbox__imageWrap}>
          <img
            src={imageUrl}
            alt={title ?? 'Photo'}
            className={styles.lightbox__image}
          />
        </div>

        <div className={styles.lightbox__caption}>
          {location && (
            <p className={styles.lightbox__location}>{location}</p>
          )}
          {title && (
            <p className={styles.lightbox__title}>{title}</p>
          )}
          {counter && (
            <p className={styles.lightbox__counter}>{counter}</p>
          )}
        </div>
      </div>
    </div>
  );
}