import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { EXPERIENCE_JOBS } from '../../../core/data/experience.data';
import { I18nService } from '../../../core/i18n/i18n.service';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { SectionTitle } from '../../../shared/components/section-title/section-title';

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TranslatePipe, SectionTitle],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected readonly i18n = inject(I18nService);
  protected readonly jobs = EXPERIENCE_JOBS;
  protected readonly activeJobId = signal(EXPERIENCE_JOBS[EXPERIENCE_JOBS.length - 1].id);

  protected readonly dateLocale = () => (this.i18n.lang() === 'es' ? 'es' : 'en-US');

  selectJob(id: number): void {
    this.activeJobId.set(id);
  }
}
