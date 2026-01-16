import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';

const services = [
  { id: 'virtual-production', label: 'Virtual' },
  { id: 'in-person-production', label: 'In Person' },
  { id: 'sponsorship', label: 'Sponsor' },
  { id: 'social-media', label: 'Social' },
  { id: 'development', label: 'Web' },
  { id: 'creative-consulting', label: 'Consulting' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`} role="navigation" aria-label="Main navigation">
      <div className={styles.container}>
        <a href="#" className={styles.logo} aria-label="Cali BBQ Media home">
          <span className={styles.logoText}>CALI BBQ MEDIA</span>
        </a>

        <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} />
        </button>

        <div id="main-menu" className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => scrollToSection(service.id)}
              className={styles.navLink}
            >
              {service.label}
            </button>
          ))}
          <button onClick={() => scrollToSection('contact')} className={styles.ctaButton}>
            Schedule a Call
          </button>
        </div>
      </div>
    </nav>
  );
}
