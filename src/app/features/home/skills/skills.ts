import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SKILL_GROUPS } from '../../../core/data/skills.data';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { SectionTitle } from '../../../shared/components/section-title/section-title';
import { SkillGroup } from './skill-group/skill-group';
import { Certifications } from './certifications/certifications';

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslatePipe, SectionTitle, SkillGroup, Certifications],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly frontendSkills = SKILL_GROUPS.frontend;
  protected readonly backendSkills = SKILL_GROUPS.backend;
  protected readonly otherSkills = SKILL_GROUPS.other;
}
