export type Lang = 'en' | 'es';

export interface LangOption {
  code: Lang;
  label: string;
}

export const AVAILABLE_LANGS: LangOption[] = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
];

export const DEFAULT_LANG: Lang = 'en';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TranslationDictionary = Record<string, any>;
