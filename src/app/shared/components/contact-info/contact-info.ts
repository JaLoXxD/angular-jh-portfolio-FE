import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-contact-info',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  templateUrl: './contact-info.html',
  styleUrl: './contact-info.scss',
})
export class ContactInfo {}
