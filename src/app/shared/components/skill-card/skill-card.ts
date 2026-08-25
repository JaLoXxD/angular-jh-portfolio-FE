import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  afterNextRender,
  computed,
  inject,
  input,
  viewChild,
} from '@angular/core';
import { Skill } from '../../../core/models/skill.model';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';

@Component({
  selector: 'app-skill-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslatePipe],
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.scss',
  host: {
    class: 'skill-card',
  },
})
export class SkillCard implements OnDestroy {
  readonly skill = input.required<Skill>();

  protected readonly circleOffset = computed(() => `${440 - (440 * this.skill().percent) / 100}px`);

  private readonly box = viewChild.required<ElementRef<HTMLElement>>('box');
  private observer?: IntersectionObserver;

  constructor() {
    afterNextRender(() => {
      const boxEl = this.box().nativeElement;
      this.observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            boxEl.classList.add('skill-card__box--in-view');
            this.observer?.disconnect();
          }
        },
        { threshold: 0.4 },
      );
      this.observer.observe(boxEl);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
