import {SettingsStore, SettingsScheme, SettingsLanguage} from './types';

export function scheme(store: SettingsStore, action: SettingsScheme) {
  const {scheme} = action.payload;
  store.scheme = scheme;
}

export function language(store: SettingsStore, action: SettingsLanguage) {
  const {language} = action.payload;
  store.language = language;
}
