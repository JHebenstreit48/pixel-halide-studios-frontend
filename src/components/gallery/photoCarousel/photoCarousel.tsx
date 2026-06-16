"use client";

import { useState } from "react";
import Lightbox from "@/components/gallery/lightbox/lightbox";
import styles from "@/components/gallery/photoCarousel/photoCarousel.module.scss";
import type { Photo, PhotoCategory } from "@/types";

type PhotoCarouselProps = {
  category?: PhotoCategory;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

const CATEGORY_META: Record<
  string,
  { eyebrow: string; title: string; subtitle: string }
> = {
  landscape: {
    eyebrow: "Portfolio",
    title: "Landscape Collection",
    subtitle:
      "Natural landscapes, wide open spaces, and the beauty of the outdoors.",
  },
  portraits: {
    eyebrow: "Portfolio",
    title: "Portrait Sessions",
    subtitle:
      "Candid and studio portrait photography with signed model releases.",
  },
  products: {
    eyebrow: "Portfolio",
    title: "Product Photography",
    subtitle:
      "Clean, professional product photography for brands and businesses.",
  },
  architecture: {
    eyebrow: "Portfolio",
    title: "Architecture",
    subtitle:
      "Buildings, structures, and urban environments captured through the lens.",
  },
  film: {
    eyebrow: "Portfolio",
    title: "Film Photography",
    subtitle:
      "Shot on 35mm and medium format film — scanned from original negatives.",
  },
};

export default function PhotoCarousel({
  category,
  eyebrow,
  title,
  subtitle,
}: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const photos: Photo[] = [];

  const meta = category ? CATEGORY_META[category] : null;
  const displayEyebrow = eyebrow ?? meta?.eyebrow ?? "Portfolio";
  const displayTitle = title ?? meta?.title ?? "The Collection";
  const displaySubtitle = subtitle ?? meta?.subtitle ?? "";

  const next = () => setCurrentIndex((i) => (i + 1) % photos.length);
  const prev = () =>
    setCurrentIndex((i) => (i - 1 + photos.length) % photos.length);
  const goTo = (i: number) => setCurrentIndex(i);

  const openLightbox = () => setLightboxOpen(true);
  const closeLightbox = () => setLightboxOpen(false);

  return (
    <section className={styles.gallery}>
      <div className={styles.gallery__header}>
        <p className={styles.gallery__eyebrow}>{displayEyebrow}</p>
        <h1 className={styles.gallery__title}>{displayTitle}</h1>
        <p className={styles.gallery__subtitle}>{displaySubtitle}</p>
      </div>

      {photos.length === 0 ? (
        <div className={styles.gallery__placeholder}>
          <div className={styles.carousel__main}>
            <button
              className={styles.carousel__btn}
              disabled
              aria-label="Previous photo"
            >
              &#8592;
            </button>

            <div className={styles.carousel__imagePlaceholder}>
              <div className={styles.carousel__placeholderInner}>
                <span className={styles.carousel__placeholderText}>
                  Photos coming soon
                </span>
              </div>
            </div>

            <button
              className={styles.carousel__btn}
              disabled
              aria-label="Next photo"
            >
              &#8594;
            </button>
          </div>

          <div className={styles.carousel__dots}>
            {[0, 1, 2, 3, 4].map((i) => (
              <button
                key={i}
                className={`${styles.carousel__dot} ${i === 0 ? styles.active : ""}`}
                disabled
                aria-label={`Placeholder dot ${i + 1}`}
              />
            ))}
          </div>

          <div className={styles.carousel__thumbs}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className={`${styles.carousel__thumb} ${i === 0 ? styles.active : ""}`}
              >
                <div className={styles.carousel__thumbPlaceholder} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className={styles.carousel__main}>
            <button
              className={styles.carousel__btn}
              onClick={prev}
              aria-label="Previous photo"
            >
              &#8592;
            </button>

            <div className={styles.carousel__imageWrap} onClick={openLightbox}>
              <img
                src={photos[currentIndex].storageUrl}
                alt={photos[currentIndex].title}
                className={styles.carousel__image}
              />
              <div className={styles.carousel__overlay}>
                {photos[currentIndex].location && (
                  <p className={styles.carousel__location}>
                    {photos[currentIndex].location}
                  </p>
                )}
                <p className={styles.carousel__alt}>
                  {photos[currentIndex].title}
                </p>
                <span className={styles.carousel__hint}>Click to enlarge</span>
              </div>
            </div>

            <button
              className={styles.carousel__btn}
              onClick={next}
              aria-label="Next photo"
            >
              &#8594;
            </button>
          </div>

          <div className={styles.carousel__dots}>
            {photos.map((_, i) => (
              <button
                key={i}
                className={`${styles.carousel__dot} ${
                  i === currentIndex ? styles.active : ""
                }`}
                onClick={() => goTo(i)}
                aria-label={`Go to photo ${i + 1}`}
              />
            ))}
          </div>

          <div className={styles.carousel__thumbs}>
            {photos.map((photo, i) => (
              <div
                key={photo.id}
                className={`${styles.carousel__thumb} ${
                  i === currentIndex ? styles.active : ""
                }`}
                onClick={() => goTo(i)}
              >
                <img src={photo.storageUrl} alt={photo.title} />
              </div>
            ))}
          </div>
        </>
      )}

      {lightboxOpen && photos.length > 0 && (
        <Lightbox
          imageUrl={photos[currentIndex].storageUrl}
          title={photos[currentIndex].title}
          location={photos[currentIndex].location}
          counter={`${currentIndex + 1} / ${photos.length}`}
          onClose={closeLightbox}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
}