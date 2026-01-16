import { HiArrowRight } from 'react-icons/hi';
import { VideoEmbed } from '../VideoEmbed';
import { SocialVideoEmbed } from '../SocialVideoEmbed';
import styles from './Services.module.css';

interface VideoSample {
  id: string;
  title: string;
}

interface PerfectForItem {
  highlight: string;
  subtext: string;
}

interface SponsorshipShow {
  name: string;
  description: string;
  image: string;
  price: string;
  priceNote: string;
  partnership?: string;
}

interface SocialVideo {
  src: string;
  poster: string;
  title: string;
}

interface Service {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  perfectFor: PerfectForItem[];
  features: string[];
  startingPrice: string;
  priceNote: string;
  ctaText: string;
  theme: 'dark' | 'darker';
  videos?: VideoSample[];
  samplesLabel?: string;
  sponsorshipShows?: SponsorshipShow[];
  socialVideos?: SocialVideo[];
}

const services: Service[] = [
  {
    id: 'virtual-production',
    number: '01',
    title: 'Virtual Production',
    tagline: 'Build Your Show From Anywhere',
    description: 'Professional podcast and video production for remote teams. We handle everything from recording to publishing, creating YouTube-optimized content that builds your brand and reaches your audience.',
    perfectFor: [
      { highlight: 'Small Startups', subtext: 'needing help with building an audience and brand awareness' },
      { highlight: 'Business Leaders', subtext: 'ready to become industry thought leaders' },
      { highlight: 'Emerging Brands', subtext: 'seeking a low-overhead podcast production solution' },
      { highlight: 'In-House Teams', subtext: 'looking to supplement their own production efforts' },
    ],
    features: [
      'Remote recording with studio-quality audio',
      'Professional editing and post-production',
      'YouTube optimization and SEO',
      'Thumbnail and branding design',
      'Multi-platform distribution',
      'Monthly content strategy sessions',
      'Social-ready content clips'
    ],
    startingPrice: '$3,500',
    priceNote: 'per month',
    ctaText: 'Build Your Show',
    theme: 'dark',
    videos: [
      { id: 'DiNdMsMTgSs', title: 'Virtual Production Sample 1' },
      { id: 'PUmRTvLiq0c', title: 'Virtual Production Sample 2' },
      { id: 'CSI2zBk3IUs', title: 'Virtual Production Sample 3' },
    ],
    samplesLabel: 'See Our Virtual Production Work',
  },
  {
    id: 'in-person-production',
    number: '02',
    title: 'In-Person Production',
    tagline: 'Full Production Team On Location',
    description: 'We bring our complete production crew to your event, conference, or location. Capture keynotes, interviews, testimonials, case studies, behind-the-scenes content, and create a content library that drives engagement year-round.',
    perfectFor: [
      { highlight: 'Event Hosts', subtext: 'hosting conferences or industry events to create content for their attendees' },
      { highlight: 'Enterprise Brands', subtext: 'introducing new product lines or initiatives to the market' },
      { highlight: 'Organizations', subtext: 'seeking to personalize their brand and improve storytelling' },
      { highlight: 'Executives', subtext: 'expanding their personal brand and thought leadership' },
    ],
    features: [
      'Full video and audio production team',
      'Professional equipment and lighting',
      'Real-time content capture and editing',
      'Same-day social media clips',
      'Documentary-style storytelling',
      'Post-event content packages',
    ],
    startingPrice: '$10,000',
    priceNote: 'per engagement',
    ctaText: 'Book Our Team',
    theme: 'darker',
    videos: [
      { id: 'Vh58fL27sxE', title: 'In-Person Production Sample 1' },
      { id: 'mzl7ciI8Glg', title: 'In-Person Production Sample 2' },
      { id: '9I_RIxcAbXg', title: 'In-Person Production Sample 3' },
    ],
    samplesLabel: 'See Our In-Person Production Work',
  },
  {
    id: 'sponsorship',
    number: '03',
    title: 'Sponsorship',
    tagline: 'Reach Decision Makers Directly',
    description: 'Sponsor one of our established shows and connect with an engaged audience of restaurant technology leaders. Our shows reach 71M+ video views and the decision-makers who shape the industry.',
    perfectFor: [
      { highlight: 'Tech Vendors', subtext: 'looking to reach restaurant operators' },
      { highlight: 'B2B Brands', subtext: 'targeting the hospitality industry' },
      { highlight: 'Companies', subtext: 'wanting exposure without production overhead' },
      { highlight: 'Niche Brands', subtext: 'seeking a targeted audience' },
    ],
    features: [
      'Pre-roll and mid-roll placements',
      'Newsletter feature to 30K+ subscribers',
      'Social media amplification',
      'Custom integration opportunities',
      'Detailed analytics and reporting',
      'Guest appearance opportunities',
    ],
    startingPrice: '$10,000',
    priceNote: 'per quarter',
    ctaText: 'Become a Sponsor',
    theme: 'dark',
    sponsorshipShows: [
      {
        name: 'Restaurant Influencers',
        description: 'Our flagship show featuring conversations with the biggest names in food, beverage, and hospitality.',
        image: '/shows/restaurant-influencers.jpg',
        price: '$50,000',
        priceNote: 'per quarter',
        partnership: 'In partnership with Entrepreneur',
      },
      {
        name: 'Digital Hospitality',
        description: 'Deep dives into restaurant technology, operations, and the future of the industry.',
        image: '/shows/digital-hospitalitly.jpeg',
        price: '$20,000',
        priceNote: 'per quarter',
      },
      {
        name: 'Restaurant Technology',
        description: 'Weekly Substack newsletter reaching decision-makers in restaurant tech.',
        image: '/shows/restaurant-technology.jpg',
        price: '$10,000',
        priceNote: 'per quarter',
      },
    ],
  },
  {
    id: 'social-media',
    number: '04',
    title: 'Social Media Management',
    tagline: 'Consistent Content, Zero Hassle',
    description: 'We produce, schedule, and publish engaging social content on your behalf. From short-form video to LinkedIn thought leadership, we keep your brand active and growing across all platforms.',
    perfectFor: [
      { highlight: 'Busy Executives', subtext: 'Who lack time for social media' },
      { highlight: 'Growing Brands', subtext: 'Wanting consistent presence' },
      { highlight: 'Companies', subtext: 'Looking to repurpose existing content' },
      { highlight: 'Thought Leaders', subtext: 'Building their personal brand' },
    ],
    features: [
      'Content calendar planning',
      'Short-form video production',
      'Platform-native content creation',
      'Community management',
      'Performance analytics',
      'Trend monitoring and optimization',
    ],
    startingPrice: '$5,000',
    priceNote: 'per month',
    ctaText: 'Grow Your Brand',
    theme: 'darker',
    socialVideos: [
      { src: '/video/social/behind-the-numbers.mp4', poster: '/video/social/behind-the-numbers-r365.jpg', title: 'Behind the Numbers' },
      { src: '/video/social/eero.mp4', poster: '/video/social/eero.jpg', title: 'Eero' },
      { src: '/video/social/miami-sound-bar.mp4', poster: '/video/social/miami-sound-room.jpg', title: 'Miami Sound Room' },
      { src: '/video/social/palona.mp4', poster: '/video/social/palona.jpg', title: 'Palona' },
      { src: '/video/social/ring.mp4', poster: '/video/social/ring.jpg', title: 'Ring' },
      { src: '/video/social/tahini.mp4', poster: '/video/social/tahini.jpg', title: 'Tahini' },
    ],
    samplesLabel: 'Social Content Samples',
  },
  {
    id: 'development',
    number: '05',
    title: 'Website & Software',
    tagline: 'Digital Products That Perform',
    description: 'From stunning websites to custom applications, we build digital products that convert. Modern technology, beautiful design, and performance that drives your business forward.',
    perfectFor: [
      { highlight: 'Brands', subtext: 'Needing a modern web presence' },
      { highlight: 'Companies', subtext: 'Requiring custom internal tools' },
      { highlight: 'Startups', subtext: 'Looking for technical co-pilots' },
      { highlight: 'Restaurants', subtext: 'Needing digital ordering solutions' },
    ],
    features: [
      'Custom website design and development',
      'Web application development',
      'E-commerce solutions',
      'API integrations',
      'Hosting and maintenance',
      'Analytics and optimization',
    ],
    startingPrice: '$10,000',
    priceNote: 'per project',
    ctaText: 'Start Building',
    theme: 'dark',
  },
  {
    id: 'creative-consulting',
    number: '06',
    title: 'Creative Consulting',
    tagline: 'Level Up Your Content Game',
    description: 'Not ready for full production? We coach your team to create professional content in-house. From equipment recommendations to content strategy, we help you build internal capabilities that scale.',
    perfectFor: [
      { highlight: 'In-House Teams', subtext: 'With talent but lacking direction' },
      { highlight: 'Marketing Depts', subtext: 'Building content capabilities' },
      { highlight: 'Founders', subtext: 'Who want to create their own content' },
      { highlight: 'Solo Creators', subtext: 'Looking to level up their craft' },
    ],
    features: [
      'Content strategy development',
      'Equipment and setup recommendations',
      'Recording and editing training',
      'Brand voice and messaging workshops',
      'Platform-specific optimization',
      'Ongoing coaching sessions',
    ],
    startingPrice: '$1,500',
    priceNote: 'per month',
    ctaText: 'Start Learning',
    theme: 'darker',
  },
];

