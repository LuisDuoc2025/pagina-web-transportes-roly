
import React, { useState, useEffect, useCallback } from 'react';
import { EVENTS } from '../constants';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const EventsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % EVENTS.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + EVENTS.length) % EVENTS.length);
  };
  
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <section id="eventos" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Próximos Eventos</h2>
          <p className="text-gray-600 mt-2">No te pierdas los mejores shows. ¡Nosotros te llevamos!</p>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-2xl h-[500px]">
          {EVENTS.map((event, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white text-center p-4">
                <h3 className="text-3xl font-bold mb-2">{event.title}</h3>
                <p className="text-xl font-semibold bg-blue-600 px-3 py-1 rounded-full mb-4">{event.date}</p>
                <p className="max-w-md mb-6">{event.description}</p>
                <a href="#reservas" className="bg-white text-blue-600 font-bold py-2 px-6 rounded-lg hover:bg-gray-200 transition-colors">
                  Reservar Traslado
                </a>
              </div>
            </div>
          ))}
          
          <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 text-white p-3 rounded-full hover:bg-white/50 transition-colors">
            <FaChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 text-white p-3 rounded-full hover:bg-white/50 transition-colors">
            <FaChevronRight size={24} />
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {EVENTS.map((_, index) => (
                <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
                />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsCarousel;
