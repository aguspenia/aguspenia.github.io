
import React, { useState, useEffect } from 'react';
import { TEXTS, MEDIA_URLS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: TEXTS.NAV.HOME, id: 'inicio' },
    { label: TEXTS.NAV.ABOUT, id: 'el-estudio' },
    { label: TEXTS.NAV.SERVICES, id: 'servicios' },
    { label: TEXTS.NAV.CONTACT, id: 'contacto' },
  ];

  // Función para manejar el scroll programático
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Calculamos la posición considerando el offset del navbar
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-700 ${isScrolled ? 'bg-white shadow-2xl py-3' : 'bg-transparent py-12 md:py-16'}`}>
      <div className="max-w-[98%] 2xl:max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 flex justify-between items-center">
        
        {/* Contenedor del Logo */}
        <a 
          href="#inicio" 
          onClick={(e) => handleNavClick(e, 'inicio')}
          className="flex items-center space-x-8 transition-transform hover:scale-[1.02] duration-500"
        >
          <div className="flex items-center">
            {!logoError ? (
              <img 
                src={MEDIA_URLS.LOGO} 
                alt="Sierra Logo" 
                className={`w-auto object-contain transition-all duration-700 drop-shadow-2xl ${isScrolled ? 'h-12 md:h-14' : 'h-20 md:h-24'}`}
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="w-14 h-14 border-2 border-[#c5a059] flex items-center justify-center font-brand text-[#c5a059] text-3xl font-bold">
                S&A
              </div>
            )}
          </div>
          
          <div className={`flex flex-col border-l-2 pl-8 py-2 transition-colors duration-500 ${isScrolled ? 'border-[#c5a059]/20' : 'border-white/20'}`}>
            <span className={`font-brand text-3xl md:text-4xl font-semibold tracking-[0.05em] leading-none ${isScrolled ? 'text-[#0a192f]' : 'text-white'}`}>
              SIERRA
            </span>
            <span className={`text-[10px] md:text-[12px] font-bold tracking-[0.5em] uppercase mt-2 ${isScrolled ? 'text-[#c5a059]' : 'text-[#c5a059]'}`}>
              ESTUDIO JURÍDICO
            </span>
          </div>
        </a>
        
        {/* Menú Desktop */}
        <div className="hidden lg:block">
          <div className="flex items-center space-x-16 xl:space-x-24">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-[13px] font-bold tracking-[0.4em] transition-all duration-500 relative group uppercase ${isScrolled ? 'text-[#0a192f]' : 'text-white'}`}
              >
                {link.label}
                <span className="absolute -bottom-3 left-0 w-0 h-[1.5px] bg-[#c5a059] transition-all duration-500 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Botón Móvil */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(true)} className={`p-3 transition-colors ${isScrolled ? 'text-[#0a192f]' : 'text-white'}`}>
            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>

      {/* Menú Móvil Fullscreen */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#0a192f] z-[200] flex flex-col items-center justify-center space-y-16 animate-[fadeIn_0.5s_ease-out]">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-12 right-12 text-[#c5a059] hover:rotate-90 transition-transform duration-500">
            <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`} 
              onClick={(e) => handleNavClick(e, link.id)} 
              className="text-white text-4xl font-brand tracking-[0.3em] uppercase hover:text-[#c5a059] transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
