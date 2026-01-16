import styles from './ClientLogos.module.css';

interface Client {
  name: string;
  logo: string;
}

const clients: Client[] = [
  { name: 'Toast', logo: '/logos/toast.svg' },
  { name: 'Entrepreneur', logo: '/logos/entrepreneur.svg' },
  { name: 'Uber Eats', logo: '/logos/uber-eats.svg' },
  { name: 'Craveworthy Brands', logo: '/logos/craveworthy.svg' },
  { name: 'Pepsi', logo: '/logos/pepsi-1.svg' },
  { name: 'Restaurant365', logo: '/logos/r365.svg' },
  { name: 'Walmart Business', logo: '/logos/walmart-business.svg' },
  { name: 'US Foods', logo: '/logos/us-foods.svg' },
  { name: 'Ring', logo: '/logos/ring-2.svg' },
];

export function ClientLogos() {
  return (
    <section id="clients" className={styles.clients} aria-labelledby="clients-heading">
      <div className={styles.container}>
        <h2 id="clients-heading" className={styles.sectionTitle}>
          Brands Who Trust Us
        </h2>
        <p className={styles.sectionSubtitle}>
          These are just a few of the brands that have trusted us to create B2B content and help connect their brands with the decision-makers that matter.
        </p>

        <div className={styles.logosGrid}>
          {clients.map((client) => (
            <div key={client.name} className={styles.logoItem}>
              <img 
                src={client.logo} 
                alt={client.name}
                className={styles.logoImage}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <p className={styles.andMore}>and many more</p>

        <p className={styles.tagline}>
          We have helped these brands amplify their messaging through{' '}
          <strong>powerful stories that drive more business</strong> and position their brand in front of the right audience.
        </p>
      </div>
    </section>
  );
}
