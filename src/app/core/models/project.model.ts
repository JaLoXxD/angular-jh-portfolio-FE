export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  gitHubUrl: string;
  projectUrl?: string;
  technologies: string[];
}
