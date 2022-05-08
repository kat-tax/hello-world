import {i18n} from '@lingui/core';
import {en, es} from 'make-plural/plurals';

export async function loadLocale(locale: string) {
  const {messages} = await import(`assets/locales/${locale}/messages`);
  i18n.load(locale, messages);
  i18n.activate(locale);
  console.log(messages);
}

i18n.loadLocaleData({
  en: {plurals: en},
  es: {plurals: es},
});
