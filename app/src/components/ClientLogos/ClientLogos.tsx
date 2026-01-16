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
  { name: 'Amazon Business', logo: '/logos/amazon-business.png' },
  { name: 'DAVO', logo: '/logos/davo.png' },
  { name: 'Eero', logo: '/logos/eero.png' },
  { name: 'Incentivio', logo: '/logos/incentivio.png' },
  { name: 'inKind', logo: '/logos/inkind-logo.png' },
  { name: 'Ovation', logo: '/logos/ovation.png' },
  { name: 'Palona', logo: '/logos/palona.png' },
];

export function ClientLogos() {
  // Duplicate for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="clients" className={styles.clients} aria-labelledby="clients-heading">
      <div className={styles.header}>
        <span className={styles.eyebrow}>Our Partners</span>
        <h2 id="clients-heading" className={styles.sectionTitle}>
          We've Worked With The Best
        </h2>
        <p className={styles.sectionSubtext}>
          Industry leaders trust us to create B2B content that connects their brands with the decision-makers that matter.
        </p>
      </div>

      <div className={styles.scrollWrapper}>
        <div className={styles.scrollTrack}>
          {duplicatedClients.map((client, index) => (
            <div key={`${client.name}-${index}`} className={styles.logoItem}>
              <img 
                src={client.logo} 
                alt={client.name}
                className={styles.logoImage}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
