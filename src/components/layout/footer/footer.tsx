  import Link from "next/link";
  import styles from "@/components/layout/footer/footer.module.scss";

  const year = new Date().getFullYear();

  export default function Footer() {
    return (
      <footer className={styles.footer} role="contentinfo">
        <div className={styles.footer__inner}>
          <div className={styles.footer__brand}>
            <p className={styles.footer__copy}>
              © {year}{" "}
              <span className={styles.footer__name}>Pixel Halide Studios</span>
            </p>
            <p className={styles.footer__tag}>
              Landscapes · Portrait · Product · Film
            </p>
          </div>

          <nav className={styles.footer__nav} aria-label="Footer">
            <Link href="/landscapes">Landscapes</Link>
            <Link href="/portraits">Portraits</Link>
            <Link href="/products">Products</Link>
            <Link href="/architecture">Architecture</Link>
            <Link href="/film">Film</Link>
            <Link href="/about">About</Link>
          </nav>

          <div className={styles.footer__links}>
            <a
              href="https://it-dev-portfolio.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer__externalLink}
            >
              IT Dev Portfolio
            </a>

            <a
              href="https://steel-and-shutter.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer__externalLink}
            >
              Steel &amp; Shutter
            </a>
          </div>
        </div>
      </footer>
    );
  }