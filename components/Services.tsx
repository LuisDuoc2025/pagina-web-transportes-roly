
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Nuestros Servicios</h2>
          <p className="text-gray-600 mt-2">Transporte confiable y a su medida para cada ocasión.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <service.icon className="text-4xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href="#contacto" className="text-blue-600 font-semibold hover:underline">
                Más información
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
