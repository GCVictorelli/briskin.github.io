
import React from 'react';
import { SERVICES } from '../constants.tsx';
import Reveal from './Reveal';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-[#fdf4f5]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase gold-accent mb-4">Especialidades</p>
          <h2 className="font-serif-elegant text-4xl md:text-5xl font-light text-stone-800 mb-6">Nossos Tratamentos</h2>
          <div className="w-16 h-[1px] bg-[#b8a068] mx-auto"></div>
        </Reveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={index * 100}>
              <div 
                className="p-8 bg-[#f7e8ea] rounded-sm text-center group hover:bg-white hover:shadow-2xl transition-all duration-300 transform h-full"
              >
                <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center bg-white rounded-full shadow-sm group-hover:bg-[#b8a068] group-hover:text-white transition-colors duration-300">
                  <span className="gold-accent group-hover:text-white">
                    {service.icon}
                  </span>
                </div>
                <h3 className="font-serif-elegant text-xl text-stone-800 mb-2">{service.title}</h3>
                <p className="text-sm text-stone-500">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
