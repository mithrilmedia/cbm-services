import styles from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <p className={styles.copyright}>
          © {currentYear} Cali BBQ Media. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
