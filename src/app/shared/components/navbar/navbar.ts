import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ActiveSectionService } from '../../../core/services/active-section.service';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { Icon } from '../icon/icon';
import { LanguageSwitcher } from '../language-switcher/language-switcher';

interface NavLink {
  id: string;
  labelKey: string;
}

const NAV_LINKS: NavLink[] = [
  { id: 'about', labelKey: 'nav.about' },
  { id: 'skills', labelKey: 'nav.skills' },
  { id: 'experience', labelKey: 'nav.experience' },
  { id: 'projects', labelKey: 'nav.projects' },
];

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslatePipe, Icon, LanguageSwitcher],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  protected readonly activeSection = inject(ActiveSectionService);
  protected readonly links = NAV_LINKS;
  protected readonly menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
