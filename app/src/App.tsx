import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Shows } from './components/Shows';
import { Guests } from './components/Guests';
import { ClientLogos } from './components/ClientLogos';
import { Stats } from './components/Stats';
import { RestaurantTech } from './components/RestaurantTech';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <a href="#main-content" className="sr-only">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Services />
        <Shows />
        <Guests />
        <ClientLogos />
        <Stats />
        <RestaurantTech />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
