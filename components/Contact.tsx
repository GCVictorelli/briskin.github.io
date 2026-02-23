
import React from 'react';
import { MapPin, Instagram, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 md:py-32 bg-[#f7e8ea]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase gold-accent mb-4">Contato</p>
            <h2 className="font-serif-elegant text-4xl md:text-5xl font-light text-stone-800 mb-8">Fale Conosco</h2>
            <div className="w-16 h-[1px] bg-[#b8a068] mb-8"></div>
            <p className="text-stone-600 mb-10">
              Entre em contato pelo WhatsApp ou Instagram para agendar sua consulta de forma prática e segura.
            </p>
            <div className="space-y-6">
              <a 
                href="https://wa.me/5519989669889" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 p-5 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-stone-500">WhatsApp</p>
                  <p className="font-medium text-stone-800">(19) 98966-9889</p>
                </div>
              </a>

              <a 
                href="https://www.instagram.com/briskin.dermatologia" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 p-5 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-stone-500">Instagram</p>
                  <p className="font-medium text-stone-800">@briskin.dermatologia</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 bg-white rounded-sm shadow-sm">
                <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-stone-500">Endereço</p>
                  <p className="font-medium text-stone-800">Rua das Orquídeas, 667 – Sala 808</p>
                  <p className="text-stone-600">Jardim Pau Preto, Indaiatuba - SP</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-stone-200 rounded-sm overflow-hidden min-h-[400px] relative shadow-inner">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.123!2d-47.22!3d-23.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA0JzQ4LjAiUyA0N8KwMTMnMTIuMCJX!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr" 
              className="absolute inset-0 w-full h-full border-0 grayscale opacity-80" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
