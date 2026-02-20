
import React from 'react';
import { TEXTS } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 md:py-40 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center">
          <span className="text-[#c5a059] text-xs md:text-sm font-bold tracking-[0.5em] uppercase block mb-4">
            {TEXTS.NAV.SERVICES}
          </span>
          
          <h2 className="font-formal text-4xl md:text-6xl font-bold text-[#0a192f] mb-3 leading-tight">
            {TEXTS.SERVICES.TITLE}
          </h2>

          <span className="text-[#c5a059] text-2xl md:text-3xl font-formal italic tracking-wide block mb-8">
            {TEXTS.SERVICES.SUBTITLE}
          </span>
          
          <div className="w-20 h-[1px] bg-[#c5a059]/40 mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {TEXTS.SERVICES.LIST.map((service, index) => (
            <div 
              key={index} 
              className="group perspective-1000 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] min-w-[280px] h-[420px] cursor-pointer"
            >
              <div className="relative w-full h-full preserve-3d">
                {/* PARTE FRONTAL */}
                <div className="backface-hidden bg-white border border-[#c5a059]/10 p-8 flex flex-col items-center justify-center text-center shadow-sm transition-all duration-500 group-hover:border-[#c5a059] group-hover:shadow-xl">
                  
                  {/* Contenedor del Icono - Uso de SVGs Dorados */}
                  <div className="w-20 h-20 mb-10 flex items-center justify-center transition-all duration-700">
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Aura sutil dorada */}
                      <div className="absolute inset-0 bg-[#c5a059]/5 rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                      
                      {/* Renderizado del Icono SVG en Dorado */}
                      <svg 
                        viewBox="0 0 24 24" 
                        className="w-14 h-14 text-[#c5a059] fill-current relative z-10 transition-transform duration-700 group-hover:scale-110"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {service.icon}
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-[#0a192f] font-formal leading-tight tracking-[0.05em] uppercase mb-4 h-14 flex items-center justify-center px-4">
                    {service.title}
                  </h3>
                  
                  <div className="mt-4 flex items-center space-x-2 text-[#c5a059] opacity-40 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-[9px] font-bold tracking-[0.2em]">SABER MÁS</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </div>

                {/* PARTE TRASERA */}
                <div className="backface-hidden rotate-y-180 bg-[#0a192f] p-8 flex flex-col items-center justify-center text-center shadow-2xl border border-[#c5a059]/30">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#c5a059]"></div>
                  <div className="w-full max-h-full overflow-y-auto custom-scrollbar px-2 flex flex-col items-center">
                    <p className="text-gray-200 text-base md:text-lg font-light leading-relaxed font-sans italic">
                      "{service.description}"
                    </p>
                    <div className="mt-8 w-12 h-[1px] bg-[#c5a059]/40"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
