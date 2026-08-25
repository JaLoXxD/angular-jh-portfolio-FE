import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ActiveSectionService {
  readonly activeSectionId = signal<string>('info');
  private observer?: IntersectionObserver;

  observe(sections: HTMLElement[], navbarHeight: number): void {
    this.observer?.disconnect();

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeSectionId.set(entry.target.id);
          }
        }
      },
      {
        rootMargin: `-${navbarHeight}px 0px -60% 0px`,
        threshold: 0,
      },
    );

    sections.forEach((section) => this.observer?.observe(section));
  }

  disconnect(): void {
    this.observer?.disconnect();
  }
}
