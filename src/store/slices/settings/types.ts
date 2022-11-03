import type {PayloadAction} from '@reduxjs/toolkit';
import type {ColorSchemeName} from 'react-native';
import type {Language} from 'utils/i18n';

export type SettingsStore = {
  scheme?: ColorSchemeName,
  language?: Language,
}

export type SettingsScheme = PayloadAction<{scheme: ColorSchemeName}>
export type SettingsLanguage = PayloadAction<{language: Language}>
