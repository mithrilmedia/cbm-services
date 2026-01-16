import styles from './Guests.module.css';

interface Guest {
  name: string;
  title: string;
  image: string;
}

const guests: Guest[] = [
  { name: 'Alison Roman', title: 'Author & Chef', image: '/guests/alison-roman.webp' },
  { name: 'Aman Narang', title: 'CEO, Toast', image: '/guests/aman-narang.avif' },
  { name: 'Brett Berish', title: 'CEO, Sovereign Brands', image: '/guests/brett-berish.webp' },
  { name: 'David Meltzer', title: 'Entrepreneur', image: '/guests/david-meltzer.jpeg' },
  { name: 'Debby Soo', title: 'CEO, OpenTable', image: '/guests/debby-soo.webp' },
  { name: 'Emeril Lagasse', title: 'Celebrity Chef', image: '/guests/emeril.jpg' },
  { name: 'Giada De Laurentiis', title: 'Food Network Star', image: '/guests/giada.webp' },
  { name: 'Jim Trotter', title: 'Sports Journalist', image: '/guests/jim-trotter.jpg' },
  { name: 'Jon Taffer', title: 'Host, Bar Rescue', image: '/guests/jon-taffer.webp' },
  { name: 'Marc Murphy', title: 'Celebrity Chef', image: '/guests/marc-murphy.jpeg' },
  { name: 'Mayim Bialik', title: 'Actress & Author', image: '/guests/mayim-bialik.jpg' },
  { name: 'Pinky Cole', title: 'Founder, Slutty Vegan', image: '/guests/pinky-cole.jpg' },
  { name: 'Rob Dyrdek', title: 'Media Entrepreneur', image: '/guests/rob-dyrdek.jpg' },
  { name: 'Sam the Cooking Guy', title: 'Celebrity Chef', image: '/guests/sam-the-cooking-guy.webp' },
  { name: 'Shaquille O\'Neal', title: 'NBA Legend', image: '/guests/shaq.avif' },
  { name: 'Sohla El-Waylly', title: 'Chef & TV Personality', image: '/guests/sohla.png' },
  { name: 'Von Miller', title: 'NFL Superstar', image: '/guests/von-miller.jpg' },
];

export function Guests() {
  // Duplicate guests for seamless infinite scroll
  const duplicatedGuests = [...guests, ...guests];

  return (
    <section className={styles.guests} aria-labelledby="guests-heading">
      <div className={styles.header}>
        <span className={styles.eyebrow}>Featured Guests</span>
        <h2 id="guests-heading" className={styles.sectionTitle}>
          We've Hosted the Best
        </h2>
        <p className={styles.sectionSubtext}>
          From celebrity chefs and Food Network stars to NFL legends, NBA icons, tech CEOs, and media entrepreneurs. Our shows bring together the most influential voices across hospitality, technology, and business.
        </p>
      </div>

      <div className={styles.scrollWrapper}>
        <div className={styles.scrollTrack}>
          {duplicatedGuests.map((guest, index) => (
            <div key={`${guest.name}-${index}`} className={styles.tile}>
              <img 
                src={guest.image} 
                alt={guest.name}
                className={styles.tileImage}
                loading="lazy"
              />
              <div className={styles.tileOverlay}>
                <span className={styles.tileName}>{guest.name}</span>
                <span className={styles.tileTitle}>{guest.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
