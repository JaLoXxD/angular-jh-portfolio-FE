import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Skill } from '../../../../core/models/skill.model';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';
import { SkillCard } from '../../../../shared/components/skill-card/skill-card';

@Component({
  selector: 'app-skill-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslatePipe, SkillCard],
  templateUrl: './skill-group.html',
  styleUrl: './skill-group.scss',
})
export class SkillGroup {
  readonly titleKey = input.required<string>();
  readonly skills = input.required<Skill[]>();
}
