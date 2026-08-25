export interface Skill {
  id: string;
  title: string;
  percent: number;
  image: string;
  descriptionKey: string;
}

export type SkillGroupKey = 'frontend' | 'backend' | 'other';
