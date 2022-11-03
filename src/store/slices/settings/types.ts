import type {PayloadAction} from '@reduxjs/toolkit';
import type {Language} from 'utils/i18n';

export type SettingsStore = {
  scheme?: Scheme,
  language?: Language,
}

export type SettingsScheme = PayloadAction<{scheme: Scheme}>
export type SettingsLanguage = PayloadAction<{language: Language}>

type Scheme = 'light' | 'dark';
