import { Directive, ElementRef, OnDestroy, afterNextRender, inject, input } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal',
  },
})
export class RevealDirective implements OnDestroy {
  readonly appReveal = input<'fade' | 'fade-up'>('fade');

  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  constructor() {
    afterNextRender(() => this.setupObserver());
  }

  private setupObserver(): void {
    const element = this.elementRef.nativeElement;
    element.classList.add(`reveal--${this.appReveal()}`);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      element.classList.add('reveal--visible');
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('reveal--visible');
        }
      },
      { threshold: 0.15 },
    );
    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
