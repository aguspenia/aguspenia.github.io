
import React from 'react';
import { TEXTS, MEDIA_URLS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="el-estudio" className="py-32 md:py-48 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <div className="lg:col-span-5 relative max-w-[280px] sm:max-w-[350px] md:max-w-md lg:max-w-none mx-auto lg:mx-0">
            <div className="relative z-10 bg-white p-2 shadow-2xl group overflow-hidden">
               <div className="overflow-hidden">
                 <img 
                  src={MEDIA_URLS.DRA_IMAGE} 
                  alt="Dra. Sierra" 
                  className="w-full h-auto transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                />
               </div>
               <div className="absolute inset-0 border-0 group-hover:border-[12px] border-[#c5a059]/10 transition-all duration-700 pointer-events-none"></div>
            </div>
            
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-20 h-20 md:w-32 md:h-32 border-l border-t border-[#c5a059]/30 -z-10"></div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-20 h-20 md:w-32 md:h-32 border-r border-b border-[#c5a059]/30 -z-10"></div>
          </div>
          
          <div className="lg:col-span-7">
            {/* Tag incrementado */}
            <span className="text-[#c5a059] text-sm md:text-base font-bold tracking-[0.5em] uppercase block mb-6">
              {TEXTS.ABOUT.TAG}
            </span>
            
            <h2 className="font-formal text-5xl md:text-7xl font-bold text-[#0a192f] mb-4 leading-tight">
              {TEXTS.ABOUT.TITLE}
            </h2>

            {/* Subtítulo incrementado */}
            <span className="text-[#c5a059] text-3xl md:text-4xl font-formal italic tracking-wide block mb-12">
              {TEXTS.ABOUT.SUBTITLE}
            </span>

            <div className="text-gray-500 leading-loose text-lg font-light space-y-6">
              <p>{TEXTS.ABOUT.CONTENT}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 pt-10 border-t border-gray-100">
                {["COMPROMISO", "EXCELENCIA", "TRANSPARENCIA", "RESULTADOS"].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#c5a059]"></div>
                    <span className="text-[11px] font-bold tracking-widest text-[#0a192f]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
