'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/layout/navigation/navigation';
import NavigationLinks from '@/components/layout/navigation/navigationLinks';
import styles from '@/components/layout/header/header.module.scss';

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    return () => document.body.classList.remove('no-scroll');
  }, [open]);

  const toggle = () => setOpen((o) => !o);
  const close = () => setOpen(false);

  return (
    <header className={styles.glassWrapper}>
      <div className={styles.glassWrapper__inner}>
        <Link href="/" className={styles.brand} aria-label="Home">
          <span className={styles.brand__text}>Pixel Halide Studios</span>
        </Link>

        <Navigation />

        <button
          className={styles.hamburger}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-controls="mobileNav"
          aria-expanded={open}
          onClick={toggle}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobileNav"
        className={`${styles.mobileNav} ${open ? styles.isOpen : ''}`}
        aria-label="Mobile"
      >
        {NavigationLinks.map(({ title, path }) => (
          <Link
            key={title}
            href={path}
            className={styles.mobileNav__link}
            onClick={close}
          >
            {title}
          </Link>
        ))}
      </nav>

      <button
        className={`${styles.mobileBackdrop} ${open ? styles.isOpen : ''}`}
        aria-label="Close menu"
        onClick={close}
      />
    </header>
  );
}