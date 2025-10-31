
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import EventsCarousel from './components/EventsCarousel';
import BookingForm from './components/BookingForm';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App: React.FC = () => {

  // Efecto para manejar el scroll suave en todos los enlaces de anclaje
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Busca el elemento 'a' más cercano que tenga un href que empiece con '#'
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        // Asegurarse de que el href no es solo "#"
        if (href && href.length > 1) { 
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez

  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <main>
        <Hero />
        <Services />
        <EventsCarousel />
        <BookingForm />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;
