import styles from './RestaurantTech.module.css';

const features = [
  {
    title: 'Industry Insights & Trends',
    description: 'Breaking down how technology is reshaping restaurants, from POS systems to AI-driven operations.',
  },
  {
    title: 'Expert Interviews',
    description: 'Conversations with executives, founders, and innovators driving the future of hospitality.',
  },
  {
    title: 'Case Studies',
    description: 'Real-world examples of how restaurants are using tech to streamline operations, cut costs, and increase revenue.',
  },
  {
    title: 'Playbooks & How-To Guides',
    description: 'Actionable resources for operators exploring new tools, integrations, and best practices.',
  },
  {
    title: 'Event Coverage',
    description: 'Recaps and analysis from major industry conferences, expos, and product launches.',
  },
  {
    title: 'Opinion & Analysis',
    description: 'Thought leadership on where the restaurant technology space is headed and why it matters.',
  },
];

const benefits = [
  {
    title: 'Reach the Right Audience',
    description: 'Decision makers, operators, and technology professionals who actively shape the restaurant industry.',
  },
  {
    title: 'Direct Engagement',
    description: 'Connect with a highly engaged community, not just passive impressions.',
  },
  {
    title: 'Long-Term Value',
    description: 'Build awareness and credibility with an audience that is growing steadily month over month.',
  },
  {
    title: 'Brand Visibility',
    description: 'Feature placement within newsletters, podcast tie-ins, and social content extensions.',
  },
];

export function RestaurantTech() {
  return (
    <section className={styles.section} aria-labelledby="restaurant-tech-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>A Cali BBQ Media Substack Series</span>
          <h2 id="restaurant-tech-heading" className={styles.title}>
            Restaurant Technology
          </h2>
          <p className={styles.intro}>
            In 2025, Cali BBQ Media launched the Restaurant Technology Substack, joining thought leaders from across industries to explore how technology is transforming hospitality. Unlike traditional media, Substack provides a direct and intimate channel with an audience that actively chooses to subscribe, engage, and share.
          </p>
          <p className={styles.thesis}>
            Our thesis is simple: <strong>the right audience matters more than the largest audience</strong>. We've cultivated an engaged base of industry professionals who want actionable insights, not noise.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>What We Publish</h3>
            <ul className={styles.list}>
              {features.map((feature) => (
                <li key={feature.title} className={styles.listItem}>
                  <div className={styles.bullet} aria-hidden="true" />
                  <div className={styles.listContent}>
                    <strong>{feature.title}</strong>: {feature.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.column} ${styles.benefitsColumn}`}>
            <h3 className={styles.columnTitle}>Why It Works</h3>
            <ul className={styles.benefitsList}>
              {benefits.map((benefit) => (
                <li key={benefit.title} className={styles.benefitItem}>
                  <h4 className={styles.benefitTitle}>{benefit.title}</h4>
                  <p className={styles.benefitDescription}>{benefit.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
