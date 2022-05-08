import {i18n} from '@lingui/core';
import {en, es, de, ar, pt, id, ru} from 'make-plural/plurals';

export async function loadLocale(locale: string) {
  const {messages} = await import(`assets/locales/${locale}/messages`);
  i18n.load(locale, messages);
  i18n.activate(locale);
}

i18n.loadLocaleData({
  en: {plurals: en},
  es: {plurals: es},
  de: {plurals: de},
  ar: {plurals: ar},
  pt: {plurals: pt},
  id: {plurals: id},
  ru: {plurals: ru},
});
