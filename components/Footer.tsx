
import React, { useState } from 'react';
import { TEXTS, MEDIA_URLS } from '../constants';

const Footer: React.FC = () => {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-[#050c18] py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* LADO IZQUIERDO: Identidad Visual */}
          <div className="flex items-center space-x-5">
            <div className="flex-shrink-0">
              {!logoError ? (
                <img 
                  src={MEDIA_URLS.LOGO} 
                  alt="Sierra Logo Footer" 
                  className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity drop-shadow-lg"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="w-10 h-10 border border-[#c5a059] flex items-center justify-center font-formal text-[#c5a059] text-xl font-bold">
                  S&A
                </div>
              )}
            </div>
            
            <div className="flex flex-col border-l border-white/10 pl-5">
              <span className="font-formal text-2xl font-bold tracking-[0.1em] text-[#c5a059]">
                SIERRA
              </span>
              <span className="text-[9px] font-bold tracking-[0.4em] text-white/50 uppercase">
                ESTUDIO JURÍDICO
              </span>
            </div>
          </div>
          
          {/* LADO DERECHO: Aviso Legal */}
          <div className="text-white/40 text-[10px] font-medium uppercase tracking-[0.2em] text-center md:text-right max-w-md leading-relaxed">
            {TEXTS.FOOTER.COPYRIGHT}
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
