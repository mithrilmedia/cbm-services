import type { ReactNode } from 'react';
import styles from './Stats.module.css';

const stats = [
  { number: '4,500+', label: 'Website Visitors per Month', icon: 'globe' },
  { number: '100K+', label: 'YouTube Views per Quarter', icon: 'youtube' },
  { number: '1.4M', label: 'LinkedIn Impressions Last Year', icon: 'linkedin' },
  { number: '200K+', label: 'Instagram Views per Quarter', icon: 'instagram' },
  { number: '90K+', label: 'TikTok Views per Quarter', icon: 'tiktok' },
  { number: '30K+', label: 'Newsletter Subscribers', icon: 'mail' },
];

const IconGlobe = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const IconYoutube = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

const IconLinkedin = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const IconInstagram = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const IconTiktok = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
  </svg>
);

const IconMail = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const iconMap: Record<string, () => ReactNode> = {
  globe: IconGlobe,
  youtube: IconYoutube,
  linkedin: IconLinkedin,
  instagram: IconInstagram,
  tiktok: IconTiktok,
  mail: IconMail,
};

export function Stats() {
  return (
    <section className={styles.stats} aria-labelledby="stats-heading">
      <div className={styles.container}>
        <h2 id="stats-heading" className={styles.sectionTitle}>
          More Than Numbers
        </h2>
        <p className={styles.sectionSubtitle}>
          We get it. Numbers are important. But more important than quantity is quality. Our deeply held belief that the real value of digital storytelling is <strong>reaching the right audience</strong> is at the core of all of the quantifiable metrics we analyze.
        </p>

        <div className={styles.statsGrid}>
          {stats.map((stat) => {
            const Icon = iconMap[stat.icon];
            return (
              <div key={stat.label} className={styles.statCard}>
                <div className={styles.statIcon}>
                  <Icon />
                </div>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
