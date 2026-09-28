import { TranslationDictionary } from '../i18n.model';

export const en: TranslationDictionary = {
  meta: {
    title: 'Jorge Hidalgo · Senior Full-Stack Developer',
    description:
      'Portfolio of Jorge Hidalgo, a Senior Full-Stack Developer specialized in Java, Spring Boot, Angular and mobile development for banking and fintech platforms.',
  },
  nav: {
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
    downloadCv: 'Download CV',
    toggleMenu: 'Toggle navigation menu',
  },
  hero: {
    greeting: 'Hi, ',
    name: "I'm Jorge Hidalgo",
    role: 'Senior Full-Stack Developer',
  },
  about: {
    title: 'About Me',
    intro:
      "I'm a Senior Full-Stack Developer with 5+ years of experience building and hardening production systems for banking " +
      'and fintech clients. These days I split my time between Java & Spring Boot backend services, Angular micro-frontend ' +
      'architectures, and native mobile features for Android and iOS — and I have a soft spot for chasing down the hardest ' +
      'production issues, from JVM memory leaks to distributed session bugs.',
  },
  skills: {
    title: 'Skills',
    groups: {
      frontend: 'Front-End',
      backend: 'Back-End',
      other: 'Other',
    },
    html: { description: 'Building the structure of web pages' },
    css: { description: 'Styling and animations' },
    javascript: { description: 'Front-end and back-end scripting' },
    typescript: { description: 'Typed JavaScript for scalable apps' },
    vuejs: { description: 'Single-page applications' },
    angular: { description: 'Single-page applications' },
    python: { description: 'API development' },
    java: { description: 'APIs and microservices development' },
    nodejs: { description: 'API development and web scraping' },
    sql: { description: 'Database modeling and management' },
    nosql: { description: 'Document database modeling and management' },
    git: { description: 'Team collaboration on projects' },
  },
  experience: {
    title: 'Experience',
    present: 'Present',
    jobs: {
      nova: {
        company: 'NovaTravelGroup',
        role: 'Web Developer & IT Support',
        bullets: [
          "Built the company's website from the ground up, from design through deployment.",
          'Managed internal network infrastructure and the security camera system.',
          'Installed and configured a biometric fingerprint scanner for access control.',
          'Provided technical support for company computers and printers.',
        ],
      },
      habitacars: {
        company: 'Habitacars',
        role: 'Full-Stack Developer',
        bullets: [
          'Designed and built an administrative management system from the ground up.',
          'Built the REST API in Python (Flask) that powers the platform.',
          'Implemented the Angular front end consuming the API.',
          'Provided technical support for computers and printers.',
        ],
      },
      alphacrew: {
        company: 'AlphaCrew Studio',
        role: 'Full-Stack Developer',
        bullets: [
          'Developed REST APIs with Node.js and Flask for production applications.',
          'Integrated Firebase (Firestore, Authentication, Cloud Functions) into client projects.',
          'Built a Chrome extension for automated web scraping.',
          'Implemented real-time chat functionality with Node.js and Socket.io.',
        ],
      },
      uiosoft: {
        company: 'UIO Soft +',
        role: 'Back-End Developer — Freelance',
        bullets: [
          'Built a Node.js API for a lending platform.',
          'Implemented user registration and encrypted storage of personal and banking data.',
          'Added document upload and validation for loan applications.',
          'Automated the loan approval/rejection decision logic.',
        ],
      },
      advance: {
        company: 'Advance Consulting',
        role: 'Senior Full-Stack Developer — Consultant',
        bullets: [
          'Led a Java 11/Spring Boot 2 to Java 21/Spring Boot 3 migration for a core banking microservice, fixing recurring production crashes caused by JVM memory misdetection.',
          'Cut security findings (Checkmarx SCA) on a core banking service from 147 to zero Critical/High through dependency upgrades.',
          'Diagnosed and fixed a distributed session bug affecting production users by adding a Redis-backed session store.',
          'Built and maintain a 6-microfrontend Angular (Module Federation) monorepo for a banking digital platform.',
          'Delivered an in-app OTP authentication feature end-to-end across Android, iOS, and backend.',
        ],
      },
    },
  },
  projects: {
    title: 'Projects',
    viewGithub: 'GitHub repository',
    viewProject: 'Open project',
    frontend: 'Frontend',
    backend: 'Backend',
    items: {
      movingChecklist: {
        title: 'Moving Checklist',
        description:
          'A shareable moving checklist: the admin manages items with photos, and friends open the public link to mark what they will gift, anonymously and with no sign-up. Angular with signals on the frontend and Spring Boot with MySQL on the backend, deployed with Docker on a VPS.',
      },
      hairdressing: {
        title: 'Hairdressing App',
        description:
          'An SPA that lets a hair salon manage clients and appointments. Appointments can be updated to mark them as completed.',
      },
      dashboard: {
        title: 'Dashboard View',
        description:
          "A dashboard example page. It's UI-only for now, but it consumes the Hairdressing App API to display data in a table.",
      },
      picoPlaca: {
        title: 'Pico & Placa',
        description:
          "A web app to register vehicles and check, by license plate, whether they're allowed to drive (based on Ecuador's Pico y Placa restriction).",
      },
      spotify: {
        title: 'Spotify Web Client',
        description:
          'A Spotify Web API client built with Angular: OAuth login, browsing playlists and followed artists, and full playback controls. Source-code showcase — no live demo since it depends on a Spotify developer account.',
      },
    },
  },
  certifications: {
    title: 'Certifications',
    items: {
      angular: { title: 'Angular – The Complete Guide (2022 Edition)' },
      iosSwift: { title: 'iOS & Swift – The Complete iOS App Development Bootcamp' },
    },
  },
  contactCta: {
    title: "Got an opportunity in mind?",
    text: "I'm always open to hearing about new projects and roles. Reach out and let's talk.",
    email: 'Email me',
    linkedin: 'Connect on LinkedIn',
  },
  footer: {
    builtBy: 'Designed and built by Jorge Hidalgo',
    copyright: '© Copyright {{year}}',
  },
  common: {
    close: 'Close',
  },
};
