import { Skill, SkillGroupKey } from '../models/skill.model';

export const SKILL_GROUPS: Record<SkillGroupKey, Skill[]> = {
  frontend: [
    { id: 'html', title: 'HTML', percent: 95, image: '/images/skills/html.png', descriptionKey: 'skills.html.description' },
    { id: 'css', title: 'CSS', percent: 90, image: '/images/skills/css.png', descriptionKey: 'skills.css.description' },
    { id: 'typescript', title: 'TypeScript', percent: 90, image: '/images/skills/typescript.svg', descriptionKey: 'skills.typescript.description' },
    { id: 'angular', title: 'Angular', percent: 90, image: '/images/skills/angular.png', descriptionKey: 'skills.angular.description' },
  ],
  backend: [
    { id: 'java', title: 'Java', percent: 85, image: '/images/skills/java.png', descriptionKey: 'skills.java.description' },
    { id: 'springboot', title: 'Spring Boot', percent: 80, image: '/images/skills/springboot.svg', descriptionKey: 'skills.springboot.description' },
    { id: 'nodejs', title: 'Node.js', percent: 75, image: '/images/skills/nodejs.png', descriptionKey: 'skills.nodejs.description' },
  ],
  mobile: [
    { id: 'kotlin', title: 'Kotlin', percent: 65, image: '/images/skills/kotlin.svg', descriptionKey: 'skills.kotlin.description' },
    { id: 'swift', title: 'Swift', percent: 60, image: '/images/skills/swift.svg', descriptionKey: 'skills.swift.description' },
  ],
  other: [
    { id: 'sql', title: 'SQL', percent: 75, image: '/images/skills/sql.png', descriptionKey: 'skills.sql.description' },
    { id: 'redis', title: 'Redis', percent: 60, image: '/images/skills/redis.svg', descriptionKey: 'skills.redis.description' },
    { id: 'javascript', title: 'JavaScript', percent: 85, image: '/images/skills/js.png', descriptionKey: 'skills.javascript.description' },
    { id: 'git', title: 'Git', percent: 85, image: '/images/skills/git.png', descriptionKey: 'skills.git.description' },
  ],
};
