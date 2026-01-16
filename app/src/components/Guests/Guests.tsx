import styles from './Guests.module.css';

interface Guest {
  name: string;
  title: string;
  company: string;
  image: string;
}

const guests: Guest[] = [
  { name: 'Emeril Lagasse', title: 'Celebrity Restaurateur', company: '', image: '/guests/emeril-lagasse.png' },
  { name: 'Jon Taffer', title: 'Host', company: 'Bar Rescue', image: '/guests/jon-taffer.png' },
  { name: 'Shaquille O\'Neal', title: 'NBA Superstar', company: '', image: '/guests/shaq.png' },
  { name: 'Rob Dyrdek', title: 'Media & Sports Entrepreneur', company: '', image: '/guests/rob-dyrdek.png' },
  { name: 'Giada De Laurentiis', title: 'Food Network Star', company: '', image: '/guests/giada.jpg' },
  { name: 'Aman Narang', title: 'CEO', company: 'Toast, Inc.', image: '/guests/aman-narang.png' },
  { name: 'David Meltzer', title: 'Entrepreneur & Business Coach', company: '', image: '/guests/david-meltzer.png' },
  { name: 'Sam the Cooking Guy', title: 'Celebrity Chef', company: '', image: '/guests/sam-the-cooking-guy.png' },
  { name: 'Dave Williamson', title: 'Comedian & Entrepreneur', company: '', image: '/guests/dave-williamson.png' },
  { name: 'Robyn Lindars', title: 'Chef & Entrepreneur', company: '', image: '/guests/robyn-lindars.png' },
  { name: 'Tabitha Lipkin', title: 'Media Personality', company: '', image: '/guests/tabitha-lipkin.png' },
  { name: 'Juliet Hahn', title: 'CCO & Podcast Host', company: '', image: '/guests/juliet-hahn.png' },
  { name: 'Pinky Cole', title: 'Founder', company: 'Slutty Vegan', image: '/guests/pinky-cole.png' },
  { name: 'Marc Murphy', title: 'Celebrity Chef', company: '', image: '/guests/marc-murphy.png' },
  { name: 'Meredith Sandland', title: 'Author & Executive', company: '', image: '/guests/meredith-sandland.png' },
  { name: 'Brett Berish', title: 'CEO', company: 'Sovereign Brands', image: '/guests/brett-berish.png' },
  { name: 'Sohla El-Waylly', title: 'Chef & TV Personality', company: '', image: '/guests/sohla.png' },
];

export function Guests() {
  return (
    <section className={styles.guests} aria-labelledby="guests-heading">
      <div className={styles.container}>
        <h2 id="guests-heading" className={styles.sectionTitle}>
          Guests We've Featured
        </h2>
        <p className={styles.sectionSubtitle}>
          We've had the privilege of featuring some of the most influential names in hospitality, entertainment, and business.
        </p>

        <div className={styles.guestsGrid}>
          {guests.map((guest) => (
            <div key={guest.name} className={styles.guestCard}>
              <div className={styles.avatarWrapper}>
                <img 
                  src={guest.image} 
                  alt={guest.name}
                  className={styles.avatar}
                  loading="lazy"
                />
              </div>
              <div className={styles.guestInfo}>
                <h3 className={styles.guestName}>{guest.name}</h3>
                <p className={styles.guestTitle}>{guest.title}</p>
                {guest.company && (
                  <p className={styles.guestCompany}>{guest.company}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
