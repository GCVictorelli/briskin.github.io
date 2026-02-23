
import React from 'react';
import { User, ShieldCheck, Home, Lightbulb } from 'lucide-react';
import { IMAGES } from '../constants';
import Reveal from './Reveal';

const About: React.FC = () => {
  const features = [
    { icon: <User className="w-6 h-6 gold-accent" />, title: 'Atendimento', desc: 'Personalizado' },
    { icon: <ShieldCheck className="w-6 h-6 gold-accent" />, title: 'Médicas', desc: 'Qualificadas' },
    { icon: <Home className="w-6 h-6 gold-accent" />, title: 'Ambiente', desc: 'Moderno' },
    { icon: <Lightbulb className="w-6 h-6 gold-accent" />, title: 'Protocolos', desc: 'Atualizados' },
  ];

  return (
    <section id="sobre" className="py-24 md:py-32 bg-[#fdf4f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-2xl border border-stone-100">
                <img src={IMAGES.INTERIOR_PINK} alt="Consultório Briskin Dermatologia" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-stone-50 -z-10 hidden md:block"></div>
            </div>
          </Reveal>
          
          <div className="order-1 lg:order-2">
            <Reveal delay={200}>
              <p className="text-xs tracking-[0.3em] uppercase gold-accent mb-4 font-semibold">Ambiente exclusivo</p>
              <h2 className="font-serif-elegant text-4xl md:text-5xl font-light text-stone-800 mb-8">A Clínica</h2>
              <div className="w-16 h-[1px] bg-[#b8a068] mb-8"></div>
              <p className="text-base text-stone-600 leading-relaxed mb-8">
                A BriSkin dermatologia foi projetada para oferecer uma experiência personalizada, onde a tecnologia médica encontra o conforto e a privacidade.
              </p>
            </Reveal>
            
            <div className="grid grid-cols-2 gap-6">
              {features.map((f, i) => (
                <Reveal key={i} delay={400 + (i * 100)}>
                  <div className="p-6 bg-[#f7e8ea] rounded-sm border border-[#f0dcdf] h-full">
                    <div className="w-10 h-10 flex items-center justify-center mb-4">
                      {f.icon}
                    </div>
                    <h4 className="font-medium text-stone-800 text-sm mb-1">{f.title}</h4>
                    <p className="text-xs text-stone-500">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
