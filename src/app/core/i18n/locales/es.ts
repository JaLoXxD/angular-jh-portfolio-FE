import { TranslationDictionary } from '../i18n.model';

export const es: TranslationDictionary = {
  meta: {
    title: 'Jorge Hidalgo · Desarrollador Full-Stack Senior',
    description:
      'Portafolio de Jorge Hidalgo, Desarrollador Full-Stack Senior especializado en Java, Spring Boot, Angular y desarrollo móvil para plataformas bancarias y fintech.',
  },
  nav: {
    about: 'Sobre mí',
    skills: 'Habilidades',
    experience: 'Experiencia',
    projects: 'Proyectos',
    contact: 'Contacto',
    downloadCv: 'Descargar CV',
    toggleMenu: 'Abrir menú de navegación',
  },
  hero: {
    greeting: 'Hola, ',
    name: 'Soy Jorge Hidalgo',
    role: 'Desarrollador Full-Stack Senior',
  },
  about: {
    title: 'Sobre mí',
    intro:
      'Soy Desarrollador Full-Stack Senior con más de 5 años de experiencia construyendo y robusteciendo sistemas en producción ' +
      'para clientes bancarios y fintech. Hoy en día reparto mi tiempo entre servicios backend en Java y Spring Boot, ' +
      'arquitecturas de micro-frontends en Angular y funcionalidades nativas para Android e iOS — y tengo debilidad por ' +
      'resolver los problemas de producción más difíciles, desde fugas de memoria en la JVM hasta bugs de sesiones distribuidas.',
  },
  skills: {
    title: 'Habilidades',
    groups: {
      frontend: 'Front-End',
      backend: 'Back-End',
      other: 'Otras',
    },
    html: { description: 'Construcción de la estructura de páginas web' },
    css: { description: 'Diseño y animaciones' },
    javascript: { description: 'Scripting de front-end y back-end' },
    typescript: { description: 'JavaScript tipado para aplicaciones escalables' },
    vuejs: { description: 'Aplicaciones de una sola página (SPA)' },
    angular: { description: 'Aplicaciones de una sola página (SPA)' },
    python: { description: 'Desarrollo de APIs' },
    java: { description: 'Desarrollo de APIs y microservicios' },
    nodejs: { description: 'Desarrollo de APIs y web scraping' },
    sql: { description: 'Modelado y manejo de bases de datos' },
    nosql: { description: 'Modelado y manejo de bases de datos documentales' },
    git: { description: 'Colaboración en equipo dentro de proyectos' },
  },
  experience: {
    title: 'Experiencia',
    present: 'Actualidad',
    jobs: {
      nova: {
        company: 'NovaTravelGroup',
        role: 'Desarrollador Web y Soporte IT',
        bullets: [
          'Desarrollé el sitio web de la empresa desde cero, del diseño al despliegue.',
          'Administré la infraestructura de red y el sistema de cámaras de seguridad.',
          'Instalé y configuré un escáner biométrico para control de acceso.',
          'Brindé soporte técnico a computadoras e impresoras.',
        ],
      },
      habitacars: {
        company: 'Habitacars',
        role: 'Desarrollador Full-Stack',
        bullets: [
          'Diseñé y construí un sistema administrativo desde cero.',
          'Desarrollé la API REST en Python (Flask) que impulsa la plataforma.',
          'Implementé el front end en Angular que consume la API.',
          'Brindé soporte técnico a computadoras e impresoras.',
        ],
      },
      alphacrew: {
        company: 'AlphaCrew Studio',
        role: 'Desarrollador Full-Stack',
        bullets: [
          'Desarrollé APIs REST con Node.js y Flask para aplicaciones en producción.', 'Integré Firebase (Firestore, Authentication, Cloud Functions) en proyectos de clientes.',
          'Construí una extensión de Chrome para web scraping automatizado.',
          'Implementé chat en tiempo real con Node.js y Socket.io.',
        ],
      },
      uiosoft: {
        company: 'UIO Soft +',
        role: 'Desarrollador Back-End — Freelance',
        bullets: [
          'Construí una API en Node.js para una plataforma de préstamos.',
          'Implementé el registro de usuarios y el almacenamiento cifrado de datos personales y bancarios.',
          'Agregué la carga y validación de documentos para solicitudes de préstamo.',
          'Automaticé la lógica de aprobación/rechazo de préstamos.',
        ],
      },
      advance: {
        company: 'Advance Consulting',
        role: 'Desarrollador Full-Stack Senior — Consultor',
        bullets: [
          'Lideré una migración de Java 11/Spring Boot 2 a Java 21/Spring Boot 3 en un microservicio bancario core, resolviendo caídas recurrentes en producción causadas por una mala detección de memoria en la JVM.',
          'Reduje los hallazgos de seguridad (Checkmarx SCA) de un servicio bancario core de 147 a cero críticos/altos mediante actualización de dependencias.',
          'Diagnostiqué y resolví un bug de sesiones distribuidas que afectaba a usuarios en producción, agregando un almacén de sesiones respaldado por Redis.',
          'Construí y mantengo un monorepo Angular de 6 microfrontends (Module Federation) para una plataforma bancaria digital.',
          'Entregué una funcionalidad de autenticación OTP end-to-end en Android, iOS y backend.',
        ],
      },
    },
  },
  projects: {
    title: 'Proyectos',
    viewGithub: 'Repositorio en GitHub',
    viewProject: 'Ver proyecto',
    items: {
      hairdressing: {
        title: 'Hairdressing App',
        description:
          'Una SPA que permite a una peluquería gestionar clientes y citas. Las citas pueden actualizarse para marcarlas como atendidas.',
      },
      dashboard: {
        title: 'Dashboard View',
        description:
          'Una página de ejemplo de dashboard. Por ahora es solo diseño, pero consume la API de Hairdressing App para mostrar información en una tabla.',
      },
      picoPlaca: {
        title: 'Pico & Placa',
        description:
          'Una aplicación web para registrar vehículos y comprobar, según su placa, si pueden circular (basada en el Pico y Placa de Ecuador).',
      },
      spotify: {
        title: 'Spotify Web Client',
        description:
          'Un cliente del API web de Spotify hecho con Angular: login con OAuth, exploración de playlists y artistas seguidos, y control completo de reproducción. Muestra de código — sin demo en vivo porque depende de una cuenta de desarrollador de Spotify.',
      },
    },
  },
  certifications: {
    title: 'Certificaciones',
    items: {
      angular: { title: 'Angular – The Complete Guide (Edición 2022)' },
      iosSwift: { title: 'iOS & Swift – The Complete iOS App Development Bootcamp' },
    },
  },
  contactCta: {
    title: '¿Tienes un proyecto en mente?',
    text: 'Siempre estoy abierto a escuchar sobre nuevos proyectos y oportunidades. Escríbeme y conversemos.',
    email: 'Escríbeme',
    linkedin: 'Conectemos en LinkedIn',
  },
  footer: {
    builtBy: 'Diseñado y construido por Jorge Hidalgo',
    copyright: '© Copyright {{year}}',
  },
  common: {
    close: 'Cerrar',
  },
};
