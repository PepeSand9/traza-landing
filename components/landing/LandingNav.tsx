import Link from 'next/link';
import { Logo } from '@/components/Logo';
import styles from './landing.module.css';

export function LandingNav() {
  return (
    <nav className={styles.nav} aria-label="Navegación principal">
      <div className={styles.navInner}>
        <Link href="/" className={styles.navBrand}>
          <Logo size={36} variant="dark" />
          <span className={styles.navBrandText}>Trazá</span>
        </Link>
        <div className={styles.navActions}>
          <a
            href="https://wa.me/5491141910849"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar Reunion
          </a>
        </div>
      </div>
    </nav>
  );
}
