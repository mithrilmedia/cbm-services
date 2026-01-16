import styles from './Testimonials.module.css';

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Shawn Walchef and Cali BBQ Media have provided my brand with invaluable content. Their ability to see and capture video, photographs, and sounds intuitively have lead to the best short and long form content we have ever made in multiple media models; podcast, behind the scenes, documentary, Vlog, and social media styles. The deliverables have always exceeded expectations and have garnered tons of accolades from our stakeholders! They are the fastest in turn around and yet the results are superior to other creators and agencies I have used that cost more and take longer.",
    author: 'Justin Egan',
    title: 'Co-Founder at Wing It On!',
    company: 'VP of Marketing, Craveworthy Brands',
  },
  {
    quote: "The team at Incentivio couldn't be happier with the partnership formed with the Cali BBQ Media team. From the initial conversations, to brainstorming the idea for the show, to launching our first episode, and now over 20 episodes in, the team while slowed us the entire way through. Podcasting was a new thing for all of us, myself included as the host, and the team made us feel very comfortable and confident as we rolled this all out. They are extremely responsive, filled with great ideas, and are constantly pushing us to test new limits. Our brand has gotten a huge boost from the podcast, to the point where we have folks at tradeshows requesting to be guests. It has also helped us open up the door with bigger brands as our name recognition has increased significantly, with the podcast being a major contributor to that.",
    author: 'Arun Kumar',
    title: 'Director of Strategic Partnerships',
    company: 'Incentivio',
  },
  {
    quote: "Shawn is among the most passionate people I know when it comes to utilizing the digital world to empower individuals and businesses. He's not afraid to think outside the box, unlike so many who do things because \"that's the way it's always been done.\" His insight and understanding of the digital world and its power are invaluable. I cannot recommend more highly the benefits of leaning on his knowledge.",
    author: 'Jim Trotter',
    title: 'National Sports Columnist',
    company: '2023 Journalist of the Year',
  },
  {
    quote: "Shawn Walchef stands in stark contrast to the superficial world of social media. Marketing is an ever evolving art, Shawn is writing it in real time. Real people. Real stories. Real community. Not just in words but in action, behind the screen. What that translates to is real connections with people that really care. If you find yourself lucky enough to work with him or his team, that's a high honor. As the paradigm shift accelerates in our digital world, you're getting the opportunity to work with a team that's help architect it.",
    author: 'Matt Wampler',
    title: 'CEO/Co-Founder',
    company: 'ClearCOGS',
  },
  {
    quote: "Shawn is among the most passionate people I know when it comes to utilizing the digital world to empower individuals and businesses.",
    author: 'Troy Hooper',
    title: 'CEO',
    company: 'Pepper Lunch',
  },
];

export function Testimonials() {
  return (
    <section className={styles.testimonials} aria-labelledby="testimonials-heading">
      <div className={styles.container}>
        <h2 id="testimonials-heading" className={styles.sectionTitle}>
          What Our Partners Say
        </h2>
        <p className={styles.sectionSubtitle}>
          Don't just take our word for it. Hear from the brands and leaders we've worked with.
        </p>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <article key={index} className={styles.testimonialCard}>
              <blockquote className={styles.quote}>
                <p>"{testimonial.quote}"</p>
              </blockquote>
              <footer className={styles.author}>
                <div className={styles.avatar}>
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div className={styles.authorInfo}>
                  <cite className={styles.authorName}>{testimonial.author}</cite>
                  <span className={styles.authorTitle}>{testimonial.title}</span>
                  <span className={styles.authorCompany}>{testimonial.company}</span>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
