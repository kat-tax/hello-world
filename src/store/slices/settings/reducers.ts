import {SettingsStore, SettingsTheme, SettingsLanguage} from './types';

export function theme(store: SettingsStore, action: SettingsTheme) {
  const {theme} = action.payload;
  store.theme = theme;
}

export function language(store: SettingsStore, action: SettingsLanguage) {
  const {language} = action.payload;
  store.language = language;
}
