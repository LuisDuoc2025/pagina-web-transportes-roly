
import type { Event, Testimonial } from './types';
import { FaCar, FaMapMarkedAlt, FaPlaneDeparture, FaCalendarCheck } from 'react-icons/fa';

export const BUSINESS_INFO = {
  name: 'Transportes Roly',
  phone: '+56975520554',
  email: 'transportesroly@gmail.com',
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
};

export const HERO_CAROUSEL_IMAGES = [
  'https://i.ibb.co/LzBPN9bf/Hero-1.jpg', // Chevrolet onix
  'https://i.ibb.co/kgVxHKsH/Hero-2.jpg', // Puente y carretera
  'https://i.ibb.co/bMCz9QD6/Hero-3.jpg', // Van en la carretera
  'https://i.ibb.co/zh4c4BDM/Hero-4.jpg',   // Camino de montaña
  'https://i.ibb.co/ycLCjHZK/Hero-5.jpg',   // Camino de montaña2
  'https://i.ibb.co/TBDs7yZR/Hero-6.jpg',   // Camino de montaña3
  'https://i.ibb.co/ZzjYj64z/Hero-7.jpg',   // Camino de montaña4
];

export const SERVICES = [
  {
    icon: FaCar,
    title: 'Traslados Casino Monticello',
    description: 'Viajes directos, seguros y puntuales al centro de entretención más grande de Chile.',
  },
  {
    icon: FaMapMarkedAlt,
    title: 'Viajes dentro de Santiago',
    description: 'Movilidad eficiente para sus compromisos, tours o traslados al aeropuerto en la capital.',
  },
  {
    icon: FaPlaneDeparture,
    title: 'Viajes fuera de Santiago',
    description: 'Descubra los atractivos turísticos de la zona central con nuestros viajes privados.',
  },
  {
    icon: FaCalendarCheck,
    title: 'Eventos Especiales',
    description: 'Servicio de transporte para matrimonios, conciertos y eventos corporativos con total comodidad.',
  },
];

/* 
  ================================================================
  ===> ¡AQUÍ PUEDES AGREGAR, MODIFICAR O ELIMINAR EVENTOS! <===
  ================================================================
  Simplemente sigue el formato de los objetos de ejemplo.
  - image: URL de la imagen (puedes usar https://picsum.photos/800/600?random=NUMERO)
  - title: Título del evento
  - date: Fecha del evento
  - description: Descripción corta
*/
export const EVENTS: Event[] = [
  {
    image: 'https://picsum.photos/800/600?random=1',
    title: 'Concierto en Monticello',
    date: '15 Noviembre',
    description: 'No te pierdas el show en vivo de tu artista favorito. Te llevamos y traemos con seguridad.',
  },
  {
    image: 'https://picsum.photos/800/600?random=2',
    title: 'Show de Stand Up',
    date: '22 Noviembre',
    description: 'Una noche llena de risas te espera. Olvídate de manejar, nosotros nos encargamos.',
  },
  {
    image: 'https://picsum.photos/800/600?random=3',
    title: 'Noche de Poker VIP',
    date: '30 Noviembre',
    description: 'Participa en el torneo más exclusivo. Llega con estilo y puntualidad con nuestro servicio VIP.',
  },
    {
    image: 'https://picsum.photos/800/600?random=4',
    title: 'Festival Gastronómico',
    date: '5 Diciembre',
    description: 'Disfruta de los mejores sabores sin preocuparte por el regreso. Viaja cómodo con RolyTours.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    photo: 'https://picsum.photos/100/100?random=10',
    name: 'Ana Pérez',
    comment: '¡Excelente servicio! Muy puntuales y amables. El viaje al casino fue muy cómodo y seguro. Totalmente recomendados.',
  },
  {
    photo: 'https://picsum.photos/100/100?random=11',
    name: 'Carlos Rodríguez',
    comment: 'Contraté un viaje especial para mi familia y todo salió perfecto. El vehículo estaba impecable. Repetiré sin duda.',
  },
  {
    photo: 'https://picsum.photos/100/100?random=12',
    name: 'Sofía González',
    comment: 'La mejor opción para ir a los conciertos en Monticello. Me despreocupo del auto y disfruto el evento al máximo.',
  },
];

export const GALLERY_IMAGES = [
  'https://i.ibb.co/xdjQrxB/galeria-1.jpg', // Litoral Central
  'https://i.ibb.co/20rn8MGp/galeria-2.jpg', // Montaña
  'https://i.ibb.co/x9FsNVX/galeria-3.jpg', // Río
  'https://i.ibb.co/5WJ3dH6n/galeria-4.jpg',  // 5ta Región (Valparaíso)
  'https://i.ibb.co/8wHT4Z1/galeria-5.jpg', // 6ta Región (Viñedos)
  'https://i.ibb.co/7NJzbpS7/galeria-6.jpg', // Playa (Litoral Central)
  'https://i.ibb.co/60cm8kj9/galeria-7.jpg',   // Camino en Montaña
  'https://i.ibb.co/9krvsk83/galeria-8.jpg',  // Río con Corrientes
];
