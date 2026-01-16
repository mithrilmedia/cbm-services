import { HiArrowRight } from 'react-icons/hi';
import styles from './Hero.module.css';

const serviceLinks = [
  { id: 'virtual-production', label: 'Build a Show' },
  { id: 'in-person-production', label: 'Book Our Team' },
  { id: 'sponsorship', label: 'Become a Sponsor' },
  { id: 'creative-consulting', label: 'Get Coaching' },
  { id: 'social-media', label: 'Grow Your Brand' },
  { id: 'development', label: 'Build Your Site' },
];

export function Hero() {
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
            We Help Brands <span className={styles.accent}>Be The Show</span>
          </h1>
          <p className={styles.subtitle}>
            Cali BBQ Media produces award-winning podcasts and digital content 
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
            <a href="#shows" className={styles.secondaryButton}>
              See Our Work
            </a>
          </div>
        </div>
      </div>

      <div className={styles.serviceLinksBar}>
        {serviceLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className={styles.serviceLink}
          >
            <span className={styles.serviceLinkLabel}>{link.label}</span>
            <HiArrowRight className={styles.arrowIcon} />
          </button>
        ))}
      </div>
    </section>
  );
}
