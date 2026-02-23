
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Sobre', href: 'sobre' },
    { name: 'Médicas', href: 'medicas' },
    { name: 'Serviços', href: 'servicos' },
    { name: 'Espaço', href: 'espaco' },
    { name: 'Contato', href: 'contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Compensação para a altura da navbar fixa
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#fdf4f5]/95 backdrop-blur-sm border-b border-[#f0dcdf] py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, 'hero')}
          className="font-serif-elegant text-2xl tracking-wide text-stone-800"
        >
          <span className="text-[#b8a068]">BriSkin</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={`#${link.href}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm tracking-wider uppercase text-stone-600 hover:text-stone-900 transition-colors relative group"
            >
              {link.name}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-[#b8a068] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <a 
          href="https://wa.me/5519989669889" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white text-xs tracking-wider uppercase rounded-none hover:bg-stone-800 transition-colors"
        >
          Agendar
        </a>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-stone-700" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 absolute top-full left-0 right-0 animate-fade-in shadow-xl">
          <div className="px-6 py-6 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={`#${link.href}`}
                className="text-sm tracking-wider uppercase text-stone-600"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/5519989669889" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block text-center px-5 py-3 bg-stone-900 text-white text-xs tracking-wider uppercase"
              onClick={() => setIsOpen(false)}
            >
              Agendar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
