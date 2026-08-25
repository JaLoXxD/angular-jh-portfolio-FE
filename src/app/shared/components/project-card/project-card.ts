import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Project } from '../../../core/models/project.model';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { ProjectPopupService } from '../../../core/services/project-popup.service';

@Component({
  selector: 'app-project-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslatePipe],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  host: {
    class: 'project-card',
    '(click)': 'open()',
  },
})
export class ProjectCard {
  readonly project = input.required<Project>();

  private readonly popup = inject(ProjectPopupService);

  open(): void {
    this.popup.open(this.project().id);
  }
}
