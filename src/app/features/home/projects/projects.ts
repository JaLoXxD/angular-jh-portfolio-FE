import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROJECTS } from '../../../core/data/projects.data';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { SectionTitle } from '../../../shared/components/section-title/section-title';
import { ProjectCard } from '../../../shared/components/project-card/project-card';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslatePipe, SectionTitle, ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly projects = PROJECTS;
}
