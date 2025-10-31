
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
  'https://ibb.co/xSwsFzPQ', // Chevrolet onix
  'https://ibb.co/VW0tjVcj', // Puente y carretera
  'https://ibb.co/C3YhGmDw', // Van en la carretera
  'https://ibb.co/0jGNG6v7',   // Camino de montaña
  'https://ibb.co/B58JM0Qv',   // Camino de montaña2
  'https://ibb.co/8DnHfkJ2',   // Camino de montaña3
  'https://ibb.co/HTSxSDwT',   // Camino de montaña4
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
  'https://picsum.photos/id/1015/600/400', // Litoral Central
  'https://picsum.photos/id/1043/600/400', // Montaña
  'https://picsum.photos/id/1055/600/400', // Río
  'https://picsum.photos/id/175/600/400',  // 5ta Región (Valparaíso)
  'https://picsum.photos/id/1059/600/400', // 6ta Región (Viñedos)
  'https://picsum.photos/id/1039/600/400', // Playa (Litoral Central)
  'https://picsum.photos/id/20/600/400',   // Camino en Montaña
  'https://picsum.photos/id/305/600/400',  // Río con Corrientes
];
