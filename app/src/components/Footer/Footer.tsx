import styles from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo}>CALI BBQ MEDIA</span>
            <p className={styles.tagline}>
              Helping brands be the show since 2019.
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Quick Links</h4>
              <nav aria-label="Footer navigation">
                <a href="#shows" className={styles.link}>Shows</a>
                <a href="#clients" className={styles.link}>Clients</a>
                <a href="#pricing" className={styles.link}>Pricing</a>
                <a href="#contact" className={styles.link}>Contact</a>
              </nav>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Services</h4>
              <nav aria-label="Services navigation">
                <a href="#av-production" className={styles.link}>A/V Production</a>
                <a href="#youtube-podcast" className={styles.link}>YouTube & Podcast</a>
                <a href="#sponsorship" className={styles.link}>Sponsorship</a>
                <a href="#professional" className={styles.link}>Professional Services</a>
              </nav>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Connect</h4>
              <nav aria-label="Social links">
                <a href="https://www.youtube.com/@CalibbqMedia" target="_blank" rel="noopener noreferrer" className={styles.link}>YouTube</a>
                <a href="https://www.linkedin.com/company/cali-bbq-media/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
                <a href="https://www.instagram.com/calibbqmedia/" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</a>
                <a href="https://www.tiktok.com/@calibbqmedia" target="_blank" rel="noopener noreferrer" className={styles.link}>TikTok</a>
              </nav>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Cali BBQ Media. All rights reserved.
          </p>
          <div className={styles.legal}>
            <a href="https://betheshow.media" target="_blank" rel="noopener noreferrer" className={styles.legalLink}>
              betheshow.media
            </a>
            <span className={styles.separator}>|</span>
            <a href="mailto:hello@calibbq.media" className={styles.legalLink}>
              hello@calibbq.media
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
