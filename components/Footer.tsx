
import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="font-serif-elegant text-2xl mb-2">
              <span className="text-[#b8a068]">BriSkin</span> Dermatologia
            </p>
            <p className="text-sm text-stone-400">Cuidado dermatológico personalizado</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://wa.me/5519989669889" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#b8a068] transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/briskin.dermatologia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#b8a068] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-stone-500">© 2024 Briskin Dermatologia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
