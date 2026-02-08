
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Doctors from './components/Doctors';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-stone-200 selection:text-stone-900">
      <Navbar isScrolled={isScrolled} />
      <main>
        <Hero />
        <About />
        <Doctors />
        <Services />
        <section className="py-20 bg-stone-900 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif-elegant text-3xl md:text-4xl font-light mb-6">Agende sua Consulta</h2>
            <p className="text-stone-400 mb-8 max-w-xl mx-auto">Escolha a melhor forma de agendar seu atendimento de maneira prática e segura.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5519989669889" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-stone-900 text-sm tracking-wider uppercase hover:bg-stone-100 transition-colors"
              >
                Agendar pelo WhatsApp
              </a>
              <a 
                href="https://www.instagram.com/briskin.dermatologia" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/30 text-white text-sm tracking-wider uppercase hover:bg-white/10 transition-colors"
              >
                Seguir no Instagram
              </a>
            </div>
          </div>
        </section>
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default App;
