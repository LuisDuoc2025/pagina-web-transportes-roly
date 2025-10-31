
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Lo que dicen nuestros clientes</h2>
          <p className="text-gray-600 mt-2">La satisfacción y seguridad de nuestros pasajeros es nuestra prioridad.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
              <p className="text-gray-600 mb-6 italic">"{testimonial.comment}"</p>
              <div className="flex items-center">
                <img src={testimonial.photo} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
