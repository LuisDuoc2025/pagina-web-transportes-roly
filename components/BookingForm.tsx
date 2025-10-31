import React, { useState } from 'react';
import { BUSINESS_INFO } from '../constants';
import { FaUser, FaPhone, FaEnvelope, FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaCommentDots } from 'react-icons/fa';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    destination: 'Casino Monticello',
    passengers: '1',
    comments: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, date, destination, passengers, comments } = formData;
    const message = `Hola, quiero reservar un traslado:
- Nombre: ${name}
- Fecha: ${date}
- Destino: ${destination}
- Pasajeros: ${passengers}
- Comentarios: ${comments}`;
    
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="reservas" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Realiza tu Reserva</h2>
          <p className="text-gray-600 mt-2">Completa el formulario y te contactaremos a la brevedad por WhatsApp.</p>
        </div>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-2xl border-4 border-yellow-500">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre Completo</label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ej: Juan Pérez" />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Teléfono / WhatsApp</label>
              <div className="relative">
                <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="+56 9 1234 5678" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="ejemplo@correo.com" />
              </div>
            </div>
            <div>
              <label htmlFor="date" className="block text-gray-700 font-medium mb-2">Fecha del Viaje</label>
               <div className="relative">
                <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div>
              <label htmlFor="destination" className="block text-gray-700 font-medium mb-2">Destino</label>
              <div className="relative">
                 <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10" />
                 <select id="destination" name="destination" value={formData.destination} onChange={handleChange} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none">
                    <option>Casino Monticello</option>
                    <option>Aeropuerto</option>
                    <option>Dentro de Santiago</option>
                    <option>Fuera de Santiago</option>
                    <option>Otro</option>
                 </select>
                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
             <div className="md:col-span-2">
               <label htmlFor="passengers" className="block text-gray-700 font-medium mb-2">Número de Pasajeros</label>
               <div className="relative">
                 <FaUsers className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                 <input type="number" id="passengers" name="passengers" min="1" value={formData.passengers} onChange={handleChange} required className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
               </div>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="comments" className="block text-gray-700 font-medium mb-2">Comentarios (Opcional)</label>
              <div className="relative">
                 <FaCommentDots className="absolute left-3 top-4 text-gray-400" />
                 <textarea id="comments" name="comments" rows={4} value={formData.comments} onChange={handleChange} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="¿Necesitas silla de bebé, tienes equipaje extra, etc.?"></textarea>
              </div>
            </div>
            <div className="md:col-span-2 text-center">
              <button type="submit" className="bg-blue-600 text-white font-bold py-3 px-12 rounded-lg text-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
                Enviar Reserva por WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;