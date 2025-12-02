import React, { useState } from 'react';
import { Menu, X, DollarSign } from 'lucide-react';
import { NAV_LINKS, CHECKOUT_URL } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    
    if (id === '#' || id === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection('#')}
          className="flex items-center gap-2 text-brand-700 font-black text-xl md:text-2xl tracking-tighter cursor-pointer bg-transparent border-none hover:opacity-80 transition-opacity"
        >
          <div className="bg-brand-600 text-white p-1.5 rounded-lg">
            <DollarSign size={24} strokeWidth={3} />
          </div>
          DOMÍNIO<span className="text-gray-800">FINANCEIRO</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button 
              key={link.name} 
              onClick={() => scrollToSection(link.href)}
              className="text-gray-600 font-medium hover:text-brand-600 transition-colors text-sm uppercase tracking-wide cursor-pointer bg-transparent border-none"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a 
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-brand-700 transition-all shadow-lg hover:shadow-brand-500/30 text-sm inline-block"
          >
            COMPRAR AGORA
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-700 p-2 bg-transparent border-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {NAV_LINKS.map((link) => (
            <button 
              key={link.name} 
              onClick={() => scrollToSection(link.href)}
              className="text-gray-700 font-semibold py-2 border-b border-gray-50 last:border-0 cursor-pointer text-left bg-transparent"
            >
              {link.name}
            </button>
          ))}
          <a 
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-600 text-center text-white py-3 rounded-lg font-bold mt-2"
          >
            QUERO ACESSAR AGORA
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;