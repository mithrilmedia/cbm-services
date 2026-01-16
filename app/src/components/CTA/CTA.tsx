import styles from './CTA.module.css';

export function CTA() {
  return (
    <section id="contact" className={styles.cta} aria-labelledby="cta-heading">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 id="cta-heading" className={styles.title}>
            Ready to Be The Show?
          </h2>
          <p className={styles.subtitle}>
            Schedule a discovery call with our team to discuss how we can help amplify your brand through powerful digital storytelling.
          </p>

          <div className={styles.calendlyWrapper}>
            {/* Calendly inline widget */}
            <div 
              className={styles.calendlyPlaceholder}
              role="button"
              tabIndex={0}
              aria-label="Schedule a call with Cali BBQ Media"
            >
              <div className={styles.calendlyContent}>
                <div className={styles.calendarIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                <h3 className={styles.calendlyTitle}>Schedule Your Discovery Call</h3>
                <p className={styles.calendlyText}>
                  Choose a time that works for you. Our team will walk you through our services and discuss how we can help you reach your content goals.
                </p>
                <a 
                  href="https://calendly.com/calibbq" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.calendlyButton}
                >
                  Book a Time
                </a>
              </div>
            </div>
          </div>

          <div className={styles.contact}>
            <p className={styles.contactText}>Prefer email?</p>
            <a href="mailto:hello@calibbq.media" className={styles.email}>
              hello@calibbq.media
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
