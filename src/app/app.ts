import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectPopupService } from './core/services/project-popup.service';
import { Navbar } from './shared/components/navbar/navbar';
import { Footer } from './shared/components/footer/footer';
import { ContactInfo } from './shared/components/contact-info/contact-info';
import { Spinner } from './shared/components/spinner/spinner';
import { ProjectPopup } from './shared/components/project-popup/project-popup';

const SPLASH_DURATION_MS = 1800;

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, Navbar, Footer, ContactInfo, Spinner, ProjectPopup],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly popup = inject(ProjectPopupService);
  protected readonly isLoading = signal(true);

  constructor() {
    setTimeout(() => this.isLoading.set(false), SPLASH_DURATION_MS);

    effect(() => {
      document.documentElement.style.overflow = this.popup.isVisible() ? 'hidden' : '';
    });
  }
}
