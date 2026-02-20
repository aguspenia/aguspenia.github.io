
import React, { useState } from 'react';
import { TEXTS } from '../constants';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulamos una llamada a la API con un retraso para feedback visual
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-32 md:py-48 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          
          <div className="space-y-12 lg:sticky lg:top-32">
            <div>
              <span className="text-[#c5a059] text-sm md:text-base font-bold tracking-[0.5em] uppercase block mb-6">
                {TEXTS.CONTACT.TAG}
              </span>
              
              <h2 className="font-formal text-5xl md:text-7xl font-bold text-black leading-[1.1] mb-4">
                {TEXTS.CONTACT.HEADING_LINE1} <br/>
                {TEXTS.CONTACT.HEADING_LINE2}
              </h2>

              <span className="text-[#c5a059] text-3xl md:text-4xl font-formal italic tracking-wide block mb-12">
                {TEXTS.CONTACT.SUBTITLE}
              </span>
              
              <div className="w-16 h-[1.5px] bg-[#c5a059]/40 mt-12"></div>
            </div>
            
            <div className="space-y-8 pt-4">
              <div className="flex items-start space-x-5 group">
                <div className="mt-1 text-[#c5a059]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <p className="text-[#0a192f] text-[9px] font-bold tracking-[0.25em] uppercase mb-1 opacity-70">UBICACIÓN</p>
                  <p className="text-gray-500 text-lg font-light">{TEXTS.CONTACT.ADDRESS}</p>
                </div>
              </div>
              <div className="flex items-start space-x-5 group">
                <div className="mt-1 text-[#c5a059]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <p className="text-[#0a192f] text-[9px] font-bold tracking-[0.25em] uppercase mb-1 opacity-70">TELÉFONO</p>
                  <p className="text-gray-500 text-lg font-light">{TEXTS.CONTACT.PHONE}</p>
                </div>
              </div>
              <div className="flex items-start space-x-5 group">
                <div className="mt-1 text-[#c5a059]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <p className="text-[#0a192f] text-[9px] font-bold tracking-[0.25em] uppercase mb-1 opacity-70">EMAIL</p>
                  <p className="text-gray-500 text-lg font-light border-b border-[#c5a059]/10 inline-block">{TEXTS.CONTACT.EMAIL}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white min-h-[500px] flex items-center justify-center relative">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 w-full animate-[fadeIn_0.5s_ease-out]">
                <div className="flex flex-col space-y-2">
                  <label className="text-gray-500 text-[11px] font-bold tracking-widest uppercase opacity-80">{TEXTS.CONTACT.FORM.NAME} <span className="text-[#c5a059]">*</span></label>
                  <input type="text" required className="w-full bg-[#efeee6]/60 border-none py-4 px-6 focus:ring-1 focus:ring-[#c5a059]/40 transition-all outline-none text-gray-700 text-base" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col space-y-2">
                    <label className="text-gray-500 text-[11px] font-bold tracking-widest uppercase opacity-80">{TEXTS.CONTACT.FORM.EMAIL} <span className="text-[#c5a059]">*</span></label>
                    <input type="email" required className="w-full bg-[#efeee6]/60 border-none py-4 px-6 focus:ring-1 focus:ring-[#c5a059]/40 transition-all outline-none text-gray-700 text-base" />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-gray-500 text-[11px] font-bold tracking-widest uppercase opacity-80">{TEXTS.CONTACT.FORM.PHONE} <span className="text-[#c5a059]">*</span></label>
                    <input type="tel" required className="w-full bg-[#efeee6]/60 border-none py-4 px-6 focus:ring-1 focus:ring-[#c5a059]/40 transition-all outline-none text-gray-700 text-base" />
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-gray-500 text-[11px] font-bold tracking-widest uppercase opacity-80">{TEXTS.CONTACT.FORM.MESSAGE} <span className="text-[#c5a059]">*</span></label>
                  <textarea rows={5} required className="w-full bg-[#efeee6]/60 border-none py-4 px-6 focus:ring-1 focus:ring-[#c5a059]/40 transition-all outline-none resize-none text-gray-700 text-base"></textarea>
                </div>
                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`bg-[#b39352] text-white px-12 py-4 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-[#a18243] transition-all duration-500 shadow-sm hover:shadow-xl active:scale-95 border-none outline-none flex items-center justify-center min-w-[200px] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        ENVIANDO...
                      </span>
                    ) : TEXTS.CONTACT.FORM.SEND}
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center space-y-8 animate-[fadeIn_0.8s_ease-out] py-12">
                <div className="w-20 h-20 bg-[#c5a059]/10 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-10 h-10 text-[#c5a059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="space-y-4">
                  <h3 className="font-formal text-4xl font-bold text-[#0a192f]">¡Consulta enviada!</h3>
                  <p className="text-gray-500 text-lg font-light max-w-sm mx-auto">
                    Gracias por contactarnos. Un profesional de nuestro equipo se comunicará con usted a la brevedad.
                  </p>
                </div>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-[#c5a059] text-[11px] font-bold tracking-widest uppercase hover:underline"
                >
                  ENVIAR OTRA CONSULTA
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
