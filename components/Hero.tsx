import React, { useState, useEffect } from 'react';
import { HERO_CAROUSEL_IMAGES } from '../constants';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Pre-carga las imágenes del carrusel para asegurar transiciones fluidas
  useEffect(() => {
    HERO_CAROUSEL_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = `${src}?grayscale&blur=2`; // Precarga la imagen con los mismos filtros
    });
  }, []);

  // Cambia la imagen activa cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_CAROUSEL_IMAGES.length);
    }, 5000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-white overflow-hidden">
      {/* Carrusel de Imágenes de Fondo */}
      {HERO_CAROUSEL_IMAGES.map((imageUrl, index) => (
        <div
          key={index}
          aria-hidden={index !== currentImageIndex}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url('${imageUrl}?grayscale&blur=2')` }}
        ></div>
      ))}
      
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg animate-fade-in-down">
          Traslados Seguros al Casino Monticello
        </h1>
        <div className="mb-8 animate-fade-in-up">
          <p className="text-lg md:text-2xl font-light drop-shadow-md">
            Viajes cómodos desde Santiago - Servicio privado y compartido
          </p>
          <p className="text-lg md:text-2xl font-light drop-shadow-md mt-2">
            tu móvil de confianza
          </p>
        </div>
        <a href="#reservas" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
          Reservar Ahora
        </a>
      </div>
    </section>
  );
};

export default Hero;