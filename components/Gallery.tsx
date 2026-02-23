
import React from 'react';
import { IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const images = [
    { url: IMAGES.LOGO_WALL_TEAM, alt: 'Equipe Briskin com Logo' },
    { url: IMAGES.RECEPTION_TEAM, alt: 'Dra. Daniele e Dra. Denise na Recepção' },
    { url: IMAGES.BUILDING_FACADE, alt: 'Fachada Torre Medical Indaiatuba' },
    { url: IMAGES.INTERIOR_PINK, alt: 'Interior da Clínica Consultório' },
    { url: IMAGES.LOGO_CLOSEUP, alt: 'Logotipo Briskin Dermatologia' },
    { url: IMAGES.HALLWAY_TEAM, alt: 'Médicas no Corredor da Clínica' },
  ];

  return (
    <section id="espaco" className="py-24 md:py-32 bg-[#f7e8ea]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase gold-accent mb-4 font-semibold">Galeria</p>
          <h2 className="font-serif-elegant text-4xl md:text-5xl font-light text-stone-800 mb-6">Nosso Espaço</h2>
          <div className="w-16 h-[1px] bg-[#b8a068] mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-sm overflow-hidden shadow-md group relative ${
                index === 0 || index === 3 ? 'md:col-span-1 md:row-span-1' : ''
              }`}
            >
              <img 
                src={img.url} 
                className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110" 
                alt={img.alt} 
              />
              <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute inset-0 border-[10px] border-white/0 group-hover:border-white/20 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
