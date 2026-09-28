export interface ProjectRepository {
  url: string;
  labelKey?: string;
}

export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  repositories: ProjectRepository[];
  projectUrl?: string;
  technologies: string[];
}
