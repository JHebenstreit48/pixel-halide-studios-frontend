'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import navigationLinks from '@/components/layout/navigation/navigationLinks';
import styles from '@/components/layout/navigation/navigation.module.scss';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={styles.mainNav} aria-label="Primary">
      <ul className={styles.mainNav__list}>
        {navigationLinks.map(({ title, path }) => (
          <li key={title} className={styles.mainNav__item}>
            <Link
              href={path}
              className={`${styles.mainNav__link} ${
                pathname === path ? styles.isActive : ''
              }`}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}