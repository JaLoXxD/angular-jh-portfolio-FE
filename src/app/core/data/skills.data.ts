import { Skill, SkillGroupKey } from '../models/skill.model';

export const SKILL_GROUPS: Record<SkillGroupKey, Skill[]> = {
  frontend: [
    { id: 'html', title: 'HTML', percent: 95, image: '/images/skills/html.png', descriptionKey: 'skills.html.description' },
    { id: 'css', title: 'CSS', percent: 90, image: '/images/skills/css.png', descriptionKey: 'skills.css.description' },
    { id: 'vuejs', title: 'VueJs', percent: 70, image: '/images/skills/vuejs.png', descriptionKey: 'skills.vuejs.description' },
    { id: 'angular', title: 'Angular', percent: 90, image: '/images/skills/angular.png', descriptionKey: 'skills.angular.description' },
  ],
  backend: [
    { id: 'python', title: 'Python', percent: 50, image: '/images/skills/python.png', descriptionKey: 'skills.python.description' },
    { id: 'java', title: 'Java', percent: 80, image: '/images/skills/java.png', descriptionKey: 'skills.java.description' },
    { id: 'nodejs', title: 'Node.js', percent: 75, image: '/images/skills/nodejs.png', descriptionKey: 'skills.nodejs.description' },
  ],
  other: [
    { id: 'sql', title: 'SQL', percent: 75, image: '/images/skills/sql.png', descriptionKey: 'skills.sql.description' },
    { id: 'nosql', title: 'NoSQL', percent: 60, image: '/images/skills/mongodb.png', descriptionKey: 'skills.nosql.description' },
    { id: 'javascript', title: 'JavaScript', percent: 90, image: '/images/skills/js.png', descriptionKey: 'skills.javascript.description' },
    { id: 'git', title: 'Git', percent: 55, image: '/images/skills/git.png', descriptionKey: 'skills.git.description' },
  ],
};
