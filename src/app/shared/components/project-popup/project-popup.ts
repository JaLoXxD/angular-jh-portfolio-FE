import { ChangeDetectionStrategy, Component, ElementRef, inject, viewChild } from '@angular/core';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { ProjectPopupService } from '../../../core/services/project-popup.service';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-project-popup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslatePipe, Icon],
  templateUrl: './project-popup.html',
  styleUrl: './project-popup.scss',
  host: {
    class: 'project-popup-backdrop',
    '[class.project-popup-backdrop--visible]': 'popup.isVisible()',
    '(click)': 'onBackdropClick($event)',
  },
})
export class ProjectPopup {
  protected readonly popup = inject(ProjectPopupService);
  private readonly panel = viewChild<ElementRef<HTMLElement>>('panel');

  onBackdropClick(event: MouseEvent): void {
    const panelEl = this.panel()?.nativeElement;
    if (panelEl && !panelEl.contains(event.target as Node)) {
      this.popup.close();
    }
  }
}
