import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { SectionTitle } from '../../../shared/components/section-title/section-title';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslatePipe, SectionTitle],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
