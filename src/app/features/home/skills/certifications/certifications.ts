import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CERTIFICATIONS } from '../../../../core/data/certifications.data';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';

@Component({
  selector: 'app-certifications',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslatePipe],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss',
})
export class Certifications {
  protected readonly certifications = CERTIFICATIONS;
}
