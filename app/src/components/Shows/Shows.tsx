import styles from './Shows.module.css';

interface Show {
  name: string;
  description: string;
  image: string;
}

const originalShows: Show[] = [
  {
    name: 'Restaurant Influencers',
    description: 'Conversations with the people shaping the future of hospitality',
    image: '/shows/restaurant-influencers.jpg',
  },
  {
    name: 'Digital Hospitality',
    description: 'A Cali BBQ Media podcast exploring the intersection of technology and hospitality',
    image: '/shows/digital-hospitalitly.jpeg',
  },
  {
    name: 'Family Style',
    description: 'Stories from restaurant families and the bonds that make hospitality special',
    image: '/shows/family-style.jpeg',
  },
];

const clientShows: Show[] = [
  {
    name: 'Behind the Numbers',
    description: 'Produced for Restaurant365',
    image: '/shows/behind-the-numbers.jpg',
  },
  {
    name: 'Fish Factor',
    description: 'Exploring seafood and sustainability',
    image: '/shows/fish-factor.jpg',
  },
  {
    name: 'The Restaurant Finance Podcast',
    description: 'Financial insights for restaurant operators',
    image: '/shows/restaurant-finance-podcast.jpg',
  },
];

export function Shows() {
  return (
    <section id="shows" className={styles.shows} aria-labelledby="shows-heading">
      <div className={styles.container}>
        <h2 id="shows-heading" className={styles.sectionTitle}>
          Shows We Produce
        </h2>
        <p className={styles.sectionSubtitle}>
          See the difference yourself by checking out any of these shows listed on YouTube or your favorite podcast platform.
        </p>

        <div className={styles.showsGroup}>
          <h3 className={styles.groupTitle}>Our Original Shows</h3>
          <div className={styles.showsGrid}>
            {originalShows.map((show) => (
              <article key={show.name} className={styles.showCard}>
                <img 
                  src={show.image}
                  alt={`${show.name} podcast artwork`}
                  className={styles.showImage}
                />
                <div className={styles.showInfo}>
                  <h4 className={styles.showName}>{show.name}</h4>
                  <p className={styles.showDescription}>{show.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.showsGroup}>
          <h3 className={styles.groupTitle}>Our Client Shows</h3>
          <div className={styles.showsGrid}>
            {clientShows.map((show) => (
              <article key={show.name} className={styles.showCard}>
                <img 
                  src={show.image}
                  alt={`${show.name} podcast artwork`}
                  className={styles.showImage}
                />
                <div className={styles.showInfo}>
                  <h4 className={styles.showName}>{show.name}</h4>
                  <p className={styles.showDescription}>{show.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
