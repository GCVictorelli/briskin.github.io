
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { IMAGES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-gradient min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <p className="text-xs tracking-[0.3em] uppercase gold-accent mb-6 font-semibold">Dermatologia Clínica & Estética</p>
            <h1 className="font-serif-elegant text-5xl md:text-6xl lg:text-7xl font-light text-stone-800 leading-tight mb-8">
              <span className="text-[#b8a068]">BriSkin</span><br />Dermatologia
            </h1>
            <p className="text-lg md:text-xl font-light text-stone-600 leading-relaxed mb-4 max-w-lg">
              Excelência e sofisticação no cuidado com a sua pele em Indaiatuba.
            </p>
            <p className="text-base text-stone-500 leading-relaxed mb-10 max-w-lg">
              A Dra. Daniele e a Dra. Denise convidam você para conhecer um novo conceito em dermatologia personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/5519989669889" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-stone-900 text-white text-sm tracking-wider uppercase hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5" /> 
                Agendar Consulta 
              </a> 
              <a 
                href="#contato" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-stone-300 text-stone-700 text-sm tracking-wider uppercase hover:border-stone-900 hover:text-stone-900 transition-colors"
              >
                Onde Estamos 
              </a>
            </div>
          </div>
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="aspect-[4/5] bg-stone-100 rounded-sm overflow-hidden relative shadow-2xl border border-stone-100">
              <img 
                src={IMAGES.LOGO_WALL_TEAM} 
                alt="Dra. Daniele e Dra. Denise - Briskin Dermatologia" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
                <p className="font-serif-elegant text-white text-xl italic">Ciência e Beleza em Harmonia</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-stone-200 -z-10"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-stone-50 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
