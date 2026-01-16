import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Guests } from './components/Guests';
import { ClientLogos } from './components/ClientLogos';
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
        <Guests />
        <ClientLogos />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
