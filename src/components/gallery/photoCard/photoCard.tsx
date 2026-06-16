'use client';

import PhotoCardMeta from '@/components/gallery/photoCard/photoCardMeta';
import styles from '@/components/gallery/photoCard/photoCard.module.scss';
import type { Photo } from '@/types';

type PhotoCardProps = {
  photo: Photo;
  onClick: (photo: Photo) => void;
};

export default function PhotoCard({ photo, onClick }: PhotoCardProps) {
  return (
    <div
      className={styles.photoCard}
      onClick={() => onClick(photo)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(photo)}
    >
      <div className={styles.photoCard__imageWrapper}>
        <img
          src={photo.storageUrl}
          alt={photo.title}
          className={styles.photoCard__image}
          loading="lazy"
        />
        <div className={styles.photoCard__overlay}>
          <PhotoCardMeta photo={photo} />
        </div>
      </div>
    </div>
  );
}