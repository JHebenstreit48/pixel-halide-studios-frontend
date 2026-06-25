import styles from "@/components/gallery/photoCard/photoCard.module.scss";
import type { Photo } from "@/types";

type PhotoCardMetaProps = {
  photo: Photo;
};

export default function PhotoCardMeta({ photo }: PhotoCardMetaProps) {
  return (
    <div className={styles.photoCard__meta}>
      <p className={styles.photoCard__title}>{photo.title}</p>
      {photo.location && (
        <p className={styles.photoCard__location}>{photo.location}</p>
      )}
      {photo.camera && (
        <p className={styles.photoCard__gear}>
          {photo.camera}
          {photo.iso ? ` · ISO ${photo.iso}` : ""}
          {photo.aperture ? ` · ${photo.aperture}` : ""}
        </p>
      )}
    </div>
  );
}