import styles from '@/components/gallery/photoMeta/photoMeta.module.scss';
import type { Photo } from '@/types';
import formatDate from '@/utils/formatDate';

type PhotoMetaProps = {
  photo: Photo;
};

export default function PhotoMeta({ photo }: PhotoMetaProps) {
  const hasGear = photo.camera || photo.iso || photo.aperture;

  return (
    <div className={styles.photoMeta}>
      {photo.description && (
        <p className={styles.photoMeta__description}>{photo.description}</p>
      )}
      {photo.gear && (
        <p className={styles.photoMeta__gear}>{photo.gear}</p>
      )}
      {hasGear && (
        <p className={styles.photoMeta__gear}>
          {[photo.camera, photo.iso ? `ISO ${photo.iso}` : null, photo.aperture]
            .filter(Boolean)
            .join(' · ')}
        </p>
      )}
      {photo.filmStock && (
        <p className={styles.photoMeta__filmStock}>{photo.filmStock}</p>
      )}
      {photo.dateTaken && (
        <p className={styles.photoMeta__date}>{formatDate(photo.dateTaken)}</p>
      )}
      {photo.dateScanned && (
        <p className={styles.photoMeta__date}>Scanned: {formatDate(photo.dateScanned)}</p>
      )}
      {photo.tags && photo.tags.length > 0 && (
        <div className={styles.photoMeta__tags}>
          {photo.tags.map(tag => (
            <span key={tag} className={styles.photoMeta__tag}>{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
}