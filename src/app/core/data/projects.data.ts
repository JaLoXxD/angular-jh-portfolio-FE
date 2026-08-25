import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'hairdressing',
    titleKey: 'projects.items.hairdressing.title',
    descriptionKey: 'projects.items.hairdressing.description',
    image: '/images/projects/hairdressing.png',
    gitHubUrl: 'https://github.com/JaLoXxD/Hairdressing-BackEnd',
    projectUrl: 'https://hairdressing-jh.netlify.app/',
    technologies: ['Vue3', 'Node.js', 'MongoDB'],
  },
  {
    id: 'dashboard',
    titleKey: 'projects.items.dashboard.title',
    descriptionKey: 'projects.items.dashboard.description',
    image: '/images/projects/dashboard-design.png',
    gitHubUrl: 'https://github.com/JaLoXxD/react-dashboard',
    projectUrl: 'https://jaloxxd.github.io/react-dashboard/',
    technologies: ['React'],
  },
  {
    id: 'picoPlaca',
    titleKey: 'projects.items.picoPlaca.title',
    descriptionKey: 'projects.items.picoPlaca.description',
    image: '/images/projects/pico-placa.png',
    gitHubUrl: 'https://github.com/JaLoXxD/pico-placa-frontend',
    projectUrl: 'https://jaloxxd.github.io/pico-placa-frontend/',
    technologies: ['React', 'Node.js'],
  },
  {
    id: 'spotify',
    titleKey: 'projects.items.spotify.title',
    descriptionKey: 'projects.items.spotify.description',
    image: '/images/projects/spotify-app.png',
    gitHubUrl: 'https://github.com/JaLoXxD/spotify-app-frontend',
    technologies: ['Angular', 'Spotify Web API', 'OAuth'],
  },
];
