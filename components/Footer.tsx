
import React from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram, FaCar } from 'react-icons/fa';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  // Formatear el número para mostrarlo con un espacio, pero mantener el original para los enlaces
  const formattedPhone = `${BUSINESS_INFO.phone.slice(0, 3)} ${BUSINESS_INFO.phone.slice(3)}`;

  return (
    <footer id="contacto" className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <FaCar className="text-3xl text-blue-400" />
              <span className="text-2xl font-bold">
                <span className="text-blue-400">Transportes</span>
                <span className="text-yellow-500"> Roly</span>
              </span>
            </div>
            <p className="text-gray-400">
              Su opción confiable para traslados privados y especiales. Seguridad, puntualidad y confort en cada viaje.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto y Pago Seguro</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaPhone className="mr-3 text-blue-400" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-gray-300 hover:text-white transition-colors">{formattedPhone}</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-blue-400" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-gray-300 hover:text-white transition-colors">{BUSINESS_INFO.email}</a>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="mr-3 text-blue-400" />
                <a href={`https://wa.me/${BUSINESS_INFO.phone}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">WhatsApp Directo</a>
              </li>
              <li className="mt-4">
                <div className="bg-white rounded-lg p-4 shadow-lg border-2 border-[#6d2580]">
                  <a
                    href="https://www.webpay.cl/form-pay/310194?utm_source=transbank&utm_medium=app&utm_campaign=link_apptransbank"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Pagar con Webpay"
                    className="flex flex-col items-center group text-center"
                  >
                    <div className="flex flex-col items-center justify-center font-bold mb-1">
                      <div className="text-2xl leading-none" style={{ fontFamily: 'sans-serif' }}>
                        <span className="text-[#ec008c] relative top-[-0.2em] mr-[-0.1em]">.</span>
                        <span className="text-[#6d2580]">webpay</span>
                        <span className="text-[#6d2580]">.</span>
                        <span className="text-[#ec008c]">CL</span>
                      </div>
                      <div className="text-sm text-[#ec008c] font-semibold tracking-wide ml-px" style={{ fontFamily: 'sans-serif' }}>
                        transbank.
                      </div>
                    </div>
                    <span className="mt-1 text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">Transportes Roly</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
                <div className="relative group">
                    <a href={BUSINESS_INFO.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition-colors text-2xl"><FaFacebook /></a>
                    <div className="absolute bottom-full mb-2 w-max bg-gray-900 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        Síguenos en Facebook
                        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-gray-900"></div>
                    </div>
                </div>
                 <div className="relative group">
                    <a href={BUSINESS_INFO.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500 transition-colors text-2xl"><FaInstagram /></a>
                     <div className="absolute bottom-full mb-2 w-max bg-gray-900 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        Síguenos en Instagram
                        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-gray-900"></div>
                    </div>
                </div>
            </div>
          </div>
          
          <div className="md:col-span-3 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Ubicación Casino Monticello</h4>
            <div className="overflow-hidden rounded-lg shadow-lg h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13247.35553433953!2d-70.717515!3d-33.9963688!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96631b0a8863f535%3A0x6a2c286595507743!2sSun%20Monticello!5e0!3m2!1ses-419!2scl!4v1718911854407!5m2!1ses-419!2scl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;