export function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.services} aria-labelledby="services-heading">
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <span className={styles.eyebrow}>Services</span>
          <h2 id="services-heading" className={styles.sectionTitle}>
            What We Do
          </h2>
        </div>
      </div>

      {services.map((service) => (
        <article
          key={service.id}
          id={service.id}
          className={`${styles.serviceSection} ${styles[service.theme]}`}
        >
          <div className={styles.serviceContainer}>
            <div className={styles.serviceNumber}>{service.number}</div>
            
            <div className={styles.serviceMain}>
              <div className={styles.serviceTitleBlock}>
                <span className={styles.serviceEyebrow}>{service.tagline}</span>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </div>
              
              <div className={styles.serviceBody}>
                <p className={styles.serviceDescription}>{service.description}</p>
                
                <ul className={styles.featuresList}>
                  {service.features.map((feature, i) => (
                    <li key={i} className={styles.featureItem}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className={styles.serviceSidebar}>
              <div className={styles.priceBlock}>
                <span className={styles.priceLabel}>Starting at</span>
                <span className={styles.priceValue}>{service.startingPrice}</span>
                <span className={styles.priceNote}>{service.priceNote}</span>
              </div>
              
              <button onClick={scrollToContact} className={styles.ctaButton}>
                <span>{service.ctaText}</span>
                <HiArrowRight className={styles.ctaArrow} />
              </button>
            </div>

            <div className={styles.perfectFor}>
              <h4 className={styles.perfectForLabel}>Perfect for</h4>
              <ul className={styles.perfectForList}>
                {service.perfectFor.map((item, i) => (
                  <li key={i} className={styles.perfectForItem}>
                    <span className={styles.perfectForHighlight}>{item.highlight}</span>
                    <span className={styles.perfectForSubtext}>{item.subtext}</span>
                  </li>
                ))}
              </ul>
            </div>

            {service.videos && service.videos.length > 0 && (
              <div className={styles.videoSamples}>
                <h4 className={styles.samplesLabel}>{service.samplesLabel || 'See Our Work'}</h4>
                <div className={styles.videoGrid}>
                  {service.videos.map((video) => (
                    <VideoEmbed 
                      key={video.id} 
                      videoId={video.id} 
                      title={video.title} 
                    />
                  ))}
                </div>
              </div>
            )}

            {service.socialVideos && service.socialVideos.length > 0 && (
              <div className={styles.socialSamples}>
                <h4 className={styles.samplesLabel}>{service.samplesLabel || 'Social Content'}</h4>
                <div className={styles.socialGrid}>
                  {service.socialVideos.map((video) => (
                    <SocialVideoEmbed
                      key={video.src}
                      src={video.src}
                      poster={video.poster}
                      title={video.title}
                    />
                  ))}
                </div>
              </div>
            )}

            {service.sponsorshipShows && service.sponsorshipShows.length > 0 && (
              <div className={styles.sponsorshipShows}>
                <h4 className={styles.samplesLabel}>Our Shows</h4>
                <div className={styles.showsGrid}>
                  {service.sponsorshipShows.map((show) => (
                    <div key={show.name} className={styles.showCard}>
                      <div className={styles.showImageWrapper}>
                        <img src={show.image} alt={show.name} className={styles.showImage} />
                      </div>
                      <div className={styles.showContent}>
                        <h5 className={styles.showName}>{show.name}</h5>
                        {show.partnership && (
                          <span className={styles.showPartnership}>{show.partnership}</span>
                        )}
                        <p className={styles.showDescription}>{show.description}</p>
                        <div className={styles.showPricing}>
                          <span className={styles.showPriceLabel}>Starting at</span>
                          <div className={styles.showPriceRow}>
                            <span className={styles.showPrice}>{show.price}</span>
                            <span className={styles.showPriceNote}>{show.priceNote}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      ))}
    </section>
  );
}
