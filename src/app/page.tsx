import Link from 'next/link';
import styles from '@/app/home.module.scss';

const CATEGORIES = [
  {
    title: 'Landscapes',
    slug: 'landscapes',
    description: 'Wide open spaces and the natural world.',
  },
  {
    title: 'Portraits',
    slug: 'portraits',
    description: 'Candid and studio portraiture.',
  },
  {
    title: 'Products',
    slug: 'products',
    description: 'Clean, professional product photography.',
  },
  {
    title: 'Architecture',
    slug: 'architecture',
    description: 'Buildings, structures, and urban environments.',
  },
  {
    title: 'Film',
    slug: 'film',
    description: '35mm and medium format — scanned from original negatives.',
  },
];

export default function Home() {
  return (
    <main className={styles.home}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <p className={styles.hero__eyebrow}>Pixel Halide Studios</p>
        <h1 className={styles.hero__headline}>
          Every Frame<br />
          <span className={styles.hero__accent}>Tells a Story</span>
        </h1>
        <p className={styles.hero__sub}>
          Landscapes, portraits, products, architecture, and film photography
          — captured with intention.
        </p>
        <div className={styles.hero__ctas}>
          <Link href="/landscapes" className={styles.cta__primary}>
            Explore the Gallery
          </Link>
          <Link href="/about" className={styles.cta__secondary}>
            About the Photographer
          </Link>
        </div>
      </section>

      {/* ── Category Grid ── */}
      <section className={styles.categories}>
        <p className={styles.categories__eyebrow}>Portfolio</p>
        <h2 className={styles.categories__heading}>The Collection</h2>
        <div className={styles.categories__grid}>
          {CATEGORIES.map(({ title, slug, description }) => (
            <Link key={slug} href={`/${slug}`} className={styles.category__card}>
              <div className={styles.category__cardInner}>
                <h3 className={styles.category__title}>{title}</h3>
                <p className={styles.category__desc}>{description}</p>
                <span className={styles.category__arrow}>View Gallery →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── About Snippet ── */}
      <section className={styles.about}>
        <div className={styles.about__inner}>
          <p className={styles.about__eyebrow}>About</p>
          <h2 className={styles.about__heading}>The Photographer</h2>
          <p className={styles.about__body}>
            Based in St. Louis, I studied photography at Webster University and
            have been shooting on digital and film ever since. From studio
            portraits to landscapes, product work to 35mm scans — every image
            starts with finding the right light.
          </p>
          <Link href="/about" className={styles.about__link}>
            More about me →
          </Link>
        </div>
      </section>

    </main>
  );
}