import { useState, useEffect, useRef } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import styles from './Hero.module.css';

const serviceLinks = [
  { id: 'virtual-production', label: 'Build a Show' },
  { id: 'in-person-production', label: 'Book Our Team' },
  { id: 'sponsorship', label: 'Become a Sponsor' },
  { id: 'social-media', label: 'Grow Your Brand' },
  { id: 'development', label: 'Build Your Site' },
  { id: 'creative-consulting', label: 'Get Coaching' },
];

export function Hero() {
  const [isSticky, setIsSticky] = useState(false);
  const [barHeight, setBarHeight] = useState(0);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const navBarRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  useEffect(() => {
    // Get initial bar height
    if (navBarRef.current) {
      setBarHeight(navBarRef.current.offsetHeight);
    }

    const handleScroll = () => {
      // Use the placeholder's position to determine sticky state
      if (placeholderRef.current) {
        const rect = placeholderRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 0);
      }

      // Find the current active section
      let currentSection: string | null = null;
      for (const link of serviceLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Section is active if its top is at or above the viewport center
          if (rect.top <= window.innerHeight / 2) {
            currentSection = link.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    const handleResize = () => {
      if (navBarRef.current) {
        setBarHeight(navBarRef.current.offsetHeight);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Auto-scroll nav to show active section on mobile
  useEffect(() => {
    if (activeSection && navLinksRef.current) {
      const activeButton = linkRefs.current.get(activeSection);
      if (activeButton) {
        const container = navLinksRef.current;
        const buttonLeft = activeButton.offsetLeft;
        const buttonWidth = activeButton.offsetWidth;
        const containerWidth = container.offsetWidth;
        
        // Center the active button in the nav
        const scrollPosition = buttonLeft - (containerWidth / 2) + (buttonWidth / 2);
        container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
      }
    }
  }, [activeSection]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.videoBackground}>
        <div className={styles.videoOverlay} />
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/sizzle.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={styles.content}>
        <div className={styles.container}>
          <p className={styles.tagline}>Podcast Production & Digital Storytelling</p>
          <h1 className={styles.title}>
            We Help Brands<br /><span className={styles.accent}>Be The Show</span>
          </h1>
          <p className={styles.subtitle}>
            Cali BBQ Media produces B2B podcasts and digital content 
            for restaurant technology brands. Real stories that drive real business.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>71M+</span>
              <span className={styles.statLabel}>Video Views</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>4.75M+</span>
              <span className={styles.statLabel}>Page Visits</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>480K+</span>
              <span className={styles.statLabel}>Podcast Listens</span>
            </div>
          </div>

          <div className={styles.actions}>
            <button onClick={scrollToContact} className={styles.primaryButton}>
              Schedule a Call
            </button>
            <a href="#virtual-production" className={styles.secondaryButton}>
              See Our Work
            </a>
          </div>
        </div>
      </div>

      {/* Placeholder to prevent content jump when bar becomes fixed */}
      <div 
        ref={placeholderRef}
        className={styles.serviceLinksPlaceholder}
        style={{ height: isSticky ? barHeight : 0 }}
      />

      <div 
        ref={navBarRef}
        className={`${styles.serviceLinksBar} ${isSticky ? styles.sticky : ''}`}
      >
        <button 
          onClick={scrollToTop}
          className={`${styles.logo} ${isSticky ? styles.visible : ''}`}
        >
          CALI BBQ MEDIA
        </button>

        <div ref={navLinksRef} className={styles.navLinks}>
          {serviceLinks.map((link) => (
            <button
              key={link.id}
              ref={(el) => {
                if (el) linkRefs.current.set(link.id, el);
              }}
              onClick={() => scrollToSection(link.id)}
              className={`${styles.serviceLink} ${activeSection === link.id ? styles.active : ''}`}
            >
              <span className={styles.serviceLinkLabel}>{link.label}</span>
              <HiArrowRight className={styles.arrowIcon} />
            </button>
          ))}
        </div>

        <button 
          onClick={scrollToContact}
          className={`${styles.ctaButton} ${isSticky ? styles.visible : ''}`}
        >
          Schedule a Call
        </button>
      </div>
    </section>
  );
}
