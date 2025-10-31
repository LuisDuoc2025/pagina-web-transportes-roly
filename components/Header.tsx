
import React, { useState } from 'react';
import { FaCar, FaBars, FaTimes } from 'react-icons/fa';
import { BUSINESS_INFO } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Eventos', href: '#eventos' },
    { name: 'Reservas', href: '#reservas' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-2">
          <FaCar className="text-3xl text-blue-600" />
          <span className="text-2xl font-bold">
            <span className="text-blue-600">Transportes</span>
            <span className="text-yellow-500"> Roly</span>
          </span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              {link.name}
            </a>
          ))}
        </nav>

        <a href="#reservas" className="hidden md:inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
          Reservar
        </a>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white absolute top-full left-0 w-full shadow-lg`}>
        <nav className="flex flex-col items-center p-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="py-2 text-lg text-gray-600 hover:text-blue-600 w-full text-center">
              {link.name}
            </a>
          ))}
          <a href="#reservas" onClick={() => setIsOpen(false)} className="mt-4 bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 w-full text-center">
            Reservar
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;