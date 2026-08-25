import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName = 'github' | 'whatsapp' | 'linkedin' | 'link' | 'menu' | 'close' | 'download' | 'mail';

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
})
export class Icon {
  readonly name = input.required<IconName>();
}
