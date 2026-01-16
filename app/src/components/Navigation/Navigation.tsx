import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';

const services = [
  { id: 'virtual-production', label: 'Virtual Production' },
  { id: 'in-person-production', label: 'In-Person Production' },
  { id: 'sponsorship', label: 'Sponsorship' },
  { id: 'creative-consulting', label: 'Creative Consulting' },
  { id: 'social-media', label: 'Social Media Management' },
  { id: 'development', label: 'Website & Software' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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
      setIsServicesOpen(false);
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
          <div className={styles.servicesDropdown}>
            <button
              className={styles.servicesButton}
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              aria-expanded={isServicesOpen}
              aria-haspopup="true"
            >
              Services
              <svg className={`${styles.chevron} ${isServicesOpen ? styles.open : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <ul className={`${styles.dropdown} ${isServicesOpen ? styles.open : ''}`} role="menu">
              {services.map((service) => (
                <li key={service.id} role="none">
                  <button
                    role="menuitem"
                    onClick={() => scrollToSection(service.id)}
                    className={styles.dropdownItem}
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <button onClick={() => scrollToSection('shows')} className={styles.navLink}>
            Shows
          </button>
          <button onClick={() => scrollToSection('clients')} className={styles.navLink}>
            Clients
          </button>
          <button onClick={() => scrollToSection('pricing')} className={styles.navLink}>
            Pricing
          </button>
          <button onClick={() => scrollToSection('contact')} className={styles.ctaButton}>
            Schedule a Call
          </button>
        </div>
      </div>
    </nav>
  );
}
