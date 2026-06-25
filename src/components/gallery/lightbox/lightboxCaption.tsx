import styles from '@/components/gallery/lightbox/lightbox.module.scss';

type LightboxCaptionProps = {
  title?: string;
  location?: string;
  camera?: string;
  iso?: number;
  aperture?: string;
  dateTaken?: string;
  tags?: string[];
  counter?: string;
};

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

export default function LightboxCaption({
  title,
  location,
  camera,
  iso,
  aperture,
  dateTaken,
  tags,
  counter,
}: LightboxCaptionProps) {
  return (
    <div className={styles.lightbox__caption}>
      {location && (
        <p className={styles.lightbox__location}>{location}</p>
      )}
      {title && (
        <p className={styles.lightbox__title}>{title}</p>
      )}
      {(camera || iso || aperture) && (
        <p className={styles.lightbox__gear}>
          {[camera, iso ? `ISO ${iso}` : null, aperture].filter(Boolean).join(' · ')}
        </p>
      )}
      {dateTaken && (
        <p className={styles.lightbox__date}>{formatDate(dateTaken)}</p>
      )}
      {tags && tags.length > 0 && (
        <div className={styles.lightbox__tags}>
          {tags.map(tag => (
            <span key={tag} className={styles.lightbox__tag}>{tag}</span>
          ))}
        </div>
      )}
      {counter && (
        <p className={styles.lightbox__counter}>{counter}</p>
      )}
    </div>
  );
}