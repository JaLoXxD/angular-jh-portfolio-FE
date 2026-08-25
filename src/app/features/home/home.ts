import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, afterNextRender, inject, viewChildren } from '@angular/core';
import { ActiveSectionService } from '../../core/services/active-section.service';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Experience } from './experience/experience';
import { Projects } from './projects/projects';
import { ContactCta } from './contact-cta/contact-cta';

const NAVBAR_HEIGHT = 110;

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective, Hero, About, Skills, Experience, Projects, ContactCta],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnDestroy {
  private readonly activeSection = inject(ActiveSectionService);
  private readonly sections = viewChildren<ElementRef<HTMLElement>>('section');

  constructor() {
    afterNextRender(() => {
      this.activeSection.observe(
        this.sections().map((section) => section.nativeElement),
        NAVBAR_HEIGHT,
      );
    });
  }

  ngOnDestroy(): void {
    this.activeSection.disconnect();
  }
}
