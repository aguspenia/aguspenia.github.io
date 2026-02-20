
import React, { useState, useEffect } from 'react';
import { TEXTS, MEDIA_URLS } from '../constants';

const Hero: React.FC = () => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % MEDIA_URLS.HERO_BGS.length);
    }, 6000); // Cambio cada 6 segundos
    return () => clearInterval(timer);
  }, []);

  // Lógica para generar el link de WhatsApp
  const rawNumber = TEXTS.CONTACT.PHONE;
  const cleanNumber = rawNumber.replace(/\D/g, '').replace(/^0/, '');
  const whatsappNumber = `549${cleanNumber}`;
  const message = "Hola, quisiera realizar una consulta legal.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a192f]">
      {/* Background Images con Crossfade suave */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/95 via-[#0a192f]/70 to-[#0a192f]/95 z-10"></div>
        
        {MEDIA_URLS.HERO_BGS.map((bg, index) => (
          <img 
            key={bg}
            src={bg} 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[3000ms] ease-in-out ${index === currentBg ? 'opacity-100 scale-105 transition-transform duration-[10000ms]' : 'opacity-0 scale-100'}`}
            alt={`Legal background ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Contenedor de contenido - Jerarquía: Lema como Título Principal */}
      <div className="max-w-[95rem] mx-auto px-6 lg:px-12 relative z-20 text-center flex flex-col items-center pt-24 md:pt-32">
        <span className="text-[#c5a059] text-[10px] md:text-[12px] font-bold tracking-[0.5em] md:tracking-[0.8em] uppercase mb-8 md:mb-12 block opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards]">
          BUENOS AIRES • ARGENTINA
        </span>
        
        <div className="opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards] max-w-6xl">
          {/* Título Principal: El Lema (Más grande y con peso) */}
          <h1 className="font-formal text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 md:mb-8 leading-[1.1] tracking-tight drop-shadow-2xl">
            {TEXTS.HERO.SUBTITLE}
          </h1>
          
          {/* Subtítulo: Nombre del Estudio (Refinado y en Dorado) */}
          <p className="font-brand text-base md:text-xl lg:text-2xl text-[#c5a059] font-light tracking-[0.3em] mb-10 md:mb-16 opacity-90 uppercase">
            {TEXTS.HERO.TITLE}
          </p>
        </div>

        {/* Línea decorativa minimalista */}
        <div className="w-16 md:w-32 h-[1.5px] bg-[#c5a059]/40 mb-10 md:mb-16 opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards]"></div>
        
        <div className="opacity-0 animate-[fadeIn_1s_ease-out_1.4s_forwards]">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 md:px-16 py-4 md:py-5 border border-[#c5a059]/30 text-white hover:bg-[#c5a059] hover:text-white hover:border-[#c5a059] transition-all duration-700 text-[11px] md:text-[13px] font-bold uppercase tracking-[0.5em] backdrop-blur-md bg-white/5 shadow-2xl"
          >
            {TEXTS.HERO.CTA}
          </a>
        </div>
      </div>

      {/* Indicador de scroll sutil */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center opacity-20">
        <div className="h-20 w-[1px] bg-gradient-to-t from-[#c5a059] to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
