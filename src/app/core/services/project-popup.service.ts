import { Injectable, computed, signal } from '@angular/core';
import { PROJECTS } from '../data/projects.data';

@Injectable({ providedIn: 'root' })
export class ProjectPopupService {
  private readonly activeProjectId = signal<string | null>(null);

  readonly isVisible = computed(() => this.activeProjectId() !== null);
  readonly currentProject = computed(() => PROJECTS.find((project) => project.id === this.activeProjectId()) ?? null);

  open(projectId: string): void {
    this.activeProjectId.set(projectId);
  }

  close(): void {
    this.activeProjectId.set(null);
  }
}
