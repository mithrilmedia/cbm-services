import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Guests } from './components/Guests';
import { ClientLogos } from './components/ClientLogos';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { CalendlyModal } from './components/CalendlyModal';
import { CalendlyProvider, useCalendly } from './context/CalendlyContext';

function AppContent() {
  const { isOpen, closeCalendly } = useCalendly();

  return (
    <>
      <a href="#main-content" className="sr-only">
        Skip to main content
      </a>
      <main id="main-content">
        <Hero />
        <Services />
        <Guests />
        <ClientLogos />
        <CTA />
      </main>
      <Footer />
      <CalendlyModal isOpen={isOpen} onClose={closeCalendly} />
    </>
  );
}

function App() {
  return (
    <CalendlyProvider>
      <AppContent />
    </CalendlyProvider>
  );
}

export default App;
