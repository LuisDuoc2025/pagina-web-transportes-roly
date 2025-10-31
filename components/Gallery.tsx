import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Nuestros Destinos</h2>
          <p className="text-gray-600 mt-2">Explora los lugares a los que te podemos llevar.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
              <img 
                src={src} 
                alt={`Galería de RolyTours ${index + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;