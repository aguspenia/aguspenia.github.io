
import React from 'react';

export const MEDIA_URLS = {
  LOGO: "https://i.postimg.cc/ctyJ2ZGY/logotipo-Editado.png", 
  HERO_BGS: [
    "https://i.imgur.com/wyilLsq.jpg",
    "https://i.imgur.com/naULG1U.jpg"
  ],
  DRA_IMAGE: "https://i.imgur.com/HUFfOO4.jpg"
};

export const COLORS = {
  NAVY: '#0a192f',
  GOLD: '#c5a059',
  CHARCOAL: '#1f2937',
  WHATSAPP: '#25d366'
};

export const TEXTS = {
  NAV: {
    HOME: "INICIO",
    ABOUT: "EL ESTUDIO",
    SERVICES: "SERVICIOS",
    CONTACT: "CONTACTO"
  },
  HERO: {
    TITLE: "Estudio Jurídico Sierra & Asociados",
    SUBTITLE: "Asesoramiento Jurídico Integral y Personalizado",
    DESCRIPTION: "Brindamos atención personalizada y defensa integral de sus derechos con los más altos estándares éticos y profesionales en el ámbito legal.",
    CTA: "INICIAR CONSULTA"
  },
  SERVICES: {
    TITLE: "Nuestras áreas de práctica",
    SUBTITLE: "Soluciones Legales con Excelencia",
    LIST: [
      {
        title: "Accidentes de Tránsito",
        description: "Brindamos asesoramiento y representación legal en accidentes de tránsito, realizando reclamos judiciales y extrajudiciales ante compañías de seguros. Acompañamos cada caso desde el primer contacto hasta la resolución del conflicto.",
        icon: <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
      },
      {
        title: "Accidentes Laborales",
        description: "Asistencia legal en casos de accidentes de trabajo y enfermedades laborales, orientada a la defensa de los derechos del trabajador y a la obtención de una reparación justa.",
        icon: <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
      },
      {
        title: "Derecho Laboral",
        description: "Asesoramiento y representación en conflictos laborales, despidos, indemnizaciones y demás cuestiones vinculadas a la relación de trabajo, con una mirada profesional and responsable.",
        icon: <path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4z" />
      },
      {
        title: "Amparos de Salud",
        description: "Asesoramiento y representation en acciones de amparo de salud frente a obras sociales, prepagas y organismos de salud, con el objetivo de garantizar el acceso oportuno a prestaciones médicas, treatments y medicamentos.",
        icon: <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z" />
      },
      {
        title: "Defensa del Consumidor",
        description: "Asistencia legal en reclamos vinculados a relaciones de consumo, servicios deficientes, incumplimientos contractuales y prácticas abusivas, priorizando soluciones eficaces y la protección de los derechos del consumidor.",
        icon: <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03L21 4.24a.5.5 0 00-.41-.76H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.83 13.91 5.34 15 6.27 15H19v-2H7.42c-.14 0-.25-.11-.25-.25 0-.05.01-.09.03-.12L8.1 13z" />
      },
      {
        title: "Contratos",
        description: "Redacción, revisión y asesoramiento en contratos civiles y comerciales, brindando soluciones claras y seguras para prevenir conflictos y proteger los intereses de las partes.",
        icon: <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
      },
      {
        title: "Sucesiones",
        description: "Asesoramiento integral en procesos sucesorios, acompañando a los interesados de manera clara y ordenada en cada etapa del trámite.",
        icon: <g>
          <circle cx="12" cy="4" r="2.5" />
          <path d="M8 8.5c0-.8.7-1.5 1.5-1.5h5c.8 0 1.5.7 1.5 1.5v2h-8v-2z" />
          <path d="M12 10.5v3M5 13.5h14M5 13.5v2M12 13.5v2M19 13.5v2" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="5" cy="17.5" r="2" />
          <path d="M2.5 21c0-.6.4-1 1-1h3c.6 0 1 .4 1 1v1h-5v-1z" />
          <circle cx="12" cy="17.5" r="2" />
          <path d="M9.5 21c0-.6.4-1 1-1h3c.6 0 1 .4 1 1v1h-5v-1z" />
          <circle cx="19" cy="17.5" r="2" />
          <path d="M16.5 21c0-.6.4-1 1-1h3c.6 0 1 .4 1 1v1h-5v-1z" />
        </g>
      },
      {
        title: "Derecho de Familia",
        description: "Acompañamiento legal en conflictos familiares, como divorcios, alimentos, régimen de comunicación y cuidado personal, priorizando soluciones responsables y el bienestar de las personas involucradas.",
        icon: <g>
          <path d="M12 3L2 12h3v9h14v-9h3L12 3z" />
          <path d="M17 5h2v4h-2z" />
          {/* Corazón Agrandado y Refinado */}
          <path d="M12 19.2s-3.5-3-3.5-5.5c0-1.5 1.1-2.5 2.5-2.5 0.7 0 1.3 0.3 1.5 0.8 0.2-0.5 0.8-0.8 1.5-0.8 1.4 0 2.5 1.1 2.5 2.5 0 2.5-4 5.5-4 5.5z" fill="white" />
        </g>
      }
    ]
  },
  ABOUT: {
    TAG: "EL ESTUDIO",
    TITLE: "Excelencia Profesional",
    SUBTITLE: "Compromiso Inquebrantable",
    CONTENT: "En el Estudio Jurídico Sierra, entendemos que cada caso requiere una estrategia única. Bajo la dirección de la Dra. Camila Sierra, nos dedicamos a proporcionar soluciones jurídicas eficientes, transparentes y de alto impacto, manteniendo una comunicación constante y humana con cada uno de nuestros clientes."
  },
  CONTACT: {
    TITLE: "Agendá una consulta",
    SUBTITLE: "Estamos a su entera disposición",
    TAG: "CONTACTO",
    HEADING_LINE1: "Agendá una",
    HEADING_LINE2: "consulta",
    ADDRESS: "CABA - Gran Buenos Aires",
    PHONE: "011-3068-2608", 
    EMAIL: "consultas@estudiojuridicosierra.com.ar",
    FORM: {
      NAME: "Nombre",
      EMAIL: "Email",
      PHONE: "Teléfono",
      MESSAGE: "Consulta",
      SEND: "ENVIAR"
    }
  },
  FOOTER: {
    COPYRIGHT: "© 2026 ESTUDIO JURÍDICO SIERRA. TODOS LOS DERECHOS RESERVADOS."
  }
};
