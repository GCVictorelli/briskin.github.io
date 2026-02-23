
import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants.tsx';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#fdf4f5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase gold-accent mb-4">Depoimentos</p>
          <h2 className="font-serif-elegant text-4xl md:text-5xl font-light text-stone-800 mb-6">Experiência dos Pacientes</h2>
          <div className="w-16 h-[1px] bg-[#b8a068] mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="p-8 bg-[#f7e8ea] rounded-sm hover:shadow-xl transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#b8a068] text-[#b8a068]" />
                ))}
              </div>
              <p className="font-serif-elegant text-lg text-stone-700 italic mb-6">"{t.text}"</p>
              <p className="text-sm text-stone-500">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
