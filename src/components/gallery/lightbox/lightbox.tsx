'use client';

import { useEffect } from 'react';
import LightboxControls from '@/components/gallery/lightbox/lightboxControls';
import LightboxCaption from '@/components/gallery/lightbox/lightboxCaption';
import styles from '@/components/gallery/lightbox/lightbox.module.scss';

type LightboxProps = {
  imageUrl: string;
  title?: string;
  location?: string;
  camera?: string;
  iso?: number;
  aperture?: string;
  dateTaken?: string;
  tags?: string[];
  counter?: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function Lightbox({
  imageUrl,
  title,
  location,
  camera,
  iso,
  aperture,
  dateTaken,
  tags,
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

        <LightboxCaption
          title={title}
          location={location}
          camera={camera}
          iso={iso}
          aperture={aperture}
          dateTaken={dateTaken}
          tags={tags}
          counter={counter}
        />
      </div>
    </div>
  );
}