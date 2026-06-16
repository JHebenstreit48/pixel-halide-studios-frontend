'use client';

import styles from '@/components/gallery/lightbox/lightbox.module.scss';

type LightboxControlsProps = {
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function LightboxControls({
  onPrev,
  onNext,
}: LightboxControlsProps) {
  return (
    <>
      <button
        className={`${styles.lightbox__btn} ${styles['lightbox__btn--prev']}`}
        onClick={onPrev}
        aria-label="Previous photo"
      >
        &#8592;
      </button>
      <button
        className={`${styles.lightbox__btn} ${styles['lightbox__btn--next']}`}
        onClick={onNext}
        aria-label="Next photo"
      >
        &#8594;
      </button>
    </>
  );
}