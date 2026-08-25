import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AVAILABLE_LANGS } from '../../../core/i18n/i18n.model';
import { I18nService } from '../../../core/i18n/i18n.service';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';

@Component({
  selector: 'app-language-switcher',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslatePipe],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss',
})
export class LanguageSwitcher {
  protected readonly i18n = inject(I18nService);
  protected readonly langs = AVAILABLE_LANGS;
}
