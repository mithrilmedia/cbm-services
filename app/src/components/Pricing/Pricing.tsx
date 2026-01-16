import styles from './Pricing.module.css';

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  services: string[];
  highlighted?: boolean;
  cta: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '$1,500',
    period: 'per month',
    description: 'Perfect for brands looking to build internal content capabilities with expert guidance.',
    services: [
      'Creative Consulting',
      'Content strategy sessions',
      'Equipment recommendations',
      'Recording & editing training',
      'Monthly coaching calls',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Growth',
    price: '$3,500',
    period: 'per month',
    description: 'Full-service virtual production for brands ready to launch and grow their own show.',
    services: [
      'Virtual Production',
      'Social Media Management',
      'Monthly episode production',
      'Multi-platform publishing',
      'Short-form content creation',
      'Analytics & optimization',
    ],
    highlighted: true,
    cta: 'Build Your Show',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'tailored solutions',
    description: 'Comprehensive partnerships for brands requiring in-person production, events, and custom development.',
    services: [
      'In-Person Production',
      'Website & Software Development',
      'Sponsorship packages',
      'Live event coverage',
      'Dedicated account team',
      'Custom integrations',
    ],
    cta: 'Contact Us',
  },
];

export function Pricing() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className={styles.pricing} aria-labelledby="pricing-heading">
      <div className={styles.container}>
        <span className={styles.eyebrow}>Pricing</span>
        <h2 id="pricing-heading" className={styles.sectionTitle}>
          Investment Levels
        </h2>
        <p className={styles.sectionSubtitle}>
          Transparent pricing for every stage of your content journey. All packages are customizable to fit your specific needs.
        </p>

        <div className={styles.pricingGrid}>
          {pricingTiers.map((tier) => (
            <article
              key={tier.name}
              className={`${styles.pricingCard} ${tier.highlighted ? styles.highlighted : ''}`}
            >
              {tier.highlighted && <span className={styles.badge}>Most Popular</span>}
              <h3 className={styles.tierName}>{tier.name}</h3>
              <div className={styles.priceWrapper}>
                <span className={styles.price}>{tier.price}</span>
                <span className={styles.period}>{tier.period}</span>
              </div>
              <p className={styles.tierDescription}>{tier.description}</p>
              <ul className={styles.servicesList}>
                {tier.services.map((service, index) => (
                  <li key={index} className={styles.serviceItem}>
                    <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {service}
                  </li>
                ))}
              </ul>
              <button onClick={scrollToContact} className={styles.ctaButton}>
                {tier.cta}
              </button>
            </article>
          ))}
        </div>

        <p className={styles.disclaimer}>
          Individual services available a la carte. Schedule a call to discuss your specific needs and build a custom package.
        </p>
      </div>
    </section>
  );
}
