
import React from 'react';
import { Heart } from 'lucide-react';
import { DOCTORS } from '../constants.tsx';
import Reveal from './Reveal';

const Doctors: React.FC = () => {
  return (
    <section id="medicas" className="py-24 md:py-32 bg-[#f7e8ea] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase gold-accent mb-4">Equipe Médica</p>
          <h2 className="font-serif-elegant text-4xl md:text-5xl font-light text-stone-800 mb-6">Nossas especialistas</h2>
          <div className="w-16 h-[1px] bg-[#b8a068] mx-auto"></div>
        </Reveal>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {DOCTORS.map((doctor, index) => (
            <Reveal key={doctor.id} delay={index * 200}>
              <div className="group bg-[#fdf4f5] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 gold-accent fill-transparent group-hover:fill-[#b8a068] transition-all" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-serif-elegant text-2xl text-stone-800 mb-2">{doctor.name}</h3>
                  <p className="text-xs tracking-wider uppercase gold-accent mb-4">{doctor.role}</p>
                  <div className="text-sm text-stone-600 leading-relaxed space-y-1">
                    {doctor.description.map((line, i) => (
                      <p key={i} className={i === 0 ? "font-semibold text-stone-800 mb-2" : ""}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
