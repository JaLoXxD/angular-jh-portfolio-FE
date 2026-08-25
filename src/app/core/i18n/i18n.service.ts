import { Injectable, computed, effect, signal } from '@angular/core';
import { DEFAULT_LANG, Lang, TranslationDictionary } from './i18n.model';
import { en } from './locales/en';
import { es } from './locales/es';

const STORAGE_KEY = 'portfolio-lang';
const DICTIONARIES: Record<Lang, TranslationDictionary> = { en, es };

function readStoredLang(): Lang {
  if (typeof localStorage === 'undefined') return DEFAULT_LANG;
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === 'en' || stored === 'es' ? stored : DEFAULT_LANG;
}

function resolve(dictionary: TranslationDictionary, path: string): unknown {
  return path.split('.').reduce<unknown>((value, key) => {
    if (value && typeof value === 'object' && key in (value as object)) {
      return (value as Record<string, unknown>)[key];
    }
    return undefined;
  }, dictionary);
}

function interpolate(text: string, params?: Record<string, string | number>): string {
  if (!params) return text;
  return text.replace(/{{\s*(\w+)\s*}}/g, (match, token: string) =>
    token in params ? String(params[token]) : match,
  );
}

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly lang = signal<Lang>(readStoredLang());
  readonly dictionary = computed(() => DICTIONARIES[this.lang()]);

  constructor() {
    effect(() => {
      const lang = this.lang();
      if (typeof document !== 'undefined') {
        document.documentElement.lang = lang;
      }
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, lang);
      }
    });
  }

  setLang(lang: Lang): void {
    this.lang.set(lang);
  }

  translate(key: string, params?: Record<string, string | number>): string {
    const value = resolve(this.dictionary(), key);
    if (typeof value !== 'string') {
      return key;
    }
    return interpolate(value, params);
  }

  list(key: string): string[] {
    const value = resolve(this.dictionary(), key);
    return Array.isArray(value) ? (value as string[]) : [];
  }
}
