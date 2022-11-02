import type {PayloadAction} from '@reduxjs/toolkit';
import type {Language} from 'utils/i18n';

export type SettingsStore = {
  theme?: Theme,
  language?: Language,
}

export type SettingsTheme = PayloadAction<{theme: Theme}>
export type SettingsLanguage = PayloadAction<{language: Language}>

type Theme = 'light' | 'dark';
