// FIX: Import React to provide the 'React' namespace for ElementType.
import React from 'react';

export interface Event {
  image: string;
  title: string;
  date: string;
  description: string;
}

export interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface Testimonial {
  photo: string;
  name: string;
  comment: string;
}