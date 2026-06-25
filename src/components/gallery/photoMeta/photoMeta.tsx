import styles from '@/components/gallery/photoMeta/photoMeta.module.scss';
import type { Photo } from '@/types/photo';

type PhotoMetaProps = {
  photo: Photo;
};

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

export default function PhotoMeta({ photo }: PhotoMetaProps) {
  const hasGear = photo.camera || photo.iso || photo.aperture;
  
  console.log('camera:', photo.camera, 'iso:', photo.iso, 'aperture:', photo.aperture);

  return (
    <div className={styles.photoMeta}>
      {hasGear && (
        <p className={styles.photoMeta__gear}>
          {[photo.camera, photo.iso ? `ISO ${photo.iso}` : null, photo.aperture]
            .filter(Boolean)
            .join(' · ')}
        </p>
      )}
      {photo.dateTaken && (
        <p className={styles.photoMeta__date}>{formatDate(photo.dateTaken)}</p>
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