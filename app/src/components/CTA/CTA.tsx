import { HiArrowRight } from 'react-icons/hi';
import { useCalendly } from '../../context/CalendlyContext';
import styles from './CTA.module.css';

export function CTA() {
  const { openCalendly } = useCalendly();

  return (
    <section id="contact" className={styles.cta} aria-labelledby="cta-heading">
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Let's Talk</span>
          <h2 id="cta-heading" className={styles.title}>
            Ready to Be The Show?
          </h2>
          <p className={styles.subtitle}>
            Schedule a discovery call with our team to discuss how we can help amplify your brand through powerful digital storytelling.
          </p>

          <div className={styles.actions}>
            <button onClick={openCalendly} className={styles.primaryButton}>
              <span>Schedule a Call</span>
              <HiArrowRight className={styles.arrowIcon} />
            </button>
            <a href="mailto:hello@calibbq.media" className={styles.secondaryButton}>
              <span>hello@calibbq.media</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
