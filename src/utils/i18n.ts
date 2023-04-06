import {i18n} from '@lingui/core';
import {en, de, es, pt, ja, ru, ar, id} from 'make-plural/plurals';

export type Language = 'en' | 'de' | 'es' | 'pt' | 'ja' | 'ru' | 'ar' | 'id';

export async function loadLocale(locale: string = 'en') {
  const {messages} = await import(`../assets/locales/${locale}/messages.po`);
  i18n.load(locale, messages);
  i18n.activate(locale);
}

i18n.loadLocaleData({
  en: {plurals: en},
  de: {plurals: de},
  es: {plurals: es},
  pt: {plurals: pt},
  ja: {plurals: ja},
  ru: {plurals: ru},
  id: {plurals: id},
  ar: {plurals: ar},
});
